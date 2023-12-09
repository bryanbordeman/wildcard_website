import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import logo from '../assets/images/logo.png';
import useMediaQuery from '@mui/material/useMediaQuery';

const Logo = () => {
    const theme = useTheme();
    const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'));
    const isExtraLargeScreen = useMediaQuery(theme.breakpoints.down('xl'));

    let logoWidth;

    switch (true) {
        case isExtraSmallScreen:
            logoWidth = 200;
            // console.log('extra-small');
            break;
        case isSmallScreen:
            logoWidth = 275;
            // console.log('small');
            break;
        case isMediumScreen:
            logoWidth = 275;
            // console.log('medium');
            break;
        case isLargeScreen:
            logoWidth = 300;
            // console.log('large');
            break;
        case isExtraLargeScreen:
            logoWidth = 350;
            // console.log('extra-large');
            break;
        default:
            logoWidth = 400; // Default width for unknown sizes
            break;
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <img src={logo} alt="Logo" style={{ maxWidth: logoWidth }} />
        </div>
    );
};

export default Logo;