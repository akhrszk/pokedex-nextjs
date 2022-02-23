import React from 'react'

export const Grid: React.FC = props => (
  <div className="max-w-3xl flex flex-wrap gap-4 justify-center">
    {props.children}
  </div>
)

export default Grid
