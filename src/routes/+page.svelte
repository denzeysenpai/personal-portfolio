<script lang="ts">
    import UniqueTextComponent from "$lib/components/UniqueText/UniqueTextComponent.svelte";
    import "./global.css"
    import bg from "$lib/assets/img1.jpg"
</script>


<section class="main-page-start">
    <div class="portfolio-start">
        <div style="margin: auto;" id="text-wrapper">
            <UniqueTextComponent text="My Portfolio"></UniqueTextComponent>
        </div>
        <button id="start-button">Enter</button>
    </div>
    <div class="background-elements">
        <div class="lower-right-carousel">

        </div>
        <img src={bg} alt="" style="position: absolute; opacity: 0.6; inset: 0; height: 100vh; object-fit: 'cover';">
    </div>
</section>