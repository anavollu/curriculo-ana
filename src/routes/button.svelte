<script>
	export let label = '';
	export let size = 'small';
	export let page = '/';
</script>

{#if size == 'large'}
	<a
		href={page}
		class="w-[209px] rounded-[35px] bg-blue py-4 text-center font-poppins text-xl uppercase text-offwhite hover:bg-darkblue"
	>
		{label}
	</a>
{:else}
	<a
		href={page}
		class="w-[135px] rounded-[35px] bg-blue py-3 px-7 text-center font-poppins text-xs uppercase leading-4 text-offwhite hover:bg-darkblue lg:rounded-[28.58px] lg:py-4 lg:text-[14px]"
	>
		{label}
	</a>
{/if}
