'use strict'
const express = require('express'),
    router = express.Router();
const fetch = require('node-fetch')

const fetchWeather = async (area) => {
    let weatherArray = [];
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=95929b78acb549bd9bc151519201302&q=${area}`);
    const data = await response.json();
    //console.log(data);
    weatherArray.push(`<img src="${data.current.condition.icon}"></img>`);
    weatherArray.push(`<h3>${data.location.name}<h3>`);
    weatherArray.push(`<h3>${data.location.region}</h3>`);
    weatherArray.push(`<p>${data.current.condition.text}</p>`);
    weatherArray.push(`<p>${data.current.temp_f} Degrees F<p>`);
    return weatherArray;
}

router.get('/', async (req, res) => {
    let {
        loc
    } = req.query;

    const prompt = `<h1>Enter a ZIP</h1>`

    const weatherInfo = await fetchWeather(loc);
    console.log(weatherInfo)

    res.render('template', {
        locals: {
            title: 'Weather',
            weatherInfo: !!loc ? weatherInfo.join('') : prompt

        },
        partials: {
            partial: 'partial-weather'
        }
    })
});

module.exports = router;