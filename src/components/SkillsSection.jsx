import { useState } from "react";
import { cn } from "@/lib/utils";
const skills = [

    //backend
    {name:"C#",level:80,catagory:"backend"},
    {name:"ASP.NET",level:75,catagory:"backend"},
    {name:"Java",level:60,catagory:"backend"},
    {name:"PHP",level:60,catagory:"backend"},
    //frontend
    {name:"HTML/CSS",level:95,catagory:"frontend"},
    {name:"JavaScript",level:85,catagory:"frontend"},
    {name:"React",level:80,catagory:"frontend"},
    {name:"Tailwind CSS",level:70,catagory:"frontend"},
    
    //database
    {name:"SQL Server",level:70,catagory:"database"},
    {name:"MySQL",level:65,catagory:"database"},
    {name:"Oracle",level:50,catagory:"database"},
    //tools
    {name:"Git",level:80,catagory:"tools"},
    {name:"Docker",level:50,catagory:"tools"},
    {name:"Postman",level:70,catagory:"tools"},
    {name:"Azure DevOps",level:30,catagory:"tools"},
];

const categories = [
    "all","backend","frontend","database","tools"
];

export const SkillsSection = () => {  

    const [activeCategory, setActiveCategory] =useState("all");

    const filteredSkills = skills.filter((skill) =>
        activeCategory === "all" || skill.catagory === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 bg-secondary/30"> 
        
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category,key) => (
                        <button key={key} 
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize"
                            ,activeCategory === category
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}>
                           
                            {category}    

                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

                  {filteredSkills.map((skill,key) => (

                    <div key={key} 
                    className="bg-card p-6 rounded-lg shadow-xs card-hover">

                    <div className="text-left mb-4">
                        <h3 className="font-semibold text-lg"> {skill.name}</h3>
                    </div>
                    <div className="w-full bg-background/50 rounded-full overflow-hidden">

                    <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" 
                    style={{width:skill.level + "%"}}
                    />
                    </div>
                    <div className="text-right mt-1"> 
                        <span className="text-sm text-muted-foreground">
                            {skill.level}%
                        </span>
                    </div>

                    </div>
                  ))}
                </div>
            </div>
            

        </section>
    );
}