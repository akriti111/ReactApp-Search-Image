import React from 'react'
import ImageSearch from './1/ImageSearch';
import ImageList from './2/ImageList';
const API_KEY = "17328922-7de1052661619da544c91f30b"


class App extends React.Component {
  state = {
    images: [],
    msg: "",
    error: null,
    error2: null

  }

  //  using arrow method to avoid this keyword problem
  //async => we are going to make function return a promise as well as resolve the promise automatically
  handleGetRequest = async (event) => {
    //to stop the refreshing of page as soon as the form gets submitted
    event.preventDefault()
    //from name = "searchValue" from imageSearch.js
    const searchTerm = event.target.elements.searchValue.value
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`
    //await keyword works only inside async function, to make the function wait until the promise has been resolved and it has returned a result
    //fetch method is for making web requests
    const request = await fetch(url)
    //data we get from the above fetch method is converted to json format 
    const response = await request.json();

    if (!searchTerm) {
      this.setState({ error: "Please type a keyword to search an Image", error2: null })
    }

    else {
      this.setState({ images: response.hits, msg: searchTerm + " Images", error: null, error2: null })
    }

    if (this.state.images.length === 0) {
      this.setState({ error2: "Please try different search term", error: null })

    }

  }

  render() {
    return (
      <div>
        <h1 >Snap Shot </h1>
        <ImageSearch handleGetRequest={this.handleGetRequest} />



        {this.state.error !== null ?
          <div style={{ color: "#000", textAlign: "center" }}> {this.state.error} </div>
          : (this.state.error2 !== null ?
            <div style={{ color: "#000", textAlign: "center" }}> {this.state.error2} </div> :
            <ImageList images={this.state.images} msgs={this.state.msg} />
          )
        }

      </div>
    )
  }
}


export default App
