import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Download from './Download';
import Terms from './Terms';
import Policy from './Policy';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box 
                sx={{ pt: 3, pb: 3 }}
                alignItems="center"
            >
                {children}
            </Box>
        )}
        </div>
    );
    }

    CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
    }

export default function WildcardTabs() {
    const theme = useTheme();
    const isSmallerScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                variant={isSmallerScreen? "scrollable" : 'standard'}
                centered={isSmallerScreen? false : true}
            >
            <Tab label="Download" {...a11yProps(0)} />
            <Tab label="Privacy Policy" {...a11yProps(1)} />
            <Tab label="Terms of Use" {...a11yProps(2)} />
            </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
            <Download/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
            <Policy/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
            <Terms/>
        </CustomTabPanel>
        </Box>
    );
}