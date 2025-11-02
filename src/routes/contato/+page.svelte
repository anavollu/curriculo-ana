<script lang="ts">
	import ContactCard from './contact-card.svelte';
	let { data } = $props();
	const { title, ...contact } = data.resume.contact;
</script>

<div class="flex w-full flex-col gap-3 lg:grid lg:grid-cols-2">
	{#each Object.values(contact) as contactItem}
		<ContactCard {...contactItem} isResumePage={false} />
	{/each}
</div>
