export default function Entry() {
    return (
        <section>
            <div className='image'>
                <img src='https://scrimba.com/links/travel-journal-japan-image-url' alt='Japan moutain image'/>
            </div>
            <div className='entry-right'>
                <div className='top'>
                    <img src='/src/assets/fill.png' alt='location marker icon'/>
                    <span className='country'>JAPAN</span>
                    
                    <a className='google-link' href='https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu'>
                    View on Google Maps</a>
                </div>
                <h2>Mount Fuji</h2>
                <span className='dates'>12 Jan, 2023 - 24 Jan, 2023</span>
                <p>
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters 
                    (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, 
                    for both Japanese and foreign tourists.
                </p>
            </div>
        </section>
    )
}