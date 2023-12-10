import React from 'react';
import { Button, Box } from '@mui/material';


const styles = {
    buttonStyle: {
        borderRadius: '8px',
        height: 40,
        width: '100%',
    },
}
const BadgeButton = ({ imageSrc, altText, buttonStyle }) => {
    return (
        <Box style={{width: 135}}>
            <Button style={styles.buttonStyle}>
                <img
                style={{ width: 135 }}
                src={imageSrc}
                alt={altText}
                />
            </Button>
        </Box>
    );
};

export default BadgeButton;
