import Link from 'next/link';
import { Breadcrumbs as Breadcrumb, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export default function Breadcrumbs({ crumbs, title }) {
  let url = '';
  return (
    <Breadcrumb aria-label="breadcrumb">
      <Link href="/" style={{ display: 'flex' }}>
        <HomeIcon
          fontSize="small"
          sx={{
            color: 'primary.neutral',
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
          console.log(title);
          if (crumbs.length - 1 !== index) {
            url += '/' + crumb;
            return (
              <Link href={url} key={index}>
                <Typography
                  sx={{
                    color: 'primary.neutral',
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
            <Typography key={index} sx={{ color: 'primary.neutral' }}>
              {isId ? title : capitalizedCrumb}
            </Typography>
          );
        })}
    </Breadcrumb>
  );
}
