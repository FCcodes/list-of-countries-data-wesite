import { createTheme } from "@mui/material/styles";

let theme = createTheme({
    breakpoints: {
        values: {
            phone: 0,
            tablet: 420,
            tabletxl: 600,
            laptop: 900,
            desktop: 1200
        }
    }
})

theme.typography.h1 = {
    fontSize: '1.2rem'
}

theme.typography.h2 = { 
    fontSize: '1rem',
    fontWeight: '600'
}

theme.typography.subtitle1 = {
    fontSize: '1.2rem'
}

export default theme