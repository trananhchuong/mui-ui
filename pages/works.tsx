import { MainLayout } from '@/components/layout';
import Head from 'next/head';
import * as React from 'react';

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
  return (
    <>
      <Head>
        <title>Works Page</title>
      </Head>
      <div>Works Page</div>
    </>
  );
}

WorksPage.Layout = MainLayout;
