<script lang="ts">
    import GridBase from "$lib/components/GridBase/GridBase.svelte";
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
    { x: 0, y: 0, page: Welcome },
    { x: 1, y: 0, page: Profile },
    { x: 2, y: 0, page: ProjectsOne },
    { x: 0, y: 1, page: Introduction },
    { x: 1, y: 1, page: MainPage },
    { x: 2, y: 1, page: ProjectsTwo },
    { x: 0, y: 2, page: Others },
    { x: 1, y: 2, page: ContactForm },
    {  x: 2, y: 2, page: ProjectsThree }
  ]}
/>