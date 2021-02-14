import { writable } from 'svelte/store';

export const stepStore = writable(0);

export const next = () => stepStore.update(v => v + 1);

export const prev = () => stepStore.update(v => v - 1);