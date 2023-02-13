<script>
	import bgImage from '$lib/assets/home-background.svg';
	import workstationImage from '$lib/assets/home-desktop-image.svg';

	let pages = [
		{ name: 'Home' },
		{ name: 'Habilidades' },
		{ name: 'Projetos' },
		{ name: 'Formação' },
		{ name: 'Sobre' },
		{ name: 'Contato' }
	];
</script>

<div
	class="flex min-h-screen flex-col justify-between bg-lightblue bg-[url('/home-background.svg')] bg-bottom bg-no-repeat"
>
	<div class="mx-[199px] mt-[155px] flex items-center justify-between">
		<div>
			<h1 class="font-poppins text-7xl text-darkblue">Ana Carolina Vollu</h1>
			<h1 class="font-inter text-2xl tracking-widest text-blue">DESENVOLVEDORA FRONT-END</h1>
		</div>
		<div>
			<img class="" src={workstationImage} alt="Imagem de estação de trabalho" />
		</div>
	</div>
	<div class=" flex justify-center gap-6">
		<button class="h-[78px] w-[284px] rounded-[47px] bg-blue text-3xl text-offwhite"
			>PROJETOS</button
		>
		<button class="h-[78px] w-[284px] rounded-[47px] bg-blue text-3xl text-offwhite"
			>CURRÍCULO</button
		>
	</div>
	<div class="mb-5 flex gap-[1px] self-center rounded-[47px] bg-candyblue">
		{#each pages as { name }, i}
			<button
				class="rounded-[47px] py-[10.5px] px-[25px] font-poppins text-lg text-blue hover:bg-blue hover:text-candyblue"
				>{name}</button
			>
		{/each}
	</div>
</div>

<style lang="postcss">
	:global(html) {
	}
</style>
