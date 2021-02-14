import React from 'react';
import styles from './search-form.module.scss';

export default function SearchForm() {

    function handleSearch(e){
        e.preventDefault();
        alert("Not implemented, sorry!");
    }

    return(
        <div className = { styles.form_container }>
            <form className = { styles.search_form }>
                <div className = { styles.field_group }>
                    <input type="search" className = {styles.keyword_field} placeholder="keyword"/>
                </div>
                <div className = { styles.field_group }>
                    <input type="text" className = {styles.date_field} placeholder="company"/>
                </div>
                <div className = { styles.field_group }>
                    <input type="submit" className = {styles.submit_btn} value="Filter" onClick={handleSearch}/>
                </div>
            </form>
        </div>
    );
}