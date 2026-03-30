import { Element } from 'react-scroll';
import { Typography, Box } from '@mui/material';
import Skills from './Skills';

function About() {
	return (
		<Element name='about'>
			<Box px={{ xs: 3, md: 4 }} pb={4}>
				<Typography
					variant='h4'
					sx={{ fontFamily: '"Space Grotesk", sans-serif', mb: 3 }}>
					About Me
				</Typography>
				<Typography sx={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
					Back in 2019, I found a desire and passion for coding. I really
					enjoyed being able to solve complex problems and build something
					others would enjoy.
				</Typography>
				<Typography
					sx={{ fontSize: '1rem', mt: 2, color: 'var(--text-secondary)' }}>
					I first started my programming journey with website development and it
					was a perfect fit. As a dedicated CareerFoundry graduate with a deep
					passion for continued learning I love supporting my team members in
					achieving our shared professional goals.
				</Typography>
				<Typography
					sx={{ fontSize: '1rem', mt: 2, color: 'var(--text-secondary)' }}>
					My focus now is to continuously upgrade my skills and understanding.
				</Typography>
				<Box sx={{ mt: 5 }}>
					<Skills />
				</Box>
			</Box>
		</Element>
	);
}

export default About;
