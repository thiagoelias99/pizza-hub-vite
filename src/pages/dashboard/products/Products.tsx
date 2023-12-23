import { ShoppingBasket, Ruler } from 'lucide-react'

import CardModel1 from '@/components/Cards/CardModel1/CardModel1'
import Header1 from '@/components/Headers/Header1/Header1'
import { useProducts } from "@/hooks/api/useProducts"
import { useBottomNavigationState } from '@/hooks/useBottomNavigationState'
import { useEffect } from 'react'
import { useFab } from '@/hooks/useFab'
import { useDialog } from '@/hooks/useDialog'

const Products = () => {
  const { products, isLoading } = useProducts()
  const { setFab } = useFab()
  const { open, setContent } = useDialog()
  const { setOptions } = useBottomNavigationState()

  useEffect(() => {
    setOptions([
      {
        label: 'Produtos',
        Icon: ShoppingBasket,
        path: '/produtos',
        selected: true
      },
      {
        label: 'Unidades',
        Icon: Ruler,
        path: '/unidades',
      },
    ])
    setFab({
      visible: true,
      onClick: handleClick
    })
    setContent((
      <div className='bg-white w-full h-72'>
        <h1>Adicionar produto</h1>
      </div>
    ))
  }, [])

  const handleClick = () => open()

  return (
    <div className='flex flex-col justify-start items-center w-full p-4'>
      <Header1 text='Produtos' />
      {isLoading && <p>Loading...</p>}
      {!isLoading && products && (
        <ul className='flex flex-col gap-2 w-full mt-4'>
          {products.map((product) => (
            <CardModel1 key={product.id} description={product.description} info={`${product.value} / ${product.unit.unit}`} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default Products