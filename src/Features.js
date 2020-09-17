import React from 'react'
import Specs from './Specs'

function Features(props) {
    return (
      <form className="main__form">
          <h2>Customize your laptop</h2>
          {
          Object.keys(props.features).map((feature, idx) => {
            return (
              <Specs updateFeature={props.updateFeature} selected={props.selected} features={props.features} feature={feature} key={idx} />
              )
            })
          }
      </form>
    );
}

export default Features

