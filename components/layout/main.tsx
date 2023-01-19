import { LayoutProps } from '@/models';
import { Container } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { Footer, Header } from '../common';

MainLayout.propTypes = {};

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />
      <Box component="main" flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Stack>
  );
}
