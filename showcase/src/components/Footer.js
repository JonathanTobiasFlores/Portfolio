import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-8">
      <div className="flex justify-center gap-6 text-2xl text-gray-700">
        <a
          href="https://github.com/JonathanTobiasFlores"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jonathan-flores-952766105/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  )
}
