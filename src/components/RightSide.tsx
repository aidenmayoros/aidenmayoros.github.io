// RightSide.jsx
import { Box } from '@mui/material';
import About from './About';
import ProjectPreviews from './ProjectPreviews';
import ContactForm from './ContactForm';

function RightSide() {
	return (
		<Box
			sx={{
				px: { xs: 2, md: 3, lg: 4 },
				pt: { xs: 1, lg: 10 },
				pb: { xs: 6, lg: 8 },
				display: 'flex',
				flexDirection: 'column',
				gap: 3,
			}}>
			<Box id='about' className='section fade-in fade-delay-1' sx={{ pt: 6 }}>
				<About />
			</Box>
			<Box id='projects' className='section fade-in fade-delay-2'>
				<ProjectPreviews />
			</Box>
			<Box id='contact' className='section fade-in fade-delay-3'>
				<ContactForm />
			</Box>
		</Box>
	);
}

export default RightSide;
