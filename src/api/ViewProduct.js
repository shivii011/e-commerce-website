import axios from "axios"

export const getProducts = async () => {
  // const getProducts = async () => {
  //   let res = await axios.get("https://dp-backend-e-comm.herokuapp.com/api/products")
  //   let { data } = res.data
  //   let _data = data.slice(0, 6)
  //   setProducts(_data)
  let res = await axios.get("https://dp-backend-e-comm.herokuapp.com/api/products")
  return res.data
}


