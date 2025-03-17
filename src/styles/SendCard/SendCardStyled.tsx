import { Card, styled } from "@mui/material";

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
