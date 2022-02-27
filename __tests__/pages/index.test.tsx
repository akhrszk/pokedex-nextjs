import { render, screen } from '@testing-library/react'
import Home from '../../src/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<>{Home.getLayout(<Home />)}</>)

    const heading = screen.getByRole('heading', {
      name: /ポケモン図鑑/i,
    })

    expect(heading).toBeInTheDocument()
  })
})