import LayerForm from './layer'
import './widget-form.scss'

const NAME = "Widget Button"

function WidgetButtonForm():JSX.Element{
    return(
        <div className="WidgetTextForm WidgetForm ">
            <label className='form-name'>{NAME}</label>
            <div className="widgetInfo">
                <LayerForm/>
                {/* data */}
                <label className='infoName'>Data</label>
                <div className="infoItem">
                    <label className='widgetInfoLabel'>Type</label>
                    <input type="text" className='widgetInfoInput' value="ananas"/>

                    <label className='widgetInfoLabel'>Title</label>
                    <input type="text" className='widgetInfoInput' value="ananas"/>
                
                </div>

            </div>
        </div>
    )
}

export default WidgetButtonForm