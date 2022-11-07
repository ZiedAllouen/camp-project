import React from 'react'
import useStyles from './styles';
import { CssBaseline } from '@material-ui/core';
import Title from './Title';
import Places from './Places';

const Fpage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <Title/>
      <Places/>
    </div>
  )
}

export default Fpage