<script lang="ts">
    import "./style.css"

    function handleKnowMore() {
        const actionId = document.querySelector("#action-id") as HTMLDivElement;
        if (actionId) {
            actionId.classList.toggle("active");

            // removes the component from the view
            setTimeout(()=>{
                actionId.style.display = "none"
            }, 1400)
        }
    }
</script>

<div class="fill" id="action-id">
    <!-- THIS WILL HANDLE THE ROTATION UPON TRIGGER -->
    <div class="wrapper">
        <div class="block-one">
            <div class="overflow-hidden">
                <h1>Hi! I'm <span style="text-decoration: underline;">Mark</span> Solante</h1>
            </div>
        </div>
        <button class="know-more" onclick={handleKnowMore}>Know more</button>
        <div class="block-two">
            <div class="overflow-hidden">
                <h1>I'm a web <span style="text-decoration: underline;">developer</span>!</h1>
            </div>
        </div>
    </div>
    <!-- THIS WILL HANDLE THE ROTATION UPON TRIGGER -->
</div>