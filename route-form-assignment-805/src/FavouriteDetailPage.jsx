import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function FavouriteDetailPage() {
    const { productId } = useParams(); // Get the productId from the URL
    const [searchParams] = useSearchParams(); // Get query parameters from the URL
    return (
        <>
            <div>
                <p>Your favourite post is {searchParams.get("q")}.</p>
                <p>Post ID is {productId}.</p>
                <p>Size is {searchParams.get("size")}</p>
            </div>
        </>
    );
}

export default FavouriteDetailPage;