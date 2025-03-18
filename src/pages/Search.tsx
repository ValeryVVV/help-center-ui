import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputBase, Typography } from "@mui/material";
import { SearchContainerStyled } from "../styles/Search/SearchContainer";

interface SearchProps {
    search: string;
    setSearch: (value: string) => void;
    filteredItems: string[];
}

export function Search({ search, setSearch, filteredItems }: SearchProps) {
    return (
        <SearchContainerStyled>
            <Box>
                <InputBase
                    endAdornment={
                        <SearchIcon
                            sx={{
                                width: "16px",
                                height: "16px",
                                color: "#24FFBC",
                            }}
                        />
                    }
                    placeholder="Search for help"
                    fullWidth
                    sx={{
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
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Box>

            {filteredItems.map((item, index) => (
                <Box
                    key={index}
                    sx={{
                        marginTop: "8px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderRadius: "8px",
                        padding: "10px 12px",
                        fontFamily: "Inter, Arial, sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "21px",
                        letterSpacing: "0%",
                        color: "#F5F5F5",
                    }}
                >
                    <Typography>{item}</Typography>
                    <ArrowForwardIos
                        sx={{
                            width: "16px",
                            height: "16px",
                            color: "#24FFBC",
                        }}
                    />
                </Box>
            ))}
        </SearchContainerStyled>
    );
}
