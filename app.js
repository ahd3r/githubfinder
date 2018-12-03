// Init GitHub
const github=new GitHub;
// Init UI
const ui = new UI;

// UI components 
const valueInInput = document.querySelector('#userLogin');
const btnInNav = document.querySelector('#reloadpage');
const placeForProfile = document.querySelector('#profile');

// Event
btnInNav.addEventListener('click', ()=>{
    location.reload();
});

valueInInput.addEventListener('keyup', (e)=>{
	const userText = e.target.value;
	if(userText!==''){
		github.getUser(userText).then(data=>{
			if(data.profile.message==='Not Found'){
				if(!document.querySelector('.alert')){
					ui.showAlert('This user doesn\'t exist');
				}
			}else{
				ui.showProfile(data.profile);
				ui.showRepos(data.repos);
			}
		}).catch(err=>{
			ui.showAlert(err);
		});
	}else{
		ui.clearMainPlace();
	}
});
