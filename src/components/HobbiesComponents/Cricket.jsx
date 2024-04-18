import "../../css/Hobbies/Cricket.css"

function Cricket(){
    return(
        <>
        <section id="cricket" className="hobbie-class">
        <div className="left-container">
            <img className="cricket-image" alt="cricket" src="https://media.istockphoto.com/id/1255328634/photo/cricket-leather-ball-resting-on-bat-on-the-stadium-pitch.jpg?s=612x612&w=0&k=20&c=e2yHkZt3DISv6e1dpkZgABgC9fxfY93cB1H4MdY9sJs=" />
        </div>
        <div className="right-container" style={{borderRadius: '0 10% 10% 0'}}>   
            <h2>Playing Cricket</h2>
            <p>Cricket is not just a sport for me; it's a passion. Whether it's playing in the park or watching a match, I love everything about cricket.</p>
            <p>Cricket is a passion that exhilarates me. Engaging in cricket, whether on the field or as a fervent spectator, brings me immense joy.</p>
        </div>
        
   
    </section>

    <hr style={{width: '10%', borderTop: 'dotted 5px', color: '#504d4d'}} />
        </>
    );
}

export default Cricket;