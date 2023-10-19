import { BrowserRouter, Routes, Route} from 'react-router-dom'


import Email from './pages/email'


export default function Index(){

    return(
        <BrowserRouter>
          <Routes>
             <Route path='/' element={<Email/>}/>
          </Routes>
        </BrowserRouter>
    )
}