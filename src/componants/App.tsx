import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { helpItems } from "../api/help-item";
import { BottomNav } from "../pages/BottomNav";
import { Header } from "../pages/Header";
import { Search } from "../pages/Search";
import { SendCard } from "../pages/SendMessageCard";
import { theme } from "../styles/Theme/theme";
import { StyledContainer, StyledPaper } from "../styles/Container/Container";

export function App() {
    const [search, setSearch] = useState("");
    const [navValue, setNavValue] = useState(0);

    const filteredItems = helpItems.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <StyledContainer>
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
