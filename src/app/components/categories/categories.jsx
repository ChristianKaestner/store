'use client';
import { Montserrat_Subrayada } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { Container, Card, CatsBlock, CatsItem } from './categories.styled';
import { CatsText } from './categories.styled';

const montserrat = Montserrat_Subrayada({
  weight: '700',
  subsets: ['latin'],
});

export default function Categories({ categories }) {
  return (
    <Container component="section">
      <Typography component="h2" sx={visuallyHidden}>
        Best hookah price, top quality tobaссko, excelent coal & more
      </Typography>
      <CatsBlock component="ul">
        {categories.map(category => {
          return (
            <CatsItem component="li" key={category.id}>
              <Link href={category.name.toLowerCase()}>
                <Card>
                  <Image
                    className="scaleImage"
                    style={{
                      transition: 'transform 500ms ease-in-out',
                      objectFit: 'cover',
                    }}
                    src={category.image}
                    fill={true}
                    alt="image"
                    sizes="100%"
                  />
                  <Box sx={{ zIndex: 2 }}>
                    <CatsText component="h3" className={montserrat.className}>
                      {category.name.toUpperCase()}
                    </CatsText>
                  </Box>
                </Card>
              </Link>
            </CatsItem>
          );
        })}
      </CatsBlock>
    </Container>
  );
}
