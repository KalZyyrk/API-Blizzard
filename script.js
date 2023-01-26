async function getAccesToken() {
    const auth = await fetch("https://oauth.battle.net/token", {
        body: "grant_type=client_credentials",
        headers: {
            Authorization: "Basic M2VlZDdjMzRjN2I4NDJjMWJmZGQzYzZlMGI4YTJmMjA6dTc1eEtXWVYwSE5BcjRjYWpwVUU3V3pzSE5uT2hXblU=",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST"
    })
    res = await auth.json()
    return res.access_token
};

async function getInfoAccount(region, realms, name) {
    let token = '';
    token = await getAccesToken();
    //urlAPI = `https://${region}.api.blizzard.com/profile/wow/character/${realms}/${name}/achievements?namespace=profile-${region}&access_token=${token}`
    const rawData = await fetch(`https://${region}.api.blizzard.com/profile/wow/character/${realms}/${name}/achievements?namespace=profile-${region}&access_token=${token}`)
    const data = await rawData.json()
    console.log(data);
}


getInfoAccount('eu', 'archimonde', 'kaldraken')