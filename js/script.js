let blocsProduit = document.getElementsByClassName('bloc-produit');


let filtres = document.querySelectorAll('.list-group-item a, .bloc-produit a')
console.log(filtres);

for (let i = 0; i < filtres.length; i++) {
    filtres[i].addEventListener('click', function (e) {

        if (i != 0) {
            e.preventDefault();
        }


        console.log(this.textContent);


        for (let y = 0; y < blocsProduit.length; y++) {
  
            console.log(blocsProduit[y].getAttribute('data-categorie'));
            if (blocsProduit[y].getAttribute('data-categorie') == this.textContent /*|| this.textContent == 'Tous les produits'*/) {
                blocsProduit[y].style.display = 'block';
            } else {
                blocsProduit[y].style.display = 'none';
            }
        }
    });
}