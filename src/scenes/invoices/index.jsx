import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invocies = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {
            field: "id",
            headerName: "ID",

        },
        {
            field: "name",
            headerName: "Nombre",
            flex: 1,
            cellClassName: "name-colum--cell"
        },
        {
            field: "email",
            headerName: "Correo",
            flex: 1
        },
        {
            field: "cost",
            headerName: "costo",
            flex: 1,
            renderCell: (params) => (
                <Typography color="green">
                    ${params.row.cost}
                </Typography>
            ),

        },
        {
            field: "phone",
            headerName: "Telefono",
            flex: 1
        },

        {
            field: "date",
            headerName: "Fecha",
            flex: 1
        },

    ];

    return (
        <Box m="20px">
            <Header
                titulo="FACTURAS"
                subtitulo="Listado de facturas" />
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
                    "& .MuiCheckbox-root": {
                        color: `green !important`,
                    },
                }}
            >
                <DataGrid
                    checkboxSelection
                    rows={mockDataInvoices}
                    columns={columns}

                />
            </Box>
        </Box>
    )

}

export default Invocies;