import { type FC, type HTMLAttributes } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "../ui/card"

type Props = {
    className?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'className'>

const ProductCard: FC<Props> = ({ className, ...props }) => {
    return (
        <Card
            className={className + 'flex flex-wrap bg-softperl-accent-dark overflow-hidden'}
            {...props}>
            <div className='h-50 aspect-square overflow-hidden'>
                <img
                    className=''
                    src="https://picsum.photos/id/237/200/300"
                    alt="picture" />
            </div>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
                {/* <CardAction>Card Action</CardAction> */}
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    )
}

export default ProductCard