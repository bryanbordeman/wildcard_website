import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Paper, Divider, List, ListItem, ListItemText} from '@mui/material';
import Link from '@mui/material/Link';

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
            <Typography variant="h5" gutterBottom>
                Terms of Use
            </Typography>
            <Typography variant="body2" gutterBottom>
                By downloading or using the Wildcard EMOM app, these terms automatically 
                apply to you. Please read them carefully before using the app. You are not 
                permitted to copy or modify the app, any part of the app, or our trademarks 
                in any way. Attempting to extract the source code of the app or translating 
                it into other languages or creating derivative versions is strictly prohibited. 
                The app, along with all trademarks, copyright, database rights, and other 
                intellectual property rights related to it, belongs to Wildcard EMOM.
            </Typography>
            <Divider sx={{mt: 2, mb: 2}} />
            <Typography variant="h5" gutterBottom>
                Changes and Charges
            </Typography>
            <Typography variant="body2" gutterBottom>
                Wildcard EMOM is committed to ensuring the app is as useful and efficient as possible. 
                Therefore, we reserve the right to make changes to the app or to charge for its 
                services at any time and for any reason. We will never charge you for the app or 
                its services without making it clear exactly what you are paying for.
            </Typography>
            <Divider sx={{mt: 2, mb: 2}} />
            <Typography variant="h5" gutterBottom>
                Personal Data and Security
            </Typography>
            <Typography variant="body2" gutterBottom>
                The Wildcard EMOM app stores and processes personal data you provide to us to deliver our 
                service. You are responsible for keeping your phone and app access secure. Do not jailbreak 
                or root your phone, as it may compromise your phone's security and affect the app's 
                functionality.
            </Typography>
            <Divider sx={{mt: 2, mb: 2}} />
            <Typography variant="h5" gutterBottom>
                Third-Party Services
            </Typography>
            <Typography variant="body2" gutterBottom>
                The app uses third-party services with their own Terms of Use. Links to the Terms of Use for 
                third-party service providers:
            </Typography>
            <Typography variant="body2" gutterBottom>
                - <Link href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Google Play Services</Link>
            </Typography>
            <Divider sx={{mt: 2, mb: 2}} />
            <Typography variant="h5" gutterBottom>
                Limitations of Responsibility
            </Typography>
            <Typography variant="body2" gutterBottom>
                Wildcard EMOM will not take responsibility for certain things:
            </Typography>
            <List dense>
                <ListItem>
                    <ListItemText
                        primary={
                        <Typography variant="body2">
                            The app requires an active internet connection for certain functions, and Wildcard EMOM cannot guarantee full functionality without it.
                        </Typography>
                        }
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={
                        <Typography variant="body2" >
                            Your mobile network provider may charge you for data usage.
                        </Typography>
                        }
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={
                        <Typography variant="body2">
                            Wildcard EMOM cannot always take responsibility for how you use the app, including charging your device or maintaining an internet connection.
                        </Typography>
                        }
                    />
                </ListItem>
            </List>
      
            <Divider sx={{mt: 2, mb: 2}} />
            <Typography variant="h5" gutterBottom>
                Updates and Termination
            </Typography>
            <Typography variant="body2" gutterBottom>
                We may update the app, and you are required to download updates to continue using it. 
                We may also terminate the app at any time without notice. Upon termination, 
                your rights to use the app will end.
            </Typography>
            <Divider sx={{mt: 2, mb: 2}} />
            <Typography variant="h5" gutterBottom>
                Changes to Terms of Use
            </Typography>
            <Typography variant="body2" gutterBottom>
                We may update our Terms of Use. Please review this page periodically for any changes. 
                We will notify you of changes by posting the new Terms of Use on this page.
            </Typography>
            <Divider sx={{mt: 2, mb: 2}} />
            <Typography variant="h5" gutterBottom>
                Effective Date
            </Typography>
            <Typography variant="body2" gutterBottom>
                These Terms of Use are effective as of 12/10/23.
            </Typography>
            <Divider sx={{mt: 2, mb: 2}} />
            <Typography variant="h5" gutterBottom>
                Contact Us
            </Typography>
            <Typography variant="body2" gutterBottom>
                If you have questions or suggestions about our Terms of Use, contact us at{' '}
                <Link href="mailto:bryanbordeman@hotmail.com">bryanbordeman@hotmail.com</Link>.
            </Typography>
            </Paper>
        </Box>
    );
};

export default Terms;
