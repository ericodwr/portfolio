'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { motion, useAnimate, useInView, useScroll } from 'framer-motion';

const iconData = [
  'nextjs',
  'angularjs',
  'react',
  'js',
  'tailwindcss',
  'redux',
  'nodejs',
  'springboot',
  'prisma',
];

const contactsData = [
  {
    imgUrl: 'ig',
    link: 'https://www.instagram.com/ericodwr?igsh=NWcxZmNmNXkxZnBv&utm_source=qr',
  },
  { imgUrl: 'linkedin', link: 'https://www.linkedin.com/in/ericodwir/' },
  { imgUrl: 'github', link: 'https://github.com/ericodwr' },
];

const projects = [
  [
    {
      title: 'Busana90s',
      tech: ['Next Js', 'Express JS', 'MySQL'],
      imgUrl: 'projects/busana90s.svg',
      large: false,
      link: 'https://busana90s.shop/',
    },
    {
      title: 'Mitra Lancar',
      tech: ['Next Js', 'Tailwind CSS'],
      imgUrl: 'projects/mitralancar.svg',
      large: true,
      link: 'https://mitralancar.com/',
    },
  ],
  [
    {
      title: 'Job Finder',
      tech: ['Angular JS', 'Spring Boot', 'PostgreSQL'],
      imgUrl: 'projects/jobfinder.svg',
      large: true,
      link: 'https://github.com/orgs/jera-work/repositories',
    },
    {
      title: 'Bootcamp Test',
      tech: ['Angular JS', 'Spring Boot', 'PostgreSQL'],
      imgUrl: 'projects/bootcamp.svg',
      large: false,
      link: 'https://github.com/ericodwr/bootcamp',
    },
  ],
  [
    {
      title: 'Crownsco',
      tech: ['React Js', 'Redux', 'Firebase'],
      imgUrl: 'projects/crowns.svg',
      large: false,
      link: 'https://crowns-clot.netlify.app/',
    },
    {
      title: 'Open Table',
      tech: ['Next Js', 'Prisma', 'Tailwind CSS'],
      imgUrl: 'projects/openTable.svg',
      large: true,
      link: 'https://open-table-sigma.vercel.app/',
    },
  ],
];

export default function Home() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      if (loader) loader.style.display = 'none';
    }
  }, []);

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate('h2', { opacity: 1, x: 0 }, { duration: 2 });
      animate('p', { opacity: 1, x: 0 }, { duration: 2 });
      animate('div', { opacity: 1 }, { duration: 2, delay: 0.3 });
    }
  }, [isInView]);

  const leftVariants = {
    offscreen: {
      x: -75,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const rightVariants = {
    offscreen: {
      x: 75,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const staggerVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div id={'globalLoader'}>
        <div className="loader animate-pulse">
          <Image
            src={'/logo.svg'}
            alt="splash"
            width={150}
            height={150}
            priority
          />
        </div>
      </div>
      <main className="relative">
        {/* Navbar */}

        <div className="bg-[#E6E6E8] absolute w-full">
          <nav className="container px-6 sm:px-0 flex justify-between items-center py-6">
            <motion.div
              initial={{ opacity: 0, x: -75 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Image
                src={'/logo.svg'}
                alt="logo"
                width={36}
                height={36}
                priority
              />
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, x: 75 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="flex gap-14"
            >
              <li>
                <a href="#projects">Work</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </motion.ul>
          </nav>
        </div>

        {/* Navbar */}

        {/* Hero Section */}
        <section className="bg-[#E6E6E8] h-screen flex items-center justify-center">
          <div className="container  px-10 text-[#141010]">
            <motion.h1
              initial={{ opacity: 0, y: -75 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: 'easeInOut',
              }}
              className="text-center leading-normal text-4xl  sm:text-5xl sm:leading-normal md:text-7xl md:leading-normal lg:text-8xl lg:leading-normal xl:text-9xl xl:leading-normal"
            >
              Creative Fullstack Developer
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, y: 75 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1,
                ease: 'easeInOut',
              }}
              className="text-center md:text-2xl text-xl mt-12"
            >
              Hi, My name is Erico Dwi and I'am Fullstack Developer
            </motion.h3>
          </div>
        </section>
        {/* Hero Section */}

        {/* About Section */}
        <motion.section
          className="my-12 px-6 sm:px-10 lg:container xl:px-8"
          ref={scope}
          id="about"
        >
          <motion.div className="grid md:grid-cols-4">
            <motion.h2
              initial={{ x: -75, opacity: 0 }}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl col-span-1"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ x: 75, opacity: 0 }}
              className="mt-5 sm:text-xl sm:mt-8 sm:leading-10 md:mt-0 xl:text-2xl xl:leading-10 text-justify col-span-3"
            >
              Experienced 2 years' working as Full stack Web Developer handling
              multi-case programs and mostly handling Front End side, blending
              the art of design with programming and coding/writing skills to
              deliver the immersive and engaging user experience through
              efficient desktop and mobile web platforms, reliability
              performance and proactive feature optimization. Eager to learn
              something new, tackle more complex problems, and find a creative
              way to maximize user interface and user efficiency.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            className="mt-12 container flex justify-center items-center sm:px-8"
          >
            <Image
              src={'/me.svg'}
              alt="me"
              width={0}
              height={0}
              className="w-auto h-auto"
              priority
            />
          </motion.div>
        </motion.section>

        {/* Skill Section */}
        <section>
          <div className="mt-12 px-6 sm:px-10 lg:container xl:px-8">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              className="grid md:grid-cols-4"
            >
              <motion.h2
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl col-span-1"
                variants={leftVariants}
              >
                Skills
              </motion.h2>
              <motion.div className="col-span-3">
                <motion.p
                  variants={rightVariants}
                  className="mt-5 sm:text-xl sm:mt-8 sm:leading-10 md:mt-0 xl:text-2xl xl:leading-10 text-justify"
                >
                  With the experience I have as a Developer, these are the tech
                  stack skills I currently have.
                </motion.p>
                <motion.div
                  variants={staggerVariants}
                  className="flex justify-around flex-wrap gap-x-10 sm:gap-x-16 lg:gap-x-24 xl:gap-x-36 gap-y-16 mt-12"
                >
                  {iconData.map((icon, i) => {
                    return (
                      <motion.div
                        variants={{
                          offscreen: {
                            opacity: 0,
                          },
                          onscreen: {
                            opacity: 1,
                          },
                        }}
                        whileHover={{ scale: 1.2 }}
                        key={i}
                      >
                        <Image
                          className="w-10 sm:w-12 lg:w-14 xl:w-auto h-auto"
                          src={`/tech/${icon}.svg`}
                          width={0}
                          height={0}
                          alt={icon}
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* Skills Section */}

        {/* Projects Section */}
        <section className="mt-32" id="projects">
          <div className="mt-12 sm:px-10 lg:container xl:px-8">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              className="grid px-6 sm:px-0 md:grid-cols-4"
            >
              <motion.h2
                variants={leftVariants}
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl col-span-1"
              >
                Projects Result
              </motion.h2>
              <motion.p
                variants={rightVariants}
                className="tsm:text-xl sm:mt-8 sm:leading-10 md:mt-0 xl:text-2xl xl:leading-10 text-justify col-span-3"
              >
                Here’s some projects that i’ve been develop lately.
              </motion.p>
            </motion.div>

            <motion.div className="my-20">
              {projects.map((project, i) => {
                return (
                  <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                    key={i}
                    className="flex flex-col items-center md:items-end md:flex-row md:justify-between md:mb-20"
                  >
                    {project.map((p, j) => {
                      return (
                        <motion.div
                          variants={{
                            offscreen: {
                              opacity: 0,
                            },
                            onscreen: {
                              opacity: 1,
                              transition: {
                                duration: 1,
                                delay: 0.8,
                                ease: 'easeInOut',
                              },
                            },
                          }}
                          key={j}
                          className={`flex flex-col md:justify-end w-10/12 mb-10 md:m-0 ${
                            p.large ? 'md:w-1/2' : 'md:w-[40%]'
                          }`}
                        >
                          <Image
                            src={p.imgUrl}
                            alt={p.title}
                            width={0}
                            height={0}
                            className={`h-auto w-auto  
                            `}
                          />
                          <div className="flex justify-between items-center mt-6">
                            <div className="flex flex-col justify-between">
                              <motion.h2
                                variants={{
                                  offscreen: {
                                    opacity: 0,
                                    y: -75,
                                  },
                                  onscreen: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                      duration: 1,
                                      delay: 1.5,
                                      ease: [0, 0.71, 0.2, 1.01],
                                    },
                                  },
                                }}
                                className="font-bold md:text-xl lg:text-2xl xl:text-3xl"
                              >
                                {p.title}
                              </motion.h2>
                              <motion.div
                                variants={{
                                  offscreen: {
                                    opacity: 0,
                                    y: 75,
                                  },
                                  onscreen: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                      duration: 1,
                                      delay: 1.5,
                                      ease: [0, 0.71, 0.2, 1.01],
                                    },
                                  },
                                }}
                                className="flex gap-2 sm:gap-5"
                              >
                                {p.tech.map((t, k) => {
                                  return (
                                    <p key={k} className="text-sm">
                                      {t}
                                    </p>
                                  );
                                })}
                              </motion.div>
                            </div>
                            <motion.a
                              variants={{
                                offscreen: {
                                  opacity: 0,
                                  x: -75,
                                },
                                onscreen: {
                                  opacity: 1,
                                  x: 0,
                                  transition: {
                                    duration: 1,
                                    delay: 2,
                                    ease: [0, 0.71, 0.2, 1.01],
                                  },
                                },
                              }}
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.8 }}
                              href={p.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Image
                                src={'/arrow.svg'}
                                alt={i}
                                width={0}
                                height={0}
                                className="w-[2rem] sm:w-[3rem] lg:w-auto h-auto"
                              />
                            </motion.a>
                          </div>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}

        {/* Contact Us Section */}
        <section className="my-28" id="contact">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="mt-12 container px-8"
          >
            <motion.h1
              variants={{
                offscreen: {
                  opacity: 0,
                  y: -75,
                },
                onscreen: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    delay: 1,
                    ease: 'easeInOut',
                  },
                },
              }}
              className="leading-normal text-3xl sm:text-5xl sm:leading-normal md:text-6xl md:leading-normal lg:text-7xl lg:leading-normal xl:text-8xl xl:leading-normal text-center"
            >
              Unleash Creativity: Your Gateway to Collaboration
            </motion.h1>

            <motion.div className="flex justify-center items-center flex-col gap-8 mt-10">
              <motion.div
                variants={{
                  offscreen: {
                    opacity: 0,
                    y: -75,
                  },
                  onscreen: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1,
                      delay: 1.5,
                      ease: 'easeInOut',
                    },
                  },
                }}
                className="flex justify-center items-center gap-10"
              >
                {contactsData.map((data, i) => {
                  return (
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      key={i}
                    >
                      <a
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={`/contacts/${data.imgUrl}.svg`}
                          alt={data}
                          width={0}
                          height={0}
                          className="w-8 md:w-auto h-auto"
                        />
                      </a>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.button
                variants={{
                  offscreen: {
                    opacity: 0,
                    y: 75,
                  },
                  onscreen: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1,
                      delay: 1.5,
                      ease: 'easeInOut',
                    },
                  },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-36 h-9 sm:w-40 sm:h-10 md:w-44 md:h-12 lg:w-48 lg:h-14 bg-black text-white rounded-lg"
              >
                <a href="mailto:erikodwirosadi12@gmail.com">Contact Me</a>
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* Contact Us Section */}
      </main>

      <footer className="bg-[#E6E6E8] h-14 flex items-center">
        <p className="ml-4 sm:ml-10 text-xs">
          ©2024 designed & developed by ergowork. <br /> Jakarta, Indonesia.
        </p>
      </footer>
    </>
  );
}
