import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionCommon({ title, children }) {
  return (
    <Accordion
      sx={{ width: '100%', bgcolor: 'primary.main', opacity: 0.9 }}
      defaultExpanded={true}
      style={{ margin: 0 }}
    >
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon
            sx={{
              color: 'primary.light',
              '&:hover': { color: 'primary.accent' },
            }}
          />
        }
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ pl: 0 }}
      >
        <Typography sx={{ pl: 2, color: 'primary.dim' }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ pl: 0 }}>{children}</AccordionDetails>
    </Accordion>
  );
}
