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
    },
    list: {
        listStyleType: 'disc', // or 'circle' or 'square'
    },
    
};

const Terms = () => {
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
                Terms of Use
            </Typography>
            <Typography variant="body2" gutterBottom style={styles.text}>
                By downloading or using the Wildcard EMOM app, these terms automatically 
                apply to you. Please read them carefully before using the app. You are not 
                permitted to copy or modify the app, any part of the app, or our trademarks 
                in any way. Attempting to extract the source code of the app or translating 
                it into other languages or creating derivative versions is strictly prohibited. 
                The app, along with all trademarks, copyright, database rights, and other 
                intellectual property rights related to it, belongs to Wildcard EMOM.
            </Typography>
            <Divider sx={{mt: 2, mb: 2}} />
            <Typography variant="h5" gutterBottom sx={styles.title}>
                Changes and Charges
            </Typography>
            <Typography variant="body2" gutterBottom style={styles.text}>
                Wildcard EMOM is committed to ensuring the app is as useful and efficient as possible. 
                Therefore, we reserve the right to make changes to the app or to charge for its 
                services at any time and for any reason. We will never charge you for the app or 
                its services without making it clear exactly what you are paying for.
            </Typography>
            <Divider sx={{mt: 2, mb: 2}} />
            <Typography variant="h5" gutterBottom sx={styles.title}>
                Personal Data and Security
            </Typography>
            <Typography variant="body2" gutterBottom style={styles.text}>
                While the Wildcard EMOM app doesn't retain personal data, it is your 
                responsibility to ensure the security of your phone and app access. Avoid 
                jailbreaking or rooting your phone, as doing so may jeopardize your phone's 
                security and impact the app's performance.
            </Typography>
            <Divider sx={{mt: 2, mb: 2}} />
            <Typography variant="h5" gutterBottom sx={styles.title}>
                Third-Party Services
            </Typography>
            <Typography variant="body2" gutterBottom style={styles.text}>
                The app uses third-party services with their own Terms of Use. Links to the Terms of Use for 
                third-party service providers:
            </Typography>
            <Typography variant="body2" gutterBottom >
                - <Link href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Google Play Services</Link>
            </Typography>
            <Divider sx={{mt: 2, mb: 2}} />
            <Typography variant="h5" gutterBottom sx={styles.title}>
                Limitations of Responsibility
            </Typography>
            <Typography variant="body2" gutterBottom style={styles.text}>
                Wildcard EMOM will not take responsibility for certain things:
            </Typography>
            <Typography component="div" variant="body2" style={styles.text}>
                <ul>
                    <li>
                        The app requires an active internet connection for certain functions, and Wildcard EMOM cannot guarantee full functionality without it.
                    </li>
                    <li>
                        Your mobile network provider may charge you for data usage.
                    </li>
                    <li>
                        Wildcard EMOM cannot always take responsibility for how you use the app, including charging your device or maintaining an internet connection.
                    </li>
                </ul>
            </Typography>
            <Divider sx={{mt: 2, mb: 2}} />
            <Typography variant="h5" gutterBottom sx={styles.title}>
                Updates and Termination
            </Typography>
            <Typography variant="body2" gutterBottom style={styles.text}>
                We may update the app, and you are required to download updates to continue using it. 
                We may also terminate the app at any time without notice. Upon termination, 
                your rights to use the app will end.
            </Typography>
            <Divider sx={{mt: 2, mb: 2}} />
            <Typography variant="h5" gutterBottom sx={styles.title}>
                Changes to Terms of Use
            </Typography>
            <Typography variant="body2" gutterBottom style={styles.text}>
                We may update our Terms of Use. Please review this page periodically for any changes. 
                We will notify you of changes by posting the new Terms of Use on this page.
            </Typography>
            <Divider sx={{mt: 2, mb: 2}} />
            <Typography variant="h5" gutterBottom sx={styles.title}>
                Effective Date
            </Typography>
            <Typography variant="body2" gutterBottom style={styles.text}>
                These Terms of Use are effective as of 12/10/23.
            </Typography>
            <Divider sx={{mt: 2, mb: 2}} />
            <Typography variant="h5" gutterBottom sx={styles.title}>
                Contact Us
            </Typography>
            <Typography variant="body2" gutterBottom style={styles.text}>
                If you have questions or suggestions about our Terms of Use, contact us at{' '}
                <Link href="mailto:support@wildcardemom.com">support@wildcardemom.com</Link>.
            </Typography>
            </Paper>
        </Box>
    );
};

export default Terms;
