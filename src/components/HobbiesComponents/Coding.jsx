import "../../css/Hobbies/Coding.css"


function Coding(){
    return (
        <>
        <section id="Listening Music" className="hobbie-class">
        <div className="right-container">
            <h2>Coding</h2>
            <p>Starting coding in my college's first semester, I chose Python as my programming initiation and haven't looked back since.</p>
            <p>Coding has become a cherished pastime during free moments, offering the allure of problem-solving and endless possibilities.</p>
        </div>
        <div className="left-container">
            <img className="coding-gif" src="/codinggif.gif" alt="coding gif" />
        </div>
       
   
    </section>
    
    <hr style={{width: '10%', borderTop: 'dotted 5px', color: '#504d4d'}} />

        </>
    );
}

export default Coding;