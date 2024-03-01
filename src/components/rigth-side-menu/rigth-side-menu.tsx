import WidgetButtonForm from '../widget-form/widget-button'
import WidgetTextForm from '../widget-form/widget-text-form'
import './rigth-side-menu.scss'

function RigthSideMenu():JSX.Element{
    return(
        <div className="RigthSideMenu">
            {/* <WidgetTextForm/> */}
            <WidgetButtonForm/>
        </div>
    )
}

export default RigthSideMenu