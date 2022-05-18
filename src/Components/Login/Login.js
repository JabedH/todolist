import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex lg:h-4/5 sm:my-28 justify-center items-center ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold ">Login</h2>
          <form>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="your email"
                className="input input-bordered w-full max-w-xs"
                // {...register("email", {
                //   required: {
                //     value: true,
                //     message: "Email is required",
                //   },
                //   pattern: {
                //     value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                //     message: "provide a valid email",
                //   },
                // })}
              />
              {/* <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label> */}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="your password"
                className="input input-bordered w-full max-w-xs"
                // {...register("password", {
                //   required: {
                //     value: true,
                //     message: "password is required",
                //   },
                //   minLength: {
                //     value: 6,
                //     message: "Must be 6 characters or longer",
                //   },
                // })}
              />
              <label className="label">
                {/* {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )} */}

                {/* {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )} */}
              </label>
            </div>

            <input
              className="w-full max-w-xs btn text-white"
              type="submit"
              value="Login"
            />
          </form>
          <div className="flex ">
            <p>New to Doctors Portal?</p>
            <Link className="text-primary" to="/signup">
              Create new account
            </Link>
          </div>
          <div className="">
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">OR</div>
              <button className="btn btn-outline">CONTINUE WITH GOOGLE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
