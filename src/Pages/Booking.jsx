import { useState } from "react";
import Container from "../Components/ShearComponents/Container";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import { useParams } from "react-router-dom";

const Booking = () => {
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");
  const axios = useAxios();
  const { id } = useParams();
  const { data: service } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const res = await axios.get(`/service/${id}`);
      return res;
    },
  });
  const { mutate } = useMutation({
    mutationKey: ["booking"],
    mutationFn: (bookingData) => {
      const post = axios.post("user/create-booking", bookingData);
      return post;
    },
  });

  return (
    <Container>
      <div className=" min-h-screen bg-base-200">
        <div className="flex p-20 gap-20 justify-center flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left space-y-5">
            <h1 className="text-5xl font-bold">{service?.data?.name}</h1>
            <p className="text-2xl ">{service?.data?.category}</p>
            <p className="text-2xl ">{service?.data?.description}</p>
            <div>
              {service?.data?.features?.map((feature, index) => (
                <p key={index}>{feature}</p>
              ))}
            </div>
            <p className="text-2xl font-light">{"$" + service?.data?.price}</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            {/* from start 🛺 */}
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  onBlur={(e) => setCustomerName(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  onBlur={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  placeholder="Booking Date"
                  className="input input-bordered"
                  onBlur={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Time Set</span>
                </label>
                <input
                  type="time"
                  placeholder="Booking Time"
                  className="input input-bordered"
                  onBlur={(e) => setTime(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Address"
                  onBlur={(e) => setAddress(e.target.value)}
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button
                  type="button"
                  onClick={() =>
                    mutate({
                      customerName,
                      email,
                      date,
                      time,
                      address,
                      service: service?.data?.name,
                      status: "paining",
                    })
                  }
                  className="btn btn-primary"
                >
                  Book Now !
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Booking;
