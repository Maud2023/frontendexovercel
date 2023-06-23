fetch('backendexovercel.vercel.app/year') // je vais chercher dans le backend
	.then(response => response.json())
	.then(data=> {
 document.querySelector("#year").textContent = data.year // je fais document querySelector pour envoyer dans html, 
 //puis je fais .year car je dois afficher une objet, si c'était tableau j'aurai fais []
        console.log(data);})


