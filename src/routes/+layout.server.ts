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
import awsIcon from '$lib/assets/aws-icon.svg';
import htmxIcon from '$lib/assets/htmx-icon.svg';

const paths: Record<string, { name: string }> = {
	'/': { name: 'Home' },
	'/habilidades': { name: 'Habilidades' },
	'/projetos': { name: 'Projetos' },
	'/experiencia': { name: 'Experiência' },
	'/formacao': { name: 'Formação' },
	'/contato': { name: 'Contato' },
	'/curriculo': { name: 'Currículo' }
};
const items = Object.keys(paths).map((key) => ({ path: key, ...(paths[key] ?? {}) }));

export const load = (async () => {
	return {
		resume: {
			about: {
				title: 'Sobre mim',
				description:
					'Minha trajetória profissional começou na área de suporte em TI, onde desenvolvi habilidades em resolução de problemas e gestão de sistemas. Em seguida, trabalhei com dados, focando em ETL e integração de sistemas, o que me proporcionou a compreensão de processos e análise de informações. Em 2022, fiz a transição para a programação e, atualmente, estou estudando sobre modelos de linguagem (LLMs) e chatbots.'
			},
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
						{ name: 'svelte', icon: svelteIcon },
						{ name: 'tailwind', icon: tailwindIcon }
					],
					conhecimento_básico: [
						{ name: 'next.js', icon: nextJsIcon },
						{ name: 'node.js', icon: nodeJsIcon },
						{ name: 'graphql', icon: graphqlIcon },
						{ name: 'aws', icon: awsIcon },
						{ name: 'htmx', icon: htmxIcon },
						{ name: 'react', icon: reactIcon }
					],
					outros: [
						{ name: 'mongoDB', icon: mongodbIcon },
						{ name: 'postgreSQL', icon: postgresqlIcon },
						{ name: 'docker', icon: dockerIcon },
						{ name: 'golang', icon: golangIcon },
						{ name: 'git', icon: gitIcon }
					]
				}
			},
			projects: {
				title: 'Projetos',
				pokemon: {
					name: 'Pokémon Info App',
					image: '/site-pokemon.png',
					description: 'Site inspirado na pokédex para exibir informações dos Pokémons',
					technologies: ['react', 'next.js'],
					vercelLink: 'https://pokemon-next-lake.vercel.app/',
					gitHubLink: 'https://github.com/anavollu/pokemon-next',
					figmaLink:
						'https://www.figma.com/file/my6CKR5L2w8v4WneaTURQZ/Projeto-Intro-ao-React-(Pok%C3%A9mon)?node-id=196%3A1418&t=xyKOo3WGzdnGabOY-1'
				},
				resume: {
					name: 'Currículo',
					image: '/site-curriculo.png',
					description: 'Site com minhas informações profissionais e formação',
					technologies: ['svelte', 'tailwind'],
					vercelLink: 'https://anavollu.com/',
					gitHubLink: 'https://github.com/anavollu/curriculo-ana',
					figmaLink:
						'https://www.figma.com/file/AR93wnXDPmoCPfwxui0I68/Resume-Ana-Carolina-Vollu?node-id=92%3A1329&t=ypkH6oXutK9UXVdM-1'
				},
				cynthia: {
					name: 'Cynthia Vollu',
					image: '/site-cynthia-vollu.png',
					description: 'Site para maquiadora e hair stylist Cynthia Vollu',
					technologies: ['svelte', 'tailwind'],
					vercelLink: 'https://cynthia-vollu.vercel.app/',
					gitHubLink: 'https://github.com/anavollu/site-cynthia',
					figmaLink:
						'https://www.figma.com/file/9lUb0kqCM9ijs5DLALz5sl/Site-Cynthia-Vollu?node-id=117-18&t=NMsaNu5T9fbAPkTG-0'
				},
				felipeJader: {
					name: 'Dr. Felipe Jader',
					image: '/site-felipe-jader.png',
					description: 'Site profissional para o ortopedista Felipe Jader',
					technologies: ['sveltekit', 'tailwind'],
					vercelLink: 'https://drfelipejader.com.br/',
					gitHubLink: '',
					figmaLink: ''
				}
			},
			experience: {
				title: 'Experiência profissional',
				one: {
					company: '',
					position: 'Freelancer em desenvolvimento',
					description:
						'Desenvolvimento e manutenção de sites: Conhecimento em tecnologias como JavaScript, React, MongoDB, Git, WordPress, Svelte e Tailwind CSS. Conhecimento adicional em Golang, GraphQL e Google Cloud Platform (GCP). Implementação de Tags e Scripts: Configuração e implementação de tags de rastreamento e scripts em websites para monitoramento e análise de dados, utilizando ferramentas como Google Tag Manager, Google Analytics e outros sistemas de gerenciamento de tags. Envio de Conversões via Postbacks: Integração de postbacks para envio de conversões e eventos para plataformas de marketing e análise e rastreabilidade de campanhas.',
					year: '2022-atualmente'
				},
				two: {
					company: 'Sensor Watch',
					position: 'Desenvolvedora fullstack',
					description:
						'Projeto e implementação de soluções utilizando tecnologias como Golang, HTMX, Tailwind CSS, PostgreSQL (PSQL), Git e AWS.',
					year: '2023'
				},
				three: {
					company: 'IBM',
					position: 'Estagiária e Analista de BI',
					description:
						'Compreensão das necessidades do cliente para criar interfaces de integração eficazes. Desenvolvimento e execução de testes unitários no Informatica PowerCenter e SQL. Elaboração de documentação técnica detalhada e criação de scripts em Shell. Aplicação de metodologia Agile para execução de projetos.',
					year: '2020-2021'
				},
				four: {
					company: 'Fundação Euclides da Cunha',
					position: 'Bolsista e Auxiliar de Tecnologia da Informação',
					description:
						'Fornecimento de suporte técnico, elaboração de relatórios simples de desempenho da equipe utilizando PowerBI. Utilização do Redmine para o acompanhamento e organização das atividades da equipe, com aplicação da metodologia Agile. Pesquisa de tecnologias para otimização dos processos da empresa, incluindo estudo de implementação de ferramentas como Google GSuite.',
					year: '2017-2019'
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
