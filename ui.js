class UI{
  constructor(){
    this.mainPlace=document.querySelector('#profile');
  }

  showProfile(user){
    const profileDateOfCreated=new Date(user.created_at);
    let month;
    switch(profileDateOfCreated.getMonth()+1){
      case 1:
        month='Jan';
        break;
      case 2:
        month='Feb';
        break;
      case 3:
        month='Mar';
        break;
      case 4:
        month='Apr';
        break;
      case 5:
        month='May';
        break;
      case 6:
        month='Jun';
        break;
      case 7:
        month='Jul';
        break;
      case 8:
        month='Aug';
        break;
      case 9:
        month='Sep';
        break;
      case 10:
        month='Oct';
        break;
      case 11:
        month='Nov';
        break;
      case 12:
        month='Dec';
        break;
    }
    this.mainPlace.innerHTML=`
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
        </div>
        <div class="col-md">
          <p class="badge badge-primary">Public Repos: ${user.public_repos}</p>
          <p class="badge badge-info">Public Gists: ${user.public_gists}</p>
          <p class="badge badge-success">Followers: ${user.followers}</p>
          <ul class="list-group">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${profileDateOfCreated.getDate()} ${month} ${profileDateOfCreated.getFullYear()}</li>
          </ul>
        </div>
      </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }

  showAlert(text){
    const stuff = document.createElement('p');
    stuff.textContent=text;
    stuff.className='alert alert-danger';
    stuff.setAttribute('role', 'alert');
    document.querySelector('body').insertBefore(stuff, document.querySelector('body>.container'));
    setTimeout(()=>{
      document.querySelector('.alert').remove();
    },3000);
  }

  clearMainPlace(){
    while(this.mainPlace.firstChild){
			this.mainPlace.firstChild.remove();
		}
  }

  showRepos(repos){
    let output='';
    repos.forEach((repo)=>{
      output+=`
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <p class="badge badge-primary">Stars: ${repo.stargazers_count}</p>
            <p class="badge badge-primary">Watchers: ${repo.watchers_count}</p>
            <p class="badge badge-primary">Forks: ${repo.forks_count}</p>
          </div>
        </div>
      </div>
      `;
    });
    document.querySelector('#repos').innerHTML=output;
  }
}
