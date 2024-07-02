import { Outlet } from "react-router-dom";
import { Banner } from "../Banner/Banner";


export function DefaultPage() {
  return (
    <main>

      <Banner />
      <Outlet />
    </main>
  )
}