<script lang="ts">
	export let type: 'link' | 'copy' = 'link';
	export let info: string;
	export let link: string;
	export let icon: string;
	export let description: string;
</script>

<div class="flex w-full">
	<img class="absolute" width={40} src={icon} alt="Ícone" />
	<div
		class="mx-6 mt-2 grid w-full grid-cols-1 gap-1 break-words rounded-2xl bg-white py-8 text-center"
	>
		<p class="font-poppins text-sm tracking-widest text-darkblue">{info}</p>
		{#if type === 'link'}
			<a
				target="_blank"
				rel="noreferrer"
				class="font-poppins text-sm tracking-widest text-red"
				href={link}
			>
				{description}
			</a>
		{:else}
			<button
				class="font-poppins text-sm tracking-widest text-red"
				on:click={() => {
					navigator.clipboard.writeText(info);
				}}>{description}</button
			>
		{/if}
	</div>
</div>
