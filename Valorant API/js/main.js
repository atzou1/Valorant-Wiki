//search button
document.querySelector('button').addEventListener('click', getValorantInfo)

//grab info from API 
function getValorantInfo() {
  let agentUuid = document.querySelector('input').value


  let thingy = [{ "name": "John" }, { "name": "Rose" }];

  fetch(`https://valorant-api.com/v1/agents?isPlayableCharacter=true`)
    .then(res => res.json())
    .then(data => {    //data means to "come back" from valorant-api
      console.log(data.data)
      //loops through to find displayName
      for (let i = 0; i < data.data.length; i++) { 
        // if below is true, a match has been found
        if (data.data[i].displayName.toLowerCase() === agentUuid.toLowerCase()) { //[i] is used in data to loop through each index in data 
          //IMG
          document.querySelector('img').src = data.data[i].fullPortraitV2
          //NAME
          document.querySelector('span').innerText = data.data[i].displayName
          //ROLE
          document.querySelector('span.role').innerText = data.data[i].role.displayName

          //DESCRIPTION
          document.querySelector('p').innerText = data.data[i].description

          //ABILITIES
          //ability1
          document.querySelector('h4.ability1').innerText = data.data[i].abilities[0].displayName
          document.querySelector('p.moveset-desc1').innerText = data.data[i].abilities[0].description
          document.querySelector('img.ability1').src = data.data[i].abilities[0].displayIcon
          //ability2
          document.querySelector('h4.ability2').innerText = data.data[i].abilities[1].displayName
          document.querySelector('p.moveset-desc2').innerText = data.data[i].abilities[1].description
          document.querySelector('img.ability2').src = data.data[i].abilities[1].displayIcon
          //ability3
          document.querySelector('h4.ability3').innerText = data.data[i].abilities[2].displayName
          document.querySelector('p.moveset-desc3').innerText = data.data[i].abilities[2].description
          document.querySelector('img.ability3').src = data.data[i].abilities[2].displayIcon
          //ultimate
          document.querySelector('h4.ultimate').innerText = data.data[i].abilities[3].displayName
          document.querySelector('p.moveset-desc4').innerText = data.data[i].abilities[3].description
          document.querySelector('img.ultimate').src = data.data[i].abilities[3].displayIcon

          //VOICELINE
          document.querySelector('audio').src = data.data[i].voiceLine.mediaList[0].wave
          // Below is a sentinel value that stops the loop because a match was found
          i = data.data.length + 1;
        }
      }
    }).catch(err => {
      console.log(`error ${err}`)
    })
};




