import Header from './components/Header'
import Entry from './components/Entries'
import travelData from '../data.js'

export default function App() {

  const travelProps = travelData.map(obj => {
    return (
      <Entry
        key={obj.id}
        obj={obj}
      />
    )
  })

  return (
    <>
      <Header/>
      {travelProps} 
    </>
  )
}
