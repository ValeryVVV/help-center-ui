import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import { SearchContainerStyled } from "../styles/Search/SearchContainer";
import { InputBaseStyled } from "../styles/Search/SearchInputStyled";
import {
    SearchItemStyled,
    SearchItemTextStyled,
} from "../styles/Search/SearchItemStyled";

interface SearchProps {
    search: string;
    setSearch: (value: string) => void;
    filteredItems: string[];
}

export function Search({ search, setSearch, filteredItems }: SearchProps) {
    return (
        <SearchContainerStyled>
            <Box>
                <InputBaseStyled
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
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Box>

            {filteredItems.map((item, index) => (
                <SearchItemStyled key={index}>
                    <SearchItemTextStyled>{item}</SearchItemTextStyled>
                    <ArrowForwardIos
                        sx={{
                            width: "16px",
                            height: "16px",
                            color: "#24FFBC",
                        }}
                    />
                </SearchItemStyled>
            ))}
        </SearchContainerStyled>
    );
}
