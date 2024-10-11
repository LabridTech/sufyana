import { Box, ThemeProvider, Typography } from "@mui/material";
import { theme } from "../../constant/color";

export function CollectionCard(props) {
  return (
    <Box
      component="div"
      style={{ backgroundImage: `url('${props.link}')` , }}
      className=" grid bg-[length:320px_320px] bg-no-repeat h-80 w-80 place-items-end  "
    >
      <ThemeProvider theme={theme}>
        
        <Typography variant="overline" color="secondary" className="text-start mb-2  "  >
        Travel Essentials  Collection
        </Typography>
      </ThemeProvider>
    </Box>
  );
}