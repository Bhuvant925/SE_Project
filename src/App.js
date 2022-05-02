import Current from './components/current.js';
import Finished from './components/finished.js';

function App(){
    return (
    <div>
        <nav className="navbar">
            <img className="logo" src="" alt="logo"/>
            <a href="#" className="navbar-rtl navbar-page-link">Home</a>
            <a href="#" className="navbar-rtl navbar-page-link">Courses</a>
            <a href="#" className="navbar-rtl navbar-page-link">Skills</a>
            <a href="#" className="navbar-rtl navbar-page-link">Contact</a>
        </nav>
        <div>
            <body>
                <h1>Courses Enrolled</h1>
                <Current  text='Course1'/>
                <Current  text='Course2'/>
                <Current  text='Course3'/>
                <Finished text='Course4'/>
                <Finished text='Course5'/>
            </body>
        </div>
    </div>
    );
}
export default App;