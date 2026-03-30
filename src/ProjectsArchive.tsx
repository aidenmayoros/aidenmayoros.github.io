import { Box, Typography, IconButton } from '@mui/material';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import projects from './projects';

function ProjectsArchive() {
	const navigate = useNavigate();

	const handleBackButtonClick = () => {
		navigate('/');
	};

	return (
		<Box sx={{ maxWidth: '980px', mx: 'auto', px: { xs: 2, md: 3 }, pb: 4 }}>
			<Box pt={4}>
				<IconButton onClick={() => handleBackButtonClick()}>
					<ArrowBack sx={{ color: 'var(--accent-strong)' }} />
					<Typography color={'var(--accent-strong)'}>Aiden Mayoros</Typography>
				</IconButton>
				<Typography
					variant='h3'
					pt={1}
					sx={{
						textAlign: { xs: 'left', md: 'center' },
						fontFamily: '"Space Grotesk", sans-serif',
					}}>
					All Projects
				</Typography>
			</Box>

			<Box
				display={'flex'}
				justifyContent={'center'}
				alignItems={'center'}
				sx={{ p: 2 }}>
				<Table
					sx={{
						maxWidth: { xs: '100vw', md: '70vw', lg: '56vw' },
						backgroundColor: 'rgba(255, 255, 255, 0.02)',
						border: '1px solid var(--line-soft)',
						borderRadius: '20px',
						overflow: 'hidden',
					}}>
					<TableHead>
						<TableRow>
							<TableCell
								sx={{ color: 'white', borderBottom: '1px solid var(--line-soft)' }}>
								Year
							</TableCell>
							<TableCell
								sx={{ color: 'white', borderBottom: '1px solid var(--line-soft)' }}>
								Project Link
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{projects.map((project, index) => (
							<TableRow key={index}>
								<TableCell sx={{ borderBottom: '1px solid var(--line-soft)' }}>
									{project.year}
								</TableCell>
								<TableCell
									sx={{
										borderBottom: '1px solid var(--line-soft)',
									}}>
									<Link
										href={project.appLink}
										underline='hover'
										color={'var(--accent-strong)'}
										target='_blank'
										rel='noopener noreferrer'>
										{project.projectName}
									</Link>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Box>
		</Box>
	);
}

export default ProjectsArchive;
