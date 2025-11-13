import ProductCard from "../ProductCard"

type Props = {}

function EyeletCurtain({ }: Props) {
    return (
        <>
            {
                Array(5).fill(null).map((_, index) => <ProductCard key={index} className="" />)
            }
        </>
    )
}

export default EyeletCurtain