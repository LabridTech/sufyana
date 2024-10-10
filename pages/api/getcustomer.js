import * as XLSX from 'xlsx';
import * as fs from 'fs'

export default function handler(req, res) {
  const workbook = XLSX.readFile('Book1.xlsx')
   const workSheetname = workbook.SheetNames[2]
   const worksheet = workbook.Sheets[workSheetname];
   const filedata = XLSX.utils.sheet_to_json(worksheet , {header : 1} )
   const head = filedata[0];
   filedata.splice(0,1); 
   const jsondata = [];
   filedata.map((value)=>{
      jsondata.push({ 
        [head[0]] :  value[0] , 
        [head[1]] :  value[1] ,
        [head[2]] :  value[2] ,
        [head[3]] :  value[3] ,
        [head[4]] :  value[4] ,
        [head[5]] :  value[5] ,
        [head[6]] :  value[6] ,
        [head[7]] :  value[7] ,
        [head[8]] :  value[8] ,
        [head[9]] :  value[9] ,
      })
   })
  return res.status(200).json({   jsondata });
}