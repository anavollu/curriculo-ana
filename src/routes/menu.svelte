<script>
	import menuIcon from '$lib/assets/menu-icon.svg';
	import MenuItems from './menu-items.svelte';

	export let menuOpen = false;
</script>

<div class="absolute flex self-start md:hidden">
	<button
		on:click={() => {
			menuOpen = !menuOpen;
		}}
		class="rounded-[10px] bg-offwhite p-[11px] active:bg-blue"
	>
		<img src={menuIcon} alt="Ícone do menu" />
	</button>
</div>
<MenuItems bind:menuOpen />
