<template>
    <button type="button" :class="testClass">{{ testText }}</button>
</template>

<script>

    export default {
        props: {
            id: {
                type: String,
                default: 'button'
            },
            btnClass: {
                default: 'btn'
            },
            btnText: {
                default: 'Buy now'
            }
        },
        data() {
            return {
                testText: this.btnText,
                testClass: this.btnClass,
                url: '/button'
            }
        },
        methods: {

        }
    }

</script>

<style scoped>
    .btn {
        font: 700 14px/1 'Open Sans';
        display: block;
        text-decoration: none;
        border-radius: 30px;
        line-height: 1;
        height: 40px;
        width: 100%;
        padding: 12px 20px 10px;
        -webkit-transition: all 0.2s linear;
        transition: all 0.2s linear;
        position: relative;
        box-sizing: border-box;
        border: 2px solid #48a415;
        background-color: #FFF;
        color: #48a415;
        cursor: pointer;
    }
    .btn:hover,
    .btn:focus {
        color: #FFF;
        background-color: #367b10;
        border-color: #367b10;
        box-shadow: none;
    }
    .btn.right__arrow {
        padding-right: 40px;
    }
    .btn__primary {
        font: 700 14px/1 'Gotham-Black';
        text-transform: uppercase;
    }
    .btn__primary,
    .btn__secondary {
        position: relative;
        color: #fff;
        border-color: #48a415;
        background-color: #48a415;
        box-shadow: 0 2px 0 0 #c6cacc;
    }
    .btn__sub {
        font: 700 14px/1 'Open Sans';
        text-transform: none;
    }
    .btn__secondary {
        color: #00aeef;
        background-color: transparent;
        border-color: #00aeef;
        box-shadow: none;
    }
    .btn__secondary:hover,
    .btn__secondary:focus {
        color: #FFF;
        background-color: #00aeef;
        border-color: #00aeef;
        box-shadow: none;
    }
    .right__arrow:before,
    .btn__secondary.right__arrow:hover:before,
    .btn__secondary.right__arrow:focus:before {
        content: '';
        background: transparent url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 100 100"><polyline fill="none" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" stroke="#fff" points="41.5,67 58.5,50 41.5,33"/></svg>') center center no-repeat;
        background-size: contain;
        height: 24px;
        width: 24px;
        position: absolute;
        right: 10px;
        top: 7px;
    }
    .btn__secondary.right__arrow:before {
        background: transparent url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0" y="0" viewBox="0 0 100 100"><polyline fill="none" stroke-width="11" stroke-linecap="round" stroke-linejoin="round" stroke="#00aeef" points="41.5,67 58.5,50 41.5,33"/></svg>') center center no-repeat;
    }
    .btn__inline {
        display: inline-block;
        height: auto;
        width: auto;
        padding: 11px 40px;
    }
</style>
