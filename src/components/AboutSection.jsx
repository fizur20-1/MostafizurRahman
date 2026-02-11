import { Briefcase, Code, GroupIcon, LucideGroup, User, Workflow } from "lucide-react";

const assetBase = import.meta.env.BASE_URL;

export const AboutSection = () => {  
    return (
        <section 
        id="about"
        className="py-24 px-4 relative">
        {" "}
                <div className="container mx-auto max-w-5xl"> 
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        About <span className="text-primary"> Me</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold ">
                                Turning ideas into robust web applications  <br/>
                                 while ensuring quality through bug fixing 🐞
                            </h3>

                            <p className="text-muted-foreground">
                                1+ year of experience in .NET, 
                                MySQL, and JavaScript development. 
                                Currently at HD Clinical Limited 
                                building and optimizing healthcare 
                                applications. Previously interned 
                                at Walton as a Java Developer working 
                                with Oracle, Grails, and Spring.                         
                            </p>

                            <p className="text-muted-foreground" >
                                I’m passionate about Web Application 
                                Development and Data Management and 
                                seeking opportunities to grow my skills 
                                and build a career in Software Engineering.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                                <a href="#contact" className="cosmic-button">
                                    Knock Me
                                </a>
                                <a href={`${assetBase}MD._MOSTAFIZUR_RAHMAN_CV.pdf`} 
                                download 
                                className="px-6 py-2 rounded-full border border-primary text-primary  
                                hover:bg-primary/10 transition-colors duration-300"
                                >
                                    Download Resume
                                </a>
                            </div>

                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <div className="gradient-border p-6 card-hover"> 
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Code className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-lg font-semibold">Web Development</h4>
                                        <p className="text-muted-foreground text-sm">
                                            Building responsive and user-friendly web applications using React and Asp.Net.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover"> 
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-ful l bg-primary/10">
                                        <Workflow className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-lg font-semibold">Team Collaboration</h4>
                                        <p className="text-muted-foreground text-sm">
                                            Experienced in working with cross-functional teams to deliver high-quality software solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border p-6 card-hover">   
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Briefcase className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-lg font-semibold">Problem Solving</h4>
                                        <p className="text-muted-foreground text-sm">
                                            Skilled in identifying and fixing bugs to ensure smooth application performance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
        </section>
    );
}       
