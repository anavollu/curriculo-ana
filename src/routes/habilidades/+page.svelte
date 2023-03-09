<script lang="ts">
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';

	export let data;
	const carouselItems = data.resume.ability.carouselItems;
</script>

{#if browser}
	<Carousel arrows={false}>
		{#each Object.entries(carouselItems) as [techName, techAbilities]}
			<div
				class="flex w-full flex-col items-center rounded-[20px] bg-gradient-to-tr from-candyblue px-16 pt-6 pb-32"
			>
				<p
					class="mb-14 text-center font-poppins text-lg font-bold uppercase tracking-widest text-blue opacity-70"
				>
					{techName.replace('_', ' ')}
				</p>
				<div class="grid grid-flow-row auto-rows-auto gap-5">
					{#each techAbilities as { name, icon }}
						<div class="grid grid-flow-col items-center justify-start gap-8">
							<img src={icon} alt="Ícone" class="h-[25px] w-[25px]" />
							<p class="font-poppins text-sm tracking-widest text-blue">{name}</p>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</Carousel>
{/if}
