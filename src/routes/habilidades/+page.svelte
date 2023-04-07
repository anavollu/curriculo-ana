<script lang="ts">
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';

	export let data;
	const carouselItems = data.resume.ability.carouselItems;

	let pageWidth: number;
</script>

<svelte:window bind:innerWidth={pageWidth} />

{#if browser}
	<Carousel
		particlesToShow={pageWidth >= 976 ? 3 : pageWidth >= 768 ? 2 : 1}
		particlesToScroll={pageWidth >= 976 ? 2 : 1}
		arrows={false}
	>
		{#each Object.entries(carouselItems) as [techName, techAbilities]}
			<div class="flex justify-center">
				<div
					class="flex w-full flex-col items-center rounded-[20px] bg-gradient-to-tr from-candyblue pt-6 pb-32 md:w-[350px] lg:w-[300px]"
				>
					<p
						class="mb-14 text-center font-poppins text-lg font-bold uppercase tracking-widest text-opacityblue"
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
			</div>
		{/each}
	</Carousel>
{/if}
