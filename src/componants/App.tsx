import { CssBaseline, IconButton } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { helpItems } from "../api/help-item";
import { BottomNav } from "../pages/BottomNav";
import { Header } from "../pages/Header";
import { Search } from "../pages/Search";
import { SendCard } from "../pages/SendMessageCard";
import { darkTheme, lightTheme } from "../styles/Theme/theme";
import { StyledContainer, StyledPaper } from "../styles/Container/Container";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export function App() {
    const [search, setSearch] = useState("");
    const [navValue, setNavValue] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const filteredItems = helpItems.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <StyledContainer>
                <IconButton
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    sx={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        color: "primary.main",
                    }}
                >
                    {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
                <StyledPaper>
                    <Header />
                    <SendCard />

                    <Search
                        search={search}
                        setSearch={setSearch}
                        filteredItems={filteredItems}
                    />
                    <BottomNav navValue={navValue} setNavValue={setNavValue} />
                </StyledPaper>
            </StyledContainer>
        </ThemeProvider>
    );
}
