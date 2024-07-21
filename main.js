let inputText = document.querySelector(' .get-repos input');
let getButton = document.querySelector('.get-button');
let showData = document.querySelector('.show-data');

getButton.onclick = function(){
    getRepos();
}


function getRepos(){
if(inputText.value===''){
showData.innerHTML="<span>Please Write GitHup Repos UserName</span>"
}else{
fetch(`https://api.github.com/users/${inputText.value}/repos`)
.then((response)=>response.json())
.then((repos)=>{
    showData.innerHTML='';
    repos.forEach((repo)=>{
        let mainDiv= document.createElement('div');
        let mainDivText= document.createTextNode(repo.name);
        mainDiv.appendChild(mainDivText);
        showData.appendChild(mainDiv);
        let URL = document.createElement('a');
        let URLText = document.createTextNode('visit');
        URL.href=`https://github.com/${inputText.value}/${repo.name}`;
        URL.setAttribute('target', '_blank');
        URL.appendChild(URLText);
        mainDiv.appendChild(URL);
        let starsSpan = document.createElement('span');
        let starsSpanText =document.createTextNode(` Stars ${repo.stargazers_count}`)
   starsSpan.appendChild(starsSpanText);
   mainDiv.appendChild(starsSpan);
   mainDiv.className="repo-box";
    })
})
}
}