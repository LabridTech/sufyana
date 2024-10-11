import * as XLSX from "xlsx";
import path from 'path'

export default function handler(req, res) {
  const p=path.join(process.cwd(),'Book1.xlsx');
  const workbook = XLSX.readFile(p);
  XLSX.utils.sheet_add_aoa(workbook.Sheets["Order"], [req.body.data], {
    origin: -1,
  });
  XLSX.writeFile(workbook, p);
  return res.redirect("/");
}
