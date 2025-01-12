'use client'
import { Card, CardBody, CardFooter, CardHeader, Divider, Spinner, Tab, Tabs } from '@nextui-org/react'
import dayjs from 'dayjs'
import Image from 'next/image'
import { useEffect, useState } from 'react'

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
        <div className="min-h-screen w-full xl:w-5/6 mx-auto p-8 pb-20 sm:p-12 font-[family-name:var(--font-geist-sans)]">
            <div className="flex justify-between items-center mb-8">
                <div className="w-4/6 sm:w-5/6 flex justify-start flex-col">
                    <h1 className="text-xl sm:text-3xl font-bold">Hi, I&apos;m Ionut Daniel Ene</h1>
                    <div className="text-sm sm:text-lg my-2 gap-[1px] flex flex-col">
                        <p className="flex">
                            I&apos;m a full-stack developer with&nbsp;
                            <Image src={'/typescript.svg'} width={16} height={16} alt="typescript-svg" />
                            &nbsp;
                            <a
                                href="https://www.typescriptlang.org"
                                className="flex font-bold underline underline-offset-2"
                            >
                                TypeScript
                            </a>
                        </p>
                        <p className="flex">
                            I use it daily in both&nbsp;
                            <Image src={'/nextjs.svg'} width={16} height={16} alt="typescript-svg" className="invert" />
                            &nbsp;
                            <a href="https://nextjs.org" className="font-bold underline underline-offset-2">
                                Next.js
                            </a>
                            &nbsp;and&nbsp;
                            <Image src={'/nestjs.svg'} width={16} height={16} alt="typescript-svg" />
                            &nbsp;
                            <a href="https://nestjs.com" className="font-bold underline underline-offset-2">
                                NestJS
                            </a>
                            &nbsp;.
                        </p>
                        <p>
                            For more details, check the <b>Details</b> tab below.
                        </p>
                    </div>
                </div>
                <div className="w-2/6 sm:w-1/6 flex justify-end">
                    <Image
                        src="/profile_photo.jpg"
                        alt="Profile Photo"
                        width={108}
                        height={108}
                        className="rounded-full overflow-hidden "
                    />
                </div>
            </div>
            <div className="flex w-full flex-col">
                <Tabs aria-label="Options">
                    <Tab key="details" title="Details">
                        <Card>
                            <CardHeader>
                                <div className="text-sm lg:text-base flex flex-col gap-1">
                                    <p className="text-xl font-bold pb-4">A bit of my story!</p>
                                    <p>
                                        Hi there! I’m a full-stack developer with about 4 years of experience working in
                                        companies and 2 years freelancing.
                                    </p>
                                    <p>
                                        My career started back in 2018 during my first year of university when I joined
                                        an internship and was introduced to Laravel. A few months later, I landed my
                                        first freelance project, building a course platform using Vue and Laravel.
                                    </p>
                                    <p>
                                        Fast forward a bit—COVID hit, and I worked at a Vodafone call center while
                                        finishing my university project, which was also built with Laravel. Around the
                                        same time, I started learning React since companies in my area were mostly
                                        hiring for Java or React developers.
                                    </p>
                                    <p>
                                        In April 2021, I joined Endava as a frontend developer and grew from mid-junior
                                        to mid-senior level (the role titles were a bit unusual). By the end of 2023, I
                                        decided to transition to a full-stack position to further expand my skills.
                                    </p>
                                    Thanks!
                                </div>
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                <div className="text-sm lg:text-lg flex flex-col gap-1">
                                    <p className="text-xl font-bold pb-4">My tech stack (Overall)!</p>
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
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="projects" title="Projects">
                        <Card>
                            <CardBody>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </CardBody>
                        </Card>
                    </Tab>
                    <Tab key="statistics" title="Stats">
                        <Card>
                            <CardFooter>
                                <div className="text-sm lg:text-lg flex flex-col gap-1">
                                    <p className="text-xl font-bold pb-4">Real Time Statistics!</p>
                                    <p className="pb-4">
                                        On May 10, 2024, I discovered an extension called WakaTime, which tracks how
                                        much time you spend working on different areas of development.
                                    </p>
                                    <Divider />
                                    {isLoading ? (
                                        <div className="h-60 flex items-center justify-center">
                                            <Spinner color="warning" label="Loading..." size="lg" />
                                        </div>
                                    ) : (
                                        <div>
                                            <p className="pt-4">
                                                I&apos;ve spent a total of <b>{totalTime} hours</b>. Average daily
                                                coding time on working days: <b>{averageTimeInHoursAndMinutes}</b> out
                                                of 8 hours.
                                            </p>
                                            <p>Here&apos;s a breakdown of the languages and tools I&apos;ve used:</p>
                                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 pt-4">
                                                {wakaTimeData.map((data) => {
                                                    if (data.total_seconds < 120) return
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
                                        </div>
                                    )}
                                </div>
                            </CardFooter>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

