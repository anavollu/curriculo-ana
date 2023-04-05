<script lang="ts">
	import ProjectCard from './project-card.svelte';
	export let data;
	const { title, ...projects } = data.resume.projects;
</script>

<div
	class="flex w-full flex-col items-center gap-9 leading-[30px] md:grid md:grid-cols-2 lg:overflow-y-scroll"
>
	{#each Object.entries(projects) as [path, projectItem]}
		<ProjectCard {path} name={projectItem.name} image={projectItem.image} />
	{/each}
</div>
