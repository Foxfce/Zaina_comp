import { type FC, type HTMLAttributes } from 'react'
import {
    Card,
    CardFooter,
    CardHeader,
    CardTitle
} from "../ui/card"
import { Badge } from '../ui/badge';
import { motion } from 'motion/react';

type Props = {
    className?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'className'>

const cardVariants = {
  initial: {
    y:0,
    scale: 1,
    transition: {
      duration: 0.1,
    },
  },
  hover: {
    y: -5,
    scale: 1.025,
    transition: {
      duration: 0.1,
    },
  },
};

const imageVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.1
  },
};

const ProductCard: FC<Props> = ({ className, ...props }) => {
    return (
        <motion.div
            variants={cardVariants}
            initial={"initial"}
            whileHover={"hover"}
            whileTap={{ y: 2, scale: 1 }}
        >
            <Card
                className={className + 'h-fit bg-white overflow-hidden rounded-sm'}
                {...props}
            >
                <div
                    className='w-min-40 lg:w-min-60 overflow-hidden object-fill object-center'>
                    <motion.img
                        variants={imageVariants}
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
        </motion.div>
    )
}

export default ProductCard