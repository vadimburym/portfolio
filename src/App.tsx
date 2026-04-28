import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { EducationSection } from './components/sections/EducationSection';
import { FeaturedProjectsSection } from './components/sections/FeaturedProjectsSection';
import { Footer } from './components/sections/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ReleasedProjectsSection } from './components/sections/ReleasedProjectsSection';
import { TechStackSection } from './components/sections/TechStackSection';
import { Navbar } from './components/layout/Navbar';
import { portfolioData } from './data/portfolioData';

function App() {
  return (
    <div className="relative overflow-x-clip">
      <div className="absolute inset-x-0 top-[15%] -z-10 mx-auto h-[520px] w-[520px] rounded-full bg-cyan-400/10 blur-[130px]" />
      <div className="absolute right-0 top-[40%] -z-10 h-[460px] w-[460px] rounded-full bg-violet-500/10 blur-[130px]" />

      <Navbar items={portfolioData.navigation} ctaHref="#contacts" />
      <main>
        <HeroSection hero={portfolioData.hero} />
        <AboutSection about={portfolioData.about} />
        <FeaturedProjectsSection items={portfolioData.featuredProjects} />
        <EducationSection items={portfolioData.education} />
        <TechStackSection items={portfolioData.techStack} />
        <ReleasedProjectsSection items={portfolioData.releasedProjects} />
        <ContactSection items={portfolioData.contacts} />
      </main>
      <Footer navigation={portfolioData.navigation} footer={portfolioData.footer} />
    </div>
  );
}

export default App;
