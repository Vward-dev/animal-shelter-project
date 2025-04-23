import { useState } from "react";

export default function SearchBox({ searchFunction }){
    const [searchText, setSearchText] = useState("");

    function handleSearchTextChange(event){
        const newValue = event.target.value;
        setSearchText(newValue);
    }

    function handleSearch(event){
        if(event.key === "Enter" || event.type === "click"){
            searchFunction(searchText);
        }
    }

    return(
        <div>
            <input type="text" onChange={handleSearchTextChange} onKeyDown={handleSearch} />
            <button onClick={handleSearch}>Search</button>
        </div>
    )


}