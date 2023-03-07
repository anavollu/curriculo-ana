<script lang="ts">
	import htmlIcon from '$lib/assets/html-icon.svg';
	import cssIcon from '$lib/assets/css-icon.svg';
	import javascriptIcon from '$lib/assets/javascript-icon.svg';
	import reactIcon from '$lib/assets/react-icon.svg';
	import nextJsIcon from '$lib/assets/next-icon.svg';
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';

	let frontendTech = [
		{ name: 'html', icon: htmlIcon },
		{ name: 'css', icon: cssIcon },
		{ name: 'javascript', icon: javascriptIcon },
		{ name: 'react', icon: reactIcon },
		{ name: 'next.js', icon: nextJsIcon }
	];

	let backendTech = [
		{ name: 'html', icon: htmlIcon },
		{ name: 'css', icon: cssIcon },
		{ name: 'javascript', icon: javascriptIcon },
		{ name: 'react', icon: reactIcon },
		{ name: 'next.js', icon: nextJsIcon }
	];
</script>

{#if browser}
	<Carousel arrows={false}>
		<div
			class="flex w-full flex-col items-center rounded-[20px] bg-gradient-to-tr from-candyblue px-16 py-6"
		>
			<p
				class="mb-14 text-center font-poppins text-lg font-bold uppercase tracking-widest text-blue opacity-70"
			>
				Front-end
			</p>
			<div class="flex flex-col gap-4">
				{#each frontendTech as { name, icon }}
					<div class="flex gap-8 self-start">
						<img src={icon} alt="Ícone" />
						<p class="font-poppins text-sm tracking-widest text-blue">{name}</p>
					</div>
				{/each}
			</div>
		</div>
		<div
			class="flex w-full flex-col items-center rounded-[20px] bg-gradient-to-tr from-candyblue px-16 py-6"
		>
			<p
				class="mb-14 text-center font-poppins text-lg font-bold uppercase tracking-widest text-blue opacity-70"
			>
				Back-end
			</p>
			<div class="flex flex-col gap-4">
				{#each backendTech as { name, icon }}
					<div class="flex gap-8 self-start">
						<img src={icon} alt="Ícone" />
						<p class="font-poppins text-sm tracking-widest text-blue">{name}</p>
					</div>
				{/each}
			</div>
		</div>
	</Carousel>
{/if}
