document.addEventListener('DOMContentLoaded', () => {
    // Fetch and automatically render first band in display section of page
    fetch('https://www.theaudiodb.com/api/v1/json/1/search.php?s=coldplay') // Replace 'coldplay' with a featured band name
    .then(resp => resp.json())
    .then(json => renderBand(json))
    .catch(error => console.error(`Error: ${error}`));

    // Fetch data for each of the three featured artists and then render them when clicked
    fetch('https://www.theaudiodb.com/api/v1/json/1/search.php?s=coldplay') // Replace 'coldplay' with a featured band name
    .then(resp => resp.json())
    .then(json => {
        const artistNameItem = document.querySelector('#artist-list').children[0];
        artistNameItem.addEventListener('click', () => {
            console.log(`I've been clicked! (#1)`);
            renderBand(json);
        })
    })
    .catch(error => console.error(`Error: ${error}`));
    fetch('https://www.theaudiodb.com/api/v1/json/1/search.php?s=odesza') // Replace 'odesza' with a featured band name
    .then(resp => resp.json())
    .then(json => {
        const artistNameItem = document.querySelector('#artist-list').children[1];
        artistNameItem.addEventListener('click', () => {
            console.log(`I've been clicked! (#2)`);
            renderBand(json);
        })
    })
    .catch(error => console.error(`Error: ${error}`));
    fetch('https://www.theaudiodb.com/api/v1/json/1/search.php?s=daft_punk') // Replace 'daft_punk' with a featured band name
    .then(resp => resp.json())
    .then(json => {
        const artistNameItem = document.querySelector('#artist-list').children[2];
        artistNameItem.addEventListener('click', () => {
            console.log(`I've been clicked! (#3)`);
            renderBand(json);
        })
    })
    .catch(error => console.error(`Error: ${error}`));
})

function renderBand(json) {
    const bandObject = json.artists[0];
    
    // Upper pannel information
    const bandBanner = bandObject.strArtistBanner;
    
    // Right pannel information
    const bandName = bandObject.strArtist;
    const bandYear = bandObject.intFormedYear;
    const bandStyleAndGenre = `${bandObject.strStyle} and ${bandObject.strGenre}`;
    const bandMembers = bandObject.intMembers;
    const bandOrigin = bandObject.strCountry;

    // Left pannel information
    const bandThumbnail = bandObject.strArtistThumb;
    const bandWebsite = bandObject.strWebsite;
    const bandFacebook = bandObject.strFacebook;
    const bandTwitter = bandObject.strTwitter;

    // Lower pannel information
    const bandDescription = bandObject.strBiographyEN;

    // Select data containers
    const upperPannelContainer = document.querySelector('#ID-TBD') // Need div id
    const rightPannelContainer = document.querySelector('#info-div');
    const leftPannelContainer = document.querySelector('#image-div');
    const lowerPannelContainer = document.querySelector('#ID-TBD'); // Need div id
}