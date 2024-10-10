import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import Button from "@mui/material/Button";
import { theme } from "./color";
import { ThemeProvider } from "@mui/material/styles";

export function Our() {
  return (
    <Box
      component="div"
      className="bg-gradient-to-r to-black from-10% via-40% via-zinc-800 to-100% from-black h-102 justify-around flex  flex-col lg:flex-row items-center"
    >
      <img alt="logo" src="/our.png" className=" w-full lg:w-1/2 flex lg:mr-36" />
      <Container className="flex items-center flex-col">
        <ThemeProvider theme={theme}>
          <Typography variant="h2" color="primary">
            Our Value
          </Typography>
          <Typography
            variant="subtitle1"
            color="secondary"
            className="py-10 px-20 "
          >
            Welcome to Local Face Welcome to Local Face Perfumes, where the
            spirit of victory and triumph come alive through scents that empower
            and inspire. Our curated collection, aptly named Victory Scented, is
            a celebration of success and elegance, designed to unleash your
            victorious essence. Indulge in the sweet taste of triumph with
            captivating fragrances that tell the tale of your achievements. At
            Local Face, we believe that every victory deserves a signature
            scent, and we are dedicated to providing unforgettable fragrances
            that elevate your spirit and empower your journey.
          </Typography>
        </ThemeProvider>
      </Container>
    </Box>
  );
}
