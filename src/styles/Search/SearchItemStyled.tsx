import { Box, styled, Typography } from "@mui/material";

export const SearchItemStyled = styled(Box)({
    marginTop: "8px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "8px",
    padding: "10px 12px",
});

export const SearchItemTextStyled = styled(Typography)({
    fontFamily: "Inter, Arial, sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "21px",
    letterSpacing: "0%",
    color: "#F5F5F5",
});
