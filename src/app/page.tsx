'use client'
import FollowBackground from '@/components/FollowBackground'
import ProjectTemplate from '@/components/project-template.component'
import { Card, CardBody, Divider, Spinner, Tab, Tabs, Tooltip } from '@nextui-org/react'
import dayjs from 'dayjs'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import projects_json from '@/data/page_projects.json'
import Head from 'next/head'

interface WakaTimeData {
    name: string
    percent: number
    color: string
    decimal: string
    digital: string
    hours: number
    minutes: number
    text: string
    total_seconds: number
}

export default function Home() {
    const startDate = '2024-05-10' // Start date: May 10, 2024
    const endDate = dayjs().format('YYYY-MM-DD') // End date: Today

    const [wakaTimeData, setWakaTimeData] = useState<WakaTimeData[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            const data = await fetch(
                'https://wakatime.com/share/@ionutdaniel99/d41f271b-fe56-4483-bf0f-e4e2affa47a7.json'
            )
            const posts = await data.json()
            setWakaTimeData(posts.data)
            setIsLoading(false)
        }

        getData()
    }, [])

    // Function to check if a day is a working day (Monday to Friday)
    function isWorkingDay(date: dayjs.Dayjs): boolean {
        const dayOfWeek = date.day()
        return dayOfWeek >= 1 && dayOfWeek <= 5 // 1 = Monday, 5 = Friday
    }

    // Function to calculate working days between two dates
    function calculateWorkingDays(startDate: string, endDate: string): number {
        let currentDate = dayjs(startDate)
        const end = dayjs(endDate)
        let workingDaysCount = 0

        // Loop through each day between the start and end date
        while (currentDate.isBefore(end, 'day')) {
            if (isWorkingDay(currentDate)) {
                workingDaysCount++
            }
            currentDate = currentDate.add(1, 'day')
        }

        return workingDaysCount
    }

    // Function to calculate average daily coding time
    function calculateAverageCodingTime(totalHours: number, startDate: string, endDate: string): number {
        const workingDays = calculateWorkingDays(startDate, endDate)
        return totalHours / workingDays
    }

    function convertToHoursAndMinutes(decimalHours: number): string {
        const hours = Math.floor(decimalHours) // Get the whole hours
        const minutes = Math.round((decimalHours - hours) * 60) // Convert fractional hours to minutes
        return `${hours + 1} hours ${minutes} minutes`
    }

    const totalTime = wakaTimeData.reduce((acc, curr) => acc + curr.hours, 0)
    const averageDailyCodingTime = calculateAverageCodingTime(totalTime, startDate, endDate)
    const averageTimeInHoursAndMinutes = convertToHoursAndMinutes(averageDailyCodingTime)

    return (
        <>
            <FollowBackground />
            <div className="min-h-screen w-full xl:w-5/6 mx-auto p-4 pb-20 sm:p-12 font-[family-name:var(--font-open-sans)] z-10 relative">
                <div className="flex justify-between items-center mb-8">
                    <div className="w-4/6 sm:w-5/6 flex justify-start flex-col">
                        <h1 className="text-xl sm:text-2xl font-bold">Hi, I&apos;m Ionut Daniel Ene</h1>
                        <div className="text-xs sm:text-base my-2">
                            <p>
                                Full-stack developer with&nbsp;
                                <span className="font-bold underline underline-offset-2">TypeScript</span>.&nbsp;I use
                                it daily in both&nbsp;
                                <b className="underline underline-offset-2">Next.js</b>&nbsp;and&nbsp;
                                <b className="underline underline-offset-2">NestJs</b>.
                            </p>
                            <p className="w-fit">
                                For more details, check the <b>Details</b> tab below.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <a href="https://www.linkedin.com/in/ionut-daniel-ene/" target="_blank" rel="noreferrer">
                                <Tooltip content="Linkedin Profile" placement="top" className="capitalize">
                                    <Image src={`linkedin.svg`} width={28} height={28} alt={'Linkedin'} />
                                </Tooltip>
                            </a>
                            <a href="https://github.com/IonutDaniel99" target="_blank" rel="noreferrer">
                                <Tooltip content="Github Profile" placement="top" className="capitalize">
                                    <Image
                                        src={`tech_icons/github.svg`}
                                        width={28}
                                        height={28}
                                        alt={'Github'}
                                        className="invert"
                                    />
                                </Tooltip>
                            </a>
                            <a href="mailto:ionut.daniel644@gmail.com" target="_blank" rel="noreferrer">
                                <Tooltip content="Email - ionut.daniel644@gmail.com" placement="top">
                                    <Image src={`gmail.svg`} width={28} height={28} alt={'Gmail'} />
                                </Tooltip>
                            </a>
                        </div>
                    </div>
                    <div className="w-2/6 sm:w-1/6 flex justify-end">
                        <Image
                            src="/profile_photo.jpg"
                            alt="Profile Photo"
                            width={128}
                            height={128}
                            className="rounded-full overflow-hidden "
                        />
                    </div>
                </div>
                <div className="flex w-full flex-col">
                    <Tabs aria-label="Options">
                        <Tab key="details" title="Details">
                            <Card className="p-2 bg-opacity-70">
                                <CardBody className="text-gray-300">
                                    <div className="text-sm flex flex-col gap-4">
                                        <p className="text-lg font-bold pb-2 underline underline-offset-4">
                                            A bit of my story!
                                        </p>
                                        <div className="space-y-4">
                                            <p>
                                                Hi there! I'm a full-stack developer with about 4 years of experience
                                                working in companies and 2 years freelancing.
                                            </p>
                                            <p>
                                                My career started back in 2018 during my first year of university when I
                                                joined an internship and was introduced to Laravel. A few months later,
                                                I landed my first freelance project, building a course platform using
                                                Vue and Laravel.
                                            </p>
                                            <p>
                                                Fast forward a bit—COVID hit, and I worked at a Vodafone call center
                                                while finishing my university project, which was also built with
                                                Laravel. Around the same time, I started learning React since companies
                                                in my area were mostly hiring for Java or React developers. Also
                                                nowadays, I have a master degree in Computer Science.
                                            </p>
                                            <p>
                                                In April 2021, I joined Endava as a frontend developer and grew from
                                                mid-junior to mid-senior level (the role titles were a bit unusual in
                                                Endava). By the end of 2023, I decided to transition to a full-stack
                                                position to further expand my skills, tho I’m still looking for
                                                challanges.
                                            </p>
                                        </div>
                                        <p>Thanks!</p>
                                    </div>
                                </CardBody>
                                <Divider />
                                <CardBody className="text-gray-300">
                                    <div className="text-sm flex flex-col gap-1">
                                        <div className="flex items-center gap-2 pb-2">
                                            <p className="text-lg font-bold underline underline-offset-4">
                                                My tech stack!
                                            </p>
                                            <p className="text-xs opacity-30">(Overall — read caption)</p>
                                        </div>
                                        <p>
                                            <b>Frontend:</b> ReactTs, NextJs, React-Native, libraries, ...
                                        </p>
                                        <p>
                                            <b>Backend:</b> Node.js, NestJS, PrismaOrm, PostgreSQL, Firebase, ...
                                        </p>
                                        <p>
                                            <b>DevOps:</b> Docker, Docker-Compose, Codespaces (Github), Gravetee, GitHub
                                            CI/CD, AWS, ...
                                        </p>
                                        <p>
                                            <b>Testing:</b> Manual Testing, Jest, Storybook, ...
                                        </p>
                                        <p>
                                            <b>Business:</b> Stripe, LiveChat
                                        </p>
                                        <p>
                                            <b>Design:</b> Figma
                                        </p>
                                        <p>
                                            <b>Other:</b> Jira, Confluence, Notion, ...
                                        </p>
                                    </div>
                                    <p className="text-xs pt-4 opacity-40">
                                        I've worked with many technologies—some extensively, and others just out of
                                        curiosity. Ultimately, a programmer should always be learning. It doesn't matter
                                        how you go about it—just start a project and embrace the challenge, like trying
                                        to implement Socket.IO to communicate with a NASA satellite. You'll fail, but
                                        that's the fun.
                                    </p>
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="projects" title="Projects">
                            <Card className="p-2 bg-opacity-70">
                                <CardBody className="flex flex-col gap-4 flex-wrap">
                                    <div>
                                        <p className="text-lg">Public Projects</p>
                                        <p className="text-xs opacity-60">
                                            I've worked on a few projects aimed at helping users.
                                        </p>
                                    </div>
                                    <div className="flex flex-row gap-4 flex-grow md:flex-grow-0 md:flex-wrap justify-evenly md:justify-center lg:justify-start">
                                        {projects_json.public_projects.map((project: any, index: number) => (
                                            <ProjectTemplate
                                                key={index}
                                                imageUrl={project.imageUrl}
                                                title={project.title}
                                                description={project.description}
                                                redirectLinks={project.redirectLinks}
                                                technologies={project.technologies}
                                            />
                                        ))}
                                    </div>
                                </CardBody>
                                <Divider className="my-4" />
                                <CardBody className="flex flex-col gap-4 flex-wrap">
                                    <div>
                                        <p className="text-lg">Personal Projects</p>
                                        <p className="text-xs opacity-60">
                                            I've also worked on some personal projects to learn new technologies and
                                            experiment with new ideas.
                                        </p>
                                    </div>
                                    <div className="flex flex-row gap-4 flex-grow sm:flex-grow-0 sm:flex-wrap justify-evenly md:justify-center lg:justify-start">
                                        {projects_json.personal_projects.map((project: any, index: number) => (
                                            <ProjectTemplate
                                                key={index}
                                                imageUrl={project.imageUrl}
                                                title={project.title}
                                                description={project.description}
                                                redirectLinks={project.redirectLinks}
                                                technologies={project.technologies}
                                            />
                                        ))}
                                    </div>
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="statistics" title="Stats">
                            <Card className="pt-2 bg-opacity-70">
                                <CardBody className="text-gray-300">
                                    <div className="text-sm flex flex-col gap-1">
                                        <p className="text-lg font-bold pb-2">Real Time Statistics!</p>
                                        <p className="pb-2 text-sm">
                                            On May 10, 2024, I discovered an extension called{' '}
                                            <a
                                                href="https://wakatime.com"
                                                className="underline text-blue-400 underline-offset-2"
                                            >
                                                WakaTime
                                            </a>
                                            , which tracks how much time you spend working on different areas of
                                            development.
                                        </p>
                                        <Divider />
                                        {isLoading ? (
                                            <div className="h-60 flex items-center justify-center">
                                                <Spinner color="warning" label="Loading..." size="lg" />
                                            </div>
                                        ) : (
                                            <div>
                                                <p className="pt-2">
                                                    Here&apos;s a breakdown of the languages and tools I&apos;ve used:
                                                </p>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-2 pt-4">
                                                    {wakaTimeData.map((data) => {
                                                        if (data.total_seconds < 60) return
                                                        return (
                                                            <div key={data.name} className="flex items-center gap-2">
                                                                <div
                                                                    className={`rounded-full w-2 h-2`}
                                                                    style={{ backgroundColor: data.color }}
                                                                />
                                                                <b>{data.name}:</b> {data.text}
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <p className="pt-4 opacity-70 text-xs">
                                                    I&apos;ve spent a total of <b>{totalTime} hours</b>. Average daily
                                                    coding time on working days: <b>{averageTimeInHoursAndMinutes}</b>{' '}
                                                    out of 8 hours. (Update on every Monday).
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </CardBody>
                            </Card>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </>
    )
}
