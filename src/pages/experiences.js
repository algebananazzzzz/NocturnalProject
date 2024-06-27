import React, { useState } from "react"
import HomeLayout from "../components/layout/home-layout"
import VideoPopupComponent from "../components/ui/video-popup"
import ExperienceContent from '../content/experience.yml'
import Action from "../components/ui/action"

const ExperiencePage = () => {
  const [popup, setPopup] = useState(null)

  return (
    <HomeLayout>
      <VideoPopupComponent popup={popup} setPopup={setPopup} />
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="pt-5 md:pt-0 grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 flex items-center">
          <div className="lg:col-span-4">
            <h1 className="flex-none font-medium text-gray-800 dark:text-gray-200 text-3xl md:text-4xl lg:text-5xl inline-flex items-center">
              Experiences
            </h1>
            {
              ExperienceContent.description.map((value) => {
                return <p className="flex mt-5 text-justify text-base md:text-lg text-gray-700 dark:text-gray-400">
                  {value}
                </p>
              })
            }
          </div>
          <div className="lg:col-span-3 mt-10 lg:mt-0 hidden lg:block">
            <svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M509.07648 990.10048c-266.4704 0-483.24608-216.78592-483.24608-483.2512S242.60096 23.59808 509.07648 23.59808s483.24608 216.78592 483.24608 483.2512-216.77568 483.2512-483.24608 483.2512z m0-946.93376c-255.67744 0-463.68768 208.00512-463.68768 463.67744s208.01024 463.67744 463.68768 463.67744 463.68768-208.00512 463.68768-463.67744S764.7488 43.16672 509.07648 43.16672z" fill="#6C0000"></path><path d="M506.79296 506.84928m-333.80864 0a333.80864 333.80864 0 1 0 667.61728 0 333.80864 333.80864 0 1 0-667.61728 0Z" fill="#b02eed"></path><path d="M506.79808 850.44736c-189.46048 0-343.59808-154.1376-343.59808-343.59808S317.3376 163.2512 506.79808 163.2512 850.3808 317.3888 850.3808 506.84928s-154.12224 343.59808-343.58272 343.59808z m0-667.6224c-178.67776 0-324.03968 145.3568-324.03968 324.02432s145.36192 324.02432 324.03968 324.02432c178.6624 0 324.02432-145.3568 324.02432-324.02432s-145.36192-324.02432-324.02432-324.02432z" fill="#6C0000"></path><path d="M675.06688 421.55008m-85.71392 0a85.71392 85.71392 0 1 0 171.42784 0 85.71392 85.71392 0 1 0-171.42784 0Z" fill="#7e22ce"></path><path d="M675.10784 515.44064c-8.66304 0-17.32608-1.20832-25.73312-3.60448a93.25568 93.25568 0 0 1-56.30976-44.61568 93.14304 93.14304 0 0 1-8.26368-71.35744c11.4176-40.15616 48.52224-68.1984 90.22976-68.1984 8.66304 0 17.32608 1.21856 25.73312 3.60448a93.25568 93.25568 0 0 1 56.30976 44.61568 93.14304 93.14304 0 0 1 8.26368 71.35744c-11.4176 40.15616-48.52224 68.1984-90.22976 68.1984z m-0.0768-171.47392c-34.46272 0-65.11616 23.17312-74.56256 56.35072a77.1584 77.1584 0 0 0 6.83008 58.97216 77.056 77.056 0 0 0 46.53056 36.85888c6.95808 1.98144 14.12608 2.98496 21.2736 2.98496 34.46272 0 65.11616-23.17312 74.56256-56.35072a77.1584 77.1584 0 0 0-6.83008-58.97216 77.056 77.056 0 0 0-46.53056-36.85888 77.6448 77.6448 0 0 0-21.2736-2.98496z" fill="#6C0000"></path><path d="M352.4352 424.78592m-48.6144 0a48.6144 48.6144 0 1 0 97.2288 0 48.6144 48.6144 0 1 0-97.2288 0Z" fill="#7e22ce"></path><path d="M352.45056 481.56672c-5.23776 0-10.48064-0.73216-15.55968-2.18112a56.35584 56.35584 0 0 1-34.048-26.9824 56.36096 56.36096 0 0 1-5.00224-43.16672c6.89664-24.27904 29.33248-41.23648 54.57408-41.23648 5.23776 0 10.48064 0.73216 15.55968 2.18112 14.58688 4.1472 26.6752 13.73696 34.048 26.9824a56.36096 56.36096 0 0 1 5.00224 43.16672c-6.89152 24.27904-29.33248 41.23648-54.57408 41.23648z m-0.03072-97.25952a40.62208 40.62208 0 0 0-38.90688 29.39904 40.17664 40.17664 0 0 0 3.56864 30.76608 40.192 40.192 0 0 0 24.2688 19.23072c21.11488 6.00576 44.06272-6.9376 50.00192-27.83744a40.17664 40.17664 0 0 0-3.56864-30.76608 40.192 40.192 0 0 0-24.2688-19.23072 40.2944 40.2944 0 0 0-11.09504-1.5616z" fill="#6C0000"></path><path d="M485.62688 521.1904m-29.12768 0a29.12768 29.12768 0 1 0 58.25536 0 29.12768 29.12768 0 1 0-58.25536 0Z" fill="#7e22ce"></path><path d="M485.632 558.48448a37.3248 37.3248 0 0 1-35.88096-47.49824c5.50912-19.2768 26.752-31.104 46.06976-25.65632 19.7632 5.62176 31.27808 26.28608 25.67168 46.06464-4.55168 15.95392-19.29728 27.08992-35.86048 27.08992z m-0.03072-58.27584a21.08928 21.08928 0 0 0-20.16256 15.24736 21.02272 21.02272 0 0 0 14.44352 25.91232c10.9568 3.1232 22.8352-3.60448 25.92768-14.4384a21.02272 21.02272 0 0 0-20.20864-26.72128z" fill="#6C0000"></path><path d="M714.54208 604.69248m-18.23232 0a18.23232 18.23232 0 1 0 36.46464 0 18.23232 18.23232 0 1 0-36.46464 0Z" fill="#7e22ce"></path><path d="M714.55744 631.08096a26.4192 26.4192 0 0 1-25.38496-33.6128c3.85536-13.62944 18.88768-22.05696 32.58368-18.15552a26.24 26.24 0 0 1 15.8464 12.53888 26.14272 26.14272 0 0 1 2.30912 20.04992 26.4704 26.4704 0 0 1-25.35424 19.17952z m-0.03584-36.46976c-4.47488 0-8.45824 3.01056-9.68192 7.31648a10.09664 10.09664 0 0 0 6.94272 12.45184c5.2736 1.5104 10.97216-1.73568 12.45184-6.9376a10.04544 10.04544 0 0 0-0.89088-7.65952 10.01472 10.01472 0 0 0-8.82176-5.1712z" fill="#6C0000"></path><path d="M493.80864 707.1232m-45.19424 0a45.19424 45.19424 0 1 0 90.38848 0 45.19424 45.19424 0 1 0-90.38848 0Z" fill="#7e22ce"></path><path d="M493.83424 760.47872c-4.92032 0-9.84064-0.68608-14.6176-2.048a52.992 52.992 0 0 1-32.01024-25.35424 52.96128 52.96128 0 0 1-4.70016-40.56064c6.48192-22.81984 27.58144-38.75328 51.2768-38.75328 4.92032 0 9.84064 0.68608 14.6176 2.048a52.992 52.992 0 0 1 32.01024 25.35424 52.96128 52.96128 0 0 1 4.70016 40.56064c-6.4768 22.81984-27.56608 38.75328-51.2768 38.75328z m-0.04608-90.40896c-16.45056 0-31.08352 11.0592-35.6096 26.9056a36.80768 36.80768 0 0 0 3.26656 28.16512 36.7872 36.7872 0 0 0 22.23104 17.60256c3.328 0.9472 6.75328 1.42336 10.15808 1.42336 16.45056 0 31.08352-11.0592 35.6096-26.9056a36.80768 36.80768 0 0 0-3.26656-28.16512 36.7872 36.7872 0 0 0-22.23104-17.60256 37.34016 37.34016 0 0 0-10.15808-1.42336z" fill="#6C0000"></path><path d="M606.9504 204.12416c-114.08384-20.77184-235.4688 21.4784-310.82496 119.8592C188.928 463.93344 215.48032 664.28416 355.4304 771.4816a318.6688 318.6688 0 0 0 90.64448 48.55296 317.65504 317.65504 0 0 1-136.66816-60.55936c-139.95008-107.19744-166.49728-307.54304-59.30496-447.49312 85.61152-111.7696 230.62528-151.1168 356.84864-107.85792z" fill="#5b21b6"></path></g></svg>
          </div>
        </div>
        <ol className="mt-12 lg:mt-0 ml-3 lg:max-w-5xl text-justify relative border-l-2 border-solid border-gray-200 dark:border-gray-700">
          {ExperienceContent.experiences.map((value, i, row) => {
            const [[name, content]] = Object.entries(value);

            return <li className={`ml-4 md:ml-6 ${i !== (row.length - 1) && "pb-8 md:pb-12"}`}>
              <div className="inline-flex items-center">
                <span className={`absolute flex items-center text-center justify-center w-5 h-5 md:w-7 md:h-7 rounded-full -left-2.5 md:-left-3.5 ring-8 ring-white dark:ring-gray-900 bg-${content.color}-500 dark:bg-${content.color}-800`}>
                  <svg className="w-3 md:w-4" viewBox="0 0 24 24" fill="#f9fafb">
                    <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" ></path>
                  </svg>
                </span>
                <p className="font-semibold text-xl md:text-2xl text-gray-900 dark:text-gray-200">
                  {name}
                </p>
              </div>
              <p className="mt-2 mb-4 text-sm font-medium text-fuchsia-500 dark:text-fuchsia-500">
                {content.date}
              </p>
              {content.description.map((value) => {
                return <p key={value} className="mt-2 text-base text-gray-700 dark:text-gray-400">
                  {value}
                </p>
              })}
              <div className="mt-6 flex gap-x-2">
                {content.actions.map((value) => {
                  return <Action text={value.text} action={value.video ? () => { setPopup(value.video) } : null} asset={value.asset} link={value.link} color={value.color}></Action>
                })}
              </div>
            </li>
          })}
        </ol>

      </div>
    </HomeLayout>
  )
}

export default ExperiencePage

export const Head = () => <title>Experiences</title>