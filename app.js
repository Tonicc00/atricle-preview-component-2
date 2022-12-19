const arrow = document.querySelector('.share-img');
const socialMedia = document.querySelector('.active-icons');
const userInfoArea = document.querySelector('.user');
const userInfo = document.querySelector('.user-info');

function hideShare(){
    if(userInfo.style.visibility = 'hidden' 
    && userInfoArea.classList.contains('active')
    && socialMedia.style.display == 'flex'){
        arrow.addEventListener('click', () => {    
            userInfo.style.visibility = 'visible';
            userInfoArea.classList.remove('active');
            socialMedia.style.display = 'none';
            showShare();
        })
    }
}

function showShare() {      
    arrow.addEventListener('click', () => {
        userInfo.style.visibility = 'hidden';
        userInfoArea.classList.add('active');
        socialMedia.style.display = 'flex';
        hideShare();
    })
}

hideShare();
showShare();