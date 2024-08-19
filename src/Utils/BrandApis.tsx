import React from 'react'

const {default: axiosClient} = require ('./axiosClient');

const getLatestBrand = () => axiosClient.get('/brands?populate=*')


export default {
    getLatestBrand
}


