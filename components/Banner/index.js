import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import Button from "@mui/material/Button";
import { theme } from "../../constant/color";
import {  ThemeProvider } from '@mui/material/styles';

export function Banner() {
  return (
    <Box
      component="div"
      className="bg-gradient-to-r to-black from-10% via-40% via-zinc-800 to-70%  from-black h-full sm:h-102 justify-around flex flex-col sm:my-5 items-center sm:flex-row"
    >
      <Container className="flex justify-between flex-col items-around  !w-full !sm:w-1/2  ">
        <Box>
          <Typography className="!text-white" variant="h2">
            Elevate Your Spirit with Victory Scented Fragrances!
          </Typography>
          <Typography className="!text-white my-5 sm:my-0 h-24" variant="h5">
            Shop now and embrace the sweet smell of victory with Local Face.
          </Typography>
        </Box>
        
        <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className=" text-sm w-24 py-2 ">
          Shop
        </Button>
        </ThemeProvider>
      </Container>
      <img alt="logo" src="/backimg.png" className="w-80 flex mr-0 my:5 sm:my-0 sm:mr-36" />
    </Box>
  );
}
