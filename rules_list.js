
// modify rules here
/*
_ expands to match anything lazily
@ matches japanese text greedily, and not punctuation
*/
var replace_rules = [

	"@のターンの場合 => if it's $1 turn",
	"@のターンに => during $1 turn、 ",
	"@終了時まで => until the end of $1",
	"@終了時 => at the end of $1",
	"@が登場している => your $1 is in the Arena",
	"自分の_すべてが_である => all your $1 are $2",
	"(エクストラキャラ)でない => non-$1",
	
	"このセットカードが_にセットされた場合 => when this is Set to $1",
	"@が_の能力によって_から_になった場合 => when $1 becomes $4 from $3 due to an ability of a $2",
	"このキャラが登場かレベルアップかオートレベルアップした場合 => when this Character Enters or Levels Up or Auto-Level Ups",
	"自分のカードの_で_カードが_に置かれた場合 => when one of your card's $1 puts $2 card to $3",
	"@が_のカードの効果やコストで_から_に置かれた場合 => when $1 is put from $3 to $4 due to one of $2 card's Ability or cost",
	"自分が_ のイベントカードを使用した場合 => when you use a $1 Event card",
	"自分のカードの_で_のこのカードが_から_になった場合 => when this card in the $2 becomes $4 from $3 due to your card's $1",
	"相手の_がカードの_によって_から別の領域に移動した場合 => when your Opponent's $1 leaves the $3 due to a $2",
	"@にセットカードがセットされた場合 => when $1 has a Set card set to it",
	"@がアタックキャラに選ばれた場合 => when $1 Attacks",
	"@がガードキャラに選ばれた場合 => when $1 Guards",
	"@がアタックキャラやガードキャラに選ばれた場合 => when $1 Attacks or Guards",
	"をガードキャラに選ぶことができない => can't Guard",
	"をアタックキャラに選ぶことができない =>  can't Attack",
	"@にダメージが与えられる場合 => when $1 is dealt Damage",
	"@がバトルによるダメージをバトル相手に与えた場合 => when $1 deals Battle Damage to a Battle Opponent",
	"@にバトル以外によるダメージが与えられる場合 => when $1 are dealt outside of Battle Damage",
	"@が_を持つ_とバトルする場合 => when $1 Battles with a $2 carrying $3",
	"@が登場かレベルアップした場合 => when $1 Enters or Levels up",
	"@が登場した場合 => when $1 Enters", 
	"@が_以外で登場した場合 => when $1 Enters except for $2",
	"@が_で_から_になった場合 => when $1 becomes $4 from $3 due to $2",
	"@が_で_になった場合 => when $1 becomes $3 due to $2",
	"自分が_でカードを引いた場合 => when you draw a card due to $1",

	"自分が次に_のコストとして自分の_を_に置く場合 => your next $1 cost's $2 to $3 cost",
	"その枚数を_減少する => reduce the amount of cards by $1",

	"このセットカードが_にセットされている場合 => while this is set to a $1",
	"この能力はこのカードが_にある場合 => while this card is in $1",
	"@が_枚以上あり => while $1 has $2 or more cards",
	"@が_に参加している場合 => while $1 is in $2",
	"このキャラにセットカードがセットされている場合 => while this card is set with a Set card",

	
	"このセットカードがセットされている_は_以外のセットカード_枚を追加でセットできる => the $1 that this is Set to can have an additional $3 Set cards not named $2 can be set to this",
	// due to the @が_で rule below, this must go first
	
	"@ZONEに_がない場合 => if there isn't any $3 in $1 $2",
	"@でZONEに置いたカードすべてが_の場合 => if all the cards put to $2 by $1 are $3",
	"自分の_に_カードが_枚以上ある場合 => if your $1 has $3 or more $2 cards",
	"@にしたカードが_の場合 => if the card put to $1 was $2",
	"自分の@の_が_以上の場合 => if your $1's $2 is $3 or higher",
	"_のカードが_で_に置かれた場合 => if cards from $1 are put to $3 due to $2",
	"自分の_すべてが_の場合 => if all your $1 are $2",	
	"@のアリーナに_が登場している場合 => if $1 has a $2 in the Arena",
	"_が_で登場した場合 => if $1 Entered via $2",
	"自分の_が登場している場合 => if you have a $1 in the Arena",
	"@が_枚以上ある場合 => if $1 has $2 or more cards",
	"@体数が_体数より少ない場合 => if the number of $1 is less than the number of $2",
	"@が_で => if $1 is $2",
	"このキャラ以外の_が_体以上登場していて => if you have $2 or more other $1",
	"@が_の場合 => if $1 is $2",
	"それ以外の場合 => in the other case",
	
	"@開始時 => at the start of $1",

	"以下_つから_つを選ぶ => choose $2 of the $1 below",

	"@終了時まで => until the end of $1",

	"かわりに => instead ",

	"は?攻撃力と耐久力が_上昇(する|し) =>  gets +$1/+$1",
	"@の攻撃力か耐久力を選び、_上昇(する|し) => $1 gets +$2/+０ or +０/+$2",
	"は?攻撃力か耐久力が_上昇(する|し) =>   gets +$1/+０ or +０/+$1",
	"は?攻撃力が_上昇(する|し) =>  gets +$1/+０",
	"は?耐久力が_上昇(する|し) =>  gets +０/+$1",
	"は?攻撃力が_減少(する|し) =>  gets -$1/-０",
	"は?耐久力が_減少(する|し) =>  gets -０/-$1",


	
	"@のこのキャラを_キャラに選ぶことができる => this character can $2 while $1",
	"@は_を得る => $1 gets $2",
	"_を得る => and gets $1",
	"自分の手札の_すべての【_】を以下に変更する => all $1 in your Hand have their 【$2】 replaced by the following",


	"目標のキャラ_体に自分の【同OS】 のフレンドのレベルを合計した数値分ダメージを与える => deal damage equal to the sum of your Friend's Levels to target $1 Characters",
	"相手に_ダメージを与える => deal $1 damage to your Opponent",
	"このダメージはバトルによるダメージとして扱う => treat this damage as Battle Damage",
	"@すべてのスキルすべてを無効にする => negate all the skills of all of $1",
	"@のスキルすべてを無効にする => negate all skills of $1",
	"バトル相手が_すべてを無効にする => negate all of the Battle Opponent's $1",
	"バトル相手のスキルすべてを無効にする => negate all skills of the Battle Opponent",

	"@が受けているダメージすべてを回復する => remove all damage from $1",
	"バトルによるダメージを受けず => can't take Battle damage",
	"バトルによるダメージを与えることができない => can't deal Battle damage",
	"@は_によるダメージを与えることができない => $1 can't deal $2 damage",
	"@すべてに_ダメージを与える => deal $2 damage to all of $1",
	"@(.)体に_ダメージを与える => deal $3 damage to $2 $1",
	"(.)ダメージを与える => deal $1 damage",
	"そのダメージを_の体数分減少する => reduce that damage by the number of $1",
	"そのダメージを_減少する => reduce that damage by $1",

	"このカードは_にしか使用できない => this card can only be used during $1",
	"この能力は_でも発動する => this Ability activates while $1",
	"この能力は_で発動する => this Ability activates while in $1",
	"この能力はバトルに参加していても発動できる => this Ability may be activated while in Battle",
	"この能力は_でも発動できる => this ability can be used while $1",
	"発動することができる => this Ability can be used",
	"自分は_の能力を発動することができない => you can't use $1's ability",
	"@は自分の_の効果で_にならない => $1 can't become $3 due to $2's Ability",
	"自分は_の_を発動することができない => your $1's $2 abilities can't be used",

	"自分のデッキの上から_枚を見て => look at the top $1 cards of your Deck",
	"自分のデッキの上から_枚までを見て => look at up to the top $1 cards of your Deck",
	"そのカードをデッキの上か下に戻す => put that card on the top or bottom of the Deck",
	"それらのカードを好きな順番でデッキの上に戻す => return those cards back in the order of your choice",
	
	"目標の_(.)枚を_に戻す => return $2 target $1 to $3",
	"@のセットカード_枚を_に戻す => return $2 Set cards from $1 to $3",
	"このセットカードを_に戻す => return this Set card to $1",
	"@にセットされているこのセットカードを_に戻す => return this Set card set to a $1 to $2",
	"@にセットされているセットカード_枚を_に戻す => return $2 Set cards Set to $1 to $3",
	"自分の@のネームを持たない_ のセットカード１枚を_を支払い_にセットする => set １ $2 Set card from your $1 with a different Name to a $4 while paying its $3",
	"@のこのキャラを_キャラに選ぶことができる => this Character can $2 while $1",

	"@がセットされていたCHARにセットする => and Set it to the $2 $1 was Set to",

	"自分の手札を_の体数分控え室に置く => discard a card for each of $1",
	"自分の手札_枚と手札のこのカードを控え室に置く => discard this card and $1 other card",
	"手札のこのカードを控え室に置(き|く) => discard this card",
	"自分の手札_カード(.)枚を控え室に置(き|く) => discard $2 $1 cards",// from your Hand",
	"自分の手札_枚を控え室に置(き|く) => discard $1 cards",// from your Hand", 
	"自分の手札を_枚控え室に置く => discard $1 cards", // fix for typos
	
	"自分のZONEの_以外の_セットカード_枚を_を支払い => pay the $5 for $4 $3 Set cards from your $1 that isn't $2",

	"@の(アリーナ)の_すべてを_に置く => put $1 $3 in the $2 to $4", 
	"自分の_(.)枚と_のカード_枚を_に置く => put $2 cards from your $1 and $4 cards from your $3 to $5",
	"自分の_(.)枚と手札のこのカードを_に置(き|く|いて) => put this card and $2 cards from your $1 to $3",
	"@のフレンド_体を_に置(き|く|いて) => put $2 of $1 Friends to $3",
	"自分のZONEの_(.)枚を_に置(き|く|いて) => put $3 $2 from your $1 to $4",
	"自分のZONE(.)枚を_に置いて => put $2 cards from your $1 to $3",
	"自分の_のカード(.)枚を_に置(き|く|いて) => put $2 cards from $1 to $3",
	"自分の_(.)枚を_に置(き|く|いて) => put $2 from $1 to $3",
	"@のカード_枚を_に置いてもよい => you may put $2 cards from $1 to $3",
	"@(.)枚までを_に置く => put up to $2 of $1 to $3",
	"@(.)枚を_に置く => put $2 $1 to $3",
	"@を_に置く => put $1 to $2",

	"_(効果)を含む_すべてを無効にする => negate all $1 $3 $2",
	"@すべてが_すべてを無効に(する|して|し) => negate all $2 of $1",
	"_(.)体が_すべてを無効に(する|して|し) => negate all $3 of $2 $1",
	
	"@すべてを_から_に(する|して|し) => put all of $1 from $2 to $3",
	"@のこのカードを_から_に(する|して|し) => put this card from $2 to $3 in the $1",
	"自分のキャラ_体を_から_に(する|して|し) => put $1 of your Characters from $2 to $3",
	"_(.)枚を_から_に(する|して|し) => put $2 of $1 from $3 to $4",
	"@(.)体を_から_に(する|して|し) => put $2 of $1 from $3 to $4",
	"@(.)枚までを_から_に(する|して|し) => put up to $2 of $1 from $3 to $4",
	"目標の_(.)体を_に(する|して|し) => put target $2 of $1 to $3",
	"@(.)枚を_にする => put $2 $1 to $3",
	"_(.)体を_に(する|して|し) => put $2 $1 to $3 ",
	"@を_から_に(する|して|し) => put $1 from $2 to $3",
	"_から_に(する|して|し) => $1 to $2 this",
	"@を_に(する|して) => put $1 to $2",
	
	"@を_に_で戻して => restore $1 to $3 in the $2",
	
	"@(て?)もよい => you may $1",

	"@(.)体の『_』を無効にする => $2 $1 loses 『$3』",
	"@は_を失う => $1 loses $2",

	"自分のZONEの_(.)枚を_に加(える|えて?) => add $3 $2 from your $1 to $4",

	"このカードを_に_で戻す => return this card to the $1 $2",
	"@(.)(体|枚)を_に戻す => return $2 of $1 to $4",
	"@カード_(体|枚)を_に戻す => return $2 of $1 cards to $4",

	"カード_枚を引き => draw $1 cards",
	"カード_枚を引く => draw $1 cards",
	"カード_枚を引いて => draw $1 cards",
	
	"目標のバトルに参加している_CHAR(.)体は => target $3 $1 in Battle $2",
	"自分の_(.)体 => $2 of your $1",
	"目標の_(.)体 => target $2 of $1",
	
	"@は_が相手のZONEの_の枚数以下のキャラ([^。、]+) => $1 $5 with Characters with $2 less than the number of $4 in $3",

	"は発動しない =>  can't activate ",
	"@のこのカードは_の_以外で_にできない => this card in the $1 can only be put to $4 by the $3 for $2",
	"@の手札のキャラカードすべては_を失う => $1 Character cards in their Hands lose $2",
	"このカードは_に_枚しか入れることができない => you may only put $2 of this card in your $1",
	"@すべては_で耐久力が減少しない => $2 can't reduce the Defense of $1",
	"@は_でカードを引くことができない => $1 can't draw cards due to $2",
	"@は_のカードを_に加えることができない => $1 can't add cards from $2 to $3",
	"@は_することができない => $1 may not use $2",
	"@は_できない => $1 can't $2",
	
	"このセットカードがセットされている_CHAR => the $1 $2 this is set to",
	
	"このターン中に登場したCHAR => $1 that entered this turn ",
	"が減少する =>  reducing ",
	"が上昇する =>  boosting ",
	"受けている =>  recieved ",
	"耐久力が減少する => Defense reducing ",
	"攻撃力と耐久力両方が上昇する => Attack and Defense boosting ",
	"受けている攻撃力や耐久力が上昇する効果 => received Attack and Defense boosting abilites ",
	"以下の能力 => the following Ability ",
	"すべての領域・すべての状態 => in all zones and all states",
	"そうした場合 => if so ",
	"追加で => in addition ",
	"その後 => afterwards ",
	"このキャラ以外の自分の => your other ",
	"セットカードがセットされている => Setted ",
	"この => this ",
	"その => that ",
	"攻撃力 => Attack",
	"耐久力 => Defense",
	"を持つ =>  carrying ",
	"を持たない => -less ",
	"@キャラに選ばれているキャラ => $1ing Character ",
	"キャラカード => Character cards ",
	"キャラ => Characters ",
	"自分 => your ",
	"カード => cards ",
	"登場 => Entry",
	"使用 => Use",
	"維持 => Maintenence",
	"自動 => Auto",
	"追加ネーム => Additional Name",
	"永続 => Continuous",
	"バトル相手 => the Battle Opponent ",
	"バトル => Battle ",
	"参加中OK => Battle OK ",
	"パートナー => Partner",
	"同OS => Same OS",
	"同作品 => Same Work",
	"スキル => Skill ",
	"乱入 => Tresspass",
	"先制攻撃 => First Attack",
	"先制防御 => First Defense",
	"貫通 => Penetrate",
	"お互い => everyone's ",
	"相手 => your Opponent's ",
	"効果 => Abilities ",
	"お互い => everyone's ",
	"ターン => Turn ",
	"ガード => Guard ",
	"アタック => Attack ",
	"セット => Set ",
	"コスト => Cost ",
	"アリーナ => Arena",
	"手札 => Hand ",
	"エクストラ => Extra ",
	"デッキ => Deck ",
	"控え室 => Waiting Room",
	"イベント => Event ",
	"バックヤード => Backyard ",
	"スタンド => Stand",
	"レスト => Rest",
	"リバース => Reverse",
	"裏 => Face Down",
	"表 => Face Up",
	"フレンド => Friends ",
	"メイン => Main ",
	"ビギニング => Beginning ",
	"フェイズ => Phase ",
	"レベル => Level ",
	"アップ => Up ",
	"目標 => target ",
	"your_すべて => all your $1",
	
	
	"か =>  or ",
	"や =>  or ",
	"と =>  and ",
	"の =>  ",
	"を =>  ",
	"を含む => ",
	

	"( ( )+) =>  ", // replaces 2 spaces in a row with just 1
	"、 => , ",
	" 】 => 】",
	" , => ,",

	// grammars
	" ing => ing",
	", _ in addition => , in addition $1",
	"everyone's can't => nobody can",
	"a _ Characters => a $1 Character",
	"(that|this) (Character|Abilitie|Set card)s => $1 $2",
	"that the => that",
	"of your Friend([^'s]) => of your Friends$1",
	"your _ Friend([^'s]) => your $1 Friends$2",
	"Characters gains => Characters gain",
	"non-Extra Characters => non-Extra Character",
	"Opponent's can't => Opponent can't",
	"Character Level => Character's Level",
	"this cards is => this card is",
	"(restore|put) this cards => $1 this card",
	"other your => other",
	"to a your => to one of your",
	"card Ability => card's Ability",
	"(Waiting Room) cards => $1's cards",
	"target １ of your Opponent's => target Opponent's",
	"target Opponent's (Character|Friend)s => target Opponent's $1",
	"１ target (Character|Set card)s => target $1",
	"target １ of (Character|Friend)s => target $1",
	"target １ of _ Characters => target $1 Character",
	"when during your turn => during your turn, when",
	"when your Characters => when one of your Characters",
	"１ your => １ of your",
	", (choose) => , and $1",
	"Set to _ Characters => Set to a $1 Character",
	"due to _ cards Abilities => due to a $1 card Ability",
	"(Character|Event)s cards => Character cards",
	"Characters enters => Character enters",
	"(Partner|card)s? Ability => $1's Ability",
	"(１) (card|Character)s => $1 $2",
	"(１) (# card)s => $1 $2",
	"of your _ (card)([^s]) => of your $1 $2s$3",
	"more card([^s]) => more cards$1",
	"top １ card => top card",
	"when your (Opponent's)? Characters becomes => when one of your $1 Characters becomes",
	"instead gets => instead they get",
	"all your Characters is => all your Characters are",
	"^the _ Characters this is => the $1 Character this is",
	"a ([aeiou]) => an $1",
	"(a|your) (Partner|Friend)s? (「_」) => your $3 $2",
	"Abilitie([^s]) => Ability$1",
	"your or your Opponent's (Partner) => your $1 or your Opponent's $1",
	"( ( )+) =>  ", // replaces 2 spaces in a row with just 1

	" => "
];
