
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
    }} ) )
const property_obj = property[0]
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
                    <div class="ls-r">
                        <div class="cart-txt">
                            <div class="top-carts-list">
                                <div class="cart-small-text bed-room">3 Bedroom Townhouse</div>
                                <div class="price-ls"><strong>$500.00/</strong>month</div>

                            </div>

                            <div class="cart-small-text"><span class="location-icon"><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></span> 45 Circle Dr, Monrovia, Liberia</div>
                            <div class="cart-small-text">{{property[0].owner_name}} <span class="material-symbols-outlined star-icon">hotel_class</span></div>
                        </div>
                        <div class="icons-layout">
                            <div class="icon"><span class="material-symbols-outlined">change_history</span> </div>
                            <!-- <font-awesome-icon :icon="['fas', 'book']" /> -->
                            <div class="icon"><span class="location-icon"><font-awesome-icon :icon="['fas', 'book']" /></span> </div>
                            <div class="icon"><span class="material-symbols-outlined">memory</span> </div>
                            <div class="icon"><span class="material-symbols-outlined">desktop_windows</span></div>
                        </div>
                        <div>
                            <div class="btn-primary"><button>Give Peter a call</button><button>Give Peter an email</button></div>
                            <h4>Property Description</h4>
                            
                            <p class="property-description">
                            This building comprises of 3 room all with inside bathroom and dresser.
                            The rectangular building faces north on its small lot, which sits on Town Highway 25 in the village of Bakersfield. 
                            </p>
                        </div>
                        <div class="available-amenities"> 
                            <h4>Property Description</h4>
                            <div class="amenity-description">
                                <div class="descriptions">
                                    
                                        <li>Swimming Pools</li>
                                        <li>Laundry</li>
                                        <li>Advertisement</li>
                                        <li>Garden</li>
                                        <li>Generator</li>
                                        <li>SHARE PROPERTY</li>
                                        <li><span>twttr</span><span>IG</span><span>FB</span></li>
                                        <li>SHARE PROPERTY</li>
                                     
                                </div>
                                <div class="descriptions">
                                    
                                        <li>Study</li>
                                        <li>Internet Access</li>
                                        <li>Satellite Television</li>
                                        <li>Fitted Kitchen</li>
                                        <li>Water Reservoir</li>
                                        <li>Store Room</li>
                                     
                                </div>
                                <div class="descriptions">
                                     
                                        <li>Running Water</li>
                                        <li>Electricity</li>
                                        <li>Generator</li>
                                        <li>Gazebo</li>
                                        <li>Balcony</li>
                                        <li>Security Fence</li>
                                    
                                </div>
                            </div>
                            <div class="map-gif">
                                <img src="/images/gps.gif" alt="">
                            </div>
                        </div>
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