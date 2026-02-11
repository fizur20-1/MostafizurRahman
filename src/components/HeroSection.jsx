import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section 
        id="hero" 
        className="min-h-screen flex flex-col justify-center items-center px-4"
        > 
        <div className=" container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm</span>

                     <span className="text-primary opacity-0 animate-fade-in-delay-1">
                        {" "}
                         Mostafizur
                    </span>
                      <span 
                      className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> 
                      {" "}
                      Rahman 
                    </span>

                    
                </h1>

                <p className="text-lg md:text-xl mt-6 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    🚀 On a mission to sharpen my skills and grow into a strong Software Engineer,  
                    while building impactful applications that make a difference. 
                 </p>
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
            
        </div>

        <div className="absolute bottom-8 left1/2 transform -traslate-x1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">
            Scroll 
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
             
        </div>

        </section>
    );
}       