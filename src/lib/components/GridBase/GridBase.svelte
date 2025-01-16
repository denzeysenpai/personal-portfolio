<script lang="ts">
    //
    let { pages } = $props();
</script>

<div class="grid-base">
    {#each pages as page}
    <div class="cell">
        <page.component/>
    </div>
    {/each}
</div>

<style>
    .grid-base {
        display: grid;
        grid-template-columns: 100vw;
        grid-template-rows: 100vh;
    }

    .grid-base>.cell {
        height: 100vh;
        width: 100vw;
    }
</style>