'use client';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Montserrat_Subrayada } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { Container, Card, CatsBlock, CatsItem } from './categories.styled';
import { CatsText } from './categories.styled';

const montserrat = Montserrat_Subrayada({
  weight: '700',
  subsets: ['latin'],
});

export const categories = [
  {
    id: 1,
    image: '/cat-hookahs.png',
    video: '/hookah.mp4',
    name: 'Hookahs',
    url: '/hookahs',
  },
  {
    id: 2,
    image: '/cat-tobacco.png',
    video: '/tobacco.mp4',
    name: 'Tobacco',
    url: '/tobacco',
  },
  {
    id: 3,
    image: '/cat-coals.png',
    video: '/coal.mp4',
    name: 'Charoals',
    url: '/charcoals',
  },
  {
    id: 4,
    image: '/cat-bowls.png',
    video: '/accessory.mp4',
    name: 'Accessories',
    url: '/accessories',
  },
];

export default function Categories() {
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <Container component="section">
      <Typography component="h2" sx={visuallyHidden}>
        Best hookah price, top quality tobaссko, excelent coal & more
      </Typography>
      <CatsBlock component="ul">
        {categories.map((category, index) => {
          return (
            <CatsItem
              component="li"
              key={category.id}
              onMouseEnter={() => setHoveredVideo(index)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <Link href={category.name.toLowerCase()}>
                <Card>
                  {!videoLoaded ? (
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
                  ) : null}

                  <ReactPlayer
                    className="scaleVideo"
                    url={category.video}
                    playing={hoveredVideo === index}
                    muted
                    width="100%"
                    height="100%"
                    loop
                    onReady={() => setVideoLoaded(true)}
                  />

                  <CatsText component="h3" className={montserrat.className}>
                    {category.name.toUpperCase()}
                  </CatsText>
                </Card>
              </Link>
            </CatsItem>
          );
        })}
      </CatsBlock>
    </Container>
  );
}
