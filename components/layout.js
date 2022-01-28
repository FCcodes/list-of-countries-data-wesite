import React from "react";

//next
import Link from "next/link";

//Material-ui
import { Box, Grid, Typography } from '@mui/material'

const Layout = ({children}) => {
  return (
    <>
      <Box component="header">
        <Grid
          container
          component="nav"
          sx={{
            px: 5,
            py: 3,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle1">
              <Link href='/'>
                  <a>Where in World?</a>
              </Link>
          </Typography>
          <Typography variant="body1">Dark Mode</Typography>
        </Grid>
      </Box>

      {children}
    </>
  );
};

export default Layout;
