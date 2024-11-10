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
</div>

<Blogs title="Letzen Artikel" h2 {posts} search={false} count={3} />
