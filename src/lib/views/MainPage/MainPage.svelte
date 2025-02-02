<script lang="ts">
    import ComicPage from "$lib/components/ComicPage/ComicPage.svelte";
    import PanelOneBG from "$lib/assets/WomanInShades.png"
    import "./style.css";
  import { Route, Routes } from "$lib/state/navigation.svelte";
  import ProjectsOne from "../ProjectsOne/ProjectsOne.svelte";

    function ToggleToActive(id : string) {
        const element = document.querySelector("#"+id)
        if(element) {
            if(!element.classList.contains('active')) element.classList.toggle('active')
        }
    }
    function ToggleToInactive(id : string) {
        const element = document.querySelector("#"+id)
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
                <button draggable="false" onmouseenter={()=>{
                    ToggleToActive('background')
                }} onmouseleave={()=>{
                    ToggleToInactive('background')
                }} onclick={()=>{
                    Route.FlyTo(Routes.ProjectsOnePage)
                }}>
                    <p class="text">View my projects here!</p>
                    <img src="/src/lib/assets/WhiteBang.png" alt="" srcset="" draggable="false">
                </button>
                <img src="/src/lib/assets/—Pngtree—square-halftone-dot-design_6259338.png" alt="" class="pattern">
                <img src="/src/lib/assets/GuyInShades.png" alt="" id="background">
            </div>
        </div>
    </ComicPage>
</div>
