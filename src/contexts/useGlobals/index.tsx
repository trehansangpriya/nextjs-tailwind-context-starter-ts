import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

interface GlobalContextType { }
const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType)

interface GlobalProviderProps {
    children: React.ReactNode
}
export const GlobalProvider = ({ children }: GlobalProviderProps) => {

    const [state, setState] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // Do something
    }, [])

    // useMemo
    const value = useMemo(() => {
        return {
            state,
            setState,
            loading,
            setLoading
        }
    }, [state, loading])

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobals = () => useContext(GlobalContext)
export default useGlobals