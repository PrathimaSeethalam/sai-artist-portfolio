import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
          Namaste! I am Sai Madhava, a passionate and creative graphic designer specializing in branding and visual storytelling. I thrive on solving complex design challenges and delivering seamless digital experiences through engaging posters, banners, and intuitive UI/UX designs.
With over a year of experience, I’ve honed my skills in creating impactful branding materials, including poster series, advertisements, and banners. My strengths lie in sketching, visualization, and storytelling, which enable me to bring concepts to life with clarity and creativity.
In addition to design, I enjoy playing the flute and keyboard, as well as immersing myself in the world of books. Currently, I am dedicating myself to my final year project, which focuses on branding—a field that excites and inspires me every day.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
