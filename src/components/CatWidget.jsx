import React, {useState} from 'react'
import {DashboardWidgetContainer} from '@sanity/dashboard'
import {Button, Flex} from '@sanity/ui'

const CatWidget = () => {
  // State to hold the current cat image URL
  const [catImageUrl, setCatImageUrl] = useState('https://placekitten.com/300/450')

  // Function to fetch a new cat image
  const getNewCat = () => {
    // Generate a new size to change the image
    const newWidth = Math.floor(Math.random() * 100) + 300
    const newHeight = Math.floor(Math.random() * 100) + 450
    setCatImageUrl(`https://placekitten.com/${newWidth}/${newHeight}`)
  }

  return (
    <DashboardWidgetContainer
      header="A cat"
      footer={
        <Flex direction="column" align="stretch" padding={2}>
          <Button
            flex={1}
            mode="bleed"
            tone="primary"
            text="Get new cat"
            onClick={getNewCat} // Attach the getNewCat function to the button click
          />
        </Flex>
      }
    >
      <figure style={{textAlign: 'center'}}>
        <img src={catImageUrl} alt="Random Cat" style={{maxWidth: '100%', height: 'auto'}} />
      </figure>
    </DashboardWidgetContainer>
  )
}

export default CatWidget
