<script lang="ts">
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';

	export let data;
	const carouselItems = data.resume.ability.carouselItems;
</script>

{#if browser}
	<Carousel arrows={false}>
		{#each Object.entries(carouselItems) as tech}
			<div
				class="flex w-full flex-col items-center rounded-[20px] bg-gradient-to-tr from-candyblue px-16 py-6"
			>
				<p
					class="mb-14 text-center font-poppins text-lg font-bold uppercase tracking-widest text-blue opacity-70"
				>
					{tech[0]}
				</p>
				<div class="flex flex-col gap-4">
					{#each tech[1] as { name, icon }}
						<div class="flex gap-8 self-start">
							<img src={icon} alt="Ícone" />
							<p class="font-poppins text-sm tracking-widest text-blue">{name}</p>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</Carousel>
{/if}
