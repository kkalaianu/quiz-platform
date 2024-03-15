import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid, Card, CardContent, CardMedia, } from '@mui/material';
import { makeStyles } from '@mui/styles';
import createQuizImage from '../../images/createQuizImage.jpg'; 
import myQuizzesImage from '../../images/myQuizzesImage.jpg'; 
import playQuizImage from '../../images/playQuizImage.jpg'; 

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 300,
    margin: 'auto',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  media: {
    height: 250,
    objectFit: 'contain', // Ensure the entire image is visible within the height
    alignSelf: 'center',
  },
  
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Horizontally center content
    textAlign: 'center', // Align text center
    flexGrow: 1, // Allow content to grow vertically
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      
      <Grid container spacing={3} justifyContent="center">
        {/* Create New Quiz */}
        
        <Grid item xs={12} sm={6} md={4} style={{ marginTop: '60px' }}>
        <Card className={classes.card}>
        <CardMedia
                className={classes.media}
                component="img"
              image={createQuizImage}
                alt="Create New Quiz"
                style={{ objectFit: 'cover', height: 300 }} 
                onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
      onMouseOut={(e) => e.target.style.transform = 'scale(1)'}        
                 />
              <CardContent className={classes.content}>
              
              <Typography variant="h5"component="h2"gutterBottom>
               <Link to="/newquiz" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className={classes.title}>Create New Quiz</span>
        </Link>
               </Typography>
             </CardContent>
            </Card>
          
        </Grid>
        {/* My Quizzes */}
        <Grid item xs={12} sm={6} md={4} style={{ marginTop: '60px'}}>
       
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                component="img"
                image={myQuizzesImage}
                alt="My Quizzes"
                style={{ objectFit: 'cover', height: 300 }}  
                onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
      onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              />
              <CardContent className={classes.content}>
              
                <Typography variant="h5" component="h2" gutterBottom >
                  <Link to="/Quiz" style={{ textDecoration: 'none', color: 'inherit' }}>
                 <span className={classes.title}>My Quizzes</span>
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          
        </Grid>
        {/* Play Quiz */}
        <Grid item xs={12} sm={6} md={4} style={{ marginTop: '60px'}}>
         
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                component="img"
                image={playQuizImage}
                alt="Play Quiz"
                style={{ objectFit: 'cover', height: 300 }} 
                onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
      onMouseOut={(e) => e.target.style.transform = 'scale(1)'} 
              />
              <CardContent className={classes.content}>
             
                <Typography variant="h5" component="h2" gutterBottom >
                 <Link to="/PlayQuiz" style={{ textDecoration: 'none', color: 'inherit' }}>
                 <span className={classes.title}>Play Quiz</span>
                  </Link>
                
                </Typography>
                
              </CardContent>
            </Card>
        
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
