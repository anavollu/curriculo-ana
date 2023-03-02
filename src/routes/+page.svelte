<script>
	import desktopImage from '$lib/assets/home-desktop-image.svg';
	import Button from './button.svelte';
</script>

<div class="flex flex-col items-center">
	<p class="uppercase">Desenvolvedora Front-end</p>
	<p>Ana Carolina Vollu</p>
	<img src={desktopImage} alt="Imagem de um computador" />
	<div class="flex flex-col gap-8">
		<Button label="Projetos" size="large" page="/projetos" />
		<Button label="Currículo" size="large" page="/curriculo" />
	</div>
</div>
