<script context="module">
    //   import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
    //   import Tabs from './shared/Tabs.svelte'
      import Drawer from 'svelte-drawer-component';
// import About from 'src/pages/about.svelte';
// import Nested from 'src/pages/nested.svelte';
      const modules = import.meta.glob("../pages/*.svelte")
    
    let tabitems = ["tab one", "tab two", "tab tljhf", "tabkfdsjhsf", "jkahf", "falkjshfkjsahfkh"]
    let activeitem = "tab one"
    let open = false;
    let placement = "bottom";
    let page

    console.log(modules)
//     for (const path in modules) {
//         modules[path]().then((mod) => {
//     console.log(path, mod)
//     console.log(path)
//     console.log(mod)
//   })
// }

// for (let path in modules) {
//     console.log(path)
//     page = modules[path]
//     console.log(page)
// }



</script>
<style>
    .drawerbutton{
        width: 10%;
        height: 100%;
    }
</style>

<!-- <"../pages/nested"/> -->
<main>
 
</main>


<!-- <svelte:component this={"../pages/nested.svelte"}/> -->


<button on:click={() => open = true}>MENU</button>

<Drawer { open } { placement }  size='10em'>
    <button on:click={() => open = false} class="drawerbutton">CLOSE</button>
    <!-- <Tabs {tabitems} {activeitem}></Tabs> -->
</Drawer>






<!-- <Tabs>
    <TabList>
        <Tab>one</Tab>
        <Tab>two</Tab>
        <Tab>three</Tab>
    </TabList>


    <TabPanel>
        <Nested></Nested>
    </TabPanel>


    <TabPanel>
        <h1>tab two</h1>
    </TabPanel>

    <TabPanel>
        <h1>tab three</h1>
    </TabPanel>

</Tabs> -->