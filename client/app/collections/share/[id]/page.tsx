import { Suspense } from "react";
import SharedCollectionData from "@/components/collections/share/[id]/SharedCollectionData";

const SharedCollectionPage = () => {
    return (
        <div className="pt-20 pb-10 px-4 min-h-screen box-border md:px-4 lg:px-6 2xl:container">
            <Suspense fallback={<></>}>
                <SharedCollectionData />
            </Suspense>
        </div>
    );
};

export default SharedCollectionPage;
