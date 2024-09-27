import {Box, Typography, useTheme} from "@mui/material"
import Header from "../../components/Header"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from "../../theme"


import React from 'react'

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    
    <Box m="20px">
        <Header titulo="FAQ" subtitulo="Preguntas frecuentes" />
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography
                color={colors.greenAccent[500]} variant="h5" >¿Cómo funciona la plataforma?</Typography>
                
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    haciendo clicks
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
            >
                <Typography
                color={colors.greenAccent[500]} variant="h5" >¿Cómo puedo pagar mis facturas?</Typography>
                
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    por telefono
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
            >
                <Typography
                color={colors.greenAccent[500]} variant="h5" >¿Cómo puedo contactar con el administrador?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    por el telefono
                </Typography>
            </AccordionDetails>
        </Accordion>

        

    </Box>
  )
}

export default FAQ
