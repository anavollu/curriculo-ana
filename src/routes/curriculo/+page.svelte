<script lang="ts">
	import pdfUrl from '$lib/assets/Curriculo-AnaCarolinaVollu-2023.pdf';
</script>

<embed class="hidden lg:inline" src={pdfUrl} width="400" height="500" type="application/pdf" />
<div class="lg:hidden">
	<p><a href={pdfUrl}>Clique aqui para visualizar o currículo.</a></p>
</div>
