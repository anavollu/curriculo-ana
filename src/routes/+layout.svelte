<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import Menu from './menu.svelte';
	import Button from './button.svelte';
	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;

	$: isHome = $page.url.pathname === '/';
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

	<div class="box-border flex h-full flex-col justify-around px-5 pt-[65px] pb-4">
		<slot />
	</div>
</div>
