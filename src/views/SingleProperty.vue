
<script setup>  
import FooterDown from '../components/FooterDown.vue';
import SidebarVue from '../components/Sidebar.vue';
import PropertyMainContentNav from '../components/PropertyMainContentNav.vue'
import propertyData from '../property-data.json'
import HeadTopVue from '../components/HeadTop.vue';
import { computed, ref} from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute().path 
const house_detail = ref(propertyData)

// Get route number
const property_num = Number(route.split("/")[2])

// Match route
const property = computed(()=>house_detail.value.filter((item,index)=> {
    if (item.id == property_num){
        return item
    }

} ) )
console.log(property)
console.log(property_num)
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
                    <div >

                     <div class="single-property-img" v-if="route =='/single-property/'+property_num">
                        <img :src="property[0].image"  alt="">
                    </div>
                    </div>


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