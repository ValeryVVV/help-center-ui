import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { BottomNavWrapper } from "../styles/BottomNavWrapper/bottomNavWrapperStyled";
import { Home } from "@mui/icons-material";

interface BottomNavProps {
    navValue: number;
    setNavValue: (value: number) => void;
}

export function BottomNav({ navValue, setNavValue }: BottomNavProps) {
    return (
        <BottomNavWrapper>
            <BottomNavigation
                showLabels
                sx={{
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
                }}
                value={navValue}
                onChange={(event, newValue) => setNavValue(newValue)}
            >
                <BottomNavigationAction label="Home" icon={<Home />} />
                <BottomNavigationAction
                    label="Messages"
                    icon={<CommentOutlinedIcon />}
                />
                <BottomNavigationAction
                    label="Help"
                    icon={<HelpOutlineOutlinedIcon />}
                />
            </BottomNavigation>
        </BottomNavWrapper>
    );
}
