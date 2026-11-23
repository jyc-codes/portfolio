import React from "react"

type ResumeBlockProps = {
    children: React.ReactNode
}

export default function ResumeBlock({ children }: ResumeBlockProps) {
    return (
        <section className="resume-block">
            {children}
        </section>
    )
}
