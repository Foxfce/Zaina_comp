import ProductCard from '../ProductCard'

type Props = {}

function Motor({}: Props) {
  return (
   <>
            {
                Array(5).fill(null).map((_,index) => <ProductCard key={index} className='' />)
            }
        </>
  )
}

export default Motor