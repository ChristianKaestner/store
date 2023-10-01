'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { useGetProductByIdQuery } from '@/app/redux/services/goods';
import { Breadcrumbs as Breadcrumb, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export default function Breadcrumbs() {
  const [crumbs, setCrumbs] = useState([]);
  const path = usePathname().split('/');
  const { slug } = useParams();

  useEffect(() => {
    path.splice(0, 1);
    setCrumbs(path);
  }, []);

  const { data, isLoading } = useGetProductByIdQuery(slug);
  const title = data?.title;

  let url = '';

  return (
    <>
      {crumbs.length > 0 && (
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
          {crumbs &&
            crumbs.map((crumb, index) => {
              const isId = !isNaN(+crumb);
              const capitalizedCrumb = crumb[0].toUpperCase() + crumb.slice(1);

              if (crumbs.length - 1 !== index) {
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
                <Typography key={index} sx={{ color: 'primary.dim' }}>
                  {isId ? title : capitalizedCrumb}
                </Typography>
              );
            })}
        </Breadcrumb>
      )}
    </>
  );
}
