<script lang="ts">
	import ProjectCard from './project-card.svelte';
	export let data;
	const { title, ...projects } = data.resume.projects;
</script>

<div class="flex w-full flex-col gap-9 overflow-scroll leading-[30px]">
	{#each Object.entries(projects) as [path, projectItem]}
		<ProjectCard {path} name={projectItem.name} image={projectItem.image} />
	{/each}
</div>
