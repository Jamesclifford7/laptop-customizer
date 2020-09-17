import React from 'react'
import Option from './Option'
import Total from './Total'

function Summary(props) {
      return (
        <section className="main__summary">
            <h2>Your cart</h2>
            {
              Object.keys(props.selected).map((feature, idx) => {
                return (
                  <Option
                  key={idx}
                  feature={feature}
                  selected={props.selected} />
                )
              })
            }
            <Total selected={props.selected} />
      </section>  
      );

}

export default Summary


