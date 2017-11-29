export const ListAll =()=> {
    return {
        type : 'LIST_ALL'
    }
};

export function getProducts(id) {
    return {
        type : 'GET_PRODUCTS',
        id : id
    }
}