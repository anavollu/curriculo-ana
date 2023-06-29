<script lang="ts">
	import type { LayoutServerData } from './$types';
	import desktopImage from '$lib/assets/home-desktop-image.png?w=425&h=297&format=webp';
	import Button from './button.svelte';

	export let data: LayoutServerData;
</script>

<div
	id="home-container"
	class="flex flex-col items-center justify-around px-6 lg:justify-start lg:gap-16"
>
	<div class="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
		<div class="flex flex-col gap-2 lg:min-w-[455px] lg:flex-col-reverse lg:items-start">
			<p class="text-center font-inter text-base uppercase tracking-widest text-blue lg:text-xl">
				{data.resume.home.description}
			</p>
			<p class="text-center font-poppins text-3xl text-darkblue lg:text-5xl">
				{data.resume.home.title}
			</p>
		</div>
		<div class="max-w-[300px] flex-grow lg:max-w-max">
			<img src={desktopImage} alt="Imagem de um computador" />
		</div>
	</div>
	<div class="flex flex-col gap-8 lg:flex-row">
		<Button label={data.resume.home.primaryButton} size="large" page="/projetos" />
		<Button label={data.resume.home.secondaryButton} size="large" page="/curriculo" />
	</div>
</div>

<style lang="postcss">
	:global(html:has(#home-container)) {
		@apply bg-lightblue;
	}
</style>
