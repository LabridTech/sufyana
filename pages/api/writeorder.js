import * as XLSX from "xlsx";

export default function handler(req, res) {
  const workbook = XLSX.readFile("./Book1.xlsx");
  XLSX.utils.sheet_add_aoa(workbook.Sheets["Order"], [req.body.data], {
    origin: -1,
  });
  XLSX.writeFile(workbook, "./Book1.xlsx");
  return res.redirect("/");
}
