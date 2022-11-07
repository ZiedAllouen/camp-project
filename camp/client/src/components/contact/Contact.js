import React from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';

import FileBase from 'react-file-base64';


const Contact = () => {


    const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={6}>
    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} >
      <Typography variant="h6">{ 'Contact Us'}</Typography>
      <TextField name="Email" variant="outlined" label="Email" fullWidth   />
      <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4}  />
      <div style={{ padding: '5px 0', width: '94%' }}>

      </div>
      <div className={classes.fileInput}><FileBase type="file" multiple={false}  /></div>
      <Button  className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth onClick={() => window.location.reload(false)}>Send</Button>
      <Button variant="contained" color="secondary" size="small"  fullWidth>Clear</Button>
    </form>
  </Paper>
  )
}

export default Contact