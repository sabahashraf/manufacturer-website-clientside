import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyProfile = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [user] = useAuthState(auth);
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const email = user.email;

    if (user) {
      fetch(`http://localhost:5000/user?email=${email}`, {
        method: "Get",

        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserInfo(data);
        });
    }
  }, [user]);
  const onSubmit = (data) => {
    const email = userInfo?.email;
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            toast.success("Succesfully updated your profile");
          }
        });
    }
  };
  return (
    <div>
      <h2 className="text-3xl text-primary my-12 text-center">My Profile</h2>
      <div className="grid lg:grid-cols-1 gap-3 justify-items-center mt-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name:</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={userInfo?.name}
              class="input input-bordered input-primary  w-full max-w-md mb-3"
              {...register("name")}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email:</span>
            </label>

            <input
              type="email"
              value={userInfo.email}
              class="input input-bordered input-primary w-full  max-w-md mb-3"
              {...register("email")}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Education:</span>
            </label>
            <input
              type="text"
              placeholder="Education"
              value={userInfo?.education}
              class="input input-bordered input-primary w-full max-w-md mb-3"
              {...register("education")}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Location:</span>
            </label>

            <input
              type="text"
              placeholder="Location"
              value={userInfo?.location}
              class="input input-bordered  input-primary w-full max-w-md mb-3"
              {...register("location")}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Phone no:</span>
            </label>
            <input
              type="text"
              placeholder="Phone"
              value={userInfo?.phone}
              class="input input-bordered input-primary  w-full max-w-md mb-3"
              {...register("phone")}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Linkedin Link:</span>
            </label>
            <input
              type="text"
              placeholder="Linkedin Link"
              value={userInfo?.linkedin}
              class="input input-bordered input-primary  w-full max-w-md mb-3"
              {...register("linkedin")}
            />
          </div>

          <input
            type="submit"
            className="btn btn-primary w-full max-w-md mb-12"
            value="Update"
          />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
