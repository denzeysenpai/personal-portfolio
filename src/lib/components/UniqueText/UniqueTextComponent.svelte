<script lang="ts">
    import { onMount } from "svelte";
    import "./style.css"
    let {text} = $props()
    let spliced : {
        char: string,
        id: string,
        class: string
    }[] = $state([])
    let charIds : string[] = $state([])
    const classes : string[] = ["font1", "font2", "font3", "font4", "font5", "font6", "font7", "font8"]
    let currId = $state("")
    let count : number = $state(0)
    onMount(async ()=>{
        setTimeout(() => {
            for(let i = 0; i < text.length; i++) {
                let val = Math.floor(Math.random() * 11) + 1
                spliced.push({id :`un-${val}-${i}`, char: text[i], class: 'font1'})
                // broken.push(text[i])
            }



            setInterval(() => {
                if (count < 4) {
                    count++
                    spliced.forEach(letter => {
                        let val = Math.floor(Math.random() * 7) + 1
                        letter.class = `font${val}`
                    })
                } else {
                    setTimeout(() => {
                        count = 0;
                    },1000)
                }
            }, 10)
        }, 1)
    })

    $effect(() => {
    })
</script>

<p id="unique-text">
    {#each spliced as letter}
    <span id={letter.id} class={letter.class}>{letter.char}</span>
    {/each}
</p>