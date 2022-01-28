import {TOKEN} from './token.js'
const R_TOKEN = "token "+TOKEN;
const urlGitHub = 'https://api.github.com/users/';
const requestOptions = {
    method: 'GET',
    headers: {
        authorization: R_TOKEN
    }
}
const resumeLanguages = {};
const iconLanguagens = {
    'C#': `<img class='language_icon' src="./assets/icons/icons8-c-afiado-logotipo.svg" alt="c#">`,
    'C++': `<img class='language_icon' src="./assets/icons/icons8-c++.svg" alt="c++">`,
    'CSS': `<img class='language_icon' src="./assets/icons/icons8-css3.svg" alt="css">`,
    'GO': `<img class='language_icon' src="./assets/icons/icons8-golang.svg" alt="go">`,
    'HTML': `<img class='language_icon' src="./assets/icons/icons8-html-5.svg" alt="html">`,
    'JAVASCRIPT': `<img class='language_icon' src="./assets/icons/icons8-javascript.svg" alt="javascrip">`,
    'JAVA': `<img class='language_icon' src="./assets/icons/icons8-logo-java-coffee-cup.svg" alt="java">`,
    'C': `<img class='language_icon' src="./assets/icons/icons8-programação-c.svg" alt="c">`,
    'PYTHON':`<img class='language_icon' src="./assets/icons/icons8-python.svg" alt="c">`
}
document.querySelector('#form_submit').addEventListener('click',(e)=>{
    selectUser();
    e.preventDefault();
})

function selectUser(){
    const user = document.querySelector('#form_name').value
    hiddenElement('.form_select_name');
    request(urlGitHub+user,requestOptions,createUserInfo);
  //  createResumeLanguages()
}
function hiddenElement(element){
    document.querySelector(element).style.display = 'none';
}

function createProjects(data){
    const urlRepos = data.repos_url;
    request(urlRepos,requestOptions,createProjectsCards);
}
function createProjectsCards(arrayData){
    console.log(arrayData)
    arrayData.forEach(element => {
        createCardProject(element)
    });
}

function createUserInfo(data){
    console.log(data)
    createImg(data);
    createBio(data);
    createSocialMedia(data);

    createProjects(data);

    createFollowers(data);
}

function createCardProject(data){
    const name = data.name;
    const description = data.description;
    const dataCreation = data.created_at;
    const urlLanguages = data.languages_url;
    //languages url
    request(urlLanguages,requestOptions,(languages)=>{
        const card = document.createElement("div");
        card.setAttribute('class','card_projects');
        card.setAttribute('id',data.id)
        card.innerHTML = `
            <h3>${name}</h3>
        `
        
        if(description) card.innerHTML += `<p>${description}</p><ul>`
        else card.innerHTML += `<p></p><ul>`
        Object.keys(languages).forEach((item) => {

            card.innerHTML += `<li>${iconLanguagens[item.toUpperCase()] != undefined ? iconLanguagens[item.toUpperCase()] :`<img class='language_icon' src="./assets/icons/default.svg" alt="Default">` }<strong>${item}</strong> : ${languages[item]} </li>`
            if(resumeLanguages.hasOwnProperty(item)){
                resumeLanguages[item] += parseInt(languages[item]);
            }else{
                resumeLanguages[item] = parseInt(languages[item]);
            }
        });
        card.innerHTML += '</ul>'
    
        if(description || Object.keys(languages).length != 0) document.querySelector('.user_projects').append(card);
        console.log(languages)
    });
       
}  
follower.avatar_url != undefined ?  follower.avatar_url :
function createResumeLanguages(){
    const list = document.createElement('ul')
    const divResume = document.querySelector('.user_resume_languages')
    Object.keys(resumeLanguages).forEach(item => {
    list.innerHTML += `<li>${iconLanguagens[item.toUpperCase()] != undefined ? iconLanguagens[item.toUpperCase()] : `<img src="./assets/icons/default.svg" alt="Default">` }<strong>${item}</strong> : ${list[item]} </li>`
    })
    
    divResume.append(list);
    
}
function createFollowers(data){
    const urlFollowers = data.followers_url;
    const sectionFollowers = document.querySelector('.user_followers');
    request(urlFollowers,requestOptions,(array)=>{
        array.forEach((follower)=>{
            sectionFollowers.innerHTML+= `
            <div class='img_followers' id=${follower.id}>
                <a href="https://github.com/${follower.login}">
                    <img src=${follower.avatar_url} alt=${follower.login}>
                </a>
            </div>`
        })
    })
}
function createImg(data){
    const urlPhoto = data.avatar_url
    const name = data.name
    const photo = document.querySelector('.user_photo');
    photo.innerHTML += `<img src="${urlPhoto}" alt="${name}">`;
}
function createBio(data){
    const bio = data.bio;
    const name = data.name;
    const bioDiv = document.querySelector('.user_bio');
    bioDiv.innerHTML += `<h1>${name}</h1>`;
    bioDiv.innerHTML += `<p>${bio}</p>`;
}
function createSocialMedia(data){
    const linkedin = data.blog;
    const email= data.email;
    const twitter = data.twitter_username;
    const socialMediaDiv = document.querySelector('.user_social_media');
    socialMediaDiv.innerHTML += `<ul>`
    
    if(linkedin) socialMediaDiv.innerHTML += `<li><a href=${linkedin}>Linkedin</a></li>`
    if(email) socialMediaDiv.innerHTML += `<li><a href=${email}>Email</a></li>`
    if(twitter) socialMediaDiv.innerHTML += `<li><a href=${twitter}>Twitter</a></li>`
    
    socialMediaDiv.innerHTML += `</ul>`;
}
function request(url,requestOptions,callback){
    try{
        fetch(url,requestOptions)
        .then(function(response){
            if(!response.ok) throw new Error("Erro ao executar requisição")
            return response.json()
        })
        .then(function(data){
            if(!data){
                alert('Não a informações valida')
            }else if(callback){
                callback(data)
            }
        })
        .catch(function(error){
            alert(error.message)
        })
    }catch(e){
        console.log(e);
    }
}
