import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <p>This is footer</p>
    </CFooter>
  )
}

export default React.memo(TheFooter)
