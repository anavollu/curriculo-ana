<script lang="ts">
	import ContactCard from '../contato/contact-card.svelte';

	export let data;
	const home = data.resume.home;
	const abilityTitle = data.resume.ability.title;
	const carouselItems = data.resume.ability.carouselItems;
	const { title: projectTitle, ...projects } = data.resume.projects;
	const { title: educationTitle, ...education } = data.resume.education;
	const { title: contactTitle, ...contact } = data.resume.contact;
</script>

<div
	class="flex flex-col overflow-y-scroll px-7 pt-7 pb-[23px] font-poppins lg:h-[842px] lg:w-[595px]"
>
	<div class="mb-5 flex flex-col gap-2">
		<p class="text-3xl text-darkblue">{home.title}</p>
		<p class="font-inter uppercase leading-[19px] tracking-widest text-blue">{home.description}</p>
	</div>
	<div class="mb-5 flex flex-col gap-4">
		<p class="leading-10 text-darkblue">Sobre mim</p>
		<p class="text-[10px] leading-[15px] tracking-widest text-blue">
			Iniciei minha carreira em TI na área de suporte. Trabalhei na área de dados com ETL,
			integração de sistemas. Decidi mudar de carreira e iniciar na programação. Hoje estou
			aprendendo Svelte e Tailwind.
		</p>
	</div>
	<div class="mb-5 flex flex-col gap-4">
		<p class="leading-10 text-darkblue">{abilityTitle}</p>
		<div class="grid grid-cols-2 gap-1 lg:grid-cols-4">
			{#each Object.entries(carouselItems) as [techName, techAbilities]}
				<div class="flex flex-col gap-2">
					<p
						class=" break-words text-[11px] font-bold uppercase leading-[16.5px] tracking-widest text-blue opacity-70"
					>
						{techName.replace('_', ' ')}
					</p>
					<div class="flex flex-col gap-2">
						{#each techAbilities as { name, icon }}
							<div class="flex items-center gap-4">
								<img class="h-[15px] w-[15px]" src={icon} alt={`Ícone ${name}`} />
								<p class="text-[10px] leading-[15px] tracking-widest text-blue">{name}</p>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="mb-5 flex flex-col gap-3">
		<p class="leading-10 text-darkblue">{projectTitle}</p>
		<div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
			{#each Object.entries(projects) as [_, projectItem]}
				<div class="flex flex-col gap-1">
					<img
						class="h-[57px] w-[100px]"
						src={projectItem.image}
						alt={`Imagem ${projectItem.name}`}
					/>
					<p class="text-[10px] uppercase leading-[15px] tracking-widest text-blue">
						{projectItem.name}
					</p>
					<p class="text-[8px] leading-[12px] tracking-widest text-blue">
						{projectItem.description}
					</p>
					<a
						href={projectItem.vercelLink}
						class="text-[8px] leading-[12px] tracking-widest text-blue underline"
					>
						{projectItem.vercelLink}
					</a>
				</div>
			{/each}
		</div>
	</div>
	<div class="mb-5">
		<p class="leading-10 text-darkblue">{educationTitle}</p>
		<div class="grid grid-cols-2 gap-2">
			{#each Object.values(education) as educationItem}
				<div class="flex flex-col">
					<p class="text-[10px] font-medium uppercase leading-[15px] tracking-widest text-darkblue">
						{educationItem.name}
					</p>
					<p class="text-[8px] leading-[12px] tracking-widest text-red">{educationItem.type}</p>
					<p class="text-[8px] leading-[12px] tracking-widest text-darkblue">
						{educationItem.institution}
					</p>
					<p class="text-[8px] leading-[12px] tracking-widest text-blue">{educationItem.year}</p>
				</div>
			{/each}
		</div>
	</div>
	<div>
		<p class="leading-10 text-darkblue">{contactTitle}</p>
		<div class="grid grid-cols-2 gap-5 lg:grid-cols-4">
			{#each Object.values(contact) as contactItem}
				<ContactCard {...contactItem} isResumePage={true} />
			{/each}
		</div>
	</div>
</div>
