document.addEventListener('DOMContentLoaded', () => {
    // Fetch and automatically render first band in display section of page
    fetch('https://www.theaudiodb.com/api/v1/json/1/search.php?s=james_blake')
    .then(resp => resp.json())
    .then(json => renderBand(json))
    .catch(error => console.error(`Error: ${error}`));

    // Fetch data for each of the three featured artists and then render them when clicked
    fetch('https://www.theaudiodb.com/api/v1/json/1/search.php?s=james_blake')
    .then(resp => resp.json())
    .then(json => {
        const artistNameItem = document.querySelector('#artist-list').children[0];
        artistNameItem.addEventListener('click', () => renderBand(json))
    }).catch(error => console.error(`Error: ${error}`));
    fetch('https://www.theaudiodb.com/api/v1/json/1/search.php?s=odesza')
    .then(resp => resp.json())
    .then(json => {
        const artistNameItem = document.querySelector('#artist-list').children[1];
        artistNameItem.addEventListener('click', () => renderBand(json))
    }).catch(error => console.error(`Error: ${error}`));
    fetch('https://www.theaudiodb.com/api/v1/json/1/search.php?s=daft_punk')
    .then(resp => resp.json())
    .then(json => {
        const artistNameItem = document.querySelector('#artist-list').children[2];
        artistNameItem.addEventListener('click', () => renderBand(json))
    }).catch(error => console.error(`Error: ${error}`));

    // Add an event listener to the submit button and add the comment to the comment list
    renderComment();
})

function renderBand(json) {
    const bandObject = json.artists[0];
    
    // Upper pannel information
    const bandBanner = bandObject.strArtistBanner;
    
    // Right pannel information
    const bandName = `Name: ${bandObject.strArtist}`;
    const bandYear = `Formed: ${bandObject.intFormedYear}`;
    const bandStyleAndGenre = `Genre: ${bandObject.strGenre}`;
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
    const upperPannelContainer = document.querySelector('#banner');
    const rightPannelContainer = document.querySelector('#info-list');
    const leftPannelContainer = document.querySelector('#image-div');
    const lowerPannelContainer = document.querySelector('#description');

    // Render upper pannel
    const bannerimg = upperPannelContainer.querySelector('img');
    bannerimg.src = bandBanner;
    
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

    // Clear comments list
    document.querySelector('#comment-list').innerHTML = '';
}

function renderComment() {
    const commentForm = document.querySelector('form');
    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const commentContainer = document.querySelector('#comment-list')
        const inputName = commentForm.querySelector('#name-box').value;
        const inputComment = commentForm.querySelector('#comment-box').value;
        const newCommentBox = document.createElement('li');
        newCommentBox.className = 'comment';
        const commentName = document.createElement('p');
        commentName.className = 'comment-name';
        const commentContent = document.createElement('p');
        commentContent.className = 'comment-content';
        commentName.textContent = `${inputName}:`;
        commentContent.textContent = inputComment;
        newCommentBox.append(commentName, commentContent);
        commentContainer.append(newCommentBox);
        commentForm.reset();

    })
}