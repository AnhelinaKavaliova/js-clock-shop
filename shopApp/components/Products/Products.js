class Products{
    
    render(){

        let htmlCatalog = '';
        CATALOG.forEach(({id, name, img, price})=>{
            
            htmlCatalog += `
                <li>
                    <span>${name}</span>
                    <img src="${img}"/>
                    <span>${price}</span>
                    <button>Add to Basket</button>
                </li>
            `;
        });

        const html = `
            <u>
                ${htmlCatalog}
            </ul>
        
        `;

        ROOT_PRODUCTS.innerHTML = html;

    }
}

const productsPage = new Products();
productsPage.render();