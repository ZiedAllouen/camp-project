import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';
import {Link,useHistory,useLocation} from "react-router-dom";
import {Button } from '@material-ui/core';
import useStyles from './styles';

export default function ImageCard({ place, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      
      <Card className={classes.card}>
      <Link to={place.link}>
        <CardMedia className={classes.media} image={place.imageUrl} title={place.title}/>
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1" className={classes.title}>
            {place.title}
          </Typography>
          <Typography variant="body2"color="textSecondary" component="p" className={classes.desc}>
            {place.description}
          </Typography>
          <div className={classes.button}>
    
    </div>
        </CardContent>
      </Card>
      
    </Collapse>
  );
}