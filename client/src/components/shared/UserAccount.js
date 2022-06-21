import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const UserAccount = () => {
  const {user} = useContext(AuthContext)
  const [cats, setCats] = useState([])

  useEffect(()=>{
    getCats()
  },[])
  const getCats = async()=>{
    try{
      // remeber we are sending the token with this
      // in our req.headers
      let res = await axios.get('/api/cats')
      setCats(res.data)
    }catch(err){
      alert('err occured')
      console.log(err)
    }
  }
  return (
      <div>
      <h1>User Account Settings: you must be logged to see this</h1>
      <p>Hello {user.email}</p> 
      <p>{JSON.stringify(cats)}</p>
      </div>
  )
}



export default UserAccount;