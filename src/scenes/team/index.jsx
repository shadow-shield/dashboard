import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlineIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlineIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlineIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {
            field: "id",
            headerName: "ID"
        },
        {
            field: "name",
            headerName: "Nombre",
            flex: 1,
            cellClassName: "name-colum--cell"
        },
        {
            field: "age",
            headerName: "Edad",
            type: "number",
            headerAlign:"left",
            align:"left"
            
        },
        {
            field: "phone",
            headerName: "Telefono",
            flex: 1
        },
        {
            field: "email",
            headerName: "Correo",
            flex: 1
        },
        {
            field: "access",
            headerName: "Cargo",
            renderCell:({row :{access}})=>{
                return (
                    <Box
                    width="100%"
                    m="8px 2px"
                    p="5px"
                    display="flex"
                    justifyContent="center"
                    backgroundColor={
                        access==="admin"
                        ? "green"
                        : "green"
                    }
                    borderRadius="4px"
                    >
                    {access==="admin" && <AdminPanelSettingsOutlineIcon />}
                    {access==="manager" && <SecurityOutlineIcon />}
                    {access==="user" && <LockOpenOutlineIcon />}
                    <Typography color={colors.grey[100]} sx={{ml:"5px"}}>
                        {access}
                    </Typography>
                    </Box>
                );
            }
        }
    ];
    return(
        <Box m="20px">
            <Header
                titulo="Equipo"
                subtitulo="Gestionar a los miembros del equipo" />
            <Box 
            m="40px 0 0 0" 
            height="75vh"
            sx={{
                "& .MuiDataGrid-root" :{
                    borde:"none",
                },
                "& .MuiDataGrid-cell" :{
                    borde:"none",
                },
                "& .name-colunm--cell" :{
                    color:colors.greenAccent[300]
                },
                "& .MuiDataGrid-columnHeader" :{
                    backgroundColor: "green",
                    borderBottom:"none"
                },
                "& .MuiDataGrid-virtualScrolletr" :{
                    backgroundColor: colors.primary[400],
                    
                },
                "& .MuiDataGrid-footerContainer" :{
                    borderTop:"none",
                    backgroundColor: "green"
                },
            }}
            >
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns}
                />
            </Box>
        </Box>
    )

}

export default Team;