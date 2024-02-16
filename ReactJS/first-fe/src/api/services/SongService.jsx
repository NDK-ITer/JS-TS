import Root from '../Root';

const version = `v1`
const obj = `song`

const GetAll = () => {
    return Root.get(`${version}/${obj}/all`)
}

const GetMySong = () =>{
    return Root.get(`${version}/${obj}/my-song`)
}

export {
    GetAll,
    GetMySong
}