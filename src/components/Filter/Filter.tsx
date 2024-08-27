import { useAppDispatch, useAppSelector } from '../../helpers/hooks/reduxHooks';
import { selectFilterValue } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';
import TypographyHeader from '../ui/TypographyHeader/TypographyHeader';

import { Divider, Skeleton, TextField } from '@mui/material';
import { selectLoading } from '../../redux/contacts/selectors';

function Filter() {
  const filterValue = useAppSelector(selectFilterValue);
  const isLoading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();

  return (
    <>
      <TypographyHeader
        variant="h4"
        title="Find contact:"
        styles={{ fontSize: { xs: 16, sm: 18, md: 20 }, mb: 2 }}
      />

      {isLoading ? (
        <Skeleton
          animation="wave"
          variant="rounded"
          width={230}
          height={40}
          sx={{ mb: 3 }}
        />
      ) : (
        <TextField
          label="by name or number"
          variant="outlined"
          size="small"
          sx={{ mb: 3 }}
          value={filterValue}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(changeFilter(e.target.value))
          }
        />
      )}

      <Divider aria-hidden="true" sx={{ mb: 2 }} />
    </>
  );
}

export default Filter;
