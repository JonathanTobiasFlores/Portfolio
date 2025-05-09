import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6">
      <div className="flex justify-center gap-6 text-2xl">
        <a
          href="https://github.com/JonathanTobiasFlores"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jonathan-flores-952766105/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  )
}
