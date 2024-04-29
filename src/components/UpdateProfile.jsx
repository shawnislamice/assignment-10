import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const handleUpdate = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then((result) => {
        toast.success("Profile Updated Successfully");
        e.target.reset()
      })
      .catch((error) => {
        toast.error("Profile Updated Failed!");
      });
      window.location.reload()
  };
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-secondary block mx-auto"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Update Profile
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg text-center">
            Update Your Profile Now
          </h3>
          <form onSubmit={handleUpdate} className="space-y-3">
            <input
              type="text"
              className="input bg-base-200 w-full"
              name="name"
              placeholder="Name"
              defaultValue={user.displayName}
            />
            <input
              type="text"
              className="input bg-base-200 w-full"
              name="photo"
              placeholder="Photo"
              defaultValue={user.photoURL}
            />
            <button className="btn btn-primary block mx-auto">
              Update Now
            </button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateProfile;
