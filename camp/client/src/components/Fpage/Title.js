import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import {  IconButton,  Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const Title = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.head} id="header">
         <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}collapsedHeight={50}>
        <div className={classes.container}>
          <h1 className={classes.titlehead}>
            Welcome to <br />
            Our<span className={classes.colorText}>Camp.</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  )
}

export default Title