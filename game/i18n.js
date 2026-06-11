/* i18n.js — K-Town 5개국어 (시황 설계: Layer0 한국어 불변, Layer1 UI + Layer2 뜻 번역)
   단일 소스 = worddex.js 한국어. 여기엔 UI 문구 + 단어 뜻 번역만.
   ⚠️ 한국어(한글/발음)는 절대 번역 안 함. */
const LANGS = [
  {code:'en', label:'English',  flag:'🇺🇸'},
  {code:'es', label:'Español',  flag:'🇪🇸'},
  {code:'ja', label:'日本語',    flag:'🇯🇵'},
  {code:'fr', label:'Français', flag:'🇫🇷'},
  {code:'zh', label:'中文(繁)',  flag:'🇹🇼'},
];
/* Layer 1 — UI 문구 */
const UI = {
  tagline:{en:"Learn to read Korean",es:"Aprende a leer coreano",ja:"韓国語の読み方を学ぼう",fr:"Apprends à lire le coréen",zh:"學會閱讀韓文"},
  start:{en:"Start surviving →",es:"Empieza a sobrevivir →",ja:"サバイバル開始 →",fr:"Commencer à survivre →",zh:"開始生存 →"},
  pickLang:{en:"Choose your language",es:"Elige tu idioma",ja:"言語を選んでください",fr:"Choisis ta langue",zh:"選擇你的語言"},
  next:{en:"Next →",es:"Siguiente →",ja:"次へ →",fr:"Suivant →",zh:"下一個 →"},
  back:{en:"← Back",es:"← Atrás",ja:"← 戻る",fr:"← Retour",zh:"← 返回"},
  hear:{en:"🔊 Hear it",es:"🔊 Escúchalo",ja:"🔊 聞く",fr:"🔊 Écouter",fr2:"",zh:"🔊 聽發音"},
  dexTitle:{en:"Word Dex",es:"Dex de palabras",ja:"単語図鑑",fr:"Dex de mots",zh:"單字圖鑑"},
  collected:{en:"words collected",es:"palabras coleccionadas",ja:"語 集めた",fr:"mots collectés",zh:"個單字已收集"},
  learnTiles:{en:"tap each block to hear it 🔊 — learn all to continue",es:"toca cada bloque para oírlo 🔊 — apréndelos todos",ja:"各ブロックをタップして聞こう 🔊 全部覚えたら次へ",fr:"touche chaque bloc pour l'entendre 🔊 — apprends-les tous",zh:"點擊每個方塊聽發音 🔊 全部學會後繼續"},
  shareName:{en:"📸 Share my Korean",es:"📸 Comparte mi coreano",ja:"📸 シェアする",fr:"📸 Partager",zh:"📸 分享我的韓文"},
  install:{en:"📲 Install — keep it on your phone",es:"📲 Instalar — guárdalo en tu teléfono",ja:"📲 インストール — スマホに保存",fr:"📲 Installer — gardez-le sur votre téléphone",zh:"📲 安裝 — 存到你的手機"},
  titleH1:{en:"You just landed in Korea. You can't read a thing.",es:"Acabas de llegar a Corea. No entiendes nada.",ja:"韓国に着いたばかり。何も読めない。",fr:"Tu viens d'arriver en Corée. Tu ne sais rien lire.",zh:"你剛抵達韓國，什麼都看不懂。"},
  titleLead:{en:"Signs, menus, tickets — all 한글. Learn to read your way through K-Town. Free.",es:"Letreros, menús, entradas — todo en 한글. Aprende a leer en K-Town. Gratis.",ja:"看板もメニューもチケットも全部 한글。K-Townで読めるようになろう。無料。",fr:"Panneaux, menus, billets — tout en 한글. Apprends à lire dans K-Town. Gratuit.",zh:"招牌、菜單、門票全是 한글。在 K-Town 學會閱讀。免費。"},
  whoH1:{en:"First, who are you?",es:"Primero, ¿quién eres?",ja:"まず、あなたは誰？",fr:"D'abord, qui es-tu ?",zh:"首先，你是誰？"},
  whoLead:{en:"Type your name — we'll write it in Korean for your K-Town passport.",es:"Escribe tu nombre — lo escribiremos en coreano para tu pasaporte de K-Town.",ja:"名前を入力 — K-Townパスポート用に韓国語で書きます。",fr:"Écris ton nom — on l'écrira en coréen pour ton passeport K-Town.",zh:"輸入你的名字 — 我們會用韓文寫在你的 K-Town 護照上。"},
  namePh:{en:"Your name (e.g. Jenny)",es:"Tu nombre (ej. Jenny)",ja:"あなたの名前（例：Jenny）",fr:"Ton nom (ex. Jenny)",zh:"你的名字（例如 Jenny）"},
  ppTitle:{en:"Korean Passport",es:"Pasaporte Coreano",ja:"韓国語パスポート",fr:"Passeport Coréen",zh:"韓語護照"},
  ppMsg:{en:"You just read real Korean! 🎉",es:"¡Acabas de leer coreano de verdad! 🎉",ja:"本物の韓国語を読めました！🎉",fr:"Tu viens de lire du vrai coréen ! 🎉",zh:"你真的讀懂韓文了！🎉"},
  sharePp:{en:"📸 Share my passport",es:"📸 Comparte mi pasaporte",ja:"📸 パスポートをシェア",fr:"📸 Partager mon passeport",zh:"📸 分享我的護照"},
  dexBtn:{en:"📖 Word Dex",es:"📖 Dex de palabras",ja:"📖 単語図鑑",fr:"📖 Dex de mots",zh:"📖 單字圖鑑"},
  nextMission:{en:"Next mission →",es:"Siguiente misión →",ja:"次のミッション →",fr:"Mission suivante →",zh:"下一個任務 →"},
  seeNext:{en:"See what's next 🔒",es:"Ver lo que sigue 🔒",ja:"次を見る 🔒",fr:"Voir la suite 🔒",zh:"看看接下來 🔒"},
  pwH1:{en:"Unlock all of K-Town",es:"Desbloquea todo K-Town",ja:"K-Townを全部解放",fr:"Débloque tout K-Town",zh:"解鎖整個 K-Town"},
  pwLead:{en:"You can already read concert signs, prices & a Korean menu. Unlock subway, café, 노래방, K-pop lyrics & 20+ daily-life missions.",es:"Ya sabes leer letreros, precios y un menú coreano. Desbloquea metro, café, 노래방, letras de K-pop y +20 misiones.",ja:"もうコンサートの看板・値段・韓国語メニューが読めます。地下鉄・カフェ・노래방・K-pop歌詞や20以上のミッションを解放。",fr:"Tu sais déjà lire panneaux, prix et menu coréen. Débloque métro, café, 노래방, paroles K-pop et 20+ missions.",zh:"你已能讀懂招牌、價格和韓文菜單。解鎖地鐵、咖啡廳、노래방、K-pop歌詞及20+個任務。"},
  pwUnit:{en:"Pay once · yours forever · all missions + audio",es:"Paga una vez · tuyo para siempre · misiones + audio",ja:"一度の支払い · 永久にあなたのもの · 全ミッション+音声",fr:"Payez une fois · à vous pour toujours · missions + audio",zh:"一次付費 · 永久擁有 · 所有任務+語音"},
  pwBuy:{en:"Unlock everything",es:"Desbloquear todo",ja:"すべて解放",fr:"Tout débloquer",zh:"解鎖全部"},
  replay:{en:"Replay free demo",es:"Repetir demo gratis",ja:"無料デモをもう一度",fr:"Rejouer la démo",zh:"重玩免費試玩"},
  backupBtn:{en:"☁️ Back up my progress",es:"☁️ Guardar mi progreso",ja:"☁️ 進行状況を保存",fr:"☁️ Sauvegarder ma progression",zh:"☁️ 備份我的進度"},
  backupTitle:{en:"Back up your progress ☁️",es:"Guarda tu progreso ☁️",ja:"進行状況を保存 ☁️",fr:"Sauvegarde ta progression ☁️",zh:"備份你的進度 ☁️"},
  backupBlurb:{en:"Save your words & streak — continue on any device and get new free missions.",es:"Guarda tus palabras y racha — continúa en cualquier dispositivo y recibe misiones gratis.",ja:"単語と連続記録を保存 — どの端末でも続けられ、新しい無料ミッションも届きます。",fr:"Sauvegarde tes mots et ta série — continue sur tout appareil et reçois de nouvelles missions.",zh:"儲存你的單字與連續紀錄 — 在任何裝置繼續，並獲得免費新任務。"},
  consent:{en:"I agree to receive my backup link & new-mission emails. Unsubscribe anytime.",es:"Acepto recibir mi enlace de respaldo y correos de misiones. Cancela cuando quieras.",ja:"バックアップリンクと新ミッションのメール受信に同意します。いつでも解除可能。",fr:"J'accepte de recevoir mon lien de sauvegarde et des emails de missions. Désinscription à tout moment.",zh:"我同意接收備份連結與新任務郵件。隨時可取消。"},
  emailPh:{en:"your@email.com",es:"tu@correo.com",ja:"your@email.com",fr:"ton@email.com",zh:"your@email.com"},
  backupGo:{en:"Save my progress",es:"Guardar progreso",ja:"保存する",fr:"Sauvegarder",zh:"儲存進度"},
  backupOk:{en:"✓ Saved! Check your email.",es:"✓ ¡Guardado! Revisa tu correo.",ja:"✓ 保存しました！メールをご確認ください。",fr:"✓ Sauvegardé ! Vérifie tes emails.",zh:"✓ 已儲存！請查看你的郵件。"},
  later:{en:"Maybe later",es:"Quizás luego",ja:"あとで",fr:"Plus tard",zh:"稍後再說"},
};
/* Layer 2 — 단어 뜻 번역 (worddex.js의 kr 기준). 한글/발음/예문원문은 그대로. */
const MEAN = {
  "안녕하세요":{en:"Hello (polite)",es:"Hola (formal)",ja:"こんにちは（丁寧）",fr:"Bonjour (poli)",zh:"你好（敬語）"},
  "안녕":{en:"Hi / Bye (casual)",es:"Hola / Adiós (informal)",ja:"やあ／じゃあね",fr:"Salut (informel)",zh:"嗨／再見（隨意）"},
  "감사합니다":{en:"Thank you",es:"Gracias",ja:"ありがとうございます",fr:"Merci",zh:"謝謝"},
  "죄송합니다":{en:"I am sorry",es:"Lo siento",ja:"すみません",fr:"Je suis désolé(e)",zh:"對不起"},
  "잠시만요":{en:"Just a moment / Excuse me",es:"Un momento / Perdón",ja:"少々お待ちを／すみません",fr:"Un instant / Excusez-moi",zh:"稍等／不好意思"},
  "저기요":{en:"Excuse me (to get attention)",es:"Disculpe (para llamar)",ja:"すみません（呼びかけ）",fr:"Excusez-moi (pour appeler)",zh:"不好意思（叫人）"},
  "네":{en:"Yes",es:"Sí",ja:"はい",fr:"Oui",zh:"是的"},
  "아니요":{en:"No",es:"No",ja:"いいえ",fr:"Non",zh:"不是"},
  "영어 하세요":{en:"Do you speak English?",es:"¿Hablas inglés?",ja:"英語を話せますか？",fr:"Parlez-vous anglais ?",zh:"你會說英語嗎？"},
  "이해 못 해요":{en:"I do not understand",es:"No entiendo",ja:"分かりません",fr:"Je ne comprends pas",zh:"我聽不懂"},
  "도와주세요":{en:"Please help me",es:"Ayúdame, por favor",ja:"助けてください",fr:"Aidez-moi, s'il vous plaît",zh:"請幫幫我"},
  "화장실":{en:"Toilet / Restroom",es:"Baño",ja:"トイレ",fr:"Toilettes",zh:"洗手間"},
  "주세요":{en:"Please give me",es:"Por favor, deme",ja:"ください",fr:"Donnez-moi, s'il vous plaît",zh:"請給我"},
  "맛있어요":{en:"It is delicious",es:"Está delicioso",ja:"美味しいです",fr:"C'est délicieux",zh:"很好吃"},
  "계산 주세요":{en:"Check, please",es:"La cuenta, por favor",ja:"お会計お願いします",fr:"L'addition, s'il vous plaît",zh:"請結帳"},
  "비빔밥":{en:"Bibimbap",es:"Bibimbap",ja:"ビビンバ",fr:"Bibimbap",zh:"拌飯"},
  "김밥":{en:"Gimbap",es:"Gimbap",ja:"キンパ",fr:"Gimbap",zh:"紫菜飯卷"},
  "물":{en:"Water",es:"Agua",ja:"水",fr:"Eau",zh:"水"},
  "얼마예요":{en:"How much is it?",es:"¿Cuánto cuesta?",ja:"いくらですか？",fr:"C'est combien ?",zh:"多少錢？"},
  "천 원":{en:"1,000 won",es:"1.000 wones",ja:"1,000ウォン",fr:"1 000 wons",zh:"1,000韓元"},
  "만 원":{en:"10,000 won",es:"10.000 wones",ja:"1万ウォン",fr:"10 000 wons",zh:"1萬韓元"},
  "하나":{en:"One",es:"Uno",ja:"一つ",fr:"Un",zh:"一個"},
  "둘":{en:"Two",es:"Dos",ja:"二つ",fr:"Deux",zh:"兩個"},
  "카드 돼요":{en:"Can I pay by card?",es:"¿Puedo pagar con tarjeta?",ja:"カードは使えますか？",fr:"Puis-je payer par carte ?",zh:"可以刷卡嗎？"},
  "어디예요":{en:"Where is it?",es:"¿Dónde está?",ja:"どこですか？",fr:"Où est-ce ?",zh:"在哪裡？"},
  "여기 가주세요":{en:"Please go here (taxi)",es:"Vaya aquí, por favor",ja:"ここへお願いします",fr:"Allez ici, s'il vous plaît",zh:"請到這裡"},
  "지하철":{en:"Subway",es:"Metro",ja:"地下鉄",fr:"Métro",zh:"地鐵"},
  "편의점":{en:"Convenience store",es:"Tienda 24h",ja:"コンビニ",fr:"Supérette",zh:"便利商店"},
  "왼쪽":{en:"Left",es:"Izquierda",ja:"左",fr:"Gauche",zh:"左邊"},
  "오른쪽":{en:"Right",es:"Derecha",ja:"右",fr:"Droite",zh:"右邊"},
  "사랑해요":{en:"I love you",es:"Te amo",ja:"愛してます",fr:"Je t'aime",zh:"我愛你"},
  "최고":{en:"The best",es:"El mejor",ja:"最高",fr:"Le meilleur",zh:"最棒"},
  "화이팅":{en:"Go! / You can do it!",es:"¡Ánimo! / ¡Tú puedes!",ja:"ファイト！／頑張れ！",fr:"Courage ! / Tu peux le faire !",zh:"加油！"},
  "콘서트":{en:"Concert",es:"Concierto",ja:"コンサート",fr:"Concert",zh:"演唱會"},
  "노래":{en:"Song",es:"Canción",ja:"歌",fr:"Chanson",zh:"歌曲"},
  "응원":{en:"Cheering / Support",es:"Apoyo / Animar",ja:"応援",fr:"Soutien",zh:"應援"},
};
/* Layer 2 — 예문 번역 (worddex의 exen 대체). 현재 ES 완성, JA/FR/ZH는 AITF 배치 예정(없으면 영어 fallback). */
const EX = {
  "안녕하세요":{es:"¡Hola! Encantado de conocerte.",ja:"こんにちは！お会いできて嬉しいです。",fr:"Bonjour ! Ravi de te rencontrer.",zh:"你好！很高興認識你。"},
  "안녕":{es:"¡Hola! Hasta pronto.",ja:"やあ！またね。",fr:"Salut ! À bientôt.",zh:"嗨！再見囉。"},
  "감사합니다":{es:"Gracias por ayudar.",ja:"手伝ってくれてありがとうございます。",fr:"Merci de ton aide.",zh:"謝謝你的幫忙。"},
  "죄송합니다":{es:"Perdón por llegar tarde.",ja:"遅れてすみません。",fr:"Désolé d'être en retard.",zh:"抱歉我遲到了。"},
  "잠시만요":{es:"Un momento, ahora voy.",ja:"少々お待ちを、すぐ行きます。",fr:"Un instant, j'arrive tout de suite.",zh:"稍等，我馬上來。"},
  "저기요":{es:"Disculpe, quisiera pedir.",ja:"すみません、注文したいです。",fr:"Excusez-moi, je voudrais commander.",zh:"不好意思，我要點餐。"},
  "네":{es:"Sí, así es.",ja:"はい、その通りです。",fr:"Oui, c'est exact.",zh:"是的，沒錯。"},
  "아니요":{es:"No, está bien.",ja:"いいえ、大丈夫です。",fr:"Non, ça va.",zh:"不，沒關係。"},
  "영어 하세요":{es:"¿Habla inglés por casualidad?",ja:"もしかして英語を話せますか？",fr:"Parlez-vous anglais, par hasard ?",zh:"請問你會說英語嗎？"},
  "이해 못 해요":{es:"Perdón, no entiendo.",ja:"ごめんなさい、分かりません。",fr:"Désolé, je ne comprends pas.",zh:"抱歉，我聽不懂。"},
  "도와주세요":{es:"Estoy perdido. Ayúdeme, por favor.",ja:"道に迷いました。助けてください。",fr:"Je suis perdu. Aidez-moi, s'il vous plaît.",zh:"我迷路了，請幫幫我。"},
  "화장실":{es:"¿Dónde está el baño?",ja:"トイレはどこですか？",fr:"Où sont les toilettes ?",zh:"洗手間在哪裡？"},
  "주세요":{es:"Agua, por favor.",ja:"お水ください。",fr:"De l'eau, s'il vous plaît.",zh:"請給我水。"},
  "맛있어요":{es:"¡Vaya, qué rico!",ja:"わあ、本当に美味しい！",fr:"Waouh, c'est vraiment délicieux !",zh:"哇，真的很好吃！"},
  "계산 주세요":{es:"Ya terminamos. La cuenta, por favor.",ja:"食べ終わりました。お会計お願いします。",fr:"On a fini. L'addition, s'il vous plaît.",zh:"我們吃完了，請結帳。"},
  "비빔밥":{es:"Un bibimbap, por favor.",ja:"ビビンバを一つください。",fr:"Un bibimbap, s'il vous plaît.",zh:"請給我一份拌飯。"},
  "김밥":{es:"Dos rollos de gimbap, por favor.",ja:"キンパを二本ください。",fr:"Deux rouleaux de gimbap, s'il vous plaît.",zh:"請給我兩條紫菜飯卷。"},
  "물":{es:"Una botella de agua, por favor.",ja:"お水を一本ください。",fr:"Une bouteille d'eau, s'il vous plaît.",zh:"請給我一瓶水。"},
  "얼마예요":{es:"¿Cuánto cuesta esto?",ja:"これはいくらですか？",fr:"C'est combien, ça ?",zh:"這個多少錢？"},
  "천 원":{es:"El agua cuesta 1.000 wones.",ja:"お水は1,000ウォンです。",fr:"L'eau coûte 1 000 wons.",zh:"水是1,000韓元。"},
  "만 원":{es:"Esto cuesta 10.000 wones.",ja:"これは1万ウォンです。",fr:"Ça fait 10 000 wons.",zh:"這個是1萬韓元。"},
  "하나":{es:"Un café, por favor.",ja:"コーヒーを一つください。",fr:"Un café, s'il vous plaît.",zh:"請給我一杯咖啡。"},
  "둘":{es:"Dos entradas, por favor.",ja:"チケットを二枚ください。",fr:"Deux billets, s'il vous plaît.",zh:"請給我兩張票。"},
  "카드 돼요":{es:"¿Aceptan tarjeta?",ja:"カードは使えますか？",fr:"Vous prenez la carte ?",zh:"可以刷卡嗎？"},
  "어디예요":{es:"¿Dónde está la estación de metro?",ja:"地下鉄の駅はどこですか？",fr:"Où est la station de métro ?",zh:"地鐵站在哪裡？"},
  "여기 가주세요":{es:"Conductor, vaya aquí, por favor.",ja:"運転手さん、ここへお願いします。",fr:"Chauffeur, allez ici, s'il vous plaît.",zh:"司機，請到這裡。"},
  "지하철":{es:"Tomaré el metro.",ja:"地下鉄で行きます。",fr:"Je vais prendre le métro.",zh:"我要搭地鐵。"},
  "편의점":{es:"¿Dónde hay una tienda 24h?",ja:"コンビニはどこにありますか？",fr:"Où y a-t-il une supérette ?",zh:"便利商店在哪裡？"},
  "왼쪽":{es:"Ve a la izquierda.",ja:"左へ行ってください。",fr:"Allez à gauche.",zh:"請往左走。"},
  "오른쪽":{es:"Está a la derecha.",ja:"右側です。",fr:"C'est à droite.",zh:"在右邊。"},
  "사랑해요":{es:"¡Te amo, oppa!",ja:"オッパ、愛してます！",fr:"Oppa, je t'aime !",zh:"歐巴，我愛你！"},
  "최고":{es:"¡El escenario fue lo mejor!",ja:"ステージ最高でした！",fr:"La scène était au top !",zh:"舞台超棒的！"},
  "화이팅":{es:"¡Tú puedes!",ja:"ファイト！",fr:"Tu vas y arriver !",zh:"加油！"},
  "콘서트":{es:"El concierto estuvo buenísimo.",ja:"コンサートとても良かったです。",fr:"Le concert était génial.",zh:"演唱會超讚的。"},
  "노래":{es:"Me gusta esta canción.",ja:"この歌が好きです。",fr:"J'aime cette chanson.",zh:"我喜歡這首歌。"},
  "응원":{es:"¡Te apoyaré!",ja:"応援します！",fr:"Je te soutiens !",zh:"我會為你應援！"},
};
function exT(kr){const o=EX[kr];return o&&o[getLang()]||'';}
/* Layer 1/2 — 미션 지시문 번역 (영어는 MISSIONS 원본, 여기엔 es/ja/fr/zh. HTML·한글 보존) */
const MT = {
 'busan-bexco':{
   title:{es:`Llega al <span class="a">concierto</span>`,ja:`<span class="a">コンサート</span>へ行こう`,fr:`Va au <span class="a">concert</span>`,zh:`前往<span class="a">演唱會</span>`},
   lead:{es:`El taxista pregunta a dónde ir. El lugar es <b>BEXCO</b> en Busan (부산). Aprende esto y lee el letrero.`,ja:`タクシーが行き先を聞きます。会場はプサン(부산)の<b>BEXCO</b>。これを覚えて看板を読もう。`,fr:`Le taxi demande où aller. Le lieu est <b>BEXCO</b> à Busan (부산). Apprends, puis lis le panneau.`,zh:`計程車問你要去哪。地點是釜山(부산)的<b>BEXCO</b>。學會後讀懂招牌。`},
   q:[{es:`Toca el letrero que dice <b>벡스코</b> (BEXCO)`,ja:`<b>벡스코</b>（BEXCO）と読む看板をタップ`,fr:`Touche le panneau qui dit <b>벡스코</b> (BEXCO)`,zh:`點選寫著<b>벡스코</b>(BEXCO)的招牌`}]
 },
 'convenience-store':{
   title:{es:`Compra <span class="a">agua</span>`,ja:`<span class="a">お水</span>を買おう`,fr:`Achète de l'<span class="a">eau</span>`,zh:`買<span class="a">水</span>`},
   lead:{es:`Tienes sed. Encuentra el <b>편의점</b> (tienda 24h) y lee el precio del agua (물).`,ja:`喉が渇いた。<b>편의점</b>（コンビニ）を見つけて、お水(물)の値段を読もう。`,fr:`Tu as soif. Trouve le <b>편의점</b> (supérette) et lis le prix de l'eau (물).`,zh:`你口渴了。找到<b>편의점</b>(便利商店)，讀出水(물)的價格。`},
   q:[{es:`¿Cuál letrero es el <b>편의점</b> (tienda 24h)?`,ja:`どれが<b>편의점</b>（コンビニ）の看板？`,fr:`Quel panneau est le <b>편의점</b> (supérette) ?`,zh:`哪個招牌是<b>편의점</b>(便利商店)？`},
      {es:`El agua (물) cuesta <b>천 원</b>. Toca <b>천원</b> (1.000 wones)`,ja:`お水(물)は<b>천 원</b>。<b>천원</b>（1,000ウォン）をタップ`,fr:`L'eau (물) coûte <b>천 원</b>. Touche <b>천원</b> (1 000 wons)`,zh:`水(물)是<b>천 원</b>。點選<b>천원</b>(1,000韓元)`}]
 },
 'restaurant-food':{
   title:{es:`Pide <span class="a">comida coreana</span>`,ja:`<span class="a">韓国料理</span>を注文しよう`,fr:`Commande de la <span class="a">cuisine coréenne</span>`,zh:`點<span class="a">韓國料理</span>`},
   lead:{es:`Te mueres de hambre. Lee el menú y pide como un local — los platos favoritos de Corea + palabras del día a día.`,ja:`お腹ぺこぺこ。メニューを読んで地元の人のように注文しよう — 韓国の人気料理＋毎日使う言葉。`,fr:`Tu meurs de faim. Lis le menu et commande comme un local — les plats préférés de Corée + les mots du quotidien.`,zh:`你餓壞了。讀懂菜單，像當地人一樣點餐 — 韓國最受歡迎的料理＋每天會用的詞。`},
   q:[{es:`Quieres <b>비빔밥</b> (bibimbap). Tócalo en el menú.`,ja:`<b>비빔밥</b>（ビビンバ）が食べたい。メニューでタップ。`,fr:`Tu veux du <b>비빔밥</b> (bibimbap). Touche-le sur le menu.`,zh:`你想要<b>비빔밥</b>(拌飯)。在菜單上點選。`},
      {es:`Para pedir, dices "por favor, deme". Toca <b>주세요</b>.`,ja:`注文するときは「ください」。<b>주세요</b>をタップ。`,fr:`Pour commander, on dit « donnez-moi ». Touche <b>주세요</b>.`,zh:`點餐時說「請給我」。點選<b>주세요</b>。`}]
 },
};
function mt(id,f){const o=MT[id]&&MT[id][f];return o&&o[getLang()]||'';}
function mtQ(id,i){const o=MT[id]&&MT[id].q&&MT[id].q[i];return o&&o[getLang()]||'';}
function getLang(){try{return localStorage.getItem('ktownLang')||'en';}catch(e){return 'en';}}
function setLang(c){try{localStorage.setItem('ktownLang',c);}catch(e){}}
function t(key){const o=UI[key];return o?(o[getLang()]||o.en):key;}
function mean(kr){const o=MEAN[kr];return o?(o[getLang()]||o.en):'';}
