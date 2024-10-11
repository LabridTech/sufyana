import { Box, ThemeProvider, Typography } from "@mui/material";
import { theme } from "../../constant/color";

export function Welcome() {
  return (
    <Box
      component="div"
      style={{ backgroundImage: `url('/welcome.png')` }}
      className=" flex bg-cover flex-col justify-center items-center p-5 sm:p-20 h-lvh sm:h-102 "
    >
      <ThemeProvider theme={theme}>
        <Typography variant="h2" color="primary">
          Welcome to Local Face
        </Typography>
        <Typography variant="subtitle1" color="secondary" className="py-2 sm:py-10 px-5 sm:px-20 " >
          Welcome to Local Face Welcome to Local Face Perfumes, where the spirit
          of victory and triumph come alive through scents that empower and
          inspire. Our curated collection, aptly named Victory Scented, is a
          celebration of success and elegance, designed to unleash your
          victorious essence. Indulge in the sweet taste of triumph with
          captivating fragrances that tell the tale of your achievements. At
          Local Face, we believe that every victory deserves a signature scent,
          and we are dedicated to providing unforgettable fragrances that
          elevate your spirit and empower your journey.
        </Typography>
      </ThemeProvider>
    </Box>
  );
}
