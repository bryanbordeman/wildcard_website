import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WildcardTabs from './components/WildcardTabs';
import Container from '@mui/material/Container';
import Logo from './components/Logo';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4169E1',
        },
        secondary: {
            main: '#F20088',
        },
        purple: {
            main: '#6107D2',
        }
    },
    
});

export default function App() {
    return (
        <div style={{marginTop: 20}}>
            <ThemeProvider theme={theme}>
                <Logo/>
                <Container maxWidth="md">
                    <WildcardTabs/>
                </Container>
            </ThemeProvider>
        </div>
    );
};
