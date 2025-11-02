<script lang="ts">
	import menuIcon from '$lib/assets/menu-icon.svg';
	import MenuItems from './menu-items.svelte';
	import { page } from '$app/stores';
	import { navigatingTo } from '$lib/store';

	let { menuOpen = $bindable(false), pages }: {
		menuOpen?: boolean;
		pages: {
			name: string;
			path: string;
		}[];
	} = $props();
</script>

<!-- Small devices -->
<div class="flex self-start lg:hidden">
	<button
		onclick={() => {
			menuOpen = !menuOpen;
		}}
		class="rounded-[10px] bg-offwhite p-[11px] active:bg-blue"
	>
		<img src={menuIcon} alt="Ícone do menu" />
	</button>
</div>
<MenuItems {pages} bind:menuOpen />

<!-- Large devices -->
<div class="hidden lg:flex lg:rounded-[30px] lg:bg-candyblue">
	{#each pages as p}
		{#if p.name !== 'Currículo'}
			<a
				class="relative z-10 rounded-[30px] border border-candyblue px-[25px] py-[10.5px] font-poppins text-lg leading-[21.5px] text-blue hover:border-blue {p.path ===
				$navigatingTo
					? 'border-blue'
					: ''}"
				href={p.path}
			>
				{#if p.path === $page.route.id}
					<div
						class="absolute inset-0 -z-10 h-full w-full rounded-[30px] border border-blue"
						style="view-transition-name: nav-item-Projects;"
					></div>
				{/if}
				{p.name}
			</a>
		{/if}
	{/each}
</div>
