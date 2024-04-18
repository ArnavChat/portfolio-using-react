import "../../css/Education.css"

function Education(){
    return(
        <>
    <section id="education">
        <aside className="even-left-container">
            <h1>My Education</h1>
            <ul>
                <a href="https://vtop.vit.ac.in/vtop/login"><li>Vellore Institute of Technology, Vellore, Tamil Nadu</li></a>
                    <span>B.Tech in Computer Science - CGPA: 9.54</span><br />
                    <span>Graduation Date: Aug 2026</span>
                <a href="https://www.tpsshastrinagar.com/"><li>Tagore Public School, Jaipur, Rajasthan</li></a>
                    <span>CBSE 12th Grade - 93.4% </span><br />
                    <span>Graduation Date: Mar 2022</span>
                <a href="https://stanselmsajmer.com/"><li>St. Anselm's Sr. Sec. School, Ajmer, Rajasthan</li></a>
                    <span>CBSE 10th Grade - 96.8%  </span><br />
                    <span>Graduation Date: Mar 2020</span>

            </ul>
        </aside>
        <div className="even-right-container">
            <img src="/Technology_Tower(VIT).jpg" alt="TT-VIT" className="VIT-img" />
        </div>
    </section>
    <hr style={{ width: '10%', borderTop: 'dotted 5px', color: '#504d4d' }} />
    </>
    );
    
}

export  default Education;