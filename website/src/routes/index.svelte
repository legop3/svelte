<script>
      import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';
</script>

<Tabs>
    <TabList>
        <Tab>one</Tab>
        <Tab>two</Tab>
        <Tab>three</Tab>
    </TabList>


    <TabPanel>
        <h1>tab one</h1>
    </TabPanel>


    <TabPanel>
        <h1>tab two</h1>
    </TabPanel>

    <TabPanel>
        <h1>tab three</h1>
    </TabPanel>

</Tabs>