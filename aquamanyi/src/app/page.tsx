import SigninForm from "./signin/page"
import SignupForm from "./signup/page"
import RootLayout from "./layout"
import Sidebar from "./components/Sidebar"
export default function Home() {
  return (
    <main>
      
    <RootLayout showSidebar={false}>
      <div>

        <Sidebar/>
     </div>
    </RootLayout>
    
    </main>
  )
}

