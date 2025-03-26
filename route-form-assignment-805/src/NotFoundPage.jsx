import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <>
            <div>
                Why did you come here?
            </div>
            <Link className="underline"
                to="/"
            >
                Go Back to Home
            </Link>
        </>
    )
}

export default NotFoundPage;