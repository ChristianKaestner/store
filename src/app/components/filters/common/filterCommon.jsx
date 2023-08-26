import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FilterCommon({ title, children }) {
  return (
    <Accordion
      sx={{ width: '100%' }}
      defaultExpanded={true}
      style={{ margin: 0 }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}
