import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  tooltip: {
    background: '#fff',
    border: '1px solid #70757a',
    borderRadius: 0,
    width: 260,
    paddingLeft: 14,
    paddingRight: 14,
  },
  arrow: {
    fontSize: 16,
    width: 17,
    '&::before': {
      border: '1px solid #70757a',
      backgroundColor: '#fff',
      boxSizing: 'border-box',
    },
  },
});

export default useStyles;
