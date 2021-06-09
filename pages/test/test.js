import React from 'react'
import PropTypes from 'prop-types'

export default function Test ({ id }) {
  return (
    <div>
      { id }
    </div>
  )
}

Test.getInitialProps = async (ctx) => {
  const { id } = ctx.query
  return { id }
}

Test.propTypes = {
  id: PropTypes.any
}
