import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useSelector } from 'react-redux';

import PostItem from './PostItem/PostItem'
import useStyles from './styles';

const PostItems = ({ setCurrentId }) => {
  const { items, isLoading } = useSelector((state) => state.items);
  const classes = useStyles();

  if (!items.length && !isLoading) return (
    <Alert severity="info">There are no items yet-check it out later !</Alert>
  );

  return (
    isLoading ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {items?.map((item) => (
          <Grid key={item._id} item xs={12} sm={12} md={6} lg={3}>
            <PostItem item={item} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default PostItems