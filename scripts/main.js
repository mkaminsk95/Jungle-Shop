
buildGridOfFlowers("all");

function buildGridOfFlowers(display) {

    for(var i = 0; i < flowers.length; i++) {

        if(flowers[i].type === display || display === "all"){
            
            var gridContainer = document.getElementById('grid-container');
            
            var newInstance = document.createElement('div');
            var img = document.createElement('img');
            var flowerName = document.createElement('span');
            var oldPrice = document.createElement('s');
            var newPrice = document.createElement('span');
            var imageDiv = document.createElement('div');
            var addCart = document.createElement('button');
            var cartIcon = document.createElement('i');
            
            //upper part - image + button
            img.setAttribute('src', flowers[i].photoAddress);
            imageDiv.setAttribute('class', 'image');
            cartIcon.setAttribute('class', 'fa fa-cart-plus');
            
            addCart.appendChild(cartIcon);
            imageDiv.appendChild(img);
            imageDiv.appendChild(addCart);
            
            //lower part - name + prices
            flowerName.textContent = flowers[i].name;
            oldPrice.textContent = flowers[i].oldPrice+'$';
            newPrice.setAttribute('class', 'price');
            newPrice.textContent = flowers[i].newPrice+'$';
            
            newInstance.setAttribute('class', flowers[i].type);
            newInstance.appendChild(imageDiv);
            newInstance.appendChild(flowerName);
            newInstance.appendChild(document.createElement('br'));
            newInstance.appendChild(oldPrice);
            newInstance.appendChild(newPrice);
            
            gridContainer.appendChild(newInstance);    
        }
        
    }
}


function reload(display) {
    const gridContainer = document.getElementById("grid-container");
    while (gridContainer.firstChild) {
        gridContainer.firstChild.remove();
    }

    buildGridOfFlowers(display);
}