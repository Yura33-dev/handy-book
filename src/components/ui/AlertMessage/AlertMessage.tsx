import { Alert, AlertColor } from '@mui/material';

type AlertMessageProps = {
  message: string;
  severity?: AlertColor;
};

function AlertMessage({ severity = 'success', message }: AlertMessageProps) {
  return <Alert severity={severity}>{message}</Alert>;
}

export default AlertMessage;
