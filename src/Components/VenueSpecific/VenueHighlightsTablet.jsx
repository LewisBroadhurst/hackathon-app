import React from 'react'
import VenueHighlight from './VenueHighlight';

const VenueHighlightsTablet = () => {
  return (
    <section className='flex flex-col lg:flex-row gap-5'>
        <VenueHighlight />

        <VenueHighlight />
    </section>
  )
}

export default VenueHighlightsTablet;