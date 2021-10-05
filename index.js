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
        artistNameItem.addEventListener('click', () => renderBand(json))
    }).catch(error => console.error(`Error: ${error}`));
    fetch('https://www.theaudiodb.com/api/v1/json/1/search.php?s=odesza') // Replace 'odesza' with a featured band name
    .then(resp => resp.json())
    .then(json => {
        const artistNameItem = document.querySelector('#artist-list').children[1];
        artistNameItem.addEventListener('click', () => renderBand(json))
    }).catch(error => console.error(`Error: ${error}`));
    fetch('https://www.theaudiodb.com/api/v1/json/1/search.php?s=daft_punk') // Replace 'daft_punk' with a featured band name
    .then(resp => resp.json())
    .then(json => {
        const artistNameItem = document.querySelector('#artist-list').children[2];
        artistNameItem.addEventListener('click', () => renderBand(json))
    }).catch(error => console.error(`Error: ${error}`));
})

function renderBand(json) {
    const bandObject = json.artists[0];
    
    // Upper pannel information
    const bandBanner = bandObject.strArtistBanner;
    
    // Right pannel information
    const bandName = `Name: ${bandObject.strArtist}`;
    const bandYear = `Formed: ${bandObject.intFormedYear}`;
    const bandStyleAndGenre = `Genre: ${bandObject.strStyle} and ${bandObject.strGenre}`;
    const bandCountry = `Origin: ${bandObject.strCountry}`;
    const bandMembers = `Number of Members: ${bandObject.intMembers}`;
    
    // Left pannel information
    const bandThumbnail = bandObject.strArtistThumb;
    const bandWebsite = bandObject.strWebsite;
    const bandFacebook = bandObject.strFacebook;
    const bandTwitter = bandObject.strTwitter;

    // Lower pannel information
    const bandDescription = bandObject.strBiographyEN;

    // Select data containers
    const upperPannelContainer = document.querySelector('#ID-TBD') // Need div id
    const rightPannelContainer = document.querySelector('#info-list');
    const leftPannelContainer = document.querySelector('#image-div');
    const lowerPannelContainer = document.querySelector('#description');

    // Render right pannel
    const nameLi = rightPannelContainer.children[0];
    nameLi.textContent = bandName;
    const yearLi = rightPannelContainer.children[1];
    yearLi.textContent = bandYear;
    const genreLi = rightPannelContainer.children[2];
    genreLi.textContent = bandStyleAndGenre;
    const countryLi = rightPannelContainer.children[3];
    countryLi.textContent = bandCountry;
    const membersLi = rightPannelContainer.children[4];
    membersLi.textContent = bandMembers;

    // Render left pannel
    const thumbnailImg = leftPannelContainer.querySelector('#thumb');
    thumbnailImg.src = bandThumbnail;
    thumbnailImg.alt = `${bandName} image`;
    const websiteLink = leftPannelContainer.querySelector('#website');
    websiteLink.href = `https://${bandWebsite}`;
    const facebookLink = leftPannelContainer.querySelector('#facebook');
    facebookLink.href = `https://${bandFacebook}`;
    const twitterLink = leftPannelContainer.querySelector('#twitter');
    twitterLink.href = `https://${bandTwitter}`;

    // Render lower pannel
    const descriptionP = lowerPannelContainer.querySelector('#description-content');
    descriptionP.innerText = bandDescription;
}