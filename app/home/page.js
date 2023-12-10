import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/navbar";
import { getServerSession } from "next-auth";
// import { getServerSession } from "next-auth";
// import { getServerSession } from "next-auth"
// import { useSession } from "next-auth/react"

export default async function Home() {
  const session = await getServerSession()
  console.log("sessionsession0", session);
  // const {data:session}  = useSession()
  // console.log("session", session);
  // console.log(session);
  // const session = await getServerSession()
  // console.log("session", session);
  return (
    <div>
        <Navbar/>
     <Header heading="SereneCare Medical Center" description="SereneCare Medical Center is a state-of-the-art healthcare facility "/>

   
</div>
  )
}
