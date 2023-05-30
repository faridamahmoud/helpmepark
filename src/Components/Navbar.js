import "./Navbar.css";
import { Navelements } from "./Navelements";
import {Component} from "react";


class navbar extends Component{
    render(){
        return(
            <nav className="Navbarelements">
                <h1 className="navbar-title"> HelpMePark</h1>
                <ul className="navmenu">
                    {Navelements.map((element,index) =>{
                        return(
                            <li key={index}>
                         <a className= {element.cName} href= "/">
                         <i className= {element.icon}></i>{element.title}
                        </a>
                    </li>
                        )
                    })}
                    
                </ul>
            </nav>
        )
    }
}

export default navbar;