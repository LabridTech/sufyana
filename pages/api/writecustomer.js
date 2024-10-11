import * as XLSX from "xlsx";
import path from 'path'

export default function handler(req, res) {
  const p=path.join(process.cwd(),'Book1.xlsx');
  const workbook = XLSX.readFile(p);
  const postarr = Object.values(JSON.parse(JSON.stringify(req.body)));
  console.log(postarr);
  XLSX.utils.sheet_add_aoa(workbook.Sheets["Customer"], [postarr], {
    origin: -1,
  });
  XLSX.writeFile(workbook, p);
  return ;
}
