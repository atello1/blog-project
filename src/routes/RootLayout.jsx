import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"
export default function RootLayout () {
    return (
        <>
          <section className="banner">
            <MainNavigation />
            <div className="container">
              <h1>Hello! It is Ana</h1>
              <p>I would like to share with you some of my favorites travels.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu ipsum sed felis condimentum malesuada. Sed euismod porttitor enim nec hendrerit. Quisque et magna faucibus justo elementum dapibus quis eu purus. </p>
            </div>
          </section>

          <main className="mainContent">
              <Outlet />
          </main>
        </>
    )
}