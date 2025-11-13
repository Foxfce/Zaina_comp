import ProductCard from '../ProductCard'

type Props = {}

function Skylight({}: Props) {
  return (
       <>
            {
                Array(5).fill(null).map((_,index) => <ProductCard key={index} />)
            }
        </>
  )
}

export default Skylight