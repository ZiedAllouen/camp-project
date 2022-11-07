import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
root:{
    minHeight:'100vh',
    backgroundRepeat: 'no-repeat',
    WebkitBackgroundSize: 'cover',
    backgroundImage: ('../../images/n.jpg'),
    backgroundPosition:'center'
  
    
},

head: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  colorText: {
    color: '#5AFF3D',
  },
  container: {
    textAlign: 'center',
  },

  titlehead: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },
  places: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    fontSize: '2rem',
  },

button:{

  textAlign: "center"
},

  card: {
    maxWidth: 400,
  minHeight:620,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
    borderRadius:'30px'
  },
  media: {
    height: 400,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
  },


  Divider:{
    color: '#fff',
  }
}))