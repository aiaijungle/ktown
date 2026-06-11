/* worddex.js — K-Town 단어 도감 데이터
   SLA 근거: 고빈도 생존 어휘 + 맥락 예문(맥락 학습 = 기억 +67%).
   각 항목: kr(한글)·r(로마자)·en(뜻)·ex(예문 한글)·exen(예문 영어).
   ⚠️ 한글 추가/수정 후 반드시 `python validate_korean.py` 실행. */
const WORDDEX=[
 {cat:"Greetings · 인사", items:[
   {kr:"안녕하세요", r:"annyeonghaseyo", en:"Hello (polite)",            ex:"안녕하세요! 만나서 반가워요.", exen:"Hello! Nice to meet you."},
   {kr:"안녕",       r:"annyeong",        en:"Hi / Bye (casual)",        ex:"안녕! 또 봐.",              exen:"Hi! See you again."},
   {kr:"감사합니다", r:"gamsahamnida",     en:"Thank you",                ex:"도와줘서 감사합니다.",       exen:"Thank you for helping."},
   {kr:"죄송합니다", r:"joesonghamnida",   en:"I am sorry",               ex:"늦어서 죄송합니다.",         exen:"Sorry I am late."},
   {kr:"잠시만요",   r:"jamsimanyo",       en:"Just a moment / Excuse me",ex:"잠시만요, 곧 갈게요.",        exen:"One moment, I will be right there."},
   {kr:"저기요",     r:"jeogiyo",          en:"Excuse me (to get attention)", ex:"저기요, 여기 주문할게요.", exen:"Excuse me, I would like to order."},
 ]},
 {cat:"Survival · 생존", items:[
   {kr:"네",         r:"ne",     en:"Yes",                       ex:"네, 맞아요.",            exen:"Yes, that is right."},
   {kr:"아니요",     r:"aniyo",  en:"No",                        ex:"아니요, 괜찮아요.",       exen:"No, it is okay."},
   {kr:"영어 하세요", r:"yeongeo haseyo", en:"Do you speak English?", ex:"혹시 영어 하세요?",     exen:"Do you happen to speak English?"},
   {kr:"이해 못 해요", r:"ihae mot haeyo", en:"I do not understand", ex:"미안해요, 이해 못 해요.", exen:"Sorry, I do not understand."},
   {kr:"도와주세요", r:"dowajuseyo", en:"Please help me",         ex:"길을 잃었어요. 도와주세요.", exen:"I am lost. Please help."},
   {kr:"화장실",     r:"hwajangsil", en:"Toilet / Restroom",      ex:"화장실 어디예요?",        exen:"Where is the restroom?"},
 ]},
 {cat:"Food · 음식", items:[
   {kr:"주세요",     r:"juseyo",       en:"Please give me",   ex:"물 주세요.",              exen:"Water, please."},
   {kr:"맛있어요",   r:"masisseoyo",   en:"It is delicious",  ex:"와, 정말 맛있어요!",       exen:"Wow, really delicious!"},
   {kr:"계산 주세요", r:"gyesan juseyo", en:"Check, please",   ex:"다 먹었어요. 계산 주세요.", exen:"We are done. Check, please."},
   {kr:"비빔밥",     r:"bibimbap",     en:"Bibimbap",         ex:"비빔밥 하나 주세요.",      exen:"One bibimbap, please."},
   {kr:"김밥",       r:"gimbap",       en:"Gimbap",           ex:"김밥 두 줄 주세요.",       exen:"Two rolls of gimbap, please."},
   {kr:"물",         r:"mul",          en:"Water",            ex:"물 한 병 주세요.",         exen:"One bottle of water, please."},
 ]},
 {cat:"Numbers · 숫자·돈", items:[
   {kr:"얼마예요",   r:"eolmayeyo",  en:"How much is it?",  ex:"이거 얼마예요?",        exen:"How much is this?"},
   {kr:"천 원",      r:"cheon won",  en:"1,000 won",        ex:"물은 천 원이에요.",       exen:"Water is 1,000 won."},
   {kr:"만 원",      r:"man won",    en:"10,000 won",       ex:"이건 만 원이에요.",       exen:"This is 10,000 won."},
   {kr:"하나",       r:"hana",       en:"One",              ex:"커피 하나 주세요.",       exen:"One coffee, please."},
   {kr:"둘",         r:"dul",        en:"Two",              ex:"표 둘 주세요.",          exen:"Two tickets, please."},
   {kr:"카드 돼요",  r:"kadeu dwaeyo", en:"Can I pay by card?", ex:"카드 돼요?",         exen:"Do you take card?"},
 ]},
 {cat:"Places · 장소·교통", items:[
   {kr:"어디예요",   r:"eodiyeyo",     en:"Where is it?",        ex:"지하철역 어디예요?",     exen:"Where is the subway station?"},
   {kr:"여기 가주세요", r:"yeogi gajuseyo", en:"Please go here (taxi)", ex:"기사님, 여기 가주세요.", exen:"Driver, please go here."},
   {kr:"지하철",     r:"jihacheol",    en:"Subway",              ex:"지하철로 갈게요.",       exen:"I will take the subway."},
   {kr:"편의점",     r:"pyeonuijeom",  en:"Convenience store",   ex:"편의점이 어디 있어요?",   exen:"Where is a convenience store?"},
   {kr:"왼쪽",       r:"oenjjok",      en:"Left",                ex:"왼쪽으로 가세요.",       exen:"Go to the left."},
   {kr:"오른쪽",     r:"oreunjjok",    en:"Right",               ex:"오른쪽이에요.",          exen:"It is on the right."},
 ]},
 {cat:"K-pop · 케이팝", items:[
   {kr:"사랑해요",   r:"saranghaeyo", en:"I love you",            ex:"오빠 사랑해요!",        exen:"I love you, oppa!"},
   {kr:"최고",       r:"choego",      en:"The best",              ex:"무대 최고였어요!",       exen:"The stage was the best!"},
   {kr:"화이팅",     r:"hwaiting",    en:"Go! / You can do it!",  ex:"화이팅!",              exen:"You got this!"},
   {kr:"콘서트",     r:"konseoteu",   en:"Concert",               ex:"콘서트 너무 좋았어요.",   exen:"The concert was so good."},
   {kr:"노래",       r:"norae",       en:"Song",                  ex:"이 노래 좋아해요.",      exen:"I like this song."},
   {kr:"응원",       r:"eungwon",     en:"Cheering / Support",    ex:"응원할게요!",           exen:"I will cheer for you!"},
 ]},
];
