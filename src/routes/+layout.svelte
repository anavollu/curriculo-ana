<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import redLine from '$lib/assets/red-line.svg';
	import Menu from './menu.svelte';
	import Button from './button.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	$: isHome = $page.url.pathname === '/';

	$: basePath = '/' + $page.url.pathname.split('/')[1];
	$: pageName = data.resume.home.menuPaths[basePath].name;
</script>

<div class="flex min-h-full flex-col overflow-hidden">
	<div class="mx-auto w-full max-w-[1440px]">
		<div class="flex justify-between px-5 py-4 lg:hidden">
			<div>
				<Menu pages={data.resume.home.menuItems} />
			</div>
			{#if !isHome}
				<Button label={data.resume.home.secondaryButton} page="curriculo" size="small" />
			{/if}
		</div>

		<div class="my-[29px] flex flex-col items-center justify-between px-5 lg:h-[92vh]">
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
</div>

<style lang="postcss">
	:global(html) {
		@apply bg-offwhite;
	}
</style>
