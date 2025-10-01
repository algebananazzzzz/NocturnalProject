import React, { useState } from "react"
import HomeLayout from "@/components/layout/home-layout"
import VideoPopupComponent from "@/components/ui/video-popup"
import rawProjectContent from '@/content/project.yml';
import type { ProjectContent } from '@/types/projects';
import ProjectCard from "@/components/ui/project-card"
import Svg from "@/components/ui/svg";
import { PageProps } from "gatsby";

const projects: ProjectContent = rawProjectContent;

const ProjectPage: React.FC<PageProps> = () => {
  const [popup, setPopup] = useState<string | null>(null)
  console.log(popup)
  return (
    <HomeLayout>
      <VideoPopupComponent popup={popup} setPopup={setPopup} />
      <div className="pt-10 md:pt-0 grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 flex items-center">
        <div className="lg:col-span-4">
          <h1 className="flex-none font-medium text-gray-800 dark:text-gray-200 text-3xl md:text-4xl lg:text-5xl inline-flex items-center">
            Projects
          </h1>
          {
            projects.description.map((value, i) => {
              return <p className="flex mt-5 text-justify text-base md:text-lg text-gray-700 dark:text-gray-400">
                {value}
              </p>
            })
          }
        </div>
        <div className="lg:col-span-3 mt-10 lg:mt-0 hidden lg:flex justify-end">
          <Svg name="theme/projects" className="w-112 h-112" />
        </div>
      </div>
      <div className="pt-12 lg:pt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.projects.map(project => <ProjectCard key={project.name} project={project} setPopup={setPopup} />)}
      </div>
    </HomeLayout >
  )
}

export default ProjectPage

export const Head = () => <title>Projects</title>