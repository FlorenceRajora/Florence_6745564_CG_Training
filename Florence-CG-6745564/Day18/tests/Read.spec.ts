import { test } from "@playwright/test";
import excel from "exceljs"
import path from "path"

// test("reading excel",async ({page})=>{
 
//     let book =new excel.Workbook()
//     await book.xlsx.readFile(path.join(__dirname,"../test data/DATA.xlsx"))
//    let sheet = await book.getWorksheet('Sheet1')
// //    let data = await sheet?.getRow(1).getCell(1).value
//    let data = await sheet?.getRow(1).getCell(1).toString()
//    console.log(data);

// })

// test('reading multiple data',async({page})=>{
//     let book = new excel.Workbook();
//     await book.xlsx.readFile(path.join(__dirname,"../test data/DATA.xlsx"));
//     let sheet=await book.getWorksheet('Sheet2');
//     for(let i=1;i<=sheet?.actualRowCount;i++){
//         for(let j=1;j<=sheet?.actualColumnCount;j++){
//             let data=await sheet?.getRow(i).getCell(j).toString();
//             console.log(data)
//         }
//     }
// })


test("login", async ({ page }) => {

  const book = new excel.Workbook();
 await book.xlsx.readFile(
  path.join(__dirname, "../testdata/DATA.xlsx")
);

  const sheet = book.getWorksheet("Sheet4");

  for (let i = 1; i <= sheet!.actualRowCount; i++) {

    const name = sheet!.getRow(i).getCell(1).value?.toString();
    const email = sheet!.getRow(i).getCell(2).value?.toString();
    const password = sheet!.getRow(i).getCell(3).value?.toString();
    // const url = await sheet.getRow(i).getCell(4).value?.toString();

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

    await page.locator('//input[@type="text"]').first().fill(name!);
    await page.locator('//input[@type="email"]').fill(email!);
    await page.locator('//input[@type="password"]').fill(password!);

  }

})
