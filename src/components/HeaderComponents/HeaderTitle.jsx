import React from 'react'
import icons from "../../ulities/icons/icons";
const HeaderTitle = () => {
const { BsInstagram } = icons;
return (
    <a
        target="https://www.instagram.com/cafeharu_harucraft"
        href="https://www.instagram.com/cafeharu_harucraft"
        className="text-[16px] uppercase font-baskervville flex gap-2 items-center gradient-text hover:bg-gradient-to-r from-start via-mid2 to-mid4 "
    >
        <BsInstagram className="text-mid4" />
        Ceramic and Art Home
    </a>
)
}

export default HeaderTitle