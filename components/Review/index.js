import { Box,  Stack, ThemeProvider, Typography } from "@mui/material";
import * as React from "react";
import { theme } from "@/constant/color";
import Comment from "./Comment";

export default function Review() {
  return (
    <Box
      component="div"
      className="flex flex-col justify-center items-center  py-10"
    >
      <ThemeProvider theme={theme}>
        <Typography variant="h4" color="primary" className="my-10">
          Review
        </Typography>
      </ThemeProvider>
      <Stack spacing={5} className="w-3/4" >
        <Comment></Comment>
        <Comment></Comment>
      </Stack>
    </Box>
  );
}
