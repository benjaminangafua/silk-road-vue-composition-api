<script setup> 
import FooterDown from '../components/FooterDown.vue'
import HeadTop from '../components/HeadTop.vue';
import  {RouterLink}  from 'vue-router'; 
import PropertyIconLayout from '../components/PropertyIconLayout.vue' 
import ProfilePropertyList from '../components/ProfilePropertyList.vue'
</script>
<template>
    <div class="container-c">
        <div id="head-bg-color">
            <HeadTop />
        </div> 
        <div class="main-bg-clr">
            <div class="main-content">

                <!--Contact Form -->
                <div class="main-contact-content">
                    <div class="provide-detail">
                        <strong>My Profile</strong>
                        <div class="provide-a-contact-detail">Provide a contact detail</div>
                        <div class="property-hr"></div>
                    </div>
                    <div class="contact-content">
                        <form action="">
                            <div class="name">
                                <div><b>Name:</b> </div>
                                
                                    <div class="input1" ><input type="text" placeholder="Full Name">
                                    
                                </div>
                            </div>
                            <div class="email">

                            <div><b>Email:</b> </div>
                                <div class="input1">
                                <input type="text" placeholder="Email">
                            
                                </div>
                            </div>

                            <div class="phone">
                                <div><b>Phone:</b> </div>
                            <div class="c-code">
                                <select name="c-code" id="">
                                    <option value="+231">+231</option>
                                    <option value="+234">+234</option>
                                    <option value="+134">+134</option>
                                    <option value="+412">+412</option>
                                </select>                             
                                <input class="input1 profile-phone" type="tel" placeholder="Phone">
                            </div>
                            </div>
                        </form>
                    </div>
                    <div class="btn-save"> <button><RouterLink to="/profile">Save</RouterLink> </button></div>
                </div>

                <!-- Property List --> 
                <ProfilePropertyList />
            </div>
        </div>
    <div id="footer"><FooterDown /></div>
    </div>
</template>
<style lang="scss" scoped>
    @import url('../assets/post-a-property.scss');
    @import url('../assets/update-profile.scss');    
</style>

