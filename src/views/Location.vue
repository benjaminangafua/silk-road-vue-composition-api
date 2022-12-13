<script setup> 
import FooterDown from '../components/FooterDown.vue'
import HeadTop from '../components/HeadTop.vue';
import { computed } from '@vue/runtime-core';

const greaterThan = computed(()=>{
    return {
        grt: `<span class="material-symbols-outlined">arrow_circle_right</span>`
    }
})

</script>

<template>
    <div class="container-c">
        <div id="head-bg-color">
            <HeadTop />
        </div>
        <div class="main-bg-clr">
            <div id="main-c">
                <div class="category-title">
                    <div class="category"><RouterLink to="/post-a-property/category">Category</RouterLink> </div>
                    <div class="location active"> <RouterLink to="/post-a-property/location">Location</RouterLink> </div>
                    <div class="property-details"><RouterLink to="/post-a-property/detail">Property Details</RouterLink> </div>
                    <div class="contact-details"><RouterLink to="/post-a-property/contact-detail"> Contact Details</RouterLink> </div>
                </div>
                    
                <div class="location-list">
                    <div>
                        <div class="select-category">
                            <strong>Select a County within Liberia</strong>
                            <div class="category-hr"></div>
                        </div>
                        <div class="counties-m">Counties</div> <br>
                        <div class="list-2-col">
                            <div class="counties-col">
                                <div class="county item">Bomi</div>
                                <div class="county  item">Bong</div>
                                <div class="county  item">Gbapolu</div>
                                <div class="county  item">Grand Bassa</div>
                                <div class="county  item">Grand Gedeh</div>
                                <div class="county  item">Grand Kru</div>
                                <div class="county  item active">Grand Cape Mount</div>
                                <div class="county  item">Lofa</div>
                                <div class="county  item">Margibi</div>
                                <div class="county  item">Maryland</div>
                                <div class="county  item">Montserrado</div>
                                <div class="county  item">Nimba</div>
                                <div class="county  item">River Cess</div>
                                <div class="county  item">River Gee</div>
                                <div class="county  item">Sinoe</div>
                            </div>

                            <div class="circle-arrow">
                                <div v-html="greaterThan.grt"></div>
                                <div v-html="greaterThan.grt"></div>
                                <div v-html="greaterThan.grt"></div>
                                <div v-html="greaterThan.grt"></div>
                                <div v-html="greaterThan.grt"></div>
                                <div v-html="greaterThan.grt"></div>
                                <div class="active" v-html="greaterThan.grt"></div>
                                <div v-html="greaterThan.grt"></div>
                                <div v-html="greaterThan.grt"></div>
                                <div v-html="greaterThan.grt"></div>
                                <div v-html="greaterThan.grt"></div>
                                <div v-html="greaterThan.grt"></div>
                                <div v-html="greaterThan.grt"></div>
                                <div v-html="greaterThan.grt"></div>
                                <div v-html="greaterThan.grt"></div>
                            </div>  
                        </div>
                    </div>
                    <div class="location-district">
                        <div class="select-category">
                            <strong>Select a District within Grand Cape Mount County</strong>
                            <div class="district-hr"></div>
                        </div>
                        <div class="popular-areas">Popular Areas</div> 
                        <div class="list-2-col"> 
                            <div class="list-item">
                                <div class="houses item active">Commonwealth</div>
                                <div class="apartments item">Garwula District</div>
                                <div class="office-space item">Gola Konneh</div>
                                <div class="storage-space item">Porkpa District</div> 
                                <div class="rooms item">Tewor District</div>                           
                            </div> 
                            <div class="circle-arrow">
                                <div class="active" v-html="greaterThan.grt"></div>
                                <div v-html="greaterThan.grt"></div>
                                <div v-html="greaterThan.grt"></div>
                                <div v-html="greaterThan.grt"></div>
                                <div v-html="greaterThan.grt"></div> 
                            </div>                
                        </div>
                        <div class="other-areas">
                            <div>Other areas within the County</div>
                            <input type="text" placeholder="Other areas (A-Z)"><select name="" id="">
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="footer"><FooterDown /></div>
    </div>
</template>

<style lang="scss" scoped>
    @import url('../assets/post-a-property.scss');
    @import url('../assets/location.scss');
    

.location {
    position: relative;
    font-size: 1em;

} 
.location:after {
  content: "";
  background: #20B2AA;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 90%;
}
.circle-arrow > div{

    margin-bottom: 40%
}

</style>