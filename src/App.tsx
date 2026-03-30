import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ProjectsArchive from './ProjectsArchive';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#4fd1c5',
		},
		background: {
			default: '#071120',
			paper: '#0f1d33',
		},
		text: {
			primary: '#e5edf8',
			secondary: '#b2c3d8',
		},
	},
	typography: {
		fontFamily: '"Space Grotesk", "DM Sans", sans-serif',
	},
	components: {
		MuiButton: {
			styleOverrides: {
				contained: {
					borderRadius: '999px',
					textTransform: 'none',
					fontWeight: 600,
				},
				outlined: {
					borderRadius: '999px',
					textTransform: 'none',
					fontWeight: 600,
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					borderRadius: '999px',
				},
			},
		},
	},
});

function App() {
	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Router>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/projects' element={<ProjectsArchive />} />
					</Routes>
				</Router>
			</ThemeProvider>
		</>
	);
}

export default App;
