<script lang="ts">
	export let path: string;
	export let name: string;
	export let image: string;

	const pictures = import.meta.glob('$lib/assets/projects-images/*.png', {
		query: { format: 'webp', width: '200;400;600;1200' }
	});

	for (const pic in pictures) {
		pictures[pic]().then((render) => {
			let arr = [];
			arr.push(image, Object.entries(render));
			console.log(arr);
		});
	}

	// const viteImagePath = Object.keys(pictures).find((el) => el.endsWith(image));

	// const viteImage = pictures.viteImagePath;
	// console.log(Object.entries(pictures));

	let imgHeight: number;
	let imgWidth: number;
	let parentWidth: number;
	let parentHeight: number;
	$: scrollHeight =
		parentHeight &&
		parentWidth &&
		imgHeight &&
		imgWidth &&
		(imgHeight * parentWidth) / imgWidth - parentHeight;

	$: fixScrollHeight = scrollHeight < 50 ? 0 : scrollHeight;
</script>

<div class="flex flex-col {$$props.class}">
	<button class="flex flex-col text-left">
		<a href="/projetos/{path}" class="w-full">
			<div
				bind:clientHeight={parentHeight}
				bind:clientWidth={parentWidth}
				class="relative h-[250px] w-full overflow-y-hidden"
			>
				<img
					style:--scroll-height={fixScrollHeight}
					style:--velocity={fixScrollHeight / parentHeight}
					bind:naturalWidth={imgWidth}
					bind:naturalHeight={imgHeight}
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

<style>
	#project-image:hover {
		animation: slide calc(var(--velocity) * 1s), 0s ease-in infinite;
	}

	@keyframes slide {
		0% {
			top: 0;
		}
		100% {
			top: calc(-1px * var(--scroll-height));
		}
	}
</style>
