import React from 'react'

const SearchField = (props) => {
    return (
        <input type="text" placeholder="Search country" onChange={props.searchCountry}>
        </input>
    )
}

export default SearchField
