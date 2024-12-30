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
	<section class="actions mt-12 mb-6 space-y-6">
		<div class="mt-6">
			Whatsapp.: <a class="text-[#1f6fed]" href="https://wa.me/+491745141698" target="_blank">0174 51 41 698</a> |
			LinkedIn: <a class="text-[#1f6fed]" href="https://www.linkedin.com/in/jonathan-martz/" target="_blank">Jonathan Martz</a> <br><br>
			Mail: <a class="text-[#1f6fed]" href="mailto:support@jonathan-martz.de">support@jonathan-martz.de</a> |		
			Tel.: <a class="text-[#1f6fed]" href="tel:+491745141698">0174 51 41 698</a>
		</div>
	</section>
</div>

<Blogs title="Letzen Artikel" h2 {posts} search={false} count={3} />
