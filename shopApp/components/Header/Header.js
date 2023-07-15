class Header{
    hendleOpenCardPage(){
        cardPage.render();
    }
    
    render(counter){
        const html = `
            <div class = "header-container"> 
                <div class = "header-counter" onclick = "headerPage.hendleOpenCardPage();"> 🛒${counter}</div>
            </div>
        
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();

const productsStore = localStoragelUtil.getProducts();
headerPage.render(productsStore.length);