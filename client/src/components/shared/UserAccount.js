import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const UserAccount = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const [cats, setCats] = useState([]);

  useEffect(() => {
    getCats();
  }, []);
  const getCats = async () => {
    try {
      // remeber we are sending the token with this
      // in our req.headers
      let res = await axios.get("/api/cats");
      setCats(res.data);
    } catch (err) {
      alert("err occured");
      console.log(err);
    }
  };

  const sample = () => {
    if (cats.length > 0) {
      let index = Math.floor(Math.random() * cats.length);
      return cats[index];
    } else {
      return null;
    }
  };

  const upVote = async (id)=>{
      let res = await axios.put(`/api/cats/${id}`)
      console.log(res.data)
      removeCat(id)
  }
  const removeCat = (id)=>{
    setCats(cats.filter((c)=>  c.id !== id))
  }

  const renderCat = () => {
    let cat = sample();
    if (cat) {
      return (
        <div style={{border: '2px solid', width:'200px'}}>
          <img width={100} height={100} src={cat.avatar} />
          <section>
            <h1>{cat.name}</h1>
            <p>{cat.breed}</p>
            <p>{cat.registry}</p>
          </section>
          <section>
            <button onClick={()=> upVote(cat.id)}>thumbs up</button>
            <button onClick={()=> removeCat(cat.id)}>thumbs down</button>
            
          </section>
        </div>
      );
    }
    return <p>no more cats</p>
  };

  return (
    <div>
      <h1>User Account Settings: you must be logged to see this</h1>
      <p>Hello {user.email}</p>
      <div>{renderCat()}</div>
      <button onClick={()=> navigate('/my_cats') }>my cats</button>
    </div>
  );
};

export default UserAccount;
