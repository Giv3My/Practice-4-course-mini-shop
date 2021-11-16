<template>
    <div class="main">
        <h1>Mini Shop</h1>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<style>
    /* Generic styling */

    h2, h3, h4, h5, h6 {
        font-family: 'Montserrat', sans-serif;
    }

    button:focus, input:focus {
        outline: none;
    }

    .btn {
        background-color: #F08080;
        border-radius: 2px;
        color: white;
        user-select: none;
        border: none;
        cursor: pointer;
        opacity: 1;
    }

    .btn:active {
        opacity: 0.8;
    }

    [v-cloak] {
        display: none !important;
    }

    .fade-enter-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }

    /* Sections */

    html, body {
        width: 100%;
        height: 100%;
        margin: 0;
    }

    body {
        font-family: 'Lato', sans-serif;
        background-color: #F5F5F5;
    }

    #app {
        margin: 0 2rem;
        padding: 0 2rem;
        background-color: white;
        display: flex;
        flex-direction: column;
    }

    .header {
        flex: 0;
        padding: 1rem 0;
    }

    .main {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding-bottom: 2rem;
    }

    .products {
        flex: 3;
    }

    .cart {
        flex: 2;
    }

    /* Products */

    .product-list {
        margin-right: 1rem;
    }

    .search-results {
        padding-bottom: 1rem;
    }

    .search-results .search-term {
        font-style: italic;
    }

    .product {
        padding: 1rem;
        border: 1px solid #E9E9E9;
        border-radius: 2px;
        overflow: auto;
        margin: 1rem 1rem 1rem 0;
        display: flex;
        flex-flow: row nowrap;
    }

    .product:first-child {
        margin-top: 0;
    }

    .product > div:first-child {

    }

    .product > div:last-child {
        margin-left: 1rem;
    }

    .product-image {
        max-height: 150px;
        width: 250px;
        overflow: hidden;
        border: 1px solid #E9E9E9;
        border-radius: 2px;
    }

    .product-image > img {
        height: 100%;
        display: block;
    }

    .product-title {
        margin-top: 0;
    }

    .product .add-to-cart {
        padding: 0.5rem 1rem;
        font-size: 0.8rem;
    }

    #product-list-bottom {
        text-align: center;
        color: #AAAAAA;
        font-size: 0.85rem;
    }
</style>
