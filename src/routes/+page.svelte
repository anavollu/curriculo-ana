<script>
	import workstationImage from '$lib/assets/home-desktop-image.svg';

	const imgConfig = {
		src: workstationImage,
		alt: 'Imagem de estação de trabalho'
	};
</script>

<div
	class="flex flex-col items-center justify-between sm:flex-row md:mx-[100px] md:mt-[50px] lg:mx-[199px] lg:mt-[155px]"
>
	<div class="flex flex-col items-center justify-between text-center">
		<h1
			class="mb-[10px] font-inter text-base uppercase tracking-widest text-blue sm:mb-[10px] sm:text-2xl"
		>
			Desenvolvedora front-end
		</h1>
		<h1 class="font-poppins text-3xl text-darkblue sm:text-7xl">Ana Carolina Vollu</h1>
	</div>
	<img class="hidden md:inline-block" src={imgConfig.src} alt={imgConfig.alt} />
</div>
<img class="m-auto h-full min-h-0 py-10 md:hidden" src={imgConfig.src} alt={imgConfig.alt} />
<div class="flex flex-col justify-center gap-6 px-9 sm:my-6 sm:flex-row">
	<button
		class="h-[58px] rounded-[47px] bg-blue text-xl uppercase text-offwhite sm:h-[78px] sm:text-3xl"
		>Projetos</button
	>
	<button
		class="h-[58px] rounded-[47px] bg-blue text-xl uppercase text-offwhite sm:h-[78px] sm:text-3xl"
		>Currículo</button
	>
</div>

<!-- <div
class="mt-[102px] hidden flex-wrap justify-center gap-[1px] self-center rounded-[47px] bg-candyblue py-2 sm:flex lg:mb-5 lg:p-0"
>
{#each pages as { name }, i}
  <button
    class="rounded-[47px] py-[10.5px] px-[25px] font-poppins text-lg text-blue hover:bg-blue hover:text-candyblue"
    >{name}</button
  >
{/each}
</div> -->
