import Button from './Button'
export default function Hero(props) {

    return (
        <div className='hero-container'>
            <div className='hero-opacity'>
                <h2 className='id-me'>My Name is Shadrach Ndu <br />
                    I am a web <span className='orange'>Developer</span> </h2>
                {/* <p style={{fontSize:"16px", color:"orange"}}>Download my Cv to know more about me.</p> */}
                <Button text='Download CV'/>
            </div>
            
        </div>
    )
}