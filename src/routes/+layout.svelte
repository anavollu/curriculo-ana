<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import redLine from '$lib/assets/red-line.svg';
	import Menu from './menu.svelte';
	import Button from './button.svelte';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;

	$: isHome = $page.url.pathname === '/';
	$: pageName =
		$page.url.pathname.substring(1) === 'formacao' ? 'formação' : $page.url.pathname.substring(1);
</script>

<div
	class="flex h-auto min-h-full flex-col"
	class:bg-offwhite={!isHome}
	class:bg-lightblue={isHome}
>
	<div class="flex justify-between px-5 py-4">
		<div>
			<Menu />
		</div>
		{#if !isHome}
			<Button label={data.resume.home.secondaryButton} page="curriculo" size="small" />
		{/if}
	</div>

	<div class="box-border flex h-full flex-col items-center justify-around px-5 pt-[65px] pb-4">
		{#if !isHome}
			<div class="mb-5 flex flex-col text-center">
				<p class="font-poppins text-3xl capitalize">
					{pageName}
				</p>
				<img src={redLine} alt="Linha vermelha" />
			</div>
		{/if}
		<slot />
	</div>
</div>
