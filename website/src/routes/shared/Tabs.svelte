<script>
    export let tabitems;
    export let activeitem;
    import { Tabs, Tab, TabList, TabPanel } from 'svelte-tabs';

</script>


<Tabs>

        <TabList>
        {#each tabitems as item} 
            <Tab>
                <Tab>
                    {item}
                </Tab>
            </Tab>
            {/each}
        </TabList>

</Tabs>

<style>
    
    :global(.svelte-tabs) {
        margin: 0px;
    }

</style>

<!-- USE META.GLOB FOR LATER -->