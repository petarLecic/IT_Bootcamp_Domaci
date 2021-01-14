let count = 6;
const data = [
    {
        id: 0,
        desc: 'sdfkjgdg',
        done: true
    },
    {
        id: 1,
        desc: '1231',
        done: true
    },{
        id: 2,
        desc: '12312',
        done: false
    },{
        id: 3,
        desc: 'sdf2123',
        done: true
    },{
        id: 4,
        desc: 'sdfkdsfsfdsjgdg',
        done: true
    },{
        id: 5,
        desc: 'sdfsfsdfsdfsdfkjgdg',
        done: true
    },
];

const add = item => {
    let obj = {id: count++, ...item}
    data.push(obj);
    return obj.id;
};

const deleteById = id => {
    let index = data.findIndex(item => id == item.id);
    data.splice(index, 1);
};

const changeById = (id, item) => {
    let index = data.findIndex(elem => id == elem.id);
    data.splice(index, 1, {id: id, ...item});
};

export default {
    data, add, deleteById, changeById
}