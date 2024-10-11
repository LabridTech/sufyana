import Box from "@mui/material/Box";
import { Banner } from "@/components/Banner";
import { Welcome } from "@/components/Welcome";
import { Our } from "@/components/OurValues";
import { ProductSec } from "@/components/ProductSection";
import { add, setuser } from "../redux/counterSlice";
import * as React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { CollectionSec } from "@/components/CollectionSection";


export default function Home() {
  const dispatch = useDispatch();
  const productdata = useSelector((state) => state.counter.product);
  const user = useSelector((state) => state.counter.useremail);

  React.useEffect(() => {
    let products;
    console.log(user);
    if (productdata.length == 0) {
      products = axios.get("/api/hello").then((res) => {
        res.data.jsondata.forEach((element) => {
          dispatch(add(element));
        });
      });
      axios.get("/api/getcustomer").then((res) => {
        res.data.jsondata.forEach((element) => {
          dispatch(setuser([element.email,element.password]))
        });
      });
    }
  }, []);

  return (
    <Box component="div">
      <Banner></Banner>
      <Welcome></Welcome>
      <Our></Our>
      <ProductSec title="Best selling Product"></ProductSec>
      <CollectionSec></CollectionSec>
    </Box>
  );
}
