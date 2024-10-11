import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { addorder } from "@/redux/counterSlice";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";



const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Cardtable(props) {
  const rawdata = useSelector((state) => state.counter.product);
  let [check, setCheck] = React.useState([]);
  const dispatch = useDispatch();
  const route = useRouter();
  const useremail = useSelector((state) => state.counter.useremail);
  const userauth = useSelector((state) => state.counter.auth);

  const data = props.cart.map((values) => {
    return rawdata.filter((item) => item.id == values.productid && item)[0];
  });

  function changecheck(id) {
    event.preventDefault;
    const arr = [...check];
    console.log(check);
    const index = arr.findIndex((value) => {
      return value == id;
    });
    console.log(index);
    if (index > 0) {
      arr.splice(index, 1);
    } else {
      arr.push(id);
    }
    setCheck(arr);
  }

  return (
    <Box className="w-full sm:w-4/5 flex flex-col items-end ">
      {data.map((row) => {
        console.log(row);
        return (
          <Box
            key={row.id}
            className="flex  justify-between "
            sx={{ width: "95%" }}
          >
            <Container className="flex" style={{ padding: 0 }}>
              <Checkbox
                sx={{
                  color: "white",
                  "&.Mui-checked": {
                    color: "white",
                  },
                }}
                onChange={() => {
                  changecheck(row.id);
                }}
                {...label}
              />
              <Image
                alt="product image"
                src={row.image}
                width={60}
                height={60}
              ></Image>
              <Container>
                <Typography variant="h6" className="text-white">
                  {row.name}
                </Typography>
                <Typography variant="body" className="text-white">
                  {row.collection}
                </Typography>
              </Container>
            </Container>
            <Container className="flex space-y-4 flex-col md:flex-row` items-center">
              <Container style={{padding : 0}} className="flex w-1/2 items-center flex-col">
                <Typography variant="subtitle1" className="text-white">
                  {"Rs " + row.price}
                </Typography>
                <DeleteOutlineIcon className="fill-white" ></DeleteOutlineIcon>
              </Container>

              <Typography variant="subtitle2" className="text-white">
                {"Quantity : " + row.qty}
              </Typography>
            </Container>
          </Box>
        );
      })}

      <Box className="flex justify-end w-3/4 mx-5 sm:mx-1 my-10 sm:my-5 ">
        <Button
          color="primary"
          onClick={() => {
            event.preventDefault,
              dispatch(addorder([...check])),
              userauth
                ? route.push("/order")
                : useremail
                ? route.push("/login")
                : route.push("/signup");
          }}
          variant="contained"
        >
          Proceed To Checkout
        </Button>
      </Box>
    </Box>
  );
}
