import { Box, Typography } from '@mui/material';
import JavascriptIcon from '../assets/skills-icons/javascript.svg';
import TypeScript from '../assets/skills-icons/typescript.svg';
import React from '../assets/skills-icons/react.svg';
import NodeJs from '../assets/skills-icons/node-js.svg';
import Express from '../assets/skills-icons/express.svg';
import HTML5 from '../assets/skills-icons/html5.svg';
import CSS from '../assets/skills-icons/css.svg';
import Git from '../assets/skills-icons/git.svg';
import GitHub from '../assets/skills-icons/github.svg';
import Bootstrap from '../assets/skills-icons/bootstrap.svg';
import MaterialUI from '../assets/skills-icons/material-ui.svg';
import Heroku from '../assets/skills-icons/heroku.svg';
import MongoDB from '../assets/skills-icons/mongodb.svg';
import Postman from '../assets/skills-icons/postman.svg';

const skillsList = [
	{ skillName: 'Javascript', image: JavascriptIcon },
	{ skillName: 'TypeScript', image: TypeScript },
	{ skillName: 'React', image: React },
	{ skillName: 'Node.Js', image: NodeJs },
	{ skillName: 'Express', image: Express },
	{ skillName: 'HTML5', image: HTML5 },
	{ skillName: 'CSS', image: CSS },
	{ skillName: 'Git', image: Git },
	{ skillName: 'GitHub', image: GitHub },
	{ skillName: 'Bootstrap', image: Bootstrap },
	{ skillName: 'Material Design', image: MaterialUI },
	{ skillName: 'Heroku', image: Heroku },
	{ skillName: 'MongoDB', image: MongoDB },
	{ skillName: 'Postman', image: Postman },
];

function Skills() {
	return (
		<Box display={'flex'} flexDirection={'column'} gap={2}>
			<Typography variant='h5' sx={{ fontFamily: '"Space Grotesk", sans-serif' }}>
				Skills
			</Typography>
			<Box display={'flex'} flexWrap={'wrap'} gap={'12px'}>
				{skillsList.map((skill) => (
					<Box
						key={skill.skillName}
						sx={{
							backgroundColor: 'rgba(79, 209, 197, 0.12)',
							border: '1px solid rgba(79, 209, 197, 0.2)',
							px: 1.2,
							py: 0.8,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: '999px',
							gap: '8px',
							'&:hover': {
								backgroundColor: 'rgba(79, 209, 197, 0.2)',
								transition: 'all 180ms ease',
							},
						}}>
						<img src={skill.image} alt={skill.skillName} width={30} />
						<Typography sx={{ color: 'var(--accent-strong)', fontSize: '0.94rem' }}>
							{skill.skillName}
						</Typography>
					</Box>
				))}
			</Box>
		</Box>
	);
}

export default Skills;
