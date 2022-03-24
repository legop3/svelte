

<script context="module">
    const modules = import.meta.glob("./*.svelte");
    const fileNames = Object.keys(modules).map(path => path.split('/').pop().split('.')[0]);      
</script>

<script>
    import Drawer from 'svelte-drawer-component';
    
    import {goto} from '$app/navigation';

    let open = false;
</script>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>


<slot />

<!-- svelte-ignore a11y-missing-attribute -->
<html>
<button class="drawerbutton" on:click={() => open = true}>Open drawer</button>

<div class="drawer">
    <Drawer {open} size="50%" placement="bottom" on:clickAway={() => open = false}>
        {#each fileNames as fileName}
            <button class="tablink" on:click={() => goto(`/${fileName!=='index'?fileName:''}`)}>{fileName}</button>
        {/each}
        <!-- <button class="drawerbutton" on:click={() => open = false}>Close Drawer</button> -->
        <!-- <p style="color: white; position:fixed; right:10%; z-index:10">test</p> -->
    </Drawer>
</div>
</html>

<style>
    
    html {
        display: flex;
        padding: 0%;
        margin: 0%;
    }

    /* Style tab links */
    .tablink {
        background-color: rgb(20, 54, 138);
        color: rgb(0, 0, 0);
        float:right;
        border: white;
        align-self:stretch;
        cursor: pointer;
        padding: 14px 16px;
        font-size: 17px;
        font-weight: bold;
        /* width: 10%; */

        
    }

    .tablink:hover {
        background-color: rgb(150, 72, 0);
    }

    .drawerbutton {
        position:fixed;
        right: 3%;
        bottom: 3%;
        background-color: cyan;
        padding: 2% 2%;
        border: 3px black;
        /* border-radius: 10%; */
        
    }

  .drawer :global(.drawer .panel) {
    background:rgba(67, 67, 67, 0.857);
    /* border-radius: 10%; */
}

</style>