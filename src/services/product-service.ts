import axios from "axios";


export function findAll() {
    return  axios.get(`http://localhost:8080/products/${params.productId}`);
}

export function findById(id: number) {
    return axios.get(`http://localhost:8080/products/${id}`);
}

