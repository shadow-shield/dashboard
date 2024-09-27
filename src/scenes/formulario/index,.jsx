import { Box, Button, TextField } from "@mui/material"
import { Formik } from "formik"
import * as yup from "yup"
import useMediaQuery from "@mui/material/useMediaQuery"
import Header from "../../components/Header"

const initialValues = {
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    ciudad: "",
};

const phoneRegExp = /^(\+?\d{1,3}[-.\s]?)?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

const userSchema = yup.object().shape({
    nombre: yup.string().required("El nombre es requerido"),
    email: yup.string().email("El email no es válido").required("El email es requerido"),
    telefono: yup.string().matches(phoneRegExp, "El teléfono no es válido").required("El teléfono es requerido"),

    direccion: yup.string().required("La dirección es requerida"),
    ciudad: yup.string().required("La ciudad es requerida"),
})



const Form = () => {

    const isNonMobile = useMediaQuery(("min-width:600px"));

    const handleFormSubmit = (values) => {
        console.log(values);
    }
    return (
        <Box m="20px">
            <Header titulo="Nuevo Usuario" subtitulo="Ingrese los datos del usuario" />
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                }) => (
                    <form action={handleSubmit}>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeating(4 minmax(0,1 fr))"
                            sx={{
                                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Nombre"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.nombre}
                                name="nombre"
                                error={touched.nombre && Boolean(errors.nombre)}
                                helperText={touched.nombre && errors.nombre}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Correo"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Teléfono"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.telefono}
                                name="telefono"
                                error={touched.telefono && Boolean(errors.telefono)}
                                helperText={touched.telefono && errors.telefono}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Dirección"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.direccion}
                                name="direccion"
                                error={touched.direccion && Boolean(errors.direccion)}
                                helperText={touched.direccion && errors.direccion}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Ciudad"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.ciudad}
                                name="ciudad"
                                error={touched.ciudad && Boolean(errors.ciudad)}
                                helperText={touched.ciudad && errors.ciudad}
                                sx={{ gridColumn: "span 2" }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="success" variant="contained">Crear Usuario</Button>
                        </Box>
                    </form>
                )



                }
            </Formik>
        </Box>
    );
}

export default Form;