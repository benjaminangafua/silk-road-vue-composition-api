<script setup> 
import FooterDown from '../components/FooterDown.vue'
import HeadTop from '../components/HeadTop.vue';
import  {RouterLink}  from 'vue-router';
import { computed } from '@vue/runtime-core';

const greaterThan = computed(()=>{
    return {
        grt: `<span class="material-symbols-outlined">arrow_circle_right</span>`,
        amenities: `
                    <div class="amenities-cl-2">
                        <div class="amenities-item">
                            <div><label for="garage"> Garage</label></div> 
                            <div><label for="Swimming Pool"> Swimming Pool </label></div> 
                            <div> <label for="Laundry"> Laundry </label></div> 
                            <div><label for="Advertisements"> Advertisements </label></div> 
                            <div><label for="Garden"> Garden </label></div> 
                            <div><label for="Generator"> Generator </label></div> 
                        </div>
                        
                        <div class="amenities-checkbox">
                            <div><input type="checkbox" name="garage"></div> 
                            <div><input type="checkbox" name="Swimming Pool"></div> 
                            <div><input type="checkbox" name="Laundry"></div> 
                            <div><input type="checkbox" name="Advertisements"></div> 
                            <div><input type="checkbox" name="Garden"></div> 
                            <div><input type="checkbox" name="Generator"></div> 
                        </div>
                    </div>
                    `
    }
})
</script>

<template>
    <div class="container-c">
        <div id="head-bg-color">
            <HeadTop />
        </div>
        <div id="main-c">
            <div class="title-c">
                <div class="category "><RouterLink to="/post-a-property/category">Category</RouterLink> </div>
                <div class="location"> <RouterLink to="/post-a-property/location">Location</RouterLink> </div>
                <div class="property-details active"><RouterLink to="/post-a-property/detail">Property Details</RouterLink> </div>
                <div class="contact-details"><RouterLink to="/post-a-property/contact-detail"> Contact Details</RouterLink> </div>
            </div>
            <div class="provide-detail">
                <strong>Provide Property Detail</strong>
                <div class="property-hr"></div>
            </div>
            <div class="property-detail-form">

                <div class="form-title">
                    <input type="text" placeholder="Title">
                </div>

                <div class="input-fields-property-detail">
                    <div class="l-property-input">
                        <div class="input-item"><input type="text" placeholder="Bedrooms"><select name="" id=""></select></div>
                        <div class="input-item"><input type="text" placeholder="Living-rooms"><select name="" id=""></select></div>
                        <div class="input-item size-input"><input type="text" placeholder="Size"><select name="" id=""><option value="Unit">Unit</option></select></div>
                    </div>
                    <div class="r-property-input"> 
                        <div class="input-item"><input type="text" placeholder="Bathrooms"><select name="" id=""></select></div>
                        <div class="input-item"><input type="text" placeholder="Kitchens"><select name="" id=""></select></div>
                        <div class="input-item price-input"><input type="text" placeholder="Price ($)"><select name="" id=""><option value="Unit">/ month</option></select></div>
                    
                    </div>
                </div>

                <div class="physical-address">
                    <input type="text" placeholder="Physical Address/Landmarks">
                </div>

                <div class="description">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            <!-- Upload imgs -->
            <div class="upload-img">
                <div class="btn-upload"> <i class="upload"></i> <button>Upload Photos</button></div>
                <div class="images-col-5">
                    <div class="img"><img src="" alt="" class="img1"></div>
                    <div class="img"><img src="" alt="" class="img2"></div>
                    <div class="img"><img src="" alt="" class="img3"></div>
                    <div class="img"><img src="" alt="" class="img4"></div>
                    <div class="img"><img src="" alt="" class="img5"></div>
                </div>
            </div>

            <!-- Amenities -->
            <div class="amenities">
                <div><strong>AMENITIES</strong> </div>
                <div class="amenities-cl-4">
                    <div v-html="greaterThan.amenities"></div>
                    <div v-html="greaterThan.amenities"></div>
                    <div v-html="greaterThan.amenities"></div>
                    <div v-html="greaterThan.amenities"></div>
                </div>
            </div>
            <div class="btn-continue"> <button>Continue</button></div>
            
        </div>
        <div id="footer"><FooterDown /></div>
    </div>
</template>

<style scoped>
    @import url('../assets/post-a-property.css');

.property-details {
    border-bottom: 3px solid #20B2AA;
}

.select-category1 {
    margin: 2% auto auto;
    color: var(--property-txt-clr);
}
.provide-detail{
    margin-top: 2%;
    color: var(--dark-gray-clr) !important;
}
</style>