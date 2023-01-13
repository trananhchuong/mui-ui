import { useMediaQuery, useTheme } from "@mui/material";
import Head from "next/head";
import HomeComponent from "../components/HomeComponent";

Home.propTypes = {};

function Home() {

  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));


  return (
    <>
      <Head>
        <title>Learn mui UI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomeComponent />
    </>
  );
}

export default Home;
