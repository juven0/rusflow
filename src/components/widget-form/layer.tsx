function LayerForm():JSX.Element{
    return(
        <>
         <label className='infoName'>Name</label>
                <div className="infoItem">
                    <label className='widgetInfoLabel'>Name</label>
                    <input type="text" className='widgetInfoInput' value="ananas"/>
                
                    <label className='widgetInfoLabel'>Id</label>
                    <input type="text" className='widgetInfoInput' value="aq39232" disabled/>
                </div>

                <label className='infoName'>Position</label>
                <div className="infoItem">
                    <label className='widgetInfoLabel'>Position X</label>
                    <input type="number" className='widgetInfoInput' value="100"/>
                
                    <label className='widgetInfoLabel'>position Y</label>
                    <input type="number" className='widgetInfoInput' value="45"/>

                    <label className='widgetInfoLabel'>Z-index</label>
                    <input type="number" className='widgetInfoInput' value="2"/>
                </div></>
    )
}

export default LayerForm