import {RevealOnScroll} from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = [
        "React", 
        "JavaScript", 
        "HTML", 
        "CSS", 
        "Tailwind CSS", 
        "Bootstrap"];

    const backendSkills = [
        "Node.js", 
        "MongoDB", 
        "Python", 
        "Flask", 
        "PostgreSQL", 
        "MySQL"];
   
    return (

    <section id= "about" className="min-h-screen flex item-center justify-center py-20"> 
<RevealOnScroll>

    <div className="max-w-3xl mx-auto px-4">
<h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center ">About Me</h2>

    <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
    <p className="text-gray-300 mb-6">
        Passionate engineer that enjoys problem-solving and creating innovative solutions.
    </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4" > Frontend </h3>
            <div className="flex flex-wrap gap-2">
{frontendSkills.map((tech,key) => (
<span  key={key}
className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
{tech}
</span>
    ))}
 </div>
            

        </div>

        <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> Backend </h3>
            <div className="flex flex-wrap gap-2">
{backendSkills.map((tech,key) => (
<span 
key={key}
className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
{tech} 
</span>
    ))}
 </div>
            

        </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
        <h3 className="text-xl font-bold mb-4"> 📖 Education</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
                <strong> Software Engineering Certification </strong> - General Assembly (2024-2025)
                <br />
               
                <strong> Bachelor's Degree in Communication Design</strong> - College for Creative Studies (2001-2005)
            </li>
            <li>
                Relevant Coursework: Oriented Programming, Data Structures, Algorithms, Web Development, Database Management, Software Engineering Principles,
            </li>
        </ul>
        </div>

        <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
        <h3 className="text-xl font-bold mb-4"> 💼 Work Experience</h3>
        <div className="space-y-4 text-gray-300">
            <div>
                <h4 className="font-semibold"> Freelancer graphic designer (2005-present)</h4>
                
                <p>worked on various projects for people</p>
            </div>
            <div>
                
                <h4 className="font-semibold"> Intern (2025)</h4>
                <p> Assisted in building front-end compontents, intergration REST APIs and full stack Development.</p>
            </div>
        </div>
        </div>

    </div>
    </div>
</RevealOnScroll>
    </section>
    );

};