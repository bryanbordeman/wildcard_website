import * as React from 'react';
import { Button, Box, Paper, Grid, Divider} from '@mui/material';
import MacBadge from '../assets/images/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg'
import AppBadge from '../assets/images/Download_on_App_Store/Black_lockup/SVG/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'
import GoogleBadge from '../assets/images/google-play-badge-logo-svgrepo-com.svg'
import Typography from '@mui/material/Typography';
import screen1 from '../assets/images/screens/Simulator Screenshot - iPhone 15 Pro Max - 2023-12-09 at 10.12.07.png'
import screen2 from '../assets/images/screens/Simulator Screenshot - iPhone 15 Pro Max - 2023-12-09 at 10.14.21.png'
import screen3 from '../assets/images/screens/Simulator Screenshot - iPhone 15 Pro Max - 2023-12-09 at 10.14.50.png'
import screen4 from '../assets/images/screens/Simulator Screenshot - iPhone 15 Pro Max - 2023-12-09 at 10.15.15.png'
import screen5 from '../assets/images/screens/Simulator Screenshot - iPhone 15 Pro Max - 2023-12-09 at 10.15.40.png'
import screen6 from '../assets/images/screens/Simulator Screenshot - iPhone 15 Pro Max - 2023-12-09 at 10.17.29.png'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const Download = () => {

    const handleDragStart = (e) => e.preventDefault();

    const screenStyles = {
        width: '100%',
        maxWidth: '300px', // Set the maximum width
    };

    const screenContainerStyles = {
        width: '100%',
        maxWidth: '300px', // Set the maximum width
        margin: '0 auto', // Center the container horizontally
        paddingTop: '20px',
    };

    const buttonContainerStyle = {
        width: '100%'
    };
    const buttonStyle = {
        borderRadius: '8px',
        height: 40,
        width: '90%'

    };

    const googleImageStyle = {
        width: 135,
    };

    const items = [
        <img src={screen1} alt='screen1' style={screenStyles} onDragStart={handleDragStart} role="presentation" />,
        <img src={screen2} alt='screen2' style={screenStyles} onDragStart={handleDragStart} role="presentation" />,
        <img src={screen3} alt='screen3' style={screenStyles} onDragStart={handleDragStart} role="presentation" />,
        <img src={screen4} alt='screen4' style={screenStyles} onDragStart={handleDragStart} role="presentation" />,
        <img src={screen5} alt='screen5' style={screenStyles} onDragStart={handleDragStart} role="presentation" />,
        <img src={screen6} alt='screen6' style={screenStyles} onDragStart={handleDragStart} role="presentation" />,

    ];

    return (
        <Box>
            <Paper
                elevation={0}
                style={{
                overflow: 'auto',
                padding: 20,
                }}
            >
            <Grid sx={{ flexGrow: 1, justifyContent: 'center' }} container spacing={3}>
            <Grid item >
                <Box sx={buttonContainerStyle}>
                    <Button style={buttonStyle}>
                        <img 
                            style={googleImageStyle}
                            src={GoogleBadge} 
                            alt="GoogleBadge"  
                        />
                    </Button>
                </Box>
            </Grid>
            <Grid item >
                <Box sx={buttonContainerStyle}>
                    <Button style={buttonStyle}>
                        <img src={AppBadge} alt="AppBadge"  />
                    </Button>
                </Box>
            </Grid>
            <Grid item >
                <Box sx={buttonContainerStyle}>
                    <Button style={buttonStyle}>
                        <img src={MacBadge} alt="MacBadge"  />
                    </Button>
                </Box>
                </Grid>
            </Grid>
            <Divider sx={{mt: 2, mb: 2}} />
            <Typography variant="h5" gutterBottom sx={{mt: 4}}>
                How it Works
            </Typography>
            <Typography variant="body2" gutterBottom>
                EMOM stands for "Every Minute On the Minute." In EMOM workouts, 
                you are tasked with completing a specified exercise within a 60 second 
                timeframe of less. This application introduces an exciting wildcard 
                element, randomly selecting exercises and rep counts from a user-generated 
                list. Users have the flexibility to define both the minimum and maximum 
                range of repetitions for each exercise. However, be prepared for the wildcard 
                round, where the interval time is reduced to 30 seconds, and the challenge 
                intensifies with maximum reps. Enjoy the workout experience!
            </Typography>
            <Divider sx={{mt: 2, mb: 2}} />
                <div style={screenContainerStyles}>
                    <AliceCarousel 
                        mouseTracking 
                        items={items} 
                    />
                </div>
            </Paper>
        </Box>
    );
};

export default Download;
