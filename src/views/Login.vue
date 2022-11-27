
<script setup>
import  {RouterLink}  from 'vue-router';
import HeadTopVue from '../components/HeadTop.vue';

</script>
<template> 
<div class="container">
<HeadTopVue />
        <div class="login-container">
            <div class="main-login">
                <div class="content">
                    <h4>Don't have an account?</h4>
                    <p>If you don't have an account you can create one now to get the view of all the available properties in stock.
                    </p>
                    <button><RouterLink to="/register">Register</RouterLink> </button>
                </div>
                <div></div>
            </div>
        </div>

        <!-- Login Form -->
          <form action="">
            <div class="login-form">
                <div class="heading">
                    <h2>LOGIN</h2>
                </div>
                <div class="log-input">
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
                        <div class="input1">
                        <input type="text" placeholder="Password">
                    
                        <font-awesome-icon id="lock1" :icon="['fas', 'lock']" />
                    </div>
                    <div class="forget-password"><strong>Forgot password?</strong></div>
                    <div class="btn"><button>Login</button></div>
                </div>
                <div class="log-option">
                    <div>Log in with <i class="fa-brands fa-facebook-f"></i> <i class="fa-brands fa-twitter"></i></div>
                </div>
            </div>
        </form>   
</div>
</template>