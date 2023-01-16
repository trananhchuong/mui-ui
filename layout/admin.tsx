import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { LayoutProps } from '@/models';

AdminLayout.propTypes = {};

export function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>Admin layout</h1>
      <div>Side bar</div>


      <div>{children}</div>
    </div>
  );
}
