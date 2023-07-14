class Products{
    constructor(){
        this.buttunActiveClass = 'products-element__button_active';
        this.buttonTextAdd = 'Add to Cart';
        this.buttonTextDelete = 'Remove from Cart';
    }

    handleSetLocationStorage(element, id){
        const {pushProduct, products} = localStoragelUtil.setProducts(id);

        if(pushProduct){
            element.classList.add(this.buttunActiveClass);
            element.innerHTML = this.buttonTextDelete;
        } else{
            element.classList.remove(this.buttunActiveClass);
            element.innerHTML = this.buttonTextAdd;
        }
    }
    
    render(){
        const productsStore = localStoragelUtil.getProducts();

        let htmlCatalog = '';
        CATALOG.forEach(({id, name, img, price})=>{
            let buttonText = '';
            let buttonClass = '';

            if(productsStore.indexOf(id) === -1){
                buttonText = this.buttonTextAdd;
            } else {
                buttonText = this.buttonTextDelete;
                buttonClass = '' +this.buttunActiveClass;
            }
            
            htmlCatalog += `
                <li class = "products-element">
                    <span class = "products-element__name">${name}</span>
                    <img class = "products-element__img" src="${img}"/>
                    <span class = "products-element__price">  
                    ▶ ${price.toLocaleString()} USD
                    </span>
                    <button class = "products-element__button ${buttonClass}" onclick = "productsPage.handleSetLocationStorage(this, '${id}');" >
                        ${buttonText}
                    </button>
                </li>
            `;
        });

        const html = `
            <ul class = "products-container">
                ${htmlCatalog}
            </ul>
        
        `;

        ROOT_PRODUCTS.innerHTML = html;

    }
}

const productsPage = new Products();
productsPage.render();