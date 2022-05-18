import React from "react";
import { useForm } from "react-hook-form";

const AddNewList = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const addList = {
      name: data.name,
      description: data.description,
    };
    fetch("http://localhost:5000/list", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addList),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="flex lg:h-4/5 sm:my-28 justify-center items-center ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold ">Add New List</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="your name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "name is required",
                  },
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="text"
                placeholder="Description"
                className="textarea input-bordered w-full max-w-xs"
                {...register("description", {
                  required: {
                    value: true,
                    message: "description is required",
                  },
                })}
              />
            </div>

            <input
              className="w-full max-w-xs btn text-white"
              type="submit"
              value="Add Item"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewList;
