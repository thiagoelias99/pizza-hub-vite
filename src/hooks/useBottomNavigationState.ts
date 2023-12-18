import { bottomNavigationOptions } from '@/recoil/atom'
import { useRecoilState } from 'recoil'

export const useBottomNavigationState = () => {
    const [options, setOptions] = useRecoilState(bottomNavigationOptions)

    return { options, setOptions }
}