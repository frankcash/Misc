// countVowels
// firstLetter
// capitalize
// wordCount
// vowels


export function firstLetter(foo){
	const bar = x => x.length > 0 ? x.charCodeAt(0) : "";
	return bar(foo);
}

export function countVowels(input){
	const count = input.match(/[aeiou]/gi).length;
	return count;
}

export function capitalize(foo){

	const fee = bar => bar[0].toUpperCase() + bar.substring(1);
	return fee(foo);
}

export function wordCount(input){
	const count = input.match(/\S+/g).length;
	return count;
}

export const vowels = ["a", "e", "i", "o", "u"];
