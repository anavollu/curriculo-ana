<script lang="ts">
	import ContactCard from '../contact-card.svelte';
	export let data;
	const { title, ...contact } = data.resume.contact;
</script>

<div class="flex w-full flex-col gap-3">
	{#each Object.values(contact) as contactItem}
		<ContactCard {...contactItem} />
	{/each}
</div>
