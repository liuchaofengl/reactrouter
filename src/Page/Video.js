import React from 'react';
import {Link,Route} from "react-router-dom"
import Reactpage from "./video/reactpage"
import Vuetpage from './video/Vuetpage'
import Flutterpage from './video/Flutterpage'
function Video(){
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/video/reactpage">React课程</Link></li>
                    <li><Link to="/video/vuetpage">Vue课程</Link></li>
                    <li><Link to="/video/Flutterpage">Flutter课程</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>视频教程</h3></div>
                <Route path="/video/reactpage" component={Reactpage}></Route>
                <Route path="/video/vuetpage" component={Vuetpage}></Route>
                <Route path="/video/Flutterpage" component={Flutterpage}></Route>
            </div>

        </div>
    )
}
export default Video;