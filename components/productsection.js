import { Box, Container, Grid2, ThemeProvider, Typography } from "@mui/material";
import { theme } from "./color";
import { Product } from "./Product";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector, useDispatch } from 'react-redux'


export function ProductSec(props) {
 
  const data = useSelector((state) => state.counter.product)

  return (
    <ThemeProvider theme={theme} >
    <Box className="flex flex-col items-center">
          <Typography variant="h4" color="primary" className="my-10">
            {props.title}
          </Typography>
          <Box className="flex justify-center items-center w-full">
            <ArrowBackIosNewIcon
              color="secondary"
              className="h-36 w-12"
            ></ArrowBackIosNewIcon>
            <Grid2 container  rowSpacing={2} columnSpacing={{ xs: 0, sm:3 , md: 5 , lg:6 }}  className=" p-10 w-4/5 ml-5 sm:ml-0 sm:px-20 ">
            {data.filter(item => item.best == true && item ).map((item)=> <Product key={item.id} product={item} ></Product> )}
            </Grid2>
            <ArrowForwardIosIcon
              color="secondary"
              className="h-36 w-12"
            ></ArrowForwardIosIcon>
          </Box>
        </Box>
        </ThemeProvider> 
  );
}


