import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { FormControl, OutlinedInput, Button } from '@mui/material';
import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Column, ColumnTitle, ColumnList } from './footerColumn.styled';
import { ColumnText } from './footerColumn.styled';
import FooterLink from '../footerLink/footerLink';
import Link from 'next/link';
import {
  YoutubeIcon,
  FacebookIcon,
  InstagramIcon,
} from './footerColumn.styled';

export function CommonColumnDesk({ pages, title }) {
  return (
    <Column>
      <ColumnTitle>{title}</ColumnTitle>
      {pages.map(page => {
        return (
          <ColumnList key={page.id}>
            <FooterLink href={page.href} title={page.name} />
          </ColumnList>
        );
      })}
    </Column>
  );
}

export function CommonColumnMob({ pages, title }) {
  return (
    <Column>
      <Accordion sx={{ bgcolor: 'primary.light' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <ColumnTitle>{title}</ColumnTitle>
        </AccordionSummary>
        <AccordionDetails>
          {pages.map(page => {
            return (
              <ColumnList key={page.id}>
                <FooterLink href={page.href} title={page.name} />
              </ColumnList>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </Column>
  );
}

export function SubscribeColumn({ handleSubmit }) {
  return (
    <Column>
      <ColumnTitle>Newsletter</ColumnTitle>
      <ColumnText>
        Subscribe to our newsletter to receive best new deals!
      </ColumnText>
      <FormControl
        component="form"
        sx={{ width: '100%' }}
        onSubmit={handleSubmit}
      >
        <OutlinedInput
          component="input"
          type="email"
          aria-label="email"
          placeholder="Your email"
          sx={{ mt: 2, bgcolor: '#fff', width: '100%' }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ bgcolor: 'primary.light', mt: 2 }}
        >
          Subscribe
        </Button>
      </FormControl>
    </Column>
  );
}

export function FollowUsColumn() {
  return (
    <Column>
      <ColumnTitle style={{ paddingLeft: 8 }}>Follow us</ColumnTitle>

      <ColumnList style={{ display: 'flex', gap: '8px' }}>
        <li>
          <Link href="/">
            <IconButton color="inherit" aria-label="Instagram icon">
              <InstagramIcon />
            </IconButton>
          </Link>
        </li>
        <li>
          <Link href="/">
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </Link>
        </li>
        <li>
          <Link href="/">
            <IconButton>
              <YoutubeIcon />
            </IconButton>
          </Link>
        </li>
      </ColumnList>
    </Column>
  );
}
