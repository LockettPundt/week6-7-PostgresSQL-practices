'use strict'
const express = require('express'),
router = express.Router();
const fetch = require('node-fetch')
const dataArray = [];
const fetchWeather = (area) => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=95929b78acb549bd9bc151519201302&q=${area}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            dataArray.push(`<img src="${data.current.condition.icon}"></img>`)
            dataArray.push(`<h3>${data.location.name}<h3>`)
            dataArray.push(`<h3>${data.location.region}</h3>`);
            dataArray.push(`<p>${data.current.condition.text}</p>`);
            dataArray.push(`<p>${data.current.temp_f} Degrees F<p>`);
        })
        .catch(err => console.log(err));
}








router.get('/', (req, res) => {
    let {loc} = req.query;

    const prompt =  `<h1>Enter a ZIP</h1>`

    fetchWeather(loc);
   
    res.render('template', {
        locals: {
            title: 'Weather',
            weatherInfo: !!loc ? dataArray.join('') : prompt
           
        },
        partials: {
            partial: 'partial-weather'
        }
    })
});

module.exports = router;