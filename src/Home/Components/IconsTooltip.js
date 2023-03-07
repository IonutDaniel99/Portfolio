import React from 'react'
import { Tooltip } from 'react-tooltip'

function IconsTooltip({ iconName, iconPath, isDark }) {
    return (
        <span
            data-tooltip-id={`icon-${iconName}`}
            className='text-sm text-right text-gray-400 underline cursor-pointer font-Mitr reactTrigger underline-offset-2 w-6 h-6'>
            <img src={iconPath} alt='' className={`${isDark ? "invert" : "invert-0"} w-6 h-6 object-contain`} />
            <Tooltip id={`icon-${iconName}`} html={iconName} place="bottom" className='font-semibold' />
        </span>
    )
}

export default IconsTooltip