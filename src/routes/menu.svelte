<script lang="ts">
	import menuIcon from '$lib/assets/menu-icon.svg';
	import MenuItems from './menu-items.svelte';

	export let menuOpen = false;
	export let pages: {
		name: string;
		path: string;
	}[];
</script>

<div class="flex self-start lg:hidden">
	<button
		on:click={() => {
			menuOpen = !menuOpen;
		}}
		class="rounded-[10px] bg-offwhite p-[11px]  active:bg-blue"
	>
		<img src={menuIcon} alt="Ícone do menu" />
	</button>
</div>
<MenuItems {pages} bind:menuOpen />

<div class="hidden lg:flex lg:rounded-[30px] lg:bg-candyblue">
	{#each pages as page}
		{#if page.name !== 'Currículo'}
			<a
				class="rounded-[30px] px-[25px] py-[10.5px] font-poppins text-lg leading-[21.5px] text-blue hover:bg-blue hover:text-offwhite active:bg-blue active:text-offwhite"
				href={page.path}
			>
				{page.name}
			</a>
		{/if}
	{/each}
</div>
