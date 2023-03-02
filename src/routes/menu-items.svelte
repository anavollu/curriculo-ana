<script>
	import { slide } from 'svelte/transition';

	let pages = [
		{ name: 'Home' },
		{ name: 'Habilidades' },
		{ name: 'Projetos' },
		{ name: 'Formação' },
		{ name: 'Contato' }
	];

	export let menuOpen = false;
</script>

{#if menuOpen}
	<div
		transition:slide
		class="absolute top-[68px] ml-5 w-[230px] flex-col justify-center rounded-[10px] bg-candyblue"
	>
		{#each pages as { name }}
			<button
				class="w-full rounded-[10px] py-[10.5px] px-[25px] font-poppins text-lg text-blue hover:bg-blue hover:text-candyblue"
			>
				{name}
			</button>
		{/each}
	</div>
{/if}
