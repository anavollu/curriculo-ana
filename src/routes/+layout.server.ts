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
					frontend: [
						{ name: 'html', icon: htmlIcon },
						{ name: 'css', icon: cssIcon },
						{ name: 'javascript', icon: javascriptIcon },
						{ name: 'react', icon: reactIcon },
						{ name: 'next.js', icon: nextJsIcon }
					],
					basicKnowledge: [
						{ name: 'node.js', icon: nextJsIcon },
						{ name: 'golang', icon: nextJsIcon },
						{ name: 'graphql', icon: nextJsIcon },
						{ name: 'REST', icon: nextJsIcon }
					],
					learning: [
						{ name: 'svelte', icon: nextJsIcon },
						{ name: 'tailwind', icon: nextJsIcon }
					],
					others: [
						{ name: 'mongoDB', icon: nextJsIcon },
						{ name: 'postgreSQL', icon: nextJsIcon },
						{ name: 'docker', icon: nextJsIcon },
						{ name: 'git', icon: nextJsIcon }
					]
				}
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
					link: 'acvollu@gmail.com',
					icon: emailIcon,
					description: 'copiar email'
				},
				github: {
					info: 'github.com/anavollu',
					link: 'https://github.com/anavollu',
					icon: githubIcon,
					description: 'acessar link'
				},
				phone: {
					info: '21 96970-7589',
					link: 'https://wa.me/5521969707589',
					icon: phoneIcon,
					description: 'link whatsapp'
				},
				linkedin: {
					info: 'linkedin.com/in/anavollu',
					link: 'https://www.linkedin.com/in/anavollu/',
					icon: linkedinIcon,
					description: 'acessar link'
				}
			}
		}
	};
}) satisfies LayoutServerLoad;
