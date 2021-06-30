import { writable } from "svelte/store";

/**
 * An array of {id: number, content: string, complete: true, completedOn: number}
 */
export const items = writable([]);

export const completed = writable([]);
