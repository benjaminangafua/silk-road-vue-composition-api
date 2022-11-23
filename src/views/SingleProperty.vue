
<script setup>  
import FooterDown from '../components/FooterDown.vue';
import SidebarVue from '../components/Sidebar.vue';
import PropertyMainContentNav from '../components/PropertyMainContentNav.vue'
import propertyData from '../property-data.json'
import HeadTopVue from '../components/HeadTop.vue';
import { ref} from 'vue';


const house_detail = ref(propertyData)

</script>
<template>  
<div id="head-bg-color"><HeadTopVue /></div>
    
    <div id="property-grd">
        <div class="grid-container">
            <!-- Side bar -->
            <SidebarVue/>
            <!-- Main-content -->
            <div class="main-content">
                
            <!-- property Main content nav -->
            <PropertyMainContentNav/>

            <!-- Property Layout -->
                <div class="content-grids">
                     <div>Something</div>
                    <div class="advertisement">
                        Advertisement
                    </div>
                </div>
            </div>
        </div>
    <div class="grid-learn-more">Learn More</div>
        
    <FooterDown />
 </div>
</template>
<style scoped>

</style>