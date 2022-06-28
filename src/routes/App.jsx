import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from '../pages/Inicio/Inicio'
import Contacto from '../pages/Contacto/Contacto'
import NotFound from '../pages/NotFound/NotFound'

function App() {

  return (
  
    <BrowserRouter basename='https://github.com/aguirremx/hidropozo-vite'>
      <Routes>
        <Route exact path="/" element={<Inicio/>}/>
        <Route exact path="/contacto" element={<Contacto/>}/>
        <Route exact path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
