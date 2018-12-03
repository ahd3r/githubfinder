class GitHub{
    constructor(){
        this.client_id='9a545b3b419d59479fc4';
        this.client_secret = 'cdbb7980286dc9c137926291273076d66bebed58';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();
        return {
					profile:profileData
				}
    }
}
