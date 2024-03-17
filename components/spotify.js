const clientId = "491af524f3c14b6887f2ad99765ec833";
const code = undefined;

if(!code){
    redirectToAuthCodeFlow(clientId);
} else{
    const accessToken = await getAccessToken(clientId, code)
    const profile = await fetchProfile(accessToken);
    populateUI(profile)
}

async function redirectToAuthCodeFlow(clientId){

}

async function getAccessToken(clientId, code){

}

async function fetchProfile(token){

}

function populateUI(profile){
    
}