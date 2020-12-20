import React from 'react'

export class Person extends React.Component{
    render(){
        const h3Text = this.props.age >= 21 ? 'have a drink!' : 'you must be 21'
        const name = this.props.name.length > 8 ? this.props.name.substring(0,6) : this.props.name
        let id = 0
        const personHobbies = this.props.hobbies.map(hobby => <li key={id+=1}>{hobby}</li>)
        return(
            <div>
                <p>Learn some information about this person</p>
                <div>name:{name}</div>
                <div>age:{this.props.age}</div>
                <h3>{h3Text}</h3>
                <ul>Hobbies: {personHobbies}</ul>
            </div>
        )
    }
}