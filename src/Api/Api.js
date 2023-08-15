import axios from "axios";



const fetchApi = async (url) => {
    try {
        const res = await axios.get(url)
        return res;
    } catch (err) {
        // console.log(err)
        return err
    }

}

export default fetchApi;