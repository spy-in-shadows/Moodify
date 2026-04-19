import { useParams } from 'react-router-dom'

const CollectionPage = () => {
  const { type, id } = useParams()

  return (
    <main>
      <h1>Collection</h1>
      <p>
        This is the temporary entry point for a {type} collection with the id {id}.
      </p>
    </main>
  )
}

export default CollectionPage
