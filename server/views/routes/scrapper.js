const puppeteer = require('puppeteer');
const router = express.Router();


(async () => {
	const browser = await puppeteer.launch({headless: true});
	const page = await browser.newPage();
	await page.goto(`https://www.biat.tn/biat/Fr/credits-immobiliers_62_60`);
	const movies = await page.evaluate(() => {
		
		let elements = document.querySelectorAll('div.news');
		return elements;
	});
	console.log(movies);
	await browser.close();
})();
module.exports= router;

