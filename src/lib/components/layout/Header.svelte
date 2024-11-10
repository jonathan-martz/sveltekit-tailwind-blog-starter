<script>
	import { config, navLinks } from '$lib/config';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import MobileMenu from '$lib/components/MobileMenu.svelte';
</script>

<header class="flex items-center justify-between py-10">
	<div>
		<a href="/" aria-label={config.headerTitle}>
			<div class="flex items-center">
				<img src="https://cdn.jmse.cloud/avatar-2024.png" class="h-16 w-16 mr-6 rounded-full" alt="">
				<div class="hidden text-2xl font-semibold sm:block font-title">
					{@html config.headerTitle.replace('\n', '<br>')}
				</div>
			</div>
		</a>
	</div>
	<div class="flex items-center text-base leading-5">
		<div class="hidden sm:block">
			{#each navLinks as link}
				<a href={link.href} class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
					>{link.title}</a
				>
			{/each}
		</div>
		<ThemeSwitch />
		<MobileMenu />
	</div>
</header>
