<script lang="ts">
	export let info: string;
	export let link: string;
	export let icon: string;
	export let description: string;
</script>

<div class="flex w-full">
	<img class="absolute" width={40} src={icon} alt="Ícone" />
	<div class="mx-6 mt-2 flex w-full flex-col items-center gap-1 rounded-2xl bg-white py-8">
		<p class="font-poppins text-sm tracking-widest text-darkblue">{info}</p>
		<a
			id="link"
			target="_blank"
			rel="noreferrer"
			class="font-poppins text-sm tracking-widest text-red"
			href={link}>{description}</a
		>
	</div>
</div>
