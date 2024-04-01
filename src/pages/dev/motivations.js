import React from "react"
import { Link } from "gatsby"
import HomeLayout from "../../components/layout/home-layout"

const IndexPage = () => {
  return (
    <HomeLayout>
      <body class="min-h-screen dark:bg-slate-900">
        <div class="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 flex items-center">
            <div className="lg:col-span-4">
              <h1 class="mt-5 flex-none font-medium text-gray-800 dark:text-gray-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Projects
              </h1>
              <p class="mt-5 text-lg text-gray-700 dark:text-gray-400 text-justify">
                Every project I undertake serves a distinct purpose, to address specific problem statements for various stakeholders.
              </p>
              <p class="mt-5 text-lg text-gray-700 dark:text-gray-400 text-justify">
                Explore the driving force behind the projects I developed for my community, and the valuable insights I've gained that guides my future developments.
              </p>
              <Link to="/projects" class="w-full mt-5 py-3 px-4 inline-flex justify-center items-center rounded-md bg-gray-200 font-semibold text-gray-500 hover:text-white hover:bg-gray-500 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-600 dark:text-white dark:focus:ring-offset-gray-800">
                Back to Projects
              </Link>
            </div>
            <div class="lg:col-span-3 mt-10 lg:mt-0 hidden lg:block">
              <svg viewBox="0 0 1024 1024" fill="#000000">
                <path d="M520.70912 515.8144m-469.69856 0a469.69856 469.69856 0 1 0 939.39712 0 469.69856 469.69856 0 1 0-939.39712 0Z" fill="#c026d3"></path><path d="M520.71424 995.21536c-264.3456 0-479.40608-215.06048-479.40608-479.40608S256.36864 36.4032 520.71424 36.4032s479.40608 215.06048 479.40608 479.40608-215.06048 479.40608-479.40608 479.40608z m0-939.39712c-253.63968 0-459.99104 206.35136-459.99104 459.99104s206.35136 459.99104 459.99104 459.99104 459.99104-206.35136 459.99104-459.99104-206.35136-459.99104-459.99104-459.99104z" fill="#6C0000"></path><path d="M663.59296 84.89472c-161.85344-29.4656-334.05952 30.47424-440.97536 170.05056-152.07936 198.54336-114.41152 482.78016 84.13696 634.85952a452.11136 452.11136 0 0 0 128.59904 68.88448 450.71872 450.71872 0 0 1-193.8944-85.9136C42.91072 720.69632 5.24288 436.45952 157.32224 237.91104 278.784 79.33952 484.51584 23.52128 663.59296 84.89472z" fill="#e879f9"></path><path d="M335.22176 598.41536m-47.34976 0a47.34976 47.34976 0 1 0 94.69952 0 47.34976 47.34976 0 1 0-94.69952 0Z" fill="#FFEB43"></path><path d="M335.22688 653.85472c-30.57152 0-55.44448-24.87296-55.44448-55.44448s24.87296-55.43424 55.44448-55.43424 55.43424 24.86784 55.43424 55.43424-24.86784 55.44448-55.43424 55.44448z m0-94.69952c-21.65248 0-39.26528 17.6128-39.26528 39.26016 0 21.65248 17.6128 39.26528 39.26528 39.26528 21.64224 0 39.26016-17.6128 39.26016-39.26528-0.00512-21.64736-17.61792-39.26016-39.26016-39.26016z" fill="#6B0306"></path><path d="M226.82624 335.58016m-29.98272 0a29.98272 29.98272 0 1 0 59.96544 0 29.98272 29.98272 0 1 0-59.96544 0Z" fill="#FFEB43"></path><path d="M226.82624 373.64736c-20.98688 0-38.0672-17.08032-38.0672-38.0672 0-20.99712 17.08032-38.07232 38.0672-38.07232 20.99712 0 38.07232 17.08032 38.07232 38.07232s-17.08032 38.0672-38.07232 38.0672z m0-59.96032a21.91872 21.91872 0 0 0-21.888 21.89824c0 12.06784 9.82016 21.888 21.888 21.888s21.89824-9.82016 21.89824-21.888a21.93408 21.93408 0 0 0-21.89824-21.89824z" fill="#6B0306"></path><path d="M605.39904 544.6144m-19.584 0a19.584 19.584 0 1 0 39.168 0 19.584 19.584 0 1 0-39.168 0Z" fill="#FFEB43"></path><path d="M605.39904 572.288c-15.26272 0-27.66848-12.41088-27.66848-27.66848s12.41088-27.67872 27.66848-27.67872c15.26272 0 27.66848 12.416 27.66848 27.67872s-12.40576 27.66848-27.66848 27.66848z m0-39.17312a11.50976 11.50976 0 0 0-11.4944 11.49952c0 6.33344 5.15584 11.4944 11.4944 11.4944s11.4944-5.15584 11.4944-11.4944a11.51488 11.51488 0 0 0-11.4944-11.49952z" fill="#6B0306"></path><path d="M423.74144 202.54208m-17.71008 0a17.71008 17.71008 0 1 0 35.42016 0 17.71008 17.71008 0 1 0-35.42016 0Z" fill="#FFEB43"></path><path d="M423.74144 228.33664a25.82528 25.82528 0 0 1-25.79968-25.79968c0-14.21824 11.5712-25.78944 25.79968-25.78944s25.79968 11.5712 25.79968 25.78944a25.82528 25.82528 0 0 1-25.79968 25.79968z m0-35.40992a9.6256 9.6256 0 0 0 0 19.23584 9.6256 9.6256 0 0 0 0-19.23584z" fill="#6B0306"></path><path d="M721.5872 265.33888c-2.43712-6.92736-8.576-11.904-16.01536-12.99456l-48.896-7.15776-21.23264-43.42272c-3.30752-6.76352-10.4192-11.12576-18.13504-11.12576-7.69536 0-14.81728 4.36224-18.13504 11.12576l-21.23264 43.42272-48.88576 7.17312c-7.4496 1.07008-13.59872 6.04672-16.03584 12.99456a19.01568 19.01568 0 0 0 4.736 19.968l35.90144 35.33312-8.32 48.94208c-1.2544 7.33184 2.01728 14.8736 8.34048 19.20512 6.05696 4.096 14.55104 4.56192 21.0944 1.11616l42.55232-22.56896 42.5728 22.59456a20.5312 20.5312 0 0 0 21.10464-1.13664c6.28736-4.31616 9.55904-11.84768 8.30976-19.17952l-8.32-48.94208 35.90144-35.33312a19.07712 19.07712 0 0 0 4.69504-20.01408z" fill="#FFBD00"></path><path d="M669.4912 400.40448a28.80512 28.80512 0 0 1-13.3632-3.30752l-38.8096-20.59264-38.7584 20.5568c-9.00608 4.71552-21.10464 4.04992-29.4144-1.5616-8.96-6.12864-13.57312-16.82432-11.776-27.26912l7.60832-44.7744-32.89088-32.36864c-7.62368-7.49568-10.1888-18.3808-6.69696-28.39552 3.43552-9.80992 12.06272-16.83968 22.52288-18.35008l44.63616-6.53824 19.36896-39.59296c4.66944-9.51808 14.63808-15.66208 25.40544-15.66208 10.78272 0 20.75136 6.144 25.40544 15.66208l19.35872 39.59296 44.672 6.53824c10.43456 1.52576 19.0464 8.54528 22.47168 18.31936 3.5072 10.04032 0.96256 20.93056-6.65088 28.44672l-32.90112 32.37888 7.61344 44.77952c1.77664 10.43456-2.82112 21.11488-11.70432 27.20256a28.75392 28.75392 0 0 1-16.09728 4.93568z m-52.1728-42.2144l46.36672 24.59648a12.65152 12.65152 0 0 0 12.80512-0.70144c3.64032-2.49856 5.57056-6.87104 4.84864-11.10528l-9.0368-53.10464 38.912-38.2976c3.15392-3.11296 4.17792-7.43936 2.73408-11.5712-1.42336-4.0704-5.08928-7.00416-9.54368-7.66464l-53.12-7.77216-23.10656-47.25248c-3.91168-7.99232-17.81248-8.01792-21.73952 0.01024l-23.11168 47.24736-53.10464 7.7824c-4.48 0.65024-8.13568 3.584-9.56416 7.66976a10.97728 10.97728 0 0 0 2.7648 11.53024l38.912 38.2976-9.02144 53.10464c-0.73216 4.23936 1.20832 8.61696 4.93056 11.17184 3.43552 2.31424 8.94976 2.60608 12.75904 0.62976l46.31552-24.57088z" fill="#6B0204"></path><path d="M669.37344 84.90496c147.07712 75.37152 209.3312 251.58144 189.74208 427.1104-42.74688 383.0784-496.03584 424.40192-541.4912 409.1648a452.78208 452.78208 0 0 0 207.10912 49.92512c251.2384 0 454.912-203.66848 454.912-454.912 0.00512-200.6528-129.96608-370.8416-310.272-431.28832z" fill="#a21caf"></path><path d="M873.8304 494.61248m-39.168 0a39.168 39.168 0 1 0 78.336 0 39.168 39.168 0 1 0-78.336 0Z" fill="#FFEB43"></path><path d="M873.8304 541.87008c-26.05056 0-47.25248-21.20192-47.25248-47.26272 0-26.05056 21.20192-47.25248 47.25248-47.25248 26.0608 0 47.26272 21.20192 47.26272 47.25248-0.00512 26.0608-21.20704 47.26272-47.26272 47.26272z m0-78.336a31.10912 31.10912 0 0 0-31.07328 31.07328 31.11424 31.11424 0 0 0 31.07328 31.08352 31.11424 31.11424 0 0 0 31.08352-31.08352 31.11936 31.11936 0 0 0-31.08352-31.07328z" fill="#6B0306"></path>
              </svg>
            </div>
          </div>
          <ol class="lg:max-w-5xl text-justify relative border-l-2 border-solid border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-6">
              <div className="inline-flex items-center">
                <span class="absolute flex items-center text-center justify-center w-7 h-7 bg-fuchsia-400 rounded-full -left-3.5 ring-8 ring-white dark:ring-gray-900 dark:bg-fuchsia-900">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5.66953 9.91436L8.73167 5.77133C10.711 3.09327 11.7007 1.75425 12.6241 2.03721C13.5474 2.32018 13.5474 3.96249 13.5474 7.24712V7.55682C13.5474 8.74151 13.5474 9.33386 13.926 9.70541L13.946 9.72466C14.3327 10.0884 14.9492 10.0884 16.1822 10.0884C18.4011 10.0884 19.5106 10.0884 19.8855 10.7613C19.8917 10.7724 19.8977 10.7837 19.9036 10.795C20.2576 11.4784 19.6152 12.3475 18.3304 14.0857L15.2683 18.2287C13.2889 20.9067 12.2992 22.2458 11.3758 21.9628C10.4525 21.6798 10.4525 20.0375 10.4525 16.7528L10.4526 16.4433C10.4526 15.2585 10.4526 14.6662 10.074 14.2946L10.054 14.2754C9.6673 13.9117 9.05079 13.9117 7.81775 13.9117C5.59888 13.9117 4.48945 13.9117 4.1145 13.2387C4.10829 13.2276 4.10225 13.2164 4.09639 13.205C3.74244 12.5217 4.3848 11.6526 5.66953 9.91436Z" ></path>
                  </svg>
                </span>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">The Direction Forward</h3>
              </div>
              <p class="text-sm font-medium text-fuchsia-500 dark:text-fuchsia-400">
                Present - Future
              </p>
              <p class="mt-2 text-md text-gray-700 dark:text-gray-400">
                Given the potential in Natural Language Processing (NLP) demonstrated by tools like ChatGPT, I aspire to develop my skills in this domain and create solutions that can immensely benefit stakeholders.
              </p>
              <ul class="ml-6 mt-2 text-md text-gray-700 dark:text-gray-400 list-disc">
                <li>AnelaBot (V2) with Augmented features and NLP capabilities to provide more personalised assistance, including features like quizmyself, findforme etc.</li>
                <li>LucidGPT, a tool that lets users train their own GPT model with customised materials, offering students a safer way to study subjects efficiently with GPT while reducing the risk of AI-generated hallucinations.</li>
              </ul>
              <div className="mt-4 flex gap-x-2">
                <a href="https://algebananazzzzz.github.io/eunoiashining/tutorial/index.html" target="blank" rel="noreferrer">
                  <span class="inline-flex items-center py-1.5 px-3 rounded-sm text-sm font-medium bg-indigo-500 hover:bg-indigo-700 text-white">Tutorial</span>
                </a>
              </div>
            </li>
            <li class="mb-10 ml-6">
              <div className="inline-flex items-center">
                <span class="absolute flex items-center text-center justify-center w-7 h-7 bg-blue-400 rounded-full -left-3.5 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" ></path>
                  </svg>
                </span>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">National Service</h3>
              </div>
              <p class="text-sm font-medium text-fuchsia-500 dark:text-fuchsia-400">
                2022 - Present
              </p>
              <p class="mt-2 text-md text-gray-700 dark:text-gray-400">
                As a Viper (Medic) within 1CDO, I developed numerous technical solutions to support and enhance our formation's operations
              </p>
              <ul class="ml-6 mt-2 text-md text-gray-700 dark:text-gray-400 list-disc">
                <li>
                  <a className='text-blue-500 font-bold' href="https://github.com/algebananazzzzz/algebananazzzzz.github.io/tree/main/cdoViper/EqualiDuty" target="blank">EqualityDuty</a>, a script automating the equitable allocation of duties while managing conflicts arising from personal schedules
                </li>
                <li>A quizbot used by my formation's medics for ATEC Stage 1 preparation, made with my <a className='text-blue-500 font-bold' href="https://github.com/algebananazzzzz/python-telegram-bot-quiz" target="blank">Python-Telegram-Bot-Quiz</a> framework</li>
                <li>Automated medical item checks via a <a className='text-blue-500 font-bold' href="https://github.com/algebananazzzzz/algebananazzzzz.github.io/tree/main/cdoViper" target="blank">script</a> that selects "Yes" in a FormSG form—a tool used daily in my medical center</li>
              </ul>
              <p class="mt-2 text-md text-gray-700 dark:text-gray-400">
                With the success of the QuizBot being greatly utilised by my formation, i decided to create python-telegram-bot-quiz, a framework to empower educators to seamlessly generate quizzes for their students
              </p>
              <p class="mt-2 text-md text-gray-700 dark:text-gray-400">
                Developed the Polymer framework to extract recurring patterns, Terraform modules, eliminate hard coding, and establish a singular source of truth for configuration management.
              </p>
              <p class="mt-2 text-md text-gray-700 dark:text-gray-400">
                In my spare time, I also developed ProjectBalls (V2) – an upgraded version that offers users enhanced stability through a modern infrastructure and a more intuitive interface.</p>
              <div className="mt-4 flex gap-x-2">
                <a href="https://projectballs.algebananazzzzz.com/" target="blank" >
                  <span class="inline-flex items-center py-1.5 px-3 rounded-sm text-sm font-medium bg-purple-500 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-800 text-white">Deployment</span>
                </a>
              </div>
            </li>
            <li class="ml-6">
              <div className="inline-flex items-center">
                <span class="absolute flex items-center text-center justify-center w-7 h-7 bg-blue-400 rounded-full -left-3.5 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" ></path>
                  </svg>
                </span>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Junior College</h3>
              </div>
              <p class="text-sm font-medium text-fuchsia-500 dark:text-fuchsia-400">
                2020 - 2022
              </p>
              <p class="mt-2 text-md text-gray-700 dark:text-gray-400">
                In JC, I created a variety of technical solutions that were designed to benefit my peers in certain academical pursuits.
              </p>
              <ul class="ml-6 mt-2 text-md text-gray-700 dark:text-gray-400 list-disc">
                <li><a className='text-blue-500 font-bold' href="https://algebananazzzzz.github.io/organic-chemistry-mindmap.html" target="blank">Chemistry Mindmap site</a> summarising a large amount of 69 organic chemistry reactions to memorise for A level Chemistry </li>
                <li>A script to automate the mundane task of <a className='text-blue-500 font-bold' href="https://github.com/algebananazzzzz/wordcount_4_PW" target="blank">counting words for PW</a> while excluding headers and citations in Google Docs</li>
                <li>Simple interface to display a <a className='text-blue-500 font-bold' href="https://algebananazzzzz.github.io/alevels.html" target="blank">countdown to A Levels</a>, created for my peers to mentally prepare themselves and plan revisions</li>
              </ul>
            </li>
          </ol>
        </div>
      </body >
    </HomeLayout >
  )
}

export default IndexPage

export const Head = () => <title>Algebananazzzzz</title>