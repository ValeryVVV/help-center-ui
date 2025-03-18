import { BottomNavigation, styled } from "@mui/material";

export const BottomNavStyled = styled(BottomNavigation)({
    "&.MuiBottomNavigation-root": {
        backgroundColor: "transparent",
        height: "40px",
    },
    "& .MuiSvgIcon-root": {
        marginBottom: "8px",
        color: "#F5F5F5",
        width: "24px",
        height: "24px",
        transition: "color 0.3s ease-in-out",
    },
    "& .Mui-selected .MuiSvgIcon-root": {
        color: "#24FFBC",
    },
    "& .MuiBottomNavigationAction-label": {
        fontFamily: "Inter, Arial, sans-serif",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "21px",
        letterSpacing: "0%",
        color: "#F5F5F5",
    },
    "& .Mui-selected .MuiBottomNavigationAction-label": {
        fontWeight: 600,
        color: "#24FFBC",
    },
});
