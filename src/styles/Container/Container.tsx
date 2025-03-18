import { Container, Paper, styled } from "@mui/material";

export const StyledContainer = styled(Container)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    margin: "0px",
    maxHeight: "704px",
});

export const StyledPaper = styled(Paper)({
    padding: "16px",
    borderRadius: "16px",
    background: "linear-gradient(180deg, #162526 0%, #1A1A22 90%)",
    maxWidth: "400px",
    minWidth: "400px",
    width: "100%",
    border: "1px solid #15171B",
    boxShadow: "0px 5px 40px rgba(0, 0, 0, 0.16)",
});
