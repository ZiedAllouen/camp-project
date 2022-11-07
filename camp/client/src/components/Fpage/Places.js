import PlaceCard from './PlaceCard';
import places from './Static';
import useWindowPosition from './useWindowPosition';
import useStyles from './styles';
import {Button, Divider } from '@material-ui/core';
import {Link} from "react-router-dom";

export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <>
    <div className={classes.places} id="place-to-visit">
      <PlaceCard place={places[0]} checked={checked} />
      <Divider className={classes.Divider} orientation="vertical" flexItem />
      <PlaceCard place={places[1]} checked={checked} />
      <Divider className={classes.Divider} orientation="vertical" flexItem />
      <PlaceCard place={places[2]} checked={checked} />
      
    </div>
    <div className={classes.button}>
    <Link to="/contact">
      <Button  variant="contained" color="primary" size="large" >Contact Us</Button>
    </Link>
    </div>
     
    </>
  );
}