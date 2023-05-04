import '../style/App.css';
import {Routes , Route} from 'react-router-dom'
import Home from './Home';
import Error from './Error'
import Logements from './logements'
import APropos from './APropos'

function App() {
    return (
        <div className='kasa-bodys'>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/APropos' element={<APropos/>}/>
                <Route exact path='/logement/:id' element={<Logements/>}/>
                <Route  path='*' element={<Error/>}/>
            </Routes>
        </div>
        
    )

}
export default App