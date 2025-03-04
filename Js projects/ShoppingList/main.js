class ShoppingList{
    constructor(itemsSelector,
                addItemBtnSelector,
                newItemInputSelector,
                storageKey = 'shoppingList'
                ){
                this.storageKey = storageKey;
                this.itemsElement = document.querySelector(itemsSelector);
                this.addItemBtnElement = document.querySelector(addItemBtnSelector);
                this.newItemInputElement = document.querySelector(newItemInputSelector);

                this.items = JSON.parse(localStorage.getItem(this.storageKey)) || [];

                this.initialise();
    }

    initialise() {
         this.addItemBtnElement.addEventListener('click', ()=> {
            const value = this.newItemInputElement.value;
            if(value){this.addItem(value);
            this.newItemInputElement.value = "";
            this.renderItems();
            this.storeItems();}
         });
        }
    
    renderItems(){
        this.itemsElement.innerHTML = '';
        if(this.items.length === 0){
            const itemElement = document.createElement('li');
            itemElement.textContent = 'No Items'
            this.itemsElement.appendChild(itemElement);
        }

        this.items.forEach((item, index) => {
            const itemListElement = document.createElement('li');
            itemListElement.textContent = item;
            const removeItemELement = document.createElement('span');
            removeItemELement.textContent = 'Remove';
            removeItemELement.classList.add('removeElement')

            removeItemELement.onclick = () => {
                this.removeItem(index);
                this.renderItems();
                this.storeItems();
            }

            itemListElement.appendChild(removeItemELement);
            this.itemsElement.appendChild(itemListElement);
        })
    };

    addItem(newItem){
        this.items.push(newItem);
    };

    removeItem(indexToRemove){
        this.items = this.items.filter((item, index) => {
            indexToRemove != index;
        })
    };

    storeItems() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.items))
    };
}

const myShoppingList = new ShoppingList('#listItems', '#addItem', '#itemInput');


myShoppingList.renderItems();