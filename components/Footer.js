import FacebookIcon from "@mui/icons-material/Facebook";
import { Container, Grid2, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export function Footer() {
  return (
    <Grid2
      container
      spacing={{ xs: 1, md: 3 }}
      columns={{ xs: 2, sm: 4, md: 5 }}
      className=" p-20 justify-around "
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        sx={{ mr: 2 }}
        className="flex flex-col"
      >
        <Container className="flex items-center " >
          <img alt="logo" src="/suf.png" className="w-36 h-36" />

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "white" }}
            className='font-itc font-bold'
          >
            SUFIANAH
          </Typography>
        </Container>

        <Container className="justify-start flex" >
          <FacebookIcon className="fill-blue-800 w-8 h-8 m-2" ></FacebookIcon>
          <InstagramIcon className="fill-pink-500 w-8 h-8 m-2 " ></InstagramIcon>
          <LinkedInIcon className="fill-blue-300 w-8 h-8 m-2 " ></LinkedInIcon>
        </Container>
      </IconButton>
      <Stack sx={{ marginLeft: 1, alignItems: "flex-start" }}>
        <Typography
          gutterBottom
          variant="body1"
          sx={{ color: "#fff", marginBottom: 2 }}
        >
          Shopping
        </Typography>
        <Link
          href="/about"
          style={{
            color: "#ffffff82",
            textDecoration: "none",
            marginBottom: 10,
          }}
        >
          Products
        </Link>
        <Link
          href="/cart "
          style={{
            color: "#ffffff82",
            textDecoration: "none",
            marginBottom: 10,
          }}
        >
          Cart
        </Link>
      </Stack>

      <Stack sx={{ marginLeft: 1, alignItems: "flex-start" }}>
        <Typography
          gutterBottom
          variant="body1"
          sx={{ color: "#fff", marginBottom: 2 }}
        >
          Catagory
        </Typography>
        <Link
          href="/comingsoon"
          style={{
            color: "#ffffff82",
            textDecoration: "none",
            marginBottom: 10,
          }}
        >
          Attars
        </Link>
        <Link
          href="/project"
          style={{
            color: "#ffffff82",
            textDecoration: "none",
            marginBottom: 10,
          }}
        >
          Cap
        </Link>
        
      </Stack>

      <Stack sx={{ marginLeft: 1, alignItems: "flex-start" }}>
        <Typography
          gutterBottom
          variant="body1"
          sx={{ color: "#fff", marginBottom: 2 }}
        >
          Pages
        </Typography>
        <a
          href=" "
          style={{
            color: "#ffffff82",
            textDecoration: "none",
            marginBottom: 10,
          }}
        >
          About us
        </a>
        <a
          href=" "
          style={{
            color: "#ffffff82",
            textDecoration: "none",
            marginBottom: 10,
          }}
        >
          Contact us
        </a>
        <a
          href=" "
          style={{
            color: "#ffffff82",
            textDecoration: "none",
            marginBottom: 10,
          }}
        >
          Shop
        </a>
      </Stack>
    </Grid2>
  );
}
