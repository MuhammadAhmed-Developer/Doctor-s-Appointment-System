import Navbar from "@/components/navbar/navbar";
// import { getServerSession } from "next-auth";
// import { getServerSession } from "next-auth"
// import { useSession } from "next-auth/react"

export default async function Home() {
  // const {data:session}  = useSession()
  // console.log("session", session);
  // console.log(session);
  // const session = await getServerSession()
  // console.log("session", session);
  return (
    <div>
        <Navbar/>

    {/* {JSON.stringify(session)} */}
    caresoul
      {/* <AllProducts/> */}
   
</div>
  )
}
