import { MainLayout } from '@/components/layout';
import Head from 'next/head';
import * as React from 'react';

export interface BlogPageProps {}

export default function WorksPage(props: BlogPageProps) {
  return (
    <>
      <Head>
        <title>Blog Page</title>
      </Head>
      <div>Blog Page</div>
    </>
  );
}

WorksPage.Layout = MainLayout;
