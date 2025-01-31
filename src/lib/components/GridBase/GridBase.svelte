<script lang="ts">
  import { Route, Routes } from "$lib/state/navigation.svelte";
  import { onMount } from "svelte";

  let { pages } = $props();
  let inView: string = $state<string>("");
  let loadIn: boolean = $state(false);

  onMount(() => {
    setTimeout(() => {
      loadIn = true;
    }, 1);
  });
  $effect(() => {
    inView = Route.PositionViewTo(Route.Current ?? Routes.WelcomePage);
    // TODO: add movement checker here
  });
</script>

{#if loadIn}
  <!-- THE IDEA IS TO NAVIGATE USING CSS HEHE -->
   {#if Route.isMoving}
    <div class="vignette"></div>
   {/if}
  <div class="grid-base{' ' + inView}" id="grid-base-component">
    {#each pages as page}
      <div class="cell" id={page.Route}>
        <page.page />
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
    transform: scale(1);
    transition: all 0.5s ease;
  }
  .grid-base > .cell {
    height: 100vh;
    width: 100vw;
    display: flex;
    overflow: hidden;
  }

  .grid-base.wp {
    left: 0vw;
    top: 0vh;
    transition: all 0.3s ease;
  }
  .grid-base.mpp {
    left: -100vw;
    top: 0vh;
    transition: all 0.3s ease;
  }
  .grid-base.pop {
    left: -200vw;
    top: 0vh;
    transition: all 0.3s ease;
  }
  .grid-base.ip {
    left: 0vw;
    top: -100vh;
    transition: all 0.3s ease;
  }
  .grid-base.mp {
    left: -100vw;
    top: -100vh;
    transition: all 0.3s ease;
  }
  .grid-base.ptp {
    left: -200vw;
    top: -100vh;
    transition: all 0.3s ease;
  }
  .grid-base.op {
    left: 0vw;
    top: -200vh;
    transition: all 0.3s ease;
  }
  .grid-base.cfp {
    left: -100vw;
    top: -200vh;
    transition: all 0.3s ease;
  }
  .grid-base.ptp2 {
    left: -200vw;
    top: -200vh;
    transition: all 0.3s ease;
  }

  @keyframes zoomOutAndIn {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }

  .grid-base.cfp.active,
  .grid-base.ip.active,
  .grid-base.mp.active,
  .grid-base.mpp.active,
  .grid-base.op.active,
  .grid-base.pop.active,
  .grid-base.ptp.active,
  .grid-base.ptp2.active,
  .grid-base.wp.active {
    transform: scale(0.8);
    transition: all 0.3s ease;
  }
  
  .vignette {
    opacity: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    box-shadow: 0 0 200px rgba(0,0,0,0.9) inset;
    transition: all 0.3s ease;
    
  }
  .vignette.active {
    opacity: 1;
    transition: all 0.3s ease;
  }

</style>
