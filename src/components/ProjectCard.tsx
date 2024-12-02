import { Link } from 'lucide-react';
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-gradient-to-r from-emerald-500 to-emerald-900 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-white">{description}</p>
        <a className="bg-black text-white">{}visitar</a>

       
      </div>
    </div>
  );
};

export default ProjectCard;

