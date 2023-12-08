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
import { categories } from '@/app/lib/utils';

const montserrat = Montserrat_Subrayada({
  weight: '700',
  subsets: ['latin'],
});

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="20%" style="stop-color:#000000B3; stop-opacity:1" />
      <stop offset="50%" style="stop-color:#333333B3; stop-opacity:0.8" />
      <stop offset="70%" style="stop-color:#000000B3; stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#shimmerGradient)" />
  <rect id="shimmerRect" width="${w}" height="${h}" fill="url(#shimmerGradient)">
    <animate attributeName="x" values="-${w}; ${w}" dur="1s" repeatCount="indefinite" />
  </rect>
</svg>`;

const toBase64 = str =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export default function Categories() {
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideo = () => {
    setVideoLoaded(true);
  };

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
                  <Image
                    className="scaleImage"
                    style={{
                      transition: 'transform 500ms ease-in-out',
                      objectFit: 'cover',
                      visibility: !videoLoaded ? 'visible' : 'hidden',
                    }}
                    src={category.image}
                    fill={true}
                    alt="image"
                    sizes="100%"
                    priority
                    quality={30}
                    placeholder={`data:image/svg+xml;base64,${toBase64(
                      shimmer(720, 200)
                    )}`}
                  />

                  <ReactPlayer
                    className="scaleVideo"
                    url={category.video}
                    playing={hoveredVideo === index}
                    muted
                    width="100%"
                    height="100%"
                    loop
                    onReady={handleVideo}
                    style={{
                      visibility: videoLoaded ? 'visible' : 'hidden',
                      opacity: videoLoaded ? 1 : 0,
                      transition: 'opacity 500ms ease-in-out',
                    }}
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
