<script lang="ts">
	let { data } = $props();
	const { title, ...experience } = data.resume.experience;
</script>

<div class="w-full border-l border-l-lightblue lg:overflow-y-auto">
	<div class="flex w-full flex-col items-center gap-12 text-center font-inter tracking-widest">
		{#each Object.values(experience) as experienceItem}
			<div class="flex w-full justify-between gap-4 lg:gap-8">
				<div class="flex items-center">
					<div class="h-px w-[30px] bg-lightblue lg:w-[45px]"></div>
					<div class="h-[10px] w-[10px] rounded-full bg-lightblue lg:h-[13px] lg:w-[13px]"></div>
				</div>
				<div class="flex w-full flex-col gap-3">
					<p class="mb-1 font-poppins text-base font-bold uppercase text-darkblue lg:text-lg">
						{experienceItem.position}
					</p>
					<p class="text-sm tracking-wider text-red lg:text-base">{experienceItem.company}</p>
					<p class="text-xs tracking-wider text-blue lg:text-sm">{experienceItem.description}</p>
					<p class="text-sm text-opacityblue lg:text-base">{experienceItem.year}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
