import { theme } from "@/components/color";
import { Box, Container, ThemeProvider, Typography } from "@mui/material";

export default function Aboutus() {
  return (
    <Box>
      <Box
        component="div"
        style={{ backgroundImage: `url('/welcome.png')` }}
        className=" flex bg-cover flex-col justify-center items-center p-5 sm:p-20 h-102 "
      >
        <ThemeProvider theme={theme}>
          <Typography variant="h4" color="primary">
            About us
          </Typography>
          <Typography
            variant="subtitle3"
            color="secondary"
            className="py-10  px-5 sm:px-20 "
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
      </Box>
      <Box
        component="div"
        className=" flex bg-cover flex-col justify-center items-center p-5 sm:p-20 h-102 "
      >
        <ThemeProvider theme={theme}>
          <Typography variant="h4" color="primary">
            Our Story
          </Typography>
          <Typography
            variant="subtitle3"
            color="secondary"
            className="py-10 px-5 sm:px-20 "
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
      </Box>
      <img src="/ab.png" />
      <ThemeProvider theme={theme}>
        <Container className="flex flex-col items-center ">
          <Typography variant="h5" color="primary" className="py-10">
            What Makes Us Unique
          </Typography>
          <Box className="flex justify-center">
            <Box className="flex flex-col md:flex-row justify-center  w-4/5">
              <Container className="flex flex-col items-center">
                <Typography variant="h6" color="secondary" className="py-2">
                  Locally inspired
                </Typography>
                <Typography color="secondary" className="text-sm">
                  Our perfumes are meticulously crafted to reflect the cultural
                  heritage, traditions, and landscapes of various regions. From
                  the vibrant streets of Marrakech to the serene cherry blossom
                  gardens of Kyoto, each fragrance tells a unique story that
                  resonates with its origin
                </Typography>
              </Container>
              <Container className="flex flex-col items-center">
                <Typography variant="h6" color="secondary" className="py-2">
                  High-Quality Ingrdients
                </Typography>
                <Typography color="secondary" className="text-sm   ">
                  We believe that the key to an extraordinary scent lies in the
                  quality of ingredients. That is why we collaborate with expert
                  perfumers who source the finest and ethically-sourced
                  materials from around the world. We never compromise on the
                  quality of our products, ensuring a long-lasting and luxurious
                  experience.
                </Typography>
              </Container>
              <Container className="flex flex-col items-center">
                <Typography variant="h6" color="secondary" className="py-2">
                  Personlized Service
                </Typography>
                <Typography color="secondary" className="text-sm ">
                  We understand that choosing the perfect scent is a deeply
                  personal experience. Our team of fragrance experts is always
                  ready to assist you in finding a fragrance that complements
                  your personality and style. Whether you are exploring new
                  scents or seeking to rediscover an old favorite, we are here to
                  guide you every step of the way.
                </Typography>
              </Container>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  );
}
