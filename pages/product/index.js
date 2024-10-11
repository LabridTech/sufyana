import { Box, ThemeProvider, Typography,  } from "@mui/material";
import * as React from "react";
import{ Shopcard } from "@/components/ShopCard";
import { Offercard } from "@/components/OfferCard";
import { theme } from "@/constant/color";


export default function Shop() {

  return (
    <Box
      component="div"
      className="flex flex-col justify-center items-center bg-zinc-900 py-10"
    >
      <Shopcard  ></Shopcard>
      <ThemeProvider theme={theme}>
        <Typography variant="h4" color="secondary" className="my-10" >
          Special Offer
        </Typography>
        </ThemeProvider>
      <Offercard></Offercard>
    </Box>
  );
}
