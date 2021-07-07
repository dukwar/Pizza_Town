import {useCallback, useEffect, useState} from "react";



export const useScrollTopMenu = () => {

    const [activeLi, setActiveLi] = useState('')

    // check the indentation of each category
    const handleActive = useCallback(() => {
            const categoryElements = document.getElementsByClassName('content__title')
            const categoryItems = Object.values(categoryElements)
            const offsetNull = categoryItems[0].getBoundingClientRect().top
            if (offsetNull >= 100) {
                setActiveLi('')
            }

            categoryItems.forEach(item => {
                const offsetItem = Math.abs(item.getBoundingClientRect().top)
                const lastChildOffset = item.nextSibling.lastChild
                const offsetChild = Math.abs(lastChildOffset?.getBoundingClientRect().top)

                if (offsetItem <= 250  || offsetChild <= 250) {
                    const name = item.innerHTML
                    setActiveLi(name)
                    handleOffsetLeft()
                }
            })
    }, [])


    // look for an element by id and scroll to it
    const handleOffset = useCallback((name) => {
        setActiveLi(name)
        const elemsOffset = document.getElementsByClassName('content__title')
        const scrollTop = document.documentElement.scrollTop
        Object.values(elemsOffset).forEach((item) => {
            if (item.innerHTML === name) {
                const topOffsetEl = item.getBoundingClientRect().top + scrollTop - 80
                window.scrollTo({top: topOffsetEl, behavior: "smooth"})
            }
        })

    }, [])

    // take the active category and scroll to the desired position
    const handleOffsetLeft = useCallback(() => {
        const offsetLi = document.getElementsByClassName('activeLi')
        if (offsetLi[0]) offsetLi[0].scrollIntoView({inline: "start", behavior: "smooth"})

    }, [])

    // useEffect(() => {
    //     setTimeout(() => {
    //         handleOffsetLeft()
    //     }, 1000)
    // }, [activeLi])

    useEffect(() => {
        document.addEventListener('scroll', handleActive)

        return function () {
            document.removeEventListener('scroll', handleActive)
        }
    }, [])

    return {handleOffset, activeLi}
}