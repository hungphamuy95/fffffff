import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Note from './components/Note';

const Root=()=>{
    return (
        <div className='container'>
            <Router>
                <Route path='/' component={Note}></Route>
            </Router> 
        </div>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
