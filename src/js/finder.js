import axios from "axios";

export default {
key: '24506912-1bbbf5479d86a7441a40af524',
query: '',
image_type: "photo",
orientation: "horizontal",
safesearch: true,
page: 1,
per_page: 40,

async fetchImages() {
    const response = await axios.get(`https://pixabay.com/api/?key=${this.key}&q=${this.query}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`);
    const res = await response.data;
    return res;
}
}