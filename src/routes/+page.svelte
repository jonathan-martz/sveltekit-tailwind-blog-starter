<script>
	import Head from '$lib/components/layout/Head.svelte';
	import Blogs from '$lib/components/Blogs.svelte';

	export let data;
	let posts = data.posts;
</script>

<Head />

<div class="pt-12">
	<h1
		class="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14"
	>
		Willkommen bei Jonathan Martz Softwareentwicklung!
	</h1>
	<p class="text-xl prose-xl text-gray-800 dark:text-gray-400">
		Jonathan Martz Softwareentwicklung bietet professionelle Lösungen in der Webentwicklung und
		Softwareberatung. Mit einem Fokus auf moderne Technologien und maßgeschneiderte Anwendungen
		unterstützt Jonathan Martz Unternehmen dabei, digitale Projekte effizient und benutzerfreundlich
		umzusetzen.
	</p>
	<section class="actions mt-12 mb-6">
		<a
			href="mailto:support@jonathan-martz.de"
			class="rounded-lg text-[#1f6fed] font-bold bg-gray-200 px-3 py-3">Sofort schreiben</a
		>
		<a href="tel:+491745141698" class="rounded-lg text-red-400 font-bold bg-white px-3 py-3"
			>Jetzte anrufen</a
		>
		<div class="mt-6">
			Mail: <a href="mailto:support@jonathan-martz.de">support@jonathan-martz.de</a> | Tel.: <a href="tel:+491745141698">0174 51 41 698</a>
		</div>
	</section>
</div>

<Blogs title="Letzen Artikel" h2 {posts} search={false} count={3} />
