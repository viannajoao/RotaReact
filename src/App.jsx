import { Route, Routes } from "react-router-dom"
import "./App.css"
import { About } from "./components/About/About"
import { Menu } from "./components/Menu/Menu"
import { Screen } from "./components/PrincipalScreen/Screen"
import { Footer } from "./components/Footer/Footer"
import { DefaultPage } from "./components/DefaultPage/DefaultPage"
import { CardContent } from "./components/CardContent/CardContent"
import { NotFound } from "./components/NotFound/NotFound"


function App() {



  return (
    <>

      <Menu />
      <Routes >
        <Route path="/" element={<DefaultPage />}>
          <Route path='/' element={<Screen />} />
          <Route path='/sobremim' element={<About />} />
          
        </Route>
        <Route path="/posts/:id" element={ <CardContent />} />
        <Route path='*' element={ <NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
