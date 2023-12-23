import { fabOptions } from "@/recoil/atom"
import { useRecoilState } from "recoil"

export const useFab = () => {
    const [fab, setFab] = useRecoilState(fabOptions)

    return {fab, setFab}
}