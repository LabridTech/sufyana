import { theme } from "@/components/color";
import {
  Box,
  Button,
  Container,
  Divider,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Cardtable from "@/components/Carttable";
import { ProductSec } from "@/components/productsection";
import { useSelector, useDispatch } from 'react-redux'


export default function Productdetail(props) {

  const data = useSelector((state) => state.counter.cart)
  

  return (
    <Box className="flex flex-col">
      <ThemeProvider theme={theme}>
        <Box className="flex flex-col items-center">
          <Typography variant="h4" color="primary" className="my-10">
            Cart
          </Typography>
          <Divider
            className=" w-3/4 "
            style={{ borderColor: "#FFD700" }}
            variant="middle"
            flexitem
          ></Divider>
          
            <Cardtable cart={data}></Cardtable>
          
          
        </Box>
        <ProductSec title="Discover More" ></ProductSec>
      </ThemeProvider>
    </Box>
  );
}
