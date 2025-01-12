import { Divider } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

type AllowedTechnologies = 'javascript' | 'typescript' | 'react' | 'laravel' | 'firebase' | 'java' | 'android'

type RedirectLink = {
    type: 'googlePlay' | 'github' | 'redirect'
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
        switch (link.type) {
            case 'github':
                return ImageTemplate({ link })
            case 'googlePlay':
                return ImageTemplate({ link })
            case 'redirect':
                return ImageTemplate({ link })
            default:
                return null
        }
    }

    const ImageTemplate = ({ link }: { link: RedirectLink }) => {
        return (
            <a href={link.url} target="_blank" rel="noreferrer" key={Math.random()}>
                <Image src={`/tech_icons/${link.type}.svg`} width={22} height={22} alt={link.type} className="invert" />
            </a>
        )
    }

    return (
        <div className="border border-gray-600 p-2 rounded-lg w-64">
            <div className="max-w-64 max-h-32 rounded-md overflow-hidden">
                <img src={imageUrl} alt="3d Landscape" className="w-64 h-32" />
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
                    <p className="text-xs opacity-80">Used technologies:</p>
                    <div className="flex gap-2 px-2 w-full justify-center">
                        {technologies.map((tech) => (
                            <div key={tech} className="flex gap-1">
                                <Image src={`/tech_icons/${tech}.svg`} width={24} height={24} alt={tech} />
                            </div>
                        ))}
                    </div>
                </div>
                <Divider orientation="vertical" />
                <div className="flex gap-2 flex-col items-center">
                    <p className="text-xs opacity-80">Links:</p>
                    <div className="flex gap-2">{redirectLinks.map((link) => RedirectButton({ link }))}</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectTemplate
