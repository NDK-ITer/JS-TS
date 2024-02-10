import Root from '../Root';

const version = `v1`

const GetAll = () => {
    return Root.get(`${version}/song/all`)
}

export {
    GetAll
}