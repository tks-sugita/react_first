# セクション4 モダンJavaScriptの機能に触れる学習のまとめ

## 変数の宣言

var  
再定義、再代入可能な古い書き方、現在の開発環境では使用されていない。  
  
const
constは、あとから書き換えることのできない変数を定義する書き方
再代入、再定義ともに不可という制約があります。
文字列数字は設定したら変更できないが、オブジェクトや配列は変更できる
オブジェクトの宣言はconstしか使わない
※上記のことは正確には定数という

let
後で書き換えることが可能な定義の書き方
再代入は可能で再定義は不可という制約がある

## テンプレートリテラル
テンプレートリテラルは、javascriptの構文,
ダブルクォーテションやシングルクォーテションの代わりにバッククォーテーションで囲む
shift+@

例）コンソール
┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳
const name = "Tom"
const age = 25

const introduction = `私の名前は${name}、${age}歳です`
console.log(introduction)
// 私の名前はTom、25歳です と出力される
┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻

## アロー関数
アロー関数
functionを省略し定義する構文
例文）
┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳
const countNum = (num) => {
  console.log(num)
}
countNum(1)
┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻

例文）
┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳┳
const func = (num1,num2) => {
 return  num1 + num2
}

console.log(func(10,20));

30
┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻┻

## 分割代入

### オブジェクトの場合
const myProfile ={
  name : "杉田"
  age:"26"
};

const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
console.log{message};

### 分割代入化
const myProfile ={
  name : "杉田"
  age:"26"
};
const { name , age } = myProfile ;
const message2 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message2);

### 配列でも可能
const myProfile = ['杉田',28];

const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
console.log(message3);

### 配列の分割代入化
const myProfile = ['杉田',28];
const[name,age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message4);


## デフォルト値
const sayHello = (name )　=> console.log(`こんにちは!${name}さん!`);
sayHello();

undifindが表示される

const sayHello = (name )　=> console.log(`こんにちは!${name}さん!`);
sayHello();

undifindが表示される

const sayHello = (name="ゲスト" )　=> console.log(`こんにちは!${name}さん!`);
sayHello();

変数のあとに=""は初期値の指定をしている


## スプレッド構文
const arr1 = [1,2];
console.log(arr1);
console.log(...arr1);順番に処理して展開してくれる

表示結果
[1,2]
1 2

const arr1 = [1,2];
const sumFunc = (num1,num2) => console.log(num1+num2);
sumFunc(arr1[0], arr[1]);
sumFunc(...arr1);順番に処理

表示結果
3
3

const arr2=[1,2,3,4,5];
const [num1,num2,...arr3]=arr2;
console.log(num1); //分割代入
console.log(num2); //分割代入
console.log(arr3); //スプレッド構文

表示結果
1
2
3,4,5


### 配列のコピー結合

const arr4 =[10,20]
const arr5 =[30,40]

const arr6 = [...arr4];
console.log(arr6);

表示結果
[10,20]

const arr7 =[...arr4, ...arr5];//２つの配列を結合
console.log(arr7);
表示結果
[10,20,30,40]

const arr8 = arr4;
console.log(arr8);
表示結果
[10,20]

配列操作した場合に影響が出る。

arr8[0]=100;
console.log(arr4);
これをやってしまうと元の配列も変わってしう

## for文(map,filter)
### for
for(let i = 0; i < 10; i++){
  console.log(i);
}
iが0から9まで1ずつ増えて表示する

const nameArr = ["田中","山田","杉田"]
for (let index = 0; index < nameArr.length; index++){
 console.log(nameArr[index]);
}

表示結果
田中
山田
杉田

テンプレート文字列
const nameArr = ["田中","山田","杉田"]
for (let index = 0; index < nameArr.length; index++){
 console.log(`${index+1}番目は${nameArr[index]}です');
}

表示結果
1番目は田中です
2番目は山田です
3番目は杉田です

### mapを使うと
const nameArr = ["田中","山田","杉田"]
const nameArr2 = nameArr.map((name)=>{
  return name;リターンに基づいて新しく配列を生成
})

表示結果
 ["田中","山田","杉田"]


const nameArr = ["田中","山田","杉田"]
nameArr.map((name) => console.log(name));

表示結果
田中
山田
杉田

第2引数を入れると配列の番号が取得できる
const nameArr = ["田中","山田","杉田"]
nameArr.map((name,index) => console.log(`${index + 1}番目は${name}です`));

表示結果
1番目は田中です
2番目は山田です
3番目は杉田です

### 実践
const nameArr = ["田中","山田","杉田"]
const newNameArr = nameArr.map((name)=>{
  if (name === "杉田"){
    return name
} else{
    return `${name}さん`
}
})

console.log(newNameArr);
表示結果 neNameArrの配列として
田中さん
山田さん
杉田

### filter(ある条件に一致したものだけを配列として返す)

const numArr = [1,2,3,4,5];
const newNumArr = numArr.filter((num) => {
  return num % 2 ===1 //２で割った値が1の場合
})

console.log(newNumArr);

表示結果
1,3,5


## 三項演算子?

### ある条件 ? 条件がtrueのとき : 条件がfalseのとき
const val1 = 1 < 0 ? 'trueです'  :  'falseです' ;
console.log(val1);

表示結果
falseです


const checkSum = (num1 ,num2) => {
  return num1 + num2 >100 ? '100を超えています。' : '許容範囲です。' }

console.log(checkSum(50,60));

表示結果
100を超えています。

## 論理演算子
### 論理演算子注意事項
||は左がfalseなら右側を返す
左を見てfalseであれば右を見るので、どちらかがという判定になる

&&は左がtrueであれば右がわを返す
左を見てtrueであれば右をみるので、かつという判定になる
