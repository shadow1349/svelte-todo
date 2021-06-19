import { writable } from "svelte/store";

/**
 * An array of {content: string, complete: true, completedOn: number}
 *
 * content will be the string value of the todo item
 * completed will be if the item is complete or not
 * completedOn will be the exact time the item was completed on i.e. Date.now()
 *
 * We will move all completed items to the bottom of the array and order them by when
 * they had been completed.
 */
export const items = writable([]);
