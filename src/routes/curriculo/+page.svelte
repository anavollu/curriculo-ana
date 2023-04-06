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

<div
	class="flex flex-col bg-offwhite px-3 pt-7 pb-[23px] font-poppins print:w-[595px] lg:gap-3 lg:px-7"
>
	<div class="mb-5 flex flex-col gap-2">
		<p class="text-3xl text-darkblue">{home.title}</p>
		<p class="font-inter uppercase leading-[19px] tracking-wider text-blue">{home.description}</p>
	</div>
	<!-- sobre mim -->
	<div class="mb-5 flex flex-col gap-3">
		<p class="text-xl leading-10 text-darkblue lg:text-2xl">{about.title}</p>
		<p class="text-sm leading-5 text-darkblue lg:text-base">{about.description}</p>
	</div>
	<!-- habilidade -->
	<div class="mb-5 flex flex-col gap-4">
		<p class="text-xl leading-10 text-darkblue lg:text-2xl">{abilityTitle}</p>
		<div class="grid grid-cols-1 gap-7">
			{#each Object.entries(carouselItems) as [techName, techAbilities]}
				<div class="flex flex-col gap-4">
					<p
						class="text-sm font-bold uppercase leading-[16.5px] tracking-widest text-blue opacity-70"
					>
						{techName.replace('_', ' ')}
					</p>
					<div class="flex flex-col gap-3 lg:grid lg:grid-cols-5 lg:gap-7">
						{#each techAbilities as { name, icon }}
							<div class="flex gap-4 lg:flex lg:items-center lg:gap-2">
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
		<p class="text-xl leading-10 text-darkblue lg:text-2xl">{projectTitle}</p>
		<div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
			{#each Object.entries(projects) as [_, projectItem]}
				<div class="flex flex-col gap-3">
					<img
						class="h-auto max-w-[360px] lg:max-h-[170px] lg:min-h-[170px] lg:max-w-[fit-content]"
						src={projectItem.image}
						alt={`Imagem ${projectItem.name}`}
					/>
					<p class="text-sm font-medium uppercase leading-[15px] tracking-widest text-darkblue">
						{projectItem.name}
					</p>
					<p class="text-sm leading-4 text-darkblue lg:text-base">
						{projectItem.description}
					</p>
					<a href={projectItem.vercelLink} class="text-xs leading-[12px] text-blue underline">
						{projectItem.vercelLink}
					</a>
				</div>
			{/each}
		</div>
	</div>
	<!-- formação -->
	<div class="mb-5 flex flex-col gap-4">
		<p class="text-xl leading-10 text-darkblue lg:text-2xl">{educationTitle}</p>
		<div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-y-4 lg:gap-x-8">
			{#each Object.values(education) as educationItem}
				<div
					class="flex items-center gap-2 border-l-[1px] border-lightblue py-1 lg:items-start lg:border-none"
				>
					<div class="flex items-center lg:hidden">
						<div class="h-[1px] w-[20px] bg-lightblue" />
						<div class="h-[10px] w-[10px] rounded-full bg-lightblue" />
					</div>
					<div class="flex flex-col gap-2 p-2 lg:px-0">
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
		<p class="text-xl leading-10 text-darkblue lg:text-2xl">{contactTitle}</p>
		<div class="grid grid-cols-1 gap-3 lg:grid-cols-2">
			{#each Object.values(contact) as contactItem}
				<ContactCard {...contactItem} isResumePage={true} />
			{/each}
		</div>
	</div>
</div>
