export const setSortBy =(name)=>({
    type: 'SET_SORT_BY',
    payload: name,
})

export const setCategory =(index,name)=>({
    type: 'SET_CATEGORY',
    payload: index,
    name: name
})

export const setCategoryBy =(name)=>({
    type: 'SET_CATEGORY_BY',
    payload: name,
})