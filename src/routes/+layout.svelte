<script lang="ts">
	import '../app.css';
	import { navigating, page } from '$app/stores';
	import redLine from '$lib/assets/red-line.svg';
	import homeBg from '$lib/assets/home-bg.png?w=1920&h=563&format=webp&imagetools';
	import Menu from './menu.svelte';
	import Button from './button.svelte';
	import { initializeChatbot } from './chatbot';
	import type { LayoutData } from './$types';
	import { onNavigate } from '$app/navigation';
	import { navigatingTo } from '$lib/store';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import type { Snippet } from 'svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	let isHome = $derived($page.url.pathname === '/');

	let basePath = $derived('/' + $page.url.pathname.split('/')[1]);
	let pageName = $derived(data.resume.home.menuPaths[basePath].name);

	onMount(() => {
    initializeChatbot();
  });

	onNavigate((navigation) => {
		// @ts-ignore
		if (!document.startViewTransition) return;

		if (browser) {
			const to = navigation.to?.route.id;
			if (to) navigatingTo.set(to);
		}
		return new Promise((resolve) => {
			// @ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<hr
	class:hidden={!$navigating}
	class="fixed inset-0 z-50 flex animate-pulse border-4 border-blue"
	style="view-transition-name: navigating-loading;"
/>

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
							class="border w-[100px] rounded-[35px] border-blue px-4 py-3 text-center font-poppins text-xs uppercase leading-4 text-blue hover:border-darkblue hover:text-darkblue lg:w-[135px] lg:rounded-[28.58px] lg:py-4 lg:text-[14px]"
							onclick={() => {
								if (history.length <= 1) {
									window.location.pathname = '/';
									return;
								}
								history.back();
							}}>Voltar</button
						>
						<button
							class="w-[100px] rounded-[35px] bg-blue px-4 py-3 text-center font-poppins text-xs uppercase leading-4 text-offwhite hover:bg-darkblue lg:w-[135px] lg:rounded-[28.58px] lg:py-4 lg:text-[14px]"
							onclick={() => {
								window.print();
							}}>Imprimir</button
						>
					</div>
				{/if}
			{/if}
			{#if isHome}
				<div class="hidden lg:inline lg:h-12">
				</div>
			{/if}
		</div>

		<div class="my-[29px] flex flex-col items-center justify-between px-5 lg:min-h-[78vh]">
			{#if !isHome}
				<div class="mb-8 flex flex-col text-center">
					<p class="font-poppins text-3xl capitalize" id="page-name-id">
						{pageName}
					</p>
					<img src={redLine} alt="Linha vermelha" />
				</div>
			{/if}
			{@render children()}
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
	@reference "../app.css";

	:global(html) {
		background-color: var(--color-offwhite);
	}
</style>
