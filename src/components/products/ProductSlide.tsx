import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { projectsData } from '../../assets/assets'

export function ProductSlide() {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,

            }}
            className="w-full"
        >
            <CarouselContent>
                {projectsData.map((project, index) => (
                    <CarouselItem key={index} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/4">
                        <div className="p-1">
                            <Card className="rounded-md border-softperl-accent-light shadow-md">
                                <CardContent className="flex relative w-full h-auto sm:aspect-auto items-center justify-center rounded-md overflow-hidden">
                                    <img src={project.image} alt="" className="aspect-auto object-fill" />

                                    <div className='absolute left-0 right-0 bottom-2 flex justify-center'>
                                        <div className='inline-block bg-softperl-primary w-3/4 px-4 py-2 shadow-md rounded-md'>
                                            <h2 className='text-xl font-semibold text-gray-800'>
                                                {project.title}
                                            </h2>
                                            <p className='text-gray-500 text-sm'>
                                                {project.product} <span className='px-1'>|</span> {project.location}
                                            </p>

                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="rounded-full" />
            <CarouselNext className="rounded-full" />
        </Carousel>
    )
}
