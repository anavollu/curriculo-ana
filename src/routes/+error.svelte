<script lang="ts">
	import errorImage from '$lib/assets/not-found.gif';
</script>

<div class="flex h-[400px] flex-col items-center justify-center gap-6 rounded-2xl bg-white">
	<img src={errorImage} alt="Imagem de erro" width="300" />
	<p class="mt-6 text-center font-poppins text-lg tracking-widest text-blue">
		Oooops! Página não encontrada!
	</p>
</div>
