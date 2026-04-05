import { Box, Typography, Button, Chip } from '@mui/material';
import projects from '../projects';
import { useNavigate } from 'react-router-dom';

function ProjectPreviews() {
	const navigate = useNavigate();

	const handleViewProjects = () => {
		navigate('/projects');
	};

	return (
		<Box pt={4} px={{ xs: 2, md: 3 }} pb={4}>
			<Typography
				variant='h4'
				fontWeight={700}
				sx={{ fontFamily: '"Inter", sans-serif', mb: 1, fontSize: '1.75rem' }}>
				Projects
			</Typography>
			<Typography
				sx={{ color: 'var(--text-secondary)', maxWidth: '56ch', fontSize: '0.94rem', lineHeight: 1.6 }}>
				A few selected projects that show the type of work I love: practical,
				user-focused, and built to be maintainable.
			</Typography>

			<Box display={'flex'} flexDirection={'column'} mt={3} gap={1.5}>
				{projects.slice(0, 5).map((project) => (
					<a
						href={project.appLink}
						key={project.projectName}
						style={{ textDecoration: 'none' }}
						target='_blank'
						rel='noopener noreferrer'>
						<Box
							p={2}
							sx={{
								display: 'flex',
								flexDirection: { xs: 'column', lg: 'row' },
								gap: '1rem',
								borderRadius: '14px',
								border: '1px solid var(--line-soft)',
								backgroundColor: 'rgba(255, 255, 255, 0.02)',
								transition: 'all 0.25s ease',
								'&:hover': {
									backgroundColor: 'rgba(79, 209, 197, 0.06)',
									borderColor: 'rgba(79, 209, 197, 0.3)',
									transform: 'translateY(-2px)',
									cursor: 'pointer',
								},
							}}>
							<Box display={'flex'} sx={{ minWidth: { lg: 160 } }}>
								<img
									src={project.img}
									alt={project.projectName}
									width={160}
									height={120}
									style={{
										borderRadius: '10px',
										objectFit: 'cover',
										border: '1px solid rgba(187, 210, 238, 0.18)',
									}}
								/>
							</Box>
							<Box display={'flex'} flexDirection={'column'} gap={1.5}>
								<Box>
									<Typography
										variant='h6'
										sx={{ fontWeight: 600, fontSize: '1.06rem' }}>
										{project.projectName}
									</Typography>
									<Typography
										sx={{
											color: 'var(--text-secondary)',
											fontSize: '0.875rem',
											lineHeight: 1.6,
											mt: 0.5,
										}}>
										{project.smallDescription}
									</Typography>
								</Box>
								<Box display={'flex'} flexWrap={'wrap'} gap={1}>
									{project.technologiesUsed
										.filter((projectName: string) => projectName)
										.map((projectName: string) => (
										<Chip
											key={`${project.projectName}-${projectName}`}
											label={projectName}
											variant='outlined'
											size='small'
											sx={{
												backgroundColor: 'rgba(79, 209, 197, 0.09)',
												color: 'var(--accent-strong)',
												borderColor: 'rgba(79, 209, 197, 0.25)',
												fontSize: '0.75rem',
												height: 26,
											}}
										/>
										))}
								</Box>
							</Box>
						</Box>
					</a>
				))}
			</Box>
			<Button
				variant='outlined'
				color='primary'
				onClick={handleViewProjects}
				sx={{ mt: 2.5, fontSize: '0.875rem' }}>
				View Full Project Archive
			</Button>
		</Box>
	);
}

export default ProjectPreviews;
