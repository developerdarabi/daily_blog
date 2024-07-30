import { InputHTMLAttributes } from "react"

export default function TextArea(props: InputHTMLAttributes<any>) {
    const { placeholder, className = '' } = props
    return (
        <textarea
            {...props}
            placeholder={placeholder || "Text..."}
            className={`${className} bg-white border h-[300px] resize-none rounded-md border-gray-400 p-3 focus:outline-none text-md font-medium`}

        />
    )
}
