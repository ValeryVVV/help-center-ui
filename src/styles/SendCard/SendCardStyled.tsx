import { Card, styled, Typography } from "@mui/material";

export const SendCardStyled = styled(Card)({
    background: "#1B1E22",
    boxShadow: `
    0px 0px 0px 1px rgba(0, 0, 0, 0.08), 
    0px 2px 8px 0px rgba(0, 0, 0, 0.06)`,
    padding: "16px 20px",
    marginTop: 12,
    cursor: "pointer",
    width: "100%",
    borderRadius: 10,
    border: "1px solid #24FFBC",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
});

export const SendCardTextStyled = styled(Typography)({
    fontFamily: "Inter, Arial, sans-serif",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "21px",
    letterSpacing: "0%",
    color: "#F5F5F5",
});

export const ReplyCardTextStyled = styled(Typography)({
    fontFamily: "Inter, Arial, sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "21px",
    letterSpacing: "0%",
    color: "#83838D",
});
