import { theme } from "@/constant/color";
import * as React from "react";
import {
  Box,
  Container,
  ThemeProvider,
  Typography,
  Rating,
  Button,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Divider from "@mui/material/Divider";
import { Circle } from "@mui/icons-material";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { addcart } from "@/redux/counterSlice";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Productdetailcard(props) {
  let [qty, setQty] = React.useState(0);
  const shapeStyles = { bgcolor: "primary.main", width: 40, height: 40 };
  const shapeCircleStyles = { borderRadius: "50%" };
  const circle = (
    <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
  );

  const dispatch = useDispatch();
  const route = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="div"
        className="  flex flex-col  lg:flex-row items-center justify-center  "
      >
        <Container
          style={{
            width: "auto",
            margin: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={props.product.image} className="  rounded-xl h-dvh" />
          <Container
            style={{
              width: "auto",
              margin: 0,
              display: "flex",
              color: "white",
            }}
          >
            {/* <Circle className="!w-5 mx-2 border-2 !rounded-full"></Circle>
            <Circle className="!w-5"></Circle> */}
          </Container>
        </Container>

        <Box className="flex flex-col h-dvh items-center sm:items-start sm:mx-1 justifiy-evenly w-96   ">
          <Typography variant="h4" color="secondary" className="py-10">
            {props.product.name}
          </Typography>
          <Typography color="secondary" className="text-md mx-10 sm:mx-1 ">
            {props.product.detail}
          </Typography>
          <Rating
            name="read-only"
            sx={{
              ".MuiRating-iconEmpty": {
                color: "#fff",
              },
              marginBlock: 3,
            }}
            value={2}
            readOnly
          />
          <Box className="my-10 gap-2 flex">
            <Container style={{ margin: 0, padding: 0, width: "auto" }}>
              <Image
                alt="small bottle"
                width={70}
                height={70}
                src={props.product.image}
              />
              <Divider
                className=" w-8 "
                style={{ borderColor: "#FFD700" }}
                variant="middle"
                flexitem
              ></Divider>
            </Container>
            <Container style={{ margin: 0, padding: 0 }}>
              <Image
                alt="medium bottle"
                width={70}
                height={70}
                src={props.product.image}
              />
            </Container>
          </Box>

          <Typography variant="subtitle1" className="!my-5" color="primary">
            {"Rs " + props.product.price}
          </Typography>

          <TextField
            id="input-with-icon-textfield"
            label="Quatity"
            type="number"
            onChange={() => {
              event.preventDefault, setQty(event.target.value);
            }}
            value={qty}
            sx={{
              // Root class for the input field
              "& .MuiOutlinedInput-root": {
                color: "#fff",
                fontFamily: "Arial",
                fontWeight: "bold",
                // Class for the border around the input field
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#fff",
                  borderWidth: "2px",
                },
              },
              // Class for the label of the input field
              "& .MuiInputLabel-outlined": {
                color: "#fff",
                fontWeight: "bold",
              },
            }}
          />
          <Button
            onClick={() => {
              event.preventDefault,
                dispatch(
                  addcart({ productid: props.product.id, quantity: qty })
                ),
                route.push("/cart");
            }}
            className="!bg-white !my-10"
          >
            Add To Cart
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
