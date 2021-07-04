import {useCallback, useEffect, useState} from "react";


export const useScrollTopMenu = () => {

    const [activeLi, setActiveLi] = useState('')


    // check the indentation of each category
    const handleActive = useCallback(() => {
        setTimeout(() => {
            const categoryElements = document.getElementsByClassName('content__title')

            const categoryItems = Object.values(categoryElements)

            console.log(categoryItems)
            categoryItems.forEach(item => {
                const offsetItem = Math.abs(item.getBoundingClientRect().top)
                if (offsetItem <= 180) {
                    const name = item.innerHTML
                    setActiveLi(name)
                }
            })
        }, 500)
    }, [])

    // look for an element by id and scroll to it
    const handleOffset = useCallback((name) => {
        setActiveLi(name)
        const elemsOffset = document.getElementsByClassName('content__title')
        const scrollTop = document.documentElement.scrollTop
      Object.values(elemsOffset).forEach((item) => {
            if (item.innerHTML === name) {
                const topOffsetEl = item.getBoundingClientRect().top + scrollTop
                window.scrollTo({top: topOffsetEl, behavior: "smooth"})
            }
        })

    }, [])

    // take the active category and scroll to the desired position
    useEffect(() => {
        const offsetLi = document.getElementsByClassName('activeLi')
        if (offsetLi && offsetLi.length !== 0) {
            const offset = offsetLi[0].offsetLeft
            const elScroll = document.getElementById("scrollUl")
            if (elScroll) {
                setTimeout(() => {
                    elScroll.scrollTo({left: offset, behavior: "smooth"})
                }, 1000)
            }
        }

    }, [activeLi])

    useEffect(() => {
        document.addEventListener('scroll', handleActive)

        return function () {
            document.removeEventListener('scroll', handleActive)
        }
    }, [])

    return {handleActive, handleOffset, activeLi}
}