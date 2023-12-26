import React from "react"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
        error?: string
     }

const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({ type, placeholder, error, ...props }, ref) => {
        return (
            <div>
                <label
                    className="w-full text-base text-start text-primary font-bold"
                >
                    {placeholder}
                </label>
                <input
                    type={type}
                    className={`w-full text-base border-2 rounded p-2 border-primary bg-primary-foreground text-black`}
                    ref={ref}
                    {...props}
                    placeholder= ''
                />
                {error && <p className="text-red-700 text-sm font-bold w-full text-start">{error}</p>}
            </div>
        )
    }
)
TextInput.displayName = "Input"

export default TextInput









// export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//     label?: string
//     error?: string
// }

// const TextInput = (props: TextInputProps) => {
//     return (
//         <div>
//             <label
//                 className="w-full text-base text-start text-primary font-bold"
//             >
//                 {props.label}
//             </label>
//             <input
//                 type="text"
//                 {...props}
//                 className="w-full text-base border-2 rounded p-2 border-primary bg-primary-foreground text-black"
//             />
//             {props.error && <p className="text-red-700 text-sm font-bold w-full text-start">{props.error}</p>}
//         </div>
//     )
// }

// export default TextInput