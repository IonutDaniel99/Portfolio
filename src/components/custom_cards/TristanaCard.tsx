import React from 'react'

function TristanaCard() {
    return (
        <div className="bg-[#1F1F1F] w-[450px] h-full flex items-center justify-center flex-col relative text-[#F0E6D2]">
            <div className="bg-gradient-to-br from-black to-[#2d2d2d]  w-80 rounded-xl scale-[.99]">
                <img
                    src="/internal_project/Cards/leagueoflegends/tristana.jpg"
                    alt=""
                    className="border-b-[1px] rounded-tr-xl rounded-tl-xl"
                />
                <div className="px-4 pt-3">
                    <div className="flex justify-between">
                        <div className="">
                            <span className="flex">
                                <p className="font-medium uppercase font-Mitr">Tristana</p>
                                <span className="relative px-1 scale-150 bottom-[2px] text-[#272727]">•</span>
                                <p className="font-medium font-Mitr">Dragon Trainer</p>
                            </span>
                            <p className="text-sm font-medium font-Mitr opacity-40">The Yordle Gunner</p>
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
                            Like most yordles, Tristana was always fascinated by the world beyond Bandle City. She
                            traveled far and wide, full of wonder and enthusiasm for the varied places, people, and
                            creatures she encountered...{' '}
                            <span className="underline cursor-pointer text-[#7996E1] ">Read more</span>
                        </p>
                    </div>
                    <div className="flex justify-around pb-4">
                        <div className="flex flex-col items-center font-Mitr">
                            <p className="text-[12px] text-[#787878]  h-4 align-middle mb-1">Type:</p>
                            <p className="text-[#F0E6D2] text-[12px] h-4 align-middle">Marksman</p>
                        </div>
                        <div className="flex flex-col items-center font-Mitr">
                            <p className="text-[12px] text-[#787878] h-4 align-middle mb-1">Weapon:</p>
                            <p className="text-[#F0E6D2] text-[12px] h-4 align-middle">Cannonball</p>
                        </div>
                        <div className="flex flex-col items-center font-Mitr">
                            <p className="text-[12px] text-[#787878] h-4 align-middle mb-1">Attack:</p>
                            <p className="text-[#F0E6D2] text-[12px]  h-4 align-middle">Physical</p>
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
                                    src="/internal_project/Cards/leagueoflegends/range.png"
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
                className="relative text-gray-300 underline top-6 opacity-60 hover:text-blue-600"
            >
                Source
            </a>
        </div>
    )
}

export default TristanaCard

