import axios from 'axios';
const URL = "http://localhost:8080/"

export const getProduct = () => {
    return axios.get(`${URL}products`).then(response => {
        return response;
    }).catch(error => {
        const data = error.response
        return data;
    });
};


export const getProductByName = (value) => {
    return axios.get(`${URL}products/search?keyword=${value}`).then(response => {
        return response;
    }).catch(error => {
        const data = error.response
        return data;
    });
};

export const addProductToCart = (productData) => {
    return axios.post(`${URL}cart`, productData).then(response => {
        return response;
    }).catch(error => {
        const data = error.response
        return data;
    });
};
