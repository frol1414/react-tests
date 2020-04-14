import axios from 'axios';

export default axios.create({
   baseURL: 'https://react-tests-1.firebaseio.com/'
})