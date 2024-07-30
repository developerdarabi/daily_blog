import { InputHTMLAttributes } from "react"

export default function Input(props: InputHTMLAttributes<any>) {
    const { placeholder, className = '', ...rest } = props
    return (
        <input
            {...rest}
            placeholder={placeholder || "Text..."}
            className={`${className} bg-white border rounded-md border-gray-400 p-3 focus:outline-none text-md font-medium`}
        />
    )
}
