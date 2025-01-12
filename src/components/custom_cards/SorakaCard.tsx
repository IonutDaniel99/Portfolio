import React from 'react'

function SorakaCard() {
    return (
        <div className="relative w-[450px]">
            <div className="bg-[#D6E1FF] w-[450px] h-full flex items-center justify-center flex-col absolute text-[#1E2328] top-0 left-0 z-0 border-2 ">
                <div className=" font-Mitr bg-gradient-to-br from-white to-[#f3f3f3]  w-80 rounded-xl scale-[.99] border-[#bbbbbb] border-[1px]">
                    <img
                        src="/internal_project/Cards/leagueoflegends/sorakadawn.jpeg"
                        alt=""
                        className="border-b-[1px] border-black rounded-tr-xl rounded-tl-xl"
                    />
                    <div className="px-4 pt-3">
                        <div className="flex justify-between">
                            <div className="">
                                <span className="flex">
                                    <p className="font-medium uppercase font-Mitr">Soraka</p>
                                    <span className="relative px-1 scale-150 text-[#4d4d4d]">•</span>
                                    <p className="font-medium font-Mitr">Dawnbringer</p>
                                </span>
                                <p className="text-sm font-medium font-Mitr opacity-40">The Starchild</p>
                            </div>
                            <img
                                src="/internal_project/Cards/leagueoflegends/leagueicon.png"
                                alt=""
                                className="w-11 h-11"
                            />
                        </div>
                        <div className="py-3 ">
                            <p className="text-[#1E2328] underline text-xs font-medium pb-1">Champion lore:</p>
                            <p className="text-[10px] font-roboto text-[#1e2328]">
                                An age ago, when time itself was young, the inhabitants of the celestial realm regarded
                                the fledgling races of Runeterra with growing concern. These creatures deviated wildly,
                                unpredictably...
                                <span className="underline cursor-pointer text-[#7996E1] ">Read more</span>
                            </p>
                        </div>
                        <div className="flex justify-around pb-4">
                            <div className="flex flex-col items-center font-Mitr">
                                <p className="text-[12px] text-[#787878] h-4 align-middle mb-1">Type:</p>
                                <p className="text-[#1E2328] text-[12px] h-4 align-middle ">Support</p>
                            </div>
                            <div className="flex flex-col items-center font-Mitr">
                                <p className="text-[12px] text-[#787878] h-4 align-middle mb-1">Weapon:</p>
                                <p className="text-[#1E2328] text-[12px] h-4 align-middle">Moon Stuff</p>
                            </div>
                            <div className="flex flex-col items-center font-Mitr">
                                <p className="text-[12px] text-[#787878] h-4 align-middle mb-1">Attack:</p>
                                <p className="text-[#1E2328] text-[12px] h-4 align-middle">Abilities</p>
                            </div>
                        </div>
                        <div className="flex justify-around mb-12">
                            <div className="flex flex-col gap-[6px]">
                                <div className="flex items-center">
                                    <img
                                        src="/internal_project/Cards/leagueoflegends/damage.png"
                                        alt=""
                                        className="w-4 h-4 mr-2.5"
                                    />
                                    <span className="font-Mitr text-12">59-122</span>
                                </div>
                                <div className="flex items-center ">
                                    <img
                                        src="/internal_project/Cards/leagueoflegends/AS.png"
                                        alt=""
                                        className="w-4 h-4 mr-2.5"
                                    />
                                    <span className="font-Mitr text-12">0.65</span>
                                </div>
                                <div className="flex items-center ">
                                    <img
                                        src="/internal_project/Cards/leagueoflegends/range.png"
                                        alt=""
                                        className="w-4 h-4 mr-2.5"
                                    />
                                    <span className="font-Mitr text-12">525</span>
                                </div>
                                <div className="flex items-center ">
                                    <img
                                        src="/internal_project/Cards/leagueoflegends/critdmg.png"
                                        alt=""
                                        className="w-4 h-4 mr-2.5"
                                    />
                                    <span className="font-Mitr text-12">175%</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[6px]">
                                <div className="flex items-center">
                                    <img
                                        src="/internal_project/Cards/leagueoflegends/health.png"
                                        alt=""
                                        className="w-4 h-4 mr-2.5"
                                    />
                                    <span className="font-Mitr text-12">30-52.1</span>
                                </div>
                                <div className="flex items-center ">
                                    <img
                                        src="/internal_project/Cards/leagueoflegends/mana.png"
                                        alt=""
                                        className="w-4 h-4 mr-2.5"
                                    />
                                    <span className="font-Mitr text-12">25-97.4</span>
                                </div>
                                <div className="flex items-center ">
                                    <img
                                        src="/internal_project/Cards/leagueoflegends/armor.png"
                                        alt=""
                                        className="w-4 h-4 mr-2.5"
                                    />
                                    <span className="font-Mitr text-12">250-794</span>
                                </div>
                                <div className="flex items-center ">
                                    <img
                                        src="/internal_project/Cards/leagueoflegends/magicres.png"
                                        alt=""
                                        className="w-4 h-4 mr-2.5"
                                    />
                                    <span className="font-Mitr text-12">670-2404</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[6px]">
                                <div className="flex items-center">
                                    <img
                                        src="/internal_project/Cards/leagueoflegends/hregen.png"
                                        alt=""
                                        className="w-4 h-4 mr-2.5"
                                    />
                                    <span className="font-Mitr text-12">4-15.05</span>
                                </div>
                                <div className="flex items-center ">
                                    <img
                                        src="/internal_project/Cards/leagueoflegends/mregen.png"
                                        alt=""
                                        className="w-4 h-4 mr-2.5"
                                    />
                                    <span className="font-Mitr text-12">7.2-14.85</span>
                                </div>
                                <div className="flex items-center ">
                                    <img
                                        src="/internal_project/Cards/leagueoflegends/speeddark.png"
                                        alt=""
                                        className="w-4 h-4 mr-2.5"
                                    />
                                    <span className="font-Mitr text-12">325</span>
                                </div>
                                <div className="flex items-center ">
                                    <img
                                        src="/internal_project/Cards/leagueoflegends/Cost.png"
                                        alt=""
                                        className="w-4 h-4 mr-2.5"
                                    />
                                    <span className="font-Mitr text-12">1350</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a
                    href="https://www.figma.com/file/twErNtJeSSPDBTtgYSwuCW/My-Figma-Projects?node-id=23%3A10&t=u2HWXKgglTw5yEsc-0"
                    target="_blank"
                    rel="noreferrer"
                    className="relative text-gray-900 underline top-6 opacity-60 hover:text-blue-600"
                >
                    Source
                </a>
            </div>
            <div className="z-10 duration-500 ease-in-out opacity-0 hover:opacity-100">
                <div className="bg-[#1F1F1F] w-[450px] h-full flex items-center justify-center flex-col absolute text-[#F0E6D2] top-0 left-0">
                    <div className="font-Mitr bg-gradient-to-br from-black to-[#2d2d2d]  w-80 rounded-xl scale-[.99]">
                        <img
                            src="/internal_project/Cards/leagueoflegends/sorakanight.jpeg"
                            alt=""
                            className="border-b-[1px] rounded-tr-xl rounded-tl-xl"
                        />
                        <div className="px-4 pt-3">
                            <div className="flex justify-between">
                                <div className="">
                                    <span className="flex">
                                        <p className="font-medium uppercase font-Mitr">Soraka</p>
                                        <span className="relative px-1 scale-150 text-[#272727]">•</span>
                                        <p className="font-medium font-Mitr">Nightbringer</p>
                                    </span>
                                    <p className="text-sm font-medium font-Mitr opacity-40">The Starchild</p>
                                </div>
                                <img
                                    src="/internal_project/Cards/leagueoflegends/leagueicon.png"
                                    alt=""
                                    className="w-11 h-11"
                                />
                            </div>
                            <div className="py-3 ">
                                <p className="text-[#787878] underline text-xs font-medium pb-1">Champion lore:</p>
                                <p className="text-[10px] font-roboto">
                                    An age ago, when time itself was young, the inhabitants of the celestial realm
                                    regarded the fledgling races of Runeterra with growing concern. These creatures
                                    deviated wildly, unpredictably...{' '}
                                    <span className="underline cursor-pointer text-[#7996E1] ">Read more</span>
                                </p>
                            </div>
                            <div className="flex justify-around pb-4">
                                <div className="flex flex-col items-center font-Mitr">
                                    <p className="text-[12px] text-[#787878]  h-4 align-middle mb-1">Type:</p>
                                    <p className="text-[#F0E6D2] text-[12px] h-4 align-middle">Support</p>
                                </div>
                                <div className="flex flex-col items-center font-Mitr">
                                    <p className="text-[12px] text-[#787878] h-4 align-middle mb-1">Weapon:</p>
                                    <p className="text-[#F0E6D2] text-[12px] h-4 align-middle">Moon Stuff</p>
                                </div>
                                <div className="flex flex-col items-center font-Mitr">
                                    <p className="text-[12px] text-[#787878] h-4 align-middle mb-1">Attack:</p>
                                    <p className="text-[#F0E6D2] text-[12px]  h-4 align-middle">Abilities</p>
                                </div>
                            </div>
                            <div className="flex justify-around mb-12">
                                <div className="flex flex-col gap-[6px]">
                                    <div className="flex items-center">
                                        <img
                                            src="/internal_project/Cards/leagueoflegends/damage.png"
                                            alt=""
                                            className="w-4 h-4 mr-2.5"
                                        />
                                        <span className="font-Mitr text-12">59-122</span>
                                    </div>
                                    <div className="flex items-center ">
                                        <img
                                            src="/internal_project/Cards/leagueoflegends/AS.png"
                                            alt=""
                                            className="w-4 h-4 mr-2.5"
                                        />
                                        <span className="font-Mitr text-12">0.65</span>
                                    </div>
                                    <div className="flex items-center ">
                                        <img
                                            src="/internal_project/Cards/leagueoflegends/range.png"
                                            alt=""
                                            className="w-4 h-4 mr-2.5"
                                        />
                                        <span className="font-Mitr text-12">525</span>
                                    </div>
                                    <div className="flex items-center ">
                                        <img
                                            src="/internal_project/Cards/leagueoflegends/critdmg.png"
                                            alt=""
                                            className="w-4 h-4 mr-2.5"
                                        />
                                        <span className="font-Mitr text-12">175%</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[6px]">
                                    <div className="flex items-center">
                                        <img
                                            src="/internal_project/Cards/leagueoflegends/health.png"
                                            alt=""
                                            className="w-4 h-4 mr-2.5"
                                        />
                                        <span className="font-Mitr text-12">30-52.1</span>
                                    </div>
                                    <div className="flex items-center ">
                                        <img
                                            src="/internal_project/Cards/leagueoflegends/mana.png"
                                            alt=""
                                            className="w-4 h-4 mr-2.5"
                                        />
                                        <span className="font-Mitr text-12">25-97.4</span>
                                    </div>
                                    <div className="flex items-center ">
                                        <img
                                            src="/internal_project/Cards/leagueoflegends/armor.png"
                                            alt=""
                                            className="w-4 h-4 mr-2.5"
                                        />
                                        <span className="font-Mitr text-12">250-794</span>
                                    </div>
                                    <div className="flex items-center ">
                                        <img
                                            src="/internal_project/Cards/leagueoflegends/magicres.png"
                                            alt=""
                                            className="w-4 h-4 mr-2.5"
                                        />
                                        <span className="font-Mitr text-12">670-2404</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[6px]">
                                    <div className="flex items-center">
                                        <img
                                            src="/internal_project/Cards/leagueoflegends/hregen.png"
                                            alt=""
                                            className="w-4 h-4 mr-2.5"
                                        />
                                        <span className="font-Mitr text-12">4-15.05</span>
                                    </div>
                                    <div className="flex items-center ">
                                        <img
                                            src="/internal_project/Cards/leagueoflegends/mregen.png"
                                            alt=""
                                            className="w-4 h-4 mr-2.5"
                                        />
                                        <span className="font-Mitr text-12">7.2-14.85</span>
                                    </div>
                                    <div className="flex items-center ">
                                        <img
                                            src="/internal_project/Cards/leagueoflegends/speed.png"
                                            alt=""
                                            className="w-4 h-4 mr-2.5"
                                        />
                                        <span className="font-Mitr text-12">325</span>
                                    </div>
                                    <div className="flex items-center ">
                                        <img
                                            src="/internal_project/Cards/leagueoflegends/Cost.png"
                                            alt=""
                                            className="w-4 h-4 mr-2.5"
                                        />
                                        <span className="font-Mitr text-12">1350</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://www.figma.com/file/twErNtJeSSPDBTtgYSwuCW/My-Figma-Projects?node-id=23%3A10&t=u2HWXKgglTw5yEsc-0"
                        target="_blank"
                        rel="noreferrer"
                        className="relative text-gray-100 underline top-6 opacity-60 hover:text-blue-600"
                    >
                        Source
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SorakaCard

