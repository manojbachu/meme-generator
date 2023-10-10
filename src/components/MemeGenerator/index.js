import {Component} from 'react'

import {
  AppContainer,
  MainHeading,
  MemeGeneratorContainer,
  MemeGeneratorForm,
  MemeInputs,
  InputContainer,
  InputLabel,
  GenerateButton,
  SelectContainer,
  FontSizeOption,
  MemeContainer,
  MemeText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    displayMeme: false,
  }

  onClickGenerate = event => {
    event.preventDefault()

    const {imageUrl, topText, bottomText} = this.state
    if (imageUrl !== '' && topText !== '' && bottomText !== '') {
      this.setState({displayMeme: true})
    }
  }

  onChangeImgUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  generatorForm = () => {
    const {imageUrl, topText, bottomText, fontSize} = this.state
    return (
      <MemeGeneratorForm>
        <InputContainer>
          <InputLabel htmlFor="imageUrl">Image Url</InputLabel>
          <MemeInputs
            fontSize={fontSize}
            id="imageUrl"
            value={imageUrl}
            onChange={this.onChangeImgUrl}
            placeholder="Enter the Image Url"
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="topText">Top Text</InputLabel>
          <MemeInputs
            onChange={this.onChangeTopText}
            id="topText"
            value={topText}
            placeholder="Enter the Top Text"
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="bottomText">Bottom Text</InputLabel>
          <MemeInputs
            value={bottomText}
            onChange={this.onChangeBottomText}
            id="bottomText"
            placeholder="Enter the Bottom Text"
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="fontSize">Font Size</InputLabel>
          <SelectContainer
            value={fontSize}
            id="fontSize"
            onChange={this.onChangeFontSize}
          >
            {fontSizesOptionsList.map(eachOption => (
              <FontSizeOption key={eachOption.optionId}>
                {eachOption.displayText}
              </FontSizeOption>
            ))}
          </SelectContainer>
        </InputContainer>

        <GenerateButton onClick={this.onClickGenerate} type="submit">
          Generate
        </GenerateButton>
      </MemeGeneratorForm>
    )
  }

  renderMeme = () => {
    const {imageUrl, topText, bottomText, fontSize} = this.state

    return (
      <MemeContainer bgImg={imageUrl} data-testid="meme">
        <MemeText fontSize={fontSize}>{topText}</MemeText>
        <MemeText fontSize={fontSize}>{bottomText}</MemeText>
      </MemeContainer>
    )
  }

  render() {
    const {displayMeme} = this.state
    return (
      <AppContainer>
        <MainHeading>Meme Generator</MainHeading>
        <MemeGeneratorContainer>
          {this.generatorForm()}
          {displayMeme && this.renderMeme()}
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
