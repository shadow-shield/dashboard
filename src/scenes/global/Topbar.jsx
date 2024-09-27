import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/SearchOutlined';










const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);



    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* Buscar boton*/}
            <Box
                display="flex"
                bgcolor={colors.primary[400]}
                borderRadius="3px">

                <InputBase sx={{ ml: 2, flex: 1 }} placerholder="Search" />
                <IconButton type="button" sx={{p:1}} >
                    <SearchIcon />
                </IconButton>

            </Box>
             {/* Iconos*/}
             <Box display="flex"  bgcolor="green">
                 <IconButton onClick={colorMode.toggleColorMode} >
                    {theme.palette.mode ==="dark" ? (
                        <DarkModeOutlinedIcon />
                    ):(<LightModeOutlinedIcon />

                    )}
                    
                 </IconButton>
                 <IconButton >
                    <NotificationsOutlinedIcon />
                 </IconButton>
                 <IconButton>
                    <SettingsOutlinedIcon />
                 </IconButton>
                 <IconButton>
                    <PersonOutlineOutlinedIcon />
                 </IconButton>
                 

             </Box>
            
        </Box>
    );
}

export default Topbar;
