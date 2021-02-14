import React from 'react';
import './App.scss';
import Hero from './components/hero/hero';
import SearchForm from './components/search-form/search-form';
import Heading from './components/heading/heading';
import JobList from './components/job-list/job-list';
import Footer from './components/footer/footer';

export default function App(){

    return (
      <div className="App">
        <Hero/>
        <SearchForm/>
        <Heading text="Job Posts" />
        <JobList/>
        <Footer />
      </div>
    );

}