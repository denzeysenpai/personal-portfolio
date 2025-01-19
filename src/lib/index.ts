// place files you want to import through the `$lib` alias in this folder.

import { writable } from "svelte/store"
import type { Page } from "./models/Page";


const PageController = () => {
    let currentPage = writable<Page>()
    return {
        current() {
            return currentPage;
        },
        set(page : Page) {
            currentPage.set(page)
        }
    }
}