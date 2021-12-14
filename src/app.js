console.log("Merhaba Kodlama.io");

//js type safe değildir.
let dolarDun = 9.20;
let dolarBugun = 9.30;
{
    let dolarDun = 9.10;
}
const euroDun = 11.2;
//array
//camelCasing kelimenin ilk harfi küçük ikinci harf büyük
//PascalCasing kelimlerin ilk harfleri büyük
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredileri"];
//react
console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
     console.log("<li>"+konutKredileri[i]+"</li>");
}
console.log("</ul>")
//ctrl+k+c kopyalama
console.log(konutKredileri);