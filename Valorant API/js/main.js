//search button
document.querySelector('button').addEventListener('click', getValorantInfo)

//grab info from API 
function getValorantInfo(){
  let agentUuid = document.querySelector('input').value

fetch(`https://valorant-api.com/v1/agents/${agentUuid}`)
    .then(res => res.json())
    .then(data => {    //data means to "come back" from valorant-api
       //IMG
       document.querySelector('img').src = data.data.fullPortraitV2
      //NAME
      document.querySelector('span').innerText = data.data.displayName
      //ROLE
      document.querySelector('span.role').innerText = data.data.role.displayName

      //DESCRIPTION
      document.querySelector('p').innerText = data.data.description

      //ABILITIES
      //ability1
      document.querySelector('h4.ability1').innerText = data.data.abilities[0].displayName
      document.querySelector('p.moveset-desc1').innerText = data.data.abilities[0].description
      document.querySelector('img.ability1').src = data.data.abilities[0].displayIcon
      //ability2
      document.querySelector('h4.ability2').innerText = data.data.abilities[1].displayName
      document.querySelector('p.moveset-desc2').innerText = data.data.abilities[1].description
      document.querySelector('img.ability2').src = data.data.abilities[1].displayIcon
      //ability3
      document.querySelector('h4.ability3').innerText = data.data.abilities[2].displayName
      document.querySelector('p.moveset-desc3').innerText = data.data.abilities[2].description
      document.querySelector('img.ability3').src = data.data.abilities[2].displayIcon
      //ultimate
      document.querySelector('h4.ultimate').innerText = data.data.abilities[3].displayName
      document.querySelector('p.moveset-desc4').innerText = data.data.abilities[3].description
      document.querySelector('img.ultimate').src = data.data.abilities[3].displayIcon

       //VOICELINE
       document.querySelector('audio').src = data.data.voiceLine.mediaList[0].wave
      })
    .catch(err => {
        console.log(`error ${err}`)
    })};




