<script lang="ts">
	import ProjectCard from './project-card.svelte';
	let { data } = $props();
	const { title, ...projects } = data.resume.projects;
</script>

<div
	class="flex w-full flex-col place-content-start gap-9 leading-[30px] md:grid md:grid-cols-2 lg:overflow-y-auto"
>
	{#each Object.entries(projects) as [path, projectItem]}
		<ProjectCard {path} name={projectItem.name} image={projectItem.image} />
	{/each}
</div>
