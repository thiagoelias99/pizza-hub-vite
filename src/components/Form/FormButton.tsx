interface FormButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'destructive'
  label: string
  action?: () => void
}

const FormButton = ({ variant = 'primary', label, action }: FormButtonProps) => {

  let buttonStyle = 'bg-primary text-primary-foreground'

  switch (variant) {
    case 'secondary':
      buttonStyle = 'bg-secondary text-secondary-foreground border-2 border-secondary-foreground'
      break;
    case 'success':
      buttonStyle = 'bg-green-700 text-white'
      break
    case 'destructive':
      buttonStyle = 'bg-red-700 text-white'
      break
    default:
      break;
  }


  return (
    <button 
    className={`h-12 rounded-md font-bold ${buttonStyle}`}
    // onClick={action}
    type="submit"
    >{label}</button>
  )
}

export default FormButton