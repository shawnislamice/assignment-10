import { useContext } from "react";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";

const MyList = () => {
  const spots = useLoaderData();
  const { user } = useContext(AuthContext);
  const email = user.email;
  const remaining = spots.filter((spot) => spot.userEmail == email);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/tourspots/${id}`, {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                navigate("/alltouristspot");
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your selected travel spot has been deleted.",
                  icon: "success",
                });
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };
  return (
    <div className="container mx-auto max-w-screen-xl md:mt-5">
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-300">
              <tr className="text-left">
                <th className="p-3">User ID</th>
                <th className="p-3">User Email</th>
                <th className="p-3">Spot Name</th>
                <th className="p-3">Country</th>
                <th className="p-3 text-right">Average Cost</th>

                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {remaining.map((item) => (
                <tr
                  key={item._id}
                  className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                >
                  <td className="p-3">
                    <p>{item._id}</p>
                  </td>
                  <td className="p-3">
                    <p>{item.userEmail}</p>
                  </td>
                  <td className="p-3">
                    <p className="dark:text-gray-600">{item.touristSpotName}</p>
                  </td>
                  <td className="p-3">
                    <p className="dark:text-gray-600">{item.country}</p>
                  </td>
                  <td className="p-3 text-right">
                    <p>{item.averageCost}$</p>
                  </td>
                  <td className="p-3 text-right flex flex-col items-center justify-center gap-2">
                    <button className="btn btn-primary font-semibold">
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-secondary font-semibold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyList;
