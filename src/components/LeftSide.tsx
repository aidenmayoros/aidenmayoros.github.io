import { Typography, Box, IconButton, Tooltip, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { AssignmentInd } from '@mui/icons-material';
import Navbar from './Navbar';

function LeftSide() {
	interface TooltippedIconButtonProps {
		href: string;
		tooltipContent: JSX.Element;
		icon: JSX.Element;
	}

	function TooltippedIconButton({
		href,
		tooltipContent,
		icon,
	}: TooltippedIconButtonProps) {
		return (
			<Tooltip title={tooltipContent} followCursor={true}>
				<IconButton href={href} target='_blank' rel='noopener noreferrer'>
					{icon}
				</IconButton>
			</Tooltip>
		);
	}

	return (
		<Box
			sx={{
				height: { xs: 'auto', lg: '100vh' },
				position: { xs: 'static', lg: 'sticky' },
				top: 0,
				display: 'flex',
				alignItems: 'center',
				px: { xs: 3, md: 6, lg: 8 },
				zIndex: 1,
			}}>
			<Box
				display='flex'
				flexDirection='column'
				className='fade-in'
				sx={{ py: { xs: 7, lg: 0 }, maxWidth: '500px', gap: 3 }}>
				<Box>
					<Typography
						sx={{
							letterSpacing: '0.18em',
							textTransform: 'uppercase',
							fontSize: '0.72rem',
							fontWeight: 600,
							color: 'var(--accent)',
						}}>
						Portfolio
					</Typography>
					<Typography
						fontWeight={700}
						sx={{
							mt: 1,
							fontFamily: '"Inter", sans-serif',
							fontSize: { xs: '2.2rem', md: '3.2rem' },
							lineHeight: 1.12,
							color: 'var(--text-primary)',
						}}>
						Aiden Mayoros
					</Typography>
					<Typography
						fontWeight={500}
						sx={{
							mt: 1.5,
							color: 'var(--text-secondary)',
							fontSize: { xs: '0.95rem', md: '1.06rem' },
							lineHeight: 1.55,
						}}>
						Full Stack Web Developer focused on clean UX and solid engineering
					</Typography>
				</Box>

				<Typography
					sx={{
						lineHeight: 1.75,
						maxWidth: '42ch',
						color: 'var(--text-muted)',
						fontSize: '0.93rem',
					}}>
					I build reliable web apps with React, TypeScript, and Node. This
					portfolio highlights projects where I solved real product and technical
					challenges from UI polish to backend architecture.
				</Typography>

				<Box display='flex' gap={1.5}>
					<Button
						variant='contained'
						color='primary'
						href='/AidenResume.pdf'
						target='_blank'
						rel='noopener noreferrer'
						sx={{
							px: 3.5,
							py: 1.4,
							fontSize: '0.875rem',
							fontWeight: 600,
							color: '#061020',
						}}>
						View Resume
					</Button>
					<Button
						variant='outlined'
						color='primary'
						onClick={() => {
							const el = document.getElementById('projects');
							el?.scrollIntoView({ behavior: 'smooth' });
						}}
						sx={{
							px: 3.5,
							py: 1.4,
							fontSize: '0.875rem',
							fontWeight: 600,
						}}>
						View Work
					</Button>
				</Box>

				<Navbar />

				<Box
					display='flex'
					sx={{
						gap: 0.5,
						border: '1px solid rgba(187, 210, 238, 0.12)',
						borderRadius: '999px',
						width: 'fit-content',
						px: 0.8,
						py: 0.5,
						backgroundColor: 'rgba(255,255,255,0.03)',
					}}>
					<TooltippedIconButton
						href='https://github.com/aidenmayoros'
						tooltipContent={
							<img
								src={'/github-preview-img.png'}
								alt='GitHub'
								style={{ width: '200px', height: '200px' }}
							/>
						}
						icon={<GitHubIcon sx={{ color: 'var(--text-secondary)', fontSize: 20 }} />}
					/>
					<TooltippedIconButton
						href='https://www.linkedin.com/in/aiden-mayoros/'
						tooltipContent={
							<img
								src={'/linkedin-preview-img.png'}
								alt='LinkedIn'
								style={{ width: '200px', height: '200px' }}
							/>
						}
						icon={<LinkedInIcon sx={{ color: 'var(--text-secondary)', fontSize: 20 }} />}
					/>
					<TooltippedIconButton
						href='/AidenResume.pdf'
						tooltipContent={
							<img
								src={'/resume-preview-img.png'}
								alt='Resume'
								style={{ width: '200px', height: '200px' }}
							/>
						}
						icon={<AssignmentInd sx={{ color: 'var(--text-secondary)', fontSize: 20 }} />}
					/>
				</Box>
			</Box>
		</Box>
	);
}

export default LeftSide;
