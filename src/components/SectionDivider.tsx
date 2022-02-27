import React from 'react'

const SectionDivider: React.FC = ({ children }) => (
  <div className="flex gap-4 items-center">
    <hr className="block grow" />
    <h3>{children}</h3>
    <hr className="block grow" />
  </div>
)

export default SectionDivider
