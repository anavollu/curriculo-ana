<script lang="ts">
	export let data;
	const { title, ...education } = data.resume.education;
</script>

<div class="w-full border-r-[1px] border-r-lightblue pl-[14px] lg:overflow-scroll">
	<div class="flex w-full flex-col items-center gap-12 text-center font-inter tracking-widest">
		{#each Object.values(education) as educationItem}
			<div class="flex w-full justify-between">
				<div class="w-full flex-col gap-2">
					<p class="mb-1 font-poppins text-lg font-bold uppercase text-darkblue">
						{educationItem.name}
					</p>
					<p class="text-sm text-red">{educationItem.type}</p>
					<p class="text-xs text-blue">{educationItem.institution}</p>
					<p class="text-sm text-lightblue">{educationItem.year}</p>
				</div>
				<div class="flex items-center">
					<div class="h-[13px] w-[13px] rounded-full bg-lightblue" />
					<div class="h-[1px] w-[45px] bg-lightblue" />
				</div>
			</div>
		{/each}
	</div>
</div>
