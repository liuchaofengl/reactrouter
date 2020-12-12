import React from 'react';
import {Route,Link} from "react-router-dom"
import Reading from "./workplace/Reading"
import Makelove from "./workplace/Makelove"
import Running from "./workplace/Running"
function Work(){
    return (
        <div>
       
            <h3>职场技能</h3>
            <div className="top">
                <ul>
                    <li><Link to="/work/reading">阅读</Link></li>
                    <li><Link to="/work/makelove">做爱</Link></li>
                    <li><Link to="/work/running">跑步</Link></li>
                </ul>
            </div>
            <div className="footer">
                <Route path="/work/reading" component={Reading}></Route>
                <Route path="/work/makelove" component={Makelove}></Route>
                <Route path="/work/running" component={Running}></Route>
            </div>
        </div>
    )
}
export default Work;