import styles from "./About.module.css";

export default function About_Me(){
    return(
        <div className={styles.body}>
           <header className={styles.header}>
                Skhumbuzo Bembe
           </header>
           <section className={styles.contacts}>
                <span> +27 79 015 6664 </span> |
                <a href="mailto: sikhumbuzobembe184@gmai.com"> sikhumbuzobembe184@gmail.com</a> |
                <span> Johannesburg, GT, South Africa </span> |
                <a href="https://www.linkedin.com/in/skhumbuzo-bembe/"> LinkedIn </a> |
                <a href="https://github.com/MAVUNDL"> Github </a>
           </section>
           <div className={styles.summary}>
                <span className={styles.textstyle}> PROFESSIONAL SUMMARY </span>
                <hr className={styles.line}/>
                <p className={styles.paragraphstyle}>
                Dedicated and results-driven Mathematical Science student specializing in Mathematics and Computer Science with a
                strong foundation in software development and data analysis. Proficient in multiple programming languages, including
                C++, Java, and Python, with hands-on experience in developing custom applications and solving complex mathematical
                problems. Proven ability to leverage statistical and computational techniques for problem-solving, demonstrated through
                academic projects and internships. Adept in statistical analysis, data visualization, and mathematical modeling, with
                additional expertise in networking, JavaFX, and epidemic modeling. A motivated team player with excellent problem-solving
                skills and a passion for innovation in technology.
                </p>
           </div>
           <div className={styles.summary}>
                <span className={styles.textstyle}> EDUCATION </span>
                <hr className={styles.line}/>
                <section className={styles.spacer}>
                    <span className={styles.textsub}> University of Johannesburg</span>
                    <span className={styles.textsub}> February 2022 - December 2025</span>
                </section>
                <section>
                    <span className={styles.textItalics}> Bachelor's, Mathematics & Computer Science</span>
                    <ul className={styles.paragraphstyle}>
                        <li> 
                            Computer Networking: Studied networking principles, protocols (TCP/UDP), web servers, and client-server
                            architecture, with practical implementation using Java.
                        </li>
                        <li>
                            Mathematical Statistics with Data Analysis (R Programming): Applied statistical theories to data analysis, focusing
                            on hypothesis testing, regression models, and advanced statistical programming in R.
                        </li>
                        <li>
                            Advanced Calculus: Explored multivariable calculus, including partial derivatives, multiple integrals, and vector
                            calculus with applications in various mathematical models.
                        </li>
                        <li>
                            Algorithms & Data Structures: Focused on the design and analysis of algorithms for problem-solving, including
                            sorting, searching, graph theory, and dynamic programming.
                        </li>
                        <li>
                            Computer Science (Java, C++, Python): Developed a range of software projects using object-oriented programming
                            and applied computational problem-solving techniques.
                        </li>
                        <li>
                            Differential & Integral Calculus: Covered foundational concepts in limits, derivatives, and integrals, with applications
                            in optimization and real-world problem-solving.
                        </li>
                    </ul>
                </section>
           </div>
           <div className={styles.summary}>
                <span className={styles.textstyle}> PROFESSIONAL EXPERIENCE </span>
                <hr className={styles.line}/>
                <section className={styles.spacer}>
                    <span className={styles.textsub}>Excel@Uni SimplyTutors</span>
                    <span className={styles.textsub}> Johannesburg, GT, South Africa</span>
                </section>
                <section className={styles.spacer}>
                    <span className={styles.textItalics}> Computer Science Tutor: C++ Programming</span>
                    <span className={styles.textItalics}>March 2024 - Present</span>
                </section>
                <ul className={styles.paragraphstyle}>
                    <li>
                    As a Computer Science Tutor at SimplyTutors, I teach C++ Procedural and Object Oriented Programming remotely,
                    I use my proficiency in C++ and other skills to help students grasp complex concepts, thereby contributing to their
                    academic success in Computer Science.
                    </li>
                </ul>
            </div>
            <div className={styles.summary}>
                <span className={styles.textstyle}> SKILLS </span>
                <hr className={styles.line}/>
                <ul className={styles.paragraphstyle}>
                    <li>
                        <b>Skills: </b> Git, Java, Python, C++, JavaScript, R, Computer Networking, API Development, OOP
                    </li>
                    <li>
                        <b>Database: </b> PostgreSQL, MongoDB
                    </li>
                    <li>
                        <b>Frameworks: </b> SpringBoot, React, Vaadin Flow
                    </li>
                    <li>
                        <b>Software: </b> PyCharm, Intellij, VSCode, R Studio, Visual Studio
                    </li>
                    <li>
                        <b>Languages: </b> Isizulu, English
                    </li>
                </ul>
            </div>
            <div className={styles.summary}>
                <span className={styles.textstyle}> PROJECTS & OUTSIDE EXPERIENCE </span>
                <hr className={styles.line}/>
                <section>
                    <span className={styles.textsub}> Client and Server JavaFX Application</span>
                    <ul className={styles.paragraphstyle}>
                        <li>
                            Developed a Client-Server application using JavaFX for uploading and downloading images
                        </li>
                        <li>
                            The project showcases networking concepts, file handling, and GUI implementation
                        </li>
                        <li>
                            <a href="https://github.com/MAVUNDL/Client_and_Server_JavaFx_Application"> <em>Link to Project</em></a>
                        </li>
                    </ul>
                </section>
                <section>
                    <span className={styles.textsub}> JavaFX-peer-to-peer-file-sharing-with-UDP</span>
                    <ul className={styles.paragraphstyle}>
                        <li>
                            Developed a file sharing application that uses User Datagram Protocol (UDP) making it lightweight and suitable for fast data transfers
                        </li>
                        <li>
                            Users can share files directly between peers without relying on a central server.
                        </li>
                        <li>
                            <a href="https://github.com/MAVUNDL/JavaFX-peer-to-peer-file-sharing-with-UDP."> <em>Link to Project</em></a>
                        </li>
                    </ul>
                </section>
                <section>
                    <span className={styles.textsub}>SRI-based Epidemic Modelling Software (C++) </span>
                    <ul className={styles.paragraphstyle}>
                        <li>
                            Designed a mathematical model to simulate the spread of infectious diseases using the SRI (Susceptible, Infected, Removed) model
                        </li>
                        <li>
                            Implemented using C++ to provide data analysis and visualizations of epidemic trends.
                        </li>
                        <li>
                            <a href="https://github.com/MAVUNDL/SRI-Epidemic-Modelling"> <em>Link to Project</em></a>
                        </li>
                    </ul>
                </section>
                <section>
                    <span className={styles.textsub}> Drone Explorer - Lost Treasure Hunt (C++) </span>
                    <ul className={styles.paragraphstyle}>
                        <li>
                            Developed a C++ application simulating a drone explorer searching for lost treasures in a dynamically generated map environment
                        </li>
                        <li>
                            Implemented algorithms for pathfinding and obstacle avoidance.
                        </li>
                        <li>
                            <a href="https://github.com/MAVUNDL/Drone-Explorer-Lost-Treasure-Hunt"> <em>Link to Project</em></a>
                        </li>
                    </ul>
                </section>
                <section>
                    <span className={styles.textsub}> Mini Portfolio Website(Python)</span>
                    <ul className={styles.paragraphstyle}>
                        <li>
                            Created a  simple personal portfolio website to showcase skills, projects, and experiences written in Python Reflex Framework.
                        </li>
                        <li>
                             Designed with a clean user interface and responsive design to highlight professional work.
                        </li>
                        <li>
                            <a href="https://skhumbuzobembe.reflex.run/"> <em>Link to Project</em></a>
                        </li>
                    </ul>
                </section>
            </div>
            <div className={styles.summary}>
                <span className={styles.textstyle}> CERTIFICATIONS </span>
                <hr className={styles.line}/>
                <section className={styles.spacer}>
                    <span className={styles.textsub}> J.P Morgan Software Engineering Virtual Experience on Forage</span>
                    <span className={styles.textsub}> April 2024</span>
                </section>
                <span className={styles.paragraphstyle}>
                    <ul>
                        <li>
                            <b>Set up</b> local dev enviroment, fixed broken files, and utilized JPMorgan Chase`s open source library Perspective for live data visualization.
                        </li>
                    </ul>
                </span>

                <section className={styles.spacer}>
                    <span className={styles.textsub}>JPMorgan Chase & Co. Software Engineering Lite virtual experience program on Forage</span>
                    <span className={styles.textsub}> April 2024</span>
                </section>
                <span className={styles.paragraphstyle}>
                    <ul>
                        <li>
                            <b>Completed</b> engineering ticket tasks including creating new classes and writting test suites.
                        </li>
                    </ul>
                </span>
            </div>
            <div className={styles.summary}>
                <span className={styles.textstyle}> REFERENCES</span>
                <hr className={styles.line}/>
                <section className={styles.paragraphstyle}>
                    <ol className={styles.summary}>
                        <li>
                            <b>Simphiwe Nyawo</b> <br/>
                            Data Scientist at StandardBank<br/>
                            Email: <a href="mailto:siphospha82@gmail.com">siphospha82@gmail.com</a><br/>
                            Phone: 0730813879<br/>
                            Location: Johannesburg, South Africa
                        </li>
                        <li>
                            <b>Mr Z.E Hlatshwayo</b><br/>
                            Science Teacher at Ubuhle Buzile Secondary School<br/>
                            Email: <a href="mailto:hlatshwayone@ubuhlebuzileschool.co.za">hlatshwayone@ubuhlebuzileschool.co.za</a><br/>
                            Phone: 0824673171<br/>
                            Location: Piet Retief, South Africa<br/>
                        </li>
                    </ol>
                </section>
            </div>

        </div>
    )
}