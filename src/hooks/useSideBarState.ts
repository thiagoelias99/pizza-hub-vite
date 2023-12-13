import { sideBarState } from '@/recoil/atom'
import { useRecoilState } from 'recoil'

export const useSideBarState = () => {
    const [sideBarStateValue, setSideBarStateValue] = useRecoilState(sideBarState)

    const toggleSideBarState = (state? : boolean) => {
        if(state){
            setSideBarStateValue(state)
            return
        }
        setSideBarStateValue(!sideBarState)
    }

    return { sideBarStateValue, toggleSideBarState }
}