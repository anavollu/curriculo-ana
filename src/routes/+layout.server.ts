import type { LayoutServerLoad } from './$types';
import emailIcon from '$lib/assets/email-icon.svg';
import phoneIcon from '$lib/assets/phone-icon.svg';
import githubIcon from '$lib/assets/github-icon.svg';
import linkedinIcon from '$lib/assets/linkedin-icon.svg';
import htmlIcon from '$lib/assets/html-icon.svg';
import cssIcon from '$lib/assets/css-icon.svg';
import javascriptIcon from '$lib/assets/javascript-icon.svg';
import reactIcon from '$lib/assets/react-icon.svg';
import nextJsIcon from '$lib/assets/next-icon.svg';
import nodeJsIcon from '$lib/assets/nodejs-icon.svg';
import graphqlIcon from '$lib/assets/graphql-icon.svg';
import golangIcon from '$lib/assets/golang-icon.svg';
import mongodbIcon from '$lib/assets/mongo-icon.svg';
import postgresqlIcon from '$lib/assets/postgresql-icon.svg';
import dockerIcon from '$lib/assets/docker-icon.svg';
import gitIcon from '$lib/assets/git-icon.svg';
import svelteIcon from '$lib/assets/svelte-icon.svg';
import tailwindIcon from '$lib/assets/tailwind-icon.svg';

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
				carouselItems: {
					front_end: [
						{ name: 'html', icon: htmlIcon },
						{ name: 'css', icon: cssIcon },
						{ name: 'javascript', icon: javascriptIcon },
						{ name: 'react', icon: reactIcon },
						{ name: 'next.js', icon: nextJsIcon }
					],
					basic_knowledge: [
						{ name: 'node.js', icon: nodeJsIcon },
						{ name: 'golang', icon: golangIcon },
						{ name: 'graphql', icon: graphqlIcon }
					],
					learning: [
						{ name: 'svelte', icon: svelteIcon },
						{ name: 'tailwind', icon: tailwindIcon }
					],
					others: [
						{ name: 'mongoDB', icon: mongodbIcon },
						{ name: 'postgreSQL', icon: postgresqlIcon },
						{ name: 'docker', icon: dockerIcon },
						{ name: 'git', icon: gitIcon }
					]
				}
			},
			projects: {
				title: 'Projetos',
				pokemon: {
					name: 'Pokémon Info App',
					image: '$lib/assets/pokemon-next.png',
					description: 'Site inspirado na pokédex para exibir informações dos Pokémons',
					technologies: ['react', 'next.js'],
					vercelLink: 'https://pokemon-next-lake.vercel.app/',
					gitHubLink: 'https://github.com/anavollu/pokemon-next'
				},
				pokemon2: {
					name: 'Pokémon Info App',
					image: '$lib/assets/pokemon-next.png',
					description: 'Site inspirado na pokédex para exibir informações dos Pokémons',
					technologies: ['react', 'next.js'],
					vercelLink: 'https://pokemon-next-lake.vercel.app/',
					gitHubLink: 'https://github.com/anavollu/pokemon-next'
				},
				pokemon3: {
					name: 'Pokémon Info App',
					image: '$lib/assets/pokemon-next.png',
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
					link: 'acvollu@gmail.com',
					icon: emailIcon,
					description: 'copiar email',
					type: 'copy' as const
				},
				github: {
					info: 'github.com/anavollu',
					link: 'https://github.com/anavollu',
					icon: githubIcon,
					description: 'acessar link',
					type: 'link' as const
				},
				phone: {
					info: '21 96970-7589',
					link: 'https://wa.me/5521969707589',
					icon: phoneIcon,
					description: 'link whatsapp',
					type: 'link' as const
				},
				linkedin: {
					info: 'linkedin.com/in/anavollu',
					link: 'https://www.linkedin.com/in/anavollu/',
					icon: linkedinIcon,
					description: 'acessar link',
					type: 'link' as const
				}
			}
		}
	};
}) satisfies LayoutServerLoad;
