import React,{useState} from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography , ButtonBase} from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import PinDropIcon from '@material-ui/icons/PinDrop';
import { useHistory } from 'react-router-dom';

import { likeItem, deleteItem } from '../../../actions/items';
import useStyles from './styles';
const PostItem = ({ item, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [likes, setLikes] = useState(item?.likes);
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    
    const userId = user?.result.googleId || user?.result?._id;
    const hasLikedPost = item.likes.find((like) => like === userId);
  
    const handleLike = async () => {
      dispatch(likeItem(item._id));
  
      if (hasLikedPost) {
        setLikes(item.likes.filter((id) => id !== userId));
      } else {
        setLikes([...item.likes, userId]);
      }
    };
  
    const Likes = () => {
      if (likes.length > 0) {
        return likes.find((like) => like === userId)
          ? (
            <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}` }</>
          ) : (
            <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
          );
      }
  
      return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };
    const openPost = (e) => {
  
      history.push(`/items/${item._id}`);
    };
    return (
        <Card className={classes.card} raised elevation={6}>
          <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
      >

      
        <CardMedia className={classes.media} image={item.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={item.item} />
        <div className={classes.overlay}>
          <Typography variant="h6">{item.name}</Typography>
          <Typography   variant="h6" ><PinDropIcon fontSize='small'/> {item.address}</Typography>
          <Typography variant="body2">{moment(item.createdAt).fromNow()}</Typography>
        </div>
        {(user?.result?.googleId === item?.creator || user?.result?._id === item?.creator) && (
        <div className={classes.overlay2} name="edit">
          <Button style={{ color: 'white' }} size="small" onClick={(e) =>{e.stopPropagation(); setCurrentId(item._id)}}><MoreHorizIcon fontSize="default" /></Button>
        </div>)}
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{item.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{item.item}</Typography>
        
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{item.message}</Typography>
        </CardContent>
        </ButtonBase>
        <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result} onClick={handleLike}>
          <Likes />
        </Button>
        {(user?.result?.googleId === item?.creator || user?.result?._id === item?.creator) && (
          <Button size="small" color="secondary" onClick={() => dispatch(deleteItem(item._id))}>
            <DeleteIcon fontSize="small" /> &nbsp; Delete
          </Button>
        )}
        </CardActions>
      </Card>
    );
  };
export default PostItem