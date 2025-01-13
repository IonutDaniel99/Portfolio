import { Divider, Tooltip } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

export type AllowedTechnologies =
    | 'javascript'
    | 'typescript'
    | 'react'
    | 'laravel'
    | 'firebase'
    | 'java'
    | 'android'
    | 'vue'
    | 'mysql'
    | 'php'
    | 'solid'
    | 'node'
    | 'sqlite'
    | 'prisma'
    | 'maps'
    | 'csharp'
    | 'unity'

export type RedirectLink = {
    type: 'googlePlay' | 'github' | 'redirect' | 'youtube'
    url: string
}

interface ProjectTemplateProps {
    imageUrl: string
    title: string
    description: string
    technologies: AllowedTechnologies[]
    redirectLinks: RedirectLink[] // Changed from a single link to an array of objects
}

function ProjectTemplate({ imageUrl, title, description, technologies, redirectLinks }: ProjectTemplateProps) {
    const RedirectButton = ({ link }: { link: RedirectLink }) => {
        return ImageTemplate({ link })
    }

    const ImageTemplate = ({ link }: { link: RedirectLink }) => {
        const shouldInvert = ['github', 'redirect'].includes(link.type)
        return (
            <a href={link.url} target="_blank" rel="noreferrer" key={Math.random()}>
                <Tooltip content={link.type} key={link.type} placement="top" className="capitalize">
                    <Image
                        src={`/tech_icons/${link.type}.svg`}
                        width={22}
                        height={22}
                        alt={link.type}
                        className={shouldInvert ? 'invert' : ''}
                    />
                </Tooltip>
            </a>
        )
    }

    return (
        <div className="border border-gray-600 p-2 rounded-lg w-64">
            <div className="max-w-64 max-h-32 rounded-md overflow-hidden">
                <img src={imageUrl} alt="3d Landscape" className="w-full h-32 object-fit" />
            </div>
            <div className="py-2 flex justify-between w-full">
                <div className="flex flex-col w-fit">
                    <p className="text-sm">{title}</p>
                    <p className="text-xs opacity-60 pt-1">{description}</p>
                </div>
            </div>
            <Divider />
            <div className="flex gap-2 pt-2 items-start justify-evenly px-2 h-16 w-full">
                <div className="flex gap-2 flex-col items-center">
                    <p className="text-xs opacity-80">Used technologies</p>
                    <div className="flex gap-2 w-full justify-center">
                        {technologies.map((tech) => (
                            <Tooltip content={tech} key={tech} placement="top" className="capitalize">
                                <div className="flex gap-1 cursor-pointer">
                                    <Image src={`/tech_icons/${tech}.svg`} width={22} height={22} alt={tech} />
                                </div>
                            </Tooltip>
                        ))}
                    </div>
                </div>
                <Divider orientation="vertical" />
                <div className="flex gap-2 flex-col items-center">
                    <p className="text-xs opacity-80">Links</p>
                    <div className="flex gap-2">{redirectLinks.map((link) => RedirectButton({ link }))}</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectTemplate
