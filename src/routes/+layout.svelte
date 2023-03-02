<script>
	import '../app.css';
	import MenuItems from './menu-items.svelte';
	import Menu from './menu.svelte';

	let menuOpen = false;
</script>

<div class="flex h-full flex-col bg-lightblue">
	<section class="relative inline-block" />
	<Menu
		on:click={() => {
			menuOpen = !menuOpen;
		}}
	/>
	<MenuItems bind:menuOpen />

	<div class="box-border flex h-full flex-col justify-around px-5 pt-[65px] pb-4">
		<slot />
	</div>
</div>
