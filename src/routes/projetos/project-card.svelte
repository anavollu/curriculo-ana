<script lang="ts">
	export let path: string;
	export let name: string;
	export let image: string;
</script>

<div class="flex flex-col">
	<button class="flex flex-col items-center text-left">
		<a href="/projetos/{path}">
			<img
				class="mb-[10.25px] h-auto w-full rounded-[10px] md:max-h-[170px] md:w-auto lg:max-h-[220px]"
				src={image}
				alt="Imagem preview do site"
			/>
			<p class="font-poppins uppercase tracking-wider text-blue">{name}</p>
		</a>
	</button>
</div>
