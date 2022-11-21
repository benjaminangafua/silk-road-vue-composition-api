
<script setup> 
import FooterDownVue from '../components/FooterDown.vue';
import SidebarVue from '../components/Sidebar.vue';
import PropertyMainContentNav from '../components/PropertyMainContentNav.vue'
import propertyData from '../property-data.json'
import { ref} from 'vue';

const house_detail = ref(propertyData.row)
    
</script>

<template> 
<div id="property-grd">
    <div class="grid-container">
        <!-- Side Bar -->
        <SidebarVue/>
        <!-- Main content -->
        <div class="main-content">
            <!-- property Main content nav -->
            <PropertyMainContentNav/>
            <!-- Property LAyout -->
            <div class="content-grids">
                <div class="content-list">
                    <div class="carts-list">
                        <div class="img-ls"><img :src="house_detail.house1.image" alt=""></div>
                        <div class="ls-r">
                            <div class="cart-txt">
                                <div class="top-carts-list">
                                    <div class="cart-small-text bed-room">3 Bedroom Townhouse</div>
                                    <div class="price-ls"><strong>$500.00/</strong>month</div>

                                </div>

                                <div class="cart-small-text"><img src="" alt="">45 Circle Dr, Monrovia, Liberia</div>
                                <div class="cart-small-text">Peter Wayne</div>
                            </div>
                            <div class="icons-layout">
                                <div class="icon"><span class="material-symbols-outlined">change_history</span> </div>
                                <!-- <font-awesome-icon :icon="['fas', 'book']" /> -->
                                <div class="icon"><span class="material-symbols-outlined">book</span> </div>
                                <div class="icon"><span class="material-symbols-outlined">memory</span> </div>
                                <div class="icon"><span class="material-symbols-outlined">desktop_windows</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="carts-list">
                        <div class="img-ls"><img  :src="house_detail.house2.image" alt=""></div>
                        <div class="ls-r">
                            <div class="cart-txt">

                                <div class="top-carts-list">
                                    <div class="cart-small-text bed-room">3 Bedroom Townhouse</div>
                                    <div class="price-ls"><strong>$500.00/</strong>month</div>

                                </div>
                                <div class="cart-small-text"><img src="" alt="">45 Circle Dr, Monrovia, Liberia</div>
                                <div class="cart-small-text">Peter Wayne</div>
                            </div>
                            <div class="icons-layout">
                                <div class="icon"><span class="material-symbols-outlined">change_history</span> </div>
                                <!-- <font-awesome-icon :icon="['fas', 'book']" /> -->
                                <div class="icon"><span class="material-symbols-outlined">book</span> </div>
                                <div class="icon"><span class="material-symbols-outlined">memory</span> </div>
                                <div class="icon"><span class="material-symbols-outlined">desktop_windows</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="carts-list">
                        <div class="img-ls"><img :src="house_detail.house3.image" alt=""></div>
                        <div class="ls-r">
                            <div class="cart-txt">

                                <div class="top-carts-list">
                                    <div class="cart-small-text bed-room">3 Bedroom Townhouse</div>
                                    <div class="price-ls"><strong>$500.00/</strong>month</div>

                                </div>
                                <div class="cart-small-text"><img src="" alt="">45 Circle Dr, Monrovia, Liberia</div>
                                <div class="cart-small-text">Peter Wayne</div>
                            </div>
                            <div class="icons-layout">
                                <div class="icon"><span class="material-symbols-outlined">change_history</span> </div>
                                <!-- <font-awesome-icon :icon="['fas', 'book']" /> -->
                                <div class="icon"><span class="material-symbols-outlined">book</span> </div>
                                <div class="icon"><span class="material-symbols-outlined">memory</span> </div>
                                <div class="icon"><span class="material-symbols-outlined">desktop_windows</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="carts-list">
                        <div class="img-ls"><img :src="house_detail.house4.image" alt=""></div>
                        <div class="ls-r">
                            <div class="cart-txt">

                                <div class="top-carts-list">
                                    <div class="cart-small-text bed-room">3 Bedroom Townhouse</div>
                                    <div class="price-ls"><strong>$500.00/</strong>month</div>

                                </div>
                                <div class="cart-small-text"><img src="" alt="">45 Circle Dr, Monrovia, Liberia</div>
                                <div class="cart-small-text">Peter Wayne</div>
                            </div>
                            <div class="icons-layout">
                                <div class="icon"><span class="material-symbols-outlined">change_history</span> </div>
                                <!-- <font-awesome-icon :icon="['fas', 'book']" /> -->
                                <div class="icon"><span class="material-symbols-outlined">book</span> </div>
                                <div class="icon"><span class="material-symbols-outlined">memory</span> </div>
                                <div class="icon"><span class="material-symbols-outlined">desktop_windows</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="carts-list">
                        <div class="img-ls"><img :src="house_detail.house5.image" alt=""></div>
                        <div class="ls-r">
                            <div class="cart-txt">

                                <div class="top-carts-list">
                                    <div class="cart-small-text bed-room">3 Bedroom Townhouse</div>
                                    <div class="price-ls"><strong>$500.00/</strong>month</div>

                                </div>
                                <div class="cart-small-text"><img src="" alt="">45 Circle Dr, Monrovia, Liberia</div>
                                <div class="cart-small-text">Peter Wayne</div>
                            </div>
                            <div class="icons-layout">
                                <div class="icon"><span class="material-symbols-outlined">change_history</span> </div>
                                <!-- <font-awesome-icon :icon="['fas', 'book']" /> -->
                                <div class="icon"><span class="material-symbols-outlined">book</span> </div>
                                <div class="icon"><span class="material-symbols-outlined">memory</span> </div>
                                <div class="icon"><span class="material-symbols-outlined">desktop_windows</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="carts-list">
                        <div class="img-ls"><img :src="house_detail.house6.image" alt=""></div>
                        <div class="ls-r">
                            <div class="cart-txt">

                                <div class="top-carts-list">
                                    <div class="cart-small-text bed-room">3 Bedroom Townhouse</div>
                                    <div class="price-ls"><strong>$500.00/</strong>month</div>

                                </div>
                                <div class="cart-small-text"><img src="" alt="">45 Circle Dr, Monrovia, Liberia</div>
                                <div class="cart-small-text">Peter Wayne</div>
                            </div>
                            <div class="icons-layout">
                                <div class="icon"><span class="material-symbols-outlined">change_history</span> </div>
                                <!-- <font-awesome-icon :icon="['fas', 'book']" /> -->
                                <div class="icon"><span class="material-symbols-outlined">book</span> </div>
                                <div class="icon"><span class="material-symbols-outlined">memory</span> </div>
                                <div class="icon"><span class="material-symbols-outlined">desktop_windows</span></div>
                            </div>
                        </div>
                    </div>

                    <div class="carts-list">
                        <div class="img-ls"><img :src="house_detail.house11.image" alt=""></div>
                        <div class="ls-r">
                            <div class="cart-txt">

                                <div class="top-carts-list">
                                    <div class="cart-small-text bed-room">3 Bedroom Townhouse</div>
                                    <div class="price-ls"><strong>$500.00/</strong>month</div>

                                </div>
                                <div class="cart-small-text"><img src="" alt="">45 Circle Dr, Monrovia, Liberia</div>
                                <div class="cart-small-text">Peter Wayne</div>
                            </div>
                            <div class="icons-layout">
                                <div class="icon"><span class="material-symbols-outlined">change_history</span> </div>
                                <!-- <font-awesome-icon :icon="['fas', 'book']" /> -->
                                <div class="icon"><span class="material-symbols-outlined">book</span> </div>
                                <div class="icon"><span class="material-symbols-outlined">memory</span> </div>
                                <div class="icon"><span class="material-symbols-outlined">desktop_windows</span></div>
                            </div>
                        </div>
                    </div>

                    <div class="carts-list">
                        <div class="img-ls"><img :src="house_detail.house8.image" alt=""></div>
                        <div class="ls-r">
                            <div class="cart-txt">

                                <div class="top-carts-list">
                                    <div class="cart-small-text bed-room">3 Bedroom Townhouse</div>
                                    <div class="price-ls"><strong>$500.00/</strong>month</div>

                                </div>
                                <div class="cart-small-text"><img src="" alt="">45 Circle Dr, Monrovia, Liberia</div>
                                <div class="cart-small-text">Peter Wayne</div>
                            </div>
                            <div class="icons-layout">
                                <div class="icon"><span class="material-symbols-outlined">change_history</span> </div>
                                <!-- <font-awesome-icon :icon="['fas', 'book']" /> -->
                                <div class="icon"><span class="material-symbols-outlined">book</span> </div>
                                <div class="icon"><span class="material-symbols-outlined">memory</span> </div>
                                <div class="icon"><span class="material-symbols-outlined">desktop_windows</span></div>
                            </div>
                        </div>
                    </div>

                    <div class="carts-list">
                        <div class="img-ls"><img :src="house_detail.house9.image" alt=""></div>
                        <div class="ls-r">
                            <div class="cart-txt">

                                <div class="top-carts-list">
                                    <div class="price-ls"><strong>$500.00/</strong>month</div>

                                </div>
                                <div class="cart-small-text"><img src="" alt="">45 Circle Dr, Monrovia, Liberia</div>
                                <div class="cart-small-text">Peter Wayne</div>
                            </div>
                            <div class="icons-layout">
                                <div class="icon"><span class="material-symbols-outlined">change_history</span> </div>
                                <!-- <font-awesome-icon :icon="['fas', 'book']" /> -->
                                <div class="icon"><span class="material-symbols-outlined">book</span> </div>
                                <div class="icon"><span class="material-symbols-outlined">memory</span> </div>
                                <div class="icon"><span class="material-symbols-outlined">desktop_windows</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="advertisement">
                    Advertisement
                </div>
            </div>
        </div>
    </div>
    <FooterDownVue />
</div>
</template>


<style scoped>
#head{
    background-color:gray !important;
}
</style>