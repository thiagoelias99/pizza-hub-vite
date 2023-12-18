import { NavigationTabProps } from '@/components/BottomNavigation/NavigationTab/NavigationTabProps'
import { atom } from "recoil"

export const sideBarState = atom<boolean>({
    key: "sideBarState",
    default: false,
})

export const bottomNavigationOptions = atom<NavigationTabProps[]>({
    key: "bottomNavigationOptions",
    default: [],
})