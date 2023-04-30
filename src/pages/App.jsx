import '../style/App.css';
import {Routes , Route} from 'react-router-dom'
import Home from './Home';
import Page404 from './404'
import Logements from './logements'
import APropos from './APropos'

function App() {
    return (
        <div>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/APropos' element={<APropos/>}/>
                <Route path='/logement/:id' element={<Logements/>}/>
                <Route  path='*' element={<Page404/>}/>
            </Routes>
        </div>
        
    )

}
export default App