interface Card {
    suit: string
    card: number
}
interface Deck {
    suits: string[]
    cards: number[]
    createCardPicker(this: Deck): () => Card
}
let deck: Deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    // 如果 this: void，确保 this 在此独立函数中不可用，即 this 中不存在任何属性
    createCardPicker: function(this: Deck){ // 定义 this 类型为 Deck 接口类型
        return () => {
            let pickedCard = Math.floor(Math.floor(Math.random() * 52));
            let pickedSuit = Math.floor(pickedCard / 13);
            return {
                // 定义 this 类型之后，this 里的数据以及类型必须与所定义接口类型一致
                // suit: this.suits.s, // 报错，类型 string[] 上不存在属性 s
                suit: this.suits[pickedSuit],
                card: pickedCard % 13
            }
        }
    }
}
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker(); 
console.log(`card：${pickedCard.card} of ${pickedCard.suit}`);