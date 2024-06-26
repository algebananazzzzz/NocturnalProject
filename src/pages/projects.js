import React, { useState } from "react"
import HomeLayout from "../components/layout/home-layout"
import VideoPopupComponent from "../components/ui/video-popup"
import ProjectContent from '../content/project.yml'
import ProjectCard from "../components/ui/project-card"

const ProjectPage = () => {
  const [popup, setPopup] = useState(null)

  return (
    <HomeLayout>
      <VideoPopupComponent popup={popup} setPopup={setPopup} />

      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="pt-10 md:pt-0 grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 flex items-center">
          <div className="lg:col-span-4">
            <h1 className="flex-none font-medium text-gray-800 dark:text-gray-200 text-3xl md:text-4xl lg:text-5xl inline-flex items-center">
              Projects
            </h1>
            {
              ProjectContent.description.map((value) => {
                return <p className="flex mt-5 text-justify text-base md:text-lg text-gray-700 dark:text-gray-400">
                  {value}
                </p>
              })
            }
          </div>
          <div className="lg:col-span-3 mt-10 lg:mt-0 hidden lg:block">
            <svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M562.99008 521.44128m-391.64416 0a391.64416 391.64416 0 1 0 783.28832 0 391.64416 391.64416 0 1 0-783.28832 0Z" fill="#22d3ee"></path><path d="M562.99008 921.18016c-220.42112 0-399.72864-179.32288-399.72864-399.73888S342.56896 121.7024 562.99008 121.7024s399.72864 179.32288 399.72864 399.73888-179.30752 399.73888-399.72864 399.73888z m0-783.2832c-211.49184 0-383.55456 172.0576-383.55456 383.54944s172.06272 383.54944 383.55456 383.54944 383.55456-172.0576 383.55456-383.54944-172.06784-383.54944-383.55456-383.54944z" fill="#6C0000"></path><path d="M834.46784 725.12512m-155.83744 0a155.83744 155.83744 0 1 0 311.67488 0 155.83744 155.83744 0 1 0-311.67488 0Z" fill="#eff6ff"></path><path d="M834.46784 889.05728c-90.3936 0-163.92192-73.53856-163.92192-163.92704s73.52832-163.93728 163.92192-163.93728 163.92192 73.54368 163.92192 163.93728-73.53344 163.92704-163.92192 163.92704z m0-311.67488c-81.4592 0-147.74784 66.2784-147.74784 147.74784s66.28352 147.7376 147.74784 147.7376 147.74784-66.27328 147.74784-147.7376-66.28864-147.74784-147.74784-147.74784z" fill="#6C0000"></path><path d="M881.8176 590.83776c46.65856 23.9104 66.41152 79.81568 60.19584 135.50592-13.56288 121.53344-157.36832 134.64576-171.79136 129.80736a143.65184 143.65184 0 0 0 65.70496 15.84128c79.70816 0 144.32256-64.6144 144.32256-144.32256 0.00512-63.66208-41.23136-117.6576-98.432-136.832z" fill="#bfdbfe"></path><path d="M656.9472 314.68544m-69.07392 0a69.07392 69.07392 0 1 0 138.14784 0 69.07392 69.07392 0 1 0-138.14784 0Z" fill="#99f6e4"></path><path d="M656.9472 390.5024c-41.79968 0-75.81184-34.01216-75.81184-75.81696s34.01216-75.81696 75.81184-75.81696c41.80992 0 75.82208 34.01216 75.82208 75.81696S698.76224 390.5024 656.9472 390.5024z m0-138.14272c-34.36544 0-62.32064 27.96032-62.32064 62.32576s27.9552 62.32576 62.32064 62.32576c34.36544 0 62.336-27.96032 62.336-62.32576s-27.96544-62.32576-62.336-62.32576z" fill="#6B0204"></path><path d="M397.89568 376.73984m-45.47072 0a45.47072 45.47072 0 1 0 90.94144 0 45.47072 45.47072 0 1 0-90.94144 0Z" fill="#99f6e4"></path><path d="M397.89056 428.9536c-28.79488 0-52.21888-23.41888-52.21888-52.21888s23.41888-52.21888 52.21888-52.21888 52.21888 23.41888 52.21888 52.21888S426.69056 428.9536 397.89056 428.9536z m0-90.94144c-21.35552 0-38.72768 17.37728-38.72768 38.72768s17.37728 38.72768 38.72768 38.72768 38.72768-17.37728 38.72768-38.72768-17.37216-38.72768-38.72768-38.72768z" fill="#6B0204"></path><path d="M382.0544 681.81504m-73.71264 0a73.71264 73.71264 0 1 0 147.42528 0 73.71264 73.71264 0 1 0-147.42528 0Z" fill="#99f6e4"></path><path d="M382.05952 762.2656c-44.3648 0-80.4608-36.096-80.4608-80.45568s36.096-80.45568 80.4608-80.45568c44.35456 0 80.44544 36.096 80.44544 80.45568s-36.09088 80.45568-80.44544 80.45568z m0-147.41504c-36.92544 0-66.9696 30.03904-66.9696 66.96448 0 36.92544 30.04928 66.96448 66.9696 66.96448s66.95936-30.03904 66.95936-66.96448c-0.00512-36.92544-30.03904-66.96448-66.95936-66.96448z" fill="#6B0204"></path><path d="M118.8864 242.83648m-99.75808 0a99.75808 99.75808 0 1 0 199.51616 0 99.75808 99.75808 0 1 0-199.51616 0Z" fill="#eff6ff"></path><path d="M118.89152 350.68928c-59.47392 0-107.84768-48.384-107.84768-107.8528s48.36864-107.8528 107.84768-107.8528 107.84768 48.384 107.84768 107.8528-48.37376 107.8528-107.84768 107.8528z m0-199.51616c-50.54464 0-91.66848 41.11872-91.66848 91.66336s41.12384 91.66336 91.66848 91.66336 91.66848-41.11872 91.66848-91.66336-41.12384-91.66336-91.66848-91.66336z" fill="#6C0000"></path><path d="M148.98688 161.3568c28.38016 14.54592 40.39168 48.54784 36.61312 82.41664-8.25344 73.92256-95.7184 81.8944-104.48896 78.95552a87.3728 87.3728 0 0 0 39.96672 9.63584c48.48128 0 87.7824-39.30112 87.7824-87.7824-0.00512-38.72256-25.08288-71.56224-59.87328-83.2256z" fill="#bfdbfe"></path></g></svg>
          </div>
        </div>
        <div className="pt-12 lg:pt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {ProjectContent.projects.map((value) => {
            const [[name, content]] = Object.entries(value);

            return <ProjectCard setPopup={setPopup} name={name} date={content.date} svgIcons={content.svgIcons} actions={content.actions} description={content.description} additional_description={content.additional_description}></ProjectCard>
          })}
        </div>
        {ProjectContent.other_sections && Object.entries(ProjectContent.other_sections).map(([title, projects]) => {
          return <>
            <p className="pt-5 md:pt-7 text-lg md:text-xl text-gray-900 dark:text-gray-200 font-medium inline-flex items-center">
              {title}
            </p>
            <div className="pt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {projects.map((value) => {
                const [[name, content]] = Object.entries(value);

                return <ProjectCard setPopup={setPopup} name={name} date={content.date} svgIcons={content.svgIcons} actions={content.actions} description={content.description} additional_description={content.additional_description}></ProjectCard>
              })}
            </div>
          </>
        })}
      </div>
    </HomeLayout >
  )
}

export default ProjectPage

export const Head = () => <title>Projects</title>