<script context="module">
    const modules = import.meta.glob("./*.svelte");
    const fileNames = Object.keys(modules).map(path => path.split('/').pop().split('.')[0]);      
</script>

<script>
    import Drawer from 'svelte-drawer-component';
    
    import {goto} from '$app/navigation';

    let open = false;
</script>


<slot />


<button class="drawerbutton" on:click={() => open = true}>Open drawer</button>

<div class="app">
    <Drawer {open} size="20%" placement="bottom" on:clickAway={() => open = false}>
        {#each fileNames as fileName}
            <button class="tablink" on:click={() => goto(`/${fileName!=='index'?fileName:''}`)}>{fileName}</button>
        {/each}
        <button class="drawerbutton" on:click={() => open = false}>Close Drawer</button>
    </Drawer>
</div>


<style>
    /* Style tab links */
    .tablink {
        background-color: #555;
        color: white;
        float: right;
        border: white;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        font-size: 17px;
        /* width: 10%; */
    }

    .tablink:hover {
        background-color: #777;
    }

    .drawerbutton {
        position:fixed;
        right: 3%;
        bottom: 3%;
        background-color: cyan;
        padding: 2% 2%;
        border: none;
    }

    .app :global(.drawer .overlay) {
        background: rgba(100, 100, 100, 0.5);
    }
</style>