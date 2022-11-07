import React, { useState } from "react";
import CenterCard from './CenterCard';
import places from './Static';
import Overlay from "./Overlay/Overlay";
import useStyles from './styles';
import { Divider } from '@material-ui/core';
import Modal from "./Modal/Modal";

export default function () {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
    <div className={classes.places} >
      <CenterCard place={places[0]} open={openModal} />
      <Divider className={classes.Divider} orientation="vertical" flexItem />
      <CenterCard place={places[1]} open={openModal} />
      <Divider className={classes.Divider} orientation="vertical" flexItem />
      <CenterCard place={places[2]} open={openModal}/>
      
    </div>
    <div className={classes.places} >
      <CenterCard place={places[3]}  />
      <Divider className={classes.Divider} orientation="vertical" flexItem />
      <CenterCard place={places[4]}  />
      <Divider className={classes.Divider} orientation="vertical" flexItem />
      <CenterCard place={places[5]} />
      
      
    </div>
    <div className={classes.places} >
      <CenterCard place={places[6]}  />
      <Divider className={classes.Divider} orientation="vertical" flexItem />
      <CenterCard place={places[7]}  />
      <Divider className={classes.Divider} orientation="vertical" flexItem />
      <CenterCard place={places[8]} />
      
      
    </div>
    {open && (
          <Overlay close={closeModal}>
            <Modal places={places}  />
          </Overlay>)}
    </>
  );
}