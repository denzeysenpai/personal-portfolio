<script lang="ts">
    import StartingSlideComponent from "$lib/components/StartingSlideComponent/StartingSlideComponent.svelte";
import "./layout.css"
    let { children } = $props();
</script>

<svelte:head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
</svelte:head>

<!-- STARTING SLIDE ANIMATED PAGE -->
<StartingSlideComponent/>
<!-- STARTING SLIDE ANIMATED PAGE -->

<div class="page-content-layout">
    <div class="header-component">
        <header>
            <div class="logo-placer">
                <p>Mark Josh <span id="invert">Solante</span></p>
            </div>
        </header>
    </div>
    {@render children()}
</div>