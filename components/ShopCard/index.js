import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import { theme } from "../../constant/color";
import Divider from "@mui/material/Divider";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Product } from "../ProductSection/Product";

export default  function Shopcard(props){

  const data = useSelector((state) => state.counter.product)

  console.log(data)

  return(
    <>
    <ThemeProvider theme={theme}>
        <Typography variant="h4" color="primary">
          Our Product
        </Typography>
        <Divider
          className=" w-3/4 "
          style={{ borderColor: "#FFD700" }}
          variant="middle"
          flexitem
        ></Divider>
      </ThemeProvider>
      <Container className="w-3/4 my-10">
        <ThemeProvider theme={theme}>
          <FormControl className="w-36" >
            <InputLabel className="!text-white w-36" id="demo-simple-select-label">
              Collection
            </InputLabel>
            <Select
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
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </FormControl>
            <FormControl className="w-24" >
            <InputLabel className="!text-white" id="demo-simple-select-label">
              Gender
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Gender"
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
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>

          </FormControl>
        </ThemeProvider>
      </Container>
      <Container className="grid sm:grid-cols-3 md:grid-cols-6 gap-5 border-blue-500 items-center justify-evenly p-10 ">
       
        {data.map((item=>  <Product key={item.id} product={item}></Product>))}
        
        
      </Container>
      <Container className="flex flex-row justify-evenly">
        <ThemeProvider theme={theme}>
          <ArrowBackIosNewIcon color="secondary"></ArrowBackIosNewIcon>
          <Typography color="secondary">Page 1/4</Typography>
          <ArrowForwardIosIcon color="secondary"></ArrowForwardIosIcon>
        </ThemeProvider>
      </Container>
    </>
  )
}