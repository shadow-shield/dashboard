import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";


const Header = ({ titulo, subtitulo }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);



    return (
        <Box mb="30p">
            <Typography 
            variant="h2" 
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{mb: "10px"}}
            >
                {titulo}</Typography>
            <Typography variant="h5" color="green" >{subtitulo}</Typography>
        </Box>
    );
}


export default Header;