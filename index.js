const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://google.com");

  // Type into search box.
  await page.type(".gLFyf", "national  geographic");
  await page.keyboard.press("Enter");

  // Wait for the class to load and click on the result
  await page.waitForSelector(".CCgQ5");
  await page.click(".CCgQ5");

  // Wait for the class to be visible
  await page.waitForSelector("#header-background");
  //Then take screenshot
  await page.screenshot({ path: "national-geographic.png" });

  await browser.close();
})();
