const ITEMS = [
{ id:‘n01’, emoji:‘💩’, text:‘出かける直前に\nうんこ’,                rarity:‘n’, tag:‘あるある度 MAX’ },
{ id:‘n02’, emoji:‘😭’, text:‘抱っこ→降ろした\n瞬間泣く’,            rarity:‘n’, tag:‘わかりみ深すぎる’ },
{ id:‘n03’, emoji:‘👁️’, text:‘寝たと思ったら\n復活’,                  rarity:‘n’, tag:‘これもう呪いでしょ’ },
{ id:‘n04’, emoji:‘🤔’, text:‘なぜか\n今それ聞く？’,                  rarity:‘n’, tag:‘タイミング謎すぎ’ },
{ id:‘n05’, emoji:‘🍩’, text:‘おやつは\n別腹すぎる’,                  rarity:‘n’, tag:‘ご飯は食べないのに’ },
{ id:‘n06’, emoji:‘🙈’, text:‘急に静か＝\n何かやってる’,              rarity:‘n’, tag:‘絶対やってる’ },
{ id:‘n07’, emoji:‘🏃’, text:‘風呂入る直前に\n逃走’,                  rarity:‘n’, tag:‘毎日の攻防戦’ },
{ id:‘n08’, emoji:‘🌪️’, text:‘気に入らないと\n全部投げる’,            rarity:‘n’, tag:‘フルスイングで’ },
{ id:‘n09’, emoji:‘📚’, text:‘同じ絵本を\n無限ループ要求’,            rarity:‘n’, tag:‘親の記憶力が試される’ },
{ id:‘n10’, emoji:‘🥺’, text:‘今じゃないタイミング\nで甘える’,        rarity:‘n’, tag:‘でも可愛いから許す’ },
{ id:‘n11’, emoji:‘🌙’, text:‘寝かしつけ中\n自分が先に落ちる’,        rarity:‘n’, tag:‘逆に寝かされてる’ },
{ id:‘n12’, emoji:‘🍽️’, text:‘子どもの残飯を\n食べ続ける毎日’,        rarity:‘n’, tag:‘ご飯の記憶がない’ },
{ id:‘n13’, emoji:‘📻’, text:‘Eテレの曲が\n頭から離れない’,           rarity:‘n’, tag:‘大人の方が覚えてる’ },
{ id:‘n14’, emoji:‘🤧’, text:‘子どもが治ったら\n親がダウン’,          rarity:‘n’, tag:‘順番待ちしてた？’ },
{ id:‘n15’, emoji:‘🎒’, text:‘出発5分前から\n準備が始まる’,           rarity:‘n’, tag:‘もっと早く言って’ },
{ id:‘n16’, emoji:‘👂’, text:‘何回言っても\n聞いてない’,              rarity:‘n’, tag:‘耳ついてる？’ },
{ id:‘n17’, emoji:‘🛒’, text:‘スーパーで必ず\n床に転がる’,            rarity:‘n’, tag:‘恥ずかしさの限界突破’ },
{ id:‘n18’, emoji:‘🤱’, text:‘抱っこ紐に乗った\n瞬間に寝る’,          rarity:‘n’, tag:‘外では寝るのに’ },
{ id:‘n19’, emoji:‘🌊’, text:‘お風呂の水\n全部かぶせてくる’,          rarity:‘n’, tag:‘ずぶ濡れ確定’ },
{ id:‘n20’, emoji:‘🎵’, text:‘子守唄歌ったら\n逆に元気になった’,       rarity:‘n’, tag:‘効果が逆向き’ },
{ id:‘n21’, emoji:‘🧍’, text:‘寝たと思って\n立った瞬間に起きる’,       rarity:‘n’, tag:‘センサー精度高すぎ’ },
{ id:‘n22’, emoji:‘😤’, text:‘今それやる？って\nタイミングで泣く’,     rarity:‘n’, tag:‘なんで今’ },
{ id:‘n23’, emoji:‘👀’, text:‘静かすぎて\n逆に怖い’,                  rarity:‘n’, tag:‘絶対何かやってる’ },
{ id:‘n24’, emoji:‘🔁’, text:‘なぜか同じ質問を\n5回聞いてくる’,       rarity:‘n’, tag:‘もう答えたよ’ },
{ id:‘n25’, emoji:‘😇’, text:‘外ではいい子、\n家で暴れる’,            rarity:‘n’, tag:‘外面だけ良い’ },
{ id:‘n26’, emoji:‘⚡’, text:‘寝る前だけ\n元気になる’,                rarity:‘n’, tag:‘覚醒タイム突入’ },
{ id:‘n27’, emoji:‘👨’, text:‘パパの時だけ\nテンション違う’,           rarity:‘n’, tag:‘ちょっと複雑’ },
{ id:‘n28’, emoji:‘👩’, text:‘ママじゃないと\nダメ発動’,              rarity:‘n’, tag:‘パパ頑張れ’ },
{ id:‘n29’, emoji:‘🍪’, text:‘おやつは\n無限に入る’,                  rarity:‘n’, tag:‘胃の構造が違う’ },
{ id:‘n30’, emoji:‘🍚’, text:‘ご飯は\n3口で終わる’,                   rarity:‘n’, tag:‘おやつ食べすぎでしょ’ },
{ id:‘n31’, emoji:‘😒’, text:‘急に\n「やっぱりこれじゃない」’,         rarity:‘n’, tag:‘言うのが遅い’ },
{ id:‘n32’, emoji:‘🚫’, text:‘さっきまで好きだったのに\n拒否’,         rarity:‘n’, tag:‘昨日は食べたのに’ },
{ id:‘n33’, emoji:‘👟’, text:‘靴履いた瞬間に\n脱ぐ’,                  rarity:‘n’, tag:‘出発できない’ },
{ id:‘n34’, emoji:‘🚽’, text:‘出かける準備したら\nトイレ’,             rarity:‘n’, tag:‘毎回これ’ },
{ id:‘n35’, emoji:‘⬆️’, text:‘抱っこしたら\n降りたがる’,              rarity:‘n’, tag:‘抱っこ詐欺’ },
{ id:‘n36’, emoji:‘⬇️’, text:‘降ろしたら\n抱っこ要求’,               rarity:‘n’, tag:‘どっちなの’ },
{ id:‘n37’, emoji:‘📖’, text:‘なぜか同じ絵本\nエンドレス’,            rarity:‘n’, tag:‘親の口が覚えてしまった’ },
{ id:‘n38’, emoji:‘🔄’, text:‘お気に入りは\n急に変わる’,              rarity:‘n’, tag:‘ついていけない’ },
{ id:‘n39’, emoji:‘❓’, text:‘今じゃない質問\nしてくる’,              rarity:‘n’, tag:‘あとで聞いて’ },
{ id:‘n40’, emoji:‘🎯’, text:‘急に変な\nこだわり発動’,                rarity:‘n’, tag:‘理由が謎’ },
{ id:‘n41’, emoji:‘👗’, text:‘服選びで\n無限ループ’,                  rarity:‘n’, tag:‘全部ダメらしい’ },
{ id:‘n42’, emoji:‘💨’, text:‘急に\n走り出す’,                        rarity:‘n’, tag:‘どこ行くの’ },
{ id:‘n43’, emoji:‘📡’, text:‘呼んでも無視、\n離れると来る’,           rarity:‘n’, tag:‘センサー搭載’ },
{ id:‘n44’, emoji:‘😡’, text:‘なぜか今だけ\nイヤイヤMAX’,             rarity:‘n’, tag:‘スイッチどこ’ },
{ id:‘n45’, emoji:‘✊’, text:‘自分でやる！\nからの出来ない’,           rarity:‘n’, tag:‘でも手伝えない’ },
{ id:‘n46’, emoji:‘😠’, text:‘やってあげると\n怒る’,                  rarity:‘n’, tag:‘手伝ったのに’ },
{ id:‘n47’, emoji:‘🧻’, text:‘ティッシュ\n全部出す’,                  rarity:‘n’, tag:‘一瞬の出来事’ },
{ id:‘n48’, emoji:‘📺’, text:‘リモコン\n奪われる’,                    rarity:‘n’, tag:‘返ってこない’ },
{ id:‘r01’, emoji:‘🥰’, text:‘急に\n甘えモード突入’,                  rarity:‘r’, tag:‘突然の天使化’ },
{ id:‘r02’, emoji:‘🌙’, text:‘寝る直前に\n覚醒モード’,                rarity:‘r’, tag:‘なんで今元気なの’ },
{ id:‘r03’, emoji:‘😴’, text:‘寝かしつけながら\n自分が先に寝る’,       rarity:‘r’, tag:‘毎晩の事案’ },
{ id:‘r04’, emoji:‘🎭’, text:‘親の口調を\nそのまま真似してくる’,       rarity:‘r’, tag:‘鏡かよ’ },
{ id:‘r05’, emoji:‘🌈’, text:‘泣きながら\n笑ってる’,                  rarity:‘r’, tag:‘感情が追いつかない’ },
{ id:‘r06’, emoji:‘🍭’, text:’「あとひとつだけ」\nが永遠に続く’,       rarity:‘r’, tag:‘ひとつの概念が違う’ },
{ id:‘r07’, emoji:‘🧩’, text:‘積み木を積んで\n自分で崩す’,            rarity:‘r’, tag:‘その笑顔が全て’ },
{ id:‘r08’, emoji:‘💬’, text:‘急に深すぎる\n質問をしてくる’,          rarity:‘r’, tag:‘哲学者かよ’ },
{ id:‘s01’, emoji:‘✨’, text:‘奇跡的に\nすぐ寝る’,   rarity:‘ssr’, tag:‘育児SSR’, rarityLabel:‘🌟 SSR 奇跡の一枚 🌟’ },
{ id:‘s02’, emoji:‘🍀’, text:‘最後まで\nご飯食べる’, rarity:‘ssr’, tag:‘育児SSR’, rarityLabel:‘💎 SSR 伝説級 💎’ },
{ id:‘s03’, emoji:‘👑’, text:‘一回で\n言うこと聞く’, rarity:‘ssr’, tag:‘育児SSR’, rarityLabel:‘👑 SSR 都市伝説 👑’ },
];

const STORAGE_KEY = ‘ikuji_gacha_v2’;
const TOTAL = ITEMS.length;
const POOLS = {
n:   ITEMS.filter(function(i){ return i.rarity === ‘n’; }),
r:   ITEMS.filter(function(i){ return i.rarity === ‘r’; }),
ssr: ITEMS.filter(function(i){ return i.rarity === ‘ssr’; }),
};

function storageGet(key) {
try { return localStorage.getItem(key); } catch(e) { return null; }
}
function storageSet(key, val) {
try { localStorage.setItem(key, val); } catch(e) {}
}

var count = 0;
var collected = new Set();

function loadCollection() {
var raw = storageGet(STORAGE_KEY);
try { return raw ? new Set(JSON.parse(raw)) : new Set(); } catch(e) { return new Set(); }
}
function saveCollection() {
storageSet(STORAGE_KEY, JSON.stringify(Array.from(collected)));
}

function updateCollUI() {
var got = collected.size;
var remain = TOTAL - got;
document.getElementById(‘collGot’).textContent = got;
document.getElementById(‘collTotal’).textContent = TOTAL;
document.getElementById(‘collRemain’).textContent = remain > 0 ? ‘あと’ + remain + ‘種’ : ‘全部制覇！🎉’;
document.getElementById(‘progressBar’).style.width = (got / TOTAL * 100) + ‘%’;
}

function drawGacha() {
var r = Math.random();
var rarity = r < 0.05 ? ‘ssr’ : r < 0.20 ? ‘r’ : ‘n’;
var pool = POOLS[rarity];
var item = pool[Math.floor(Math.random() * pool.length)];

var isNew = !collected.has(item.id);
if (isNew) { collected.add(item.id); saveCollection(); }

renderResult(item, isNew);
updateCollUI();

count++;
var el = document.getElementById(‘countNum’);
el.textContent = count;
el.classList.remove(‘bump’);
void el.offsetWidth;
el.classList.add(‘bump’);

var btn = document.getElementById(‘gachaBtn’);
btn.classList.add(‘spinning’);
setTimeout(function() { btn.classList.remove(‘spinning’); }, 400);
}

function renderResult(item, isNew) {
var area     = document.getElementById(‘resultArea’);
var emojiEl  = document.getElementById(‘resultEmoji’);
var textEl   = document.getElementById(‘resultText’);
var tagEl    = document.getElementById(‘resultTag’);
var badgeEl  = document.getElementById(‘rarityBadge’);
var newBadge = document.getElementById(‘newBadge’);

area.className = ‘result-area’;
badgeEl.className = ‘rarity-badge’;
tagEl.className = ‘result-tag’;
newBadge.className = ‘new-badge’;
void area.offsetWidth;

emojiEl.textContent = item.emoji;
textEl.className = ‘result-text’ + (item.rarity === ‘ssr’ ? ’ ssr-text’ : ‘’);
textEl.innerHTML = item.text.replace(/\n/g, ‘<br>’);
tagEl.textContent = item.tag;

if (item.rarity !== ‘n’) area.classList.add(‘card-’ + item.rarity);
area.classList.add(‘anim-’ + item.rarity);

badgeEl.classList.add(‘badge-’ + item.rarity);
badgeEl.textContent = item.rarity === ‘ssr’ ? item.rarityLabel
: item.rarity === ‘r’   ? ‘✦ R レア ✦’
: ‘N ふつう’;
tagEl.classList.add(‘tag-’ + item.rarity);

setTimeout(function() {
badgeEl.classList.add(‘visible’);
tagEl.classList.add(‘visible’);
}, 80);

if (isNew) {
setTimeout(function() { newBadge.classList.add(‘visible’); }, 120);
}
}

function resetCollection() {
if (!confirm(‘コレクションをリセットしますか？’)) return;
collected.clear();
saveCollection();
updateCollUI();
}

document.addEventListener(‘DOMContentLoaded’, function() {
collected = loadCollection();
updateCollUI();
document.getElementById(‘gachaBtn’).addEventListener(‘click’, drawGacha);
document.getElementById(‘resetBtn’).addEventListener(‘click’, resetCollection);
});