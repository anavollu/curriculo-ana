<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import redLine from '$lib/assets/red-line.svg';
	// @ts-ignore
	import homeBg from '$lib/assets/home-bg.png?w=1920&h=563&format=webp';
	import Menu from './menu.svelte';
	import Button from './button.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	$: isHome = $page.url.pathname === '/';

	$: basePath = '/' + $page.url.pathname.split('/')[1];
	$: pageName = data.resume.home.menuPaths[basePath].name;
</script>

<div class="flex min-h-full flex-col">
	<div class="relative z-10 mx-auto w-full max-w-[1000px]">
		<div
			class:lg:invisible={isHome}
			class:bg-offwhite={!isHome}
			class="sticky top-0 z-20 flex items-center justify-between bg-lightblue px-5 py-2 print:hidden lg:px-12 lg:py-4"
		>
			<div class="lg:hidden">
				<Menu pages={data.resume.home.menuItems} />
			</div>
			{#if !isHome}
				<div
					class="hidden font-inter uppercase leading-[19.36px] tracking-widest text-blue lg:inline"
				>
					Ana Carolina Vollu
				</div>
				{#if pageName != 'Currículo'}
					<Button label={data.resume.home.secondaryButton} page="curriculo" size="small" />
				{:else}
					<div class="flex gap-1 lg:gap-3">
						<button
							class="border-1 w-[100px] rounded-[35px] border border-blue px-4 py-3 text-center font-poppins text-xs uppercase leading-4 text-blue hover:border-darkblue hover:text-darkblue lg:w-[135px] lg:rounded-[28.58px] lg:py-4 lg:text-[14px]"
							on:click={() => {
								if (history.length <= 1) {
									window.location.pathname = '/';
									return;
								}
								history.back();
							}}>Voltar</button
						>
						<button
							class="w-[100px] rounded-[35px] bg-blue px-4 py-3 text-center font-poppins text-xs uppercase leading-4 text-offwhite hover:bg-darkblue lg:w-[135px] lg:rounded-[28.58px] lg:py-4 lg:text-[14px]"
							on:click={() => {
								window.print();
							}}>Imprimir</button
						>
					</div>
				{/if}
			{/if}
			{#if isHome}
				<div class="hidden lg:inline lg:h-12" />
			{/if}
		</div>

		<div class="my-[29px] flex flex-col items-center justify-between px-5 lg:min-h-[78vh]">
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
