import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Paper, Divider} from '@mui/material';
import Link from '@mui/material/Link';


const styles = {
    title: {
        textDecoration: 'underline',
        textTransform: 'uppercase',
    },
    text: {
        color: 'gray'
    }
};


const Policy = () => {
    return (
        <Box>
            <Paper
                elevation={0}
                style={{
                    overflow: 'auto',
                    padding: 20,
                }}
            >
            <Typography variant="h5" gutterBottom sx={styles.title}>
                Privacy Policy
            </Typography>
            <Typography variant="body2" gutterBottom style={styles.text}>
                Wildcard EMOM is a paid application intended to be accessible to all users. 
                This section serves to communicate our stance on the gathering, utilization, 
                and disclosure of Personal Information for those who opt to use our Service. 
                By opting to utilize our Service, you implicitly agree to the terms of this 
                policy regarding the collection and usage of information. The Personal 
                Information we collect is employed for the purpose of enhancing and delivering 
                the Service. Rest assured, your information will not be used or disclosed to 
                any entity other than what is outlined in this Privacy Policy. The 
                terminology used in this Privacy Policy aligns with the definitions 
                in our Terms of Use, accessible at WildcardEMOM.com, unless specified 
                otherwise in this Privacy Policy.
            </Typography>
            <Divider sx={{mt: 2, mb: 2}} />
            <Typography variant="h5" gutterBottom sx={styles.title}>
                INFORMATION COLLECTION AND USAGE
            </Typography>
            <Typography variant="body2" gutterBottom style={styles.text}>
                This application does not gather any personal information.
            </Typography>
            <Divider sx={{mt: 2, mb: 2}} />
            <Typography variant="h5" gutterBottom sx={styles.title}>
                LOG DATA
            </Typography>
            <Typography variant="body2" gutterBottom style={styles.text}>
                Whenever you use our Service, in the event of an app error, we collect data 
                and information (via third-party products) from your phone, termed as Log Data. 
                This may encompass details such as your device's Internet Protocol (“IP”) 
                address, device name, operating system version, app configuration during 
                Service use, the timestamp of your Service use, and other relevant statistics.
            </Typography>
            <Divider sx={{mt: 2, mb: 2}} />
            <Typography variant="h5" gutterBottom sx={styles.title}>
                COOKIES
            </Typography>
            <Typography variant="body2" gutterBottom style={styles.text}>
                Though this Service doesn't explicitly use “cookies,” files with a 
                small amount of data serving as anonymous unique identifiers, it may 
                employ third-party code and libraries that use “cookies” to enhance services.
                You retain the option to accept or decline these cookies and receive 
                notifications when a cookie is sent to your device. Opting to decline our 
                cookies may restrict access to certain portions of this Service.
            </Typography>
            <Divider sx={{mt: 2, mb: 2}} />
            <Typography variant="h5" gutterBottom sx={styles.title}>
                CHILDREN’S PRIVACY
            </Typography>
            <Typography variant="body2" gutterBottom style={styles.text}>
                Our Services are not designed for individuals under the age of 13. 
                We do not knowingly collect personally identifiable information from 
                children under 13 years of age. In the event that we discover a child 
                under 13 has provided us with personal information, we promptly erase 
                it from our servers. If you are a parent or guardian and are aware your 
                child has provided us with personal information, please contact us so we 
                can take appropriate actions.
            </Typography>
            <Divider sx={{mt: 2, mb: 2}} />
            <Typography variant="h5" gutterBottom sx={styles.title}>
                CHANGES TO THIS PRIVACY POLICY
            </Typography>
            <Typography variant="body2" gutterBottom style={styles.text}>
                We may periodically update our Privacy Policy. It is advisable to review this page 
                regularly for any alterations. We will inform you of any changes by posting the 
                updated Privacy Policy on this page.
                These Policy are effective as of 12/10/23.
            </Typography>
            <Divider sx={{mt: 2, mb: 2}} />
            <Typography variant="h5" gutterBottom sx={styles.title}>
                Contact Us
            </Typography>
            <Typography variant="body2" gutterBottom style={styles.text}>
                If you have questions or suggestions about our Policy, contact us at{' '}
                <Link href="mailto:support@wildcardemom.com">support@wildcardemom.com</Link>.
            </Typography>
            </Paper>
        </Box>
    );
};

export default Policy;
