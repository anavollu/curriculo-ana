<script lang="ts">
	import { slide } from 'svelte/transition';

	export let pages: { name: string; path: string }[];

	export let menuOpen = false;
</script>

{#if menuOpen}
	<div
		transition:slide
		class="absolute top-[75px] z-10 w-[230px] flex-col justify-center rounded-[10px] bg-candyblue"
	>
		{#each pages as { name, path }}
			{#if name !== 'Currículo'}
				<button
					on:click={() => {
						menuOpen = !menuOpen;
					}}
					class="w-full rounded-[10px] py-[10.5px] px-[25px] font-poppins text-lg text-blue hover:bg-blue hover:text-candyblue"
				>
					<a href={path}>{name}</a>
				</button>
			{/if}
		{/each}
	</div>
{/if}
