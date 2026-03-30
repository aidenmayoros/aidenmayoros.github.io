import { Button, Box } from '@mui/material';

function Navbar() {
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<Box
			className='navbar'
			display={'flex'}
			flexDirection={{ xs: 'row', md: 'column' }}
			flexWrap='wrap'
			gap={1.2}
			pt={3}>
			<Button
				variant='outlined'
				onClick={() => scrollToSection('about')}
				sx={{
					width: { xs: 'auto', md: '150px' },
					color: 'var(--text-secondary)',
					borderColor: 'var(--line-soft)',
					'&:hover': {
						borderColor: 'var(--accent)',
						color: 'var(--accent)',
						backgroundColor: 'rgba(79, 209, 197, 0.08)',
					},
				}}>
				About
			</Button>
			<Button
				variant='outlined'
				onClick={() => scrollToSection('projects')}
				sx={{
					width: { xs: 'auto', md: '150px' },
					color: 'var(--text-secondary)',
					borderColor: 'var(--line-soft)',
					'&:hover': {
						borderColor: 'var(--accent)',
						color: 'var(--accent)',
						backgroundColor: 'rgba(79, 209, 197, 0.08)',
					},
				}}>
				Projects
			</Button>
			<Button
				variant='outlined'
				onClick={() => scrollToSection('contact')}
				sx={{
					width: { xs: 'auto', md: '150px' },
					color: 'var(--text-secondary)',
					borderColor: 'var(--line-soft)',
					'&:hover': {
						borderColor: 'var(--accent)',
						color: 'var(--accent)',
						backgroundColor: 'rgba(79, 209, 197, 0.08)',
					},
				}}>
				Contact
			</Button>
		</Box>
	);
}

export default Navbar;
