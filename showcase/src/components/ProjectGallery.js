'use client'

import { useEffect, useState } from 'react'

export default function ProjectsGallery() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    async function fetchRepos() {
      const res = await fetch('https://api.github.com/users/JonathanTobiasFlores/repos')
      const data = await res.json()
      const filtered = data
        .filter(repo => !repo.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
      setRepos(filtered)
    }
    fetchRepos()
  }, [])

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Projects</h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          A selection of my public GitHub repositories, sorted by popularity.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map(repo => (
            <div
              key={repo.id}
              className="flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{repo.name}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{repo.description}</p>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-700 font-medium mt-2">
                <span>⭐ <strong>{repo.stargazers_count}</strong></span>
                <span><strong>{repo.language}</strong></span>
              </div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm text-black hover:underline font-medium"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
