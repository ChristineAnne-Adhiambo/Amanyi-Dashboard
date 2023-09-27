
import SigninForm from "./signin/page"
import SignupForm from "./signup/page"
import RootLayout from "./layout"
import Sidebar from "./components/Sidebar"
import Notification from "./notification/page"
import Temperature from "./temperature/page"
import Ph from "./pH/page"
import HomePage from "./HomePage"
export default function Home() {
  return (
    <main>
      <div>
    <RootLayout showSidebar={false}>  
     {/* <SignupForm/> */}
     {/* <SigninForm/> */}
    </RootLayout>
     <HomePage/>
    {/* <Temperature/> */}
    {/* <Ph/> */}
    {/* <Notification/>  */}
    </div>
    </main>
  )
}




