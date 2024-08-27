import { SxProps, Theme, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';

type TypographyHeaderProps = {
  variant: Variant | 'inherit';
  title: string;
  styles?: SxProps<Theme>;
};

function TypographyHeader({
  variant,
  title,
  styles = null,
}: TypographyHeaderProps) {
  return (
    <Typography variant={variant} sx={styles}>
      {title}
    </Typography>
  );
}

export default TypographyHeader;
