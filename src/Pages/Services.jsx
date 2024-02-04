import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
// import { useEffect, useState } from "react";
import Container from "../Components/ShearComponents/Container";
import { useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const axios = useAxios();
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const limit = 9;
  console.log(page);
  // console.log(category);

  const categories = [
    "General",
    "Intensive",
    "Specialized",
    "Window",
    "Office",
    "Eco-friendly",
  ];
  // fun
  const getServices = async () => {
    const res = await axios.get(
      `/services?sortField=price&sortOrder=${price}&category=${category}&page=${page}&limit=${limit}`
    );
    return res;
  };
  const {
    data: service,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["service", price, category, page],
    queryFn: getServices,
  });
  if (isLoading) {
    return <span className="loading loading-bars loading-lg "></span>;
  }
  if (isError) {
    return <p>Something wrong {error}</p>;
  }
  const previousHandel = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const nextHandel = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  };
  // console.log(service.data);
  // 👍👍🤘🤘✨💕
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/api/v1/services")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  const totalPage = Math.ceil(service?.data?.total / limit);
  // console.log("toal", totalPage);
  return (
    <section>
      <Container>
        <div className="my-12 flex justify-end items-center border-2 border-primary rounded-2xl p-5 gap-5">
          <h1 className="flax-1 text-xl font-semibold">
            Over 20 services to choose from
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              className="input input-bordered"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option disabled selected>
                choose one
              </option>
              {categories.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <select
              className="input input-bordered"
              onChange={(e) => setPrice(e.target.value)}
            >
              <option disabled selected>
                choose one
              </option>
              <option value="asc">From low to high</option>
              <option value="desc">From high to low</option>
            </select>
          </div>
        </div>
      </Container>
      <Container>
        <div className="grid grid-cols-3 gap-10">
          {service?.data?.result.map((item) => (
            <div key={item._id}>
              <div className="card h-72 text-white bg-black ">
                <div className="card-body">
                  <h2 className="card-title">{item.name}</h2>
                  <p>{item.category}</p>
                  <p>{item.price + "$"}</p>
                  {item?.features?.map((feature, index) => (
                    <p key={index}>{feature}</p>
                  ))}
                  <Link to={`/booking/${item._id}`} className="btn btn-primary">
                    Booking Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Container>
        {" "}
        <div className="my-8 flex justify-end ">
          <div className="join ">
            <button
              onClick={previousHandel}
              className="join-item btn btn-outline"
            >
              Previous page
            </button>

            {[...Array(totalPage).fill(0)].map((item, index) => {
              const pageNumber = index + 1;
              return (
                <button
                  onClick={() => setPage(pageNumber)}
                  key={pageNumber}
                  className={`${
                    page === pageNumber
                      ? "join-item btn btn-outline btn-primary "
                      : "join-item btn btn-outline btn-ghost"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
            <button onClick={nextHandel} className="join-item btn btn-outline ">
              Next
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
