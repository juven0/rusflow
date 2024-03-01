import Flow from "../../components/flow/flow"
import Header from "../../components/header/header"
import LeftSideMenu from "../../components/left-side-menu/leftSideMenu"
import NavBar from "../../components/navbar/navbar"
import RigthSideMenu from "../../components/rigth-side-menu/rigth-side-menu"

import './main.scss'

function Main():JSX.Element{
    return(
        <div className="Main">
            <Header/>
            <div className="content">
                <NavBar/>
                <LeftSideMenu/>
                <Flow/>
                <RigthSideMenu/>
            </div>
        </div>
    )
}

export default Main