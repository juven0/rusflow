import LayerForm from './layer'
import './widget-form.scss'

const NAME = "Widget Text"

function WidgetTextForm():JSX.Element{
    return(
        <div className="WidgetTextForm WidgetForm ">
            <label className='form-name'>{NAME}</label>
            <div className="widgetInfo">
                <LayerForm/>
                {/* data */}
                <label className='infoName'>Data</label>
                <div className="infoItem">
                    <label className='widgetInfoLabel'>Text value</label>
                    <input type="text" className='widgetInfoInput' value="ananas"/>
                
                    
                </div>

            </div>
        </div>
    )
}

export default WidgetTextForm