import {
  Avatar,
  Box,
  Container,
  Rating,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { theme } from "../../constant/color";

export default function Comment() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="flex items-center ">
        <Avatar ></Avatar>
        <Box className="flex flex-col mx-5 ">
          <Rating
            name="read-only"
            sx={{
              ".MuiRating-iconEmpty": {
                color: "#fff",
              },
            }}
            value={2}
            readOnly
          />
          <Typography variant="body" color="secondary" >
            Very lovely fragrance. Would recommend to individuals looking for a
            combination of sweetness and elegance in perfume. I like floral
            perfume, and this one is lovely, its not overpowering. Nice,
            pleasant scent. I am happy with purchase.
          </Typography>
          <Container style={{margin : 0 , padding : 0}}  >
            <Typography variant="body" color="secondary"  >Jack Smith</Typography>
            <Typography variant="body" color="secondary" className="mx-5" >June 03,2024</Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
