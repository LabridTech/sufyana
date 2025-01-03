import { theme } from "@/constant/color";
import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import Link from "next/link";

export function Product(props) {
  return (
    <Box
      component="div"
      className="bg-gradient-to-r to-neutral-900 from-20% via-40% via-zinc-800 to-60% from-neutral-900 w-52 h-80  flex flex-col  justify-evenly rounded-2xl "
    >
      <Link href={"/productdetail/" + props.product.id}>
        <img src={props.product.image} className="my-2 w-96" />
        <ThemeProvider theme={theme}>
          <Typography color="secondary" varient="h5" className="text-center">
            {props.product.name}
          </Typography>
          <Container className="flex flex-row justify-evenly ">
            <Typography
              color="primary"
              varient="subtitle3"
              className="text-center"
            >
              {"Rs " + props.product.price}
            </Typography>
            <Typography
              color="secondary"
              varient="subtitle3"
              className="text-center ml-2"
            >
              {props.product.amount + "ml"}
            </Typography>
          </Container>
        </ThemeProvider>
      </Link>
    </Box>
  );
}
