import * as XLSX from "xlsx";

export default function handler(req, res) {
  const workbook = XLSX.readFile("./Book1.xlsx");
  const postarr = Object.values(JSON.parse(JSON.stringify(req.body)));
  console.log(postarr);
  XLSX.utils.sheet_add_aoa(workbook.Sheets["Customer"], [postarr], {
    origin: -1,
  });
  XLSX.writeFile(workbook, "./Book1.xlsx");
  return ;
}
