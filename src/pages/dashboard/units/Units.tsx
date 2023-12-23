import { ShoppingBasket, Ruler } from 'lucide-react'

import CardModel1 from '@/components/Cards/CardModel1/CardModel1'
import Header1 from '@/components/Headers/Header1/Header1'
import { useUnits } from '@/hooks/api/useUnits'
import { useBottomNavigationState } from '@/hooks/useBottomNavigationState'
import { useEffect } from 'react'
import { useFab } from '@/hooks/useFab'
import { useDialog } from '@/hooks/useDialog'

const Units = () => {
    const { units, isLoading } = useUnits()
    const { setFab } = useFab()
    const { open, setContent } = useDialog()
    const { setOptions } = useBottomNavigationState()

    useEffect(() => {
        setOptions([
            {
                label: 'Produtos',
                Icon: ShoppingBasket,
                path: '/produtos',
            },
            {
                label: 'Unidades',
                Icon: Ruler,
                path: '/unidades',
                selected: true
            },
        ])
        setFab({
            visible: true,
            onClick: handleClick
        })
        setContent((
            <div className='bg-white w-full h-72'>
                <h1>Adicionar unidade</h1>
            </div>
        ))
    }, [])


    const handleClick = () => open()

    return (
        <div className='flex flex-col justify-start items-center w-full p-4'>
            <Header1 text='Unidades' />
            {isLoading && <p>Loading...</p>}
            {!isLoading && units && (
                <ul className='flex flex-col gap-2 w-full mt-4'>
                    {units.map((unit) => (
                        <CardModel1 key={unit.id} description={unit.unit} info={`${unit.unitFamily.description} / ${unit.isDefault}`} />
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Units