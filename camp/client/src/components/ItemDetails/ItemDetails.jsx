import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory, Link } from 'react-router-dom';
import PinDropIcon from '@material-ui/icons/PinDrop';

import { getItem, getItemsBySearch } from '../../actions/items';
import CommentSection from './CommentSection';
import useStyles from './styles';

const Item = () => {
  const { item, items, isLoading } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getItem(id));
  }, [id]);

  useEffect(() => {
    if (item) {
      dispatch(getItemsBySearch({ search: 'none', tags: item?.tags.join(',') }));
    }
  }, [item]);

  if (!item) return null;

  const openItem = (_id) => history.push(`/items/${_id}`);

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const recommendedItems = items.filter(({ _id }) => _id !== item._id);

  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{item.item}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{item.tags.map((tag) => (
            <Link to={`/tags/${tag}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
              {` #${tag} `}
            </Link>
          ))}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">{item.message}</Typography>
          <Typography gutterBottom variant="body3" component="h3"><PinDropIcon fontSize='small'/>{item.address}</Typography>
          <Typography gutterBottom variant="body1" component="p">Call us :+216 {item.phone}</Typography>
          <Typography variant="body1">
            Posted by:
            <Link to={`/creator/${item.name}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
              {` ${item.name}`}
            </Link>
          </Typography>
          <Typography variant="body1">{moment(item.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <CommentSection item={item} />
          <Divider style={{ margin: '20px 0' }} />
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={item.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={item.item} />
        </div>
      </div>
      {!!recommendedItems.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">You might also like:</Typography>
          <Divider />
          <div className={classes.recommendedItems}>
            {recommendedItems.map(({ item, name, message, likes, selectedFile, _id }) => (
              <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openItem(_id)} key={_id}>
                <Typography gutterBottom variant="h6">{item}</Typography>
                <Typography gutterBottom variant="subtitle2">{name}</Typography>
                <Typography gutterBottom variant="subtitle2">{message}</Typography>
                <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                <img src={selectedFile} width="200px" />
              </div>
            ))}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default Item;