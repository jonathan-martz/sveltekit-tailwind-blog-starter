import { browser } from '$app/environment';
import { getMetadata } from './getMetadata.js';

// we require some server-side APIs to parse all metadata
if (browser) {
	throw new Error(`projects can only be imported server-side`);
}

// we have to have separate functions for this because Vite only accepts literal strings for import.meta.glob
const getPosts = () => {
	return Object.entries(import.meta.glob('/content/posts/**/*.md', { eager: true }));
};

const getProjects = () => {
	return Object.entries(import.meta.glob('/content/projects/**/*.md', { eager: true }));
};

// Get all entries and add metadata
export const getEntries = (entryType) => {
	const entries = entryType === 'posts' ? getPosts() : getProjects();
	return (
		entries
			// format metadata and content
			.map(([filepath, post]) => getMetadata(filepath, post))
			// remove drafts
			.filter((post) => !post.draft)
			// sort by date
			.sort((a, b) => (a.date < b.date ? 1 : -1))
			// add references to the next/previous post
			.map((post, index, allPosts) => ({
				...post,
				next: allPosts[index - 1],
				prev: allPosts[index + 1]
			}))
	);
};