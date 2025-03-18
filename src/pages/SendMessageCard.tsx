import { Box, IconButton } from "@mui/material";
import arrowSendSvg from "../img/sendCard/arrow.svg";
import {
    ReplyCardTextStyled,
    SendCardStyled,
    SendCardTextStyled,
} from "../styles/SendCard/SendCardStyled";

export function SendCard() {
    return (
        <SendCardStyled>
            <Box>
                <SendCardTextStyled>Send us a message</SendCardTextStyled>
                <ReplyCardTextStyled>
                    We typically reply within a day
                </ReplyCardTextStyled>
            </Box>
            <IconButton>
                <img src={arrowSendSvg} alt="Arrow button image" />
            </IconButton>
        </SendCardStyled>
    );
}
