"use client";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

const Form = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isUserWaitListed, setIsUserWaitListed] = useState(false);

  const handleSubmit = (e) => {
    if (email === "") {
      alert("Please enter an email address");
      return;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    setLoading(true);
    e.preventDefault();
    fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .finally(() => {
        setLoading(false);
        setIsUserWaitListed(true);
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  function validateEmail(email) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 flex justify-center gap-2 sm:flex-row flex-col"
    >
      {!isUserWaitListed ? (
        <>
          <input
            onChange={handleChange}
            placeholder="Join the wait list"
            className="placeholder:text-gray-300 placeholder:font-inherit w-full p-2 focus:outline-zinc-400 rounded-md"
          />
          <button
            className="p-3 bg-slate-900 text-white font-semibold rounded-md ps-4 pe-4 min-w-20"
            type="submit"
          >
            {loading ? <PulseLoader size={4} color="#fff" /> : "Join"}
          </button>
        </>
      ) : (
        <div>Thanks for joining the wait list! We'll be in touch soon.</div>
      )}
    </form>
  );
};

export default Form;
