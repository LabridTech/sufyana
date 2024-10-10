import { Container, Typography  } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { theme } from "./color";
import { ThemeProvider } from "@mui/material/styles";

export function Offercard() {
  return (
    <Box
      component="div"
      className="bg-gradient-to-r to-black from-10% via-40% via-zinc-800 to-100%  w-3/4   from-black h-102 items-start  flex "
    >
      <img alt="logo" src="/our.png" className="w-1/2 flex mr-12" />
      <Container className="flex items-start justify-evenly flex-col my-5  ">
        <ThemeProvider theme={theme}>
          <Typography variant="h5" color="secondary" className="py-5" >
          Limited Time Offer: 20% OFF on Aqua Serenity Perfume!
          </Typography>
          <Typography variant="h4" color="secondary" style={{color : 'blue'}} className="py-5" >
         Aqua Serenity 
          </Typography>
          <Typography variant="subtitle2" color="secondary" className="py-5" >
          Limited Time Offer: 20% OFF on Aqua Serenity Perfume!
          </Typography>
          <Button variant="outlined" >
            Know More
          </Button>
        </ThemeProvider>
      </Container>
    </Box>
  );
}
