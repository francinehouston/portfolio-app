import {RevealOnScroll} from "../RevealOnScroll";

export const Projects = () => {


    return(

        <section 
        id="projects" 
        className="min-h-screen  items-center justify-center py-20">

            <RevealOnScroll>

            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
                    Featured Projects</h2>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition" >
                    <h3 className="text-xl font-bold mb-2"> Browser Game</h3>
                    <p className="text-gray-400 mb-4">
                        Color Matching Memory Game for people who want to test their memory and color recognition skills.       
                    </p>
                    <div>
                        {[" Html", " CSS", " JavaScript"].map((tech, key) => (
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech} 
                            </span>

                            ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a 
                        href="https://francinehouston.github.io/color-matching-memory-game/" 
                        target= "_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors">View Project</a>
                    </div>

  
                </div>

            
                <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition" >
                    <h3 className="text-xl font-bold mb-2"> BabelBot</h3>
                    <p className="text-gray-400 mb-4">
                        Group project build a Django with Python application with Full CRUD functionality that allows users to create, edit, and delete language translation entries. Users can also search for specific translations and view their history. The app uses a PostgreSQL database to store the translations and user data.     
                    </p>
                    <div>
                        {[" Html", " CSS", " JavaScript", "Python", "PostgreSQL", "Django", "Full Stack Development"].map((tech, key) => (
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech} 
                            </span>

                            ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a 
                        href="https://babelbot-80382e0f3acb.herokuapp.com/" 
                        target= "_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors">View Project</a>
                    </div>

  
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition" >
                    <h3 className="text-xl font-bold mb-2"> BucketList: Travel Planner App</h3>
                    <p className="text-gray-400 mb-4">
                        Created a travel planner app that allows users to create and manage their travel itineraries, including destinations, activities, and accommodations.      
                    </p>
                    <div>
                        {[" Html", " CSS", " JavaScript","React", "Node.JS", "Express", "Mongoose"].map((tech, key) => (
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech} 
                            </span>

                            ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a 
                        href="https://bucketlist-travel-planner-app-47ba3fe9ce17.herokuapp.com/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors">View Project</a>
                    </div>

  
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition" >
                    <h3 className="text-xl font-bold mb-2"> Food Diary</h3>
                    <p className="text-gray-400 mb-4">
                        Developed a full stack CRUD app that helps users track their daily food intake, including meals, calories, reminders, weight tracker and nutritional goals. Users can add, edit, and delete entries, as well as view their progress over time.       
                    </p>
                    <div>
                        {[" Html", " CSS", " JavaScript", "React", "MongoDB", "Node.JS", "Express", "Postman"].map((tech, key) => (
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech} 
                            </span>

                            ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a 
                        href="https://food-diary-api-app.netlify.app/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors">View Project</a>
                    </div>

  
                </div>


                <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition" >
                    <h3 className="text-xl font-bold mb-2">  Weather Outfit App</h3>
                    <p className="text-gray-400 mb-4">
                        Created a weather app that provides users with current weather conditions and outfit recommendations based on the temperature. The app uses the OpenWeatherMap API to fetch weather data and displays it in a user-friendly interface. Users can search for weather information by city or location.      
                    </p>
                    <div>
                        {[" Html", " CSS", " JavaScript","Django","Python", "React"].map((tech, key) => (
                            <span 
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            {tech} 
                            </span>

                            ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://weather-outfit.netlify.app"
                        target="_blank"
                        rel="noopener norcodeeferrer"
                        className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors">View Project</a>
                    </div>

  
                </div>
            </div>
</RevealOnScroll>
        </section>
    );

};