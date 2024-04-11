import { Header } from "./header";
import Box from '@mui/material/Box';

export const GenericTemplate = ({children}) => {
    return (
        <Box sx={{maxHeight: "100vh", overflow: "auto"}}>
            <Header />
            {children}
        </Box>
    )
}