import { browser } from '$app/environment';
import { page } from '$app/stores';
import { writable } from 'svelte/store';

const navigatingTo = writable<string>('');

if (browser) {
	const unsub = page.subscribe((r) => {
		if (r?.route?.id) {
			navigatingTo.set(r.route.id);
			unsub();
		}
	});
}

export { navigatingTo };
