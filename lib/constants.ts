export const siteConfig = {
	name: 'Engineering Portfolio',
	description:
		'A professional portfolio website template for engineering students.',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'About',
			href: '/about',
		},
		{
			title: 'Education',
			href: '/education',
		},
		{
			title: 'Skills',
			href: '/skills',
		},
		{
			title: 'Experience',
			href: '/experience',
		},
		{
			title: 'Projects',
			href: '/projects',
		},
		{
			title: 'Certificates',
			href: '/certificates',
		},
		{
			title: 'Blog',
			href: '/blog',
		},
		{
			title: 'Contact',
			href: '/contact',
		},
	],
	links: {
		github: 'https://github.com/ErgiNadi',		
		instagram: 'https://www.instagram.com/apriliann.nadi/',
		email: 'mailto:nadiergi49@gmail.com',
		phone: 'tel:085643133641',
	},
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: 'Engineering Intern Gramedia',
		company: 'Tech Company',
		location: 'Matraman, Indonesia',
		startDate: 'jun 2022',
		endDate: 'jul 2025',
		description: [
			'Worked on developing and testing software components for embedded systems',
			'Collaborated with senior engineers on project planning and execution',
			'Implemented test procedures for quality assurance',
		],
		technologies: ['C++', 'Python', 'MATLAB', 'Git'],
	},
	{
		title: 'Book Publisher',
		company: 'Nawasena Mediaksara Utama',
		location: 'SOUTH JAKARTA, Indonesia',
		startDate: 'Jan 2026',
		endDate: 'Feb 2026',
		description: [
			'Assisted in research focusing on advanced materials for Book',
			'Conducted literature reviews and compiled research findings',
			'Performed data analysis and marketing books',
		],
		technologies: ['MATLAB', 'CAD', 'Data Analysis', 'Canva'],
	},
];

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: 'Smart Home Automation System',
		description:
			'Designed and implemented a smart home automation system using IoT technologies to control lighting, temperature, and security features.',
		image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
		tags: ['IoT', 'Arduino', 'C++', 'Mobile App'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Structural Analysis Software',
		description:
			'Developed software for structural analysis of beams and trusses using numerical methods and visualization techniques.',
		image: 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg',
		tags: ['MATLAB', 'Python', 'FEA', 'Structural Engineering'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Renewable Energy Monitoring',
		description:
			'Created a system to monitor and analyze performance of solar panels and wind turbines for optimal energy production.',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
		tags: ['Data Analysis', 'IoT', 'Renewable Energy', 'Visualization'],
		link: '#',
		repo: '#',
	},
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'Bachelor of Science',
		field: 'Mechanical Engineering',
		institution: 'University esa unggul',
		location: 'West Jakarta, Indonesia',
		startDate: 'Sep 2026',
		endDate: 'Present',
		gpa: '3.8/4.0',
		achievements: [
			'Dean\'s List (All Semesters)',
			'Academic Excellence Scholarship',
			'Senior Design Project Award',
		],
	},
	{
		degree: 'High School Diploma',
		field: 'Science and Mathematics',
		institution: 'SMAN 10 Tangerang',
		location: 'Tangerang City, Indonesia',
		startDate: 'Sep 2016',
		endDate: 'Jun 2019',
		gpa: '100.0/86.0',
		achievements: [
			'Valedictorian',
			'National Mathematics Competition Finalist',
			'Science Fair Gold Medal',
		],
	},
];

export type Certificate = {
	title: string;
	issuer: string;
	date: string;
	id?: string;
	url?: string;
	pdf?: string;
};

export const certificates: Certificate[] = [
	{
		title: 'Engineering Professional Certification',
		issuer: 'Professional Engineering Association',
		date: 'Nov 2023',
		id: 'CERT-12345',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
	{
		title: 'CAD Design Specialist',
		issuer: 'Autodesk',
		date: 'Jun 2023',
		id: 'CERT-67890',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
	{
		title: 'Project Management Fundamentals',
		issuer: 'Project Management Institute',
		date: 'Mar 2023',
		id: 'CERT-24680',
		url: '#',
		pdf: '/certificates/sample.pdf',
	},
];

export type Skill = {
	name: string;
	level: number; // 1-10
	category: 'technical' | 'software' | 'soft' | 'language';
};

export const skills: Skill[] = [
	// Technical Skills
	{ name: 'Mechanical Design', level: 9, category: 'technical' },
	{ name: 'Structural Analysis', level: 8, category: 'technical' },
	{ name: 'Thermodynamics', level: 7, category: 'technical' },
	{ name: 'Control Systems', level: 8, category: 'technical' },
	{ name: 'Circuit Design', level: 6, category: 'technical' },

	// Software Skills
	{ name: 'MATLAB', level: 9, category: 'software' },
	{ name: 'AutoCAD', level: 8, category: 'software' },
	{ name: 'SolidWorks', level: 9, category: 'software' },
	{ name: 'Python', level: 7, category: 'software' },
	{ name: 'C++', level: 6, category: 'software' },
	{ name: 'ANSYS', level: 8, category: 'software' },

	// Soft Skills
	{ name: 'Problem Solving', level: 9, category: 'soft' },
	{ name: 'Team Leadership', level: 8, category: 'soft' },
	{ name: 'Project Management', level: 7, category: 'soft' },
	{ name: 'Technical Writing', level: 8, category: 'soft' },
	{ name: 'Presentation', level: 7, category: 'soft' },

	// Languages
	{ name: 'English', level: 10, category: 'language' },
	{ name: 'Spanish', level: 6, category: 'language' },
	{ name: 'French', level: 4, category: 'language' },
];

export type BlogPost = {
	title: string;
	excerpt: string;
	date: string;
	author: string;
	image: string;
	slug: string;
};

export const blogPosts: BlogPost[] = [
	{
		title: 'Advances in Renewable Energy Technologies',
		excerpt: 'Exploring the latest innovations in renewable energy and their impact on sustainable development.',
		date: 'Mar 15, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
		slug: 'advances-in-renewable-energy',
	},
	{
		title: 'The Future of Robotics in Manufacturing',
		excerpt: 'How robotics and automation are revolutionizing the manufacturing industry and creating new opportunities.',
		date: 'Feb 22, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
		slug: 'future-of-robotics-manufacturing',
	},
	{
		title: 'Sustainable Building Materials in Modern Construction',
		excerpt: 'An analysis of eco-friendly building materials and their applications in contemporary architecture.',
		date: 'Jan 10, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
		slug: 'sustainable-building-materials',
	},
];