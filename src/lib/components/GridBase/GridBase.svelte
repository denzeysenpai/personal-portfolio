<script lang="ts">
  import { Route, type Routes } from "$lib/state/navigation.svelte";

    let { pages } = $props();
    let inView : Routes | null = $state<Routes | null>(null)

    $effect(()=> {
        inView = Route.Current
    })
</script>

<!-- THE IDEA IS TO NAVIGATE USING CSS HEHE -->
<div class="grid-base{inView ?? ""}">
    {#each pages as page}
    <div class="cell" id={page.Route}>
        <page.page/>
    </div>
    {/each}
</div>

<style>
    .grid-base {
        display: grid;
        grid-template-columns: 100vw 100vw 100vw;
        grid-template-rows: 100vh 100vh 100vh;
        z-index: 10;
        position: absolute;
        height: 300vh;
        width: 300vw;
        overflow: hidden;
        inset: 0;
    }
    .grid-base>.cell {
        height: 100vh;
        width: 100vw;
        display: flex;
        overflow: hidden;
    }
</style>