<script lang="ts">
    let { children } = $props();
</script>

<svelte:head>
    <!-- YUJI MAI -->
    <!-- ROBOTO SLAB -->
    <!-- CEDARVILLE CURSIVE -->
    <!-- JARO -->
    <!-- ANTON -->
    <!-- BOKOR -->
    <!-- PROTEST REVOLUTION -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:ital,wght@0,100..900;1,100..900&family=Anton&family=Bokor&family=Cedarville+Cursive&family=Geist:wght@100..900&family=Jaro:opsz@6..72&family=Protest+Revolution&family=Rethink+Sans:ital,wght@0,400..800;1,400..800&family=Roboto+Slab:wght@100..900&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&family=Yuji+Mai&display=swap" rel="stylesheet">
</svelte:head>

{@render children()}