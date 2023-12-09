import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Paper, Divider} from '@mui/material';
import Link from '@mui/material/Link';

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
            <Typography variant="h5" gutterBottom>
                Privacy Policy
            </Typography>
            <Typography variant="body2" gutterBottom>
            Bryan Bordeman is the creator of the Wildcard EMOM app, a paid application intended to be accessible to all users.

            This section serves to communicate our stance on the gathering, utilization, and disclosure of Personal Information for those who opt to use our Service.

            By opting to utilize our Service, you implicitly agree to the terms of this policy regarding the collection and usage of information. The Personal Information we collect is employed for the purpose of enhancing and delivering the Service. Rest assured, your information will not be used or disclosed to any entity other than what is outlined in this Privacy Policy.

            The terminology used in this Privacy Policy aligns with the definitions in our Terms of Use, accessible at WildcardEMOM.com, unless specified otherwise in this Privacy Policy.

            </Typography>
            <Divider sx={{mt: 2, mb: 2}} />
            <Typography variant="h5" gutterBottom>
                CHANGES TO THIS PRIVACY POLICY
            </Typography>
            <Typography variant="body2" gutterBottom>
                We may periodically update our Privacy Policy. It is advisable to review this page 
                regularly for any alterations. We will inform you of any changes by posting the 
                updated Privacy Policy on this page.
                These Policy are effective as of 12/10/23.
            </Typography>
            <Divider sx={{mt: 2, mb: 2}} />
            <Typography variant="h5" gutterBottom>
                Contact Us
            </Typography>
            <Typography variant="body2" gutterBottom>
                If you have questions or suggestions about our Policy, contact us at{' '}
                <Link href="mailto:bryanbordeman@hotmail.com">bryanbordeman@hotmail.com</Link>.
            </Typography>
            </Paper>
        </Box>
    );
};

export default Policy;
