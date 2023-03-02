<script>
	import desktopImage from '$lib/assets/home-desktop-image.svg';
	import Button from './button.svelte';
</script>

<div class="mx-11 my-9 flex h-full flex-col items-center justify-between">
	<div class="flex flex-col gap-2">
		<p class="text-center font-inter text-base uppercase tracking-widest text-blue">
			Desenvolvedora Front-end
		</p>
		<p class="text-center font-poppins text-3xl text-darkblue">Ana Carolina Vollu</p>
	</div>
	<img src={desktopImage} alt="Imagem de um computador" class="w-[284px]" />
	<div class="flex flex-col gap-8">
		<Button label="Projetos" size="large" page="/projetos" />
		<Button label="Currículo" size="large" page="/curriculo" />
	</div>
</div>
