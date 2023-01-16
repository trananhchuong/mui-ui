import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { LayoutProps } from '@/models';

EmptyLayout.propTypes = {};

export function EmptyLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>Empty layout</h1>

      <div>{children}</div>
    </div>
  );
}
