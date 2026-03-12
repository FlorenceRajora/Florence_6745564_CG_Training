import {test} from "@playwright/test"

test("keyborad actions", async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');
    let inp = await page.getByRole('textbox', {name:"name"});
    await inp.press('F+l+o+r+e+n+c+e');
    await page.keyboard.press('Tab');
    await page.keyboard.press("f+l+o+r+e+n+c+e+@+g+m+a+i+l+.+c+o+m");
    await page.keyboard.press("Control+a");
    await page.keyboard.press("Control+c");
    await page.keyboard.press('Tab');
    await page.keyboard.press("Control+v");


})
