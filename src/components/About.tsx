import { Element } from 'react-scroll';
import { Typography, Box } from '@mui/material';
import Skills from './Skills';

function About() {
	return (
		<Element name='about'>
			<Box px={{ xs: 2, md: 3 }} pb={4}>
				<Typography
					variant='h4'
					fontWeight={700}
					sx={{ fontFamily: '"Inter", sans-serif', mb: 2.5, fontSize: '1.75rem' }}>
					About Me
				</Typography>
				<Typography
					sx={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
					Back in 2019, I found a desire and passion for coding. I really
					enjoyed being able to solve complex problems and build something
					others would enjoy.
				</Typography>
				<Typography
					sx={{ fontSize: '0.94rem', mt: 2, color: 'var(--text-secondary)', lineHeight: 1.75 }}>
					I first started my programming journey with website development and it
					was a perfect fit. As a dedicated CareerFoundry graduate with a deep
					passion for continued learning I love supporting my team members in
					achieving our shared professional goals.
				</Typography>
				<Typography
					sx={{ fontSize: '0.94rem', mt: 2, color: 'var(--text-secondary)', lineHeight: 1.75 }}>
					My focus now is to continuously upgrade my skills and understanding.
				</Typography>
				<Box sx={{ mt: 4 }}>
					<Skills />
				</Box>
			</Box>
		</Element>
	);
}

export default About;
