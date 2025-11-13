import { type FC, type HTMLAttributes } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "../ui/card"
import { Badge } from '../ui/badge';

type Props = {
    className?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'className'>

const ProductCard: FC<Props> = ({ className, ...props }) => {
    return (
        <Card
            className={className + 'h-fit bg-softperl-accent-light overflow-hidden rounded-sm'}
            {...props}
        >
            <div className='w-40 lg:w-60 overflow-hidden object-fill object-center'>
                <img
                    src="https://picsum.photos/1200/1200"
                    alt="picture" />
            </div>
            <CardHeader className='flex flex-start px-2 pb-0'>
                <CardTitle className='flex flex-col justify-between'>
                    <p>Product Name</p>
                    <span className='text-[12px] font-medium text-nowrap text-gray-400'>Product code</span>
                </CardTitle>
                {/* <CardDescription className='p-2'>
                    <span>Material : </span>
                </CardDescription> */}
            </CardHeader>
            {/* <CardContent className='p-2'>
                <p>Card Content</p>
            </CardContent> */}
            <CardFooter className='flex justify-end px-2 pb-2'>
                <Badge variant="destructive" className='bg-accent-dark'>Motor</Badge>
            </CardFooter>
        </Card>
    )
}

export default ProductCard