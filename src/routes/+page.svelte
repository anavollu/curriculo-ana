<script lang="ts">
	import type { LayoutServerData } from './$types';
	import desktopImage from '$lib/assets/home-desktop-image.svg';
	import Button from './button.svelte';

	export let data: LayoutServerData;
</script>

<div class="flex h-[85vh] flex-col items-center justify-evenly py-6 px-6">
	<div class="flex w-[70vw] flex-col items-center gap-8 lg:flex-row lg:justify-between">
		<div class="flex flex-col gap-2 lg:min-w-[455px] lg:flex-col-reverse lg:items-start">
			<p
				class="text-center font-inter text-base uppercase tracking-widest text-blue lg:text-xl xl:text-2xl"
			>
				{data.resume.home.description}
			</p>
			<p class="text-center font-poppins text-3xl text-darkblue lg:text-5xl xl:text-6xl">
				{data.resume.home.title}
			</p>
		</div>
		<img
			src={desktopImage}
			alt="Imagem de um computador"
			class="w-[284px] flex-grow lg:min-w-[284px] lg:max-w-[552px]"
		/>
	</div>
	<div class="flex flex-col gap-8 lg:flex-row">
		<Button label={data.resume.home.primaryButton} size="large" page="/projetos" />
		<Button label={data.resume.home.secondaryButton} size="large" page="/curriculo" />
	</div>
</div>
