import { useForm } from 'react-hook-form';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { FormControl, IconButton, Button, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Column, ColumnTitle, ColumnList } from './footerColumn.styled';
import { ColumnText, InputSubscribe } from './footerColumn.styled';
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

export function SubscribeColumn({ handleSubscribe }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({
    mode: 'onSubmit',
  });
  return (
    <Column>
      <ColumnTitle>Newsletter</ColumnTitle>
      <ColumnText>
        Subscribe to our newsletter to receive best new deals!
      </ColumnText>
      <FormControl
        component="form"
        sx={{ width: '100%' }}
        onSubmit={handleSubmit(data => handleSubscribe(data))}
      >
        <InputSubscribe
          err={errors?.email}
          component="input"
          type="email"
          aria-label="email"
          placeholder="Your email"
          {...register('email', {
            required: 'required',
            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}$/,
          })}
          onChange={() => clearErrors('email')}
        />
        {errors.email && (
          <Typography sx={{ fontSize: '0.75rem', color: 'primary.hot' }}>
            Invalid email address
          </Typography>
        )}
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
