var init = [
    {
        id: 1,
        name: 'Sherlock ',
        active : true,
        category_id : 1
    },
    {
        id: 2,
        name: 'dskf',
        active: false,
        category_id : 2
    },
    {
        id: 3,
        name: 'dsdsc',
        active: false,
        category_id : 2
    },
    {
        id: 4,
        name: 'Kinh dsadas',
        active: false,
        category_id : 3
    },
    {
        id: 5,
        name: 'Giáodasd dục',
        active: false,
        category_id : 4
    }
];

export default function product(state = null, action){
    switch(action.type){
        case  "GET_PRODUCTS" : 
          return init.filter((item)=> item.category_id == action.id);
        default : return [init[1]];
    }

}
