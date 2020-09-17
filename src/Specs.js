import React from 'react'
import Item from './Item'

function Specs(props) {
    const featureHash = props.feature + '-' + props.idx;
    return (
        <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
            <h3>{props.feature}</h3>
        </legend>
        {
            props.features[props.feature].map((item, idx) => {
                return (
                    <Item 
                        key={idx}
                        feature={props.feature}
                        item={item}
                        selected={props.selected}
                        updateFeature={props.updateFeature} />
                )
            })
        }
    </fieldset>
    )
}

export default Specs
