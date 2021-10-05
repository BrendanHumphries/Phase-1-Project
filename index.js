document.addEventListener('DOMContentLoaded', () => {
    fetch('https://www.theaudiodb.com/api/v1/json/1/search.php?s=coldplay') // Replace 'coldplay' with a featured band name
    .then(resp => resp.json())
    .then(json => renderFirstBandOnly(json))
    .catch(error => console.error(`Error: ${error}`));


})

function renderFirstBandOnly(json) {
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

    // console.log(bandBanner);
    // console.log(bandName);
    // console.log(bandYear);
    // console.log(bandStyleAndGenre);
    // console.log(bandMembers);
    // console.log(bandOrigin);
    // console.log(bandThumbnail);
    // console.log(bandWebsite);
    // console.log(bandFacebook);
    // console.log(bandTwitter);
    // console.log(bandDescription);

    
}

