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
  });
</script>

{#if loadIn}
  <!-- THE IDEA IS TO NAVIGATE USING CSS HEHE -->
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
  }
  .grid-base.mpp {
    left: -100vw;
    top: 0vh;
  }
  .grid-base.pop {
    left: -200vw;
    top: 0vh;
  }
  .grid-base.ip {
    left: 0vw;
    top: -100vh;
  }
  .grid-base.mp {
    left: -100vw;
    top: -100vh;
  }
  .grid-base.ptp {
    left: -200vw;
    top: -100vh;
  }
  .grid-base.op {
    left: 0vw;
    top: -200vh;
  }
  .grid-base.cfp {
    left: -100vw;
    top: -200vh;
  }
  .grid-base.ptp2 {
    left: -200vw;
    top: -200vh;
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

  .grid-base.cfp,
  .grid-base.ip,
  .grid-base.mp,
  .grid-base.mpp,
  .grid-base.op,
  .grid-base.pop,
  .grid-base.ptp,
  .grid-base.ptp2,
  .grid-base.wp {
    /* animation-name: zoomOutAndIn;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-play-state: running; */
  }
</style>
