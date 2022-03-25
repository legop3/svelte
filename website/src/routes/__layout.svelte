

<script context="module">
    const modules = import.meta.glob("./*.svelte");
    const fileNames = Object.keys(modules).map(path => path.split('/').pop().split('.')[0]);
    // goto("../shared/home")
</script>

<script>
    import Drawer from 'svelte-drawer-component';

    
    import {goto} from '$app/navigation';
    import { onMount } from 'svelte';


    let open = false;
    // let buttontext = 'Open Drawer'

    // function drawerbutton() {
    //     if(open === false) {
    //         open = true
    //         buttontext = 'Close Drawer'
    //     } else {
    //         open = false
    //         buttontext = 'Open Drawer'
    //     }
    // }

        // $: if(browser) {
        //     goto("../shared/home")
        // }
    // onMount(() => {
    //     goto("../shared/home")
    // })

</script>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>


<slot />

<!-- svelte-ignore a11y-missing-attribute -->
<html>
<button class="drawerbutton" on:click={() => open = true}>MENU</button>
<!-- <button class="drawerbutton" on:click={() => open = true}>Open drawer</button> -->

<div class="drawer" on:load="{() => goto('/shared/home')}">
    <Drawer {open} size="50%" placement="bottom" on:clickAway={() => open = false}>
        <button class="tablink-home" on:click={() => goto('/shared/home')}>Homepage</button>

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
        background-color: rgb(0, 0, 0);
        color: white;
    }

    /* Style tab links */
    .tablink {
        background-color: rgb(255, 238, 0);
        color: rgb(0, 0, 0);
        float:right;
        border: white;
        align-self:stretch;
        cursor: pointer;
        padding: 14px 16px;
        font-size: 17px;
        font-weight: bold;
        /* width: 10%; */
        margin: 0.5%;
        border-radius: 10px;
        
    }    .tablink-home {
        background-color: rgb(255, 174, 0);
        color: rgb(0, 0, 0);
        float:right;
        border: white;
        align-self:stretch;
        cursor: pointer;
        padding: 14px 16px;
        font-size: 17px;
        font-weight: bold;
        /* width: 10%; */
        margin: 0.5%;
        border-radius: 10px;
        
    }

    .tablink:hover {
        background-color: rgb(206, 192, 0);
    }
    .tablink-home:hover {
        background-color: rgb(187, 128, 0);

    }

    .drawerbutton {
        position:fixed;
        right: 3%;
        bottom: 3%;
        background-color: rgb(255, 145, 0);
        padding: 1% 1%;
        border: 3px black;
        border-radius: 100px;
        z-index: 90;
        font-size: larger;
        
    }

    .drawerbutton:hover {
        background-color: rgb(182, 103, 0);
    }


  .drawer :global(.drawer .panel) {
    background:rgba(255, 132, 0, 0.227);
        z-index: 101;
    /* scrollbar-width: 5%; */
    /* border-radius: 10%; */
}

</style>