import { ArrowRight, ExternalLink, Github, GithubIcon } from "lucide-react";

const projects=[
    {
        id:1,
        title:"Ecommerce Website",
        description:"This is the first project.",
        imageUrl:"/projects/Project1.png",
        tags:["ASP.NET","js","css","html"],
        githubUrl:"#" // Replace with actual URL
    },
    {
        id:2,
        title:"Landing Page",
        description:"This is the second project.",
        imageUrl:"/projects/Project2.png",
        tags:["js","css","html"],
        githubUrl:"#" // Replace with actual URL
    },
    {
        id:3,
        title:"Portfolio Website",
        description:"This is the third project.",
        imageUrl:"/projects/Project3.png",
        tags:["React","js","css","html","tailwind"],
        githubUrl:"#" // Replace with actual URL    
    },
];

export const ProjectSection = () => {
  return (
<section id ="projects" className="py-24 px-4 relative">
    <div className="container  max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">

            <span className="text-primary">
                 Projects
            </span>

        </h2>

        <p className="text-center text-muted-foregroungd mb-12 max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills and experience through real-world examples of my projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project,key) => (
                <div
                 key={key}
                 className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                >
                    <div className="h-48 overflow-hidden">
                        <img src={project.imageUrl} alt={project.title} className=" w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    </div>

                    <div className="p-6">
                        <div  className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                                <span className="text-xs bg-secondary border text-secondary-foreground px-2 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                     

                     <h3 className=" text-xl font-semibold mb-1"> {project.title}</h3>
                     <p className=" text-muted-foreground text-sm mb-4 "> {project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                <Github size={30}/>
                            </a>

                            </div>
                            </div>
                            
                        </div>
                </div>
            ))}
        </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                href="https://github.com/fizur20-1"
                target="_blank"
                >
                    check more on GitHub <ArrowRight size={16} />
                </a>
            </div>


    </div>
</section>

    );
};