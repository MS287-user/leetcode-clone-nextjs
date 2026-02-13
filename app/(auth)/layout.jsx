import React from "react";

const AuthLayout = ({ children }) => {
    return (
        <>
            <main className="flex flex-col justify-center items-center min-h-screen">
                {children}
            </main>
        </>
    )
};

export default AuthLayout;
