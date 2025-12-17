import type { ReactNode } from "react";

export default function Alert({children}: {children : ReactNode}) {
    return (
        <p className="text-center mb-8 uppercase font-black text-[1.8rem]">
            {children}
        </p>
    );
}
