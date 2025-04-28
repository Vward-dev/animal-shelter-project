import { useState } from "react";
import styles from "./SearchBox.module.css";

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
        <div id={styles.searchDiv}>
            <input id={styles.input} type="text" onChange={handleSearchTextChange} onKeyDown={handleSearch} />
            <button id={styles.searchButton} onClick={handleSearch}>Search</button>
        </div>
    )


}