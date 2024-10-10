import { theme } from "@/components/color";
import { Box, Container, ThemeProvider, Typography } from "@mui/material";

export default function Ourservice() {
  return (
    <Box>
      <Box
        component="div"
        style={{ backgroundImage: `url('/welcome.png')` }}
        className=" flex bg-cover flex-col justify-center items-center p-10 sm:p-20 h-102 "
      >
        <ThemeProvider theme={theme}>
          <Typography variant="h4" color="primary">
            Our Service
          </Typography>
          <Typography
            variant="subtitle3"
            color="secondary"
            className="py-10 px-2 md:px-20 "
          >
             Perfumes, where the
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
      <Container
        component="div"
        className=" my-10 flex-col md:flex-row h-102 justify-around flex items-center"
      >
        <Container className="flex  flex-col">
          <ThemeProvider theme={theme}>
            <Typography variant="h3" className="my-4" color="primary">
              01
            </Typography>
            <Typography variant="h5" color="secondary">
              Personal Fragrance Consultations
            </Typography>
            <Typography
              variant="subtitle3"
              color="secondary"
              className="py-10 "
            >
              Choosing the right fragrance can be a deeply personal experience.
              Our team of knowledgeable fragrance experts is here to guide you
              through this process. Whether you are looking for a signature
              scent, a gift for a loved one, or need assistance in exploring new
              fragrance families, our consultants will take the time to
              understand your preferences and suggest the perfect matches.
            </Typography>
          </ThemeProvider>
        </Container>
        <img alt="logo" src="/our.png" className="w-full sm:w-1/2 flex sm:ml-36" />
      </Container>
      <Container
        component="div"
        className=" my-10 flex-col md:flex-row h-102 justify-around flex items-center"
      >
        <img alt="logo" src="/our.png" className="w-full sm:w-1/2 flex  sm:mr-36" />
        <Container className="flex  flex-col">
          <ThemeProvider theme={theme}>
            <Typography variant="h3" className="my-4" color="primary">
              02
            </Typography>
            <Typography variant="h5" color="secondary">
              Custom Fragrance Creation
            </Typography>
            <Typography
              variant="subtitle3"
              color="secondary"
              className="py-10 "
            >
              Experience the art of bespoke perfumery with our custom fragrance
              creation service. Work closely with our skilled perfumers to craft
              a scent that is uniquely yours. From selecting individual notes to
              blending them into a harmonious symphony, we will help you bring
              your fragrance vision to life. Whether it is a special occasion, a
              gift for someone dear, or simply a way to indulge in luxury, a
              custom-created perfume is an unforgettable experience.
            </Typography>
          </ThemeProvider>
        </Container>
      </Container>
      <Container
        component="div"
        className=" my-10 flex-col md:flex-row h-102 justify-around flex items-center"
      >
        <Container className="flex  flex-col">
          <ThemeProvider theme={theme}>
            <Typography variant="h3" className="my-4" color="primary">
              03
            </Typography>
            <Typography variant="h5" color="secondary">
              Scented Gift Selection
            </Typography>
            <Typography
              variant="subtitle3"
              color="secondary"
              className="py-10 "
            >
              Looking for a meaningful gift that leaves a lasting impression?
              Our scented gift selection service is designed to help you find
              the perfect fragrance gift for any occasion. Whether it is a
              birthday, anniversary, or a gesture of appreciation, our experts
              will assist you in choosing a fragrance that perfectly conveys
              your sentiments and makes the recipient feel cherished.
            </Typography>
          </ThemeProvider>
        </Container>
        <img alt="logo" src="/our.png" className="w-full sm:w-1/2 flex sm:ml-36" />
      </Container>
      <Container
        component="div"
        className=" my-10 flex-col md:flex-row  h-102 justify-around flex items-center"
      >
        <img alt="logo" src="/our.png" className="w-full sm:w-1/2 flex sm:mr-36" />
        <Container className="flex  flex-col">
          <ThemeProvider theme={theme}>
            <Typography variant="h3" className="my-4" color="primary">
              04
            </Typography>
            <Typography variant="h5" color="secondary">
              Eco-friendly Initiatives
            </Typography>
            <Typography
              variant="subtitle3"
              color="secondary"
              className="py-10 "
            >
              At Local Face, we are committed to sustainability and
              eco-conscious practices. As part of our services, we offer
              guidance on selecting environmentally friendly and cruelty-free
              fragrances. We partner with brands that share our values and are
              dedicated to making a positive impact on the planet.
            </Typography>
          </ThemeProvider>
        </Container>
      </Container>
    </Box>
  );
}
