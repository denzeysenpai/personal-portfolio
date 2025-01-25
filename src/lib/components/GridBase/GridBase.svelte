<script lang="ts">
  import { Route, Routes } from "$lib/state/navigation.svelte";
  import { onMount } from "svelte";

    let { pages } = $props();
    let inView : string = $state<string>(null)
    let loadIn : boolean = $state(false)

    onMount(() => {
        setTimeout(() => {
            loadIn = true;
        }, 1)
    })
    $effect(()=> {
        inView = Route.PositionViewTo(Route.Current ?? Routes.WelcomePage)
    })
</script>

{#if loadIn}
<!-- THE IDEA IS TO NAVIGATE USING CSS HEHE -->
<div 
class="grid-base{" " + inView}" 
id="grid-base-component" 
style="transition: all 0.4s ease; ">
    {#each pages as page}
    <div class="cell" id={page.Route}>
        <page.page/>
    </div>
    {/each}
</div>
{/if}

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

    .grid-base.wp {
        left: 0vw; 
        top: 0vh;
    }
    .grid-base.mpp {
        left: -100vw; top: 0vh;
    }
    .grid-base.pop{
        left: -200vw; top: 0vh;
    }
    .grid-base.ip{
        left: 0vw; top: -100vh;
    }
    .grid-base.mp{
        left: -100vw; top: -100vh;
    }
    .grid-base.ptp{
        left: -200vw; top: -100vh;
    }
    .grid-base.op{
        left: 0vw; top: -200vh;
    }
    .grid-base.cfp{
        left: -100vw; top: -200vh;
    }
    .grid-base.ptp2{
        left: -200vw; top: -200vh;
    }
</style>