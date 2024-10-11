import { theme } from "@/constant/color";
import { setauth } from "@/redux/counterSlice";
import {
  Box,
  Container,
  IconButton,
  TextField,
  ThemeProvider,
  Typography,
  Button,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useSelector, useDispatch } from "react-redux";


export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const route = useRouter()
  const dispatch = useDispatch()

  const useremail = useSelector((state) => state.counter.useremail);
  const userpwd = useSelector((state) => state.counter.userpwd);
 

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="flex items-center justify-center  h-dvh flex-col space-y-2 px-5 sm:px-40  "
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className="text-golden"
        >
          <Image alt="logo" src="/suf.png" width={90} height={90} />
        </IconButton>
        <Container className="flex flex-col items-center border-red-50 border-2 p-10 rounded-lg space-y-8">
          <Typography color="secondary" className="text-center" variant="h4">
            Login
          </Typography>
          <TextField
            id="email"
            required
            label="Email"
            variant="filled"
            fullWidth
            value={email}
            onChange={() => {
              event.preventDefault, setEmail(event.target.value);
            }}
            sx={{
              backgroundColor: "#18181c",
              borderRadius: 2,
              marginBottom: 2,
              "& .MuiInputLabel-root ": { color: "#fff" },
              "& .MuiFilledInput-root": { color: "#fff" },
            }}
            style={{ color: "#fff" }}
          />
          <TextField
            type="password"
            id="pwd"
            required
            label="Password"
            variant="filled"
            fullWidth
            value={password}
            onChange={() => {
              event.preventDefault, setPassword(event.target.value);
            }}
            sx={{
              backgroundColor: "#18181c",
              borderRadius: 2,
              marginBottom: 2,
              "& .MuiInputLabel-root ": { color: "#fff" },
              "& .MuiFilledInput-root": { color: "#fff" },
            }}
            style={{ color: "#fff" }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className=" text-sm w-1/2 py-2 "
            onClick={() => {
              event.preventDefault;
                if (
                  useremail == email &&
                  userpwd == password
                ) {
                  dispatch(setauth(true))
                  route.push('/order')
                }
                else{
                  alert('wrong password')
                }
             
            }}
          >
            Login
          </Button>
          <Typography variant="subtitle3" color="primary">
            <Link href="/signup">want a new acount?</Link>
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
