import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Image } from 'react-native'
import Slider from 'react-native-slider'
import { Text } from 'react-native-elements'

const Dog = props => {
  const [dogUrl, setDogUrl] = useState(null)
  const [happinessLvl, setHappinessLvl] = useState(0.5)
  const [recommendation, setRecommendation] = useState(5)

  useEffect(() => {
    axios('https://dog.ceo/api/breeds/image/random')
      .then(res => setDogUrl(res.data.message))
      .catch(console.error)
  }, [])

  return (
    <React.Fragment>
      <Text h3>How has your day been?</Text>
      <Slider
        minimumValue={0.01}
        maximumValue={1}
        style={{width: '70%'}}
        minimumTrackTintColor='pink'
        maximumTrackTintColor='pink'
        thumbTintColor='yellow'
        value={happinessLvl}
        onValueChange={value => setHappinessLvl(value)}
        onSlidingComplete={value => setRecommendation(Math.ceil(value * -10 + 10) + 1)}
      />
      <Text style={{color: 'grey'}}>
        {
          happinessLvl < 0.35
          ? 'Hound Dog'
          : happinessLvl >= 0.35 && happinessLvl < 0.65
            ? 'Just Another Walk Around the Block'
              : 'Doggie Treats and Chasing Cars!'
        }
      </Text>
      <Text>
        We recommend {recommendation} dog pic(s) to make you feel better!
      </Text>
      <Image
        source={{uri: dogUrl }}
        alt="Adorable dog"
        style={{width: '70%', height: '70%', resizeMode: 'contain'}}
      />
      <Text>Does this make you feel better?</Text>
    </React.Fragment>
  )
}

export default Dog
