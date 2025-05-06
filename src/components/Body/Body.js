import { MainContainer } from "../MainContainer/MainContainer"
import { Sidebar } from "../Sidebar/Sidebar"

export const Body = () => {
  return ( <div className="flex">
    <Sidebar/>
    <MainContainer/>
  </div>)
}