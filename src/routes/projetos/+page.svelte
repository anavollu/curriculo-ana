<script lang="ts">
	import ProjectCard from '../project-card.svelte';
	export let data;
	const { title, ...projects } = data.resume.projects;
</script>

<div class="flex w-full flex-col gap-9">
	{#each Object.values(projects) as projectItem}
		<ProjectCard {...projectItem} />
	{/each}
</div>
