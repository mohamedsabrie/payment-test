import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
function Payment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    axios
      .get("http://10.80.120.240:810/PmtNotificationAGW.svc?wsdl", {
        headers: {
          "Content-Type": "text/xml;charset=UTF-8",
          SOAPAction:
            "http://tempuri.org/BasicHttpsBinding_IPmtNotificationAGW",
          "Accept-Encoding": "gzip, deflate, br",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-y-3 bg-white shadow p-10 border md:w-[600px]"
    >
      <h1 className="text-2xl font-semibold">Payment Notification API</h1>
      <div className="flex flex-col gap-y-1">
        <label>Bill number</label>
        <input
          placeholder="Enter bill number"
          className="outline-none border px-5 py-2 w-full"
          {...register("bill_number", {
            required: true,
          })}
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <label>ِAmount</label>
        <input
          placeholder="Enter amount"
          className="outline-none border px-5 py-2 w-full"
          {...register("amount", {
            required: true,
          })}
        />
      </div>
      <button className="bg-green-500 px-5 py-2 rounded-md text-white mt-3">
        Run
      </button>
    </form>
  );
}

export default Payment;
