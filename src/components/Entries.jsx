export default function Entry(props) {
    return (
        <section>
            <div className='image'>
                <img src={props.img} alt={props.alt}/>
            </div>
            <div className='entry-right'>
                <div className='top'>
                    <img src='/src/assets/fill.png' alt='location icon'/>
                    <span className='country'>{props.country}</span>
                    
                    <a className='google-link' href={props.googleMapsLink}>
                    View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <span className='dates'>{props.dates}</span>
                <p>{props.text}</p>
            </div>
        </section>
    )
}