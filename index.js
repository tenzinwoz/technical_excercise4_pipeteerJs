const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://developers.google.com/web/");

  // Type into search box.
  await page.type(".devsite-search-field", "national  geographic");

  // Wait for suggest overlay to appear and click "show all results".
  await page.waitForSelector(".v5yQqb");
  await page.click(".v5yQqb");

  // Wait for the results page to load and display the results.
  await page.waitForSelector(".header-background");

  await page.screenshot({ path: "national-geographic.png" });

  await browser.close();
})();
