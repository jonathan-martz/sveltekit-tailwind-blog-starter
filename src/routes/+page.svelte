<script>
	import Head from '$lib/components/layout/Head.svelte';
	import Blogs from '$lib/components/Blogs.svelte';

	export let data;
	let posts = data.posts;
</script>

<Head />

<div class="">
	<h1
		class="pb-3 text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14"
	>
		Willkommen bei Jonathan Martz Softwareentwicklung!
	</h1>
	<img src="https://cdn.jmse.cloud/jmse-logo.svg" class="rounded-lg bg-white mb-3" alt="" />
	<section class="grid grid-cols-6 gap-3">
		<div class="col-span-6 md:col-span-3 bg-white rounded-lg px-3 py-3">
			<p class="text-black text-sm">
				Hallo, wir entwickeln Webseite für Händler aus dem Oberbergischen. Lass uns gemeinsam an
				deinem Erfolg arbeiten.
			</p>
		</div>
		<div class="col-span-6 md:col-span-3 bg-white rounded-lg text-black  text-sm px-3 py-3">
			<section class="action">
				<div class="">
					LinkedIn:
					<a
						class="text-[#1f6fed]"
						href="https://www.linkedin.com/in/jonathan-martz/"
						target="_blank">Jonathan Martz</a
					>
					Mail:
					<a class="text-[#1f6fed]" href="mailto:support@jonathan-martz.de"
						>support@jonathan-martz.de</a
					><br />
					Tel.: <a class="text-[#1f6fed]" href="tel:+491745141698">0174 51 41 698</a> oder
					Whatsapp.:
					<a class="text-[#1f6fed]" href="https://wa.me/+491745141698" target="_blank"
						>0174 51 41 698</a
					>
				</div>
			</section>
		</div>
		<div class="col-span-6 md:col-span-2 bg-white rounded-lg px-3 py-3 text-black">
			<img src="/img/spa.png" alt="" />
		</div>
		<div class="col-span-6 md:col-span-2 bg-white rounded-lg px-3 py-3 text-black">
			<img src="/img/ecommerce.png" alt="" />
		</div>
		<div class="col-span-6 md:col-span-2 bg-white rounded-lg px-3 py-3 text-black">
			<img src="/img/web-based.png" alt="" />
		</div>
	</section>
</div>

<Blogs title="Letzen Artikel" h2 {posts} search={false} count={3} />
