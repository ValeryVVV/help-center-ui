import { Box, IconButton, Typography } from "@mui/material";
import arrowSendSvg from "../img/sendCard/arrow.svg";
import { SendCardStyled } from "../styles/SendCard/sendCardStyled";

export function SendCard() {
    return (
        <SendCardStyled>
            <Box>
                <Typography
                    sx={{
                        fontFamily: "Inter, Arial, sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "21px",
                        letterSpacing: "0%",
                        color: "#F5F5F5",
                    }}
                >
                    Send us a message
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "Inter, Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "21px",
                        letterSpacing: "0%",
                        color: "#83838D",
                    }}
                >
                    We typically reply within a day
                </Typography>
            </Box>
            <IconButton>
                <img src={arrowSendSvg} alt="Arrow button image" />
            </IconButton>
        </SendCardStyled>
    );
}
