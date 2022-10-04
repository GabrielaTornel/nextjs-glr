
import React from 'react'

export const Card = ({data}) => {
  return (
    <div className="card" width={200}>
  <div className="card-body">
    <h6 className="card-subtitle mb-2 text-muted">{data}</h6>
    <p className="card-text">Aca ira la  inf</p>
  </div>
</div>
  )
}
export const getStaticProps = () => {
  return {
    props: {
      data: data
    }
  }
}