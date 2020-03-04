import React, {  Component } from 'react'


class Memegenerator extends React.Component{
    constructor(){
        super()
        this.state={
            topText: "",
            bottomText: "",
            randomImage: "https:\/\/i.imgflip.com\/1bgw.jpg",
            allMemeImages: [],
            index: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

componentDidMount(){
    fetch( "https://api.imgflip.com/get_memes" )
        .then(res => res.json())
        .then(response=> {
            const {memes} = response.data
            // alert(memes[0].name)
            this.setState({allMemeImages: memes})
        })
}


    handleChange(event){
        const {name, type, value, url} = event.target
        this.setState({[name]: value})

    }

    handleSubmit(event){
        event.preventDefault() // this is important
        const index = Math.floor((Math.random() * 100) + 1)
        const newurl = this.state.allMemeImages[index].url

        this.setState( {randomImage: [newurl]} )
    }


    render(){
        
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="topText"
                        value={this.topText}
                        placeholder="topText"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        value={this.bottomText}
                        placeholder="bottomText"
                        onChange={this.handleChange}
                    />
                <button > Gen </button>
                </form>
                <div  >
                    <img clasName="imagecss" src={this.state.randomImage} alt=""/>
                    <h2 className="h21" > {this.state.topText} </h2>
                    <h2 className="h22" > {this.state.bottomText} </h2>
                </div>
            </div>
        )
    }


}

export default Memegenerator