<script lang="ts">
	export let name: string;
	export let image: string;
	export let description: string;
	export let technologies: string[];
	export let vercelLink: string;
	export let gitHubLink: string;

	import srcImage from '$lib/assets/pokemon-next.png';
</script>

<div class="flex flex-col">
	<button class="flex flex-col gap-[10.25px]">
		<img class="rounded-[10px]" src={srcImage} alt="Imagem preview do site" />
		<p class="font-poppins uppercase tracking-wider text-blue">{name}</p>
	</button>
</div>
