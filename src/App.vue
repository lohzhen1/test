<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>


<template>
    <!-- <body data-rsssl=1 class="home page-template-default page page-id-5680 _masterslider _msp_version_3.2.7 woocommerce-no-js"> -->
    <!-- Background color set here style="background-color: #F0F0F0;" -->
    <div class="body-wrapper  float-menu" data-home="https://demo.goodlayers.com/greennature/">
            <header class="greennature-header-wrapper header-style-5-wrapper greennature-header-with-top-bar">

            <!-- top navigation -->
            <div class="top-navigation-wrapper" v-if="user.data.role != 'admin'">
                <div class="top-navigation-container container">
                    <div class="top-navigation-left">
                        <div class="top-navigation-left-text">
                            Phone : +65-9876-5432      Email : earthkeepers@gmail.com </div>
                    </div>
                    <div class="top-navigation-right">
                        <div class="top-social-wrapper">
                            <div class="social-icon">
                                <a href="https://facebook.com/sgsmu" target="_blank">
                                    <i class="fa fa-facebook"></i></a>
                            </div>
                            <div class="social-icon">
                                <a href="https://www.instagram.com/sgsmu" target="_blank">
                                    <i class="fa fa-instagram"></i></a>
                            </div>
                            <div class="social-icon">
                                <a href="https://twitter.com/sgsmu" target="_blank">
                                    <i class="fa fa-twitter"></i></a>
                            </div>
                            <div class="social-icon">
                                <a href="https://www.linkedin.com/company/singapore-management-university/" target="_blank">
                                    <i class="fa fa-linkedin"></i></a>
                            </div>
                            <div class="social-icon">
                                <a href="https://www.youtube.com/smutubesg" target="_blank">
                                    <i class="fa fa-youtube"></i></a>
                            </div>
                            <div class="social-icon">
                                <a href="https://soundcloud.com/sgsmu" target="_blank">
                                    <i class="fa fa-soundcloud"></i></a>
                            </div>
                            <!-- <div class="social-icon">
                                <a href="#" target="_blank">
                                    <i class="fa fa-vimeo"></i></a>
                            </div> -->
                            <div class="social-icon">

                            </div>
                            <div class="social-icon menu-item menu-item-has-children menu-item menu-item-has-children greennature-normal-menu" 
                            v-on:click="signOut()" v-if="user.loggedIn">
                                <a class="sf-with-ul-pre" style="cursor: pointer;"><i class="fa fa-sign-out"></i>Logout</a> 
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
            
            <div id="greennature-header-substitute"></div>
            <div class="greennature-header-inner header-inner-header-style-5">
                <div class="greennature-header-container container">
                    <div class="greennature-header-inner-overlay"></div>
                    <!-- logo -->
                    <div class="greennature-logo ">
                        <div class="greennature-logo-inner" v-if="user.data.role != 'admin'">
                            <RouterLink to="/">
                                <img src="./assets/logo.png" alt="" /> </RouterLink>
                        </div>
                        <div class="greennature-logo-inner" v-else>
                            <RouterLink to="/Approveimage">
                                <img src="./assets/logo.png" alt="" /> </RouterLink>
                        </div>
                        <div class="greennature-responsive-navigation dl-menuwrapper" id="greennature-responsive-navigation">
                            <button ref="menubutton" class="dl-trigger" v-bind:class="{ 'dl-active': menuOpen}" v-on:click="openMenu()">Open Menu</button>
                            <ul id="menu-main-menu" class="dl-menu greennature-main-mobile-menu" v-bind:class="{ 'dl-menuopen': menuOpen}">
                                <div v-if="user.data.role != 'admin'">
                                    <li class="menu-item menu-item-home page_item page-item-5680 current_page_item home" v-on:click="openMenu()" 
                                        v-bind:class="{ 'current-menu-item': $route.path == '/' }">
                                        <RouterLink to="/"><i class="fa fa-home"></i>Home</RouterLink>
                                    </li>
                                    <li class="menu-item menu-item-15" v-bind:class="{ 'current-menu-item': $route.path == '/marketplace' }" v-on:click="openMenu()">
                                        <RouterLink to="/marketplace" class="sf-with-ul-pre"><i class="fa fa-opencart"></i>Marketplace</RouterLink>
                                    </li>
                                    <li class="menu-item" v-bind:class="{ 'current-menu-item': $route.path == '/eWasteBins' }" v-on:click="openMenu()">
                                        <RouterLink to="/eWasteBins" class="sf-with-ul-pre"><i class="fa fa-globe"></i>E-Waste Bins</RouterLink>
                                    </li>
                                    <li class="menu-item" v-bind:class="{ 'current-menu-item': $route.path == '/rewards' }" v-on:click="openMenu()">
                                        <RouterLink to="/rewards" class="sf-with-ul-pre"><i class="fa fa-money"></i>Rewards</RouterLink>
                                    </li>

                                    
                                    
                                    <li class="menu-item" v-bind:class="{ 'current-menu-item': $route.path == '/cart' }" v-on:click="openMenu()">
                                        <RouterLink to="/cart" class="sf-with-ul-pre"><i class="fa fa-shopping-cart"></i>Cart</RouterLink>
                                    </li>
                                    <li class="menu-item" v-bind:class="{ 'current-menu-item': $route.path == '/profile'}" v-on:click="openMenu()"
                                    v-if="user.loggedIn">
                                        <RouterLink to="/profile" class="sf-with-ul-pre"><i class="fa fa-user"></i>Profile</RouterLink>
                                    </li>
                                    

                                    


                                    <li class="menu-item" v-bind:class="{ 'current-menu-item': $route.path == '/login'}" v-on:click="openMenu()"
                                    v-else>
                                        <RouterLink to="/login" class="sf-with-ul-pre"><i class="fa fa-user"></i>Login</RouterLink>
                                    </li>
                                    <!-- <li class="menu-item" v-on:click="signOut()" v-if="user.loggedIn">
                                        <a class="sf-with-ul-pre" style="cursor: pointer;"><i class="fa fa-sign-out"></i>Logout</a>
                                    </li> -->
                                </div>
                                <div v-else>
                                    <!-- <li class="menu-item menu-item-home page_item page-item-5680 current_page_item home" v-on:click="openMenu()" 
                                    v-bind:class="{ 'current-menu-item': $route.path == '/dashboard' }">
                                    <RouterLink to="/dashboard"><i class="fa fa-home"></i>Dashboard</RouterLink>
                                    </li> -->
                                    <li class="menu-item menu-item-15" v-bind:class="{ 'current-menu-item': $route.path == '/Approveimage' }" v-on:click="openMenu()">
                                        <RouterLink to="/Approveimage"><i class="fa fa-image"></i>Approve Image</RouterLink>
                                    </li>
                                    <li class="menu-item menu-item-15" v-bind:class="{ 'current-menu-item': $route.path == '/adminmap' }" v-on:click="openMenu()">
                                        <RouterLink to="/adminmap"><i class="fa fa-globe"></i>Admin Map</RouterLink>
                                    </li>
                                    <li class="menu-item menu-item-15" v-bind:class="{ 'current-menu-item': $route.path == '/inventory' }" v-on:click="openMenu()">
                                        <RouterLink to="/inventory" class="sf-with-ul-pre"><i class="fa fa-opencart"></i>Inventory</RouterLink>
                                    </li>
                                
                                    <li class="menu-item" v-bind:class="{ 'current-menu-item': $route.path == '/adminRewards' }" v-on:click="openMenu()">
                                        <RouterLink to="/adminRewards" class="sf-with-ul-pre"><i class="fa fa-money"></i>Rewards</RouterLink>
                                    </li>
                                    <!-- <li class="menu-item" v-bind:class="{ 'current-menu-item': $route.path == '/profile'}" v-on:click="openMenu()"
                                    v-if="user.loggedIn">
                                        <RouterLink to="/profile" class="sf-with-ul-pre"><i class="fa fa-user"></i>Profile</RouterLink>
                                    </li> -->
                                    <li class="menu-item" v-on:click="signOut(); openMenu()">
                                        <a class="sf-with-ul-pre" style="cursor: pointer;"><i class="fa fa-sign-out"></i>Logout</a>
                                    </li>
                                </div>

                            </ul>
                            <!-- <ul id="menu-main-menu" class="dl-menu greennature-main-mobile-menu" v-if="user.data.role == 'admin'">

                            </ul> -->
                        </div>
                    </div>

                    <!-- navigation -->
                    <div class="greennature-navigation-wrapper">
                        <nav class="greennature-navigation" id="greennature-main-navigation">
                            <ul id="menu-main-menu-1" class="sf-menu greennature-main-menu" v-if="user.data.role != 'admin'">
                                <li class="menu-item menu-item-home greennature-normal-menu home" v-bind:class="{ 'current-menu-item': $route.path == '/' }">
                                    <RouterLink to="/"><i class="fa fa-home"></i>Home</RouterLink>
                                </li>
                                <li class="menu-item menu-item-has-children greennature-normal-menu" v-bind:class="{ 'current-menu-item': $route.path == '/marketplace' }">
                                    <RouterLink to="/marketplace" class="sf-with-ul-pre"><i class="fa fa-opencart"></i>Marketplace</RouterLink>
                                </li>
                                
                                <li class="menu-item menu-item-has-children menu-item menu-item-has-children greennature-mega-menu" v-bind:class="{ 'current-menu-item': $route.path == '/eWasteBins' }">
                                    <RouterLink to="/eWasteBins" class="sf-with-ul-pre"><i class="fa fa-globe"></i>E-Waste Bins</RouterLink>
                                </li>

                                

                                <!--Current-menu-item-->
                                <li class="menu-item menu-item-has-children menu-item menu-item-has-children greennature-normal-menu" v-bind:class="{ 'current-menu-item': $route.path == '/rewards' }">
                                    <RouterLink to="/rewards" class="sf-with-ul-pre"><i class="fa fa-money"></i>Rewards</RouterLink>
                                </li>
                                <li class="menu-item menu-item-has-children menu-item menu-item-has-children greennature-normal-menu" v-bind:class="{ 'current-menu-item': $route.path == '/cart' }">
                                    <RouterLink to="/cart" class="sf-with-ul-pre"><i class="fa fa-shopping-cart"></i>Cart</RouterLink>
                                </li>
                                <li class="menu-item menu-item-has-children menu-item menu-item-has-children greennature-normal-menu" v-bind:class="{ 'current-menu-item': $route.path == '/profile' }"
                                v-if="user.loggedIn">
                                    <RouterLink to="/profile" class="sf-with-ul-pre"><i class="fa fa-user"></i>Profile</RouterLink>
                                </li>
                                
                                    <!--Order page test
                                    <li class="menu-item menu-item-has-children menu-item menu-item-has-children greennature-mega-menu" v-bind:class="{ 'current-menu-item': $route.path == '/orders' }"  v-on:click="openMenu()"
                                 v-if="user.loggedIn">
                                    <RouterLink to="/orders" class="sf-with-ul-pre"><i class="fa fa-globe"></i>Orders</RouterLink>
                                    </li>
                                -->
                                     <!--Orderviews page test
                                     <li class="menu-item menu-item-has-children menu-item menu-item-has-children greennature-mega-menu" v-bind:class="{ 'current-menu-item': $route.path == '/ordersviews' }"  v-on:click="openMenu()"
                                 v-if="user.loggedIn">
                                    <RouterLink to="/ordersviews" class="sf-with-ul-pre"><i class="fa fa-globe"></i>View</RouterLink>
                                    </li>
                                    -->

                                <li class="menu-item menu-item-has-children menu-item menu-item-has-children greennature-normal-menu" v-bind:class="{ 'current-menu-item': $route.path == '/login' }"
                                v-else>
                                    <RouterLink to="/login" class="sf-with-ul-pre"><i class="fa fa-user"></i>Login</RouterLink>
                                </li>
                                <!-- <li class="menu-item menu-item-has-children menu-item menu-item-has-children greennature-normal-menu" 
                                v-on:click="signOut()" v-if="user.loggedIn">
                                   <a class="sf-with-ul-pre" style="cursor: pointer;"><i class="fa fa-sign-out"></i>Logout</a> 
                                </li> -->
                            </ul>
                            <ul id="menu-main-menu-1" class="sf-menu greennature-main-menu" v-if="user.data.role == 'admin'">
                                <!-- <li class="menu-item menu-item-home greennature-normal-menu home" v-bind:class="{ 'current-menu-item': $route.path == '/dashboard' }">
                                    <RouterLink to="/dashboard"><i class="fa fa-home"></i>Dashboard</RouterLink>
                                </li> -->

                                <!--Approve image-->
                                <li class="menu-item menu-item-home greennature-normal-menu home" v-bind:class="{ 'current-menu-item': $route.path == '/Approveimage' }">
                                    <RouterLink to="/Approveimage"><i class="fa fa-image"></i>Approve Image</RouterLink>
                                </li>


                                <li class="menu-item menu-item-home greennature-normal-menu home" v-bind:class="{ 'current-menu-item': $route.path == '/adminmap' }">
                                    <RouterLink to="/adminmap"><i class="fa fa-globe"></i>Admin Map</RouterLink>
                                </li>
                                
                                <li class="menu-item menu-item-has-children greennature-normal-menu" v-bind:class="{ 'current-menu-item': $route.path == '/inventory' }">
                                    <RouterLink to="/inventory" class="sf-with-ul-pre"><i class="fa fa-opencart"></i>Inventory</RouterLink>
                                </li>
                                <li class="menu-item menu-item-has-children menu-item menu-item-has-children greennature-mega-menu" v-bind:class="{ 'current-menu-item': $route.path == '/adminRewards' }">
                                    <RouterLink to="/adminRewards" class="sf-with-ul-pre"><i class="fa fa-money"></i>Rewards</RouterLink>
                                </li>
                                
                                 

                                <li class="menu-item menu-item-has-children menu-item menu-item-has-children greennature-normal-menu" 
                                v-on:click="signOut()" v-if="user.loggedIn">
                                   <a class="sf-with-ul-pre" style="cursor: pointer;"><i class="fa fa-sign-out"></i>Logout</a> 
                                </li>


                                
                               
                            </ul>
                            <!-- <RouterLink to="/cart" class="greennature-donate-button greennature-lb-payment" v-bind:class="{ 'current-menu-item': $route.path == '/cart' }">
                                <span class="greennature-button-overlay"></span><span class="greennature-button-donate-text"><i class="fa fa-shopping-cart"></i>Cart</span>
                            </RouterLink>
                            <RouterLink to="/profile" class="greennature-donate-button greennature-lb-payment" v-bind:class="{ 'current-menu-item': $route.path == '/profile' }">
                                <span class="greennature-button-overlay"></span><span class="greennature-button-donate-text"><i class="fa fa-user"></i>Profile</span>
                            </RouterLink> -->

                        </nav>
                        <!-- <div class="greennature-navigation-gimmick" id="greennature-navigation-gimmick"></div> -->
                        <div class="clear"></div>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </header>
    <div class="content-wrapper">
            <div class="greennature-content">
    <RouterView />
    </div>
    </div>

    <!-- Footer -->
    <footer class="footer-wrapper" v-if="user.data.role != 'admin'">
            <div class="footer-container container">
                <div class="footer-column three columns" id="footer-widget-1">
                    <div id="text-5" class="widget widget_text greennature-item greennature-widget">
                        <div class="textwidget">
                            <p style="text-align: center;"><img src="./assets/logo.png" style="width: 170px;" alt="" /></p>
                            <p>
                                Here at Earthkeepers, we aim to tackle the issue of E-Waste 
                                through the emphasis on proper E-Waste disposal and encourage 
                                the use of refurbished electronic parts.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="footer-column three columns" id="footer-widget-2">
                    <div id="text-9" class="widget widget_text greennature-item greennature-widget">
                        <h3 class="greennature-widget-title">Contact Info</h3>
                        <div class="clear"></div>
                        <div class="textwidget"><span class="clear"></span><span class="greennature-space" style="margin-top: -6px; display: block;"></span> Address: 184 Main Collins Street West Victoria 8007

                            <span class="clear"></span><span class="greennature-space" style="margin-top: 10px; display: block;"></span>

                            <i class="greennature-icon fa fa-phone" style="vertical-align: middle; color: #fff; font-size: 16px; "></i> +65-9876-5432

                            <span class="clear"></span><span class="greennature-space" style="margin-top: 10px; display: block;"></span>

                            <i class="greennature-icon fa fa-mobile" style="vertical-align: middle; color: #fff; font-size: 20px; "></i> +65-9876-5432

                            <span class="clear"></span><span class="greennature-space" style="margin-top: 10px; display: block;"></span>

                            <i class="greennature-icon fa fa-envelope-o" style="vertical-align: middle; color: #fff; font-size: 16px; "></i> earthkeepers@gmail.com</div>
                    </div>
                </div>
                <div class="footer-column three columns" id="footer-widget-3">
                    <div id="gdlr-recent-post-widget-5" class="widget widget_gdlr-recent-post-widget greennature-item greennature-widget">
                        <h3 class="greennature-widget-title">Marketplace</h3>
                        <div class="clear"></div>
                        <div class="greennature-recent-post-widget">
                            <div class="recent-post-widget">
                                <RouterLink to="/marketplace" class="sf-with-ul-pre">
                                <div class="recent-post-widget-thumbnail">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/earthkeepers-bbc61.appspot.com/o/images%2FX6xNvDUkpszBljh8kNlT?alt=media&token=bb57475c-f2c0-4565-b122-fe1f5fdf371f&_gl=1*8pkkjx*_ga*MjEyMzQ1MTQwNy4xNjk2MDAzMDU2*_ga_CW55HF8NVT*MTY5NzI3MjQyNi4xOS4xLjE2OTcyNzQ3NzAuNTEuMC4w" alt="" width="150" height="150" />
                                </div>
                                <div class="recent-post-widget-content">
                                    <div class="recent-post-widget-title">CPU</div>
                                    <div class="recent-post-widget-info">
                                        <div class="blog-info blog-date greennature-skin-info">Price: $50</div>
                                        <div class="clear"></div>
                                    </div>
                                </div>
                                </RouterLink>
                                <div class="clear"></div>
                            </div>
                            <div class="recent-post-widget">
                                <RouterLink to="/marketplace" class="sf-with-ul-pre">
                                <div class="recent-post-widget-thumbnail">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/earthkeepers-bbc61.appspot.com/o/images%2FjvUyrT3XiI2QohdZGLkI?alt=media&token=71629e8d-ee77-4c6a-9f30-5d8fe555edb6&_gl=1*9cghp5*_ga*MjEyMzQ1MTQwNy4xNjk2MDAzMDU2*_ga_CW55HF8NVT*MTY5NzI3MjQyNi4xOS4xLjE2OTcyNzQ5NDAuNDEuMC4w" alt="" width="150" height="150" />
                                </div>
                                <div class="recent-post-widget-content">
                                    <div class="recent-post-widget-title">Graphics card</div>
                                    <div class="recent-post-widget-info">
                                        <div class="blog-info blog-date greennature-skin-info">$50</div>
                                        <div class="clear"></div>
                                    </div>
                                </div>
                                </RouterLink>
                                <div class="clear"></div>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>
                <div class="footer-column three columns" id="footer-widget-4">
                    <div id="gdlr-recent-portfolio2-widget-6" class="widget widget_gdlr-recent-portfolio2-widget greennature-item greennature-widget">
                        <h3 class="greennature-widget-title">Refurbished electronics</h3>
                        <div class="clear"></div>
                        <div class="row justify-content-center">
                            <div class="col-4 align-self-center">
                                <RouterLink to="/marketplace" class="sf-with-ul-pre">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/earthkeepers-bbc61.appspot.com/o/images%2FX6xNvDUkpszBljh8kNlT?alt=media&token=bb57475c-f2c0-4565-b122-fe1f5fdf371f&_gl=1*8pkkjx*_ga*MjEyMzQ1MTQwNy4xNjk2MDAzMDU2*_ga_CW55HF8NVT*MTY5NzI3MjQyNi4xOS4xLjE2OTcyNzQ3NzAuNTEuMC4w" alt="" width="150" height="150" />
                                </RouterLink>
                            </div>
                            <div class="col-4 align-self-center">
                                <RouterLink to="/marketplace" class="sf-with-ul-pre">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/earthkeepers-bbc61.appspot.com/o/images%2FjvUyrT3XiI2QohdZGLkI?alt=media&token=71629e8d-ee77-4c6a-9f30-5d8fe555edb6&_gl=1*9cghp5*_ga*MjEyMzQ1MTQwNy4xNjk2MDAzMDU2*_ga_CW55HF8NVT*MTY5NzI3MjQyNi4xOS4xLjE2OTcyNzQ5NDAuNDEuMC4w" alt="" width="150" height="150" />
                                </RouterLink>
                            </div>
                            <div class="col-4 align-self-center">
                                <RouterLink to="/marketplace" class="sf-with-ul-pre">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/earthkeepers-bbc61.appspot.com/o/images%2FX6xNvDUkpszBljh8kNlT?alt=media&token=bb57475c-f2c0-4565-b122-fe1f5fdf371f&_gl=1*8pkkjx*_ga*MjEyMzQ1MTQwNy4xNjk2MDAzMDU2*_ga_CW55HF8NVT*MTY5NzI3MjQyNi4xOS4xLjE2OTcyNzQ3NzAuNTEuMC4w" alt="" width="150" height="150" />
                                </RouterLink>                            </div>
                            <div class="col-4 align-self-center">
                                <RouterLink to="/marketplace" class="sf-with-ul-pre">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/earthkeepers-bbc61.appspot.com/o/images%2FjvUyrT3XiI2QohdZGLkI?alt=media&token=71629e8d-ee77-4c6a-9f30-5d8fe555edb6&_gl=1*9cghp5*_ga*MjEyMzQ1MTQwNy4xNjk2MDAzMDU2*_ga_CW55HF8NVT*MTY5NzI3MjQyNi4xOS4xLjE2OTcyNzQ5NDAuNDEuMC4w" alt="" width="150" height="150" />
                                </RouterLink>                            </div>
                            <div class="col-4 align-self-center">
                                <RouterLink to="/marketplace" class="sf-with-ul-pre">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/earthkeepers-bbc61.appspot.com/o/images%2FX6xNvDUkpszBljh8kNlT?alt=media&token=bb57475c-f2c0-4565-b122-fe1f5fdf371f&_gl=1*8pkkjx*_ga*MjEyMzQ1MTQwNy4xNjk2MDAzMDU2*_ga_CW55HF8NVT*MTY5NzI3MjQyNi4xOS4xLjE2OTcyNzQ3NzAuNTEuMC4w" alt="" width="150" height="150" />
                                </RouterLink>                            </div>
                            <div class="col-4 align-self-center">
                                <RouterLink to="/marketplace" class="sf-with-ul-pre">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/earthkeepers-bbc61.appspot.com/o/images%2FjvUyrT3XiI2QohdZGLkI?alt=media&token=71629e8d-ee77-4c6a-9f30-5d8fe555edb6&_gl=1*9cghp5*_ga*MjEyMzQ1MTQwNy4xNjk2MDAzMDU2*_ga_CW55HF8NVT*MTY5NzI3MjQyNi4xOS4xLjE2OTcyNzQ5NDAuNDEuMC4w" alt="" width="150" height="150" />
                                </RouterLink>                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>

            <!-- <div class="copyright-wrapper">
                <div class="copyright-container container">
                    <div class="copyright-left">
                        <a href="#"><i class="greennature-icon fa fa-facebook" style="vertical-align: middle;color: #bbbbbb;font-size: 20px"></i></a>
                        <a href="#"><i class="greennature-icon fa fa-twitter" style="vertical-align: middle;color: #bbbbbb;font-size: 20px"></i></a>
                        <a href="#"><i class="greennature-icon fa fa-dribbble" style="vertical-align: middle;color: #bbbbbb;font-size: 20px"></i></a>
                        <a href="#"><i class="greennature-icon fa fa-pinterest" style="vertical-align: middle;color: #bbbbbb;font-size: 20px"></i></a>
                        <a href="#"><i class="greennature-icon fa fa-google-plus" style="vertical-align: middle;color: #bbbbbb;font-size: 20px"></i></a>
                        <a href="#"><i class="greennature-icon fa fa-instagram" style="vertical-align: middle;color: #bbbbbb;font-size: 20px"></i></a>
                    </div>
                    <div class="copyright-right">
                       <a target="_blank" href="https://www.templateshub.net">Templates Hub</a> </div>
                    <div class="clear"></div>
                </div>
            </div> -->
        </footer>
    </div>
<!-- </body> -->

</template>

<style scoped>

.content-wrapper{
    height: 100%;
    min-height: 100%;
    clear: both;
}
.current-menu-item {
    border-bottom: 3px solid #90ba92 ;
}
.greennature-navigation-wrapper .greennature-main-menu > li {
    padding-left: 10px;
    padding-right: 10px;
}
li a {
    padding-right: 0px;
}
.greennature-navigation-wrapper .greennature-main-menu > li > a {
    font-size: 13px;
    padding: 0px 0px 33px 0px;
    margin: 0px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

/* @media screen and (min-width: 767px) {
  .content-wrapper {
    margin-top: 150px;
  }
} */
</style>

<script>
import router from './router/index'
import store from './store/index'
import { auth } from './firebase/config'

auth.onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
});





export default {
    name: "app",
    data() {
        return {
            user: store.getters.user,
            menuOpen: false,
        }
    },
    methods: {
        openMenu(){
            // this.$refs.menubutton.click();
            this.menuOpen = !this.menuOpen;
        },
        async signOut() {
            var confirmLogout = confirm("Are you sure you want to logout?");
            if(confirmLogout){
                await store.dispatch('logOut')
                alert("You've logged out")
                router.push('/')
            }
        }
    },
}
// v-on:click="clickNav($event)"
// export default {
//     methods: {
//         clickNav(item){

//             var current = document.getElementsByClassName("current-menu-item");
//             console.log(current[0].classList);

//             current[0].classList.remove("current-menu-item");
//             current[0].classList.remove("current-menu-item");

//             //current[1].className = current[1].className.replace("current-menu-item", "");

//             var toChange = document.getElementsByClassName("current-menu-item");
//             console.log(window.location.pathname);


//             item.currentTarget.classList.add("current-menu-item");
//         }
//     }
//   }

</script>