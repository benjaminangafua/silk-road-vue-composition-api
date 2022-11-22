<script setup>
import HeadTopVue from '../components/HeadTop.vue';

</script>
<template> 
<HeadTopVue />
   <div class="main">
            <div> Real estate without the hassle</div>
            <div><input type="text" class="property" placeholder="FIND A PROPERTY"></div>
            <div class="filter"><strong><font-awesome-icon :icon="['fas', 'filter']" /> FILTER</strong></div>
        </div>
        <div class="bottom-content">
            <div>OUR LATEST POSTINGS</div>
            <div><font-awesome-icon :icon="['fas', 'caret-down']" /></div>
        </div>
</template>