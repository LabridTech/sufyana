import { theme } from "@/constant/color";
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
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import PhoneInput from "react-phone-input-2";
import * as React from "react";
import "react-phone-input-2/lib/style.css";
import { setuser } from "@/redux/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Login() {
  const [value, setValue] = React.useState();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cpassword, setCpassword] = React.useState("");
  const dispatch = useDispatch();
  const route = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        method="POST"
        action="/api/writecustomer"
        onSubmit={() => {
          event.preventDefault;
          if (cpassword != password) {
            alert("Not same password");
            return false;
          }
          dispatch(setauth(true))
          dispatch(setuser([email, password]));
          route.push("/order");
        }}
        className="flex items-center justify-center  py-5 flex-col space-y-2 px-5 sm:px-40  "
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className="!text-golden"
        >
          <Image alt="logo" src="/suf.png" width={90} height={90} />
        </IconButton>
        <Container className="flex flex-col items-center border-red-50 border-2 p-10 rounded-lg space-y-8">
          <Typography color="secondary" className="text-center" variant="h4">
            Sign Up
          </Typography>
          <Container
            style={{ padding: 0 }}
            className="flex items-start justify-start"
          >
            <Typography color="primary" variant="subtitle1">
              Contact
            </Typography>
          </Container>
          <TextField
            id="Email"
            name="Email"
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
            id="password"
            name="password"
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
          <TextField
            type="password"
            id="confirmpassword"
            name="confirmpassword"
            required
            label="Confirm Password"
            variant="filled"
            fullWidth
            value={cpassword}
            onChange={() => {
              event.preventDefault, setCpassword(event.target.value);
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
          <Container
            style={{ padding: 0 }}
            className="flex items-start justify-start"
          >
            <Typography color="primary" variant="subtitle1">
              Contact
            </Typography>
          </Container>
          <FormControl style={{ width: "100%" }}>
            <InputLabel id="country-label" className="!text-white">
              Country
            </InputLabel>
            <Select
              labelId="country-label"
              id="country"
              name="country"
              fullWidth
              required
              sx={{
                color: "white",
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                ".MuiSvgIcon-root ": {
                  fill: "white !important",
                },
              }}
            >
              <MenuItem value="Pakistan">Pakistan</MenuItem>
            </Select>
          </FormControl>
          <Container style={{ padding: 0 }} className="flex space-x-4">
            <TextField
              id="fname"
              name="fname"
              required
              label="Full Name"
              variant="filled"
              fullWidth
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
              id="lname"
              name="lname"
              required
              label="Last Name"
              variant="filled"
              fullWidth
              sx={{
                backgroundColor: "#18181c",
                borderRadius: 2,
                marginBottom: 2,
                "& .MuiInputLabel-root ": { color: "#fff" },
                "& .MuiFilledInput-root": { color: "#fff" },
              }}
              style={{ color: "#fff" }}
            />
          </Container>

          <Container
            style={{ padding: 0 }}
            className="flex items-center justify-center space-x-4"
          >
            <TextField
              id="city"
              name="city"
              required
              label="City"
              variant="filled"
              fullWidth
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
              id="address"
              name="address"
              required
              label="Address"
              variant="filled"
              fullWidth
              sx={{
                backgroundColor: "#18181c",
                borderRadius: 2,
                marginBottom: 2,
                "& .MuiInputLabel-root ": { color: "#fff" },
                "& .MuiFilledInput-root": { color: "#fff" },
              }}
              style={{ color: "#fff" }}
            />
          </Container>
          <Container style={{ padding: 0 }}>
            <label className="!text-white"> Phone No * </label>
            <PhoneInput
              country="pk"
              value={value}
              label="Phone no"
              onChange={() => {
                event.preventDefault, setValue;
              }}
              style={{ width: "100%" }}
              disableDropdown
              inputClass="rounded-md bg-zinc-900"
              inputStyle={{
                color: "white",
                backgroundColor: "#1c1c1c",
                border: 0,
                borderBottom: 1,
                borderBottomColor: "black",
                height: 50,
                width: "100%",
              }}
              buttonStyle={{
                backgroundColor: "#1c1c1c",
                border: 0,
                borderBottom: 1,
                borderBottomColor: "black",
              }}
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: true,
              }}
            ></PhoneInput>
          </Container>
          <Button
            variant="contained"
            color="primary"
            className=" text-sm w-1/2 py-2 "
            type="submit"
          >
            Sign Up
          </Button>
          <Typography variant="subtitle3" color="primary">
            <Link href="/login">already have an account ?</Link>
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
