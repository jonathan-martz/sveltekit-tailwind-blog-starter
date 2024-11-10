<script>
	import Card from '$lib/components/Card.svelte';
	import Title from '$lib/components/Title.svelte';

	export let data;
	const projects = data.projects;
</script>

<div class="divide-y divide-gray-200 dark:divide-gray-700">
	<div class="space-y-2 pt-6 pb-8 md:space-y-5">
		<Title title="Projekte" subtitle="Die großartigen Dinge, die wir bei Jonathan Martz Softwareentwicklung umgesetzt haben und weiterhin tun." />
	</div>
	<div class="container py-12">
		<div class="px-3 flex flex-wrap">
			{#if !projects.length}
				Keine Projekte gefunden.
			{:else}
				{#each projects as project}
					<Card card={project} />
				{/each}
			{/if}
		</div>
	</div>
</div>
