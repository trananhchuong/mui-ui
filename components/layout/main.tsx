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
        <Container
          maxWidth="xl"
          sx={{
            bgcolor: 'secondary.light',
          }}
        >
          XL Container
        </Container>
        <Container
          sx={{
            bgcolor: 'primary.main',
          }}
        >
          MD Container
        </Container>

        <h1>Main layout</h1>
        <div>{children}</div>
      </Box>
      <Footer />
    </Stack>
  );
}
