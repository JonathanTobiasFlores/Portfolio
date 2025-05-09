export default function Hero() {
    return (
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-white">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full shadow-md mb-6"
        />
        <h1 className="text-4xl font-bold mb-2 text-gray-900">Jonathan Flores</h1>
        <p className="text-lg text-gray-600 mb-6">
          Full-Stack Developer | Gamer | Cat dad
        </p>
      </section>
    )
  }
  