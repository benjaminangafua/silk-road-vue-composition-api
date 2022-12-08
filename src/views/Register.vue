<script setup>
import  {RouterLink}  from 'vue-router';
import HeadTopVue from '../components/HeadTop.vue';

</script>
<template> 
<div class="container">
    <HeadTopVue />
    
    <div class="rg-container">
        <div class="main-registration-content">
            <div></div>
            <div class="rg-content content">
                <h4>Already have an account?</h4>
                <p>If you already have an account you can login to get the view of the latest properties in stock
                </p>
                <button class="pointer"><RouterLink to="/login">Login</RouterLink> </button>
            </div>
        </div>
    </div>
    <div>
        <!-- Registration Form -->
        <form action="">
            <div class="registration-form">
                <div class="heading">
                    <h2>REGISTRATION</h2>
                </div>
                <div class="log-input">
                    <div class="input1"  id="placeholder-p"><input type="text" placeholder="Full Name">
                    
                        <font-awesome-icon id="user-icon" :icon="['fas', 'user']" />
                    </div>

                    <div class="input2" id="placeholder-p">
                        <select name="c-code" id="">
                            <option value="+231">+231</option>
                            <option value="+234">+234</option>
                            <option value="+134">+134</option>
                            <option value="+412">+412</option>
                        </select> 
                        <input id="input2" type="tel" placeholder="Phone number">
                        <font-awesome-icon id="phone-icon" :icon="['fas', 'phone-alt']" />
                    </div>

                    <div class="input3"  id="placeholder-p"><input type="password" placeholder="Password">
                    
                        <font-awesome-icon id="password" :icon="['fas', 'lock']" />
                    </div>
                   
                    <div class="agree-term">I agree to the terms and conditions <input type="checkbox" name="" id=""></div>
                    <div class="btn pointer"><button class="pointer">Register</button></div>
                </div>
                <div class="log-option">
                    <div>Register with <i class="fa-brands fa-facebook-f pointer"></i> <i class="fa-brands fa-twitter pointer"></i></div>
                </div>
            </div>
            <div></div>
        </form>
    </div>
</div>
</template>