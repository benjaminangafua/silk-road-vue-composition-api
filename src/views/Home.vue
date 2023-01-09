<script setup>
import HeadTopVue from '../components/HeadTop.vue';

</script>
<template> 
<div class="container row-3">
   <div><HeadTopVue /></div> 
   <div class="main">
            <div class="desktop-heading"> Real estate without the hassle</div>
            <div class="mobile-txt">Shopping without the hassle</div>
            <div><input type="text" class="property" placeholder="FIND A PROPERTY"></div>
            <div class="filter"><strong><router-link to="/widget"><font-awesome-icon :icon="['fas', 'filter']" /></router-link>  FILTER</strong></div>
    </div>
    <div class="bottom-content">
            <div class="desktop-content">OUR LATEST POSTINGS</div>
            <div class="mobile-txt">All Ads</div>
            <div><span class="material-symbols-outlined">expand_circle_down</span></div>
    </div>
</div>
</template>
