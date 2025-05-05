import Header from './components/Header'
import Entry from './components/Entries'
import travelData from '../data.js'

console.log(travelData)

export default function App() {

  const travelProps = travelData.map(obj => {
    return (
      <Entry
        img={obj.img.src}
        alt={obj.img.alt}
        title={obj.title}
        country={obj.country}
        googleMapsLink={obj.googleMapsLink}
        dates={obj.dates}
        text={obj.text}
      />
    )
  })
  console.log(travelProps[0])
  return (
    <>
      <Header/>
      {travelProps}
      
    </>
  )
}
