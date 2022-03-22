<script>
      import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
      import Nested from './nested.svelte';
</script>
<style>
    :global(.svelte-tabs div.svelte-tabs__tab-panel) {
        /* background-color: black; */
    } 

    :global(.svelte-tabs li.svelte-tabs__tab){
        /* background-color: black; */
    }
    :global(.svelte-tabs li.svelte-tabs__selected){
        /* background-color: black; */
    }
    :global(.svelte-tabs){
        /* background-color: black; */
    }
</style>

<Tabs>
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

</Tabs>