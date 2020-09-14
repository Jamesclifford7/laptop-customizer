import React from 'react'
import slugify from 'slugify';
import Item from './Item'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

function Features(props) {
  const featureHash = props.feature + '-' + props.idx;
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{props.feature}</h3>
        </legend>
        {
          props.features[props.feature].map(item => {
            return (
              <Item 
              feature={props.feature}
              item={item}
              selected={props.selected}
              updateFeature={props.updateFeature} />
            )
          })
        }
      </fieldset>
    );
}

export default Features