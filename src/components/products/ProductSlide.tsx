import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react";

export function ProductSlide({ previewTab }: { previewTab: any[] }) {

    const [api, setApi] = useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = useState<boolean>(false)
    const [canScrollNext, setCanScrollNext] = useState<boolean>(false)

    useEffect(() => {
        if (!api) {
            return;
        }

        const onSelect = (api: CarouselApi) => {
            setCanScrollPrev(api!.canScrollPrev());
            setCanScrollNext(api!.canScrollNext());
        }

        api.on("select", onSelect)
        onSelect(api) // initial Check

        return () => {
            api.off("select", onSelect);
        }
    }, [api])

    return (
        <Carousel
            opts={{
                align: "start",
                loop: false,
                dragFree: true,
            }}
            setApi={setApi}
            className="w-full"
        >
            <CarouselContent>
                {previewTab.map((item: any, index: number) => (
                    <CarouselItem key={index} className="basis-1/4 md:basis-1/5 lg:basis-1/6">
                        <Card className=" border-softperl-accent-light shadow-md p-0">
                            <CardContent className="flex relative w-full h-full items-center justify-center overflow-hidden">
                                    <img key={index} src={item.src} alt={item.label} />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {canScrollPrev && <CarouselPrevious className="rounded-full bg-transparent -left-8" />}
            {canScrollNext && <CarouselNext className="rounded-full bg-transparent -right-8" />}
        </Carousel>
    )
}
