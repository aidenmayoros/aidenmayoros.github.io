import { Box, Typography } from '@mui/material';

function Navbar() {
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const items = ['About', 'Projects', 'Contact'];

	return (
		<Box display='flex' flexWrap='wrap' gap={1}>
			{items.map((item) => (
				<Box
					key={item}
					onClick={() => scrollToSection(item.toLowerCase())}
					sx={{
						px: 2.5,
						py: 1,
						borderRadius: '999px',
						border: '1px solid rgba(187, 210, 238, 0.16)',
						cursor: 'pointer',
						transition: 'all 0.2s ease',
						'&:hover': {
							borderColor: 'var(--accent)',
							backgroundColor: 'rgba(79, 209, 197, 0.08)',
							'& .nav-text': {
								color: 'var(--accent)',
							},
						},
					}}>
					<Typography
						className='nav-text'
						sx={{
							fontSize: '0.85rem',
							fontWeight: 500,
							color: 'var(--text-secondary)',
							transition: 'color 0.2s ease',
						}}>
						{item}
					</Typography>
				</Box>
			))}
		</Box>
	);
}

export default Navbar;
