<script lang="ts">
	let { path, name, image }: {
		path: string;
		name: string;
		image: string;
	} = $props();
</script>

<div class="flex flex-col">
	<button class="flex flex-col text-left">
		<a href="/projetos/{path}" class="w-full">
			<div
				class="relative h-[250px] w-full overflow-y-hidden"
			>
				<img
					id="project-image"
					class="absolute h-auto w-full rounded-lg"
					src={image}
					alt="Preview do site"
				/>
			</div>
			<p class="font-poppins uppercase tracking-wider text-blue">{name}</p>
		</a>
	</button>
</div>