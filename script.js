'use strict'


function getRepo(){
    const userInput = $("input:text").val();
    const repoURL = `https://api.github.com/users/${userInput}`;
    fetch(repoURL)
    .then(response => response.json())
    .then(responseJson => {
        if (responseJson.message === "Not Found"){
            $("#results").empty();
            $("#results").append("<p>Sorry No Results Found</p>");
        }
        else{
            displayResults(responseJson);
        }
         
    })
}

function displayResults(responseJson){
    $("#results").empty();
    $("#results").append(
        `
        <div class="img-container">
            <img src=${responseJson.avatar_url} alt="usersImage">
        </div>
        <div class="repo-container">
            <p class="repoName">${responseJson.login}</p>
            <a href=${responseJson.html_url} class="link-repo">Link to Repo</a>
        </div>
        `
    )
}


function watchForm(){
    $("form").on("submit", (e)=>{
        e.preventDefault();
        getRepo();
    })
}


$(function(){
    console.log("App is ready! Waiting for submit");
    watchForm();
})