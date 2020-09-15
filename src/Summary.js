import React from 'react'
import Total from './Total'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

function Summary(props) {
    const featureHash = props.feature + '-' + props.idx;
      const selectedOption = props.selected[props.feature];

      return (
        <div>
          <div className="summary__option" key={featureHash}>
            <div className="summary__option__label">{props.feature} </div>
            <div className="summary__option__value">{selectedOption.name}</div>
            <div className="summary__option__cost">
              {USCurrencyFormat.format(selectedOption.cost)}
            </div>
          </div>
        </div>
      );

}

export default Summary
