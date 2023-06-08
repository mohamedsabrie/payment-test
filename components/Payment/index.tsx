import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function Payment() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    setLoading(true);
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
        toast("Something wrong happened", {
          type: "error",
        });
        console.log(err);
      })
      .finally(() => setLoading(false));
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
      <button
        disabled={loading}
        className="bg-green-500 px-5 py-2 rounded-md text-white mt-3"
      >
        {loading ? "Sending ...." : "Run"} 
      </button>
    </form>
  );
}

export default Payment;
