import React from 'react'
import PropTypes from 'prop-types'

// link is creating a reusable button taking in 2 props
// active decides if its disabled or not and the onclick is the function that gets called when you clikc the button
// children is the text inside the button
const Link = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link