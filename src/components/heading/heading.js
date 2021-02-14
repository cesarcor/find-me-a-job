import React from 'react';
import styles from './heading.module.scss';

export default function Heading(props) {
    return(
        <div>
            <h2 className = { styles.heading }>{props.text}</h2>
        </div>
    );
}