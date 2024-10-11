import { theme } from "@/constant/color";
import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import * as React from "react"
import { useRouter } from "next/router";
import { removeorder } from "@/redux/counterSlice";
import axios from 'axios';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

export default function Order() {
  const rawdata = useSelector((state) => state.counter.order)[0];
  const route = useRouter()
  const product = useSelector((state) => state.counter.product);
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.counter.cart);
  const useremail = useSelector((state) => state.counter.useremail);
  const Delivarytype = React.useRef()  
  if(rawdata){
    rawdata.push[0]
  }
  const date = new Date();
  let total = 0;
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let completeorder = []
  typeof rawdata != 'undefined' ?  rawdata.forEach(id => {
    const onedata = product.filter((item) => item.id == id && item)[0];
    const cartdata = cart.filter((item) => item.productid == id && item)[0];
    completeorder.push(onedata.id)
    completeorder.push(onedata.name)
    completeorder.push(onedata.price)
    completeorder.push(cartdata.quantity)
    total= total+(onedata.price * cartdata.quantity)
  }) : null

  completeorder.push(total)
  completeorder.push(useremail)

  React.useEffect(
    ()=>{
      const handleRouteChangeError = ()=>{
        dispatch(removeorder())
      }

      route.events.on("routeChangeStart",handleRouteChangeError);
      return () =>{
        route.events.off("routeChangeStart", handleRouteChangeError);
      }
    } , [route]
  )
  
  
  

 
  return (
    <ThemeProvider theme={theme}>
      <Box className="w-full sm:w-4/5 m-1 sm:m-20">
        <Typography className="text-2xl sm:text-4xl" color="secondary">
        { "Order Date : "  + months[date.getMonth()] + " " + date.getDate() + " , " + date.getFullYear()}
        </Typography>
        
        <Divider
          style={{ borderColor: "#FFD700" }}
          variant="full"
          flexitem
        ></Divider>

        { typeof rawdata != 'undefined' ?  rawdata.map((id) => {
          const onedata = product.filter((item) => item.id == id && item)[0];
          const cartdata = cart.filter((item) => item.productid == id && item)[0];
          return (
            <Container
              key={id}
              style={{ padding: 0 }}
              className="flex my-5 space-x-2 justify-between"
            >
              <Container className="flex">
                <Image width={60} height={60} alt="product image"  src={onedata.image}></Image>
                <Stack>
                  <Typography color="secondary" variant="h6">
                    {onedata.name}
                  </Typography>
                  <Typography color="secondary" variant="caption">
                    {onedata.amount + " ml"}
                  </Typography>
                </Stack>
              </Container>

              <Stack>
                <Typography color="secondary" className="w-36" variant="h6">
                  {"Rs " + onedata.price}
                </Typography>
                <Typography color="secondary" variant="caption">
                 {"Qty : " + cartdata.quantity}
                </Typography>
              </Stack>
            </Container>
          ); 
        }) :
        null }

        <Divider
          style={{ borderColor: "#FFD700" }}
          variant="full"
          flexitem
        ></Divider>
        <Container className="flex justify-between my-10">
          <Box>
            <FormControl className="w-48" >
            <InputLabel className="text-white " id="demo-simple-select-label">
            Payment Method
            </InputLabel>
            <Select
              inputRef={Delivarytype}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Collection"
              sx={{
                color: "white",
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                ".MuiSvgIcon-root ": {
                  fill: "white !important",
                },
              }}
            >
              <MenuItem value="Cash on Delivary">Cash on Delivary</MenuItem>
              <MenuItem value="Card">Card</MenuItem>
            </Select>
            </FormControl>
          </Box>
          <Box>
            <Typography color="secondary" variant="h6">
              Delivary
            </Typography>
            <Typography color="secondary" variant="caption">
              Address
            </Typography>
            <Typography color="secondary" variant="subtitle2">
              123-F Town
            </Typography>
            <Typography color="secondary" variant="subtitle2">
              Lahore Pakistan
            </Typography>
          </Box>
        </Container>
        <Divider
          style={{ borderColor: "#FFD700" }}
          variant="full"
          flexitem
        ></Divider>
        <Container className="flex justify-end my-10">
          <Box>
            <Typography color="secondary" variant="h6">
              Order Summary
            </Typography>
            <Container
              style={{ padding: 0 }}
              className="flex justify-between my-2"
            >
              <Typography color="secondary" variant="subtitle2">
                Subtotal
              </Typography>
              <Typography color="secondary" variant="subtitle2">
                {"Rs " + total } 
              </Typography>
            </Container>
            <Container
              style={{ padding: 0 }}
              className="flex justify-between my-2"
            >
              
              <Typography color="secondary" variant="subtitle2">
                Delivary
              </Typography>
              <Typography color="secondary" variant="subtitle2">
                Rs 100
              </Typography>
            </Container>
            <Container
              style={{ padding: 0 }}
              className="flex justify-between my-2"
            >
              <Typography color="secondary" variant="subtitle2">
                Tax
              </Typography>
              <Typography color="secondary" variant="subtitle2">
                {"Rs " + total*1/10 }
              </Typography>
            </Container>
            <Container
              style={{ padding: 0 }}
              className="flex justify-between my-4"
            >
              <Typography color="secondary" variant="h6">
                Total
              </Typography>
              <Typography color="primary" variant="h6">
                {"Rs " + (total + total*1/10 + 100)}
              </Typography>
            </Container>
          </Box>
        </Container>
        <Container style={{ padding: 0 }} className="flex justify-center">
          <Button variant="contained" onClick={()=>{ event.preventDefault, completeorder.push(Delivarytype.current.value) , axios.post('/api/writeorder' , {data : completeorder} ) , route.push('/') }} >Buy it</Button>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
