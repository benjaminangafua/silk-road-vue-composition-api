<script setup> 
import FooterDown from '../components/FooterDown.vue'
import HeadTop from '../components/HeadTop.vue';
import  {RouterLink}  from 'vue-router';
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
    color: var(--property-txt-clr);

}
.property-hr{
    border-bottom: 0.1px solid var(--property-txt-clr);
    width: 50%;
    margin: 1% 0 2%;
}
.property-detail-form{
    display: grid;
    grid-template-rows: 5% 45% 5% 25%;
    row-gap: 5%;

}
.form-title,
.physical-address, .description {
    display: grid;
    grid-template-columns: 100%;
}
.input-fields-property-detail{
    display: grid;
    grid-template-columns: repeat(2, 45%);
    gap: 10%
}

.input-item input, .form-title input, .physical-address input, .description textarea{ 
    background: #d7dce2;
    padding: 1%;
    border: none;
}
.input-item input{
    padding: 3% 1%;
    margin-bottom: 5%;
}
.price-input input, .size-input input{
    margin-bottom: 0;
}
.r-property-input{
    display: grid; 

}
.l-property-input div input,.r-property-input div input{
    width: 86%;
} 
.r-property-input .price-input input{
    width: 73%;
}

.l-property-input .size-input input{
    width: 79%;
}
.input-item{
    padding: 0;
}
select {
    background-color: #8a97a5;
    /* margin-left: -1%; */
    color: var(--white-clr);
    padding: 3% 3.5%;
    border: none;
}
</style>