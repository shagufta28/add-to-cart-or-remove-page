var store = document.querySelector(".added");
var remover = document.querySelector(".remove");
var click = 0;
store.addEventListener("click",function add(){
    if(click===0){
        alert("item added to the cart");
        store.textContent="Added";
        store.style.cursor = "not-allowed"; 
    }
    click++;
});
var clicked=1
remover.addEventListener("click",function rem(){
    if(clicked===1){
        alert("item removed");
        remover.style.cursor = "not-allowed"; 
    }
    
    store.textContent="Add to Cart";
    clicked++;
})

