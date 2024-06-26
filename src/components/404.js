import React from 'react'
import { navigate } from "gatsby";

const NotFoundComponent = () => {
    return <body className="dark bg-slate-900">
        <div className="max-w-[50rem] flex flex-col mx-auto w-full h-screen">
            <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
                <h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">404</h1>
                <p className="mt-3 text-gray-600 dark:text-gray-400">Oops, something went wrong.</p>
                <p className="text-gray-600 dark:text-gray-400">Sorry, we couldn't find your page.</p>
                <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                    <button className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:ring-offset-slate-900" onClick={() => navigate(-1)}>
                        <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                        Back
                    </button>
                </div>
            </div>
        </div>
    </body>
}

export default NotFoundComponent