import "../../css/Hobbies/Music.css"

function Music(){
    return (
        <>
        <section id="Listening Music" className="hobbie-class">
        <div className="right-container">
            <h2>Listening to Music</h2>
            <p>Music is a great way to relax and unwind. I enjoy listening to a variety of genres.</p> 
            <p><em>Lost Stories,</em> hailing from India, captivates me with their unique ability to seamlessly fuse Indian folk music with the allure of electronic beats, 
                creating a mesmerizing musical experience.</p>
        </div>
        <div className="left-container">
            <img className="lost-stories-image" src="https://i1.sndcdn.com/avatars-000468087147-itvqhe-t500x500.jpg" alt="lost stories" />
        </div>
       
   
    </section>

    <hr style={{width: '10%', borderTop: 'dotted 5px', color: '#504d4d'}} />
        </>
    );
}
export default Music;