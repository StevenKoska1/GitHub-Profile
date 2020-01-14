class GitHub{

    constructor(){
        this.client_ID = '1405d83a641097f0e38e';
        this.cient_secret = 'd15536e2a1f0892df7c7d8801af5d4fc36a67592';
        this.user = 'StevenKoska1';
        this.apiUrl = "https://api.github.com/users/";
        this.repos_count = 5;
        this.repos_sort = 'created asc';
    }

    async getUserData(){
        let urlProfile = `${this.apiUrl}${this.user}$client_id=${this.client_ID}&client_secret=${this.client_secret}`;
        let urlRepos = `${this.apiUrl}${this.user}/repos?per_page=?${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret=${this.client_secret}`;

        const profileResponse = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return{
            profile,
            repos
        }
    }

}