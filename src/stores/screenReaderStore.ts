import { writable } from 'svelte/store';
import { ScreenReader } from '../types/screenReader';

export const screenReaderStore = writable(null);

export const setNVDA = () => screenReaderStore.update(v => ScreenReader.NVDA);

export const setVoiceover = () => screenReaderStore.update(v => ScreenReader.Voiceover);