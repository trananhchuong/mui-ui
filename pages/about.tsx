import { MainLayout } from '@/components/layout';
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

      <Link href="/">Home</Link>
    </>
  );
}

About.Layout = MainLayout;

export default About;
