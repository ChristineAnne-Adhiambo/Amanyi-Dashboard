import SigninForm from "./signin/page"
import SignupForm from "./signup/page"
import RootLayout from "./layout"
import HomePage from "./homePage/page"
import Ph from "./pH/page"
import Temperature from "./temperature/page"
import DataVisualization from "./dataVisualization/page"


export default function Home() {
  return (
    <main>
    <RootLayout showSidebar={false}>
     <SignupForm/>
    </RootLayout>
    </main>
  )
}

