import { useState } from 'react'; // Import useState
import Link from 'next/link'; 
import Layout from '../components/layout';
import styles from './project-menu.module.css'; 

export default function ProjectMenu(){
    const projects = [
        // Define your project data here
        {
          title: 'Edusentia',
          type:'fullstack', 
          date: 'Jul 2023',
          tools: ['Angular', 'Typescript', 'Python', 'Flask', 'JSON'],
          description: 'This is a full-stack web-based application I made with two of my friends. It\'s a sentimental analysis application that benefits both students and the university in tracking course quality and students\' feedback. ',
          githubLink: 'https://github.com/ZijunYe/Edusentia',
          demoLink: 'https://www.youtube.com/watch?v=R-pi6GH-4dU',
        },

        {
            title: 'MyPackage',
            type:'frontend', 
            date: 'Jul 2023',
            tools: ['Angular', 'Typescript', 'Python', 'Flask', 'JSON'],
            description: 'This is a full-stack web-based application...',
            githubLink: 'https://github.com/ZijunYe/Edusentia',
            demoLink: 'https://www.youtube.com/watch?v=R-pi6GH-4dU',
          },
        // Add more projects as needed
      ];
    
      const [selection, setSelection] = useState('All'); // Initialize selection state
    
      // Filter projects based on the current selection
      const filteredProjects = projects.filter((project) => {
        if (selection === 'All') return true;
        if (selection === 'Fullstack') {
          return project.type == 'fullstack';
        }
        if (selection === 'Frontend') {
          return project.type == 'frontend'; 
        }
        if (selection === 'UIDesign') {
            return project.type == 'prototype'; 
          }
        return true;
      });
    return(
        <Layout>
            <div className={styles.title}>
                <h1 className={styles.bigTitle}>💻Projects</h1>
                <div className={styles.selection}>
                    <select onChange={(e) => setSelection(e.target.value)}>
                        <option value="All">All</option>
                        <option value="Fullstack">Fullstack</option>
                        <option value="Frontend">Frontend</option>
                        <option value="UIDesign">UI Design</option>
                    </select>
                </div>
            </div>

  
        <div className={styles.box}>
          {filteredProjects.map((project, index) => (
            <div className={styles.project} key={index}>
              <div className={styles.projectTitle}>
                <h2 className={styles.title}>{project.title}</h2>
                <p className={styles.text}>{project.date}</p>
              </div>
              <div>
                <p className={styles.text}>
                  {project.tools.map((tool, index) => (
                    <span className={styles.tools} key={index}>
                      {tool}
                    </span>
                  ))}
                </p>
              </div>

              <p className={styles.text}>{project.description}</p>
            <div>
              <a className={styles.icons} href={project.githubLink}>
                <img src="/project-icons/github.png" alt="source code icon" className={styles.iconImage} />
                <span className={styles.iconTitle}>Source Code</span>
              </a>
              <a className={styles.icons} href={project.demoLink}>
                <img src="/project-icons/youtube.png" alt="source code icon" className={styles.iconImage} />
                <span className={styles.iconTitle}>Demo</span>
              </a>
            </div>
          </div>
        ))}
      </div> 
    </Layout>



        // <Layout>
        //     <h1 className={styles.bigTitle}>💻Projects</h1>
        //     {/* <img src= "/graphic/LineMarker.svg" alt="Underline" className={styles.underline}/> */}
        //     <div className={styles.box}>

        //         <div className={styles.project}>
        //             <div className={styles.projectTitle}>
        //                 <h2 className={styles.title}>Edusentia</h2>
        //                 <p className={styles.text}>Jul 2023</p>
        //             </div>
        //             <div>
        //                 <p className={styles.text}>
        //                     <span className={styles.tools}>Angular</span>
        //                     <span className={styles.tools}>Typescript</span>
        //                     <span className={styles.tools}>Python</span>
        //                     <span className={styles.tools}>Flask</span>
        //                     <span className={styles.tools}>JSON</span>
        //                 </p>
                   
        //             </div>
        //             <p className={styles.text}>
        //                 This is a full-stack web-based application I made with two of my friends. 
        //                 It's a sentimental analysis application that benefits both students and the university in tracking course quality and students' feedback. 
        //             </p>
        //             <div>
        //                 <a className={styles.icons} href='https://github.com/ZijunYe/Edusentia'><img src= "/project-icons/github.png" alt="source code icon" className={styles.iconImage}/><span className={styles.iconTitle}>Souce Code</span></a>
        //                 <a className={styles.icons} href='https://www.youtube.com/watch?v=R-pi6GH-4dU'><img src= "/project-icons/youtube.png" alt="source code icon" className={styles.iconImage}/><span className={styles.iconTitle}>Demo</span></a>
        //             </div>

        //         </div>

        //         <div className={styles.project}>
        //             <div className={styles.projectTitle}>
        //                 <h2 className={styles.title}>Edusentia</h2>
        //                 <p className={styles.text}>Jul 2023</p>
        //             </div>
        //             <div>
        //                 <p className={styles.text}>
        //                     <span className={styles.tools}>Angular</span>
        //                     <span className={styles.tools}>Typescript</span>
        //                     <span className={styles.tools}>Python</span>
        //                     <span className={styles.tools}>Flask</span>
        //                     <span className={styles.tools}>JSON</span>
        //                 </p>
                   
        //             </div>
        //             <p className={styles.text}>
        //                 This is a full-stack web-based application I made with two of my friends. 
        //                 It's a sentimental analysis application that benefits both students and the university in tracking course quality and students' feedback. 
        //             </p>
        //             <div>
        //                 <a className={styles.icons} href='https://github.com/ZijunYe/Edusentia'><img src= "/project-icons/github.png" alt="source code icon" className={styles.iconImage}/><span className={styles.iconTitle}>Souce Code</span></a>
        //                 <a className={styles.icons} href='https://www.youtube.com/watch?v=R-pi6GH-4dU'><img src= "/project-icons/youtube.png" alt="source code icon" className={styles.iconImage}/><span className={styles.iconTitle}>Demo</span></a>
        //             </div>

        //         </div>

        //     </div>
        // </Layout>
    ); 
}