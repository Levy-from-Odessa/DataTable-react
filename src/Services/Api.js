import axios from "axios"

const Api = () => {
  return (axios.create({
      baseURL: "http://api.odesseo.com.ua/warehouses?data",
      mode: 'no-cors',
      crossDomain: true,
      headers: {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "accept-language": "en-US,en;q=0.9,ru;q=0.8",
        "Content-Type": 'text/plain',
      }
  }))
}


export default {
    getWareHouses ({limit, order_by, order, skip}) {
      return Api().get(`&limit=${limit}&order_by=${order_by}&order=${order}&skip=${skip}`)
    }
}

