<script lang="ts">
  import { Route, Routes } from "$lib/state/navigation.svelte";
    import "./style.css"
</script>


<div class="filler">
    <div class="floating-dev-nav">
        <button onclick={()=>{Route.FlyTo(Routes.WelcomePage)}}>Welcome</button>
        <button onclick={()=>{Route.FlyTo(Routes.MyProfilePage)}}>My Profile</button>
        <button onclick={()=>{Route.FlyTo(Routes.ProjectsOnePage)}}>Projects 1</button>
        <button onclick={()=>{Route.FlyTo(Routes.IntroductionPage)}}>Introduction</button>
        <button onclick={()=>{Route.FlyTo(Routes.MainPage)}}>Main Page</button>
        <button onclick={()=>{Route.FlyTo(Routes.ProjectsTwoPage)}}>Projects 2</button>
        <button onclick={()=>{Route.FlyTo(Routes.OthersPage)}}>Others</button>
        <button onclick={()=>{Route.FlyTo(Routes.ContactFormPage)}}>Contact Form</button>
        <button onclick={()=>{Route.FlyTo(Routes.ProjectsThreePage)}}>Projects 3</button>
    </div>
</div>