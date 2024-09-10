'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import HeEro from '../Imae/hero.jpeg'
const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 h-screen flex items-center justify-center text-center">
      <div className="container mx-auto">
      <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-7xl font-bold text-white"
        >
          <Image
          src={HeEro}
          alt="Hero"
          height={100}
          className='w-[20%] ml-[39.50%]'
          width={400}
          
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-7xl font-bold text-white"
        >
          Abdulbaseer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1.2 }}
          className="text-xl md:text-2xl text-white mt-4"
        >
          Passionate Web Developer & UI/UX Designer
        </motion.p>

        <div className="mt-8 flex justify-center gap-6">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.1 }}
            className="bg-white text-blue-600 py-2 px-6 rounded-full font-semibold shadow-lg"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            className="bg-transparent border-2 border-white text-white py-2 px-6 rounded-full font-semibold"
          >
            Contact Me
          </motion.a>
        </div>
      </div>

      {/* Optional Background Image or Illustration */}
      <div className="absolute inset-0 bg-opacity-50 bg-cover bg-center"
           style={{ backgroundImage: 'url(/path-to-image.jpg)' }}>
      </div>
    </section>
  );
};

export default Hero;
