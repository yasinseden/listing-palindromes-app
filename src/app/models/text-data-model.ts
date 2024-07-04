export interface ITextDataModel {
    text: string;
    isPalindrome: boolean;
    isPurePalindrome: boolean;
}

export class TextDataModel {
    text: string;

    get isPurePalindrome(): boolean {
        return this.text === this.text.split('').reverse().join('')
    }

    get isPalindrome(): boolean {
        const cleanText = this.text.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
        return cleanText === cleanText.split('').reverse().join('')
    }
    
    get data() {
        return {
            text: this.text,
            isPalindrome: this.isPalindrome,
            isPurePalindrome: this.isPurePalindrome,
        }
    }
    
    constructor(text: string = '') {
        this.text = text;
    }



}