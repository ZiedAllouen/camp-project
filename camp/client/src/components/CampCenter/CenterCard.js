import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import {Link} from "react-router-dom";
import useStyles from './styles';

export default function ImageCard({ place,open }) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card} onClick={open}>
        <CardMedia
          className={classes.media}
          image={place.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h1"
            className={classes.title}
          >
            {place.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {place.description}
          </Typography>
          <Link to={place.link}>
      <Button  variant="contained" color="primary" size="small" >See Map</Button>
    </Link>
        </CardContent>
      </Card>
    </>
  );
}