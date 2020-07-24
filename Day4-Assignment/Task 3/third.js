let shoppingList = ["Bread","Jam","Soap","Shampoo"];

        //Array cloning using map function

        let shoppingBasket = shoppingList.map((x) => x);
        console.log(shoppingBasket);//Array cloned.

        //Adding additional items to cloned array
        shoppingBasket.push("Perfume","Comb");
        console.log(shoppingBasket);