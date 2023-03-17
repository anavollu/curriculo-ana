<script lang="ts">
	import { page } from '$app/stores';
	import ProjectCard from '../project-card.svelte';
	export let data;
	$: path = $page.url.pathname.replace('/projetos/', '');

	const { title, ...projects } = data.resume.projects;

	function getProjectKey(key: string): key is keyof typeof projects {
		return key in projects;
	}

	$: project = getProjectKey(path) ? projects[path] : null;
</script>

{#if project}
	<div class="text-poppins flex flex-col gap-2 self-start leading-[30px] text-blue">
		<ProjectCard {path} name={project.name} image={project.image} />
		<div class="mt-[13px] flex flex-col gap-1">
			<p class="uppercase">Descrição</p>
			<p class="text-sm text-black">{project.description}</p>
		</div>
		<div class="mb-9 flex flex-col gap-1">
			<p class="uppercase">Tecnologias</p>
			<p class="text-sm text-black">
				{project.technologies.map((str, i) => str.toUpperCase()).join(' | ')}
			</p>
		</div>
		<div class="uppercase underline">
			<a href={project.vercelLink} target="_blank" rel="noreferrer">
				Versão <span class="text-red">Live</span>
			</a>
			<br />
			<a href={project.gitHubLink} target="_blank" rel="noreferrer">
				Código no <span class="text-red">GitHub</span>
			</a>
			<br />
			<a href={project.figmaLink} target="_blank" rel="noreferrer">
				Desenho no <span class="text-red">Figma</span>
			</a>
		</div>
	</div>
{/if}
