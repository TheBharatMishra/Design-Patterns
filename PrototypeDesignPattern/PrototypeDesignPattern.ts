//Prototype
const zombie = {

	eatBrains(){
		return 'yum';
	}
}

const chad = Object.create(zombie,{name:{value:'chad'}});

Object.getPrototypeOf(chad);




