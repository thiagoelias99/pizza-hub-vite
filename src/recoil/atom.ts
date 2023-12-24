import { NavigationTabProps } from '@/components/BottomNavigation/NavigationTab/NavigationTabProps'
import { DialogContainerProps } from '@/components/Dialogs/DialogContainerProps'
import { floatingActionButtonProps } from '@/components/FloatingActionButton/FloatingActionButtonProps'
import { ToastProps } from '@/components/Toast/ToastProps'
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

export const dialogOptions = atom<DialogContainerProps>({
    key: 'dialogOptions',
    default: {
        open: false,
        child: null
    }
})

export const toastOptions = atom<ToastProps>({
    key: 'toastOptions',
    default: {
        message: '',
        show: false
    }
})