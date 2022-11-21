<script setup>
import  {RouterLink}  from 'vue-router';
</script>
<template> 
    
    <div class="rg-container">
        <div class="main-registration-content">
            <div></div>
            <div class="rg-content content">
                <h4>Already have an account?</h4>
                <p>If you already have an account you can login to get the view of the latest properties in stock
                </p>
                <button><RouterLink to="/login">Login</RouterLink> </button>
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
                    <div class="input1"  id="placeholder-p"><input type="text" placeholder="Full name">
                    
                        <font-awesome-icon id="lock1" :icon="['fas', 'user']" />
                    </div>

                    <div class="input2" id="placeholder-p">
                        <select name="c-code" id="">
                            <option value="+231">+231</option>
                            <option value="+234">+234</option>
                            <option value="+134">+134</option>
                            <option value="+412">+412</option>
                        </select> 
                        <input type="text" placeholder="Phone number">
                        <font-awesome-icon id="phoneAlt" :icon="['fas', 'phone-alt']" />
                    </div>

                    <div class="input3"  id="placeholder-p"><input type="text" placeholder="Password">
                    
                        <font-awesome-icon id="lock1" :icon="['fas', 'lock']" />
                    </div>
                   
                    <div class="agree-term">I agree to the terms and conditions <input type="checkbox" name="" id=""></div>
                    <div class="btn"><button>Register</button></div>
                </div>
                <div class="log-option">
                    <div>Register with <i class="fa-brands fa-facebook-f"></i> <i class="fa-brands fa-twitter"></i></div>
                </div>
            </div>
            <div></div>
        </form>
    </div>
</template>