import React from "react"
class Profile extends React.Component{
    constructor(){
        super()
          this.state={
            fullName : "Raggad Ghassen",
            bio : "im a full stuck web developer (MERN)",
            profession : "Student at Go my code",
            imgSrc : <img src="/image2.jpg" alt="error"/>,
            count : 0

          }
          
        
      }
       componentDidMount(){
          setInterval(()=>this.setState({count:this.state.count+1}),1000)}

    render(){
      return(
        <div id="profile">
          <h3>{this.state.count}</h3>
            <section id="profile-cat">
            {this.state.imgSrc}
            <h3>hi, my name is {this.state.fullName} </h3>
            </section>
            <p className="p-prof">{this.state.bio}</p>
            <p className="p-prof"> for now im  a {this.state.profession}</p>
            <section>

            </section>
        </div>
      )
    }
    }
    export default Profile