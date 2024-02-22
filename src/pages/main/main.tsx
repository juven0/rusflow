import Flow from "../../components/flow/flow"
import Header from "../../components/header/header"
import LeftSideMenu from "../../components/left-side-menu/leftSideMenu"
import NavBar from "../../components/navbar/navbar"

import './main.scss'

function Main():JSX.Element{
    return(
        <div className="Main">
            <Header/>
            <div className="content">
                <NavBar/>
                <LeftSideMenu/>
                <Flow/>
            </div>
        </div>
    )
}

export default Main