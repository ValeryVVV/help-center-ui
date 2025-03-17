import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: "SF Pro Display, Arial, sans-serif",
        h1: {
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "38px",
            letterSpacing: "0%",
        },
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1DB954",
        },
        background: {
            default: "#F5F5F5",
            paper: "#FFFFFF",
        },
        text: {
            primary: "#000000",
            secondary: "#555555",
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#1DB954",
        },
        background: {
            default: "#0B0B0F",
            paper: "#1A1A22",
        },
        text: {
            primary: "#FFFFFF",
            secondary: "#A0A0A0",
        },
    },
});
