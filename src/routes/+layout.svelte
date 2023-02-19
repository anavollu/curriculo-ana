<script>
	import '../app.css';
	import menuIcon from '$lib/assets/menu-icon.svg';

	let pages = [
		{ name: 'Home' },
		{ name: 'Habilidades' },
		{ name: 'Projetos' },
		{ name: 'Formação' },
		{ name: 'Contato' }
	];
</script>

<div
	class="flex h-full flex-col bg-lightblue sm:bg-[url('/home-background.svg')] sm:bg-bottom sm:bg-no-repeat"
>
	<div class="absolute mt-3 ml-5 flex self-start sm:hidden">
		<button class="rounded-[10px] bg-offwhite p-[11px]">
			<img src={menuIcon} alt="Ícone do menu" />
		</button>
	</div>
	<div
		class="absolute mt-3 ml-5 hidden w-[230px] flex-col justify-center rounded-[10px] bg-candyblue sm:hidden"
	>
		{#each pages as { name }, i}
			<button
				class="rounded-[10px] py-[10.5px] px-[25px] font-poppins text-lg text-blue hover:bg-blue hover:text-candyblue"
				>{name}</button
			>
		{/each}
	</div>
	<div class="box-border flex h-full flex-col justify-around px-5 pt-[65px] pb-4">
		<slot />
	</div>
</div>
