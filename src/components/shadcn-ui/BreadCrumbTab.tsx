import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "../ui/breadcrumb";
import { useLocation, useSearchParams } from "react-router-dom";

type PathChildren = {
    label: string,
    href: string
}

type PathBreadcrumbs = PathChildren[];

function BreadCrumbTab() {
    const fullPathName: string = useLocation().pathname;
    const segmentsPath = fullPathName.split('/').filter(segment => segment);

    const [searchParams] = useSearchParams();
    const productId : string | null = searchParams.get('id')

    const breadcrumbsPath: PathBreadcrumbs = [
        { label: 'Home', href: '/' },
    ];

    let cummulativePath = '';

    segmentsPath.forEach((segment,index) => {
        // const href = '/' + segmentsPath.slice(0, index + 1).join('/');
        cummulativePath = '/' + segmentsPath.slice(0, index + 1).join('/');
        const label = segment.charAt(0).toUpperCase() + segment.slice(1);

        breadcrumbsPath.push({ label, href: cummulativePath });
    });

    if(productId)breadcrumbsPath.push({label: productId, href: fullPathName+location.search});

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {
                    breadcrumbsPath.map((item, index) => {
                        const isLast = breadcrumbsPath.length === index + 1;

                        return (
                            <>
                                <BreadcrumbItem>{
                                    !isLast ?
                                    <BreadcrumbLink key={index} href={item.href}>{item.label}</BreadcrumbLink>:
                                    <BreadcrumbPage key={index} className="text-primary">{item.label}</BreadcrumbPage>
                                }
                                </BreadcrumbItem>
                                {!isLast && <BreadcrumbSeparator />}
                            </>
                        )
                    })
                }
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default BreadCrumbTab