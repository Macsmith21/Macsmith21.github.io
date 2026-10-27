import { chromium } from "playwright-core";

const url = process.env.RESUME_URL ?? "http://localhost:4321/resume";
const out = process.argv[2] ?? "public/resume.pdf";

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage();
await page.goto(url, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.pdf({ path: out, format: "Letter", preferCSSPageSize: true, printBackground: true });
await browser.close();
console.log(`wrote ${out} from ${url}`);
