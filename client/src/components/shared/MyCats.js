import useAxiosOnMount from "../../hooks/useAxiosOnMount";

const MyCats = () => {
  const { data, loading, error } = useAxiosOnMount("/api/my_cats");
  
  if (error) return <p>Error occured</p>;
  if (loading) return <p>Loading</p>;
  return (
    <div>
      <h1>My Cats</h1> 
      {data.map((cat) => {
        return (
          <div key={cat.id} style={{ border: "2px solid", width: "200px" }}>
            <img width={100} height={100} src={cat.avatar} />
            <section>
              <h1>{cat.name}</h1>
              <p>{cat.breed}</p>
              <p>{cat.registry}</p>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default MyCats;
