import { NavigationTabProps } from '@/components/BottomNavigation/NavigationTab/NavigationTabProps'
import { floatingActionButtonProps } from '@/components/FloatingActionButton/FloatingActionButtonProps'
import { atom } from "recoil"

export const sideBarState = atom<boolean>({
    key: "sideBarState",
    default: false,
})

export const bottomNavigationOptions = atom<NavigationTabProps[]>({
    key: "bottomNavigationOptions",
    default: [],
})

export const fabOptions = atom<floatingActionButtonProps>({
    key: 'fabOptions',
    default: {
        visible: false
    }
})