import { styled } from "@mui/material";

export const StyledHomeIcon = styled("img")<{ selected: boolean }>(
    ({ selected }) => ({
        width: "24px",
        height: "24px",
        transition: "filter 0.3s ease-in-out",
        marginBottom: "8px",
        filter: selected
            ? "brightness(0) saturate(100%) invert(75%) sepia(39%) saturate(300%) hue-rotate(100deg)"
            : "brightness(0) saturate(100%) invert(100%)",
    })
);
