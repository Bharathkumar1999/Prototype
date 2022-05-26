const product={
    brand:"Tata",
    bodyType:"SUV",
    fuelType:"Diesel"
};

let p1=Object.create(product);
console.log(p1);


function Product(type){
    this.type=type;
    this.brand="Tata";
    (this.bodyType="SUV"),(this.fuelType="Diesel");
}

Product.prototype.discount= function(){
    console.log("20% discount");
}

Product.prototype.changeType= function(type){
    this.type=type;
}

Product.prototype.price= 500000;

let P1 = new Product("Land Rover");
//P1.type="Nano";
let P2= new Product("Nexon");
//P1.discount();
//console.log(P1);
P1.changeType("Nano");
console.log(P1);
console.log(P2);