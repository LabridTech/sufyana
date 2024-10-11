import { Box } from "@mui/material";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import Head from "next/head";
import { useRouter } from "next/router";

export function Layout(props) {
  const route = useRouter()
  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" ></meta>
      <link rel="icon" href="./suf.png" />
      </Head>
      <main>
        <Box
          component="div"
          className="bg-gradient-to-r to-black from-10% via-40% via-zinc-800 to-70% from-black"
        >
          {route.asPath != '/login' && route.asPath != '/signup' ? <Navbar></Navbar> : null }
          {props.children}
          {route.asPath != '/login' && route.asPath != '/signup' ? <Footer></Footer> : null }
        </Box>
      </main>
    </>
  );
}
