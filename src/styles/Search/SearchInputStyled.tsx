import { InputBase, styled } from "@mui/material";

export const InputBaseStyled = styled(InputBase)({
    backgroundColor: "#1B1E22",
    borderRadius: "8px",
    padding: "10px 12px",
    fontFamily: "Inter, Arial, sans-serif",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "21px",
    letterSpacing: "0%",
    color: "#F5F5F5",
    "& input::placeholder": {
        color: "#F5F5F5",
        opacity: 1,
    },
});
