// Init GitHub
const github=new GitHub;

// UI components 
const valueInInput = document.querySelector('#userLogin');
const btnInNav = document.querySelector('#reloadpage');
const placeForProfile = document.querySelector('#profile');

btnInNav.addEventListener('click', ()=>{
    location.reload();
});

valueInInput.addEventListener('keyup', (e)=>{
		const userText = e.target.value;
    if(userText!==''){
			github.getUser(userText).then(data=>{
				if(data.profile.message==='Not Found'){
					showAlert('This user doesn\'t exist');
				}else{
					console.log(data);
				}
			});
    }else{
			while(placeForProfile.firstChild){
				placeForProfile.firstChild.remove();
			}
		}
});

function showAlert(text){
	const stuff = document.createElement('p').textContent=text;
	stuff.className='alert alert-danger';
	stuff.setAttribute('role', 'alert');
	document.querySelector('body').insertBefore(document.createElement('p'), document.querySelector('body>.container'));
	setTimeout(()=>{
		document.querySelector('.alert').remove();
	},3000);
}
