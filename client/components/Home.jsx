import React from 'react'
import {connect} from 'react-redux'
import {requestItems} from '../actions/stock'

import StockItem from './StockItem'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount () {
    // is currently hard-coded, will need to use token
    this.props.loadItems(this.props.locationId)
  }

  render () {
    return (
      <div>
        <div style={{ width: '50%', margin: 'auto' }}>
          <h2 style={{ textAlign: 'center' }}>Stock List of {this.props.location}</h2>
          {this.props.items.map((item, id) => {
            return <div key={id}>
              <StockItem item={item} />
            </div>
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.stock.items,
    latestQty: state.stock.latestQty
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadItems: (locationId) => {
      return dispatch(requestItems(locationId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
