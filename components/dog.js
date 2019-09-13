import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Image } from 'react-native'
import Slider from 'react-native-slider'
import { Text } from 'react-native-elements'
import { incrementDogPics } from '../actions/dogPics'
import { connect } from 'react-redux'

const Dog = ({ dogPics, incrementDogPics }) => {
  const [dogUrl, setDogUrl] = useState(null)
  const [happinessLvl, setHappinessLvl] = useState(0.5)
  const [recommendation, setRecommendation] = useState(5)
  const [hasUsedSlider, setHasUsedSlider] = useState(false)

  useEffect(() => {
    axios('https://dog.ceo/api/breeds/image/random')
      .then(res => setDogUrl(res.data.message))
      .catch(console.error)
  }, [dogPics])

  return (
    <React.Fragment>
      <Text h4>How has your day been?</Text>
      <Slider
        minimumValue={0.01}
        maximumValue={1}
        style={{width: '70%'}}
        minimumTrackTintColor='purple'
        maximumTrackTintColor='purple'
        thumbTintColor='yellow'
        value={happinessLvl}
        onValueChange={value => setHappinessLvl(value)}
        onSlidingComplete={value => {
          setRecommendation(Math.ceil(value * -10 + 10) + 1)
          setHasUsedSlider(true)
        }
      }
      />
      <Text style={{color: 'grey'}}>
        {
          happinessLvl < 0.35
          ? 'Hound Dog \n'
          : happinessLvl >= 0.35 && happinessLvl < 0.65
            ? 'Just Another Walk Around the Block \n'
              : 'Doggie Treats and Chasing Cars! \n'
        }
      </Text>
      <Text style={{color: 'purple'}}>
        { hasUsedSlider
          ? `We recommend ${recommendation} dog pic(s) to make you feel better!`
          : 'Use the slider above to tell us how you feel today.'
        }
      </Text>
      <Image
        source={{uri: dogUrl }}
        alt="Adorable dog"
        style={{width: '70%', height: '70%', resizeMode: 'contain'}}
      />
      <Text style={{color: 'purple'}}>
      {
        hasUsedSlider && recommendation === dogPics
        ? 'You have achieved the recommended number of dog pics! We hope you feel better! Feel free to keep clicking!'
        : ''
      }
      </Text>
      <Button
        title="See new dog!"
        onPress={() => {
          incrementDogPics()
        }
        }
      />
      <Text>{dogPics} awesome dog pics</Text>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  dogPics: state.dogPics
})

const mapDispatchToProps = dispatch => ({
  incrementDogPics: () => dispatch(incrementDogPics())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dog)
