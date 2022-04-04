import React from "react";
import peopleData from "../data/people.json";

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      searchValue: "",
    }
  }

  handleChange = (event) => {
    this.setState({searchValue: event.target.value})
  }

  handleData = () => {
    let allPeoples = peopleData.reduce((prev, curr) => {
      prev = prev.concat(curr.people);
      return prev;
    }, []);
    let filteredPeople = allPeoples.filter((person) => {
      return person.name.toLowerCase().startsWith(this.state.searchValue.toLowerCase());
    }) ;
    return filteredPeople;
  }

  render() {
    let peoples = this.handleData();
    return (
      <div className="articles">
        <input onChange={this.handleChange} className="articles-input" type="search" placeholder="Search" value={this.state.searchValue} />
        <ul className="people-holder">
          {
            peoples.map((person, index) => {
              return <SinglePerson key={index} {...person}/>
            })
          }
        </ul>
      </div>
    )
  }
}

function SinglePerson(props) {
  return (
    <li className="single-person">
        <div className="person-img-holder flex gap-2">
          <img className="person-img" src={props.image} />
          <h2 className="person-title">{props.name}</h2>
        </div>
        <h3 className="person-description">{props.description}</h3>
        <a className="buy-now" href={props.website}>Learn More</a>
    </li>
  )
}

export default People;