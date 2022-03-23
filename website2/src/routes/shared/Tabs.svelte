<script>
    export let items;
    export let activeitem;


</script>

<div class="tabs">
    <ul>
       {#each items as item} 
        <li>
            <div class:active={item === activeitem}>
                {item}
            </div>
        </li>
        {/each}
    </ul>
</div>

<style>
    .active{
        color: green;
        border-bottom: 1em solid green; 
    }
</style>