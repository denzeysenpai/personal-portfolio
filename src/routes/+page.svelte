<script lang="ts">
    import GridBase from "$lib/components/GridBase/GridBase.svelte";
  import Navigator from "$lib/components/Navigator/Navigator.svelte";
    import { Routes } from "$lib/state/navigation.svelte";
    import ContactForm from "$lib/views/ContactForm/ContactForm.svelte";
    import Introduction from "$lib/views/Introduction/Introduction.svelte";
    import MainPage from "$lib/views/MainPage/MainPage.svelte";
    import Others from "$lib/views/Others/Others.svelte";
    import Profile from "$lib/views/Profile/Profile.svelte";
    import ProjectsOne from "$lib/views/ProjectsOne/ProjectsOne.svelte";
    import ProjectsThree from "$lib/views/ProjectsThree/ProjectsThree.svelte";
    import ProjectsTwo from "$lib/views/ProjectsTwo/ProjectsTwo.svelte";
    import Welcome from "$lib/views/Welcome/Welcome.svelte";
</script>

  <GridBase pages={[
    { x: 0, y: 0, page: Welcome, route: Routes.WelcomePage },
    { x: 1, y: 0, page: Profile, route: Routes.MyProfilePage },
    { x: 2, y: 0, page: ProjectsOne, route: Routes.ProjectsOnePage },
    { x: 0, y: 1, page: Introduction, route: Routes.IntroductionPage },
    { x: 1, y: 1, page: MainPage, route: Routes.MainPage },
    { x: 2, y: 1, page: ProjectsTwo, route: Routes.ProjectsTwoPage },
    { x: 0, y: 2, page: Others, route: Routes.OthersPage },
    { x: 1, y: 2, page: ContactForm, route: Routes.ContactFormPage },
    {  x: 2, y: 2, page: ProjectsThree, route: Routes.ProjectsThreePage }
  ]}
/>
<Navigator/>