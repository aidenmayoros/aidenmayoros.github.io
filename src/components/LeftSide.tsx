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
				display={'flex'}
				flexDirection={'column'}
				color={'white'}
				className='fade-in'
				sx={{ py: { xs: 8, lg: 12 }, maxWidth: '560px' }}>
				<Typography
					sx={{
						letterSpacing: '0.12em',
						textTransform: 'uppercase',
						fontSize: '0.78rem',
						color: 'var(--accent-strong)',
					}}>
					Portfolio
				</Typography>
				<Typography
					variant='h3'
					fontWeight={700}
					sx={{
						mt: 1,
						fontFamily: '"Inter", sans-serif',
						fontSize: { xs: '2.1rem', md: '2.7rem' },
					}}>
					Aiden Mayoros
				</Typography>
				<Typography
					variant='subtitle1'
					fontWeight={500}
					color='var(--text-secondary)'
					sx={{ mt: 0.5 }}>
					Full Stack Web Developer focused on clean UX and solid engineering
				</Typography>
				<Typography
					color='var(--text-secondary)'
					sx={{ mt: 2.5, lineHeight: 1.7, maxWidth: '44ch' }}>
					I build reliable web apps with React, TypeScript, and Node. This
					portfolio highlights projects where I solved real product and technical
					challenges from UI polish to backend architecture.
				</Typography>

				<Box display='flex' gap={1.5} mt={3}>
					<Button
						variant='contained'
						color='primary'
						href='/AidenResume.pdf'
						target='_blank'
						rel='noopener noreferrer'>
						View Resume
					</Button>
					<Button
						variant='outlined'
						color='primary'
						onClick={() => {
							const projectsSection = document.getElementById('projects');
							projectsSection?.scrollIntoView({ behavior: 'smooth' });
						}}>
						View Work
					</Button>
				</Box>
				<Box>
					<Navbar />
				</Box>
				<Box
					pt={4}
					display='flex'
					sx={{
						gap: 1,
						border: '1px solid var(--line-soft)',
						borderRadius: '999px',
						width: 'fit-content',
						px: 1,
						py: 0.4,
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
						icon={<GitHubIcon />}
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
						icon={<LinkedInIcon />}
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
						icon={<AssignmentInd />}
					/>
				</Box>
			</Box>
		</Box>
	);
}

export default LeftSide;
