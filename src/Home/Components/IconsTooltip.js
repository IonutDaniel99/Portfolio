import React from 'react'
import { Tooltip } from 'react-tooltip'

function IconsTooltip({ iconName, iconPath, isDark, className }) {
    return (
        <span
            data-tooltip-id={`icon-${iconName}`}
            className={`w-6 h-6 text-sm text-right text-gray-400 underline cursor-pointer font-Mitr reactTrigger underline-offset-2 ${className}`}>
            <img src={iconPath} alt='' className={`${isDark ? "invert" : "invert-0"} w-6 h-6 object-contain`} />
            <Tooltip id={`icon-${iconName}`} html={iconName} place="bottom" className='font-semibold' />
        </span>
    )
}

export default IconsTooltip