import "../../css/Skills.css"

function Skills(){
    return(
        <>
        <section id="skills">
        <div className="skills-left-container">
            <h1>My Skills and Relevant Coursework </h1>
            <ul>
                <li><strong>Skills: </strong>C/C++, Python, Java, HTML, CSS, JavaScript, ReactJs, Node.js, Express.js, EJS, Git, Github</li>
                <li><strong>Coursework: </strong> Data Structures, Algorithms, Object Oriented Programming</li>
            </ul>
        </div>
        <div className="skills-right-container">
            <img src="/skills-img.png" alt="Skills-img" className="skills-img" />
        </div>
    </section>
    <hr style={{width: '10%', borderTop: 'dotted 5px', color: '#504d4d'}} className="last-hr" />
    </>
    );
}

export default Skills;