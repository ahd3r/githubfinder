class GitHub{
    constructor(){
        this.client_id='100ec4063d5dd828bd1f';
        this.client_secret = 'b398762c36f0b4199caab89e89e147515dfe0a98';
        this.repos_count=5;
        this.repos_sort='created:asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json(); // try take away it
        const reposData = await reposResponse.json(); // try take away it
        return {
            profile:profileData,
            repos:reposData
        };
    }
}
