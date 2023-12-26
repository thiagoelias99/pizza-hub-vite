import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'



import FormButton from "@/components/Form/FormButton"
import TextInput from "@/components/Form/TextInput"
import Header2 from "@/components/Headers/Header1/Header2"

const ProductForm = () => {

    const formValidationSchema = z.object({
        firstName: z.string().min(2, { message: 'Nome muito curto' }),
        lastName: z.string().min(2, { message: 'Sobrenome muito curto' }),
        email: z.string().email({ message: 'Email inválido' })
    })
    type FormInputs = z.infer<typeof formValidationSchema>

    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>(
        {
            //Validation resolver
            resolver: zodResolver(formValidationSchema)
        }
    )

    const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data)

    return (
        <form className="w-full mt-auto" onSubmit={handleSubmit(onSubmit)}>
            <Header2 text="Cadastro de produto" />
            <div className="flex flex-col gap-2 mt-4">
                <TextInput  {...register("firstName", { required: true })} placeholder="firstname" error={errors.firstName?.message} />
                <TextInput  {...register("lastName", { required: true })} placeholder="lastname" error={errors.lastName?.message} />
                <TextInput  {...register("email", { required: true })} placeholder="email" error={errors.email?.message} />
                <FormButton variant="success" label="Salvar" action={() => console.log('salvar')} />
                <FormButton variant="secondary" label="Cancelar" action={() => console.log('cancelar')} />
            </div>
        </form>
    )
}

export default ProductForm