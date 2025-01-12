import React from 'react'

function QrcodeCard() {
    return (
        <div className="relative bg-[#D5E1EF] w-[450px] h-full flex items-center justify-center flex-col">
            <div className="p-4 scale-[1.19] bg-white w-72 rounded-3xl">
                <img src="/internal_project/Cards/qrcode/qr.png" alt="" className="rounded-xl" />
                <p className="text-center text-[#1f2f52] font-bold text-lg px-2 py-4">
                    Improve your front-end skills by building projects
                </p>
                <p className="px-2 text-[#898d95] text-sm pb-4 text-center">
                    Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                </p>
            </div>
            <a
                href="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H"
                target="_blank"
                rel="noreferrer"
                className="relative text-gray-600 underline top-16 opacity-60 hover:text-blue-600"
            >
                Source
            </a>
        </div>
    )
}

export default QrcodeCard

