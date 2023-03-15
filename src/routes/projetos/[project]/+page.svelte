<script lang="ts">
	import { page } from '$app/stores';
	export let data;
	$: path = $page.url.pathname.replace('/projetos/', '');

	const { title, ...projects } = data.resume.projects;

	function getProjectKey(key: string): key is keyof typeof projects {
		return key in projects;
	}

	$: project = getProjectKey(path) ? projects[path] : null;
</script>

{#if project}
	<div>{project.name}</div>
	<div>{project.description}</div>
	<div>{project.image}</div>
	<div>{project.technologies}</div>
	<div>{project.gitHubLink}</div>
	<div>{project.vercelLink}</div>
{/if}
