import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';
import TypographyHeader from '../ui/TypographyHeader/TypographyHeader';

import { Divider, TextField } from '@mui/material';

function Filter() {
  const filterValue = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  return (
    <>
      <TypographyHeader
        variant="h4"
        title="Find contact:"
        styles={{ fontSize: { xs: 16, sm: 18, md: 20 }, mb: 2 }}
      />

      <TextField
        label="by name or number"
        variant="outlined"
        size="small"
        sx={{ mb: 3 }}
        value={filterValue}
        onInput={e => dispatch(changeFilter(e.target.value))}
      />

      <Divider aria-hidden="true" sx={{ mb: 2 }} />
    </>
  );
}

export default Filter;
