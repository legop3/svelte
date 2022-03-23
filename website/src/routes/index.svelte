<script>
    //   import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
      import Tabs from './shared/Tabs.svelte'
      import Drawer from 'svelte-drawer-component';
import Nested from 'src/pages/nested.svelte';
      const modules = import.meta.glob("../pages/*.svelte")
    
    let tabitems = ["tab one", "tab two", "tab tljhf", "tabkfdsjhsf", "jkahf", "falkjshfkjsahfkh"]
    let activeitem = "tab one"
    let open = false;

    // console.log(modules)
    for (const path in modules) {
        modules[path]().then((mod) => {
    console.log(path, mod)
  })
}


</script>
<style>
    .drawerbutton{
        width: 100%;
        height: 4em;
    }
</style>


<main>
 
</main>

<Nested></Nested>

<button on:click={() => open = true}>MENU</button>

<Drawer { open }  size='10em'>
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