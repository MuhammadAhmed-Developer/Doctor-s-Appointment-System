"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setisLoading(true);
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setisLoading(false);
        return toast.error("Invalid Credentials");
      }
      router.push("/");
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 md:p-10   rounded-lg border-t-4 flex flex-col md:flex-row justify-center border-purple-700">
        <div className="md:mr-10 md:mt-5">
          <Image
            height={700}
            width={400}
            src="/accets/images/doctors.jpg"
            alt="Welcome"
            className="hidden md:block"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-xl font-bold my-4">Login</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              required
              className="focus:outline-none py-1 px-3 rounded-md border border-gray-500"
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
            />
            <input
              required
              className="focus:outline-none py-1 px-3 rounded-md border border-gray-500"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <button className=" bg-purple-600 rounded-lg text-white font-bold cursor-pointer px-6 py-2">
              {isLoading ? "Login..." : "Login"}
            </button>
            <Link className="text-sm mt-3 text-right" href={"/register"}>
              Dont have an account? <span className="underline">Register</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
