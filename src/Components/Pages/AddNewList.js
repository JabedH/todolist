import React from "react";

const AddNewList = () => {
  return (
    <div className="flex lg:h-4/5 sm:my-28 justify-center items-center ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold ">Add New List</h2>
          <form>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="your name"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                type="text"
                placeholder="Description"
                className="textarea input-bordered w-full max-w-xs mb-5"
              />
            </div>
            <input
              className="w-full max-w-xs btn text-white"
              type="submit"
              value="Add Task"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewList;
