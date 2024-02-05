import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import auth from "../Firebase/Firebase.config";
import Container from "../Components/ShearComponents/Container";
import toast from "react-hot-toast";

const UserOderBooking = () => {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const { data: service, isLoading } = useQuery({
    queryKey: ["booking"],
    queryFn: async () => {
      const email = auth.currentUser.email;
      const res = await axios.get(`user/bookings?email=${email}`);
      return res;
    },
  });
  const { mutate } = useMutation({
    mutationKey: ["booking"],
    mutationFn: (id) => {
      const res = axios.delete(`/user/booking-cancel/${id}`);
      return res;
    },
    onSuccess: () => {
      toast.success("Successfully Cancel Services");
      queryClient.invalidateQueries({ queryKey: ["booking"] });
    },
  });
  if (isLoading) {
    <span className="loading loading-bars loading-lg "></span>;
  }
  console.log(service);
  return (
    <Container>
      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th></th>
              <td>service</td>
              <td>Date</td>
              <td>Time</td>
              <td>Address</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {service?.data?.map((item, index) => {
              const serviceNumber = index + 1;
              return (
                <tr className="space-y-5" key={item?._id}>
                  <th>{serviceNumber}</th>
                  <td>{item?.serviceName}</td>
                  <td>{item?.date}</td>
                  <td>{item?.time}</td>
                  <td>{item?.address}</td>
                  <td>{item?.status}</td>
                  <button
                    onClick={() => mutate(item?._id)}
                    className="btn btn-error"
                  >
                    Cancel
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default UserOderBooking;
