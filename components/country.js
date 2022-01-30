import React from "react";

//next
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

//material-ui
import { Box, Paper, Grid, Typography } from "@mui/material";

const Country = ({ image, country, population, region, capital }) => {
    
  let router = useRouter();

  return (
    <>
      <Grid item phone={12} tabletxl={6} sx={{ p: 2 }}>
        <Paper
          component="article"
          elevation={1}
          sx={{
            pb: 1,
            mx: "auto",
            width: { phone: "50%", tabletxl: "70%" },
            maxWidth: { tabletxl: "300px" },
            borderRadius: '10px',
          }}
        >
          <Box
            container="div"
            className="image-container"
            sx={{ width: "100", height: "20vh", position: "relative", borderRadius: '10px' }}
          >
            <Image src={image} id="countryFlag" layout="fill" alt="" />
          </Box>

          <Typography
            variant="h2"
            noWrap
            sx={{ my: 4, mx: 2, cursor: "pointer" }}
          >
            <Link href={`/${country.common}`}>{country.official}</Link>
          </Typography>
          <Typography variant="body2" sx={{ my: 1, mx: 2 }}>
            Population:{" "}
            <Box component="span" sx={{ color: "grey.500" }}>
              {population}
            </Box>
          </Typography>
          <Typography variant="body2" sx={{ my: 1, mx: 2 }}>
            Region:{" "}
            <Box component="span" sx={{ color: "grey.500" }}>
              {region}
            </Box>
          </Typography>
          <Typography variant="body2" sx={{ my: 1, mx: 2, mb: 5 }}>
            Capital:{" "}
            <Box component="span" sx={{ color: "grey.500" }}>
              {capital}
            </Box>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default Country;
