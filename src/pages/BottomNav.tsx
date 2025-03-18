import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { BottomNavigationAction } from "@mui/material";
import HomeIcon from "../img/bottomNav/HomeIcon.svg";
import { BottomNavStyled } from "../styles/BottomNavWrapper/BottomNavStyled";
import { BottomNavWrapper } from "../styles/BottomNavWrapper/BottomNavWrapperStyled";
import { StyledHomeIcon } from "../styles/HomeIcon/HomeIconStyled";

interface BottomNavProps {
    navValue: number;
    setNavValue: (value: number) => void;
}

export function BottomNav({ navValue, setNavValue }: BottomNavProps) {
    return (
        <BottomNavWrapper>
            <BottomNavStyled
                showLabels
                value={navValue}
                onChange={(event, newValue) => setNavValue(newValue)}
            >
                <BottomNavigationAction
                    label="Home"
                    icon={
                        <StyledHomeIcon
                            src={HomeIcon}
                            selected={navValue === 0}
                        />
                    }
                />

                <BottomNavigationAction
                    label="Messages"
                    icon={<CommentOutlinedIcon />}
                />
                <BottomNavigationAction
                    label="Help"
                    icon={<HelpOutlineOutlinedIcon />}
                />
            </BottomNavStyled>
        </BottomNavWrapper>
    );
}
