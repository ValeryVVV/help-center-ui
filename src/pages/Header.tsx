import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import headerLogo from "../img/headerLogo/logo.svg";
import firstUserAvatar from "../img/headerAvatar/firstUserAvatar.png";
import secondUserAvatar from "../img/headerAvatar/secondUserAvatar.png";
import thirdUserAvatar from "../img/headerAvatar/thirdUserAvatar.png";

export function Header() {
    return (
        <Box sx={{ padding: "20px" }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <img src={headerLogo} className="logo" alt="Vite logo" />
                <AvatarGroup
                    max={3}
                    sx={{
                        "& .MuiAvatar-root": {
                            border: "2px solid #0B0B0F",
                        },
                    }}
                >
                    <Avatar alt="Remy Sharp" src={firstUserAvatar} />
                    <Avatar alt="Travis Howard" src={secondUserAvatar} />
                    <Avatar alt="Cindy Baker" src={thirdUserAvatar} />
                </AvatarGroup>
            </Box>

            <Box pt="100px">
                <Typography variant="h1" sx={{ color: "#B7B9BA" }}>
                    Hello there
                </Typography>
                <Typography variant="h1" sx={{ color: "#FFFFFF" }}>
                    How can we help?
                </Typography>
            </Box>
        </Box>
    );
}
