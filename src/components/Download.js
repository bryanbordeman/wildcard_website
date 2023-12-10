import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Paper, Divider, Stack } from '@mui/material';
import AppBadge from '../assets/images/AppStoreBadge.svg'
import GoogleBadge from '../assets/images/GooglePlayBadge.svg'
import Typography from '@mui/material/Typography';
import screen1 from '../assets/images/screens/Simulator Screenshot - iPhone 15 Pro Max - 2023-12-09 at 10.12.07.png'
import screen2 from '../assets/images/screens/Simulator Screenshot - iPhone 15 Pro Max - 2023-12-09 at 10.14.21.png'
import screen3 from '../assets/images/screens/Simulator Screenshot - iPhone 15 Pro Max - 2023-12-09 at 10.14.50.png'
import screen4 from '../assets/images/screens/Simulator Screenshot - iPhone 15 Pro Max - 2023-12-09 at 10.15.15.png'
import screen5 from '../assets/images/screens/Simulator Screenshot - iPhone 15 Pro Max - 2023-12-09 at 10.15.40.png'
import screen6 from '../assets/images/screens/Simulator Screenshot - iPhone 15 Pro Max - 2023-12-09 at 10.17.29.png'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import BadgeButton from './BadgeButton';

const styles = {
    screenStyles: {
        width: '100%',
        maxWidth: '300px', // Set the maximum width
    },
    screenContainerStyles: {
        width: '100%',
        maxWidth: '300px', // Set the maximum width
        margin: '0 auto', // Center the container horizontally
    },
    buttonContainerStyle: {
        width: '100%',
        justifyContent: 'center'
    },
    title: {
        textDecoration: 'underline',
        textTransform: 'uppercase',
    },
    text: {
        color: 'gray'
    }
};

const Download = () => {
    const handleDragStart = (e) => e.preventDefault();

    const screens = [
        <img src={screen1} alt='screen1' style={styles.screenStyles} onDragStart={handleDragStart} role="presentation" />,
        <img src={screen2} alt='screen2' style={styles.screenStyles} onDragStart={handleDragStart} role="presentation" />,
        <img src={screen3} alt='screen3' style={styles.screenStyles} onDragStart={handleDragStart} role="presentation" />,
        <img src={screen4} alt='screen4' style={styles.screenStyles} onDragStart={handleDragStart} role="presentation" />,
        <img src={screen5} alt='screen5' style={styles.screenStyles} onDragStart={handleDragStart} role="presentation" />,
        <img src={screen6} alt='screen6' style={styles.screenStyles} onDragStart={handleDragStart} role="presentation" />,
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
            <Stack direction='row' alignItems='center' justifyContent='center' spacing={3}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={styles.buttonContainerStyle}>
                        <BadgeButton
                            imageSrc={GoogleBadge}
                            altText="Google Badge"
                            buttonStyle={styles.buttonStyle}
                        />
                    </Box>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={styles.buttonContainerStyle}>
                        <BadgeButton
                            imageSrc={AppBadge}
                            altText="App Store Badge"
                            buttonStyle={styles.buttonStyle}
                        />
                    </Box>
                </div>
            </Stack>
            <Divider sx={{ mt: 2, mb: 2 }} />
            <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
                <Typography variant="h5" gutterBottom sx={styles.title}>
                How it Works
                </Typography>
                <Typography variant="body2" gutterBottom style={styles.text}>
                EMOM stands for "Every Minute On the Minute." In EMOM workouts,
                you are tasked with completing a specified exercise within a 60 second
                timeframe of less. This application introduces an exciting wildcard
                element, randomly selecting exercises and rep counts from a user-generated
                list. Users have the flexibility to define both the minimum and maximum
                range of repetitions for each exercise. However, be prepared for the wildcard
                round, where the interval time is reduced to 30 seconds, and the challenge
                intensifies with maximum reps. Enjoy the workout experience!
                </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <div style={styles.screenContainerStyles}>
                <Typography variant="h5" gutterBottom sx={styles.title}>
                    Screenshots
                </Typography>
                <AliceCarousel
                    mouseTracking
                    items={screens}
                />
                </div>
            </Grid>
            </Grid>
        </Paper>
        </Box>
    );
};

export default Download;
