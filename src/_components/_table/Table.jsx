import React, { Component } from 'react'

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
            <td>
                <button type="button" className="btn btn-primary"
                    onClick={() => props.removeCharacter(index)}>Delete</button>
            </td>
          </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Action</th>
        </tr>
      </thead>
    )
}

class Table extends Component {
  render() {
    const {characterData,removeCharacter} = this.props;
    return (
        <table className="table">
            <TableHeader/>
            <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
        </table>
    )
  }
}

export default Table;