
function mapAsync(arr, fn) {

}

const urls = [
    'www.site-1.com/products',
    'www.site-2.com/products',
    'www.site-3.com/products',
];

mapAsync(urls, url => axios.get(url))
    .then((results) => { });