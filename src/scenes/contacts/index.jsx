import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";

const Contanctos = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 0.5,
        },
        {
            field: "registrarId",
            headerName: "Registar ID",
            flex: 0.5,
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
            headerAlign: "left",
            align: "left"

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
            field: "address",
            headerName: "Direccion",
            flex: 1
        },
        {
            field: "city",
            headerName: "Ciudad",
            flex: 1
        },
        {
            field: "zipCode",
            headerName: "Codigo postal",
            flex: 1
        },
    ];
    
    return (
        <Box m="20px">
            <Header
                titulo="Contactos"
                subtitulo="Lista de contactos" />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        borde: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borde: "none",
                    },
                    "& .name-colunm--cell": {
                        color: colors.greenAccent[300]
                    },
                    "& .MuiDataGrid-columnHeader": {
                        backgroundColor: "green",
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-virtualScrolletr": {
                        backgroundColor: colors.primary[400],

                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: "green"
                    },
                    "& .MuiDataGrid-toolbarContainer , MuiButton-text": {
                        color: `${colors.grey[200]} !important`,
                    }
                }}
            >
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    )

}

export default Contanctos;