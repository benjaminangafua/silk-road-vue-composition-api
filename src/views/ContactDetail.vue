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
                <div class="property-details"><RouterLink to="/post-a-property/detail">Property Details</RouterLink> </div>
                <div class="contact-details active"><RouterLink to="/post-a-property/contact-detail"> Contact Details</RouterLink> </div>
            </div>
            <div class="main-contact-content">
                <div class="provide-detail">
                    <strong>Provide additional contact details</strong>
                    <div class="property-hr"></div>
                </div>
                <div class="contact-content">
                    <form action="">
                        <div class="name">
                            <div><b>Name:</b> </div>
                            <div>Peter Wayne</div>
                        </div>
                        <div class="email">

                        <div><b>Email:</b> </div>
                        <div>peterwayne@gamil.com</div>
                        </div>

                        <div class="add-contact"><strong >Provide additional contact details</strong></div>

                        <div class="c-code" id="placeholder-p">
                            <select name="c-code" id="">
                                <option value="+231">+231</option>
                                <option value="+234">+234</option>
                                <option value="+134">+134</option>
                                <option value="+412">+412</option>
                            </select> 
                            <input id="input2" type="tel" placeholder="Phone number">
                            <font-awesome-icon id="phone-icon" :icon="['fas', 'phone-alt']" />
                        </div>
                    </form>
                </div>
                <div class="btn-continue"> <button>Done</button></div>
            </div>
        </div>
        <div id="footer"><FooterDown /></div>
    </div>
</template>

<style scoped>
    @import url('../assets/post-a-property.css');

.contact-details {
    border-bottom: 3px solid #20B2AA;
}
.provide-detail{
    margin-top: 4%;

}
strong{

    color: var(--dark-gray-clr) !important;
}

.main-contact-content{
    width: 40%;
}
.contact-content{
    color: var(--property-txt-clr)
}
.property-hr{
    border-bottom: 0.1px solid var(--property-txt-clr); 
    margin: 1% 0 2%;
}
.c-code select{
padding: 7px;
background-color: var(--dark-gray-clr);
border: none;
color: var(--white-clr);
}

.name {

    margin-bottom: 6%;
}
.email{
    margin-bottom: 3%;
}
b {
    color: var(--dark-gray-clr) !important;
}
.name :first-child,.email :first-child{
    margin-bottom: 5px;
}
.add-contact{
    margin: 10% 0 5%;
}
.c-code input{
    background: #d7dce2; 
    border: none;
    padding: 7px 30px;
    padding-left: 1.8rem;
}
#phone-icon { 
  margin-left: -16rem;
}
button{
    border: none;
    border-radius: 5px;
    background: var(--dark-gray-clr);
    color: var(--white-clr);
    padding: 8px 0;
    font-size: 1em;
}
.btn-continue button{ 
    padding-right:  60px;
    padding-left:  60px;
    float: right;
    margin-top: 5%;
    margin-right: 1.5%;
}
.btn-continue{
    width: 100%;
}
</style>