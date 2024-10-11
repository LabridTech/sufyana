import { theme } from "@/constant/color";

import Review from "@/components/Review";
import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import Image from "next/image";
import { ProductSec  } from "@/components/ProductSection";
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Productdetailcard from "@/components/ProductSection/productdetailCard";


export default function Productdetail(props) {
  const onedata =useSelector((state) => state.counter.product).filter((item) => item.id == props.id && item)[0] 
  

  const route = useRouter()
 
     
 

 
  if(!onedata){
    return(
      <Box>
        <Typography>
           Loading....
        </Typography>
      </Box>
    )
  }
  
  return (
    <Box className="flex flex-col ">
      <Productdetailcard product={onedata} ></Productdetailcard>
      <ThemeProvider theme={theme}>
        <Container className="flex flex-col items-center1 w-4/5" >
          <Typography variant="h5" color="secondary" className="py-10">
            Product Details
          </Typography>
          <Typography color="secondary" className="text-xs ">
            Step into a world of unparalleled opulence with Luxurious Elixir, an
            exquisite fragrance that weaves an enchanting symphony of gold and
            luxury. This gilded elixir is a celebration of sophistication,
            crafted with the finest essences and imbued with the allure of
            precious golden hues.
          </Typography>
        </Container>
        <Container className="flex flex-col items-center w-4/5"  >
          <Typography variant="h5" color="secondary" className="py-10">
            Key Notes 
          </Typography>
          <Box sx={{ width : '100%'}} className="flex flex-col md:flex-row justify-around ">
            <Container className="flex flex-col items-center ">
              <Typography variant="h6" color="secondary" className="py-2">
                Top Note
              </Typography>
              <Typography color="secondary" className="text-xs">
                {onedata.topnote}
              </Typography>
              <Image
                width={100}
                height={100}
                alt="note"
                src="/note1.png"
                className="rounded-full m-2"
              ></Image>
            </Container>
            <Container className="flex flex-col items-center">
              <Typography variant="h6" color="secondary" className="py-2">
                Heart Note
              </Typography>
              <Typography color="secondary" className="text-xs   ">
                {onedata.heartnote}
              </Typography>
              <Image
                width={100}
                height={100}
                alt="note"
                src="/note2.png"
                className="rounded-full m-2"
              ></Image>
            </Container>
            <Container className="flex flex-col items-center">
              <Typography variant="h6" color="secondary" className="py-2">
                Base Note
              </Typography>
              <Typography color="secondary" className="text-xs ">
                {onedata.basenote}
              </Typography>
              <Image
                width={100}
                height={100}
                alt="note"
                src="/note3.png"
                className="rounded-full m-2"
              ></Image>
            </Container>
          </Box>
        </Container>
        <Review></Review>
        <ProductSec title="Discover More"></ProductSec>
      </ThemeProvider>
    </Box>
  );
}

export async function getServerSideProps(context){
  return{
    props:{
        id:context.params.id
    }
}
}
