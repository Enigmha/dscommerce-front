import axios from "axios";


export function findAll() {
    return  axios.get(`http://localhost:8080/products/${params.productId}`);
}

export function findById(id: number) {
    return axios.get(`http://localhost:8080/products/${id}`);
}

export function findPageRequest(page: number, query: string) {
    return axios.get(`http://localhost:8080/products?page=${page}&query=${query}`);
  }
       //axios.get("http://localhost:8080/products/?size=12").then((response) => {