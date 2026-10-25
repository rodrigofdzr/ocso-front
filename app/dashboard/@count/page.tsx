import axios from "axios";
const ConstPage = async() => {
    const countLocations = await axios.get("http://localhost:4000/location");
    return countLocations?.data.length;
}

export default ConstPage;