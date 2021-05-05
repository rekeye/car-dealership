import React from 'react'
import { connectHits } from 'react-instantsearch-dom'
import Post from '../post'

const Hits = ({ hits }) => (
  <>
    {hits.map(hit => (
      <Post key={hit.objectID} hit={hit}/>
    ))}
  </>
)

const CustomHits = connectHits(Hits)

export default CustomHits