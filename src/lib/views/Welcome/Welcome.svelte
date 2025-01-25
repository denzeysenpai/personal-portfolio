<script lang="ts">
    import ComicPage from "$lib/components/ComicPage/ComicPage.svelte";
    import BG from "$lib/assets/welcome-page/WelcomePageBaseBackground.png"
    import "./style.css";
</script>

<div class="page-base-0-0">
    <ComicPage id="Welcome Page">
        <div class="welcome-page">
            <div class="content">
                <div style="position: relative;">
                    <h1 id="shadow">
                        <span id="w">W</span>
                        <span id="e1">E</span>
                        <span id="l">L</span>
                        <span id="c">C</span>
                        <span id="o">O</span>
                        <span id="m">M</span>
                        <span id="e2">E</span>
                        <span id="bang">!</span>
                    </h1>
                    <h1>
                        <span id="w">W</span>
                        <span id="e1">E</span>
                        <span id="l">L</span>
                        <span id="c">C</span>
                        <span id="o">O</span>
                        <span id="m">M</span>
                        <span id="e2">E</span>
                        <span id="bang">!</span>
                    </h1>
                </div>
                
                <button class="go-to-button">
                    <span id="inner-text">
                        proceed to main page...
                    </span>
                </button>
            </div>
            <img src={BG} alt="" class="background" draggable="false">
        </div>
    </ComicPage>
</div>
