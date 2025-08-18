import React, { useEffect, useState } from 'react'

export default function Project() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users/ProgramandoComAndre/starred")
      .then((response) => response.json())
      .then((value) => {
        let mappedItems = value.map((x) => {
          let projectName = x.name.replaceAll("-", " ")
          let url = x.html_url
          let description = x.description
          return { projectName, url, description }
        })
        setProjects(mappedItems)
      })
      .catch((error) => console.error("Error fetching repos:", error))
  }, [])

  return (
    <div className='bg-indigo-800 m-20 max-w-full'>
      <div className='grid justify-items-center m-10'>
        <h1 className='text-3xl text-white mt-10'>Projects</h1>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
  {projects.map((x, i) => (
    <div
      key={i}
      className="bg-white rounded-xl shadow-md overflow-hidden 
                 hover:animate-pulse flex flex-col justify-between 
                 h-64 w-full"
    >
      <a href={x.url} target="_blank" rel="noreferrer" className="flex-grow">
        <div className="p-6 flex flex-col h-full">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {x.projectName}
          </div>
          <p className="mt-2 text-slate-500 flex-grow overflow-hidden">
            {x.description ? x.description : "Without Description"}
          </p>
        </div>
      </a>
    </div>
  ))}
</div>

        <hr />
      </div>
    </div>
  )
}
