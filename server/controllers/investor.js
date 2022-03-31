
const { Validator } = require('node-input-validator');
const bcrypt=require('bcrypt');
const crypto =require('crypto');
const Investor = require('../models/Investor')

const ErrorResponse = require('../utils/errorResponse');
const sendEmail = require('../utils/sendEmail');
const jwt=require('jsonwebtoken');
exports.registerInvestor = async (req, res, next) => {
  const { username, email, password, lastname,AmountcanInvest,picture,NumCin,ScanCin,Legalname,Typeinvestor,Minrange,Maxrange,SweetSpot,currentinvesting,Position,Company,InvestmentOnRecord,CurrentFundSize,SectorInterest} = req.body;

  try {
    
    const investor = await Investor.create({
      username, email, password, lastname,AmountcanInvest,picture,NumCin,ScanCin,Legalname,Typeinvestor,Minrange,Maxrange,SweetSpot,currentinvesting,Position,Company,InvestmentOnRecord,CurrentFundSize,SectorInterest

    });
  
      
  } catch (err) {
    next(err);
  }
};
exports.loginInvestor = async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password is provided
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try {
    // Check that user exists by email
    const investor = await Investor.findOne({ email }).select("+password");

    if (!investor) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    // Check that password match
    const isMatch = await investor.matchPassword(password);

    if (!isMatch) {
      return next(new ErrorResponse("Invalid credentials", 401));
    }

    sendToken(investor, 200, res);
  } catch (err) {
    next(err);
  }
};



exports.forgotpasswordInvestor =async (req, res, next) =>  {
    const{email} =req.body;
    try{
      const investor = await Investor.findOne({email});
      if (!investor){
        return next(new ErrorResponse("Email could not be sent",404))
      }
      // Reset Token Gen and add to database hashed (private) version of token
      const resetToken = investor.getResetPasswordToken();
      await investor.save();
      // Create reset url to email to provided email
  const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;

  // HTML Message
  const message = `
    <h1>You have requested a password reset</h1>
    <p>Please make a put request to the following link:</p>
    <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
  `;

  try {
    await sendEmail({
      to: investor.email,
      subject: "Password Reset Request",
      text: message,
    });

    res.status(200).json({ success: true, data: "Email Sent" });
  } catch (err) {
    console.log(err);

    investor.resetPasswordToken = undefined;
    investor.resetPasswordExpire = undefined;

    await investor.save();
    return next(new ErrorResponse("Email could not be sent", 500));
  }
} catch (err) {
  next(err);
}
};
exports.resetpasswordInvestor = async(req,res,next)=>{
const resetPasswordToken = crypto
.createHash("sha256")
.update(req.params.resetToken)
.digest("hex");
try {
    const investor = await Investor.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!investor) {
      return next(new ErrorResponse("Invalid Token", 400));
    }

    investor.password = req.body.password;
    investor.resetPasswordToken = undefined;
    investor.resetPasswordExpire = undefined;

    await investor.save();

    res.status(201).json({
      success: true,
      data: "Password Reset Success"
      
    });
  } catch (err) {
    next(err);
  }

} 
const sendToken =( investor, statusCode, res)=>{
    const token =investor.getSignedToken();
res.status(statusCode).json({succes:true,token})
  }

exports.CompleteprofileInvestor = async(req,res,next)=> {
  const user = await Investor.findById(req.params.id);
  if (user) {
    user.gender = req.body.gender || user.gender;
    user.picture = req.body.picture || user.picture;
    user.description = req.body.description || user.description;
    user.birthDate = req.body.birthDate || user.birthDate;
    user.phone = req.body.phone || user.phone;
    user.Legalname= req.body.Legalname || user.Legalname;
    user.NumCin =req.body.NumCin || user.NumCin;
    user.ScanCin = req.body.ScanCin || user.ScanCin;
    //This will encrypt automatically in our model
    
    const updateUser = await user.save();
    res.json({
      _id: updateUser._id,
      gender: updateUser.gender,
      picture: updateUser.picture,
      birthDate: updateUser.birthDate,
      
      phone: updateUser.phone,
      description: updateUser.description,
      NumCin : updateUser.NumCin,
      ScanCin: updateUser.ScanCin,
      Legalname: updateUser.Legalname
 
    });
  } else {
    res.status(401);
    throw new Error('User Not found');
  }
}




exports.updateInvestor = async (req, res) => {
  let newPass=bcrypt.hashSync(req.body.password,10)
  console.log(req.body.password)
  console.log(newPass)
    try {
        const { username, email, password, lastname,AmountcanInvest,picture,NumCin,ScanCin,Legalname,Typeinvestor,Minrange,Maxrange,SweetSpot,currentinvesting,Position,Company,InvestmentOnRecord,CurrentFundSize,SectorInterest} = req.body;
        await Investor.findByIdAndUpdate(req.params.id, { username, email,newPass, lastname,AmountcanInvest,picture,NumCin,ScanCin,Legalname,Typeinvestor,Minrange,Maxrange,SweetSpot,currentinvesting,Position,Company,InvestmentOnRecord,CurrentFundSize,SectorInterest})

        res.json({msg: "Update Success!"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};

exports.getAllInvestor = async (req, res) => {
   
  
  Investor.find().then(investor=>{res.send(investor)}).catch(
       err=>{res.status(500).send({message:err.message || "Error Occured while retrieving user information"})}
       )
};





  exports.current_user=(req,res)=>{
	return res.status(200).send({
		message:'Current user data successfully fetched',
		data:req.user
	});
}
exports.change_password=async(req,res)=>{
	try{
		const v = new Validator(req.body, {
			old_password: 'required',
			new_password: 'required',
			confirm_password: 'required|same:new_password'
		});

		const matched = await v.check();

		if (!matched) {
			return res.status(422).send(v.errors);
		}

		let current_user=req.user;
		if(bcrypt.compareSync(req.body.old_password,current_user.password)){

			let hashPassword=bcrypt.hashSync(req.body.new_password,10);
			await User.updateOne({
				_id:current_user._id
			},{
				password:hashPassword
			});

			let userData=await User.findOne({_id:current_user._id})

			let jwt_secret=process.env.JWT_SECRET||'mysecret';
			let token=jwt.sign({
			  data: userData
			}, jwt_secret, { expiresIn: '12h' });

			return res.status(200).send({
				message:'Password successfully updated',
				data:userData,
				token:token
			});

		}else{
			return res.status(400).send({
				message:'Old password does not matched',
				data:{}
			});
		}



	}catch(err){
		return res.status(400).send({
			message:err.message,
			data:err
		});
	}

}
exports.findInvestorById =async(req,res)=>{
    const investor = await Investor.findById(req.params.id)
    res.status(200).json(investor)
  }
  
  exports.DeleteInvestor = async (req , res) => {
    const investor = await Investor.findById(req.params.id)

    if (!investor) {
      res.status(400)
      throw new Error('investor not found')
    }

    await investor.remove()
    res.status(200).json({id : req.params.id})
}
