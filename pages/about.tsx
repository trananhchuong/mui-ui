import { MainLayout } from '@/layout';
import theme from '@/themes';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import Head from 'next/head';
import Link from 'next/link';

About.propTypes = {};

function About() {
  // const theme = useTheme();
  // const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
      <Head>
        <title>Learn mui UI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <h1>This is about page</h1>

      <Typography
        sx={{
          // color: {
          //   md: 'primary.main',
          //   sm: 'red',
          // },
          [theme.breakpoints.between('sm', 'lg')]: {
            backgroundColor: 'red',
            color: "#fff"
          },
        }}
        variant="h1"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, veritatis ipsam. Alias,
        neque recusandae. Ipsa ullam ut veniam ipsam magni ratione tempore perferendis nisi
        exercitationem deserunt eaque autem, dolorem sapiente?
      </Typography>

      <Link href="/">Home</Link>
    </>
  );
}

About.Layout = MainLayout;

export default About;
