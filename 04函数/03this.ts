let deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function(){
        return () => {
            let pickedCard = Math.floor(Math.floor(Math.random() * 52));
            let pickedSuit = Math.floor(pickedCard / 13);
            console.log(this);
            return {
                suit: this.suits[pickedSuit],
                card: pickedCard % 13
            }
        }
    }
}
let cardPicker = deck.createCardPicker();
// 普通函数的 this 值是在调用时赋予的，箭头函数的 this 值是在函数创建时赋予的
// 普通函数：cardPicker 函数调用的上下文是全局的 Global(浏览器上的话即为 window)
// 箭头函数：cardPicker 函数调用的上下文是 deck
let pickedCard = cardPicker(); 
console.log(`card：${pickedCard.card} of ${pickedCard.suit}`);