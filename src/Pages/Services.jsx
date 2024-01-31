import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import { useEffect, useState } from "react";
import Container from "../Components/ShearComponents/Container";

const Services = () => {
  const axios = useAxios();
  const getServices = async () => {
    const res = await axios.get("/services");
    return res;
  };
  const {
    data: services,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["service"],
    queryFn: getServices,
  });
  if (isLoading) {
    return <span className="loading loading-bars loading-lg "></span>;
  }
  if (isError) {
    return <p>Sumthing wrong {error}</p>;
  }
  console.log(services);
  // 👍👍🤘🤘✨💕
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/api/v1/services")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <Container>
      <div className="grid grid-cols-3 gap-10">
        {services?.data?.map((item) => (
          <div key={item._id}>
            <div className="card h-72 text-white bg-black ">
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.price + "$"}</p>
                {item?.features?.map((feature) => (
                  <p key={feature.index}>{feature}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Services;
