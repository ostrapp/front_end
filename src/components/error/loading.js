import React from 'react'
import BounceLoader from 'react-spinners/BounceLoader'

class Loading extends React.Component {
  render () {
    if (this.props.loading) {
      return (
        <div>
          <BounceLoader
            sizeUnit={'px'}
            size={10}
            loading={this.props.loading} />
        </div>
      )
    } else return null
  }
}

export default Loading
