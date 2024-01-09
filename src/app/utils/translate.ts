export default (value:string) => {
    switch (value) {
        case 'publish':
            return 'Publicado'
        default:
            return value;
    }
}