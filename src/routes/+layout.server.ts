import type { LayoutServerLoad } from './$types';

const paths: Record<string, { name: string }> = {
	'/': { name: 'Home' },
	'/habilidades': { name: 'Habilidades' },
	'/projetos': { name: 'Projetos' },
	'/formacao': { name: 'Formação' },
	'/contato': { name: 'Contato' }
};
const items = Object.keys(paths).map((key) => ({ path: key, ...(paths[key] ?? {}) }));

export const load = (async () => {
	return {
		resume: {
			home: {
				title: 'Ana Carolina Vollu',
				description: 'Desenvolvedora front-end',
				primaryButton: 'Projetos',
				secondaryButton: 'Currículo',
				menuItems: items,
				menuPaths: paths
			},
			ability: {
				title: 'Habilidades',
				'front-end': ['html', 'css', 'javascript', 'react', 'next.js'],
				'basic knowledge': ['node.js', 'golang', 'graphql', 'REST'],
				learning: ['svelte', 'tailwind'],
				others: ['mongoDB', 'postgreSQL', 'docker', 'git']
			},
			projects: {
				title: 'Projetos',
				one: {
					name: 'Pokémon Info App',
					description: 'Site inspirado na pokédex para exibir informações dos Pokémons',
					technologies: ['react', 'next.js'],
					vercelLink: 'https://pokemon-next-lake.vercel.app/',
					gitHubLink: 'https://github.com/anavollu/pokemon-next'
				}
			},
			education: {
				title: 'Formação',
				one: {
					name: 'REACT: Desenvolvendo com JavaScript',
					type: 'Curso',
					institution: 'Alura',
					year: '2022'
				},
				two: {
					name: 'Docker',
					type: 'Curso',
					institution: 'Fullcycle',
					year: '2022'
				},
				three: {
					name: 'Javascript I e II',
					type: 'Curso',
					institution: 'Alura',
					year: '2021'
				},
				four: {
					name: 'Sistemas de Informação',
					type: 'Graduação',
					institution: 'UFF',
					year: '2016-2021'
				}
			},
			contact: {
				title: 'Contato',
				email: {
					info: 'acvollu@gmail.com',
					link: 'acvollu@gmail.com'
				},
				github: {
					info: 'github.com/anavollu',
					link: 'https://github.com/anavollu'
				},
				phone: {
					info: '21 96970-7589',
					link: 'https://wa.me/5521969707589'
				},
				linkedin: {
					info: 'linkedin.com/in/anavollu',
					link: 'https://www.linkedin.com/in/anavollu/'
				}
			}
		}
	};
}) satisfies LayoutServerLoad;
