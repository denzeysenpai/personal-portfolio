<script lang="ts">
    let {children, id} = $props()
</script>
<section id={id} class="comic-page">
    {@render children()}
</section>
<style>
    .comic-page {
        display: flex;
        position: relative;
        height: calc(100vh - 90px);
        width: auto;
        margin: 40px;
        padding: 0px;
        border: 8px solid black;
        border-radius: 4px;
        background-color: gray;
        transition: all 0.5s ease;
        overflow: hidden;
    }
</style>