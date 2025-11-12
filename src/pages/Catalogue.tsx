import { Outlet, useParams, useSearchParams } from "react-router-dom"


type Props = {}

function Catalogue({}: Props) {
  const productParam = useParams();

  return (
    <>
    <div className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden">
      <div>
        Product Catalogue
      </div>
      <div>
        Catalogue Tab
      </div>
      <Outlet />
    </div>
    </>
  )
}

export default Catalogue