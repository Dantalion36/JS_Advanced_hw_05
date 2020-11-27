class MyString {
    reverse(str){
        return str.split('').reverse().join("");
    }
    ucFirst(str){
        return str[0].toUpperCase() + str.slice(1);
    }
    ucWords(str){
        return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
}
const str = new MyString();
console.log('This is the 3rd task:');
console.log(str.reverse('hello and wellcome'));
console.log(str.ucFirst('hello and wellcome'));
console.log(str.ucWords('hello and wellcome'));