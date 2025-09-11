
export default function Hero() {
  return (
    <section className="relative pt-24 min-h-screen flex flex-col justify-center items-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero.jpg" 
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-xl">
          We create beautiful designs for your business
        </p>
      </div>
    </section>
  );
}
