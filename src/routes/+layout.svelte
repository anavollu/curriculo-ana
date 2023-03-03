<script>
	import '../app.css';
	import { page } from '$app/stores';
	import Menu from './menu.svelte';

	$: isHome = $page.url.pathname === '/';
</script>

<div class="flex h-full flex-col" class:bg-offwhite={!isHome} class:bg-lightblue={isHome}>
	<section class="relative inline-block" />
	<Menu />

	<div class="box-border flex h-full flex-col justify-around px-5 pt-[65px] pb-4">
		<slot />
	</div>
</div>
