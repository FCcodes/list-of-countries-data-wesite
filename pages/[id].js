import React from "react";

//next js
import Image from "next/image";
import { useRouter } from "next/router";

//material-ui
import { Box, Grid, Typography } from "@mui/material";

const CountyPage = ({ country }) => {
  console.log(country);
  let router = useRouter();
  let {
    name = "It seems a name was not provided",
    region = "It seems the region was not specified",
    population = "It seems a population size was not specified",
    subregion = "It seems the subregion was not specified",
    capital = "It seems the capital was not specified",
    tld = "It seems a Top level domain was not specified",
    languages = "It seem no languages was specified",
    flags = false,
    currencies = "It seems no currency was not specified",
  } = country[0];

  let currencyArray = [];

  for (let currency in currencies) {    
    currencyArray.push(currency);
  }

  return (
    <>
      <Grid container className="country-details" sx={{ py: 6, px: 5 }}>
        <Grid item phone={12}>
          <Box
            component="button"
            sx={{
              px: 1.6,
              py: 0.8,
              outline: "none",
              border: "none",
              backgroundColor: "black",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => {
              console.log(router);
              router.back();
              return;
            }}
          >
            Back
          </Box>
        </Grid>

        <Grid item container phone={12} sx={{ mt: 5 }}>
          <Grid item phone={12} tabletxl={6}>
            <Box
              component="div"
              className="image-container"
              sx={{
                width: "100%",
                height: "40vh",
                position: "relative",
                backgroundColor: "grey.400",
                borderRadius: '10px'
              }}
            >
              {flags === false ? (
                "no image present"
              ) : (
                <Image src={flags.svg} className="countryFlag" layout="fill" alt="" />
              )}
            </Box>
          </Grid>

          <Grid item container phone={12} tabletxl={6} sx={{ p: 5, pr: 0 }}>
            <Typography variant="h1">{}</Typography>
            <Grid item phone={12} tqbletxl={6}>
              <Typography variant="h2" sx={{ color: "grey.900", my: 1 }}>
                Native Name:
                <Box component="b" sx={{ ml: 1 }}>
                  {name.common}
                </Box>
              </Typography>
              <Typography variant="h2" sx={{ color: "grey.900", my: 1 }}>
                Population:{" "}
                <Box component="b" sx={{ ml: 1 }}>
                  {population}
                </Box>
              </Typography>
              <Typography variant="h2" sx={{ color: "grey.900", my: 1 }}>
                Region:{" "}
                <Box component="b" sx={{ ml: 1 }}>
                  {region}
                </Box>
              </Typography>
              <Typography variant="h2" sx={{ color: "grey.900", my: 1 }}>
                Sub Region:{" "}
                <Box component="b" sx={{ ml: 1 }}>
                  {subregion}
                </Box>
              </Typography>
              <Typography variant="h2" sx={{ color: "grey.900", my: 1 }}>
                Capital:{" "}
                <Box component="b" sx={{ ml: 1 }}>
                  {capital[0] || ""}
                </Box>
              </Typography>
            </Grid>
            <Grid item phone={12} tabletxl={6}>
              <Typography variant="h2" sx={{ color: "grey.900", my: 1 }}>
                Top Level Domain:{" "}
                <Box component="b" sx={{ ml: 1 }}>
                  {tld[0]}
                </Box>
              </Typography>
              <Typography variant="h2" sx={{ color: "grey.900", my: 1 }}>
                Currencies:{" "}
                {currencyArray.map((currency, index) => (
                  <Box
                    key={Math.ceil(Math.random() * 1000 + index)}
                    component="b"
                  >
                    {currencies[currency].name}
                  </Box>
                ))}
              </Typography>
              <Typography variant="h2" sx={{ color: "grey.900", my: 1 }}>
                Languages:{" "}
                <Box component="b" sx={{ ml: 1 }}>
                  {languages[0]}
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export async function getStaticPaths() {
  let api = "https://restcountries.com/v3.1/all";

  let res = await fetch(api);
  let data = await res.json();
  let paths = data.map((country) => {
    return { params: { id: country.name.official } };
  });

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  let api = `https://restcountries.com/v3.1/name/${params.id}`;
  let country = null;

  let res = await fetch(api);
  let data = await res.json();

  country = data;
  return {
    props: {
      country,
    },
  };
}

export default CountyPage;
