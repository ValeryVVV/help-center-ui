import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    typography: {
        fontFamily: "SF Pro Display, Arial, sans-serif",
        h1: {
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "38px",
            letterSpacing: "0%",
        },
    },
    palette: {
        mode: "light",
        primary: {
            main: "#1DB954",
        },
        background: {
            default: "#F5F5F5",
            paper: "#FFFFFF",
        },
    },
});

export const darkTheme = createTheme({
    typography: {
        fontFamily: "SF Pro Display, Arial, sans-serif",
        h1: {
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "38px",
            letterSpacing: "0%",
        },
    },
    palette: {
        mode: "dark",
        primary: {
            main: "#1DB954",
        },
        background: {
            default: "#0B0B0F",
            paper: "#1A1A22",
        },
    },
});
