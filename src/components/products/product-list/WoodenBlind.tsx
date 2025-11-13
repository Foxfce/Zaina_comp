import ProductCard from '../ProductCard'

type Props = {}

function WoodenBlind({ }: Props) {
    return (
        <>
            {
                Array(5).fill(null).map((_,index) => <ProductCard key={index} />)
            }
        </>
    )
}

export default WoodenBlind