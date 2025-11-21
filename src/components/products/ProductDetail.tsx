import { useIsMobile } from "@/hooks/use-mobile"
import BreadCrumbTab from "../shadcn-ui/BreadCrumbTab";
import { ProductSlide } from "./ProductSlide";

type Props = {}

const previewTab = [
  { label: 'pic1', src: 'https://picsum.photos/600/600' },
  { label: 'pic2', src: 'https://picsum.photos/600/600' },
  { label: 'pic3', src: 'https://picsum.photos/600/600' },
  { label: 'pic4', src: 'https://picsum.photos/600/600' },
  { label: 'pic5', src: 'https://picsum.photos/600/600' },
  { label: 'pic6', src: 'https://picsum.photos/600/600' },
]

function ProductDetail({ }: Props) {
  const isMobile: boolean = useIsMobile();

  return (
    <div className='bg-softperl-accent-light max-w-sm lg:max-w-full w-full flex flex-col p-4'>

      {/* BreadCrump */}
      <div className="mb-8">
        <BreadCrumbTab />
      </div>

      <div className="flex flex-col lg:flex-row justify-between h-full w-full">
        <div className="flex flex-col-reverse lg:flex-row w-full justify-center items-center">
          <div className="flex flex-row lg:flex-col h-full py-4 px-2 gap-4">
            {

              previewTab.map((item, index) => (
                <div className="shadow-sm w-12 h-12">
                  <img key={index} src={item.src} alt={item.label} />
                </div>
              ))
            }
          </div>
          <div className="flex h-auto p-4">
            <img src="https://picsum.photos/600/600" alt="productpic" />
          </div>
        </div>


        <div className="flex flex-col w-full p-4">

          {/* Name */}
          <div className="flex flex-col border-b border-gray-200 mb-2">
            <h2 className="text-sm">Product Type Name</h2>
            <h1 className="text-2xl font-semibold mb-1">PRODUCT NAME</h1>
            <h4 className="text-[12px] text-gray-400 mb-4">Product Code</h4>
          </div>

          {/* Color */}
          <div className="flex flex-col border-b border-gray-200 mb-2">
            <h2 className="text-sm font-semibold mb-2">COLOR VARIANT</h2>
            <div className="flex mb-4">
                  <ProductSlide previewTab={previewTab} />
            </div>
          </div>

          {/* Specification */}
          <div className="flex flex-col border-b border-gray-200 mb-2">
            <h2 className="text-sm font-semibold">SPECIFICATION</h2>
          </div>

        </div>
      </div>

    </div>
  )
}

export default ProductDetail