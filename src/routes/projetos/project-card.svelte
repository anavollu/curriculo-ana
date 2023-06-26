<script lang="ts">
	export let path: string;
	export let name: string;
	export let image: string;
</script>

<div class="flex flex-col {$$props.class}">
	<button class="flex flex-col text-left">
		<a href="/projetos/{path}" class="w-full">
			<div class="relative h-[250px] w-full overflow-y-hidden">
				<img
					class="absolute top-0 h-auto w-full rounded-lg hover:animate-slide"
					src={image}
					alt="Preview do site"
				/>
			</div>
			<p class="font-poppins uppercase tracking-wider text-blue">{name}</p>
		</a>
	</button>
</div>
