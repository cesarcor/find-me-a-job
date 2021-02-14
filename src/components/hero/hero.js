import React from 'react';
import styles from './hero.module.scss';

export default function Hero(){
    return(
        <section className = {styles.hero_section}>
            <div className = {styles.hero_container}>
                <div>
                    <span className = { styles.hero_icons }>🔎 💼</span>
                    <h1 className = {styles.hero_heading}>Find me a job...</h1>
                    <p>A very simple non-functional UI for a fictional job board site</p>
                </div>
            </div>
        </section>
    );
}