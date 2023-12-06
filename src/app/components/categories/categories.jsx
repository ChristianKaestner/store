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

export default function Categories() {
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideo = () => {
    console.log('video loaded');
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
