
<template> 
   <div class="main">
            <div> Real estate without the hassel</div>
            <div><input type="text" class="property" placeholder="FIND A PROPERTY"></div>
            <div class="filter"><strong><font-awesome-icon :icon="['fas', 'filter']" /> FILTER</strong></div>
        </div>

        <div class="bottom-content">
            <div>OUR LATEST POSTINGS</div>
            <div><font-awesome-icon :icon="['fas', 'caret-down']" /></div>
        </div>
</template>
<style scoped>
.container{
    height: 100vh;

}
@media (max-width: 818px){
.container {
  height: 100vh;
  padding-bottom: 10%;
}}

</style>