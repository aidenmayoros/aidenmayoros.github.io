import { Box, Typography, Button, Chip } from '@mui/material';
import projects from '../projects';
import { useNavigate } from 'react-router-dom';

function ProjectPreviews() {
	const navigate = useNavigate();

	const handleViewProjects = () => {
		navigate('/projects');
	};

	return (
		<Box pt={6} px={{ xs: 3, md: 4 }} pb={4}>
			<Typography
				variant='h4'
				sx={{ fontFamily: '"Space Grotesk", sans-serif', mb: 1 }}>
				Projects
			</Typography>
			<Typography color='var(--text-secondary)' maxWidth='56ch'>
				A few selected projects that show the type of work I love: practical,
				user-focused, and built to be maintainable.
			</Typography>

			<Box display={'flex'} flexDirection={'column'} mt={4} gap={2}>
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
								gap: '1.1em',
								borderRadius: '16px',
								border: '1px solid var(--line-soft)',
								backgroundColor: 'rgba(255, 255, 255, 0.02)',
								'&:hover': {
									backgroundColor: 'rgba(79, 209, 197, 0.08)',
									borderColor: 'rgba(79, 209, 197, 0.35)',
									transform: 'translateY(-2px)',
									cursor: 'pointer',
									transition: 'all 0.3s ease',
								},
							}}>
							<Box display={'flex'} sx={{ minWidth: { lg: 180 } }}>
								<img
									src={project.img}
									alt={project.projectName}
									width={180}
									height={145}
									style={{
										borderRadius: '10px',
										objectFit: 'cover',
										border: '1px solid rgba(187, 210, 238, 0.22)',
									}}
								/>
							</Box>
							<Box display={'flex'} flexDirection={'column'} gap={2}>
								<Box>
									<Typography variant='h6'>
										{project.projectName}
									</Typography>
									<Typography color='var(--text-secondary)' fontSize={15}>
										{project.smallDescription}
									</Typography>
								</Box>
								<Box display={'flex'} flexWrap={'wrap'} gap={1.5}>
									{project.technologiesUsed
										.filter((projectName: string) => projectName)
										.map((projectName: string) => (
										<Chip
											key={`${project.projectName}-${projectName}`}
											label={projectName}
											variant='outlined'
											sx={{
												backgroundColor: 'rgba(79, 209, 197, 0.09)',
												color: 'var(--accent-strong)',
												borderColor: 'rgba(79, 209, 197, 0.25)',
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
				sx={{ mt: 2 }}>
				View Full Project Archive
			</Button>
		</Box>
	);
}

export default ProjectPreviews;
