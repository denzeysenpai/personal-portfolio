<script lang="ts">
    let { pages } = $props();
</script>

<div class="grid-base">
    {#each pages as page}
    <div class="cell">
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