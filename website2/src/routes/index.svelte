<script>

    import Title from '$lib/Title.svelte'
    import Tabs from './shared/Tabs.svelte'
    let items = ["Tab one", "Tab two", "three", "four"]
    let activeitem = "Tab one"

    // const updateTitle = () => {
    //     title = 'spmething different'
    // }


</script>


<!-- svelte-ignore missing-declaration -->
<!-- <Title Title="wa"/> -->

<main>
    <!-- svelte-ignore component-name-lowercase -->
    <Tabs {items} {activeitem} />
</main>

<div class="index">

    <h1>{"wa"}</h1>
    <p>pawagrapg paragrapg padi ljl flklfkjsaf ,n fmdbsakjfh ksajfkfj h kdshalkshlkjh adfkljhkl hfklhsafk hkajsdhfsakd falkshf khfkj hdkfjhdkhsakj hfj hfjsa hfjkh fjhsakj hfkjashf kjashlkjf hsalkfjhaksjf hlksajd hflksafh lsakhf</p>
    <!-- <button on:click="{updateTitle}">change title</button> -->
    <!-- <input type="text" bind:value={title}> -->
    <a href="/about">view about</a>
    <a href="/guides">view guides</a>
</div>

<style>

    .index {
        text-align: center;
        display: block;
        margin: 20px auto;
    }

</style>