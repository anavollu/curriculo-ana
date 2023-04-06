<script lang="ts">
	import ContactCard from '../contato/contact-card.svelte';

	export let data;
	const about = data.resume.about;
	const home = data.resume.home;
	const abilityTitle = data.resume.ability.title;
	const carouselItems = data.resume.ability.carouselItems;
	const { title: projectTitle, ...projects } = data.resume.projects;
	const { title: educationTitle, ...education } = data.resume.education;
	const { title: contactTitle, ...contact } = data.resume.contact;
</script>

<div class="flex flex-col bg-offwhite px-3 pt-7 pb-[23px] font-poppins print:w-[595px] lg:px-7">
	<div class="mb-5 flex flex-col gap-2">
		<p class="text-3xl text-darkblue">{home.title}</p>
		<p class="font-inter uppercase leading-[19px] tracking-wider text-blue">{home.description}</p>
	</div>
	<!-- sobre mim -->
	<div class="mb-5 flex flex-col gap-3">
		<p class="text-xl leading-10 text-darkblue">{about.title}</p>
		<p class="text-sm leading-5 text-darkblue">{about.description}</p>
	</div>
	<!-- habilidade -->
	<div class="mb-5 flex flex-col gap-4">
		<p class="text-xl leading-10 text-darkblue">{abilityTitle}</p>
		<div class="grid grid-cols-1 gap-7 print:grid-cols-4">
			{#each Object.entries(carouselItems) as [techName, techAbilities]}
				<div class="flex flex-col gap-4">
					<p
						class="text-sm font-bold uppercase leading-[16.5px] tracking-widest text-blue opacity-70"
					>
						{techName.replace('_', ' ')}
					</p>
					<div class="flex flex-col gap-3">
						{#each techAbilities as { name, icon }}
							<div class="flex items-center gap-4">
								<img class="h-[24px] w-[24px]" src={icon} alt={`Ícone ${name}`} />
								<p class="text-sm leading-[15px] tracking-widest text-blue">{name}</p>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
	<!-- projeto -->
	<div class="mb-5 flex flex-col gap-4">
		<p class="text-xl leading-10 text-darkblue">{projectTitle}</p>
		<div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
			{#each Object.entries(projects) as [_, projectItem]}
				<div class="flex flex-col gap-3">
					<img
						class="h-auto max-w-[360px]"
						src={projectItem.image}
						alt={`Imagem ${projectItem.name}`}
					/>
					<p class="text-sm font-medium uppercase leading-[15px] tracking-widest text-darkblue">
						{projectItem.name}
					</p>
					<p class="text-sm leading-4 text-darkblue">
						{projectItem.description}
					</p>
					<a
						href={projectItem.vercelLink}
						class="text-xs leading-[12px] tracking-widest text-blue underline"
					>
						{projectItem.vercelLink}
					</a>
				</div>
			{/each}
		</div>
	</div>
	<!-- formação -->
	<div class="mb-5 flex flex-col gap-4">
		<p class="text-xl leading-10 text-darkblue">{educationTitle}</p>
		<div class="grid grid-cols-1">
			{#each Object.values(education) as educationItem}
				<div class="flex items-center gap-2 border-l-[1px] border-lightblue py-1">
					<div class="flex items-center">
						<div class="h-[1px] w-[20px] bg-lightblue" />
						<div class="h-[10px] w-[10px] rounded-full bg-lightblue" />
					</div>
					<div class="flex flex-col gap-2 p-2">
						<p class="text-sm font-medium uppercase leading-[15px] tracking-widest text-darkblue">
							{educationItem.name}
						</p>
						<p class="text-xs leading-[12px] tracking-widest text-red">{educationItem.type}</p>
						<p class="text-xs leading-[12px] tracking-widest text-darkblue">
							{educationItem.institution}
						</p>
						<p class="text-xs leading-[12px] tracking-widest text-blue">{educationItem.year}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<!-- contato -->
	<div class="flex flex-col gap-4">
		<p class="text-xl leading-10 text-darkblue">{contactTitle}</p>
		<div class="grid grid-cols-1 gap-3 lg:grid-cols-4">
			{#each Object.values(contact) as contactItem}
				<ContactCard {...contactItem} isResumePage={true} />
			{/each}
		</div>
	</div>
</div>
