<script lang="ts">
    import ComicPage from "$lib/components/ComicPage/ComicPage.svelte";
    import PanelOneBG from "$lib/assets/WomanInShades.png"
    import "./style.css";
  import { Route, Routes } from "$lib/state/navigation.svelte";

    function ToggleToActive(id : string) {
        const element = document.querySelector("#"+id) as HTMLDivElement;
        if(element) {
            if(!element.classList.contains('active')) element.classList.toggle('active')
        }
    }
    function ToggleToInactive(id : string) {
        const element = document.querySelector("#"+id) as HTMLDivElement;
        if(element) {
            if(element.classList.contains('active')) element.classList.toggle('active')
        }
    }
</script>

<div class="page-base-1-1">
    <ComicPage id="Main Page">
        <span class="diagonal-bar-one"></span>
        <span class="horizontal-bar"></span>
        <div class="page-content">
            <div class="panel-one" id="panel-one">
                <img src={PanelOneBG} alt="" class="panel-background" draggable="false">
                <!-- svelte-ignore a11y_mouse_events_have_key_events -->
                <button onmouseenter={()=>{
                    ToggleToActive('panel-one')
                }} onmouseleave={()=>{
                    ToggleToInactive('panel-one')
                }} onclick={()=>{
                    Route.FlyTo(Routes.OthersPage)
                }}
                >Others
                    <span>others</span>
                </button>
            </div>
            <div class="panel-two" id="panel-two">
                <button>MY PROJECTS</button>
            </div>
        </div>
    </ComicPage>
</div>
