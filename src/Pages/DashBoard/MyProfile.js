import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

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
  /*  const email = user?.email;
  const {
    data: userInfo,
    isLoading,
    refetch,
  } = useQuery(
    ["userInfo", email],
    fetch(`http://localhost:5000/user?email=${email}`, {
      method: "Get",

      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  } */

  const onSubmit = (data) => {
    const email = userInfo?.email;
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            toast.success("Succesfully updated your profile");
            reset();
          }
        });
    }
  };
  return (
    <div className="">
      <div>
        <h2 className="text-3xl font-bold text-primary my-12 text-center w-2/3">
          {" "}
          Your Profile
        </h2>
        <ul className="mx-auto w-2/3">
          {userInfo?.name && (
            <li>
              <span className="text-lg font-semibold mb-2">Name: </span>
              {userInfo.name}
            </li>
          )}
          {userInfo?.email && (
            <li>
              <span className="text-lg font-semibold mb-2">Email: </span>
              {userInfo.email}
            </li>
          )}
          {userInfo?.education && (
            <li>
              <span className="text-lg font-semibold mb-2">Education: </span>
              {userInfo.education}
            </li>
          )}
          {userInfo?.location && (
            <li>
              <span className="text-lg font-semibold mb-2">Location: </span>
              {userInfo.location}
            </li>
          )}
          {userInfo?.phone && (
            <li>
              <span className="text-lg font-semibold mb-2">Phone no:</span>
              {userInfo.phone}
            </li>
          )}
          {userInfo?.linkedin && (
            <li>
              <span className="text-lg font-semibold mb-2">Linkedin: </span>
              {userInfo.linkedin}
            </li>
          )}
        </ul>
      </div>
      <div className="flex flex-col  mt-2 mx-auto">
        <h2 className="text-3xl font-bold text-primary my-12 text-center w-2/3">
          {" "}
          Feel Free To Update Your Profile
        </h2>
        <form className="mx-auto w-2/3" onSubmit={handleSubmit(onSubmit)}>
          <div className="  w-full max-w-lg">
            <label className="label">
              <span className="text-xl mr-2">Name:</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={userInfo?.name}
              className="input input-bordered input-primary  w-full max-w-sm mb-3"
              {...register("name")}
            />
          </div>
          <div className="  w-full max-w-lg">
            <label className="label">
              <span className="text-xl mr-2">Email:</span>
            </label>

            <input
              type="email"
              value={userInfo?.email}
              className="input input-bordered input-primary  w-full  max-w-sm mb-3"
              {...register("email")}
            />
          </div>
          <div className="  w-full max-w-lg">
            <label className="label">
              <span className="text-xl mr-2">Education:</span>
            </label>
            <input
              type="text"
              placeholder="Education"
              className="input input-bordered input-primary w-full max-w-sm mb-3"
              {...register("education")}
            />
          </div>
          <div className="  w-full max-w-lg">
            <label className="label">
              <span className="text-xl mr-2">Location:</span>
            </label>

            <input
              type="text"
              placeholder="Location"
              className="input input-bordered  input-primary w-full max-w-sm mb-3"
              {...register("location")}
            />
          </div>
          <div className="  w-full max-w-lg">
            <label className="label">
              <span className="text-xl mr-2">Phone no:</span>
            </label>
            <input
              type="text"
              placeholder="Phone"
              className="input input-bordered input-primary  w-full max-w-sm mb-3"
              {...register("phone")}
            />
          </div>
          <div className="  w-full max-w-lg">
            <label className="label">
              <span className="text-xl mr-2">Linkedin Link:</span>
            </label>
            <input
              type="text"
              placeholder="Linkedin Link"
              className="input input-bordered input-primary  w-full max-w-sm mb-3"
              {...register("linkedin")}
            />
          </div>

          <input
            type="submit"
            className="btn btn-neutral text-white w-full max-w-sm mb-12 mt-5"
            value="Update"
          />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
