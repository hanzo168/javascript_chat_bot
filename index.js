var answer = [
    "なるほど！",
    "同感です！",
    "すっごい分かります！",
    "勉強になります！",
    "（笑）",
    "すごいですね！",
    "マジですか！？",
    "ふむふむ",
    "めっちゃ美味しいですよね！",
    "密はあかん（笑）",
    "グイグイきますね（笑）",
    "みんな見てますかね？",
    "今日はじめて喋ります",
    "姉さん、事件です",
    "もうご飯は食べました？",
    "そうなんですね！",
    "私も食べたいです（笑）",
    "お腹空きましたね",
    "今、何時ですか？",
    "今日も頑張りましょう！",
    "昨日、カミさんと喧嘩しました（笑）",
    "仲直りはしました？",
    "良かったです！",
    "ありがとうございます！",
    "さすがですね！",
    "なんでやねん！",
    "ありがとうございます！",
    "どないやねん（笑）",
    "休憩しましょう！",
    "ケーキが食べたいです！",
    "寒いですね",
    "ワクワクしますね！",
    "嬉しいです！",
    "シンプルに凄いですね！",
    "地味に凄いですね！",
    "ラッキーですね！",
    "それ、美味しいですよね",
    "カッコいいですね！"
];

function addChatText (val,type) {
    
    if (!val) return false;
   
    //チャットに追加するHTMLタグを生成
    var text = document.createElement ('li');
    
    //テキストを設定
    text.innerHTML = val;
    
    //赤文字のスタイルを設定
    if (type === "other") {
        text.classList.add ("message-other");
    }
    
    //追加対象となる要素を取得
    var chatWindow = document.getElementById ("chat-list");
    
    //テキストをHTMLに追加
    chatWindow.appendChild (text);
}

//送信ボタンを押した時にメッセージを送信
document.getElementById ("chat-send").addEventListener ("click", function () {
    
    var inputText = document.getElementById ("chat-input");
    
    //addChatText関数を入力値とCSSのclass判別文字列を引数として実行
    addChatText (inputText.value, "you");
    
    //入力蘭を空欄にする
    inputText.value = "";
});

//18秒毎にメッセージを送信
setInterval (function(){
    
    //ランダムの整数を設定
    var index = Math.floor (Math.random() * answer.length);
    
    //ランダムメッセージを表示
    addChatText (answer[index], "other");
}, 18000);

//初回のみ１秒後にメッセージを自動送信
setTimeout(function(){
    addChatText("こんにちは！","other");
}, 1000);
