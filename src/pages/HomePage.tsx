import React from 'react';
import Hero from '../components/Hero';
import TechnologyScroll from '../components/TechnologyScroll';
import Features from '../components/Features';
import MissionVision from '../components/MissionVision';
import Solutions from '../components/Solutions';
import UseCases from '../components/UseCases';
import BlogSection from '../components/BlogSection';
import SocialProof from '../components/SocialProof';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <TechnologyScroll />
      <Features />
      <MissionVision />
      <Solutions />
      <UseCases />
      <SocialProof />
      <BlogSection />
    </main>
  );
};

export default HomePage;