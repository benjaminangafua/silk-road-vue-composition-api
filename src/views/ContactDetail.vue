<script setup> 
import FooterDown from '../components/FooterDown.vue'
import HeadTop from '../components/HeadTop.vue';
import  {RouterLink}  from 'vue-router';
import { computed } from '@vue/runtime-core';

</script>

<template>
    <div class="container-c">
        <div id="head-bg-color">
            <HeadTop />
        </div>
        <div class="main-bg-clr">
        <div id="main-c">
            <div class="category-title">
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
    </div>
        <div id="footer"><FooterDown /></div>
    </div>
</template>

<style lang="scss" scoped>
    @import url('../assets/post-a-property.scss');

 .contact-details {
    position: relative;
    font-size: 1em;

} 
.contact-details:after {
  content: "";
  background: #20B2AA;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: 100%;
}
.provide-detail{
    margin-top: 8%;
}
strong{
    color: var(--dark-gray-clr) !important;
}

.btn-continue button {
    padding-right: 60px;
    padding-left: 60px;
    float: right;
    margin-top: 5%;
    margin-right: 1.5%;
}

.btn-continue {
    width: 100%;
}
@media (max-width: 575.98px) {
    #input2 {
  width: 60%;
}
.c-code input{
  padding: 7px 10px 7px 40px;
}
#phone-icon {
  margin-left: -13rem;
}
    
}
</style>