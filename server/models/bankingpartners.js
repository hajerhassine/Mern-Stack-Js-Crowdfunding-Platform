const mongoose = require('mongoose');

const bankingpartnersSchema = mongoose.Schema({

    bank_name: { type: String, required:  true },
    description: { type: String, required:  true },
    

});


module.exports=  mongoose.model("BankingPartner", bankingpartnersSchema);