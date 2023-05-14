import Contact from './components/Contact';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Tech from './components/Tech';

export default function Home() {
  return (
    <>
      {/* <a href="/#work">test</a> */}
      <Hero />
      <Tech />
      <Projects />
      <Contact />
    </>
  );
}
