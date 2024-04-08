import React from "react";
import { IoInformationCircleSharp } from "react-icons/io5";
import FedEx from "../assets/Svg/FedEx.svg";
import DHL from "../assets/Svg/DHL.svg";
import Navbar2 from "../Components/Navbar2";
import { useStateContext } from "../Context/StateContext";
import CheckOutItem from "../CheckOutItem";
import { GrLinkNext } from "react-icons/gr";
import { useForm } from "react-hook-form";

const CheckOut = () => {
  const { cartItems, totalQuantity } = useStateContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <div className="">
      <Navbar2 />
      <div className="flex flex-col md:flex-col xl:flex-row justify-center items-start h-full   md:gap-11 xl:gap-0  ">
        <div className="flex flex-col justify-center items-center xl:w-[100rem] md:w-full w-[35rem] p-3 ">
          <div className="flex flex-col justify-center items-center xl:w-full md:w-full w-[30rem] ">
            <span className="w-full md:w-[35rem]">
              <h1 className="font-bold text-[1.5rem]">Summary Order</h1>
              <p className="font-light text-slate-500">
                Check your item and select your shipping for better <br />{" "}
                experience order item.
              </p>
            </span>
          </div>

          <div className="flex flex-col justify-center items-center  w-full xl:w-full p-3">
            <span className="md:w-[35rem] w-[30rem]">
              <p className="text-start">
                <span className="font-bold ">Total Quantity: </span>
                <span className="Font-light">{totalQuantity}</span>
              </p>
            </span>
            <div className="flex flex-col  border-2  md:w-[35rem] h-[27rem]  px-[2rem] py-[1rem] w-[30rem]   rounded-lg gap-y-7 overflow-y-auto ">
              {cartItems.map((product) => (
                <CheckOutItem
                  product={product}
                  key={product._id}
                  productImage={product.image}
                  productName={product.title}
                  productPrice={product.price}
                />
              ))}
            </div>
          </div>

          <div className="pb-[1rem] flex flex-col justify-center items-center  w-full gap-4 p-5">
            <div className=" flex flex-col justify-center items-start ">
              <div className="space-y-2">
                <div className="flex justify-start items-center gap-2">
                  <h2 className="font-bold">Available Shipping Method</h2>{" "}
                  <IoInformationCircleSharp fill="gray" />
                </div>
                <div className="flex border-2 justify-between rounded-lg px-[1.5rem] py-[0.5rem] md:w-[35rem] w-[30rem]">
                  <span className="flex justify-center items-center gap-4">
                    <img src={FedEx} alt="" className="md:h-[5rem] h-[3rem]" />
                    <span>
                      <h3 className="font-bold">Fedex Delivery</h3>
                      <p className="font-light text-slate-500">
                        Delivery: 2-3 days work
                      </p>
                    </span>
                  </span>
                  <span className="flex justify-center items-center gap-3">
                    <p className="font-bold">Free</p>
                    <input type="checkbox" className="rounded-full" />
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-2 ">
              <div>
                <h2 className="font-light text-slate-600">
                  Available International Shipping:
                </h2>
              </div>
              <div className="flex border-2 justify-between rounded-lg px-[1.5rem] py-[0.5rem] md:w-[35rem] w-[30rem]">
                <span className="flex justify-start items-center gap-4">
                  <img src={DHL} alt="" className="md:h-[5rem] h-[3rem]" />
                  <span>
                    <h3 className="font-bold">DHL Delivery</h3>
                    <p className="font-light text-slate-500">
                      Delivery: 1-3 days work
                    </p>
                  </span>
                </span>
                <span className="flex justify-center items-center gap-3">
                  <p className="font-bold">Free</p>
                  <input type="checkbox" className="rounded-full" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center  items-center xl:w-[100rem] md:w-full w-[35rem]  bg-[#F9FAFB] p-3">
          <div className="flex justify-center  items-center md:w-full ">
            <span className="w-[30rem]  md:w-[35rem]  ">
              <h1 className="font-bold text-[1.5rem]">Information</h1>
              <p className="font-light">
                Complete your purchase item by providing your <br /> payment
                details order.
              </p>
            </span>
          </div>
          <div className="flex justify-center items-center flex-col md:w-full gap-0 ">
            <form
              action=""
              className="flex justify-center items-center flex-col md:w-full  gap-7  "
              onSubmit={handleSubmit(async (data) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                console.log(data);
              })}
            >
              <span className="flex flex-col justify-center items-center md:w-full w-[30rem]  gap-5  p-5">
                <span className="flex justify-between w-[30rem]   md:w-[35rem] gap-[2rem]">
                  <span>
                    <h1 className="font-bold">First Name</h1>
                    <input
                      type="text"
                      placeholder="Albert"
                      {...register("firstName", {
                        required: "First Name is required ",
                      })}
                      className=" bg-transparent   rounded-lg p-[0.7rem] border-2 border-gray-300"
                    />
                    {errors.firstName && (
                      <div className="text-red-500 text-[12px]">
                        {errors.firstName.message}
                      </div>
                    )}
                  </span>
                  <span>
                    <h1 className="font-bold">Last Name</h1>
                    <input
                      type="text"
                      placeholder="Fletcher"
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                      className=" bg-transparent rounded-lg p-[0.7rem] border-2 border-gray-300"
                    />
                    {errors.lastName && (
                      <div className="text-red-500 text-[12px]">
                        {errors.lastName.message}
                      </div>
                    )}
                  </span>
                </span>{" "}
                <span className="">
                  <h1 className="font-bold">Email Address</h1>
                  <input
                    type="text"
                    placeholder="example@gmail.com"
                    {...register("email", {
                      required: "Email is required",
                      validate: (value) => {
                        if (!value.includes("@")) {
                          return "Please enter a valid email address that includes @";
                        }
                        return true;
                      },
                    })}
                    className=" bg-transparent md:w-[35rem] w-[30rem] rounded-lg p-[0.7rem] border-2 border-gray-300"
                  />
                  {errors.email && (
                    <div className="text-red-500 text-[12px]">
                      {errors.email.message}
                    </div>
                  )}
                </span>
                <span>
                  <h1 className="font-bold">Telephone</h1>
                  <input
                    type="number"
                    placeholder="+233"
                    {...register("telephone", {
                      required: "Telephone is required",
                      minLength: {
                        value: 10,
                        message: "Telephone must be 10 digits",
                      },
                    })}
                    className=" bg-transparent md:w-[35rem] w-[30rem]  rounded-lg p-[0.7rem] border-2 border-gray-300"
                  />
                  {errors.telephone && (
                    <div className="text-red-500 text-[12px]">
                      {errors.telephone.message}
                    </div>
                  )}
                </span>
              </span>
              <span className="lex justify-between w-[30rem]  md:w-[35rem] gap-[2rem]">
                <h1 className="font-bold text-[1.2rem]">Billing Address</h1>
                <span className="flex flex-col gap-y-4">
                  <span>
                    <h1 className="font-bold">Country</h1>
                    <input
                      type="text"
                      className=" w-full bg-transparent rounded-lg p-[0.7rem] border-2 border-gray-300"
                      placeholder=""
                      {...register("country", {
                        required: "Country is required",
                      })}
                    />
                    {errors.country && (
                      <div className="text-red-500 text-[12px]">
                        {errors.country.message}
                      </div>
                    )}
                  </span>
                  <span className="flex justify-between">
                    <span>
                      <h1 className="font-bold">City</h1>
                      <input
                        type="text"
                        className="bg-transparent rounded-lg  w-[14rem] p-[0.7rem] border-2 border-gray-300"
                        placeholder=""
                        {...register("city", { required: "City is required" })}
                      />
                      {errors.city && (
                        <div className="text-red-500 text-[12px]">
                          {errors.city.message}
                        </div>
                      )}
                    </span>
                    <span>
                      <h1 className="font-bold">Zip Code</h1>
                      <input
                        type="text"
                        className="bg-transparent rounded-lg w-[14rem] p-[0.7rem] border-2 border-gray-300"
                        placeholder=""
                        {...register("zipCode", {
                          required: "Zip Code is required",
                          minLength: {
                            value: 4,
                            message: "Zip Code must be 4 digits",
                          },
                        })}
                      />
                      {errors.zipCode && (
                        <div className="text-red-500 text-[12px]">
                          {errors.zipCode.message}
                        </div>
                      )}
                    </span>
                  </span>
                  <span>
                    <h1 className="font-bold">Street/Region</h1>
                    <input
                      type="text"
                      className="w-full bg-transparent rounded-lg p-[0.7rem] border-2 border-gray-300"
                      placeholder=""
                      {...register("street", {
                        required: "Street is required",
                      })}
                    />
                    {errors.street && (
                      <div className="text-red-500 text-[12px]">
                        {errors.street.message}
                      </div>
                    )}
                  </span>
                </span>
              </span>{" "}
              <button
                disabled={isSubmitting}
                type="submit"
                className=" bg-black text-white md:w-[35rem] w-[30rem] rounded-lg flex justify-center items-center"
              >
                <p className="p-5 font-bold ">
                  {isSubmitting ? "Loading..." : "Next"}
                </p>
                <GrLinkNext />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
