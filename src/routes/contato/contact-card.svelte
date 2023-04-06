<script lang="ts">
	export let type: 'link' | 'copy' = 'link';
	export let info: string;
	export let link: string;
	export let icon: string;
	export let description: string;
	export let isResumePage: boolean;
</script>

<div class="relative flex w-full">
	<img class="absolute" width={isResumePage ? 24 : 40} src={icon} alt="Ícone" />
	{#if isResumePage}
		<div class="mx-3 mt-2 w-full break-all rounded-[10px] bg-white px-5 py-6 text-center">
			<a
				target="_blank"
				rel="noreferrer"
				href={link}
				class="text-sm leading-[9px] tracking-widest text-darkblue"
			>
				{info}
			</a>
		</div>
	{:else}
		<div
			class="mx-5 mt-3 grid w-full grid-cols-1 gap-1 break-words rounded-2xl bg-white py-8 text-center"
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
	{/if}
</div>
