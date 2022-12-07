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
.property-hr{
    border-bottom: 0.1px solid var(--property-txt-clr);
    width: 50%;
    margin: 1% 0 2%;
}
.form-title,
.physical-address, .description {
    display: grid;
    grid-template-columns: 80%;
    margin-bottom: 2%;
}
.input-fields-property-detail{
    display: grid;
    grid-template-columns: repeat(2, 40%);
    gap: 5%
}

.input-item input, .form-title input, .physical-address input, .description textarea{ 
    background: #d7dce2;
    padding: 1.5% 1%;
    border: none;
}
.input-item input{
    padding: 3% 1%;
    margin-bottom: 5%;
}
.r-property-input{
    display: grid; 

}
.l-property-input div input,.r-property-input div input{
    width: 73%;
} 
.r-property-input .price-input input{
    width: 59%;
}

.l-property-input .size-input input{
    width: 65.5%;
}
.input-item{
    padding: 0;
}
.input-item select {
    background-color: #8a97a5;
    /* margin-left: -1%; */
    color: var(--white-clr);
    padding: 3% 3.5%;
    border: none;
}
/* Upload images */
.images-col-5{
    display: grid;
    grid-template-columns: repeat(5, 18%)
}
/* Amenities */
.amenities{
    color: var(--property-txt-clr);
}

button{

    border: none;
    border-radius: 5px;
    background: var(--dark-gray-clr);
    color: var(--white-clr);
    padding: 10px 30px;
    font-size: 1em;
}
.amenities-cl-4:deep(){
    display: grid;
    grid-template-columns: repeat(4, 20%);
    gap: 0.5%;
    margin-top: 2%;
}
.amenities-cl-4:deep(.amenities-cl-2){
    display: grid;
    grid-template-columns: 80% 20%;
}
.amenities-cl-4:deep(.amenities-cl-2 div) {
    padding-bottom: 14px;
}

.btn-continue button{ 
    padding-right:  40px;
    padding-left:  40px;
    float: right;
}
.btn-continue{
    width: 80%;
}
</style>