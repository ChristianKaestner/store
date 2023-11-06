'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { useGetProductByIdQuery } from '@/app/redux/services/products';
import { Breadcrumbs as Breadcrumb, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export default function Breadcrumbs() {
  // const [product, setProduct] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [crumbs, setCrumbs] = useState([]);
  const path = usePathname().split('/');
  // console.log(path);

  path.splice(0, 1);
  // setCrumbs(path);
  const { slug } = useParams();

  // const title = product?.title;
  const title = null;

  // useEffect(() => {
  //   if (slug) {
  //     const { data, isLoading } = useGetProductByIdQuery(slug);
  //     setIsLoading(isLoading);
  //     setProduct(data);
  //   }
  // }, [slug]);

  // useEffect(() => {
  //   const updatedPath = [...path];
  //   updatedPath.splice(0, 1);
  //   setCrumbs(updatedPath);
  // }, [path]);

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
              const capitalizedCrumb = crumb[0].toUpperCase() + crumb.slice(1);

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
