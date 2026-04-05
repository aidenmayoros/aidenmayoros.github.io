import { Box, Typography, IconButton, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import projects from './projects';

function ProjectsArchive() {
	const navigate = useNavigate();

	return (
		<Box sx={{ maxWidth: '900px', mx: 'auto', px: { xs: 2, md: 4 }, pb: 8 }}>
			<Box pt={5} pb={4}>
				<IconButton
					onClick={() => navigate('/')}
					sx={{
						color: 'var(--accent-strong)',
						gap: 0.5,
						'&:hover': { backgroundColor: 'rgba(79, 209, 197, 0.08)' },
					}}>
					<ArrowBack fontSize='small' />
					<Typography
						sx={{
							color: 'var(--accent-strong)',
							fontSize: '0.9rem',
							fontWeight: 500,
						}}>
						Aiden Mayoros
					</Typography>
				</IconButton>
				<Typography
					variant='h3'
					fontWeight={700}
					sx={{
						mt: 2,
						fontFamily: '"Inter", sans-serif',
						fontSize: { xs: '2rem', md: '2.5rem' },
					}}>
					All Projects
				</Typography>
				<Typography
					sx={{
						mt: 1,
						color: 'var(--text-secondary)',
						fontSize: '0.95rem',
						maxWidth: '50ch',
					}}>
					A complete archive of everything I've built — from full-stack apps to
					small experiments.
				</Typography>
			</Box>

			<Box display='flex' flexDirection='column' gap={1.5}>
				{projects.map((project, index) => (
					<a
						href={project.appLink}
						key={index}
						target='_blank'
						rel='noopener noreferrer'
						style={{ textDecoration: 'none' }}>
						<Box
							sx={{
								display: 'flex',
								alignItems: { xs: 'flex-start', sm: 'center' },
								flexDirection: { xs: 'column', sm: 'row' },
								gap: { xs: 1.5, sm: 3 },
								p: { xs: 2, sm: 2.5 },
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
							<Typography
								sx={{
									color: 'var(--text-muted)',
									fontSize: '0.85rem',
									fontWeight: 500,
									minWidth: '44px',
									fontFamily: '"Inter", sans-serif',
								}}>
								{project.year}
							</Typography>
							<Box sx={{ flex: 1 }}>
								<Typography
									sx={{
										color: 'var(--text-primary)',
										fontWeight: 600,
										fontSize: '1rem',
									}}>
									{project.projectName}
								</Typography>
								{project.smallDescription && (
									<Typography
										sx={{
											color: 'var(--text-secondary)',
											fontSize: '0.85rem',
											mt: 0.5,
											lineHeight: 1.5,
										}}>
										{project.smallDescription}
									</Typography>
								)}
							</Box>
							<Box
								display='flex'
								flexWrap='wrap'
								gap={0.8}
								sx={{ maxWidth: { sm: '260px' }, justifyContent: 'flex-end' }}>
								{project.technologiesUsed
									.filter((t: string) => t)
									.slice(0, 4)
									.map((tech: string) => (
										<Chip
											key={`${project.projectName}-${tech}`}
											label={tech}
											size='small'
											variant='outlined'
											sx={{
												backgroundColor: 'rgba(79, 209, 197, 0.09)',
												color: 'var(--accent-strong)',
												borderColor: 'rgba(79, 209, 197, 0.25)',
												fontSize: '0.7rem',
												height: 24,
											}}
										/>
									))}
							</Box>
						</Box>
					</a>
				))}
			</Box>
		</Box>
	);
}

export default ProjectsArchive;
