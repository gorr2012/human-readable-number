module.exports = function toReadable (number) {
    if (number === 0) return 'zero';

    let arrToTwenty = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
	let arrAfterTwenty = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

	let hundreds = '';
	let tens = '';
    let ones = '';

	for(let i = 1; i < arrToTwenty.length; i++){
		if( ( number % 100 === i && number % 100 < 20 )  || ( number % 10 === i && number % 10 <= 10 )){
			ones = arrToTwenty[i];
		}
		
		if((number - number % 100) / 100 === i && number % 10 < 10){
			hundreds = arrToTwenty[i] + ' hundred';
		}
	}

	for(let i = 1; i < arrAfterTwenty.length+2; i++){
		if((number % 100 - number % 10)/10 === i && number % 100 >= 20){
			tens = arrAfterTwenty[i-2];
		}
    }

    if(number < 20) return `${ones}`;

    if(number < 100 && number >= 20 && number % 10 === 0) return `${tens}`;
    if(number < 100 && number >= 20 && number % 10 !== 0) return `${tens} ${ones}`;

    if(number % 100 === 0 && number >= 100) return `${hundreds}`;
    if(number % 10 === 0 && number >= 100 && number % 100 !== 10) return `${hundreds} ${tens}`;
    if(number % 100 < 20 && number >= 100 && number % 100 !== 0) return `${hundreds} ${ones}`;

    if(number >= 100) return `${hundreds} ${tens} ${ones}`;
}
