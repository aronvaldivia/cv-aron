import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import ProjectCard from './components/ProjectCard';
import TechStack from './components/TechStack';
import ExperienceCard from './components/ExperienceCard';
import ContactForm from './components/ContactForm';


function App() {
  const projects = [
    {
      title: "Hochi",
      description: "Importadora de accesorios tecnologicos",
      image: "https://mcusercontent.com/17635adc15e4488859eb5650d/images/e7f4f2e9-a3df-013d-73b5-874963bd2ec0.png",
      link: "https://hochi.pe/",
         
      
      
    },
    {
      title: "Task Management App",
      description: "React-based project management tool with real-time updates",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Weather Dashboard",
      description: "Dynamic weather application using modern APIs",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=600"
    }
  ];

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description: "Egresado "
    },
    {
      title: "Software Developer",
      company: "Digital Innovations",
      period: "2019 - 2021",
      description: "Developed and maintained web applications"
    }
  ];

  const education = [
    {
      title: "SOFTWARE ENGENIER",
      institution: "ISIL- Instituto San Ignacio de Loyola",
      period: "2017 - 2020",
      description: "Bachelor's Degree with focus on Software Engineering"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-zinc-800 text-white pt-16">
        <div className="container mx-auto px-10 py-40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
                <div className='container-proyecto flex justify-center items-cente py-10'>
          <img
                  src="https://mcusercontent.com/17635adc15e4488859eb5650d/images/0c47d545-a4f8-51a9-a382-77d96769579a.png"
                  className="profe-image w-200 h-30 flex justify-center items-center"
                />
                </div>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Ingeniero de Software especializado en frontend
              </p>
              <div className="flex gap-4">
                <a href="https://github.com" className="p-2 hover:text-blue-200 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" className="p-2 hover:text-blue-200 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:tu@email.com" className="p-2 hover:text-blue-200 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="profile-image-container">
                <img
                  src="https://mcusercontent.com/17635adc15e4488859eb5650d/images/08829a93-8de4-4fd3-17c7-77e103ccbd55.jpg"
                  alt="Profile"
                  className="profile-image w-full h-full object-cover"
                />
                
              </div>
              
            </div>

          </div>
          
        </div>
        
      </section>


      {/* Projects Section */}
      <section className="py-10 bg-black" id="projects">
        <div className="container mx-auto px-4">
          <div className='container-proyecto flex justify-center items-cente py-10'>
          <img
                  src="https://mcusercontent.com/17635adc15e4488859eb5650d/images/a866127d-9a39-2f99-c137-49a3ed158df0.png"
                  className="proyecto-image w-60 h-30 flex justify-center items-center"
                />
                </div>
         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-black" id="skills">
        <div className="container mx-auto px-4">
        <div className='container-tecnologia flex justify-center items-cente py-10'>
          <img
                  src="https://mcusercontent.com/17635adc15e4488859eb5650d/images/2702646b-52f0-abc8-8549-a3314f55e400.png"
                  className="tecnologia-image w-80 h-30 flex justify-center items-center pb-10"
                />
                </div>
          <TechStack />
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-black" id="experience">
        <div className="container mx-auto px-4">
        <div className='container-tecnologia flex justify-center items-cente py-10'>
          <img
                  src="https://mcusercontent.com/17635adc15e4488859eb5650d/images/58461065-a9d3-5b46-517e-bf8871d2655f.png"
                  className="tecnologia-image w-60 h-30 flex justify-center items-center"
                />
                </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-emerald-400">Experiencia Laboral</h3>
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} {...exp} />
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-emerald-400 ">Educación</h3>
              {education.map((edu, index) => (
                <ExperienceCard key={index} {...edu} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-emerald-900" id="about">
        <div className="container mx-auto px-4">

        <div className='container-tecnologia flex justify-center items-cente py-10'>
          <img
                  src="https://mcusercontent.com/17635adc15e4488859eb5650d/images/18612f1b-f59c-c6fa-c701-674ad3fe2d5c.png"
                  className="tecnologia-image w-80 h-30 flex justify-center items-center"
                />
                </div>

          
          <div className="max-w-3xl mx-auto">
            <AboutMe />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Contáctame
          </h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;