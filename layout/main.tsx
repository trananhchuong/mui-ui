import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { LayoutProps } from '@/models';

MainLayout.propTypes = {};

export function MainLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>Main layout</h1>
      <div>{children}</div>
    </div>
  );
}
