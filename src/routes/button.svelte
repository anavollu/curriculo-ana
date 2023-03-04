<script>
	export let label = '';
	export let size = 'small';
	export let page = '/';
</script>

{#if size == 'large'}
	<button
		class="w-[209px] rounded-[35px] bg-blue py-4 text-center font-poppins text-xl uppercase text-offwhite hover:bg-darkblue"
	>
		<a href={page}>{label}</a>
	</button>
{:else}
	<button
		class="w-[137px] rounded-[35px] bg-blue py-3 text-center font-poppins text-xs uppercase text-offwhite hover:bg-darkblue"
	>
		<a href={page}>{label}</a>
	</button>
{/if}
