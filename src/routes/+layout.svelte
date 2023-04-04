<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import redLine from '$lib/assets/red-line.svg';
	import homeBg from '$lib/assets/home-bg.svg';
	import Menu from './menu.svelte';
	import Button from './button.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	$: isHome = $page.url.pathname === '/';

	$: basePath = '/' + $page.url.pathname.split('/')[1];
	$: pageName = data.resume.home.menuPaths[basePath].name;
</script>

<div class="flex min-h-full flex-col overflow-hidden">
	<div class="z-10 mx-auto w-full max-w-[1000px]">
		<div class="flex items-center justify-between px-5 pt-4 lg:px-12 lg:pt-6">
			<div class="lg:hidden">
				<Menu pages={data.resume.home.menuItems} />
			</div>
			{#if !isHome}
				<div
					class="hidden font-inter uppercase leading-[19.36px] tracking-widest text-blue lg:inline"
				>
					Ana Carolina Vollu
				</div>
				<Button label={data.resume.home.secondaryButton} page="curriculo" size="small" />
			{/if}
			{#if isHome}
				<div class="hidden lg:inline lg:h-12" />
			{/if}
		</div>

		<div class="my-[29px] flex flex-col items-center justify-between px-5 lg:h-[85vh]">
			{#if !isHome}
				<div class="mb-8 flex flex-col text-center">
					<p class="font-poppins text-3xl capitalize">
						{pageName}
					</p>
					<img src={redLine} alt="Linha vermelha" />
				</div>
			{/if}
			<slot />
			<div class="mt-3 hidden lg:inline">
				<Menu pages={data.resume.home.menuItems} />
			</div>
		</div>
	</div>
	{#if isHome}
		<img class="absolute bottom-0 hidden w-full lg:inline" src={homeBg} alt="Background" />
	{/if}
</div>

<style lang="postcss">
	:global(html) {
		@apply bg-offwhite;
	}
</style>
