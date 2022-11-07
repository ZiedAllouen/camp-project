import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { useHistory } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import useStyles from './styles';
import { createItem, updateItem } from '../../actions/items';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', item: '', message: '', tags: '',phone:'',address:'', selectedFile: '' });
  const item = useSelector((state) => (currentId ? state.items.items.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  useEffect(() => {
    if (item) setPostData(item);
  }, [item]);

  const clear = () => {
    setCurrentId(0);
    setPostData({  item: '', message: '', tags: '',phone:'',address:'', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createItem({ ...postData, name: user?.result?.name }, history));
      clear();
    } else {
      dispatch(updateItem(currentId, { ...postData, name: user?.result?.name }));
      clear();
    }
  };
  
  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h6" align="center">
        Please Sign In to use our web application properly.
        </Typography>
      </Paper>
    );
  }


  const handleAddChip = (tag) => {
    setPostData({ ...postData, tags: [...postData.tags, tag] });
  };

  const handleDeleteChip = (chipToDelete) => {
    setPostData({ ...postData, tags: postData.tags.filter((tag) => tag !== chipToDelete) });
  };
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${item.item}"` : 'Sell an Item'}</Typography>
        
        <TextField name="item" variant="outlined" label="Item Name" fullWidth value={postData.item} onChange={(e) => setPostData({ ...postData, item: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={2} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="address" variant="outlined" label="Address" fullWidth value={postData.address} onChange={(e) => setPostData({ ...postData, address: e.target.value })} />
        <TextField name="phone" variant="outlined" label="Phone" fullWidth value={postData.phone} onChange={(e) => setPostData({ ...postData, phone: e.target.value })} />
        <div style={{ padding: '5px 0', width: '94%' }}>
          <ChipInput
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={postData.tags}
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip) => handleDeleteChip(chip)}
          />
        </div>
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;