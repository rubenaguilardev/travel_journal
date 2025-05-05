export default function Entry(props) {
    return (
        <section>
            <div className='image'>
                <img src={props.obj.img.src} alt={props.obj.img.imgAlt}/>
            </div>
            <div className='entry-right'>
                <div className='top'>
                    <img src='/src/assets/fill.png' alt='location icon'/>
                    <span className='country'>{props.obj.country}</span>
                    
                    <a className='google-link' href={props.obj.googleMapsLink}>
                    View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <span className='dates'>{props.obj.dates}</span>
                <p>{props.obj.text}</p>
            </div>
        </section>
    )
}