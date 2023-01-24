import { Container, Link as MuiLink, Stack } from '@mui/material';
import { Box } from '@mui/system';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ROUTE_LIST } from './routes';

export function HeaderDesktop() {
  const router = useRouter();

  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {ROUTE_LIST.map((route) => (
            <Link key={route.path} href={route.path} legacyBehavior passHref>
              <MuiLink
                sx={{ ml: 2, fontWeight: 'medium' }}
                className={classNames({ active: router.pathname === route.path })}
              >
                {route.label}
              </MuiLink>
            </Link>
          ))}

          <Link key={'login'} href={'/login'} legacyBehavior passHref>
            <MuiLink sx={{ ml: 2, fontWeight: 'medium' }}>Login</MuiLink>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
