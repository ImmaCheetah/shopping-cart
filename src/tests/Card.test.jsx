import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

const title = 'Shirt'
const price = 12.95
const imgUrl = 'imageurl.com'

function Card({title, price, imgUrl}) {
    return (
        <div>
            <img src={imgUrl}/>
            <p>{title}</p>
            <p>{price}</p>
        </div>
    )
}


it('shows correct product', () => {
    render(<Card title={title} price={price} imgUrl={imgUrl}/>)
    screen.debug()
    
    const shirtText = screen.getByText(/shirt/i)
    const priceText = screen.getByText(/12.95/i)
    const image = screen.getByRole('img')

    expect(shirtText).toBeInTheDocument()
    expect(priceText).toBeInTheDocument()
    expect(image).toHaveAttribute('src', imgUrl)

})