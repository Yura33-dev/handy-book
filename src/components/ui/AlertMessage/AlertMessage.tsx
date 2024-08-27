import { Alert, AlertColor } from '@mui/material';

type AlertMessageProps = {
  severity: AlertColor;
  message: string;
};

function AlertMessage({ severity = 'success', message }: AlertMessageProps) {
  return <Alert severity={severity}>{message}</Alert>;
}

export default AlertMessage;
