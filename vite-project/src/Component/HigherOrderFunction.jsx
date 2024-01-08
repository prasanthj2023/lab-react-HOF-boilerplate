import React from "react";

// function HigherOrderFunction(){
//     return (
//         <></>
//     )
// }

// export default HigherOrderFunction;

class HigherorderFunction extends React.Component {
    constructor() {
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
                { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age: 58, years: 25 },
                { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }

            ]
        }
    }

    // PROGRESSION 2 | LIST ALL ITEMS

    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };

    // PROGRESSION 3 | LIST ALL DATA BASED ON USERTYPE

    renderbyUserType = () => {
        const data = this.state.userData;
        const filteredByType = data.filter((item) => {
            return item.user_type === "Designer"
        })
        const mapRows = filteredByType.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    }

    // PROGRESSION 4 | FILTER ALL DATA STARTING WITH THE LETTER J

    renderDatawithLetterJ = () => {
        const data = this.state.userData;
        const filteredByLetter = data.filter((item) => {
            return item.name[0] === "J"
        })
        const mapRows = filteredByLetter.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    }

    // PROGRESSION 5 | FILTER DATA BASED ON AGE

    renderDataByAge = () => {
        const data = this.state.userData;
        const filterbyage = data.filter((item) => {
            return item.age > 28 && item.age <= 50
        })
        const mapRows = filterbyage.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    }

    findTotalExperience = () => {
      const data = this.state.userData;
      const designers = data.filter((item) => item.user_type === "Designer");
      const yearsOfExperience = designers.map((item) => item.years);
      const totalExperience = yearsOfExperience.reduce(
        (acc, curr) => acc + curr,
        0
      );
      return totalExperience;
    };

    render() {
        return (
            <div className="parent">
                <div >
                    <h1>Display all items</h1>
                    <div className="display-box">
                        <ul>{this.renderItems()} </ul>
                    </div>
                </div>
                <div>
                    <h1>Display all items</h1>
                    <div className="display-box">
                        <ul>{this.renderbyUserType()} </ul>
                    </div>
                </div>
                <div>
                    <h1>Display all items</h1>
                    <div className="display-box">
                        <ul>{this.renderDatawithLetterJ()} </ul>
                    </div>
                </div>
                <div>
                    <h1>Display all items</h1>
                    <div className="display-box">
                        <ul>{this.renderDataByAge()} </ul>
                    </div>
                </div>
                <div>
                    <h1>Total Experience of Designers:</h1>
                    <p>{this.findTotalExperience()} years</p>
                </div>
            </div>

        )
    }
}

export default HigherorderFunction;