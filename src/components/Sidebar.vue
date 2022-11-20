<template>
<div class="sidebar">
    <div class="sidebar-label">

        <div>
            <div>Search</div><br>
            <div class="search"><input type="search" placeholder="Search"></div>
        </div>
        <br>
        <div>
            <div>Location</div>
            <input type="text" placeholder="Most Recent" name="" id="">
            <select name="" id=""> 
                <option value=""></option>
                <option value="">1</option>
                <option value="">2</option>
            </select>
        </div>
        <br>
        <div>
            <div>Category</div>
            <input type="text" placeholder="Most Recent" name="" id="">

            <select name="" id="">
                <option value=""></option>
                <option value="">1</option>
                <option value="">2</option>
            </select>
            <br>
        </div>
        <br>
        <div>
            <div>No. of Bedrooms</div>
            <input type="text" placeholder="Most Recent" name="" id="">

            <select name="" id=""> 
                <option value=""></option>
                <option value="">1</option>
                <option value="">2</option>
            </select>
        </div>
        <br>
        <div>
            <div>No. of Bathrooms</div>
            <input type="text" placeholder="Most Recent" name="" id="">
            <select name="" id="">
                <option value=""></option>
                <option value="">1</option>
                <option value="">2</option>
            </select>
        </div>
        <br>
        <div class="grd-range">
            <label class="grd-price" for="Price">Price: $<span id="val-less">00</span>.00 - $<span id="val">10,000</span>.00</label> <br>
            <input type="range" class="input-rng" min="0" max="10000" value="5000" name="" id="">
        </div>
        <div class="side-btn">Done</div>

    </div>
</div>
</template>