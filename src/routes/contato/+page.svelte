<script lang="ts">
	import ContactCard from '../contact-card.svelte';
	export let data;
	const contact = data.resume.contact;
	console.log(Object.entries(contact).slice(1));
</script>

<div class="flex w-full flex-col gap-3">
	{#each Object.entries(contact).slice(1) as [_, { info, link, icon, description }]}
		<ContactCard {info} {link} {icon} {description} />
	{/each}
</div>
