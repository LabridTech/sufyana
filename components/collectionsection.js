import {
  Box,
  Container,
  Grid2,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { theme } from "./color";
import { CollectionCard } from "./Collection";

export function CollectionSec() {
  return (
    <Box
      component="div"
      className="flex flex-col justify-center items-center bg-zinc-900 py-10 "
    >
      <ThemeProvider theme={theme}>
        <Typography variant="h4" color="primary">
          Our Collection
        </Typography>
      </ThemeProvider>
      <Container className="flex  items-center justify-evenly p-10 lg:p-20 ">
        <ThemeProvider theme={theme}>
          <Grid2 container spacing={2}  >
            <CollectionCard  link="/col1.png"></CollectionCard>
            <CollectionCard  link="/col1.png"></CollectionCard>
            <CollectionCard  link="/col1.png"></CollectionCard>
            <CollectionCard  link="/col1.png"></CollectionCard>
            <CollectionCard  link="/col1.png"></CollectionCard>
            <CollectionCard  link="/col1.png"></CollectionCard>
          </Grid2>
        </ThemeProvider>
      </Container>
    </Box>
  );
}
