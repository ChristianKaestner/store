'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Breadcrumbs as Breadcrumb, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export default function Breadcrumbs({ product }) {
  const path = usePathname().split('/');
  path.splice(0, 1);

  const formatText = text => {
    if (!text) return '';
    const lowerText = text.toLowerCase();
    return lowerText[0].toUpperCase() + lowerText.slice(1);
  };

  let url = '';

  return (
    <>
      {path.length > 0 && (
        <Breadcrumb sx={{ zIndex: 1 }}>
          <Link href="/" style={{ display: 'flex' }}>
            <HomeIcon
              fontSize="small"
              sx={{
                color: 'primary.dim',
                '&:hover': {
                  color: 'primary.accent',
                },
              }}
            />
          </Link>
          {path &&
            path.map((crumb, index) => {
              const isId = !isNaN(+crumb);
              const capitalizedCrumb = formatText(crumb);
              const title = formatText(formatText(product?.title));
              if (path.length - 1 !== index) {
                url += '/' + crumb;
                return (
                  <Link href={url} key={index}>
                    <Typography
                      sx={{
                        color: 'primary.dim',
                        '&:hover': {
                          color: 'primary.accent',
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {isId ? title : capitalizedCrumb}
                    </Typography>
                  </Link>
                );
              }
              return (
                <Typography key={index} sx={{ color: 'primary.accent' }}>
                  {isId ? title : capitalizedCrumb}
                </Typography>
              );
            })}
        </Breadcrumb>
      )}
    </>
  );
}
