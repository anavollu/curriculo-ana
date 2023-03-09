<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import redLine from '$lib/assets/red-line.svg';
	import Menu from './menu.svelte';
	import Button from './button.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	$: isHome = $page.url.pathname === '/';

	$: pageName = data.resume.home.menuPaths[$page.url.pathname]?.name ?? '';
</script>

<div
	class="flex h-auto min-h-full flex-col"
	class:bg-offwhite={!isHome}
	class:bg-lightblue={isHome}
>
	<div class="flex justify-between px-5 py-4">
		<div>
			<Menu pages={data.resume.home.menuItems} />
		</div>
		{#if !isHome}
			<Button label={data.resume.home.secondaryButton} page="curriculo" size="small" />
		{/if}
	</div>

	<div class="flex h-[calc(100vh-70px)] flex-col items-center justify-evenly px-5 pb-4">
		{#if !isHome}
			<div class="flex flex-col text-center">
				<p class="font-poppins text-3xl capitalize">
					{pageName}
				</p>
				<img src={redLine} alt="Linha vermelha" />
			</div>
		{/if}
		<slot />
	</div>
</div>
