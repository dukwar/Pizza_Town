import React, {useCallback, useEffect, useState} from "react";


const useFixed = () => {

    const [fixed, setFixed] = useState(false)

    const handleScroll = useCallback(() => {
        const offset = document.documentElement.scrollTop
        if (offset >= 79) {
            setFixed(true)
        } else {
            setFixed(false)
        }
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return function () {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return {fixed}


}

export default useFixed