// ── BOWDIE'S CHOPHOUSE — PAIRING MAP ──
// Source of truth for Set The Stage simulator pairing logic.
// Each entry: { name, category, profile[], excellent[], strong[], works[], avoid[] }
// 'category' values: 'steak' | 'starter' | 'soup-salad' | 'main' | 'side' | 'dessert' |
//                    'cocktail' | 'wine-sparkling' | 'wine-white' | 'wine-red' | 'wine-dessert' |
//                    'bourbon' | 'rye' | 'scotch' | 'irish' | 'japanese' | 'canadian' |
//                    'tequila' | 'mezcal' | 'vodka' | 'gin' | 'rum' | 'cognac' | 'liqueur' | 'singlemalt'

const PAIRING_MAP = [

  // ── STEAKS ──────────────────────────────────────────────────────────────────

  {
    name: 'Filet Mignon',
    category: 'steak',
    profile: ['lean','tender','mild','buttery','delicate'],
    excellent: ['Caymus Cabernet Sauvignon','Jordan Cabernet Sauvignon','Far Niente Cabernet Sauvignon','Evening Land Seven Springs','Scavino Barolo','Escargot Butter','Truffle Fries','Lobster Mac'],
    strong: ['Silver Oak Cabernet Sauvignon','Lingua Franca Avni Pinot Noir','Creamed Spinach','Shrimp Bisque','The Manhattan','Frias Block 5','Lail Vineyards Blueprint'],
    works: ['Quilt Cabernet Sauvignon','Faust Napa Valley Cabernet','House Wedge','Château de Rouillac','Au Gratin Potatoes','Mushrooms','Creme Brulee','Cheesecake','Beignets','Carrot Cake','Chocolate Brownie','Peanut Butter Brownie'],
    avoid: ['Stoneleigh Sauvignon Blanc','G.D. Vajra Moscato d\'Asti','Il Colle Prosecco Superiore','Faroe Island Salmon']
  ,
    pairingNotes: {
      "Caymus Cabernet Sauvignon": "Caymus' jammy dark fruit and heavy oak vanillin meet the filet's mild, buttery fat and amplify what little Maillard char the lean cut carries. The richness of the wine fills the textural gap the filet leaves, making every bite feel more substantial than the cut alone delivers.",
      "Jordan Cabernet Sauvignon": "Jordan's cedar-driven tannins and restrained dark cherry acidity work against the filet's butter-soft texture without overwhelming its delicate beefy undertone. The result is a back-and-forth where the wine sharpens each bite and the filet softens each sip, neither one dominating.",
      "Far Niente Cabernet Sauvignon": "Far Niente's vanilla oak and blackcurrant fruit lock onto the filet's inherent sweetness — the subtle amino-acid richness of the tenderloin — and stretch it across the palate. The wine's body fills where the lean cut thins out, leaving a finish that reads as richer and longer than either delivers alone.",
      "Evening Land Seven Springs": "The Seven Springs Pinot's earthy, forest-floor backbone speaks to the filet's clean, almost mineral-lean beef character rather than its fat, creating a savory-to-savory bridge rather than contrast. The wine's low tannin and bright cherry keep the filet's tenderness center-stage, and nothing competes.",
      "Scavino Barolo": "Barolo's high tannin and tar-and-cherry structure create deliberate friction against the filet's silky, low-collagen texture — the astringency signals the palate that more richness is coming, even when the lean cut doesn't fully deliver it. That tension resolves into a long, dried-rose and iron finish that the filet's mild protein carries without getting lost.",
      "Escargot Butter": "The herb-and-garlic compound butter shares the same fat-soluble aromatic compounds — specifically the thiosulfinates in the garlic and the chlorophyll-adjacent green notes from the parsley — that the filet's surface crust absorbs during a butter baste. Dragging a piece of the filet through the escargot butter essentially doubles the savory depth of the crust while the butter's richness melds seamlessly with the tenderloin's own softness.",
      "Truffle Fries": "The filet is all about refinement — clean, buttery, understated. The truffle fries take that same luxury register and punch it up with earthy, umami depth that the steak leaves room for.",
      "Lobster Mac": "If they loved how silky and rich the filet was, the lobster mac is where that buttery tenderness becomes a full indulgence — sweet shellfish and creamy sauce filling in every flavor lane the steak kept elegant and open.",
      "Silver Oak Cabernet Sauvignon": "Silver Oak's structured tannins and American oak dill note provide a frame that the mild filet needs to feel complete — it's a structural loan, not a flavor match. The cedar and blackberry linger after the bite clears, extending the finish well past what the lean cut would close on its own.",
      "Lingua Franca Avni Pinot Noir": "The Avni's silky tannin profile mirrors the filet's collagen-free, almost frictionless texture, creating a pairing that lives entirely in the realm of delicacy — stone fruit and clean beef moving together without interruption. The wine's acidity just barely cuts the butter fat on the finish, keeping the palate reset and the next bite as clean as the first.",
      "Creamed Spinach": "The filet's mildness is a canvas, and creamed spinach is the natural next brushstroke — same buttery richness, now with savory depth and a dairy weight that echoes the steak's finish without competing with it.",
      "Shrimp Bisque": "The filet keeps things clean and refined; the shrimp bisque carries that same delicate sensibility into something richer, adding a sweet, creamy seafood layer that feels like a natural extension of the meal's elegant tone.",
      "The Manhattan": "The rye spice and Angostura bitters in a Manhattan cut through the fat-soluble proteins in the tenderloin, while the sweet vermouth mirrors the beef's natural glycogen sweetness. Together, the whiskey's warmth amplifies the filet's buttery center without overwhelming its delicacy.",
      "Frias Block 5": "Spring Mountain's volcanic soils push high-toned acidity and dense tannin structure into this Cab, which grips the filet's lean muscle fibers and pulls the meat's quiet minerality to the surface. The finish elongates dramatically — the beef lingers well past where it would on its own.",
      "Lail Vineyards Blueprint": "The cedar and graphite in Blueprint's tannin structure act as a frame around the filet's mild myoglobin flavor, and the dark-fruit concentration fills in where the lean cut lacks fat-driven richness. Each bite resets the palate with a clean, dry finish that makes the next one taste as precise as the first.",
      "Quilt Cabernet Sauvignon": "Quilt's jammy plum and soft, polished tannins don't compete with the filet's tenderness — they smooth over it, letting the beef's buttery texture do the talking. The result is an easy, round pairing where neither element dominates, just a gentle amplification of the meat's natural sweetness.",
      "Faust Napa Valley Cabernet": "Faust's dark-fruit core and structured tannins provide the body the filet's lean profile lacks, effectively lending the steak a richness it can't generate from fat alone. The wine's firm finish tightens the texture of each bite, making the tenderloin feel more substantial on the palate.",
      "House Wedge": "After the filet's soft, buttery richness, the wedge is the reset — the cool crunch and tangy creaminess of the dressing snap the palate back into focus and keep the meal from feeling one-dimensional.",
      "Château de Rouillac": "The Bordeaux blend's cedar-driven tannins and restrained dark-fruit work as a structural counterweight to the filet's exceptionally mild, buttery character — where the steak is soft, the wine is precise. That contrast creates a back-and-forth on the palate where each sip resharpens your perception of the beef's clean, clean flavor.",
      "Au Gratin Potatoes": "The filet is restrained by design, so the au gratin earns its place by adding the creamy, dairy-rich weight the steak politely holds back — same comfort register, turned up just enough.",
      "Mushrooms": "The filet's mild, buttery profile leaves the door open for umami, and the mushrooms walk right through it — earthy and savory where the steak is clean, they add the depth without disrupting the delicacy.",
      "Creme Brulee": "The filet is all silk and restraint, and the crème brûlée honors that — vanilla cream and a caramelized snap that mirrors the steak's elegance and brings the meal to a close on exactly the same refined note it started.",
      "Cheesecake": "The filet's buttery mildness keeps the palate clean and receptive — the cheesecake answers with that same smooth, rich texture but layers in a tangy sweetness that feels like a natural exhale after the savory course.",
      "Beignets": "After the filet's quiet elegance, the beignets flip the script entirely — same lightness, but now it's airy fried dough and powdered sugar turning that clean finish into something playful and indulgent.",
      "Carrot Cake": "The filet's subtle, buttery profile leaves room for the carrot cake's warm spice and cream cheese richness to land with real impact — it's a move from delicate to cozy without ever feeling like a hard shift.",
      "Chocolate Brownie": "The filet keeps things lean and refined, so the brownie's dense, bittersweet chocolate hits like a satisfying counterpoint — same richness, completely different register.",
      "Peanut Butter Brownie": "The filet's clean butteriness sets a neutral stage, and the peanut butter brownie closes it out with a layered richness — nutty, chocolatey, and just sweet enough to feel like a deliberate finish."
    }
  },
  {
    name: 'Bone-In Filet',
    category: 'steak',
    profile: ['lean','tender','mild','buttery','delicate','bone-enhanced'],
    excellent: ['Caymus Cabernet Sauvignon','Jordan Cabernet Sauvignon','Far Niente Cabernet Sauvignon','Evening Land Seven Springs','Scavino Barolo','Escargot Butter','Truffle Fries','Lobster Mac'],
    strong: ['Silver Oak Cabernet Sauvignon','Lingua Franca Avni Pinot Noir','Creamed Spinach','Shrimp Bisque','The Manhattan','Bowdie\'s Old Fashioned','Frias Block 5'],
    works: ['Quilt Cabernet Sauvignon','Faust Napa Valley Cabernet','House Wedge','Château de Rouillac','Au Gratin Potatoes','Mushrooms','Creme Brulee','Cheesecake','Beignets','Carrot Cake','Chocolate Brownie','Peanut Butter Brownie'],
    avoid: ['Stoneleigh Sauvignon Blanc','G.D. Vajra Moscato d\'Asti','Il Colle Prosecco Superiore']
  ,
    pairingNotes: {
      "Caymus Cabernet Sauvignon": "Caymus's high-extraction oak and jammy cassis soak into the marrow-warmed, bone-conducted heat of the filet, amplifying the subtle richness that the bone imparts to the meat during cooking. The wine's round, full body and the steak's extraordinary tenderness create a texture match so close the two feel like a single course.",
      "Jordan Cabernet Sauvignon": "Jordan's restraint — dried cherry, cedar, and a silky mid-palate — gives the bone-in filet room to express the subtle complexity the bone adds to the meat's flavor without being buried under a bold wine. That elegance-meeting-elegance dynamic is what makes this pairing feel refined rather than simply rich.",
      "Far Niente Cabernet Sauvignon": "The blackcurrant and vanilla in the Far Niente give the filet's mild, buttery protein a bold flavor anchor it can't build on its own. Together, the wine's structure firms up each bite while its fruit sweetness draws out the meat's natural richness.",
      "Evening Land Seven Springs": "The Seven Springs' Willamette Valley terroir brings a red cherry brightness and forest floor earthiness that mirrors the filet's clean, unadorned flavor without overwhelming its delicacy. On the palate, the wine's silky acidity cuts through the butter fat and keeps every bite tasting as fresh as the first.",
      "Scavino Barolo": "Barolo's high tannin binds to the filet's proteins and scrubs the palate clean between bites, while its dried cherry and iron-edged earthiness add savory depth to the meat's mildness. The pairing creates this back-and-forth where the steak softens the wine's grip and the wine makes the beef taste more complex than it could alone.",
      "Escargot Butter": "The escargot butter's garlic, parsley, and Burgundy-style butter create a fat-on-fat layering with the filet that amplifies its natural unctuousness while the herb compounds cut through and keep it from going heavy. What lands on the palate is a bite that's simultaneously richer and brighter than either element delivers by itself.",
      "Truffle Fries": "The bone-in filet brings a deeper, marrow-kissed savoriness than a standard filet — the truffle fries pick up that earthy, umami thread and amplify it into something indulgent and grounded.",
      "Lobster Mac": "The filet's lean tenderness plays well against the lobster mac's layered creaminess — both are refined, but the mac adds oceanic sweetness and a silky richness that rounds out the meal without competing.",
      "Silver Oak Cabernet Sauvignon": "Silver Oak's cedar and cassis bring a structured, assertive frame around the filet's quieter flavor profile, with the wine's American oak vanilla doing the same work a finishing butter would do at the pan stage. The guest gets a mouthful that feels complete — the steak supplies tenderness, the wine supplies the boldness.",
      "Lingua Franca Avni Pinot Noir": "The Avni's silky mouthfeel and bright cherry fruit run parallel to the filet's own softness and butteriness, making this less a contrast pairing and more a texture conversation between two things with similar builds. The result is a prolonged, seamless finish where the fruit and the meat fat dissolve into each other without either one fading.",
      "Creamed Spinach": "The bone-in filet has just enough fat-driven depth to stand up to the creamed spinach's dairy richness — the spinach acts as a savory, velvety counterweight that keeps the whole plate feeling cohesive and intentional.",
      "Shrimp Bisque": "The filet's buttery tenderness primes the palate for richness without weight — the bisque takes that same silky register and deepens it with sweet shellfish and cream, so the transition feels like a natural escalation rather than a shift.",
      "The Manhattan": "The Manhattan's rye spice and Angostura bitters create a sharp, aromatic contrast to the filet's clean butterfat, while the sweet vermouth rounds the edge so it doesn't overpower the meat's delicacy. That interplay of bitter, sweet, and umami means each sip resets the palate and makes the next bite of steak taste leaner and more defined.",
      "Bowdie's Old Fashioned": "The Old Fashioned's charred oak whiskey and orange oil bridge directly to any Maillard crust on the filet, amplifying the caramelized exterior while the demerara sweetness echoes the meat's natural sugars. Together they create a long, warm finish where the whiskey's proof cuts the fat and the steak's tenderness smooths out the spirit's heat.",
      "Frias Block 5": "The concentrated dark fruit and mountain tannin in this Spring Mountain Cab have enough grip to grab onto the bone's marrow fat without steamrolling the filet's delicate lean muscle. The result is the steak tasting richer than it is — the wine lends the weight the cut doesn't carry on its own.",
      "Quilt Cabernet Sauvignon": "The jammy plum and polished tannin in the Quilt mirror the butter-soft texture of the filet without demanding the bold char or crust a bigger red would need to anchor itself. Together the whole experience softens — the wine and the steak meet in the middle on pure smoothness.",
      "Faust Napa Valley Cabernet": "The dark cherry and cassis in Faust bring forward the subtle iron notes in the filet's mild beef flavor that would otherwise stay quiet. That contrast pulls a savory depth out of the steak that makes the cut taste more complex than its lean profile suggests.",
      "House Wedge": "The filet's clean, mild profile leaves the palate open rather than saturated — the wedge brings a crisp, cool contrast with creamy dressing that refreshes without competing, so it lands as a reset that still feels cohesive.",
      "Château de Rouillac": "The cedar and graphite structure of this Bordeaux blend create a dry, slightly astringent frame around the filet's buttery fat, keeping each bite tasting clean and fresh. The dark fruit then sweeps back in on the finish, giving the steak a brief, satisfying richness it picks up entirely from the wine.",
      "Au Gratin Potatoes": "The filet leads with butter-soft tenderness and a gentle savory note — the au gratin mirrors that dairy-rich, yielding quality and amplifies it with layered potato and cheese, so the second bite feels like a richer continuation of the first.",
      "Mushrooms": "The filet's mildness is its invitation — the mushrooms answer it with concentrated umami and earthiness that give the palate something to hold onto, deepening the savory thread the steak started without overshadowing it.",
      "Creme Brulee": "The filet's delicate, buttery finish leaves the palate in a clean, refined place — the crème brûlée meets it there with vanilla cream and a whisper of caramelized sugar, so the transition from savory to sweet feels gentle and inevitable.",
      "Cheesecake": "The filet's subtle richness and soft texture set a smooth baseline — the cheesecake picks up that creamy register and finishes it with a bright tang that cuts through any lingering fat, making it feel like a satisfying close rather than an indulgent leap.",
      "Beignets": "The filet's restrained richness means the palate isn't fatigued — the beignets arrive light and airy with a dusting of sweetness that feels like a genuine lift, a playful contrast to the steak's quiet elegance.",
      "Carrot Cake": "The filet's mild, buttery character keeps the palate receptive rather than spent — the carrot cake brings warm spice and cream cheese tang that layer in complexity, giving the meal a memorable finish that the filet's gentleness made room for.",
      "Chocolate Brownie": "The filet's clean, buttery finish leaves the palate wide open — the brownie answers with deep chocolate richness that feels like a natural crescendo rather than a gear shift. Both are about pure, refined indulgence, just in different registers.",
      "Peanut Butter Brownie": "The filet is all about subtlety and butter-soft texture, and the peanut butter brownie picks up that richness and adds a nutty depth that gives the sweetness some backbone. It's the same lane, just with more going on."
    }
  },
  {
    name: 'Kansas City',
    category: 'steak',
    profile: ['lean','bold','beefy','firm','savory','well-marbled'],
    excellent: ['Jordan Cabernet Sauvignon','Silver Oak Cabernet Sauvignon','Caymus Cabernet Sauvignon','Scavino Barolo','The Manhattan','Lail Vineyards Blueprint'],
    strong: ['Ghost Block Cabernet Sauvignon','Austin Hope Cabernet Sauvignon','Peju Cabernet Sauvignon','Lingua Franca Avni Pinot Noir','Creamed Spinach','Truffle Fries'],
    works: ['Quilt Cabernet Sauvignon','Faust Napa Valley Cabernet','House Wedge','RAEN Royal St Robert','Mushrooms','Chocolate Brownie','Peanut Butter Brownie','Cheesecake','Creme Brulee','Carrot Cake','Beignets'],
    avoid: ['G.D. Vajra Moscato d\'Asti','Schloss Vollrads Riesling','Stoneleigh Sauvignon Blanc']
  ,
    pairingNotes: {
      "Jordan Cabernet Sauvignon": "Jordan's cedar backbone and restrained dark cherry meet the firm, beefy chew of the Kansas City without competing — the elegance of the wine gives the steak's natural umami room to be the loudest thing at the table. You get a long, savory finish where the meat and the wine's tannin slowly unwind together.",
      "Silver Oak Cabernet Sauvignon": "The American oak in Silver Oak brings a vanilla and coconut sweetness that plays directly against the bold, almost mineral beefiness of the Kansas City's lean strip muscle. That fat-tannin handshake between the steak's firm texture and the wine's structured blackberry extract makes both feel more generous on the palate.",
      "Caymus Cabernet Sauvignon": "Caymus's residual sugar and thick jammy oak act like a glaze on the Kansas City's pronounced beefy crust, amplifying the Maillard browning notes from the sear. The richness compounds — bold steak, bold wine — and the finish lands somewhere between a great steakhouse bite and a spoonful of reduced red wine sauce.",
      "Scavino Barolo": "Nebbiolo's high acid and grippy tannin cut through the Kansas City's dense lean fiber like a knife, resetting the palate after every bite and making the steak's bold, meaty flavor land harder each time. The wine's dried cherry and earth pull up an almost gamey, mineral depth from the beef that no Cabernet in the cellar can touch.",
      "The Manhattan": "The rye spice and Angostura bitters in the Manhattan cut through the dense muscle fibers of the strip, while the sweet vermouth latches onto the beef's natural glutamates. Each sip resets the palate so the next bite hits with the same intensity as the first.",
      "Lail Vineyards Blueprint": "The cedar and graphite tannins in this Cab bind directly to the strip's lean myofibrillar proteins, softening the firm chew while the dark cassis amplifies the beef's iron-rich savoriness. The result is a longer, more integrated finish than either delivers alone.",
      "Ghost Block Cabernet Sauvignon": "Ghost Block's firm tannin structure meets the strip's dense, chewy texture head-on, and the dark plum and blackberry fruit fills in where the lean cut offers little fat. The boldness of both holds — neither overwhelms the other.",
      "Austin Hope Cabernet Sauvignon": "Austin Hope's ripe dark fruit and fuller body provide a richness the lean strip doesn't have on its own, essentially lending the wine's texture to the meat. The bold beefiness of the cut keeps the wine's ripeness from reading as soft.",
      "Peju Cabernet Sauvignon": "Peju's fruit-forward profile and approachable tannins ease against the strip's firm texture without demanding the same intensity back, letting the beef's bold, clean flavor take the lead. Guests who find big tannic Cabs aggressive will find this pairing more seamless and approachable.",
      "Lingua Franca Avni Pinot Noir": "The Avni's bright malic acidity and cherry fruit create a contrast pairing — the acidity slices through the strip's lean density while the silky texture provides a counterpoint to the firm chew. It's a lighter frame around a bold cut, which reads as refreshing rather than mismatched.",
      "Creamed Spinach": "The Kansas City is lean and assertively beefy — the creamed spinach brings a wave of dairy richness that coats the palate and rounds out all that bold, forward flavor. It's the contrast the cut is asking for.",
      "Truffle Fries": "The Kansas City's firm, beefy intensity finds a worthy match in the truffle fries' deep umami and earthiness — neither backs down, and the result is a progression that keeps the savory momentum going with more complexity.",
      "Quilt Cabernet Sauvignon": "Quilt's jammy, smoothed-out profile rounds the edges of the strip's assertive beefiness, but the lower tannin grip means it doesn't engage the protein structure as directly as a more structured Cab would. It works — the fruit is pleasant against the char — but the pairing is more about ease than complexity.",
      "Faust Napa Valley Cabernet": "Faust brings dark fruit and structure, but its tannins tend to sit on top of the strip's lean texture rather than integrating through it, which can make the finish feel slightly disjointed compared to a more precisely structured Cab. It's a familiar, satisfying combination that delivers on expectation without surprising anyone.",
      "House Wedge": "After the Kansas City's bold, assertive beef, the wedge acts as a reset — the crisp iceberg and cool, creamy dressing cut through the richness and give the palate a clean, refreshing contrast before the meal winds down.",
      "RAEN Royal St Robert": "The coastal minerality and red cherry acidity in this Sonoma Coast Pinot cut through the Kansas City's lean, dense muscle fibers in a way that fat-driven wines can't, instead drawing out the beef's iron-rich depth. Together, the wine's brightness lifts the char while the steak's bold beefiness gives the Pinot's elegance something to anchor to.",
      "Mushrooms": "The Kansas City is built on bold, beefy savoriness, and the mushrooms double down on that umami foundation with an earthy depth that feels like a natural extension of the same flavor story. It intensifies without overwhelming.",
      "Chocolate Brownie": "The Kansas City ends on a firm, savory note, and the brownie's dense, bittersweet chocolate gives the palate a satisfying pivot — the richness carries through, just shifted from savory to sweet.",
      "Peanut Butter Brownie": "After the Kansas City's bold beef, the peanut butter brownie bridges the gap with its savory-sweet nuttiness before landing in chocolate richness — it's a transition that feels earned rather than abrupt.",
      "Cheesecake": "The Kansas City runs lean and aggressive — all that bold, beefy intensity needs something with equal presence, and the cheesecake's tangy richness is the one dessert with enough backbone to answer it.",
      "Creme Brulee": "After the Kansas City's firm, concentrated beef flavor, the crème brûlée is the exhale — that vanilla custard softness and caramelized sugar offer a clean, delicate contrast that lets the palate finally settle.",
      "Carrot Cake": "The Kansas City's bold, savory edge finds a natural counterpoint in the carrot cake's warm spice and cream cheese frosting — the sweetness doesn't fight the beef, it rounds it out.",
      "Beignets": "If they went lean and bold with the Kansas City, the beignets are the lightest possible landing — fried dough and powdered sugar strip everything back to something simple and satisfying after all that intensity."
    }
  },
  {
    name: 'Cowboy Ribeye',
    category: 'steak',
    profile: ['fatty','rich','bold','marbled','beefy','bone-in'],
    excellent: ['Silver Oak Cabernet Sauvignon','Shafer Hillside Select','Opus One','Scavino Barolo','Darioush Cabernet Sauvignon','Bowdie\'s Old Fashioned','Espresso Old Fashioned'],
    strong: ['Caymus Cabernet Sauvignon','Ghost Block Cabernet Sauvignon','Nickel & Nickel Cabernet','Creamed Spinach','Brussels and Belly','Venge Silencieux'],
    works: ['Jordan Cabernet Sauvignon','Faust Napa Valley Cabernet','House Wedge','Marimar Estate Christina','Truffle Fries','Chocolate Brownie','Peanut Butter Brownie','Cheesecake','Creme Brulee','Carrot Cake','Beignets'],
    avoid: ['G.D. Vajra Moscato d\'Asti','Schloss Vollrads Riesling','Le Garenne Rosé','Crab Cake','Seared Scallops']
  ,
    pairingNotes: {
      "Silver Oak Cabernet Sauvignon": "The cedar tannins and cassis in the Silver Oak bind to the intramuscular fat in the ribeye, stripping the palate clean between bites and amplifying the steak's char. What the guest gets is a longer, more savory finish — the fat carries the blackberry fruit, and the fruit makes the beef taste even more like itself.",
      "Shafer Hillside Select": "The concentrated plum and mocha in the Hillside Select mirror the Maillard crust on the ribeye, matching fat-weight with fruit-weight so neither dominates. Each sip after a bite extends the finish into a dark, almost chocolatey beefiness that lingers well past both.",
      "Opus One": "Opus One's structured tannins and layered dark fruit — blackcurrant, graphite, dried herb — are built precisely for the kind of fat-marbled, long-seared beef the Cowboy Ribeye delivers. The fat softens the tannins mid-palate, and the wine's complexity rewards the ribeye's depth with wave after wave of savory, fruit-laced finish.",
      "Scavino Barolo": "Barolo's high tannin and bright Nebbiolo cherry acidity act like a palate press against the ribeye's heavy marbling — the astringency grips the fat and the tartness cuts the richness, resetting the mouth. What follows is a classically Italian contrast: the steak turns more mineral, more savory, and the wine turns rounder and more generous than either would be alone.",
      "Darioush Cabernet Sauvignon": "Darioush's plush, full-bodied structure coats the palate in sync with the ribeye's rendered fat, but its firm Napa tannins keep that richness from going heavy. The guest experiences a seamless, velvety mid-palate where the beef's umami and the wine's dark fruit lock into one sustained, deeply satisfying finish.",
      "Bowdie's Old Fashioned": "The charred oak and Demerara in the Old Fashioned speak directly to the carbon crust on the ribeye — two products of caramelization meeting at the same flavor frequency. The fat in the beef opens up the whiskey's grain character mid-sip, and the bitters cut through the richness just enough to make the next bite feel brand new.",
      "Espresso Old Fashioned": "The coffee's roasted, slightly bitter compounds mirror the char on the ribeye's exterior, while the whiskey's sweetness bridges to the marbling's buttery fat beneath it. The guest gets an almost mocha-meets-beef experience on the finish — the espresso amplifies the steak's savory depth the same way it does a piece of dark chocolate.",
      "Caymus Cabernet Sauvignon": "The high tannin structure and jammy black fruit in the Caymus latch onto the rendered intramuscular fat in the ribeye, cutting through richness while the vanilla-forward oak mirrors the Maillard crust. Every bite resets the palate so the next one tastes just as clean and powerful as the first.",
      "Ghost Block Cabernet Sauvignon": "Ghost Block's concentrated dark fruit and firm tannin framework act as an astringent counterweight to the oleic fat in the marbling, keeping the ribeye from feeling heavy. The result is a back-and-forth where each sip sharpens the savory depth of the beef and each bite softens the wine's grip.",
      "Nickel & Nickel Cabernet": "Nickel & Nickel's single-vineyard concentration means the wine carries enough tannin mass to emulsify the fat coating on your palate, while the dark cassis and iron-mineral notes align with the ribeye's blood-rich char. The guest experiences an almost seamless continuity between the steak's umami finish and the wine's long, drying close.",
      "Creamed Spinach": "The Cowboy Ribeye is already swimming in rich, fatty marbling — the creamed spinach leans into that same dairy-forward richness and keeps the momentum going rather than trying to cut through it.",
      "Brussels and Belly": "The ribeye's deep marbled fat finds its match in the Brussels and Belly — the pork's smokiness and the bitter char of the Brussels push back just enough to keep all that richness from feeling one-note.",
      "Venge Silencieux": "Venge's dense, inky dark-fruit profile and grippy tannins work against the high fat content of the ribeye the same way a squeeze of acid would — scrubbing richness and restarting the bite. What comes through is an amplified sense of the beef's char and the wine's brooding fruit simultaneously, neither overpowering the other.",
      "Jordan Cabernet Sauvignon": "Jordan's cedar and dried-herb aromatics provide an elegant contrast to the ribeye's bold rendered fat, where instead of matching power for power, the wine's restraint draws out the steak's subtler mineral and iron notes. The guest gets a cleaner, more refined expression of the beef — the fat doesn't dominate, and the wine finishes with a lifted dark-cherry brightness.",
      "Faust Napa Valley Cabernet": "Faust's structured tannins and dark-fruit density give it enough backbone to stand against the ribeye's fat load without the wine collapsing into sweetness. The pairing lands in a place where the steak's charred crust and the wine's mocha and blackberry notes trade off on the palate in a long, layered finish.",
      "House Wedge": "After the Cowboy Ribeye's full-throttle fat and bold char, the wedge is a reset — cold, crisp iceberg and creamy dressing cut the richness cleanly and bring the palate back to center.",
      "Marimar Estate Christina": "The Christina's bright cherry acidity and earthy, forest-floor character offer a deliberate contrast to the ribeye's heavy fat — the Pinot's lighter phenolic structure won't strip richness the way a Cab would, but the acidity cuts just enough to keep each bite fresh. What the guest experiences is the ribeye's richness actually making the Pinot taste more complex, coaxing out savory umami in the wine that disappears when you drink it alone.",
      "Truffle Fries": "The ribeye is already the most indulgent thing on the menu, and the truffle fries don't apologize for that — the earthy umami of the truffle oil layers right on top of that marbled richness and doubles down.",
      "Chocolate Brownie": "The ribeye's richness leaves your palate primed for indulgence — the brownie meets that same deep, fatty satisfaction and converts it into pure chocolate density, finishing the meal on the same bold wavelength.",
      "Peanut Butter Brownie": "The ribeye is all about fat and intensity, and the peanut butter brownie speaks that exact language — the nuttiness adds a savory edge that bridges steak and dessert in a way that feels less like a pivot and more like a continuation.",
      "Cheesecake": "After the ribeye's heavy, beefy richness, the cheesecake offers that same luxurious mouthfeel but resets the palate with a bright tang that cuts through the fat and lands as a genuinely satisfying finish.",
      "Creme Brulee": "The ribeye is bold and unapologetic, so the crème brûlée works as the elegant counterpoint — same richness underneath, but the delicate vanilla and caramelized sugar pull the meal into a refined, composed close.",
      "Carrot Cake": "The ribeye's fat-forward depth sets up the carrot cake's warm spice beautifully — cinnamon and nutmeg cut through the lingering richness while the cream cheese frosting keeps that indulgent thread going all the way to the last bite.",
      "Beignets": "After the ribeye's sheer weight, the beignets are a smart reset — same satisfying fried quality, but the airy dough and powdered sugar lift the palate and send the guest out on a light, happy note."
    }
  },
  {
    name: 'The Tomahawk',
    category: 'steak',
    profile: ['fatty','rich','bold','marbled','smoky','beefy','theatrical'],
    excellent: ['Opus One','Shafer Hillside Select','Heitz Martha\'s Vineyard','Scavino Barolo','Bowdie\'s Old Fashioned','Espresso Old Fashioned','Bone Marrow'],
    strong: ['Darioush Cabernet Sauvignon','Silver Oak Cabernet Sauvignon','Venge Family Reserve','Lail Vineyards Blueprint','Creamed Spinach','Brussels and Belly'],
    works: ['Ghost Block Cabernet Sauvignon','Nickel & Nickel Cabernet','Truffle Fries','Mushrooms','Chocolate Brownie','Peanut Butter Brownie','Cheesecake','Creme Brulee','Carrot Cake','Beignets'],
    avoid: ['G.D. Vajra Moscato d\'Asti','Schloss Vollrads Riesling','Raventós Cava de NIT Rosé Brut','Stoneleigh Sauvignon Blanc','Crab Cake','Seared Scallops','Burrata']
  ,
    pairingNotes: {
      "Opus One": "Opus One's precise tannin architecture and layered dark fruit — cassis, black plum, graphite — are built exactly for the kind of prolonged fat contact you get from a bone-in cut this size, where the marrow and intramuscular fat keep releasing through the chew. The guest experiences a rare synchronicity: the wine's tannins soften as the fat coats the palate, and the beef's char elevates the wine's structure, making both taste more complete together than either does alone.",
      "Shafer Hillside Select": "The Hillside Select's concentrated plum and mocha are built on tannins dense enough to cut through the Tomahawk's deep intramuscular fat. What comes back is a long, chocolatey finish where the char on the crust and the wine's dark fruit lock together.",
      "Heitz Martha's Vineyard": "Martha's Vineyard's signature eucalyptus and cedar act as a palate cleanser against the Tomahawk's rendered fat, creating a contrast that keeps each bite tasting like the first. The result is a brightness mid-palate that lifts the richness without losing any of the steak's weight.",
      "Scavino Barolo": "Barolo's high tannin and volatile acidity are working overtime here, latching onto the fat molecules in the marbling and literally scrubbing the palate clean between bites. The Nebbiolo's dried cherry and iron minerality bring out a savory, almost umami quality in the crust that you don't get with any other pairing.",
      "Bowdie's Old Fashioned": "The Demerara sugar and Angostura bitters in the Old Fashioned create a caramel-meets-spice bridge directly to the Maillard crust on the Tomahawk. Every sip resets the palate with a whiskey warmth that pulls more smoke and char out of the next bite.",
      "Espresso Old Fashioned": "The coffee's roasted bitterness and the steak's char share the same browning chemistry, so they reinforce rather than compete. The sweetness in the cocktail rounds out any iron edge in the fat, and the finish tastes like the best bite of steak you've ever had followed by one sip of a perfect after-dinner drink.",
      "Bone Marrow": "If they committed to the tomahawk, bone marrow is the natural encore — both are built on the same primal, fatty richness, but the marrow intensifies the umami and adds a smoky, silky depth that doubles down on everything they already loved.",
      "Darioush Cabernet Sauvignon": "Darioush's plush, velvety tannins are generous enough to soften against the Tomahawk's fat rather than fight it, creating a round, mouth-coating texture that amplifies the steak's richness. The fruit stays front and center without getting buried by the beef, which keeps the pairing lush rather than heavy.",
      "Silver Oak Cabernet Sauvignon": "Silver Oak's American oak aging lays in a coconut-vanilla note that plays off the butter-basted exterior of the Tomahawk, while its structured tannins draw a clean line through the fat. The blackberry fruit comes forward on the finish, giving the pairing a clarity that keeps a 40-ounce steak from ever feeling like too much.",
      "Venge Family Reserve": "Venge's Oakville fruit concentration gives it the density to stand next to a Tomahawk without being overwhelmed, with dark cassis and baking spice meeting the steak's rendered fat head-on. What you get is a layered, almost decadent finish where the wine and the beef build on each other rather than one drowning the other out.",
      "Lail Vineyards Blueprint": "The Blueprint's cedar tannins and concentrated dark fruit — blackcurrant, dried plum — lock onto the rendered intramuscular fat in the Tomahawk and cut through it the way acid cuts cream. What lands on the palate is a kind of amplification: the char reads deeper, the wine reads rounder, and neither one overwhelms the other.",
      "Creamed Spinach": "The tomahawk brings enormous beefy intensity, and the creamed spinach knows exactly how to meet it — the dairy richness tempers the char while the savory, velvety sauce keeps the indulgence fully intact.",
      "Brussels and Belly": "The Tomahawk owns the table with fat and fire — the Brussels and Belly keeps that energy going with smoky pork belly and caramelized char, but the bitter Brussels cut right through where the steak never had to. It's the same boldness, just with an edge.",
      "Ghost Block Cabernet Sauvignon": "Ghost Block's Oakville tannins are firm enough to grip the marbling in the Tomahawk and scrub the fat off the palate between bites, while its dark-fruit core — blackberry, cassis — mirrors the Maillard crust on the exterior of the steak. The result is a longer finish than either delivers alone, with the beef's richness extending the wine's fruit and the wine resetting the palate for the next bite.",
      "Nickel & Nickel Cabernet": "The single-vineyard concentration in Nickel & Nickel means there's enough fruit density to stand against the Tomahawk's fat without getting swallowed — the wine's structured tannins bind to the proteins in the beef and soften noticeably in the process. Guests will notice the steak tasting cleaner and the wine tasting plusher, a mutual exchange driven by the fat-tannin interaction.",
      "Truffle Fries": "If they went all-in on the Tomahawk's deep, marbled richness, the Truffle Fries don't ask them to shift gears — they double down with earthy truffle and salt, turning indulgence into a full commitment.",
      "Mushrooms": "The Tomahawk is built on beefy, umami depth, and the mushrooms speak exactly that language — same savory, earthy register, just lighter on their feet and ready to fill every gap on the plate.",
      "Chocolate Brownie": "After all that fat and savoriness, the brownie gives the palate its first real sweetness, but it's dense and rich enough that it feels like a natural close to a big, bold meal rather than a sharp left turn.",
      "Peanut Butter Brownie": "The Tomahawk's richness calls for a dessert with some backbone, and the peanut butter brownie delivers — the nutty depth mirrors the steak's savory fat while the chocolate gives it a satisfying, indulgent landing.",
      "Cheesecake": "After the Tomahawk's pure, unapologetic richness, the cheesecake offers a creamy sweetness with just enough tang to cleanse and reset — same luxurious texture, but the brightness makes it feel like a reward rather than more of the same.",
      "Creme Brulee": "The Tomahawk is all muscle and marbling — the Crème Brûlée is the exhale, trading bold and beefy for delicate vanilla cream with that crack of caramel sugar that makes the contrast feel intentional and earned.",
      "Carrot Cake": "The Tomahawk's big, fatty richness sets up the carrot cake perfectly — the warm spice and cream cheese frosting bring sweetness with a little complexity, a finish that feels like the meal has somewhere interesting left to go.",
      "Beignets": "If they went all-in on the Tomahawk's richness, the beignets cut through all that fat with something sweet, light, and fried — same indulgent instinct, completely different register."
    }
  },
  {
    name: 'Porterhouse',
    category: 'steak',
    profile: ['lean','fatty','bold','beefy','dual-texture','rich'],
    excellent: ['Silver Oak Cabernet Sauvignon','Caymus Cabernet Sauvignon','Jordan Cabernet Sauvignon','Scavino Barolo','The Manhattan','Truffle Fries','Creamed Spinach'],
    strong: ['Ghost Block Cabernet Sauvignon','Lail Vineyards Blueprint','Far Niente Cabernet Sauvignon','Brussels and Belly','Bowdie\'s Old Fashioned','Lobster Mac'],
    works: ['Faust Napa Valley Cabernet','Peju Cabernet Sauvignon','House Wedge','RAEN Royal St Robert','Mushrooms','Chocolate Brownie','Peanut Butter Brownie','Cheesecake','Creme Brulee','Carrot Cake','Beignets'],
    avoid: ['G.D. Vajra Moscato d\'Asti','Schloss Vollrads Riesling','Stoneleigh Sauvignon Blanc','Crab Cake','Seared Scallops']
  ,
    pairingNotes: {
      "Silver Oak Cabernet Sauvignon": "Silver Oak's American oak aging lays a distinct cedar and vanilla structure over its blackberry core, and that cedar speaks directly to the charred exterior of the Porterhouse while the fruit bridges to the strip side's beefier, more mineral character. The guest gets a clean handoff — the wine's structure handles the fat from the filet side, and the fruit sustains through the leaner, more savory strip.",
      "Caymus Cabernet Sauvignon": "Caymus runs rich and jammy with low tannin aggression, which means it doesn't fight the Porterhouse — it leans into the fat on the strip side and amplifies the steak's natural sweetness from the aging process. The combination reads as opulent rather than heavy, with the wine's oak-driven vanilla rounding out the char and the beef's rendered fat softening what little tannin grip is there.",
      "Jordan Cabernet Sauvignon": "Jordan's restraint — its cedar, dried cherry, and fine-grained tannin — acts as a counterweight to the Porterhouse's bolder, beefier strip side, creating contrast rather than echo. The lean muscle of the strip sharpens the wine's fruit, pulling out red-cherry notes that disappear when you drink Jordan on its own, while the filet's butteriness rounds the wine's finish.",
      "Scavino Barolo": "Barolo's high-acid, high-tannin profile is built for fat and protein, and the Porterhouse's combination of marbled strip and tender filet gives the Nebbiolo's grippy tannins something to work against while its sour-cherry and iron-earth character cuts through the richness rather than doubling it. What the guest experiences is a savory, almost umami-forward loop — the wine pulls the beef's mineral character forward, and the beef softens the Barolo's edges in a way that years of aging alone can't fully achieve.",
      "The Manhattan": "The Manhattan's rye whiskey bitterness and sweet vermouth create a push-pull that mirrors the Porterhouse's own internal contrast — the fattier strip against the leaner filet — while the Angostura bitters echo the char and the whiskey's caramel speaks to the crust developed in the sear. On the palate, the cocktail's sweetness coats where the fat has been, bridging bites and keeping the beef's savoriness front and center rather than letting richness build and fatigue.",
      "Truffle Fries": "The Porterhouse already delivers that deep, beefy umami — the truffle fries take that savory depth and push it further with earthiness and richness that feel like a natural extension of the plate.",
      "Creamed Spinach": "The Porterhouse's bold, fatty beef finds a natural counterpart in creamed spinach — the dairy richness softens the bite while keeping the savory weight right where it belongs.",
      "Ghost Block Cabernet Sauvignon": "The high tannin load and concentrated dark cherry in Ghost Block lock onto the myoglobin proteins in the beef, softening as the fat from the strip side coats the palate. What emerges is a longer, rounder finish from both — the wine's structure dissolves into the steak's richness rather than fighting it.",
      "Lail Vineyards Blueprint": "The cedar and graphite in Blueprint cut through the intramuscular fat on the tenderloin side the way a sharp knife does — clean and precise — while the dark fruit mirrors the Maillard crust on the exterior. The guest gets a finish that tastes like the steak is still on the grill.",
      "Far Niente Cabernet Sauvignon": "Far Niente's vanilla and blackcurrant ride on top of the beef's natural glutamates, amplifying savoriness while the wine's supple tannins grip the fat from the strip without astringency. The result is a finish that's longer and sweeter than either delivers alone.",
      "Brussels and Belly": "If they loved the Porterhouse's beefy intensity, the Brussels and Belly trades on that same bold, savory foundation and layers in smokiness and a bitter char that keeps the palate engaged.",
      "Bowdie's Old Fashioned": "The char-bitter of the Angostura and the caramelized oak from the whiskey speak directly to the Maillard crust on the porterhouse, two browning reactions recognizing each other. A sip after a bite of the fat cap turns the sweetness from the demerara into something closer to bone marrow.",
      "Lobster Mac": "The Porterhouse brings the beef side of rich and indulgent — the Lobster Mac mirrors that same luxurious weight from a completely different angle, creamy and oceanic where the steak is primal.",
      "Faust Napa Valley Cabernet": "Faust carries enough dark plum and structured tannin to hold its ground against the bold beefiness of the porterhouse without the concentration to overwhelm the leaner tenderloin side. It's a wine that lets the steak lead, adding dark fruit length without redirecting the experience.",
      "Peju Cabernet Sauvignon": "Peju's fruit-forward profile and softer tannin structure work with the fat from the strip, but the approachable finish means the wine steps back when the beef's intensity peaks rather than matching it stride for stride. Still, the fruit sweetness provides a pleasant counterpoint to the char, especially for guests who want the steak to dominate.",
      "House Wedge": "After the Porterhouse's full-throttle richness, the wedge is the reset — crisp, cold, and creamy in a way that refreshes without abandoning the classic chophouse feel.",
      "RAEN Royal St Robert": "The coastal minerality and bright acidity in this Pinot cut through the fat on the strip side in a way that reads more as contrast than harmony — the wine's elegance creates a brief palate reset between bites rather than building on the beef's depth. Guests who typically drink Pinot will find it works, though they'll notice the wine leaning away from the steak's boldness rather than into it.",
      "Mushrooms": "The Porterhouse already has that concentrated, meaty savoriness — mushrooms speak the same umami language and add an earthy dimension that rounds out the beef without competing.",
      "Chocolate Brownie": "The Porterhouse's bold, fatty depth primes the palate for something equally rich and satisfying — the brownie closes the meal on that same indulgent note, just swapping savory for dark, dense chocolate.",
      "Peanut Butter Brownie": "The Porterhouse plays both sides — lean and fatty, bold and beefy — and the peanut butter brownie meets that same duality with chocolate's depth and the nutty richness of peanut butter. It's the kind of dessert that can actually hold its own after a steak that big.",
      "Cheesecake": "After the fat and intensity of the Porterhouse, the cheesecake works because it's rich enough to feel like a continuation but that slight tang cuts right through the beef weight and resets the palate. It's a natural exhale after a bold main.",
      "Creme Brulee": "The Porterhouse is all about contrast — lean strip against the fatty tenderloin — and the crème brûlée mirrors that with the crack of caramelized sugar giving way to cool, delicate vanilla custard underneath. It's a lighter landing after something that commanding.",
      "Carrot Cake": "The Porterhouse brings a lot of savory weight, and the carrot cake's warm spice and cream cheese frosting pull the meal in a completely different direction without feeling abrupt. The sweetness here has enough backbone to stand up to what came before it.",
      "Beignets": "After the sheer richness of the Porterhouse, the beignets are the right move — light, airy, and dusted with powdered sugar, they lift the palate instead of piling on. The contrast is what makes it work: bold steak, then something that practically floats."
    }
  },

  // ── STARTERS ─────────────────────────────────────────────────────────────────

  {
    name: 'Prime Tartare',
    category: 'starter',
    profile: ['umami','rich','raw','bold','fatty','delicate'],
    excellent: ['Laurent Perrier Le Cuvée Brut','Raventós Cava de NIT Rosé Brut','Jean-Pierre Grossot Chablis','Bowdie\'s Old Fashioned','Joseph Mellot Sancerre'],
    strong: ['Elk Cove Pinot Blanc','St Supéry Sauvignon Blanc','Domaine de Berthiers Pouilly-Fumé','Espresso Old Fashioned','Negroni'],
    works: ['Lingua Franca Avni Pinot Noir','Fisher Unity Pinot Noir','House Wedge'],
    avoid: ['Opus One','Shafer Hillside Select','Heitz Martha\'s Vineyard','Caymus Cabernet Sauvignon']
  ,
    pairingNotes: {
      "Laurent Perrier Le Cuvée Brut": "The autolytic toastiness from extended lees contact echoes the egg yolk richness in the tartare while the carbonic acidity scrubs the raw fat from the palate between bites, resetting it cleanly. What the guest experiences is a bite of tartare that tastes sharper and brighter than it would alone, with the wine turning the umami into something almost electric.",
      "Raventós Cava de NIT Rosé Brut": "The Cava's high acidity and fine bubbles cut through the egg yolk and fat in the tartare while its wild strawberry fruit plays against the savory depth of the beef. Each bite resets the palate so the raw, iron-rich flavors of the meat hit clean and fresh every time.",
      "Jean-Pierre Grossot Chablis": "Chablis gets its oyster-shell minerality from the same Kimmeridgian limestone that once held actual shellfish, and that salinity mirrors the anchovy and caper notes in the tartare. The citrus acidity lifts the richness of the egg yolk without overwhelming the delicate raw beef.",
      "Bowdie's Old Fashioned": "The Demerara sugar and orange bitters in the Old Fashioned lock onto the Worcestershire and Dijon in the tartare, creating a savory-sweet bridge that makes both taste more complex. The proof of the whiskey acts almost like a palate cleanser, cutting fat and resetting for the next bite.",
      "Joseph Mellot Sancerre": "Sancerre's sauvignon blanc pulls flint and cut grass from the Loire's chalky soils, and those green, herbaceous notes amplify the shallot and caper in the tartare. The laser-sharp acidity dissolves the egg yolk richness instantly, keeping every bite feeling lean and precise.",
      "Elk Cove Pinot Blanc": "Pinot Blanc's apple and pear esters sit at a lower aromatic register than sauvignon blanc, so they don't compete with the beef — they soften it, rounding the iron edge of the raw meat with a gentle orchard-fruit sweetness. The wine's medium body and quiet minerality give the tartare room to be the bold thing in the pairing.",
      "St Supéry Sauvignon Blanc": "Napa sauvignon blanc carries a riper grapefruit and lemongrass profile than its Loire counterparts, and that tropical citrus zest cuts directly through the fat of the egg yolk while the grassy backbone picks up the raw onion and herb in the tartare. The finish is bright and long, which keeps the richness of the beef from settling too heavily on the palate.",
      "Domaine de Berthiers Pouilly-Fumé": "Pouilly-Fumé's gunflint character — a sulfurous, stony quality from the silex soils — echoes the mineral depth of aged beef and amplifies the umami in the meat rather than fighting it. The citrus brightness then lifts the fat, so the tartare finishes cleaner and more vivid than it would on its own.",
      "Espresso Old Fashioned": "The roasted, bitter compounds in the espresso act as a counterweight to the richness of the egg yolk and beef fat, the same way a dark crust works on a seared steak — adding depth through contrast rather than similarity. When the coffee's bitterness fades, the whiskey's caramel and the meat's umami are left together, and they taste like each other.",
      "Negroni": "The Campari's bitter quinine and the gin's juniper cut through the raw fat and egg yolk richness, while the orange peel oils mirror the bright acidity in the tartare's lemon and caper finish. Together, the bitterness scrubs the palate clean between bites, making each taste of the tartare feel as sharp and vivid as the first.",
      "Lingua Franca Avni Pinot Noir": "The Avni's bright Bing cherry fruit and silky low tannin create a gentle contrast to the tartare's dense umami without overwhelming the raw beef's delicate iron and mineral notes. The result is a back-and-forth where the wine's acidity lifts the fat off the palate while the beef's savory depth makes the fruit in the glass taste more generous.",
      "Fisher Unity Pinot Noir": "The Unity's forest floor earthiness and dried cherry character speak directly to the raw beef's natural minerality, while its medium-weight tannin provides just enough grip to register against the fat without fighting it. On the palate, the pairing reads as deeply savory, like the wine and the tartare are amplifying the same umami frequency.",
      "House Wedge": "The tartare is all umami intensity and richness up front, and the wedge follows that with cool crispness and creamy dressing that gives those same bold instincts a fresh, clean frame. The iceberg does real work here — it's contrast that feels earned."
    }
  },
  {
    name: 'Bone Marrow',
    category: 'starter',
    profile: ['rich','fatty','umami','smoky','indulgent','bold'],
    excellent: ['Bowdie\'s Old Fashioned','Espresso Old Fashioned','Scavino Barolo','Caymus Cabernet Sauvignon','The Manhattan'],
    strong: ['Silver Oak Cabernet Sauvignon','Ghost Block Cabernet Sauvignon','Venge Silencieux','Brussels and Belly','Creamed Spinach'],
    works: ['Jordan Cabernet Sauvignon','Faust Napa Valley Cabernet','House Wedge','Chocolate Brownie','Peanut Butter Brownie','Cheesecake'],
    avoid: ['Laurent Perrier Le Cuvée Brut','G.D. Vajra Moscato d\'Asti','Stoneleigh Sauvignon Blanc','Lingua Franca Avni Pinot Noir']
  ,
    pairingNotes: {
      "Bowdie's Old Fashioned": "The bourbon's caramelized oak and Demerara sweetness echo the Maillard-browned exterior of the marrow bone, while the bitters cut through the fat's lanolin richness like a knife. What the guest gets is a round, slow-building warmth where neither the drink nor the dish feels as heavy as it would alone.",
      "Espresso Old Fashioned": "The coffee's roasted chlorogenic acids and the whiskey's charred barrel char create a bitter-smoky bridge that mirrors the caramelized crust of the marrow, while the fat coats the palate in a way that makes the espresso taste sweeter and more rounded. Together they read like a savory-bitter dessert, deeply satisfying and surprisingly clean at the finish.",
      "Scavino Barolo": "Barolo's high tannin — built from nebbiolo's grippy polyphenols — binds directly to the marrow's collagen-rich fat, stripping it from the palate and resetting it for the next bite, while the wine's tar and dried rose earthiness amplify the marrow's own roasted, smoky depth. What the guest experiences is a sense of the richness becoming manageable, with a long, savory finish that neither food nor wine could achieve on its own.",
      "Caymus Cabernet Sauvignon": "The Caymus's jammy blackberry and toasted oak create a sweet-rich counterpoint that layers on top of the marrow's fatty umami rather than cutting through it, while its plush tannin provides just enough structure to keep the pairing from reading as too heavy. The experience is indulgent and full-throttle, with the fruit making the marrow taste almost buttery and the fat softening the oak into something closer to vanilla.",
      "The Manhattan": "The rye spice and sweet vermouth's bittering botanicals create a tension with the marrow's unctuousness — the spice registers as heat against the fat, and the vermouth's herbal notes sharpen the marrow's smoke. What the guest feels is a clean reset at the back of the palate, where the whiskey's warmth and the marrow's richness chase each other down without either one winning.",
      "Silver Oak Cabernet Sauvignon": "The tannins in Silver Oak act as a fat solvent, cutting through the marrow's lipid richness while cedar and blackberry fill the space the fat leaves behind. The guest gets a clean finish instead of a heavy one, with the smoke from the marrow char amplifying the wine's oak.",
      "Ghost Block Cabernet Sauvignon": "Ghost Block's dark-fruit concentration and firm tannic structure give the marrow's umami something to push against, preventing either from going flat. Together they create a sustained savory-fruit finish that neither could hold on its own.",
      "Venge Silencieux": "The concentrated dark fruit in Silencieux mirrors the depth of roasted marrow fat, and the wine's density means it isn't erased by the richness of the bone. What the guest tastes is an amplified, almost meaty intensity that lingers through the finish.",
      "Brussels and Belly": "The bone marrow loads up with fat and smoke, and the Brussels and belly takes that thread and runs with it — pork belly doubling down on the richness while the charred bitterness of the Brussels finally gives the palate somewhere to go. It deepens the same profile instead of breaking from it.",
      "Creamed Spinach": "The bone marrow is pure fat and umami, and the creamed spinach stays in that same rich, dairy-forward lane without repeating it exactly — the cream and parmesan echo the marrow's lushness while the spinach grounds it with something earthy and savory. It's a seamless move deeper into the meal.",
      "Jordan Cabernet Sauvignon": "Jordan's cedar and restrained dark cherry provide enough structure to temper the fat without overwhelming the marrow's delicate smoky note. The pairing reads as elegant — the marrow softens Jordan's tannins while the wine lifts the dish past heaviness.",
      "Faust Napa Valley Cabernet": "Faust's bold dark-fruit core and structured tannins bind to the marrow's fat molecules the way acid would in a leaner wine, providing textural contrast rather than harmony. The guest experiences a round, mouth-coating richness that resolves cleanly as the tannins do their work.",
      "House Wedge": "If they leaned into the bone marrow's deep, fatty richness, the wedge is the reset — cold iceberg, bright blue cheese tang, and crisp bacon cut right through that indulgence and wake the palate back up.",
      "Chocolate Brownie": "The bone marrow primes them for pure indulgence, and the brownie just doubles down — same dense, unapologetic richness, but now that umami-smoke warmth gives way to bittersweet chocolate depth.",
      "Peanut Butter Brownie": "If they went all in on the bone marrow's savory fat, the peanut butter brownie speaks that same language — the nuttiness mirrors the marrow's depth while the chocolate gives it a sweet, roasted finish.",
      "Cheesecake": "The bone marrow is all about luxurious, silky fat, and the cheesecake carries that same creamy weight forward — the tangy brightness of the cream cheese cuts just enough to feel like a satisfying turn rather than more of the same."
    }
  },
  {
    name: 'Crab Cake',
    category: 'starter',
    profile: ['delicate','sweet','seafood','crispy','light'],
    excellent: ['Laurent Perrier Le Cuvée Brut','Jean-Pierre Grossot Chablis','Elk Cove Pinot Blanc','Raventós Cava de NIT Rosé Brut','St Supéry Sauvignon Blanc'],
    strong: ['Lingua Franca Avni Pinot Noir','Domaine de Berthiers Pouilly-Fumé','Joseph Mellot Sancerre','Cucumber Gimlet','French 75'],
    works: ['Le Garenne Rosé','Evening Land Seven Springs','Bee\'s Knees'],
    avoid: ['Opus One','Shafer Hillside Select','Caymus Cabernet Sauvignon','Bowdie\'s Old Fashioned','The Manhattan']
  ,
    pairingNotes: {
      "Laurent Perrier Le Cuvée Brut": "The persistent carbonation mechanically scrubs the fried crust's oil from the palate while the wine's toasty brioche note mirrors the browned exterior of the cake. Each bite of crab tastes fresher and sweeter than the last.",
      "Jean-Pierre Grossot Chablis": "Grossot's oyster-shell minerality speaks directly to the oceanic iodine compounds in fresh crab, creating a sensation that reads as briny and coastal rather than fishy. The citrus acidity cuts the breadcrumb binder and leaves the sweet crab meat as the dominant flavor.",
      "Elk Cove Pinot Blanc": "The Pinot Blanc's pear and apple fruit sit in the same delicate sweetness register as Dungeness or blue crab, so neither overwhelms the other. The wine's crisp minerality lifts the crab's natural sweetness without the sharpness of a high-acid Sauvignon Blanc that would flatten it.",
      "Raventós Cava de NIT Rosé Brut": "The mousse from the cava lifts the fried crust off the palate while the strawberry-tinged acidity mirrors the natural sweetness of the crab meat. Together, the effervescence scrubs the richness of the remoulade and leaves the crab's delicate flavor front and center.",
      "St Supéry Sauvignon Blanc": "The grapefruit zest and cut-grass character in the Sauvignon Blanc act as a squeeze of lemon over the cake, brightening the sweet crab without overwhelming it. The high acidity slices through the pan-fried exterior and resets the palate between each bite.",
      "Lingua Franca Avni Pinot Noir": "The silky tannins and bright cherry fruit in the Pinot Noir are light enough not to crowd the delicate crab, while the wine's earthy undertone adds a savory dimension the cake's seasoning reaches toward. The result is a rare red pairing where the wine amplifies rather than bulldozes the seafood.",
      "Domaine de Berthiers Pouilly-Fumé": "The flinty, gunsmoke minerality in this Pouilly-Fumé echoes the brininess of the crab the way a squeeze of lemon over oysters works — sharpening the ocean character rather than competing with it. The citrus-driven finish extends the sweetness of the lump crab across the whole palate.",
      "Joseph Mellot Sancerre": "The Sancerre's chalky minerality and grassy citrus notes cut through the golden crust and pull out the salinity buried in the crab meat. On the finish, the wine's acidity keeps the richness of any accompanying aioli or remoulade from lingering too long.",
      "Cucumber Gimlet": "The cool, water-fresh character of the cucumber and the bright lime acid in the gimlet act like a palate cleanser built into the pairing itself, keeping the crab's sweetness vivid from first bite to last sip. The botanical backbone of the gin adds an herbal complexity that plays against the caramelized crust without competing with the seafood.",
      "French 75": "The lemon juice and dry sparkling wine in the French 75 replicate the classic crab-and-citrus combination, while the gin's juniper and botanicals push the cake's seasoning into sharper focus. The bubbles carry the gin's aromatics across the palate just ahead of the crab, creating a rolling sequence of flavor rather than a single note.",
      "Le Garenne Rosé": "The dry red-fruit character of the rosé softens next to the crab's sweetness without adding weight, keeping the pairing in the same delicate register as the dish itself. It works as a crowd-pleasing middle ground — approachable enough for guests new to wine pairings but structured enough not to disappear next to the cake's crispy exterior.",
      "Evening Land Seven Springs": "The Willamette Valley Pinot's bright Bing cherry and forest-floor earthiness cut against the sweetness of the crab without overpowering it, while its silky low tannin lets the delicate lump meat hold its own. Together, you get a savory-fruit contrast where neither the wine nor the crab disappears into the other.",
      "Bee's Knees": "The honey syrup in the Bee's Knees mirrors the natural glycine-driven sweetness of fresh crab, while the lemon juice and gin botanicals act like a squeeze of citrus over the cake — brightening the fried crust without dulling it. That first sip after a bite cleans the palate and pulls the sweetness forward."
    }
  },
  {
    name: 'Seafood Tower',
    category: 'starter',
    profile: ['seafood','delicate','briny','fresh','celebratory','varied'],
    excellent: ['Laurent Perrier Le Cuvée Brut','Raventós Cava de NIT Rosé Brut','Paul Bara Grand Rosé Brut','Jean-Pierre Grossot Chablis','French 75'],
    strong: ['Elk Cove Pinot Blanc','Joseph Mellot Sancerre','St Supéry Sauvignon Blanc','Veuve Clicquot Brut'],
    works: ['Le Garenne Rosé','Cucumber Gimlet','Bee\'s Knees'],
    avoid: ['Opus One','Caymus Cabernet Sauvignon','Bowdie\'s Old Fashioned','Scavino Barolo']
  ,
    pairingNotes: {
      "Laurent Perrier Le Cuvée Brut": "The aggressive carbonation and high acidity in this Champagne act as a palate scrubber between oysters, shrimp, and crab, resetting brine levels so each bite reads as fresh as the first. The toasty autolytic notes from extended lees aging give the pairing a subtle richness that keeps the tower from feeling lean.",
      "Raventós Cava de NIT Rosé Brut": "The red-fruit character in this Pinot Noir-driven Cava — think dried strawberry and blood orange — contrasts the iodine and brine of raw shellfish in a way that makes the seafood taste cleaner and sweeter than it does alone. The fine persistent bubble lifts the texture of chilled shrimp and crab off the palate without flattening the flavors.",
      "Paul Bara Grand Rosé Brut": "Paul Bara's Grand Cru Pinot Noir base brings a weight and red-berry intensity that can actually stand up to the fattier, richer elements of the tower — lobster, crab, and smoked fish — without being bulldozed. The result is a pairing that feels indulgent rather than delicate, where the wine adds body the seafood alone doesn't have.",
      "Jean-Pierre Grossot Chablis": "Chablis from Grossot carries a distinct oyster-shell minerality sourced from the Kimmeridgian limestone and fossilized marine sediment in the soil, making it functionally the same flavor environment as a freshly shucked oyster. When you taste both together, the line between what's in the glass and what's on the shell dissolves entirely.",
      "French 75": "The gin botanicals — juniper, coriander, citrus peel — echo the fresh herb garnishes and lemon typically served alongside a tower, while the Champagne top draws out the brine in raw oysters and amplifies their salinity. That carbonation hits the finish like a wave, leaving the palate clean and ready for the next shell.",
      "Elk Cove Pinot Blanc": "Elk Cove's Pinot Blanc leads with ripe pear and green apple over a chalky mineral backbone that mirrors the cool, clean finish of fresh shellfish without introducing any competing fruit sweetness. Sipped alongside chilled crab or shrimp, the wine's texture — slightly round but driven by acid — makes the seafood taste like it came out of the water five minutes ago.",
      "Joseph Mellot Sancerre": "Sancerre's flint minerality and high-acid citrus match the iodine-salinity of the oysters and crudo without flattening the delicate sweetness underneath. Guests get a clean, saline finish that makes each bite of shellfish taste like it just came out of the ocean.",
      "St Supéry Sauvignon Blanc": "The grapefruit pith and cut-grass notes in this Napa Sauvignon Blanc act as a palate cleanser against the brine and fat of chilled seafood, cutting through without overwhelming. The result is a bright, almost effervescent mouthfeel between bites, even though there are no bubbles in the glass.",
      "Veuve Clicquot Brut": "The autolytic toast and brioche character from extended lees aging gives the Veuve enough richness to stand up to lobster and king crab while the active carbonation scrubs the palate between bites of fattier shellfish. Guests will notice the crab's sweetness intensifying each time the bubbles clear the residual brine.",
      "Le Garenne Rosé": "The Grenache-driven strawberry and dried rose petal notes in this dry Provençal rosé create a gentle contrast to the salinity of the tower, where the slight red-fruit sweetness makes the brine taste more vivid rather than dulling it. It's a pairing that reads as refreshing rather than heavy, keeping the whole tower feeling light across multiple rounds.",
      "Cucumber Gimlet": "The gin's botanical juniper and the fresh cucumber distillate share a green, aromatic quality with raw oysters and cold crustaceans — both have that same vegetal-mineral edge that sits just behind brine. When they land together, the citrus acid in the gimlet lifts the sweetness of the shrimp and crab while the cucumber keeps everything tasting cold and clean.",
      "Bee's Knees": "The raw honey syrup in the Bee's Knees introduces just enough floral sweetness to pull out the natural sugars in the lobster and scallop without turning the pairing rich, while the lemon juice and gin botanicals hold the acidity in check against the salt. Guests get a honeyed finish that makes the more delicate shellfish taste almost creamy."
    }
  },
  {
    name: 'Shrimp Cocktail',
    category: 'starter',
    profile: ['seafood','delicate','briny','chilled','classic'],
    excellent: ['Laurent Perrier Le Cuvée Brut','Jean-Pierre Grossot Chablis','St Supéry Sauvignon Blanc','Raventós Cava de NIT Rosé Brut'],
    strong: ['Elk Cove Pinot Blanc','Stoneleigh Sauvignon Blanc','Cucumber Gimlet','French 75','The Happy Wife'],
    works: ['Le Garenne Rosé','Lingua Franca Avni Pinot Noir','Bee\'s Knees','Transfusion'],
    avoid: ['Opus One','Caymus Cabernet Sauvignon','Bowdie\'s Old Fashioned','Scavino Barolo']
  ,
    pairingNotes: {
      "Laurent Perrier Le Cuvée Brut": "The persistent, fine mousse and green-apple acid in this Champagne cut directly through the horseradish heat in the cocktail sauce, resetting the palate so the chilled shrimp's natural sweetness registers cleanly on each bite. The toasty lees character bridges the gap between the shrimp's oceanic brine and the bright citrus of the sauce, pulling the whole dish into focus.",
      "Jean-Pierre Grossot Chablis": "Chablis from Grossot carries an oyster-shell minerality from Kimmeridgian limestone soils that is essentially the same saline compound found in cold-water shellfish, so the wine doesn't contrast the shrimp — it amplifies it. Guests taste a seamless, ocean-forward finish where the shrimp's sweetness and the wine's lean citrus acid feel like a single, unified flavor rather than two separate things.",
      "St Supéry Sauvignon Blanc": "The wine's grapefruit zest and cut-grass acidity mirror the lemon in the cocktail sauce and lift the natural iodine sweetness of cold gulf shrimp. Together, the salinity in the shrimp amplifies the wine's minerality, making both taste cleaner and brighter than either does alone.",
      "Raventós Cava de NIT Rosé Brut": "The cava's fine bubbles and strawberry-citrus edge slice through the horseradish heat in the cocktail sauce while the briny shrimp draws out a subtle red-fruit depth in the wine. Each sip resets the palate, so the shrimp stays tasting fresh and sweet from the first piece to the last.",
      "Elk Cove Pinot Blanc": "The wine's green apple crispness and wet-stone minerality echo the ocean salinity of the shrimp without competing with its delicate sweetness. On the palate, that mineral backbone makes the chilled shrimp taste almost creamier, rounding out the texture in a way a more acidic white wouldn't.",
      "Stoneleigh Sauvignon Blanc": "The wine's passionfruit and lime-pith brightness cuts directly against the spice of the horseradish, cooling it down and letting the shrimp's natural sweetness come forward. The lighter body keeps the pairing from feeling heavy, so it works as an opener without filling the guest up before their entrée.",
      "Cucumber Gimlet": "The gin's botanical juniper and fresh cucumber distillate share the same cool, green register as chilled shrimp, creating a mirror of freshness rather than a contrast. When the lime acid in the gimlet hits the cocktail sauce, it tames the horseradish burn and leaves a clean, almost herbaceous finish.",
      "French 75": "The champagne's effervescence carries the gin's citrus oils across the palate just as the brine of the shrimp lingers, and that collision of bubbles and salinity amplifies both. The lemon in the cocktail brightens the horseradish into something closer to a sharp, clean heat rather than a heavy burn.",
      "The Happy Wife": "The ginger in the cocktail plays directly off the horseradish in the cocktail sauce — both are sharp, root-driven heat, so they reinforce each other and make the shrimp's sweetness taste more pronounced by contrast. The orange and vodka base keeps things light enough that the pairing feels lively rather than spicy.",
      "Le Garenne Rosé": "The wine's dry red-fruit character and fresh acidity provide just enough contrast to the brine without the effervescence or intensity to fully cut through the horseradish. It's a relaxed pairing — the shrimp and rosé coexist pleasantly, with the wine's strawberry note softening the cocktail sauce's edge without fully resolving it.",
      "Lingua Franca Avni Pinot Noir": "The Pinot's bright maraschino cherry and silky tannins are light enough not to overwhelm the shrimp, while its subtle earthiness draws out the brine the way a squeeze of lemon would. Together, the delicacy of the chilled shrimp stays intact and the wine reads as rounder and more generous than it does on its own.",
      "Bee's Knees": "The honey syrup in the Bee's Knees softens the gin's botanicals and mirrors the natural sweetness in the shrimp, while the lemon juice cuts straight through the cold, briny finish. The guest gets a back-and-forth where each sip resets the palate and makes the next bite of shrimp taste cleaner.",
      "Transfusion": "The Concord grape juice brings a jammy sweetness that contrasts the salt and iodine of the shrimp, and the ginger beer adds a carbonated lift that scrubs the palate between bites. What lands at the table is something bright and almost refreshing — the cocktail makes the shrimp feel lighter, the shrimp makes the cocktail feel less sweet."
    }
  },
  {
    name: 'Seared Scallops',
    category: 'starter',
    profile: ['seafood','delicate','sweet','seared','rich','light'],
    excellent: ['Far Niente Chardonnay','Keenan Chardonnay','Jean-Pierre Grossot Chablis','Laurent Perrier Le Cuvée Brut','Elk Cove Pinot Blanc'],
    strong: ['Domaine de Berthiers Pouilly-Fumé','Joseph Mellot Sancerre','Lingua Franca Avni Pinot Noir','Cucumber Gimlet'],
    works: ['Le Garenne Rosé','Fisher Unity Pinot Noir','Bee\'s Knees'],
    avoid: ['Caymus Cabernet Sauvignon','Bowdie\'s Old Fashioned','Scavino Barolo','Opus One']
  ,
    pairingNotes: {
      "Far Niente Chardonnay": "The wine's malolactic-driven butter and toasted oak are the same flavor language as the browned crust on the scallop — both are products of heat transforming something simple into something rich. On the palate, the stone fruit in the wine pulls the natural sweetness of the scallop forward while the acidity keeps the fat from either one sitting heavy.",
      "Keenan Chardonnay": "The Keenan's tropical fruit — think ripe mango and pineapple — amplifies the inherent sweetness in the scallop's muscle proteins, while its oak-driven vanilla rounds the caramelized sear without competing with it. The guest gets a lush, almost dessert-adjacent richness on the mid-palate that the wine's acidity then cleanly resolves.",
      "Jean-Pierre Grossot Chablis": "Chablis fermented in steel retains a calcium-and-chalk minerality that echoes the oceanic terroir the scallop came from, creating a saline thread that runs through both the wine and the shellfish. That shared brininess makes the scallop's sear taste more pronounced by contrast, and the Chablis's lean citrus acidity cuts the fat from the pan without stripping any of the sweetness.",
      "Laurent Perrier Le Cuvée Brut": "The persistent bubble structure in the Brut physically scrubs the richness of the seared crust off the palate, and the toasty autolytic notes from extended lees aging mirror the Maillard browning on the scallop's surface. What the guest experiences is a rolling cycle — richness, lift, sweetness, reset — that makes both the scallop and the Champagne taste more precise.",
      "Elk Cove Pinot Blanc": "Pinot Blanc's apple and pear fruit sits in the same register as the scallop's natural glycine-driven sweetness, and its stony minerality bridges to the sea without any of the oak weight that could flatten a delicate piece of shellfish. The result is a pairing that amplifies sweetness on both sides while the wine's clean acidity keeps the finish bright and the next bite feeling just as fresh as the first.",
      "Domaine de Berthiers Pouilly-Fumé": "The flinty minerality and sharp grapefruit zest in the Pouilly-Fumé cut right through the Maillard crust on the scallop and meet the sweet, briny flesh underneath. The guest gets a clean finish where neither the scallop nor the wine lingers too long — each resets the palate for the next bite.",
      "Joseph Mellot Sancerre": "The Sancerre's grassy, high-acid citrus profile acts as a squeeze of lemon would — lifting the natural sweetness of the scallop while the sauvignon blanc's pyrazines echo the subtle oceanic iodine in the sear. What lands on the palate is brightness and length, the scallop tasting sweeter and the wine tasting rounder.",
      "Lingua Franca Avni Pinot Noir": "The Avni's low tannin and red cherry acidity create contrast against the caramelized crust without overwhelming the delicate texture of the scallop's interior. The guest experiences a fleeting savory-fruit moment — the silky mouthfeel of the wine mirrors the buttery center of the scallop before both fade clean.",
      "Cucumber Gimlet": "The gin's botanicals and fresh cucumber water amplify the clean oceanic sweetness of the scallop the way a mignonette works on an oyster — adding herbal lift without fat or weight. Together they read as cold, green, and bright, the citrus from the gimlet pulling the caramelized sear into sharp relief.",
      "Le Garenne Rosé": "The rosé's dry red-fruit acidity — think strawberry skin rather than jam — provides enough structure to meet the sear without competing with the scallop's sweet center. The guest gets a savory-meets-fresh contrast where the wine's crispness keeps the dish from feeling rich.",
      "Fisher Unity Pinot Noir": "The Unity's earthy undertone and medium-weight cherry fruit walk alongside the scallop's sear rather than framing it the way a white would, creating a warmer, more savory pairing. It works because the scallop's sweetness softens the pinot's tannin, and the wine's acidity keeps the plate from feeling heavy.",
      "Bee's Knees": "The honey in the Bee's Knees echoes the natural glycine-driven sweetness of the scallop meat, while the lemon juice and gin botanicals cut through the fat from the sear. The guest tastes a soft, floral sweetness first, then a clean citrus snap that finishes dry."
    }
  },
  {
    name: 'Escargot',
    category: 'starter',
    profile: ['rich','buttery','herbaceous','garlic','French','indulgent'],
    excellent: ['Jean-Pierre Grossot Chablis','Domaine de Berthiers Pouilly-Fumé','Joseph Mellot Sancerre','French 75','Bee\'s Knees'],
    strong: ['Elk Cove Pinot Blanc','Laurent Perrier Le Cuvée Brut','Corpse Reviver','Keenan Chardonnay'],
    works: ['Le Garenne Rosé','Lingua Franca Avni Pinot Noir','Cucumber Gimlet'],
    avoid: ['Caymus Cabernet Sauvignon','Opus One','Bowdie\'s Old Fashioned','Scavino Barolo']
  ,
    pairingNotes: {
      "Jean-Pierre Grossot Chablis": "The Chablis' oyster-shell minerality and high malic acidity slice through the garlic butter like a knife, resetting the palate between bites so the herbs read as fresh rather than heavy. What the guest experiences is the escargot tasting lighter and more delicate than it is, with the wine's chalky finish underlining the earthiness of the snail itself.",
      "Domaine de Berthiers Pouilly-Fumé": "The flint and citrus acidity in this Loire Sauvignon Blanc cut straight through the garlic butter, while its grassy, mineral edge mirrors the herbaceous parsley in the dish. What you get is a clean reset between each bite — the richness never builds up, and the wine keeps tasting brighter the more you eat.",
      "Joseph Mellot Sancerre": "Sancerre's chalky minerality and zesty grapefruit acidity act as a counterweight to the fat from the beurre persillade, and its grassy green notes echo the herbs without competing with them. The result is that the garlic reads as savory and aromatic rather than sharp, and the wine finishes almost creamy by contrast.",
      "French 75": "The Champagne's effervescence physically lifts the butter fat off the palate, and the gin botanicals — juniper, coriander — resonate with the parsley and garlic in the dish. Each sip scrubs the richness clean, so every escargot tastes like the first one.",
      "Bee's Knees": "The honey syrup in this cocktail picks up the faint earthiness of the snail itself, while the lemon juice and gin's citrus-forward botanicals cut through the garlic butter with real precision. The pairing lands somewhere between savory and floral — the garlic softens, the herbs open up, and the whole thing feels lighter than it has any right to.",
      "Elk Cove Pinot Blanc": "Pinot Blanc's green apple acidity and subtle pear weight give it enough body to stand up to the butter without the fat overwhelming it, and its mineral backbone keeps the wine from going flabby mid-palate. The effect is a gentle contrast — the richness of the escargot rounds out the wine's crispness, and the wine keeps the dish from feeling heavy.",
      "Laurent Perrier Le Cuvée Brut": "The fine persistent bubbles and crisp citrus of this Champagne break up the emulsified butter in the sauce, and a faint toasty brioche note bridges to the richness of the dish rather than fighting it. You get the fat and the freshness at once — the snails taste more buttery, and the Champagne tastes more substantial.",
      "Corpse Reviver": "The absinthe rinse brings an anise note that directly echoes the tarragon and parsley in a classic beurre persillade, while the Cointreau and lemon juice provide sharp citrus acidity to dissolve the butter fat. It's a surprisingly aggressive pairing that works because the herbal register of the cocktail and the dish are speaking the same language.",
      "Keenan Chardonnay": "This is a like-with-like pairing — the Chardonnay's oak-driven butter and vanilla align with the beurre persillade so closely that the two merge rather than contrast, with the wine's tropical fruit providing the only real brightness. It's a richer, more indulgent experience than a Loire pairing would give you, so it works best for guests who want the full decadence of the dish rather than a palate reset.",
      "Le Garenne Rosé": "The rosé's bright acidity and strawberry-cranberry fruit cut through the garlic-laden compound butter without competing with the parsley and thyme. Guests taste the herb first, then the wine lifts the richness off the palate and resets it clean.",
      "Lingua Franca Avni Pinot Noir": "The Pinot's silky tannins and cherry-earth profile find a bridge in the umami depth of the snail itself, while the fat from the butter softens any grip in the wine. Together the dish reads more savory and the wine reads more generous than either does alone.",
      "Cucumber Gimlet": "The gin's botanical spine — juniper, coriander — runs parallel to the parsley and tarragon in the escargot butter, and the cucumber and lime juice slice through the fat the way a squeeze of lemon would. The pairing makes the dish feel lighter and the cocktail feel more herbal."
    }
  },
  {
    name: 'Burrata',
    category: 'starter',
    profile: ['creamy','mild','fresh','delicate','dairy-rich'],
    excellent: ['Le Garenne Rosé','Jean-Pierre Grossot Chablis','Laurent Perrier Le Cuvée Brut','Raventós Cava de NIT Rosé Brut','Bee\'s Knees'],
    strong: ['Elk Cove Pinot Blanc','St Supéry Sauvignon Blanc','Stoneleigh Sauvignon Blanc','Cucumber Gimlet','French 75'],
    works: ['Lingua Franca Avni Pinot Noir','G.D. Vajra Moscato d\'Asti','Domaine de Berthiers Pouilly-Fumé'],
    avoid: ['Caymus Cabernet Sauvignon','Opus One','Bowdie\'s Old Fashioned','Scavino Barolo']
  ,
    pairingNotes: {
      "Le Garenne Rosé": "The rosé's dry red-fruit brightness and light acidity provide contrast against the burrata's lactic creaminess, preventing the cheese from reading heavy on the palate. Guests experience a back-and-forth between cool dairy richness and the wine's crisp, strawberry-driven finish.",
      "Jean-Pierre Grossot Chablis": "The Chablis brings oyster-shell minerality and green apple acidity that creates a saline edge against the burrata's mild, milky fat — the same dynamic you get squeezing lemon over fresh mozzarella. The pairing makes the cheese taste cleaner and the wine taste rounder.",
      "Laurent Perrier Le Cuvée Brut": "The Champagne's persistent fine bubbles physically break the surface tension of the burrata's cream, and the toasty brioche note in the wine echoes the richness of the fresh curd without amplifying it. Guests get a textural contrast — effervescence against velvet — with the citrus finish clearing the palate.",
      "Raventós Cava de NIT Rosé Brut": "The Cava's red-fruit character and chalky Penedès minerality give the burrata's blank-canvas creaminess something to read against, while the bubbles lift the fat off the tongue. The result is a pairing that feels fresher and more vivid than either component suggests on its own.",
      "Bee's Knees": "The honey in the cocktail mirrors the faint sweetness in fresh burrata milk fat, and the gin botanicals and lemon juice provide the acidity the cheese lacks on its own. Together the pairing tastes the way a great caprese would — bright, floral, and clean.",
      "Elk Cove Pinot Blanc": "The wine's green apple acidity and wet-stone minerality cut through the fat in the fresh cream without stripping the cheese of its delicate milky sweetness. Guests get a clean, bright finish that resets the palate and makes the burrata taste fresher with every bite.",
      "St Supéry Sauvignon Blanc": "The grapefruit pith and grassy herbaceousness in this wine act as a sharp edge against the burrata's fat, while the citrus oils lift the lactic creaminess into something almost floral. The result is a pairing that feels lighter than either element alone.",
      "Stoneleigh Sauvignon Blanc": "Stoneleigh's leaner citrus profile and subtle grassiness create just enough contrast to keep the burrata's richness from sitting heavy on the palate. Guests notice the cheese tastes cleaner and more defined, like the wine is quietly clarifying what they're eating.",
      "Cucumber Gimlet": "The gin's botanical bite and the cucumber's chlorophyll freshness mirror the clean, grassy notes in fresh mozzarella curd, while the citrus in the gimlet keeps the cream from coating the palate. Together they read as a single cool, garden-fresh moment.",
      "French 75": "The wine's carbonation physically lifts the fat off the palate between bites, and the gin botanicals add just enough herbal structure to give the mild cheese something to lean against. Guests experience the burrata as silkier and the cocktail as crisper than either would be on their own.",
      "Lingua Franca Avni Pinot Noir": "The wine's low tannin and bright cherry acidity are gentle enough not to overwhelm the burrata's delicacy, and the silky texture of the Pinot mirrors the cream's smooth pull. It's a softer pairing — the fruit rounds the cheese rather than cutting it, giving the whole bite a subtle red-fruit finish.",
      "G.D. Vajra Moscato d'Asti": "The wine's residual sugar echoes the natural sweetness of fresh cream, while the fine effervescence keeps the pairing from feeling heavy or cloying. Guests get something almost dessert-like — a soft, peachy, cloud-like combination that stays surprisingly refreshing.",
      "Domaine de Berthiers Pouilly-Fumé": "The flint and chalk minerality in this Pouilly-Fumé act as a counterweight to the burrata's fat, and the citrus zest on the finish gives the cream a lifted, almost savory edge. The pairing is precise — both elements taste more defined together than they do apart."
    }
  },

  // ── SOUPS & SALADS ────────────────────────────────────────────────────────────

  {
    name: 'Shrimp Bisque',
    category: 'soup-salad',
    profile: ['rich','creamy','seafood','sweet','warm','indulgent'],
    excellent: ['Far Niente Chardonnay','Keenan Chardonnay','Jean-Pierre Grossot Chablis','Laurent Perrier Le Cuvée Brut'],
    strong: ['Elk Cove Pinot Blanc','Domaine de Berthiers Pouilly-Fumé','Lingua Franca Avni Pinot Noir','Raventós Cava de NIT Rosé Brut'],
    works: ['Le Garenne Rosé','Jordan Cabernet Sauvignon','Fisher Unity Pinot Noir'],
    avoid: ['Caymus Cabernet Sauvignon','Opus One','Scavino Barolo','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Far Niente Chardonnay": "The wine's malolactic butter and toasted oak mirror the bisque's cream base and the caramelized shrimp shells used to build the stock. The result is a seamless richness where the stone-fruit mid-palate lifts the sweetness of the shrimp without any one element dominating.",
      "Keenan Chardonnay": "Keenan's tropical fruit — mango, ripe pineapple — picks up the natural sweetness of the shrimp, while its bold oak structure holds its own against the bisque's heavy cream. The guest gets a layered texture experience: the wine's weight matches the soup spoon for spoon, then the fruit opens on the finish.",
      "Jean-Pierre Grossot Chablis": "Chablis's oyster-shell minerality and sharp citrus acidity cut through the cream's fat, essentially resetting the palate between each sip. What the guest notices is how the bisque suddenly tastes brighter and more seafood-forward, as if the salinity of the shrimp just came into focus.",
      "Laurent Perrier Le Cuvée Brut": "The Champagne's fine bubbles physically break up the bisque's emulsified cream on the palate, and its toasty brioche character aligns with the bisque's reduced, roasted-shell base. Each sip feels like a palate reset that also adds a layer of complexity — the bisque gets richer, the wine gets rounder.",
      "Elk Cove Pinot Blanc": "Pinot Blanc's crisp apple and pear acidity provides just enough brightness to cut the cream without stripping the bisque of its richness, while its light mineral finish echoes the sea-salt note in the shrimp. The pairing keeps the soup feeling elegant rather than heavy, with the fruit adding a subtle freshness to the sweet shrimp on the back end.",
      "Domaine de Berthiers Pouilly-Fumé": "The flint and chalk minerality in this Loire Sauvignon Blanc speaks directly to the oceanic character of the shrimp, reinforcing the briny depth in the bisque's stock. The wine's lean citrus acidity slices through the cream fat cleanly, leaving the guest with a clean finish and a sharpened awareness of the seafood's natural sweetness.",
      "Lingua Franca Avni Pinot Noir": "The wine's silky tannins and bright cherry fruit create a contrast pairing — red fruit against rich cream — where the acidity does the work of a squeeze of lemon, lifting the bisque without competing with it. The guest experiences an unexpected harmony: the lightness of the Pinot keeps the soup from feeling indulgent, and the bisque's sweetness softens the wine's earthy undertone.",
      "Raventós Cava de NIT Rosé Brut": "The Cava's carbonation and red-fruit brightness — strawberry, raspberry — play against the bisque's savory cream in a tension that keeps both elements tasting more vivid than they would alone. The guest gets a back-and-forth contrast on the palate: the soup's richness amplifies the fruit, and the bubbles keep each sip of bisque feeling lighter than the bowl suggests.",
      "Le Garenne Rosé": "The rosé's bright strawberry acidity cuts through the bisque's heavy cream base, while its dry finish keeps the shrimp's sweetness from turning cloying. Together they create a clean, coastal brightness — rich on entry, refreshing on the finish.",
      "Jordan Cabernet Sauvignon": "The Jordan's cedar tannins and dark cherry fruit act as a structural counterpoint to the bisque's fat-forward cream, giving the palate something to grip against the richness. The result is an unexpected savory depth — the shrimp's sweetness draws out the wine's fruit while the tannins scrub the cream clean.",
      "Fisher Unity Pinot Noir": "The Pinot's earthy, forest-floor undertones bridge to the bisque's shellfish depth, while its medium-weight cherry fruit mirrors the sweetness of the shrimp without overwhelming it. On the palate, the wine's natural acidity lifts the cream and turns what could be a heavy course into something round and lingering."
    }
  },
  {
    name: 'House Wedge',
    category: 'soup-salad',
    profile: ['crisp','creamy','fresh','classic','approachable'],
    excellent: ['Le Garenne Rosé','Lingua Franca Avni Pinot Noir','Raventós Cava de NIT Rosé Brut','St Supéry Sauvignon Blanc'],
    strong: ['Laurent Perrier Le Cuvée Brut','Stoneleigh Sauvignon Blanc','Elk Cove Pinot Blanc','Cucumber Gimlet'],
    works: ['Jordan Cabernet Sauvignon','Faust Napa Valley Cabernet','Fisher Unity Pinot Noir','French 75'],
    avoid: ['Opus One','Shafer Hillside Select','Heitz Martha\'s Vineyard']
  ,
    pairingNotes: {
      "Le Garenne Rosé": "The rosé's red-fruit brightness and dry finish echo the fresh acidity in the blue cheese dressing while matching the crispness of the iceberg at a textural level. Guest gets a clean, summery contrast — fruit against salt, freshness against fat.",
      "Lingua Franca Avni Pinot Noir": "The Avni's silky cherry fruit and light body mirror the wedge's cool crispness without fighting the blue cheese, letting the wine's subtle earthiness amplify the savory funk in the dressing. Together the pairing reads as effortless — nothing dominates, everything sharpens.",
      "Raventós Cava de NIT Rosé Brut": "The Cava's fine bubbles and crisp red-fruit character physically cut through the blue cheese dressing's fat while the brut dosage keeps the palate from going flat. Each bite of wedge resets the palate, and the wine stays bright and alive through the entire course.",
      "St Supéry Sauvignon Blanc": "The Sauvignon Blanc's grapefruit acidity and grassy bite lock onto the blue cheese's lactic tang, turning the dressing's richness into something vivid and sharp rather than heavy. The result is a clean, green-edged brightness that makes the iceberg taste colder and the bacon more savory.",
      "Laurent Perrier Le Cuvée Brut": "The Champagne's toasty brioche notes create a deliberate contrast against the wedge's cold, raw crispness, while its citrus acidity mirrors the brightness in the blue cheese dressing. That interplay between warm complexity and cool freshness makes the pairing feel more composed than either element alone.",
      "Stoneleigh Sauvignon Blanc": "The wine's grapefruit zest and cut-grass acidity mirror the iceberg's snap and lift the blue cheese dressing by slicing through its fat without flattening it. Together, the creaminess softens the wine's edge while the wine keeps every bite tasting like the first.",
      "Elk Cove Pinot Blanc": "The wine's green apple and wet-stone minerality echo the cool, clean crunch of the iceberg and find a quiet counterpoint in the blue cheese's lactic richness. On the palate, the cheese turns creamier and the wine rounder, each pulling the other toward the center.",
      "Cucumber Gimlet": "The gin's botanical backbone and fresh cucumber water share the same cool, herbaceous register as crisp iceberg lettuce, while the citrus in the gimlet cuts the blue cheese fat the way a squeeze of lemon would. The result is a salad course that tastes simultaneously brighter and more refreshing than either element alone.",
      "Jordan Cabernet Sauvignon": "The cedar and dried-herb notes in the Jordan find an unlikely anchor in the blue cheese's funk, which softens the tannin just enough to keep the wine from riding over the salad. The dark cherry fruit then loops back and makes the tomato and bacon feel sweeter and more savory at once.",
      "Faust Napa Valley Cabernet": "The Faust's dark fruit concentration and firm tannin structure get tamed by the blue cheese's fat and salt, which act as a natural tannin buffer the way a steak would. That negotiation leaves the wine tasting more approachable and the wedge tasting richer and more substantial than it looks.",
      "Fisher Unity Pinot Noir": "The Pinot's red cherry brightness and earthy undertone find common ground with the salad's crisp freshness and the funky, mineral edge of the blue cheese. Together they create a pairing that stays light on its feet — the wine lifts the salad without overpowering it, and the dressing gives the mid-palate fruit somewhere to land.",
      "French 75": "The Champagne's persistent bubbles scrub the blue cheese fat off the palate between bites, while the gin botanical and lemon keep the whole course feeling airy and precise. Every sip essentially resets the palate so the next bite of iceberg tastes just as clean and cold as the first."
    }
  },
  {
    name: 'Grilled Caesar',
    category: 'soup-salad',
    profile: ['smoky','umami','creamy','bold','anchovy','charred'],
    excellent: ['Jean-Pierre Grossot Chablis','Scavino Barolo','Domaine de Berthiers Pouilly-Fumé','Lingua Franca Avni Pinot Noir'],
    strong: ['Keenan Chardonnay','Jordan Cabernet Sauvignon','Raventós Cava de NIT Rosé Brut','Corpse Reviver'],
    works: ['Laurent Perrier Le Cuvée Brut','Faust Napa Valley Cabernet'],
    avoid: ['G.D. Vajra Moscato d\'Asti','Stoneleigh Sauvignon Blanc','Opus One']
  ,
    pairingNotes: {
      "Jean-Pierre Grossot Chablis": "The Chablis's oyster-shell minerality and lean citrus acidity are built to cut through fat, and they go to work here on the anchovy-and-egg richness of the Caesar dressing while the wine's cool limestone character mirrors the char on the romaine without competing with it. On the finish, the smoke on the lettuce reads almost briny, making the wine taste like it was made for the dish.",
      "Scavino Barolo": "Barolo's iron-edged tannins and dried cherry cut through the anchovy-and-egg richness of the dressing while the wine's tar and rose earthiness mirrors the char on the romaine. The guest gets a savory, almost meaty finish where neither the wine nor the salad feels heavy.",
      "Domaine de Berthiers Pouilly-Fumé": "The Sauvignon Blanc's flinty, gun-smoke minerality locks onto the grilled char of the lettuce, and the wine's sharp acidity shears through the Caesar's emulsified anchovy-Parmesan fat. What the guest tastes is a clean, bright reset between each bite — the creaminess disappears without dulling the smoke.",
      "Lingua Franca Avni Pinot Noir": "The Pinot's bright cherry and silky, low-tannin structure contrast the bold umami salinity of the dressing rather than competing with it, letting the wine's delicate fruit read louder against the salt. The guest experiences the Caesar as richer and more complex while the wine tastes more vivid than it would alone.",
      "Keenan Chardonnay": "The Chardonnay's malolactic-driven butter and toasted oak mirror the egg yolk and Worcestershire base of the Caesar dressing, creating a sustained richness that amplifies both. The guest gets a round, almost indulgent mid-palate where the wine and the salad feel like they were made from the same recipe.",
      "Jordan Cabernet Sauvignon": "Jordan's cedar and restrained dark-cherry structure offer just enough tannin grip to handle the anchovy depth without overwhelming the dressing's acidity. The guest finishes with a long, dry, savory note — the kind of balance where the food makes the wine taste more refined.",
      "Raventós Cava de NIT Rosé Brut": "The Cava's fine bubble structure and red-fruit acidity scrub the palate of the Caesar's creamy fat coat, and the rosé's strawberry-tart edge plays off the charred bitterness of the grilled romaine. The guest gets a refreshed palate after every bite, with a fleeting berry note that the salad alone wouldn't suggest.",
      "Corpse Reviver": "The Corpse Reviver's Cointreau citrus and absinthe rinse act like a cold-pressed acid cut against the egg-and-anchovy emulsion, while the gin's juniper botanical picks up the herbal, almost grassy char on the lettuce. The guest gets a bracing, clean contrast — the cocktail essentially does what a squeeze of lemon does to the dressing, but with more complexity.",
      "Laurent Perrier Le Cuvée Brut": "The Champagne's toasty autolytic notes — brioche and cream — find common ground with the Parmesan and roasted garlic in the dressing, while the persistent bead lifts the fat off the palate. The guest experiences the Caesar as lighter and more precise, with the salad's smoke momentarily amplifying the wine's depth.",
      "Faust Napa Valley Cabernet": "The Cab's dark cherry and cedar tannins cut through the anchovy-driven umami and charred romaine, while its structure holds up to the Parmesan crust without being overwhelmed. The guest gets a savory-meets-fruit tension that makes the smoke on the lettuce taste intentional rather than bitter."
    }
  },
  {
    name: 'Seasonal Soup',
    category: 'soup-salad',
    profile: ['variable','seasonal'],
    excellent: [],
    strong: ['Jean-Pierre Grossot Chablis','Lingua Franca Avni Pinot Noir','Le Garenne Rosé','Elk Cove Pinot Blanc'],
    works: [],
    avoid: [],
    variable: true,
    variablePrompt: 'What is today\'s soup? (e.g. French onion, butternut squash, tomato basil)'
  },

  // ── MAINS ─────────────────────────────────────────────────────────────────────

  {
    name: 'Faroe Island Salmon',
    category: 'main',
    profile: ['seafood','rich','fatty','delicate','fresh','seasonal'],
    excellent: ['Far Niente Chardonnay','Keenan Chardonnay','Jean-Pierre Grossot Chablis','Elk Cove Pinot Blanc','Lingua Franca Avni Pinot Noir','Evening Land Seven Springs'],
    strong: ['Domaine de Berthiers Pouilly-Fumé','Joseph Mellot Sancerre','Laurent Perrier Le Cuvée Brut','Raventós Cava de NIT Rosé Brut','Cucumber Gimlet','The Happy Wife','Transfusion'],
    works: ['Le Garenne Rosé','Fisher Unity Pinot Noir','Cristom Mt Jefferson Cuvée','Bee\'s Knees','Paloma','Creme Brulee','Beignets','Cheesecake'],
    avoid: ['Caymus Cabernet Sauvignon','Opus One','Shafer Hillside Select','Bowdie\'s Old Fashioned','Scavino Barolo','The Manhattan']
  ,
    pairingNotes: {
      "Far Niente Chardonnay": "The wine's malolactic butter and toasted oak mirror the salmon's own fat content and any pan-sear caramelization, creating a shared richness rather than contrast. On the palate, the peach and nectarine fruit lifts the fish off that fatty baseline and gives the finish a brightness it wouldn't have alone.",
      "Keenan Chardonnay": "The Keenan's tropical notes — mango, pineapple — play against the salmon's oceanic fat in a way that reads almost like a sauce, while the oak provides just enough grip to keep the wine from disappearing into the fish. Together they create a round, layered mouthfeel where the fruit does the work a squeeze of citrus normally would.",
      "Jean-Pierre Grossot Chablis": "The Chablis brings pure oyster-shell minerality and green apple acidity that cuts straight through the salmon's fat and resets the palate between each bite. The guest experiences the fish as cleaner and more delicate than it would taste on its own — the wine essentially sharpens the focus of the protein.",
      "Elk Cove Pinot Blanc": "The Pinot Blanc's crisp pear and mineral spine act as a palate cleanser against the salmon's rich omega-fat texture, while the apple mid-note bridges to the fish's subtle sweetness. Each sip recalibrates the palate so the next bite of salmon tastes like the first.",
      "Lingua Franca Avni Pinot Noir": "The wine's silky tannins are light enough not to clash with the salmon's delicate flesh, and its bright cherry fruit creates a fruit-meets-ocean contrast that's closer to a classic sauce pairing than a conventional red-with-fish warning. The guest gets a savory depth from the Pinot that the salmon alone can't generate.",
      "Evening Land Seven Springs": "The Seven Springs' forest-floor earthiness and restrained cherry find a counterpart in the salmon's natural umami, creating a pairing that reads more like terroir than fruit. The elegance of both means neither dominates — the guest gets a long, quietly complex finish where the fish and the wine seem to extend each other.",
      "Domaine de Berthiers Pouilly-Fumé": "The Pouilly-Fumé's flint and chalky minerality create a direct structural contrast to the salmon's fat, and the citrus acidity slices through the richness the way a squeeze of lemon over the plate would. The guest experiences the salmon as lighter and brighter than it is, with a clean, almost briny finish that keeps drawing them back.",
      "Joseph Mellot Sancerre": "The Sancerre's high acidity and flinty minerality cut through the salmon's omega-rich fat the same way a squeeze of lemon does — but with more complexity, pulling out the grassy, herbaceous edge of the fish. The guest gets a clean, bright finish after each bite where the fat is completely cleared from the palate.",
      "Laurent Perrier Le Cuvée Brut": "The persistent bubbles mechanically lift the salmon's fat off the palate while the Champagne's autolytic toastiness mirrors the sear on the fish's skin. Each sip resets the palate so the next bite of salmon tastes as clean and rich as the first.",
      "Raventós Cava de NIT Rosé Brut": "The Cava's effervescence scrubs the salmon's fat while its red-fruit character — think dried strawberry and pomegranate — draws out the natural sweetness in the fish's flesh. The result is a pairing that feels lighter than either element alone, with a long, berry-tinged finish.",
      "Cucumber Gimlet": "The gin's botanical oils and the fresh cucumber share the same green, chlorophyll-forward character as fresh dill, which is the salmon's most natural companion. The citrus acid in the gimlet cleaves through the fish's fat, leaving the guest with a cool, garden-fresh finish that makes the salmon's delicate flavor pop.",
      "The Happy Wife": "The ginger's sharp, warming heat and the orange's citrus acidity act as a two-pronged cut against the salmon's fatty richness, mimicking the classic ginger-citrus cure used on raw fish. The guest experiences a bright, slightly spiced finish that keeps the salmon from feeling heavy across the full plate.",
      "Transfusion": "The Concord grape juice brings a light, jammy sweetness that echoes the natural sugars in a butter-basted salmon, while the ginger adds just enough heat to keep the fat in check. The pairing reads as effortlessly light — the vodka base stays neutral, letting the salmon's delicate flavor remain the centerpiece.",
      "Le Garenne Rosé": "The rosé's dry red-fruit freshness and moderate acidity create a gentle contrast against the salmon's fat without overwhelming the fish's delicate texture. The guest gets a clean, softly fruited finish — the salmon stays forward, and the wine adds brightness without competing.",
      "Fisher Unity Pinot Noir": "The Pinot's earthy, forest-floor quality and soft tannins align with the salmon's umami depth rather than clashing with the fat, though the wine's weight sits right at the edge of what the fish can handle. When it works, the cherry fruit in the wine draws out the salmon's natural sweetness, but the guest should expect a richer, more food-driven experience than the other pairings on the table.",
      "Cristom Mt Jefferson Cuvée": "The Pinot's iron-tinged earthiness and low tannin structure won't overwhelm the salmon's delicate fat, while its cherry acidity cuts through the omega-rich flesh the way a squeeze of lemon would. Together, you get a savory, almost umami-driven finish that makes the fish taste meatier and the wine taste more mineral.",
      "Bee's Knees": "The honey syrup in the Bee's Knees mirrors the natural sweetness in the salmon's fat, while the gin's botanicals and lemon juice act as a brightness agent — doing the same work as a dill-caper sauce would on the plate. The result is a clean, aromatic finish that keeps the salmon tasting fresh rather than rich.",
      "Paloma": "Grapefruit's naringenin bitterness slices through the salmon's fat the way acidic citrus-based cures do, while the tequila's agave earthiness gives the fish a subtle vegetal counterpoint. What you get is a lighter, almost ceviche-like experience — the salmon feels leaner and the cocktail tastes rounder.",
      "Creme Brulee": "The salmon's buttery, delicate fat sets up the crème brûlée perfectly — both live in that refined, silky register, and the vanilla custard's gentle sweetness is the natural, elegant landing for a guest who appreciates subtlety.",
      "Beignets": "After the salmon's quiet richness, the beignets are a playful shift — same light touch, but now warm, airy, and dusted with powdered sugar, swapping oceanic fat for a nostalgic, carefree sweetness.",
      "Cheesecake": "The salmon's clean, fatty delicacy transitions beautifully into cheesecake — the creamy texture feels like a continuation while the citrusy tang lifts the finish, keeping everything feeling bright rather than heavy."
    }
  },
  {
    name: 'Market Fish',
    category: 'main',
    profile: ['seafood','variable','delicate','seasonal'],
    excellent: [],
    strong: ['Jean-Pierre Grossot Chablis','Laurent Perrier Le Cuvée Brut','Elk Cove Pinot Blanc','Lingua Franca Avni Pinot Noir'],
    works: [],
    avoid: [],
    variable: true,
    variablePrompt: 'What is today\'s market fish and preparation?'
  },
  {
    name: 'Roast Half Chicken',
    category: 'main',
    profile: ['poultry','rich','savory','roasted','seasonal','approachable'],
    excellent: ['Keenan Chardonnay','Far Niente Chardonnay','Lingua Franca Avni Pinot Noir','Cristom Mt Jefferson Cuvée','Muga Reserva'],
    strong: ['Jean-Pierre Grossot Chablis','Evening Land Seven Springs','Alexander Valley Chardonnay','The Happy Wife','Paloma','The BG'],
    works: ['Jordan Cabernet Sauvignon','Faust Napa Valley Cabernet','Le Garenne Rosé','Raventós Cava de NIT Rosé Brut','Margarita','Creme Brulee','Beignets','Cheesecake','Carrot Cake'],
    avoid: ['Opus One','Shafer Hillside Select','Heitz Martha\'s Vineyard','Bowdie\'s Old Fashioned','The Manhattan']
  ,
    pairingNotes: {
      "Keenan Chardonnay": "The wine's malolactic-driven butter and toasted oak are the same flavor compounds you get from basting and roasting — it's essentially the sauce and the cooking method in a glass. That mirror effect deepens the savory roasted skin and makes every bite feel more intentional, like the chicken was finished in a butter beurre blanc.",
      "Far Niente Chardonnay": "Far Niente's stone fruit and creamy texture ride the line between the chicken's rendered fat and its caramelized exterior, with enough acidity to keep the pairing from feeling heavy. The nectarine and peach notes in the wine give the poultry a brightness it doesn't have on its own, almost like a fruit-forward pan sauce.",
      "Lingua Franca Avni Pinot Noir": "The Avni's silky, low-tannin structure won't grip the white meat's lean proteins, and its bright cherry and red fruit lift the savory roasted notes without competing with them. You get a juicy, effortless back-and-forth — the chicken tastes cleaner, the wine tastes more savory.",
      "Cristom Mt Jefferson Cuvée": "The Cristom's earthy, forest-floor base connects directly to the roasted, slightly smoky skin on the chicken, while its spice note — think dried thyme and cracked pepper — echoes whatever's in the rub. That savory-on-savory bridge makes the whole bite feel like a composed dish rather than a food-and-wine pairing.",
      "Muga Reserva": "Tempranillo's dried cherry and leather earthiness align with the caramelized drippings on the roasted chicken, and the Muga's vanilla from American oak aging acts as a subtle sweetness that rounds out any char on the skin. The finish is long and meaty — the kind of pairing where the last sip makes you want another bite.",
      "Jean-Pierre Grossot Chablis": "The Chablis's high acidity and oyster-shell minerality cut straight through the rendered fat in the skin, while its citrus edge lifts the savory roasted juices. The chicken tastes cleaner and more defined, and the wine picks up a roundness it wouldn't have on its own.",
      "Evening Land Seven Springs": "The Willamette Pinot's earthy forest-floor quality mirrors the fond and pan drippings in the chicken's roasting, while its bright cherry acidity keeps the richness from settling heavy on the palate. Together, the dish reads more umami-forward and the wine's delicate fruit comes into sharper focus.",
      "Alexander Valley Chardonnay": "The oak-derived butter and vanilla in this Chardonnay speak directly to the basted, golden skin on the chicken, amplifying the Maillard-browned fat rather than fighting it. The result is a long, almost decadent finish where roasted poultry and toasty oak merge into a single warm note.",
      "The Happy Wife": "The ginger in the cocktail acts as a digestive counterpoint to the chicken's fat, while the orange and vodka citrus bite through the savory crust the way a squeeze of lemon would over roasted meat. Guests get a bright, palate-refreshing hit that makes the next bite of chicken taste like the first.",
      "Paloma": "Grapefruit juice is naturally high in naringin, a bitter compound that severs fat on the palate, and the blanco tequila's agave earthiness finds common ground with the caramelized skin. The chicken comes across as lighter and more herbaceous, and the Paloma gains a savory backbone it doesn't have solo.",
      "The BG": "The honey in the cocktail echoes the sugars that caramelize on the chicken skin during roasting, while the grapefruit's bitter citrus oils cut the rendered fat clean. What lands on the palate is a glazed, citrus-lacquered quality — like the chicken was finished with a honey-citrus pan sauce.",
      "Jordan Cabernet Sauvignon": "Jordan's restrained tannin structure and cedar aromatics don't overwhelm white meat the way a bigger Cab would, and its dark cherry fruit finds a bridge in the savory, slightly sweet drippings from the roast. The pairing works because the wine stays in the background, adding depth without turning the chicken bitter.",
      "Faust Napa Valley Cabernet": "Faust carries enough tannin and dark fruit extraction that it needs the fat and salt in the roasted chicken to soften its grip — without food, it's structured to the point of austerity. When they meet, the chicken's rendered skin binds the tannins and the wine's dark fruit reads almost like a blackberry reduction spooned over the plate.",
      "Le Garenne Rosé": "The rosé's bright strawberry and dried herb notes mirror the thyme and pan drippings in the roasted skin. Together, the wine's acidity cuts through the fat of the dark meat, leaving the palate clean and ready for the next bite.",
      "Raventós Cava de NIT Rosé Brut": "The Cava's fine bubbles and tart red-fruit character act like a squeeze of lemon over the bird — lifting the savory roasted proteins without washing them out. Each sip resets the palate so the crispy skin reads as fresh and bright rather than heavy.",
      "Margarita": "The lime juice and salted rim do the same work as a classic chicken brine — the citrus acid tightens the savory notes while the salt amplifies the depth of the roasted skin. What you get is a contrast that makes the chicken taste more like itself, just turned up.",
      "Creme Brulee": "The chicken's roasted savoriness and caramelized skin find a natural mirror in the crème brûlée's burnt-sugar crust — both are about that moment where gentle heat creates something golden and deeply satisfying, just one savory and one sweet.",
      "Beignets": "The chicken delivers deep roasted savoriness that leaves the palate craving contrast — the beignets answer with airy sweetness and powdered sugar, giving that richness somewhere clean and playful to land.",
      "Cheesecake": "The chicken's savory depth sets up the cheesecake beautifully — the tangy creaminess cuts through lingering roasted fat and resets the palate with something cool and indulgent.",
      "Carrot Cake": "The roasted warmth of the chicken finds a natural echo in the spiced, brown-sugar depth of the carrot cake — same cozy register, just flipped from savory to sweet."
    }
  },

  // ── SIDES ─────────────────────────────────────────────────────────────────────

  {
    name: 'Truffle Fries',
    category: 'side',
    profile: ['rich','umami','earthy','indulgent','fatty','savory'],
    excellent: ['Caymus Cabernet Sauvignon','Scavino Barolo','Jordan Cabernet Sauvignon','The Manhattan','Bowdie\'s Old Fashioned','Silver Oak Cabernet Sauvignon'],
    strong: ['Far Niente Cabernet Sauvignon','Ghost Block Cabernet Sauvignon','Vieux Carré','Not a Paper Plane','Mushrooms'],
    works: ['Lingua Franca Avni Pinot Noir','Evening Land Seven Springs','Espresso Old Fashioned'],
    avoid: ['G.D. Vajra Moscato d\'Asti','Stoneleigh Sauvignon Blanc','Laurent Perrier Le Cuvée Brut','French 75','Head Fake']
  ,
    pairingNotes: {
      "Caymus Cabernet Sauvignon": "Caymus's vanilla-driven oak and blackberry jam echo the earthy fat of the truffle oil, while the wine's residual richness meets the starch of the fry without fighting it. The result is a seamless wall of savory indulgence where neither the food nor the wine backs down.",
      "Scavino Barolo": "Barolo's tar and dried rose character shares the same forest-floor earthiness as black truffle, so the two are essentially speaking the same language. The wine's firm tannins grip the potato starch and fat, then the truffle's umami stretches the finish far longer than either would alone.",
      "Jordan Cabernet Sauvignon": "Jordan's cedar and dark cherry keep enough elegance to let the truffle's delicate earthiness stay in focus rather than getting buried under a bolder wine. The refined structure acts as a frame — the truffle is the painting.",
      "The Manhattan": "The rye spice and Angostura bitters in a Manhattan cut through the truffle oil's fat the same way acid would, while the sweet vermouth picks up the umami and pulls it longer on the finish. It's a study in contrast that ends in agreement.",
      "Bowdie's Old Fashioned": "The caramelized sugar and barrel char in the Old Fashioned mirror the Maillard crust on the fry itself, creating a loop of toasted, savory-sweet notes between each sip and bite. The whiskey's viscosity matches the richness of the truffle oil so neither one overwhelms the other.",
      "Silver Oak Cabernet Sauvignon": "The cedar tannins in Silver Oak cut through the truffle oil's fat while the blackberry fruit locks onto the fries' umami the same way salt does — amplifying rather than competing. You get a cleaner finish on the fries and a rounder mid-palate on the wine than either delivers alone.",
      "Far Niente Cabernet Sauvignon": "The vanilla from Far Niente's oak aging softens the truffle's sulfurous funk into something more floral, while the blackcurrant fruit mirrors the earthy depth without echoing it directly. The result is an indulgent loop — each bite makes the wine taste richer, each sip resets the palate just enough to want another fry.",
      "Ghost Block Cabernet Sauvignon": "Ghost Block's dark fruit and structured tannins create a counterweight to the truffle oil's slick richness — the tannins bind to the fat and lift it off the palate. What lands is a longer, drier finish that actually makes the earthiness of the truffle pop rather than linger.",
      "Vieux Carré": "The rye spice from the whiskey and the bitter botanicals from the Bénédictine cut straight through the fat in the truffle oil, while the cognac's dried fruit rounds out the earthy, umami core of the fries. Together they read almost savory-sweet — like the cocktail is functioning as a sauce.",
      "Not a Paper Plane": "The Aperol's bitter orange and the amaro's herbal finish act as a palate cleanser mid-bite, keeping the truffle from going heavy while the rye whiskey anchors the umami depth. You get brightness on top, earthiness underneath — the fries taste more precise, less indulgent.",
      "Mushrooms": "If they loved the truffle fries, the mushrooms are the purest expression of that same earthy, umami-forward instinct — less indulgent, more elemental, and just as satisfying.",
      "Lingua Franca Avni Pinot Noir": "The Pinot's silky tannins don't fight the truffle oil — they slide alongside it — and the bright cherry acidity provides just enough lift to keep the richness from flattening the palate. It's a lighter touch that makes the truffle's earthiness smell more aromatic and less pungent.",
      "Evening Land Seven Springs": "The Willamette Valley terroir in this Pinot brings its own forest-floor, mushroom-adjacent earthiness that mirrors the truffle directly — same frequency, different instrument. The elegance of the wine keeps the pairing from going heavy, so you're tasting terroir in both the glass and the fry.",
      "Espresso Old Fashioned": "The roasted, slightly bitter coffee syrup in the cocktail shares the same Maillard-reaction depth as the fries' fried crust, creating a dark, toasty bridge between the two. The whiskey's sweetness absorbs the truffle's funk and rounds it out, so the overall effect is rich without being one-note."
    }
  },
  {
    name: 'Lobster Mac',
    category: 'side',
    profile: ['rich','creamy','seafood','indulgent','umami','dairy-rich'],
    excellent: ['Far Niente Chardonnay','Keenan Chardonnay','Laurent Perrier Le Cuvée Brut','Jordan Cabernet Sauvignon'],
    strong: ['Jean-Pierre Grossot Chablis','Elk Cove Pinot Blanc','Lingua Franca Avni Pinot Noir','Raventós Cava de NIT Rosé Brut','The Manhattan'],
    works: ['Caymus Cabernet Sauvignon','Silver Oak Cabernet Sauvignon','Cucumber Gimlet'],
    avoid: ['Scavino Barolo','Opus One','Bowdie\'s Old Fashioned','Espresso Old Fashioned','Negroni']
  ,
    pairingNotes: {
      "Far Niente Chardonnay": "The wine's malolactic-driven butter and toasted oak mirror the béchamel base of the mac, while its peach and nectarine lift cuts through the fat without fighting the lobster's sweetness. Together, they create a seamless richness where neither the dish nor the glass feels heavier than the other.",
      "Keenan Chardonnay": "The wine's tropical fruit — pineapple and ripe mango — plays against the lobster's natural brine the same way a squeeze of citrus does, while the barrel-driven texture matches the creaminess stroke for stroke. The guest gets indulgence meeting indulgence, but the fruit keeps it from feeling heavy.",
      "Laurent Perrier Le Cuvée Brut": "The Champagne's persistent bubbles physically scrub the cream coating from the palate, and its brioche and lemon zest notes bridge the richness without adding more fat. Each sip resets the guest so the next bite of lobster tastes as clean and sweet as the first.",
      "Jordan Cabernet Sauvignon": "Jordan's restrained tannin and cedar structure act as a dry counterweight to the dish's fat, and the dark cherry fruit finds a surprising echo in the caramelized edges of the pasta. The contrast is the point — the guest experiences a savory tension that makes both feel more defined.",
      "Jean-Pierre Grossot Chablis": "Chablis's chalky minerality and sharp acidity do exactly what lemon butter does to a lobster tail — they cut the fat and amplify the seafood's salinity rather than competing with it. The result is a cleaner, brighter version of the dish on every bite, with the lobster's sweetness snapping into focus.",
      "Elk Cove Pinot Blanc": "The wine's crisp green apple and pear carry enough natural acidity to slice through the béchamel, while its light mineral spine speaks to the ocean character of the lobster. Guests get a refreshing lift between bites that keeps the richness feeling decadent rather than heavy.",
      "Lingua Franca Avni Pinot Noir": "The wine's silky tannins and bright cherry fruit offer a delicate contrast to the dish's cream weight without the tannin grip that would clash with the lobster's delicate protein. The pairing works because the Pinot doesn't fight the dish — it runs alongside it, adding red-fruit brightness that makes the mac feel a touch lighter.",
      "Raventós Cava de NIT Rosé Brut": "The Cava's fine bubbles and strawberry-driven acidity cut the cream fat on contact, and the rosé's slight red-fruit depth adds a complementary sweetness that draws out the lobster's natural richness. Guests experience a cleansing brightness between bites that makes each return to the dish feel fresh and indulgent all over again.",
      "The Manhattan": "The rye spice and Angostura bitters in the Manhattan cut through the butter fat in the mac's cream sauce, while the sweet vermouth latches onto the lobster's natural sweetness. The result is a back-and-forth where neither the richness nor the whiskey dominates — each sip resets the palate for another bite.",
      "Caymus Cabernet Sauvignon": "Caymus's high glycerol content and jammy dark fruit mirror the weight of the cream sauce without fighting the lobster's brininess, while its soft tannins keep the finish from turning chalky. The guest gets a sustained, velvet-on-velvet texture experience that makes the dish feel even more indulgent.",
      "Silver Oak Cabernet Sauvignon": "Silver Oak's American oak aging lays in a coconut-vanilla note that echoes the butter and cream base of the mac, while its structured tannins provide just enough grip to lift the dish's fat off the palate. What lands is a clean finish where the lobster's sweetness briefly surfaces before the wine's cedar pulls everything dry.",
      "Cucumber Gimlet": "The gin's botanical oils and fresh cucumber water act as a direct contrast to the mac's dense cream sauce, the citrus acid dissolving fat on contact. Each sip essentially resets the palate — the next bite of lobster reads cleaner, and the seafood's delicate brine comes forward in a way it can't when eaten alone."
    }
  },
  {
    name: 'Au Gratin Potatoes',
    category: 'side',
    profile: ['rich','creamy','dairy-rich','savory','manchego','indulgent'],
    excellent: ['Caymus Cabernet Sauvignon','Jordan Cabernet Sauvignon','Silver Oak Cabernet Sauvignon'],
    strong: ['Far Niente Cabernet Sauvignon','Scavino Barolo','The Manhattan','Vieux Carré'],
    works: ['Lingua Franca Avni Pinot Noir','Faust Napa Valley Cabernet','Truffle Fries'],
    avoid: ['G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut','Stoneleigh Sauvignon Blanc','Head Fake','Paloma']
  ,
    pairingNotes: {
      "Caymus Cabernet Sauvignon": "Caymus's glycerol richness and ripe blackberry fruit match the weight of the gruyère and cream layer for layer, while its low acidity means neither the wine nor the dish strips the other dry. Together they create a long, savory-sweet finish where the caramelized potato edges and the wine's jammy fruit feel like they were built for each other.",
      "Jordan Cabernet Sauvignon": "Jordan's restrained dark cherry and cedar structure give the dairy-rich gratin a counterpoint — the wine's natural acidity cuts the cream's coating effect without overwhelming the dish's subtle savory depth. What the guest experiences is balance: the potato's richness stays full but never heavy, and the wine's elegance keeps the pairing from tipping into excess.",
      "Silver Oak Cabernet Sauvignon": "Silver Oak's American oak contributes a toasted vanilla character that mirrors the browned, caramelized top crust of the gratin, while its firm tannin structure binds to the dish's milk proteins and pulls the fat clean. The payoff is a finish where the blackberry fruit in the wine and the savory cream in the potato briefly overlap into something that reads almost like a savory tart.",
      "Far Niente Cabernet Sauvignon": "Far Niente's blackcurrant concentration and vanilla oak speak directly to the gratin's browned butter and aged cheese notes, with enough tannic grip to cleave through the cream's weight. What the guest gets is a seamless richness-on-richness experience where the wine's finish and the dish's savory depth extend each other — the flavors don't end so much as fade together.",
      "Scavino Barolo": "Barolo's firm tannins and dried cherry acidity cut through the cream and cheese fat, while its earthy, tar-laced core finds a mirror in the browned, savory crust of the gratin. The creaminess softens the wine's grip, and the wine lifts what would otherwise sit heavy on the palate.",
      "The Manhattan": "The rye spice and Angostura bitters in the Manhattan slice through the dairy richness the way black pepper cuts cream sauce, while the sweet vermouth echoes the caramelized onion notes baked into the gratin. Every sip resets the palate so the next bite of potato tastes just as indulgent as the first.",
      "Vieux Carré": "The Bénédictine in the Vieux Carré brings herbal, honey-laced lift that pulls the savory, cheesy depth of the gratin into sharper focus, while the cognac's stone fruit rounds the dairy fat without adding to it. The result is a bite-and-sip rhythm where neither the dish nor the cocktail feels as heavy as it does alone.",
      "Lingua Franca Avni Pinot Noir": "The Pinot's bright Willamette cherry acidity and silky tannins provide just enough tension to prevent the cream and gruyère from coating the palate, while its subtle earth note nods to the savory, baked character of the dish. It won't overpower the side, which means the potato stays the star.",
      "Faust Napa Valley Cabernet": "Faust's dark plum fruit and structured tannins do the work of a squeeze of acid — pulling the dairy richness into focus rather than drowning in it — while the oak-driven vanilla softens the sharpness of the melted cheese. The pairing holds, though the Cab's weight works better alongside a steak that can anchor it.",
      "Truffle Fries": "The au gratin leans into creamy, dairy-driven richness — the truffle fries take that same indulgent spirit and sharpen it with earthiness and a crispier finish."
    }
  },
  {
    name: 'Brussels and Belly',
    category: 'side',
    profile: ['smoky','sweet','bitter','pork','rich','umami','bold'],
    excellent: ['Caymus Cabernet Sauvignon','Bowdie\'s Old Fashioned','Scavino Barolo','Espresso Old Fashioned','Silver Oak Cabernet Sauvignon'],
    strong: ['Jordan Cabernet Sauvignon','Ghost Block Cabernet Sauvignon','The BG','Not a Paper Plane'],
    works: ['Lingua Franca Avni Pinot Noir','Negroni','Vieux Carré'],
    avoid: ['G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut','Stoneleigh Sauvignon Blanc','Head Fake','Cucumber Gimlet']
  ,
    pairingNotes: {
      "Caymus Cabernet Sauvignon": "Caymus's jammy cassis and toasted oak meet the pork belly's rendered fat and the caramelized sweetness of the Brussels char on the same register, while the wine's ripe tannins bind to the protein and clean the smoke from the finish. The two together read as one long, savory-sweet note rather than two separate things.",
      "Bowdie's Old Fashioned": "The Demerara syrup and orange bitters in the Old Fashioned lock onto the maple-lacquered sweetness of the pork belly while the barrel char in the whiskey doubles down on the caramelized exterior of the Brussels sprouts. That smokeon-smoke-on-smoke builds into something deeper than either delivers on its own.",
      "Scavino Barolo": "Barolo's sour cherry and iron-edged tannins drive straight into the bitterness of the charred Brussels leaves, creating a savory, almost umami tension that makes the sweetness of the pork belly read as a relief rather than a given. The wine's firm structure strips the fat clean so each bite of belly finishes as crisp as the first.",
      "Espresso Old Fashioned": "The coffee-forward bitterness in the espresso syrup locks onto the charred, caramelized edges of the brussels while the bourbon's vanilla and oak mirror the sweetness of the pork belly. Together, they create a back-and-forth between roast and smoke that keeps building with each bite and sip.",
      "Silver Oak Cabernet Sauvignon": "Silver Oak's cedar tannins and dark blackberry fruit grab onto the rendered pork fat and cut through it, while the wine's structured acidity lifts the bitter char on the brussels. The guest gets a clean, savory finish where neither the food nor the wine feels heavy.",
      "Jordan Cabernet Sauvignon": "Jordan's softer tannins and dark cherry fruit find common ground with the caramelized sweetness of the belly without overwhelming the dish's more delicate bitter notes. The result is a rounded, harmonious bite where the wine acts as a bridge between the pork's richness and the brussels' edge.",
      "Ghost Block Cabernet Sauvignon": "Ghost Block's concentrated dark fruit and firm structure stand up to the bold smoke and fat of the pork belly, while its ripe tannins coat the palate alongside the rendered fat. The guest experiences a full, layered richness that lingers, with the wine's fruit keeping the smokiness from turning heavy.",
      "The BG": "The honey in the cocktail echoes the caramelized glaze on the belly, while the grapefruit's bitter citrus oils mirror the charred outer leaves of the brussels. On the palate, the whiskey base ties the pork fat together with the citrus brightness, leaving a clean, slightly sweet finish.",
      "Not a Paper Plane": "The amaro's herbal bitterness — think gentian and dried orange peel — speaks directly to the natural glucosinolate bitterness in the brussels, while the whiskey's sweetness meets the pork belly's caramelized fat. Together, the dish and cocktail trade bittersweet notes back and forth, finishing long and savory.",
      "Lingua Franca Avni Pinot Noir": "The Avni's bright cherry acidity cuts through the pork fat and keeps the dish from sitting heavy, while its silky, low-tannin texture doesn't fight the bitterness of the brussels. The guest gets a lighter, fresher experience — the wine essentially resets the palate between bites.",
      "Negroni": "The Campari's bitter citrus pith finds an immediate echo in the charred brussels leaves, while the sweet vermouth softens the transition into the richness of the pork belly. It's a contrast pairing — bitter calling to bitter — that makes both the cocktail and the dish taste more complex than either would alone.",
      "Vieux Carré": "The rye whiskey's peppery backbone and Bénédictine's herbal bitterness lock onto the caramelized char and rendered pork fat in the Brussels, while the cognac rounds out the dish's sweetness. Together, the bitterness of the sprout leaves dissolves into the cocktail's complexity, leaving a long, smoky-sweet finish that neither element could achieve alone."
    }
  },
  {
    name: 'Creamed Spinach',
    category: 'side',
    profile: ['rich','creamy','dairy-rich','savory','garlic','indulgent'],
    excellent: ['Jordan Cabernet Sauvignon','Silver Oak Cabernet Sauvignon','Caymus Cabernet Sauvignon'],
    strong: ['Far Niente Cabernet Sauvignon','Scavino Barolo','The Manhattan','Bowdie\'s Old Fashioned'],
    works: ['Lingua Franca Avni Pinot Noir','Faust Napa Valley Cabernet','Evening Land Seven Springs','Vieux Carré'],
    avoid: ['G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut','Stoneleigh Sauvignon Blanc','Paloma','Margarita']
  ,
    pairingNotes: {
      "Jordan Cabernet Sauvignon": "Jordan's restrained tannins and cedar-laced dark cherry cut through the fat in the béchamel without overwhelming the delicate iron notes of the spinach. The result is a back-and-forth where each sip lifts the creaminess off the palate and resets it for the next bite.",
      "Silver Oak Cabernet Sauvignon": "Silver Oak's firmer tannin structure acts as an astringent counterweight to the dairy fat, while its blackberry fruit finds a bridge in the spinach's subtle earthiness. The guest gets a clean, bright finish after each bite where the richness of the cream would otherwise linger.",
      "Caymus Cabernet Sauvignon": "Caymus's jammy fruit and vanilla-forward oak mirror the sweetness of the reduced cream, creating a full-throttle richness-on-richness pairing held in check by the wine's soft but present tannins. The mouth feel becomes almost velvety — the dish and the wine effectively thicken each other.",
      "Far Niente Cabernet Sauvignon": "Far Niente's blackcurrant density and vanilla from the new French oak echo the buttery fat in the cream, while just enough acidity keeps the pairing from going flat. What the guest feels is a sustained, layered richness that finishes cleaner than either the dish or the wine would alone.",
      "Scavino Barolo": "Barolo's high tannin and tar-and-cherry profile create a sharp structural contrast to the smooth dairy fat, essentially scrubbing the palate with each sip while the wine's earthy notes amplify the spinach's minerality. The contrast is the point — the dish becomes silkier, the wine becomes more fruit-forward, and neither dominates.",
      "The Manhattan": "The sweet vermouth's herbal bitterness and the whiskey's caramel cut through the dairy fat the way a squeeze of acid would, resetting the palate between bites. The guest experiences a savory-sweet loop — the cream softens the cocktail's proof, and the bitters in the Manhattan bring out the spinach's depth.",
      "Bowdie's Old Fashioned": "The bourbon's oak and demerara sweetness sync with the reduced cream's caramelized dairy notes, and the Angostura bitters provide just enough bitter contrast to keep the pairing from flattening. Each bite of the spinach mellows the whiskey's heat, and each sip makes the cream taste richer without feeling heavier.",
      "Lingua Franca Avni Pinot Noir": "The Pinot's bright cherry acidity cuts through the fat in the cream sauce, while its silky tannins keep the dish from feeling heavy on the palate. The guest gets a cleaner, lighter finish than the spinach alone would deliver — the richness resets with every sip.",
      "Faust Napa Valley Cabernet": "The Cab's dark fruit and structured tannins latch onto the dairy fat in the cream, softening the wine's grip while the savory depth of the spinach pulls out the Faust's cassis core. Together, the creaminess rounds the tannins and the wine makes the dish taste more savory than sweet.",
      "Evening Land Seven Springs": "The Seven Springs' earthy minerality and restrained cherry act as a palate contrast against the cream's richness, the wine's elegance keeping the dish from feeling too heavy. The guest experiences a tension between silk and earth — the spinach amplifies the Pinot's savory, forest-floor notes.",
      "Vieux Carré": "The Bénédictine and sweet vermouth in the Vieux Carré carry herbal and vanilla tones that echo the savory, buttery depth of the cream sauce, while the rye's spice cuts the fat. The result is a back-and-forth between warmth and richness — each bite makes the cocktail taste more complex, each sip cleans the palate just enough to want another forkful."
    }
  },
  {
    name: 'Sauteed Garlic Spinach',
    category: 'side',
    profile: ['savory','garlic','light','vegetable','clean'],
    excellent: ['Jean-Pierre Grossot Chablis','Domaine de Berthiers Pouilly-Fumé','Lingua Franca Avni Pinot Noir','Evening Land Seven Springs'],
    strong: ['Elk Cove Pinot Blanc','Le Garenne Rosé','Cristom Mt Jefferson Cuvée','Cucumber Gimlet','Bee\'s Knees'],
    works: ['Jordan Cabernet Sauvignon','Faroe Island Salmon','Roast Half Chicken','French 75'],
    avoid: ['Caymus Cabernet Sauvignon','Opus One','Bowdie\'s Old Fashioned','Espresso Old Fashioned']
  ,
    pairingNotes: {
      "Jean-Pierre Grossot Chablis": "The Chablis' oyster-shell minerality and sharp citrus acidity mirror the way roasted garlic opens up — bright on the front, savory at the finish. The guest gets a clean, almost oceanic lift that makes the garlic taste sweeter and the wine taste richer than either would alone.",
      "Domaine de Berthiers Pouilly-Fumé": "The flint and grapefruit in the Pouilly-Fumé lock onto the sulfur compounds in the sautéed garlic, amplifying both into something almost smoky and deeply savory. The acidity then resets the palate cleanly, making the garlic's earthiness taste brighter and the wine's citrus taste more mineral.",
      "Lingua Franca Avni Pinot Noir": "The Avni's red cherry fruit and silky texture provide a gentle contrast to the sharp, savory garlic — the fruit sweetness softens the allium bite without competing with it. The guest experiences a kind of savory-fruit balance where the spinach makes the wine taste more serious and the wine makes the garlic taste less aggressive.",
      "Evening Land Seven Springs": "The Seven Springs' earthy, sous-bois quality speaks directly to the savory, slightly bitter character of wilted spinach, while the garlic's roasted edge amplifies the Pinot's dark cherry fruit. Together they pull the pairing toward something deeply umami — the wine tastes more Burgundian, the dish tastes more complex.",
      "Elk Cove Pinot Blanc": "The wine's green apple acidity and wet-stone minerality cut through the allicin compounds in the garlic, keeping the spinach tasting bright rather than heavy. Together, the bitterness of the wilted greens drops away and the garlic reads as sweet and aromatic instead of sharp.",
      "Le Garenne Rosé": "The rosé's dried strawberry and Provence herb notes speak directly to the savory, slightly sulfurous character of the garlic, while its dry acidity lifts the iron-rich weight of the spinach. The result is a bite that tastes like a summer vegetable course — clean, fresh, and longer on the finish than either element alone.",
      "Cristom Mt Jefferson Cuvée": "The Pinot's forest floor earthiness and dried cherry meet the spinach on the same savory, mineral frequency, while the wine's low tannin means it won't clash with the vegetable's natural bitterness. What the guest gets is a texture match — soft wine, soft greens — with the garlic amplifying the spice notes in the wine's mid-palate.",
      "Cucumber Gimlet": "The cucumber's green, aldehydic freshness and the gin's botanical juniper mirror the vegetal character of the spinach, while the lime citrus acts as a brightness reset after the garlic's fat-soluble oils coat the palate. Each sip essentially re-opens the palate so the next bite of spinach tastes as clean as the first.",
      "Bee's Knees": "The honey syrup in the cocktail softens the pungency of the roasted garlic through sugar-acid contrast, while the gin's floral and herbal botanicals echo the green, grassy chlorophyll in the spinach. The guest experiences a momentary sweetness that rounds the savory edge of the dish without masking it.",
      "Jordan Cabernet Sauvignon": "The Jordan's cedar and cassis are bold enough to hold their own against the garlic, but its restrained tannin structure doesn't overwhelm the lightness of the spinach. The pairing works because the wine's fruit stays in the background, letting the vegetable lead and using the dark-cherry finish to add depth rather than compete.",
      "Faroe Island Salmon": "The garlic spinach opens with bright, savory aromatics that prime the palate perfectly for the salmon's rich, fatty depth — the garlic does the heavy lifting so the fish can shine.",
      "Roast Half Chicken": "The spinach's light, garlicky savoriness is a natural on-ramp to the chicken — same savory backbone, but the chicken turns up the richness and adds that roasted, caramelized weight.",
      "French 75": "The Champagne's yeast-driven brioche notes and high carbonation scrub the garlic's allicin off the palate between bites, and the gin botanical layer threads through the spinach's grassy character. It's a light, refreshing loop — the effervescence keeps the dish feeling like a first bite every time."
    }
  },
  {
    name: 'Mushrooms',
    category: 'side',
    profile: ['umami','earthy','savory','rich','meaty'],
    excellent: ['Scavino Barolo','Caymus Cabernet Sauvignon','Jordan Cabernet Sauvignon','Silver Oak Cabernet Sauvignon','Bowdie\'s Old Fashioned','The Manhattan'],
    strong: ['Far Niente Cabernet Sauvignon','Ghost Block Cabernet Sauvignon','Lingua Franca Avni Pinot Noir','Not a Paper Plane','Vieux Carré','Negroni'],
    works: ['Evening Land Seven Springs','Faust Napa Valley Cabernet','Truffle Fries'],
    avoid: ['G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut','Stoneleigh Sauvignon Blanc','Head Fake','Paloma']
  ,
    pairingNotes: {
      "Scavino Barolo": "The Barolo's nebbiolo grape carries tar, dried rose, and iron-rich tannins that sit on exactly the same earthy, glutamate-heavy frequency as roasted mushrooms, deepening the umami rather than contrasting it. When they land together, the savory intensity doubles — the mushrooms make the wine taste older and more complex, and the wine makes the mushrooms taste meatier.",
      "Caymus Cabernet Sauvignon": "The jammy dark fruit and heavy oak in the Caymus amplify the glutamates in the mushrooms, pushing both toward a deeper savory richness. Together, the earthiness of the mushrooms settles into the wine's body and the whole thing reads as one long, meaty finish.",
      "Jordan Cabernet Sauvignon": "The Jordan's cedar and dried herb notes share the same forest-floor aromatic family as the mushrooms, creating a lateral flavor match rather than a contrast. On the palate, the wine's restraint keeps the mushrooms at the center while the dark cherry lifts the finish so it doesn't read as heavy.",
      "Silver Oak Cabernet Sauvignon": "The Silver Oak's American oak brings a coconut-vanilla undercurrent that rounds out the savory edge of the mushrooms, while the blackberry fruit cuts through the richness with just enough brightness. The result is a back-and-forth between earthy depth and dark fruit that keeps the palate engaged through the last bite.",
      "Bowdie's Old Fashioned": "The caramelized demerara and charred oak in the Old Fashioned mirror the Maillard browning on the sautéed mushrooms, linking them at the same roasted, bitter-sweet register. That connection deepens the umami without adding weight, so the mushrooms taste more intensely of themselves.",
      "The Manhattan": "The sweet vermouth's herbal bitterness acts as a foil to the mushrooms' glutamate-driven savoriness, the way a bitter green cuts through a rich braise. When they land together, the bitterness resolves cleanly and leaves a savory-sweet finish that feels surprisingly long.",
      "Far Niente Cabernet Sauvignon": "The Far Niente's vanilla oak and blackcurrant fruit soften the mushrooms' earthiness, pulling the pairing toward a richer, more plush register. The result is a combination that leans opulent — the umami depth of the mushrooms fills in where the wine's fruit leaves off.",
      "Ghost Block Cabernet Sauvignon": "Ghost Block's structured tannins provide friction against the mushrooms' fat and moisture, scrubbing the palate clean between bites while the dark fruit adds contrast to the earthy savoriness. The pairing reads as bold and grounded, the kind of combination that makes both the food and wine feel more serious.",
      "Lingua Franca Avni Pinot Noir": "The Pinot's high-toned cherry and silky texture work as a counterpoint to the mushrooms' dense, low-register umami — where the food is heavy and earthy, the wine is bright and light-footed. That contrast prevents the pairing from becoming one-dimensional and keeps the mushrooms from weighing the whole experience down.",
      "Not a Paper Plane": "The Aperol and Amaro Nonino in the cocktail carry bitter herbal notes that cut through the glutamates driving the mushrooms' deep umami, while the lemon juice lifts what would otherwise be a heavy, earthbound bite. Together, the savory weight of the mushrooms grounds the cocktail's brightness and leaves a long, forest-floor finish neither could achieve alone.",
      "Vieux Carré": "The rye whiskey and Bénédictine bring dried herb and baking spice that mirror the savory, almost meaty depth of roasted mushrooms — both share that same dark, aromatic core. On the palate, the cognac's dried fruit rounds out any bitterness in the fungi while the mushrooms make the cocktail taste older, deeper, and more complex than it would on its own.",
      "Negroni": "Campari's bitter gentian root and the gin's botanical spine create a tension against the mushrooms' glutamate-rich earthiness — it's the same contrast that makes a squeeze of lemon work on a rich braise. The bitterness scrubs the palate clean between bites so the mushrooms keep tasting vivid and fresh rather than heavy.",
      "Evening Land Seven Springs": "This Eola-Amity Hills Pinot Noir is grown in volcanic Jory soil, which pushes a mineral, forest-floor quality into the wine that lands on the same frequency as earthy sautéed mushrooms. The wine's bright acidity and low tannin keep things light enough that neither overpowers the other, and the cherry fruit gives the dish a subtle sweetness it doesn't have on its own.",
      "Faust Napa Valley Cabernet": "Faust's structured tannins bind to the proteins and fats coating the mushrooms the same way they grip beef, softening in the process and revealing the wine's dark plum and cassis underneath. The mushrooms' umami amplifies the Cab's savory, almost meaty mid-palate, making the wine taste closer to a steak night pour even without the steak.",
      "Truffle Fries": "The mushrooms lead with clean, earthy umami — the truffle fries take that same flavor territory and amplify it with crispy indulgence and aromatic truffle oil."
    }
  },
  {
    name: 'Seasonal Vegetables',
    category: 'side',
    profile: ['variable','light','vegetable','seasonal'],
    excellent: [],
    strong: ['Jean-Pierre Grossot Chablis','Lingua Franca Avni Pinot Noir','Le Garenne Rosé','Elk Cove Pinot Blanc'],
    works: [],
    avoid: [],
    variable: true,
    variablePrompt: 'What are today\'s seasonal vegetables?'
  },

  // ── DESSERTS ──────────────────────────────────────────────────────────────────

  {
    name: 'Creme Brulee',
    category: 'dessert',
    profile: ['sweet','creamy','vanilla','delicate','classic','dairy-rich'],
    excellent: ['G.D. Vajra Moscato d\'Asti','Vin Santo','Sauternes Glass','Graham\'s 10 Year Tawny','Graham\'s 20 Year Tawny'],
    strong: ['Inhibited','Espresso Martini','Baileys Irish Cream','Frangelico','Taylor Fladgate Tawny'],
    works: ['Laurent Perrier Le Cuvée Brut','Raventós Cava de NIT Rosé Brut','Beignets'],
    avoid: ['Caymus Cabernet Sauvignon','Scavino Barolo','Opus One','Bowdie\'s Old Fashioned','Negroni']
  ,
    pairingNotes: {
      "G.D. Vajra Moscato d'Asti": "The Moscato d'Asti's low alcohol and effervescence mean it won't compete with the custard's richness — instead, its peach blossom and apricot aromatics layer on top of the vanilla without adding weight. The fine bubbles scrub through the cream on the palate and the wine's natural sweetness meets the caramelized sugar crust at exactly the same level, so nothing tastes too sweet or too much.",
      "Vin Santo": "Vin Santo's dried fig, toasted almond, and oxidative nuttiness bring a roasted depth that echoes the burnt-sugar crust without duplicating the custard's clean vanilla sweetness. The wine's viscosity matches the crème brûlée's body so the two move together on the palate, and the slight acidity in the wine keeps the finish from going flat or cloying.",
      "Sauternes Glass": "Botrytis — the noble rot that makes Sauternes — concentrates honeyed apricot and a distinctive lanolin richness that mirrors the egg-yolk fat in the custard at a molecular level. The wine's acidity, which is higher than its sweetness suggests, cuts the cream and caramel on the finish and leaves the palate clean enough to want another spoonful.",
      "Graham's 10 Year Tawny": "The tawny's walnut and dried apricot notes mirror the caramelized sugar crust, while its residual sweetness lands just below the brulee's so neither overwhelms the other. The guest gets a seamless transition from the crackle of burnt sugar into the port's honeyed finish, with the vanilla custard softening the tawny's oxidative edge.",
      "Graham's 20 Year Tawny": "Twenty years of barrel aging concentrates the port into layers of toasted hazelnut, fig, and butterscotch that echo the brulee's custard base at a deeper register. Together they create a lengthened finish — the port's complexity keeps unfolding after the custard's creaminess fades.",
      "Inhibited": "The vodka-based coffee and chocolate liqueur in the Inhibited picks up the caramelized crust the way a mocha sauce would, with the dark roast cutting through the fat in the custard. The guest experiences a contrast between cool, bitter chocolate and warm vanilla cream that makes each sip reset the palate for the next bite.",
      "Espresso Martini": "The espresso's roasted bitterness acts as a counterweight to the brulee's sugar crust, the same way a shot of coffee cuts through a dessert that would otherwise tip into cloying. The custard's cold cream texture softens the martini's sharp caffeine edge, and the vanilla rounds the finish into something closer to a café au lait.",
      "Baileys Irish Cream": "The Irish whiskey distillate and fresh cream in Baileys share the same dairy fat structure as the custard, so the pairing doubles down on richness rather than contrasting it. That shared creaminess creates a seamless, almost single-ingredient experience where the whiskey's light oak note is the only new flavor introduced.",
      "Frangelico": "Frangelico's toasted hazelnut oil and subtle cocoa pull directly against the vanilla bean in the custard, the way praline and crème meet in a classic French pastry. The guest gets a nutty sweetness that lingers through the brulee's creamy finish, with the liqueur's herbal backbone keeping it from reading as just sugar on sugar.",
      "Taylor Fladgate Tawny": "The Taylor Fladgate's dried walnut skin and toffee are a structural match for the burnt caramel on the crust — both are products of the same Maillard browning chemistry. When the two meet, the caramel note amplifies across both and the port's soft acidity keeps the custard's richness in check.",
      "Laurent Perrier Le Cuvée Brut": "The brut's high-acid Chardonnay base and fine persistent bubbles cut through the custard's cream fat on each sip, working the same way a squeeze of lemon brightens a rich sauce. The contrast is clean and palate-resetting — the brulee tastes lighter and the champagne's brioche and citrus zest notes become more pronounced against the vanilla.",
      "Raventós Cava de NIT Rosé Brut": "The cava's fine bead and high-acid red fruit — think wild strawberry and dried cranberry — cut through the vanilla custard without overwhelming the delicate sugar crust. What you get is a clean, bright finish after each bite, where the brulee's caramelized top actually amplifies the wine's fruit forward character.",
      "Beignets": "If they loved the crème brûlée, the beignets keep that same sweet, pillowy indulgence but trade the custard's richness for something lighter and airy — same dessert instinct, just lifted. The powdered sugar hits that vanilla sweetness from a different angle, without the weight."
    }
  },
  {
    name: 'Cheesecake',
    category: 'dessert',
    profile: ['sweet','creamy','rich','tangy','dairy-rich','dense'],
    excellent: ['G.D. Vajra Moscato d\'Asti','Vin Santo','Graham\'s 10 Year Tawny','Sauternes Glass','Espresso Martini'],
    strong: ['Inhibited','Graham\'s 20 Year Tawny','Frangelico','Baileys Irish Cream','Taylor Fladgate Tawny'],
    works: ['Laurent Perrier Le Cuvée Brut','Raventós Cava de NIT Rosé Brut','Il Colle Prosecco Superiore'],
    avoid: ['Caymus Cabernet Sauvignon','Scavino Barolo','Opus One','Bowdie\'s Old Fashioned','Negroni']
  ,
    pairingNotes: {
      "G.D. Vajra Moscato d'Asti": "The Moscato's residual sugar nearly mirrors the cheesecake's sweetness, but its peach blossom and apricot aromatics — driven by linalool — lift the dense cream cheese where the cake itself can't. The low alcohol keeps neither element fighting for dominance, so the tangy graham cracker finish and the wine's effervescence meet at the same moment and exit together.",
      "Vin Santo": "The Vin Santo's dried fig and candied orange peel — concentrated through the passito drying process — echo the cheesecake's tang while adding a nutty, oxidative depth the dessert lacks on its own. Every bite pulls the wine's dried fruit forward and every sip makes the cream cheese richer and more rounded.",
      "Graham's 10 Year Tawny": "The 10 Year's walnut and toffee notes, developed through slow oxidative aging, lock onto the cheesecake's fat and amplify its caramel undertones. The port's residual sweetness matches the dessert without cloying because its acidity threads through the cream cheese's tang and keeps the palate moving.",
      "Sauternes Glass": "Botrytis-driven Sauternes carries honeyed apricot and beeswax compounds that cling to the cheesecake's cream and amplify its vanilla while the wine's citrus-edged acidity draws out the tangy lactic notes in the filling. The result is a back-and-forth where each element makes the other taste more precisely like itself.",
      "Espresso Martini": "The espresso's bitter chlorogenic acids hit the cheesecake's sweetness and create a contrast that reads like a New York cheesecake topped with a dark roast — the cream cheese's fat coats the palate and softens the coffee's edge instantly. What lingers is a mocha-vanilla finish that neither the dessert nor the cocktail produces alone.",
      "Inhibited": "The chocolate and coffee elements in the Inhibited bind to the cheesecake's fat, which rounds out the vodka's heat and lets the bittersweet cocoa read as a crust note against the cream cheese. The pairing essentially builds a chocolate cheesecake on the palate that neither element is individually.",
      "Graham's 20 Year Tawny": "Twenty years of oxidative aging push the port's hazelnut, dried cherry, and orange peel into a complexity the 10 Year doesn't reach, and against cheesecake's clean cream canvas those flavors unfold slowly rather than all at once. The tangy lactic finish of the cream cheese acts as a reset between sips, making the port taste more layered with each return.",
      "Frangelico": "The toasted hazelnut oils in Frangelico lock onto the graham cracker base and the lactic tang of the cream cheese filling, creating a shared nutty-sweet frequency between the two. That first sip after a bite turns the cheesecake's density into something almost mousse-like, with the liqueur's sweetness rounding out any sharpness from the cream cheese.",
      "Baileys Irish Cream": "The Irish cream's dairy fat and cocoa run parallel to the cheesecake's own cream structure, so instead of contrast you get amplification — richer, more voluptuous, with a whiskey warmth threading through the finish. The result is a bite that lingers longer and reads closer to a chocolate-kissed New York slice than it started.",
      "Taylor Fladgate Tawny": "The tawny's oxidative caramel, dried apricot, and walnut skin notes find their counterpart in the cheesecake's tangy cream cheese and buttery crust, bridging sweet and savory in one sip. Together they create a dried-fruit-and-cream finish that stretches well past the last bite.",
      "Laurent Perrier Le Cuvée Brut": "The Champagne's tight acidity and fine persistent bubbles cut through the cheesecake's cream fat like a blade, resetting the palate between bites so the richness never becomes cloying. That citrus-and-brioche nose also plays against the cream cheese's tang, turning each bite into something lighter and more defined than it is on its own.",
      "Raventós Cava de NIT Rosé Brut": "The cava's strawberry and red cherry fruit introduces a brightness that pulls the cheesecake's tang in a fruit-forward direction, while the brut bubbles dissolve the cream cheese density on contact. The pairing reads like cheesecake topped with fresh macerated berries — the fruit element is entirely in the glass, but it shows up on the plate.",
      "Il Colle Prosecco Superiore": "The prosecco's green apple and white pear notes hit the cheesecake's lactic cream core and sharpen it, turning a rich, static bite into something with lift and clarity. The lighter carbonation doesn't overwhelm — it just keeps opening up the palate so each bite stays as clean as the first."
    }
  },
  {
    name: 'Carrot Cake',
    category: 'dessert',
    profile: ['sweet','spiced','warm','cream-cheese','dense','earthy'],
    excellent: ['Graham\'s 10 Year Tawny','Graham\'s 20 Year Tawny','G.D. Vajra Moscato d\'Asti','Espresso Martini','Frangelico'],
    strong: ['Inhibited','Vin Santo','Sauternes Glass','Baileys Irish Cream','Espresso Old Fashioned'],
    works: ['Beignets','Il Colle Prosecco Superiore'],
    avoid: ['Caymus Cabernet Sauvignon','Scavino Barolo','Bowdie\'s Old Fashioned','Negroni','Sazerac']
  ,
    pairingNotes: {
      "Graham's 10 Year Tawny": "The 10 Year's hazelnut, toffee, and dried fig have been maturing in the same flavor space as carrot cake's cinnamon, brown sugar, and toasted pecan — this pairing feels less like a contrast and more like the cake and the port finished aging together. A bite followed by a sip turns the cream cheese frosting into a caramel-laced custard layer that neither element achieves alone.",
      "Graham's 20 Year Tawny": "Two more decades of barrel aging have concentrated the tawny's rancio quality — that nutty, almost beeswax depth — which maps precisely onto the carrot cake's dark spice and roasted carrot sweetness in a way the 10 Year is still working toward. The longer finish the 20 Year brings means the spice from the cake keeps evolving in the mouth for a full thirty seconds after the plate is clear.",
      "G.D. Vajra Moscato d'Asti": "The Moscato's effervescence and white peach acidity cut through the dense cream-cheese frosting while its honeyed sweetness mirrors the brown sugar and cinnamon in the cake. The result is a lighter, almost floral finish that makes the spice bloom without the dessert feeling heavy.",
      "Espresso Martini": "The roasted bitterness of the espresso acts as a counterweight to the cake's cream-cheese sweetness, the same way a dark crust balances a rich filling. Each bite followed by a sip creates a mocha-spice loop — the coffee pulls the cinnamon and nutmeg forward in a way neither achieves alone.",
      "Frangelico": "Frangelico's toasted hazelnut oil shares the same warm, nutty register as the walnuts folded into the cake batter, creating a seamless aromatic continuum. On the palate, the liqueur's vanilla and cocoa undertones stretch the cream-cheese finish into something closer to a praline.",
      "Inhibited": "The vodka base keeps the cocktail clean while the coffee and chocolate layers come in under the cake's spice, adding a bittersweet bass note to the cinnamon and ginger up top. What lands on the palate is a richer, darker version of the dessert — like the cake was baked with espresso in the batter.",
      "Vin Santo": "Vin Santo's dried apricot and candied orange peel — the result of late-harvest oxidative aging — resonate with the cooked carrot's natural sweetness and the warming spice in the cake. The wine's syrupy viscosity matches the cream-cheese frosting texture, so the two feel like they were made from the same pantry.",
      "Sauternes Glass": "Botrytis cinerea concentrates stone fruit and honey in the Sauternes the same way roasting concentrates sugars in the carrot, making the sweet-on-sweet pairing feel earned rather than cloying. The wine's bright acidity — rare for something this rich — slices through the fat in the cream-cheese frosting and resets the palate cleanly.",
      "Baileys Irish Cream": "The Irish whiskey and cream in Baileys hit the same register as the butter and vanilla in the cake's frosting, essentially extending the dessert's dairy richness into the glass. What the guest notices is that the spice — cinnamon, allspice, ginger — becomes the dominant flavor, because everything else in the pairing is pulling in the same creamy direction.",
      "Espresso Old Fashioned": "The whiskey's caramel and oak provide a toasted, slightly bitter spine that grounds the cake's sweetness, while the espresso draws out the darker spice notes — clove, allspice — that can get lost under the cream-cheese. The guest experiences the cake as more complex on the finish, the spice lingering longer against the whiskey's slow heat.",
      "Beignets": "If the carrot cake was their move, the beignets offer a clean, sweet finish after all that warm spice — no cream cheese, no complexity, just hot fried dough and sugar doing exactly what it needs to do. It's the palate coming down easy.",
      "Il Colle Prosecco Superiore": "The Prosecco's green apple acidity and fine bubbles cut through the cream cheese frosting's fat, while its brioche-like autolytic notes pick up the cinnamon and nutmeg in the cake. The result is a lighter finish than you'd expect from a rich dessert — the sweetness resets with every sip so the spice keeps reading clearly."
    }
  },
  {
    name: 'Chocolate Brownie',
    category: 'dessert',
    profile: ['sweet','rich','chocolate','dense','indulgent'],
    excellent: ['Espresso Martini','Inhibited','Graham\'s 20 Year Tawny','Espresso Old Fashioned','Frangelico'],
    strong: ['G.D. Vajra Moscato d\'Asti','Kahlua','Baileys Irish Cream','Graham\'s 10 Year Tawny'],
    works: ['Vin Santo','Sauternes Glass'],
    avoid: ['Caymus Cabernet Sauvignon','Scavino Barolo','Sazerac','Negroni','Stoneleigh Sauvignon Blanc']
  ,
    pairingNotes: {
      "Espresso Martini": "The coffee's bitter roast compounds — chlorogenic acids and melanoidins — mirror the cacao's own bitterness, but the vodka lifts the whole thing so neither feels heavy. Together, the brownie's fudgy center tastes more intensely chocolate while the cocktail picks up a mocha richness it doesn't have on its own.",
      "Inhibited": "The chocolate liqueur in the cocktail shares actual cacao-derived flavor compounds with the brownie, creating a doubling effect where the chocolate reads deeper and darker than either delivers alone. The vodka base keeps the sweetness from stacking too high, so the finish stays clean instead of cloying.",
      "Graham's 20 Year Tawny": "Twenty years of oxidative aging in small casks has built walnut, dried fig, and toffee into this port — all caramelization-derived flavors that echo the Maillard crust on the brownie's edges. On the palate, the port's rancio quality acts like a flavor amplifier, pulling roasted cocoa notes out of the brownie that read as almost espresso-dark.",
      "Espresso Old Fashioned": "The whiskey's barrel char and the brownie's baked crust are both products of high-heat carbon chemistry, so they lock together on the palate rather than competing. The espresso adds a bitter backbone that stretches the chocolate finish longer than the brownie achieves on its own.",
      "Frangelico": "Frangelico's toasted hazelnut oil compounds bind naturally with cocoa butter fat in the brownie, the way praline and chocolate have always worked together — fat carrying fat, roast amplifying roast. The slight sweetness of the liqueur lands right at the brownie's own sugar level, so the pairing reads as one unified dessert rather than two.",
      "G.D. Vajra Moscato d'Asti": "The Moscato's peach ester aromatics and gentle carbonic prickle introduce brightness and contrast against the brownie's dense, fat-heavy crumb — it's the same logic as fruit with chocolate, just in liquid form. The low alcohol means the sweetness in both elements doesn't compound into syrup; instead the bubbles scrub the palate clean between bites.",
      "Kahlua": "Kahlua's coffee-forward sweetness shares roasted heterocyclic compounds with the brownie's baked cocoa, so the pairing functions like a mocha — each element reinforcing the other's depth without adding anything foreign. Sipped alongside a bite, the sugar in both aligns closely enough that the chocolate flavor comes forward rather than the sweetness.",
      "Baileys Irish Cream": "The cream liqueur's cocoa and vanilla extract mirror the brownie's own flavor compounds, while the Irish whiskey base cuts through the dense fudge texture. Every sip acts as a liquid extension of the dessert itself, amplifying the chocolate without competition.",
      "Graham's 10 Year Tawny": "The port's walnut and dried fig notes create a counterpoint to the brownie's bitter chocolate core, with shared caramel tones stitching the two together. The tawny's oxidative nuttiness makes the chocolate taste deeper and darker than it does on its own.",
      "Vin Santo": "The wine's apricot and honey-dried fruit sweetness plays against the brownie's bitter cocoa, bridging on a shared almond-paste richness from the wine's extended barrel aging. The contrast keeps neither too heavy — each bite resets the palate for the next sip.",
      "Sauternes Glass": "Botrytis brings lanolin and marmalade to the table, and those waxy, citrus-edged notes cut the brownie's fat and lift the chocolate's mid-tones. The finish stretches long because the wine's acidity does the work the dessert can't do for itself."
    }
  },
  {
    name: 'Peanut Butter Brownie',
    category: 'dessert',
    profile: ['sweet','rich','chocolate','nutty','dense','indulgent'],
    excellent: ['Espresso Martini','Inhibited','Graham\'s 20 Year Tawny','Espresso Old Fashioned','Frangelico'],
    strong: ['G.D. Vajra Moscato d\'Asti','Kahlua','Baileys Irish Cream','Graham\'s 10 Year Tawny'],
    works: ['Vin Santo','Sauternes Glass'],
    avoid: ['Caymus Cabernet Sauvignon','Scavino Barolo','Sazerac','Negroni','Stoneleigh Sauvignon Blanc']
  ,
    pairingNotes: {
      "Espresso Martini": "The coffee's roasted bitterness latches onto the peanut's natural earthiness and amplifies the brownie's cocoa, while the vodka's clean spirit keeps the richness from stacking too heavy. The guest gets a mouthful that tastes like a frozen peanut butter mocha.",
      "Inhibited": "The cocktail's chocolate and coffee layers mirror the brownie's profile note for note, but the spirit base thins the fat just enough to make each bite feel lighter than the last. It's less a pairing than a single unified dessert experience split across glass and plate.",
      "Graham's 20 Year Tawny": "Twenty years of oxidative aging has concentrated the port into roasted hazelnut, toffee, and dried cherry — all three of which have direct flavor analogs in the peanut butter and cocoa of the brownie. The result is a layered finish where the nutty notes from the port and the brownie echo back and forth long after both are gone.",
      "Espresso Old Fashioned": "The whiskey's char and the espresso's roasted bitterness create a dry, smoky frame around the brownie's sweet peanut richness, and the bitters in the cocktail act as a palate reset between bites. The guest experiences a classic flavor trio — coffee, chocolate, peanut — with the whiskey adding a savory backbone that keeps the whole thing from tipping into cloying.",
      "Frangelico": "The toasted hazelnut oil in Frangelico locks onto the roasted peanut proteins in the brownie, amplifying the same Maillard-driven nuttiness that makes both ingredients taste like they came from the same place. Together, the two round into a single, seamless note — like a Nutella version of a peanut butter cup, without either one tasting like dessert on top of dessert.",
      "G.D. Vajra Moscato d'Asti": "The wine's high-acid, low-alcohol effervescence cuts through the dense fat of the peanut butter and chocolate, while its white peach and apricot aromatics provide a bright, fruity lift that the brownie doesn't have on its own. The bubbles scrub the palate clean between bites, so every forkful tastes as rich as the first.",
      "Kahlua": "Kahlua's arabica coffee extract shares the same roasted, bitter-edged backbone as dark chocolate, turning the brownie's cocoa into something deeper and more complex — like a mocha that never asked to be one. The residual sweetness of the liqueur keeps the chocolate from going too dark, landing the combination right in the middle of a chocolate-covered espresso bean.",
      "Baileys Irish Cream": "The emulsified cream and Irish whiskey in Baileys mirror the brownie's fat-forward texture, while the light cocoa notes in the liqueur reinforce the chocolate without doubling down on bitterness. What the guest gets is something closer to a warm ganache — every element softening into the next.",
      "Graham's 10 Year Tawny": "Oxidative aging gives the Tawny its walnut, dried fig, and butterscotch character — the same nutty-caramel register as roasted peanuts — so the port isn't contrasting the brownie, it's finishing its sentence. The wine's gentle tannins and warmth give the dense chocolate something to push against, keeping the combination from collapsing under its own sweetness.",
      "Vin Santo": "Vin Santo's dried apricot and candied orange peel bring a tart, oxidative brightness that works against the brownie's heaviness rather than with it — the contrast doing what the dessert itself can't, which is adding lift. The nut-and-honey mid-palate of the wine does echo the peanut butter, so there's a thread of harmony running underneath the contrast.",
      "Sauternes Glass": "Botrytis cinerea concentrates Sauternes into layers of saffron, beeswax, and preserved citrus peel — flavors that sit outside the brownie's chocolate-and-peanut world entirely, offering contrast rather than echo. The acidity underneath Sauternes's sweetness keeps the pairing from reading as cloying, but the two are better as a study in opposites than as a unified experience."
    }
  },
  {
    name: 'Beignets',
    category: 'dessert',
    profile: ['sweet','light','fried','powdered-sugar','airy','approachable'],
    excellent: ['G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut','Raventós Cava de NIT Rosé Brut','Il Colle Prosecco Superiore','Frangelico'],
    strong: ['Graham\'s 10 Year Tawny','Sauternes Glass','Espresso Martini','Baileys Irish Cream'],
    works: ['Vin Santo','Inhibited'],
    avoid: ['Caymus Cabernet Sauvignon','Scavino Barolo','Opus One','Bowdie\'s Old Fashioned','Negroni','Sazerac']
  ,
    pairingNotes: {
      "G.D. Vajra Moscato d'Asti": "The Moscato's fine-beaded carbonation cuts through the hot frying oil that clings to the dough, while its low alcohol lets the powdered sugar stay forward without competing for sweetness. The wine's peach blossom and orange zest lift what is otherwise a simple, starchy dessert into something that tastes like a summer morning.",
      "Laurent Perrier Le Cuvée Brut": "The Champagne's fine bubbles and high acidity cut through the frying oil while its toasted brioche notes mirror the dough's golden crust. Each sip resets the palate, making the powdered sugar taste brighter and the beignet feel lighter than it actually is.",
      "Raventós Cava de NIT Rosé Brut": "The Cava's strawberry and raspberry fruit creates a sweet-tart counterpoint to the neutral richness of fried dough, while its effervescence lifts the powdered sugar off the palate. The result lands like a fresh berry dusted in confectioners' sugar — the combination tastes more intentional than either element alone.",
      "Il Colle Prosecco Superiore": "Prosecco's green apple acidity and low bitterness match the delicate, barely-sweet dough without overwhelming it, and the perlage texture plays against the crisp fried exterior. Guests get a clean, almost orchard-like finish that keeps the dessert from feeling heavy.",
      "Frangelico": "The toasted hazelnut oils in Frangelico lock onto the same Maillard browning compounds in the fried dough, essentially doubling down on the nutty, caramelized crust character. That shared roast note makes the powdered sugar read as creamy rather than just sweet.",
      "Graham's 10 Year Tawny": "Oxidative aging gives this Tawny its walnut and dried apricot notes, which bridge directly to the browned butter quality of hot fried dough. The port's residual sugar is rich enough to stand next to the powdered sugar without tipping the combination into cloying territory.",
      "Sauternes Glass": "Botrytis brings apricot jam and lanolin to the Sauternes, which wraps around the neutral dough the way a glaze would, adding depth the beignet doesn't have on its own. The wine's viscosity against the airy, hollow interior creates a textural contrast that makes the dessert feel more composed.",
      "Espresso Martini": "Roasted coffee bitterness acts as a hard counterweight to powdered sugar, preventing the dessert from reading as one-dimensional sweet. The cold, silky texture of the cocktail hitting warm fried dough creates a temperature and mouthfeel contrast that wakes the whole bite up.",
      "Baileys Irish Cream": "The emulsified cream and Irish whiskey in Baileys coat the palate in a way that mirrors the soft, yielding interior of the beignet, turning the combination into something close to a warm doughnut with cream filling. The light cocoa and vanilla notes in the liqueur give the powdered sugar a more complex, confection-like quality.",
      "Vin Santo": "The dried apricot and honeyed oxidation in the Vin Santo mirror the caramelized sugars in the fried dough without competing with the powdered sugar crust. Together they create a warm, almost pastry-cream finish — like the beignet just got richer without getting heavier.",
      "Inhibited": "The cold-brew coffee and dark chocolate in the Inhibited cut through the fat in the fried dough and pull out a toasty, almost doughnut-shop depth the powdered sugar alone wouldn't show you. What you get is dessert that suddenly has an espresso backbone — lighter on the palate, longer on the finish."
    }
  },
  {
    name: 'Chocolate Cake',
    category: 'dessert',
    profile: ['sweet','rich','chocolate','layered','indulgent','bold'],
    oos: true,
    excellent: ['Espresso Martini','Inhibited','Graham\'s 20 Year Tawny','Espresso Old Fashioned','Frangelico'],
    strong: ['G.D. Vajra Moscato d\'Asti','Kahlua','Baileys Irish Cream','Vin Santo'],
    works: ['Sauternes Glass'],
    avoid: ['Caymus Cabernet Sauvignon','Scavino Barolo','Sazerac','Negroni','Stoneleigh Sauvignon Blanc']
  },
  {
    name: 'Mocha Creme',
    category: 'dessert',
    profile: ['sweet','coffee','chocolate','creamy','rich','dessert'],
    oos: true,
    excellent: ['Espresso Martini','Inhibited','Espresso Old Fashioned','Graham\'s 20 Year Tawny','Frangelico'],
    strong: ['G.D. Vajra Moscato d\'Asti','Kahlua','Baileys Irish Cream','Vin Santo'],
    works: ['Sauternes Glass'],
    avoid: ['Caymus Cabernet Sauvignon','Scavino Barolo','Sazerac','Negroni','Stoneleigh Sauvignon Blanc']
  },

  // ── COCKTAILS ─────────────────────────────────────────────────────────────────

  {
    name: 'Bowdie\'s Old Fashioned',
    category: 'cocktail',
    profile: ['bold','whiskey','sweet','oak','smoky','spirit-forward'],
    excellent: ['Cowboy Ribeye','The Tomahawk','Bone Marrow','Prime Tartare','Brussels and Belly'],
    strong: ['Kansas City','Filet Mignon','Truffle Fries','Caymus Cabernet Sauvignon','Lardons','Mushrooms'],
    works: ['House Wedge','Shrimp Bisque','Creamed Spinach','Chocolate Brownie','Peanut Butter Brownie','Cheesecake','Creme Brulee'],
    avoid: ['Laurent Perrier Le Cuvée Brut','Seared Scallops','Crab Cake','Burrata']
  ,
    pairingNotes: {
      "Cowboy Ribeye": "The Demerara syrup and charred oak in the Old Fashioned latch onto the Maillard crust on the ribeye, amplifying the same bitter-caramel compounds created by the sear. Each sip resets the palate just enough to make the next bite of intramuscular fat taste cleaner and more intense.",
      "The Tomahawk": "The whiskey's vanillin and toasted wood tannins bind to the rendered fat cap on the Tomahawk the same way a finishing sauce would, adding structure to what could otherwise feel like pure richness. The result is a bite that finishes longer and drier, with the char and the rye spice landing at exactly the same moment.",
      "Bone Marrow": "The bitters in the Old Fashioned — specifically the gentian and citrus peel — are doing the work here, cutting the lipid heaviness of the marrow so the smoke and umami underneath can actually read on the palate. What the guest gets is marrow that tastes more mineral and less cloying, with the bourbon's sweetness stepping in right at the end to round it out.",
      "Prime Tartare": "The orange oil and Angostura in the Old Fashioned echo the shallot and caper brine in the tartare, both working in that sharp-bright register that makes raw beef's iron-rich depth feel intentional rather than aggressive. Together they create a savory, almost umami-forward finish that makes the whiskey taste older than it is.",
      "Brussels and Belly": "The caramelized Demerara in the Old Fashioned speaks directly to the char on the Brussels and the cured sweetness of the pork belly, while the rye spice in the whiskey pushes back against the bitterness in the sprout leaves. The combination turns what's already a sweet-bitter-smoky dish into something that feels almost like it was finished with a bourbon glaze.",
      "Kansas City": "The Kansas City's leanness and tight grain mean it doesn't have fat to mellow the whiskey's heat, so the rye spice and the beef's concentrated, almost mineral savoriness meet on equal footing. What the guest notices is the beef tasting bolder and the cocktail tasting smoother — the protein in each sip is doing actual tannin-binding work.",
      "Filet Mignon": "The caramelized sugar and vanilla in the bourbon draw out the Maillard crust on the filet while the whiskey's proof cuts through the meat's natural fat. What you get is a longer, sweeter finish on the steak than you'd ever expect from such a lean cut.",
      "Truffle Fries": "The oak tannins in the whiskey lock onto the truffle's sulfur compounds the same way they would with a big red wine, amplifying the earthiness rather than masking it. Every sip makes the truffle hit louder, and the sweetness of the demerara keeps the richness from going heavy.",
      "Caymus Cabernet Sauvignon": "The Old Fashioned opens the palate with Bourbon-driven oak and caramel sweetness — Caymus picks up that same richness and drives it deeper with dark jammy fruit and a plush, full-bodied finish.",
      "Lardons": "The bitters and char in the Old Fashioned speak directly to the rendered, smoky fat in the lardons — two things that got heat and time and show it. That shared smokiness creates a back-and-forth where the whiskey tastes meatier and the lardons taste more complex than either one alone.",
      "Mushrooms": "Whiskey aged in charred oak carries the same glutamate-rich, earthy depth as sautéed mushrooms, so the two don't contrast so much as they stack. The sweetness of the cocktail rounds off any bitterness from the fond, and the finish stretches into something almost like a demi-glace.",
      "House Wedge": "The cold, high-fat blue cheese dressing hits the whiskey's heat and drops it immediately, giving you a clean reset between sips that makes the cocktail taste brighter and fresher. The iceberg's water content and crunch act as a palate scrub, so the bourbon's caramel comes back sharper on the next sip.",
      "Shrimp Bisque": "The demerara and orange oils in the cocktail echo the bisque's natural sweetness from the shrimp shells, while the whiskey's proof slices through the cream so it doesn't sit heavy. You get a cleaner expression of the seafood flavor after each sip, with the oak adding a subtle warmth that reads like a second seasoning.",
      "Creamed Spinach": "The fat in the cream coats the palate and softens the whiskey's ethanol burn, making the bourbon taste rounder and more approachable than it does neat. In return, the oak tannins give the dish a little structure and prevent the dairy richness from flattening out.",
      "Chocolate Brownie": "Bourbon and dark chocolate share the same flavor precursors — vanillin, lignin-derived compounds, and roasted bitterness — so the two essentially speak the same language. The aromatic bitters in the cocktail amplify the chocolate's depth while the sugar syrup ties to the brownie's crust, making the whole thing taste like a more intentional dessert than either one is on its own.",
      "Peanut Butter Brownie": "The caramelized sugar and vanilla from the whiskey's oak aging lock onto the roasted cocoa and peanut compounds in the brownie, amplifying both. What you get is a richer, longer finish — like the brownie keeps going well after the bite.",
      "Cheesecake": "The bitters and orange oil in the Old Fashioned cut through the fat in the cream cheese while the bourbon's sweetness mirrors the graham crust. Together they create a brightness that keeps each bite feeling clean instead of heavy.",
      "Creme Brulee": "The burnt sugar crust on the brulee and the caramelized barrel notes in the bourbon are essentially the same Maillard reaction in two different forms. When they land together, the vanilla custard underneath opens up and the whiskey's heat becomes almost imperceptible — it all softens into one long, warm finish."
    }
  },
  {
    name: 'Espresso Old Fashioned',
    category: 'cocktail',
    profile: ['bold','whiskey','coffee','sweet','rich','dark'],
    excellent: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Brussels and Belly','Lardons','Chocolate Cake','Chocolate Brownie'],
    strong: ['Kansas City','Filet Mignon','Truffle Fries','Creamed Spinach','Peanut Butter Brownie','Mocha Creme'],
    works: ['House Wedge','Shrimp Bisque','Beignets'],
    avoid: ['Laurent Perrier Le Cuvée Brut','Seared Scallops','Crab Cake','Burrata','Seafood Tower']
  ,
    pairingNotes: {
      "The Tomahawk": "The chlorogenic acids in the espresso and the char on the tomahawk share the same roasted bitter register, while the bourbon's sweetness acts as a counterweight to the fat rendering off that thick marble. The result is that the steak tastes cleaner and beefier — the cocktail is doing the work a sauce would normally do.",
      "Cowboy Ribeye": "Coffee's roasted bitterness mirrors the crust development on the ribeye while the whiskey's residual sugar binds to the intramuscular fat, making the marbling feel silkier on the palate. Each sip resets the richness so the next bite of beef tastes like the first.",
      "Bone Marrow": "The espresso's bitter tannins act as a direct foil to the collagen-rich fat in the marrow, slicing through what could otherwise coat the palate and stall. What you experience is the marrow's deep umami coming forward — round and savory — with the bourbon's oak giving it a smokehouse finish.",
      "Brussels and Belly": "The coffee bitterness and the caramelized Brussels share glucosinolate-derived roasted compounds, and the whiskey's sweetness mirrors the glaze on the pork belly. When they meet, the smoke in the belly amplifies and the bitter edges on both the cocktail and the Brussels soften into something almost sweet.",
      "Lardons": "The rendered pork fat in the lardons coats the palate in a way that makes the espresso's roast bloom — fat carries aromatic compounds and suddenly the coffee note in the cocktail reads deeper, almost chocolate. The bourbon's sweetness then lifts the salt on the pork, turning each bite into something closer to a cured meat and dark chocolate pairing.",
      "Chocolate Cake": "The roasted bitterness of espresso and the vanilla-oak backbone of the whiskey mirror the dark cocoa and caramelized sugar layers in the cake. Together, they create a sustained finish that deepens both the chocolate and the coffee, the way a mocha gets richer with every sip.",
      "Chocolate Brownie": "The espresso's chlorogenic acids cut through the brownie's dense fudge center while the bourbon's caramel sweetness locks onto the dark chocolate, amplifying both. What you get is a richer, more complex chocolate hit than either delivers on its own.",
      "Kansas City": "The coffee's dry roast and the whiskey's char speak directly to the strip loin's seared crust — both built on the same Maillard compounds that develop in high-heat cooking. That shared browning chemistry makes the beef taste bolder and the cocktail taste less sweet, each sharpening the other's edge.",
      "Filet Mignon": "The whiskey's sweetness and the espresso's intensity provide the assertive flavor the filet's mild, buttery muscle won't generate on its own. The fat in the beef coats the palate and softens the cocktail's proof, making each bite cleaner and each sip smoother.",
      "Truffle Fries": "The earthiness of truffle and the roasted depth of espresso share volatile sulfur and pyrazine compounds that amplify each other's umami character. The result is a longer, more savory finish where the truffle reads deeper and the cocktail's bitterness turns almost meaty.",
      "Creamed Spinach": "The dairy fat and richness in the cream sauce coat the palate, which softens the whiskey's heat and makes the espresso's bitterness round out rather than bite. What follows is a surprising savory-sweet loop where the cocktail's caramel notes pull the cream's richness into almost dessert territory.",
      "Peanut Butter Brownie": "The roasted pyrazines in espresso share a direct flavor relative with roasted peanut — both are products of dry heat applied to protein and fat — so the coffee amplifies the nuttiness while the bourbon's sweetness binds to the chocolate. Every sip after a bite intensifies the roast without adding any bitterness.",
      "Mocha Creme": "Coffee and whiskey are already doing the heavy lifting in the cocktail, and the mocha creme answers with those exact same pillars — roasted cocoa and dairy — creating a closed loop of flavor. The contrast is textural: the cocktail's clean, ice-diluted finish cuts through the creme's richness and resets the palate for the next spoonful.",
      "House Wedge": "The bitter roast of the espresso cuts through the fat in the blue cheese dressing the same way acidity would, while the whiskey's sweetness lands against the cool iceberg and brightens the whole bite. The guest gets a mouthful that feels simultaneously richer and cleaner than either alone.",
      "Shrimp Bisque": "Roasted coffee shares the same Maillard-driven depth as a shellfish reduction, so the espresso in the cocktail reinforces the bisque's fond rather than competing with it. That doubling of caramelized, slightly bitter sweetness makes the shrimp flavor read as more pronounced on the finish.",
      "Beignets": "The dark-roast bitterness in the cocktail is the functional equivalent of an espresso shot alongside a beignet — it arrests the sugar before it becomes cloying and keeps each bite tasting as bright as the first. The bourbon's vanilla and oak then soften back into the powdered sugar, extending a warm, almost café-au-lait finish."
    }
  },
  {
    name: 'The Manhattan',
    category: 'cocktail',
    profile: ['bold','whiskey','bitter','sweet','spirit-forward','classic'],
    excellent: ['Filet Mignon','Bone-In Filet','Kansas City','Truffle Fries','Bone Marrow','Lobster Mac'],
    strong: ['Cowboy Ribeye','Prime Tartare','Creamed Spinach','Mushrooms','Au Gratin Potatoes'],
    works: ['House Wedge','Brussels and Belly'],
    avoid: ['Laurent Perrier Le Cuvée Brut','Seared Scallops','Crab Cake','Burrata']
  ,
    pairingNotes: {
      "Filet Mignon": "Sweet vermouth brings dried cherry and herbal baking-spice notes that act as a sauce for beef that's too lean to generate those flavors on its own, and the whiskey's proof cuts the butter baste without stripping the tenderness. The result is a bite that tastes like the filet arrived with a sauce it didn't need to cook.",
      "Bone-In Filet": "The bone adds marrow-driven fat and a deeper mineral quality that matches the Manhattan's rye spice and vermouth tannin point for point, giving the cocktail something structural to push against. That mineral-fat tension resolves into a long, almost chocolatey finish that neither the steak nor the cocktail produces independently.",
      "Kansas City": "The Kansas City's firm, dense muscle and bold beefy savoriness can stand up to the Manhattan's full proof and vermouth bitterness without being overwhelmed, and the strip's natural fat cap echoes the cocktail's sweetness. Each sip resets the palate from the chew and re-sharpens the beef's umami on the next bite.",
      "Truffle Fries": "2-4-dithiapentane — the sulfur compound responsible for truffle's earthiness — binds to the same aromatic register as aged rye whiskey, so the cocktail amplifies the truffle rather than masking it. The vermouth's herbal bitterness then lifts through the rendered potato fat, keeping a dish that could go heavy feeling precise.",
      "Bone Marrow": "Roasted marrow is essentially liquefied collagen and fat with a smoky crust, and the Manhattan's sweet vermouth provides the acidity and tannin structure that the marrow itself lacks, functioning the same way a gremolata would on the plate. The whiskey heat cuts the fat coating on the palate immediately, so the smokiness of the bone reads clean and long rather than greasy.",
      "Lobster Mac": "The Angostura bitters in the Manhattan cut through the butter-fat in the lobster mac the way a squeeze of lemon would, while the rye spice lifts the sweetness of the lobster meat. Together, the richness of the dish gets a savory, aromatic frame that keeps each bite tasting as good as the first.",
      "Cowboy Ribeye": "The caramel and vanilla from the bourbon's oak aging mirror the Maillard crust on the ribeye, while the vermouth's herbal bitterness slices through the intramuscular fat. The guest gets a long, smoky-sweet finish where the whiskey and the beef fat linger together.",
      "Prime Tartare": "The sweet vermouth's dried fruit notes draw out the iron-rich depth of raw beef, while rye's peppery backbone amplifies the tartare's seasoning without overpowering its delicacy. Each sip resets the palate and makes the umami in the beef hit harder on the next bite.",
      "Creamed Spinach": "The bittersweet profile of the Angostura and vermouth provides a counterweight to the heavy cream and Parmesan fat, preventing the dish from coating the palate. The result is a cleaner, brighter perception of the spinach's minerality between each sip.",
      "Mushrooms": "Rye whiskey and sautéed mushrooms share the same family of earthy, woody aromatic compounds — the drink essentially doubles down on the forest floor depth already in the dish. That shared umami foundation creates a sustained savory resonance that outlasts both on their own.",
      "Au Gratin Potatoes": "The oak-driven tannin structure in the bourbon acts like a palate scraper against the layered cream and Gruyère fat, while the cherry notes in the vermouth echo the slight caramelization on the potato's edges. The contrast keeps the dish's richness from going flat midway through.",
      "House Wedge": "The sweet vermouth softens the sharpness of the blue cheese dressing while the whiskey's proof cuts through the fat in the bacon lardons. The cold crunch of the iceberg against a warm sip of Manhattan reads as a classic steakhouse reset — clean, direct, familiar.",
      "Brussels and Belly": "The bittering agents in the Angostura resonate with the char on the Brussels sprouts, amplifying that roasted brassica bitterness into something intentional rather than harsh. The pork belly's rendered fat then pulls the bourbon's sweetness forward, finishing the pairing on a caramel-smoke note."
    }
  },
  {
    name: 'Vieux Carré',
    category: 'cocktail',
    profile: ['bold','whiskey','cognac','herbal','complex','spirit-forward'],
    excellent: ['Filet Mignon','Kansas City','Bone Marrow','Prime Tartare','Truffle Fries'],
    strong: ['Cowboy Ribeye','Porterhouse','Creamed Spinach','Mushrooms'],
    works: ['House Wedge','Brussels and Belly','Grilled Caesar','Chocolate Brownie','Cheesecake','Creme Brulee'],
    avoid: ['Laurent Perrier Le Cuvée Brut','Seared Scallops','Crab Cake','Burrata']
  ,
    pairingNotes: {
      "Filet Mignon": "The Bénédictine's herbal sweetness and the cognac's dried fruit lift the filet's mild, buttery protein without overwhelming it — a rare case where the cocktail does the seasoning work. What lands at the table is a silky, almost effortless richness where neither the meat nor the drink feels like it's competing.",
      "Kansas City": "The rye whiskey's peppery backbone and the cognac's dark fruit meet the strip's dense, beefy muscle fiber on equal terms, with the vermouth's bitter edge cutting through the fat cap's rendered intensity. The result is a back-and-forth between char and spice that keeps building across each bite and sip.",
      "Bone Marrow": "The cognac's esters and the sweet vermouth's caramelized grape notes mirror the Maillard browning on the marrow's roasted surface, while the herbal Bénédictine cuts through the lipid-heavy interior. What you get is a round, almost decadent finish where the fat never feels cloying because the cocktail keeps clearing the palate.",
      "Prime Tartare": "The whiskey's grain tannins provide structure against the raw beef's glutamate-forward intensity, and the cognac's brandy esters amplify the cured, umami notes from the capers and yolk without cooking anything. Together they create a savory depth that reads almost aged — like the tartare has been somewhere it hasn't.",
      "Truffle Fries": "The Bénédictine's anise and botanicals share the same volatile aromatic compounds — terpenes — that give black truffle its earthy, musky character, so the drink essentially doubles down on what's already in the dish. That resonance makes the truffle louder and the cocktail's herbal complexity more grounded, each pulling the other into sharper focus.",
      "Cowboy Ribeye": "The ribeye's heavy intramuscular fat needs the rye's drying tannins and the sweet vermouth's acidity to reset the palate between bites, but the cognac's richness means the cocktail never feels austere against all that marbling. The experience is controlled indulgence — bold meeting bold, with just enough contrast to keep it from going flat.",
      "Porterhouse": "The porterhouse gives you two textures and two fat profiles in one cut, and the Vieux Carré's layered structure — grain spirit, aged brandy, fortified wine, herbal liqueur — has enough range to shift with both sides of the bone. The strip's firm beefiness pulls out the rye's spice, while the tenderloin side softens into the cognac's fruit, making the cocktail read differently across the same plate.",
      "Creamed Spinach": "The sweet vermouth's oxidative, slightly bitter finish cuts directly through the béchamel's butterfat, preventing the dairy richness from coating the palate, while the cognac's vanilla and the Bénédictine's honey notes echo the cream's sweetness. What arrives is a savory-herbal contrast that makes the spinach taste brighter and the cocktail taste rounder than either does alone.",
      "Mushrooms": "The cognac's dried fruit and the rye's spice lock onto the glutamates in the mushrooms, amplifying that deep savory weight the same way a splash of wine does in a pan sauce. Together they push the umami so far forward the mushrooms taste almost meaty, and the cocktail's herbal backbone keeps the finish from going muddy.",
      "House Wedge": "The Bénédictine's herbal sweetness cuts through the fat in the blue cheese dressing the way a vinaigrette would, while the whiskey's tannins scrub the cream off the palate. What you get is a clean reset between bites — the wedge tastes crisper and colder, the cocktail tastes brighter.",
      "Brussels and Belly": "The rye and cognac carry their own caramel and dried-fruit notes that mirror the char and rendered pork fat on the belly, while the cocktail's bitterness speaks directly to the glucosinolates that make Brussels bitter. Every sip lifts the smoke and sweetness without letting the bitter notes from either side stack up.",
      "Grilled Caesar": "The fire on the romaine and the char on the croutons share the same Maillard compounds as the toasted oak in the rye whiskey, so both lean into that same smoky-grain note simultaneously. The anchovies' salt and umami get cushioned by the cognac's roundness, making the dressing taste richer without turning the cocktail hot.",
      "Chocolate Brownie": "Rye whiskey and dark chocolate share tannins and bitter phenolic compounds, so when they meet they stop competing and read as a single deep, roasted note — closer to a mocha than either one alone. The cognac's stone-fruit sweetness bleeds into the brownie's dense fudge center and extends the finish well past the last bite.",
      "Cheesecake": "The cognac's acid and stone-fruit character amplify the tang in the cream cheese the same way lemon zest does in the recipe, brightening what could otherwise sit heavy. The whiskey's warmth cuts the fat on the palate so each forkful of cheesecake tastes lighter than it is, and the herbal finish gives the creaminess a clean edge.",
      "Creme Brulee": "The caramelized sugar crust shares the same toasted-sugar compounds as the barrel char in the rye, so cracking through it while sipping creates a single sustained caramel note that neither achieves on its own. The Bénédictine's floral herbs lift the vanilla custard off the palate so it doesn't read as heavy, keeping the whole thing feeling elegant rather than sweet."
    }
  },
  {
    name: 'Sazerac',
    category: 'cocktail',
    profile: ['bold','rye','herbal','anise','spirit-forward','classic'],
    excellent: ['Filet Mignon','Kansas City','Prime Tartare','Bone Marrow','Truffle Fries'],
    strong: ['Cowboy Ribeye','Porterhouse','Creamed Spinach','Grilled Caesar','Mushrooms'],
    works: ['House Wedge','Brussels and Belly','Shrimp Bisque','Chocolate Brownie','Cheesecake','Creme Brulee'],
    avoid: ['Laurent Perrier Le Cuvée Brut','Seared Scallops','Burrata','G.D. Vajra Moscato d\'Asti']
  ,
    pairingNotes: {
      "Filet Mignon": "The rye's spice and the Peychaud's bitters provide the aggressive seasoning the filet's lean muscle can't generate on its own, acting as a liquid crust without masking the tenderness. The absinthe rinse's anise note bonds to the butter baste and amplifies it, so the finish is simultaneously more herbaceous and more rich than either element delivers separately.",
      "Kansas City": "The rye's peppery spice and the Peychaud's bitters lock onto the lean, iron-forward beefiness of the Kansas City's natural crust. Together, the heat from the rye lifts the char while the anise lingers just long enough to let the steak's mineral depth come forward.",
      "Prime Tartare": "The anise in the Peychaud's mirrors the subtle licorice note in raw beef fat, while the rye's grain bite cuts through the egg yolk richness binding the tartare. What you get is the cocktail acting like a seasoning — sharpening the umami without overwhelming the delicacy of the raw meat.",
      "Bone Marrow": "The absinthe rinse in the Sazerac slices through rendered marrow fat the way acid would, using aromatic intensity instead of acidity. Each sip resets the palate from the fat's unctuousness, making the next scoop of marrow taste just as rich as the first.",
      "Truffle Fries": "The herbal, anise-forward aromatics in the Sazerac speak directly to the volatile sulfur compounds that give black truffle its earthy funk. On the palate, the rye's dry grain finish keeps the dish from reading as heavy, letting the truffle's earthiness stay front and center.",
      "Cowboy Ribeye": "The rye's baking spice and the Peychaud's floral bitterness create a counterweight to the intramuscular fat rendered through a long sear on the Cowboy's thick cap. The contrast keeps the fat from coating the palate and pulls the ribeye's deep, roasted meat flavor into sharper focus.",
      "Porterhouse": "The Sazerac's bold rye backbone matches the strip side's tight, beefy intensity while the anise softens the transition to the tenderloin's more delicate texture. The result is one cocktail that essentially bridges both muscles on the plate without losing its own identity.",
      "Creamed Spinach": "The bitterness in the rye and Peychaud's cuts through the butter fat and heavy cream, doing the same work a squeeze of lemon would but with more complexity. That contrast makes the cream taste lighter and brings out the savory, almost nutty depth of the spinach underneath.",
      "Grilled Caesar": "The char on the romaine shares the same Maillard-driven bitter edge as the rye whiskey, creating a rare bitter-on-bitter harmony that deepens rather than clashes. The anise then lifts the anchovy-Parmesan umami base of the dressing, making the whole dish taste more savory on the finish.",
      "Mushrooms": "The rye's peppery spice and the Peychaud's anise cut through the glutamates in the mushrooms, while both share a deep, almost mineral earthiness. Together, the umami swells — the cocktail amplifies the savoriness without letting it go muddy.",
      "House Wedge": "The absinthe rinse brings a sharp herbal bite that slices through the fat in the blue cheese dressing the same way acid would. What lands is a clean, bright finish — the richness of the wedge resets, and the rye's warmth ties it back together.",
      "Brussels and Belly": "The anise in the Peychaud's mirrors the caramelized, slightly bitter edge on the Brussels, while the rye's spice runs straight into the rendered pork fat. The sweetness of the belly softens the cocktail's proof, making the whole thing taste like something slow-roasted.",
      "Shrimp Bisque": "The herbal backbone of the absinthe rinse lifts the sweetness of the shrimp and cuts the cream's weight, acting almost like a tarragon would in a classic bisque preparation. The result is that the bisque reads richer and more layered without feeling heavy.",
      "Chocolate Brownie": "Rye whiskey and dark chocolate share the same bitter-roast compounds — cacao and charred grain are closer cousins than most people expect. The anise opens up the chocolate's depth, and the cocktail's proof keeps the sweetness from flattening out.",
      "Cheesecake": "The Peychaud's bitterness acts as a counterweight to the sugar in the cheesecake, the same way a squeeze of lemon would — it keeps the tang in the cream cheese alive rather than letting sweetness bury it. The rye's heat makes each bite feel lighter than it is.",
      "Creme Brulee": "The absinthe rinse echoes the vanilla bean in the custard through a shared aromatic sweetness — both are delicate and botanical underneath their bolder surfaces. The caramelized crust on the brulee mirrors the slight bitterness of the Peychaud's, so neither overpowers the other."
    }
  },
  {
    name: 'The BG',
    category: 'cocktail',
    profile: ['whiskey','grapefruit','citrus','honey','floral','ginger','refreshing','sessionable'],
    excellent: ['Cowboy Ribeye','Kansas City','Bone Marrow'],
    strong: ['Porterhouse','Brussels and Belly','House Wedge','Grilled Caesar','Shrimp Bisque'],
    works: ['Filet Mignon','Truffle Fries','Prime Tartare'],
    avoid: ['Opus One','Seared Scallops','Burrata','Laurent Perrier Le Cuvée Brut']
  ,
    pairingNotes: {
      "Cowboy Ribeye": "The grapefruit's citric acid breaks down the oleic fat coating your palate between bites, while the honey in the cocktail amplifies the Maillard crust on the ribeye's char. Each sip acts as a reset that makes the next bite of marbled beef taste like the first one.",
      "Kansas City": "The grapefruit's naringin bitterness cuts through the strip's dense muscle fibers while the whiskey mirrors the Maillard crust char-for-char. Each sip resets the palate so the next bite hits with full, clean beef intensity.",
      "Bone Marrow": "Honey and citrus acids slice through the collagen-rich fat of the marrow the way a squeeze of lemon would, breaking the richness without masking the deep umami. The whiskey's oak tannins then lock in with the smoky roasted bone, extending that savory finish.",
      "Porterhouse": "The cocktail works both sides of the bone — grapefruit lifts the leaner tenderloin side while the whiskey's caramel weight holds up against the fatty, charred strip. Switching between bites and sips reveals two different steaks in one cut.",
      "Brussels and Belly": "The honey in the cocktail amplifies the caramelized sugars on the belly while the grapefruit bitterness mirrors the glucosinolate char on the brussels sprouts. That bitter-sweet-smoke triangle keeps cycling so no single flavor dominates.",
      "House Wedge": "The citrus in the cocktail sharpens the acidity already present in the blue cheese dressing, making it taste fresher and less heavy against the cold iceberg. The whiskey's warmth then creates a brief temperature and flavor contrast that makes the creamy dressing snap back into focus.",
      "Grilled Caesar": "The grill char on the romaine produces the same Maillard compounds as the whiskey's barrel aging, so the two smoke signatures stack rather than fight. The citrus cuts the anchovy-driven umami in the dressing, keeping each forkful bright instead of muddied.",
      "Shrimp Bisque": "Honey echoes the natural glycine sweetness in the shrimp while the grapefruit oils lift through the cream-heavy bisque and prevent the fat from coating the palate. The whiskey's spice then threads through the bisque's shellfish reduction, adding a dry finish that the cream alone never would.",
      "Filet Mignon": "The filet's mild myoglobin flavor and buttery texture don't have the bold char or fat to hold up to the whiskey's oak, so the cocktail risks overpowering the cut rather than meeting it. The citrus and honey do keep the finish clean, making this work as a lighter pairing when the filet is ordered with a butter or béarnaise finish.",
      "Truffle Fries": "The honey and whiskey in The BG amplify the glutamates in truffle, while the grapefruit cuts through the fry oil so the earthiness hits clean. You get waves of umami without the richness turning heavy.",
      "Prime Tartare": "The citrus acidity in The BG acts like a squeeze of lemon on the raw beef, brightening the iron-rich fat, while the whiskey backbone matches the tartare's bold, uncooked intensity. Together they taste like a dish that was always meant to be seasoned this way."
    }
  },
  {
    name: 'French 75',
    category: 'cocktail',
    profile: ['sparkling','gin','citrus','light','celebratory','effervescent'],
    excellent: ['Crab Cake','Seafood Tower','Shrimp Cocktail','Burrata','Escargot','Seared Scallops'],
    strong: ['Prime Tartare','House Wedge','Grilled Caesar'],
    works: ['Filet Mignon','Shrimp Bisque'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Opus One']
  ,
    pairingNotes: {
      "Crab Cake": "The gin's botanicals trace the natural sweetness of lump crab meat, and the Champagne carbonation scrubs the fried crust off the palate so each bite reads as fresh as the first. The citrus lifts the whole thing without masking what makes crab taste like crab.",
      "Seafood Tower": "Lemon oil and juniper in the French 75 mirror the brine already living in the oysters and chilled shellfish, so the drink acts as a palate equalizer across every tier. The effervescence resets between each piece, keeping delicate proteins from tasting flat by the time you reach the top.",
      "Shrimp Cocktail": "The gin's juniper and lemon citrus echo the horseradish bite in cocktail sauce, while the bubbles cut through the cold, dense sweetness of chilled shrimp. Every sip primes your palate to taste the shrimp as sweeter and snappier than it would on its own.",
      "Burrata": "The high-acid citrus and Champagne bubbles slice through burrata's fat-heavy cream center without stripping the milky sweetness that makes it worth eating. What you get is that lush interior flavor staying present on the palate longer, balanced by brightness instead of buried under it.",
      "Escargot": "The gin's herbal juniper compounds lock onto the garlic and parsley butter the escargot is cooked in, creating a botanical bridge that makes the dish taste more intentionally herbed. The Champagne acidity then lifts the butter coat off your palate so the garlic flavor stays vivid instead of coating.",
      "Seared Scallops": "The Maillard-developed crust on the scallop has caramelized sugars that the lemon and citrus in the French 75 draw forward, making the sear taste deeper and more pronounced. The effervescence contrasts the dense, custardy interior so the textural difference between crust and center becomes the whole experience.",
      "Prime Tartare": "The lemon acid and carbonation cut through the egg yolk richness and slice right through the fat in the hand-cut beef, while the juniper in the gin mirrors the herbaceous shallot and caper notes in the tartare. What the guest gets is a bright reset between each bite that keeps the raw beef tasting clean and forward rather than heavy.",
      "House Wedge": "The champagne bubbles and citrus lift scrub the blue cheese fat off the palate, and the gin's floral botanicals find a natural echo in the fresh chive and cracked pepper. The result is a colder, crisper version of the wedge — every bite of iceberg feels like it just came out of the walk-in.",
      "Grilled Caesar": "The lemon and carbonation in the French 75 push back against the anchovy and charred romaine umami, preventing the salted, smoky notes from going flat on the palate. Together, the guest experiences the grill char as more pronounced while the dressing reads lighter and more lively than it would on its own.",
      "Filet Mignon": "The high acid and effervescence cut the butter baste without stripping the delicate beef flavor the way a tannic red would, and the gin's subtle juniper adds an aromatic dimension the mild filet doesn't naturally carry. The filet stays front and center — it just tastes cleaner and more defined with each sip.",
      "Shrimp Bisque": "The lemon zest in the French 75 amplifies the natural sweetness of the shrimp in the same way a squeeze of citrus would finish the bowl, while the carbonation thins the heavy cream sensation on the tongue. The bisque feels less dense and the shrimp flavor reads brighter coming out of the richness."
    }
  },
  {
    name: 'Bee\'s Knees',
    category: 'cocktail',
    profile: ['gin','honey','citrus','light','sweet','approachable'],
    excellent: ['Crab Cake','Burrata','Escargot','Shrimp Cocktail','Seared Scallops'],
    strong: ['House Wedge','Prime Tartare','Seafood Tower','Grilled Caesar'],
    works: ['Filet Mignon','Shrimp Bisque'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Caymus Cabernet Sauvignon','Scavino Barolo','Opus One']
  ,
    pairingNotes: {
      "Crab Cake": "The honey in the Bee's Knees mirrors the natural glycine sweetness of Dungeness crab without competing, and the lemon acid cuts straight through the pan-seared crust oil to keep each bite tasting fresh. The guest gets the sweetness of the crab doubled and the crispy crust reset clean between every sip.",
      "Burrata": "The floral honey and lemon in the cocktail act as the acid and sweetness that burrata is traditionally plated with — balsamic or fruit — so the drink essentially becomes the condiment. What lands on the palate is the cream and mozzarella fat softened by citrus, with the honey pulling out the subtle milky sweetness of the fresh curd.",
      "Escargot": "The honey rounds out the sharpness of the garlic-parsley butter without muting it, and the gin botanicals — specifically the herbal, piney notes — run parallel to the parsley and blend into the compound butter's flavor profile. The guest tastes the escargot as richer and more savory, with the cocktail acting as a bright, aromatic palate bridge rather than a contrast.",
      "Shrimp Cocktail": "The lemon juice in the cocktail mirrors the acidity of the cocktail sauce while the gin's botanical notes — juniper, coriander — draw out the clean, oceanic sweetness of cold-poached shrimp. The honey rounds off any iodine sharpness, leaving nothing but pure brine and bright citrus on the finish.",
      "Seared Scallops": "Honey's floral sweetness speaks directly to the natural glycine-rich sweetness of dry-packed scallops, while the lemon cuts through the butter fat from the sear. The guest gets a clean, almost dessert-like moment — caramelized crust, floral honey, citrus lift — without any richness lingering.",
      "House Wedge": "The lemon and honey act as a lighter riff on the vinegar tang in blue cheese dressing, amplifying the dairy funk without competing with it. Iceberg's high water content resets the palate between sips, so every bite of wedge and every sip of the cocktail tastes like the first.",
      "Prime Tartare": "The acidity of fresh lemon juice does the same work as the capers and shallots in the tartare — cutting fat, brightening raw beef's iron-forward finish — while gin's herbal backbone keeps the dish from tasting heavy. What lands is a clean, savory sharpness that makes the beef's richness feel precise rather than indulgent.",
      "Seafood Tower": "The gin's botanical complexity — citrus peel, angelica, sometimes anise — maps onto the layered brininess of oysters, crab, and shrimp without flattening any single element. Honey softens the mineral edge of raw shellfish, so each tier of the tower tastes sweeter and cleaner than it would with a neutral drink.",
      "Grilled Caesar": "Lemon's citric acid slices through the anchovy-and-egg richness of Caesar dressing the way it does in a classic tableside preparation, while the charred romaine's slight bitterness is softened by the honey. The contrast between the cocktail's lightness and the dressing's fat makes both feel more defined — the salad tastes bolder, the drink tastes crisper.",
      "Filet Mignon": "The honey's mild sweetness draws out the subtle sweetness of a lean filet, and the lemon's acidity does light work cutting the butter from a classic preparation — but without the tannin of a red wine, there's nothing to anchor the beef's deeper savory notes. It's a pleasant pairing that works cleanest with a lighter preparation like herb butter rather than a red wine reduction.",
      "Shrimp Bisque": "The lemon in the cocktail cuts through the cream and roux base of the bisque, preventing the richness from coating the palate, while honey echoes the natural sweetness of the shrimp stock. The mismatch in weight — a light, airy cocktail against a heavy, reduced bisque — means the drink refreshes rather than integrates, which works but doesn't create the seamless bridge you'd get with a wine that has body to match."
    }
  },
  {
    name: 'Cucumber Gimlet',
    category: 'cocktail',
    profile: ['gin','cucumber','citrus','fresh','light','herbaceous'],
    excellent: ['Crab Cake','Burrata','Seared Scallops','Shrimp Cocktail','House Wedge'],
    strong: ['Escargot','Seafood Tower','Prime Tartare','Shrimp Bisque'],
    works: ['Filet Mignon','Grilled Caesar'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Caymus Cabernet Sauvignon','Scavino Barolo','Bone Marrow']
  ,
    pairingNotes: {
      "Crab Cake": "The lime acid in the gimlet cuts through the pan-seared crust while the cucumber's green, watery freshness mirrors the sweetness of the lump crab beneath it. Together, they keep each other light — the cocktail resets the palate so every bite of crab reads as clean and sweet as the first.",
      "Burrata": "The citrus in the gimlet sharpens the milky fat of the burrata the same way a squeeze of lemon transforms fresh mozzarella — it lifts what could feel heavy into something bright. The cucumber's vegetal water notes stretch across the cream's neutral finish and make the whole bite feel almost effervescent.",
      "Seared Scallops": "The gimlet's lime acid draws out the natural sweetness of the sear — the same Maillard crust that reads as caramel-savory gets amplified when citrus is on the palate. The gin's botanical backbone keeps the scallop's delicate brine from disappearing, so the seafood flavor stays present all the way through.",
      "Shrimp Cocktail": "Chilled shrimp has a clean oceanic brine that needs something equally cold and sharp to stay in focus — the gimlet's citrus-cucumber chill matches that temperature and salinity register almost exactly. The result is a back-and-forth where the shrimp tastes brinier and the cocktail tastes fresher with every alternating sip and bite.",
      "House Wedge": "The gimlet's citrus does the same work as the lemon wedge squeezed over a classic wedge — it sharpens the blue cheese fat and makes the iceberg's water content snap with crunch. The cucumber note in the gin runs alongside the raw, cold lettuce so the whole combination reads as one unified green freshness.",
      "Escargot": "The juniper and citrus in the gimlet cut directly through the garlic-butter pool the escargot sits in, giving the palate a clean reset between bites so the richness never stacks. That contrast makes the herb and garlic flavors in the escargot read louder and more defined — you taste the compound butter as a flavor, not just as weight.",
      "Seafood Tower": "The gimlet's lime and cucumber act as a built-in mignonette — the acidity lifts the oysters' brine, the citrus echoes the cocktail sauce on the shrimp, and the green freshness threads across everything on the tower. Rather than picking one element to pair with, the cocktail functions as the through-line that ties the whole spread together.",
      "Prime Tartare": "The tartare's raw beef fat and umami depth are cut by the gimlet's lime acidity the same way capers and mustard function in the preparation itself — the brightness isolates the mineral, iron-forward flavor of the beef so it reads as a distinct note rather than blending into richness. The cucumber cools the finish, keeping the raw intensity from lingering too long and letting the next bite stay bold.",
      "Shrimp Bisque": "The citrus acidity and cucumber's green, watery freshness cut through the bisque's heavy cream base, while the gin's botanical notes find the sweet shellfish underneath. Each sip resets the palate so the next spoonful of bisque tastes richer and the shrimp flavor reads cleaner.",
      "Filet Mignon": "The gimlet's lime and cucumber bring enough brightness to lift the filet's subtle, iron-rich beefiness without overwhelming the tenderness that makes the cut worth ordering. What the guest gets is a contrast that makes the butter-soft texture of the filet feel even more pronounced after each sip.",
      "Grilled Caesar": "The gin's juniper and the cucumber's grassy freshness push back against the Caesar's anchovy-driven umami and char from the romaine, keeping neither flavor from going too heavy. That tension means the smoke on the lettuce and the creaminess of the dressing both land more distinctly than they would on their own."
    }
  },
  {
    name: 'Vesper',
    category: 'cocktail',
    profile: ['gin','vodka','citrus','dry','spirit-forward','classic'],
    excellent: ['Seared Scallops','Crab Cake','Seafood Tower','Shrimp Cocktail','Prime Tartare'],
    strong: ['Burrata','House Wedge','Escargot','Shrimp Bisque'],
    works: ['Filet Mignon','Grilled Caesar'],
    avoid: ['The Tomahawk','Caymus Cabernet Sauvignon','Opus One','Bone Marrow']
  ,
    pairingNotes: {
      "Seared Scallops": "The Lillet Blanc in the Vesper carries a slight honeyed bitterness that meets the caramelized crust of the scallop at the Maillard reaction layer, while the vodka's neutrality keeps the cocktail from competing with the scallop's natural sweetness. Together, the sear reads deeper and the delicate brine of the scallop comes through on the finish.",
      "Crab Cake": "The Vesper's dry citrus edge dissolves the richness of the pan-fried crust and aioli, and the gin's botanicals amplify the sweet, clean crab meat that should be the star. What the guest tastes is the crab itself — the cocktail essentially strips away the fat so the seafood flavor is all that's left.",
      "Seafood Tower": "The cocktail's dry, clean profile — no residual sugar, just citrus and spirit — functions like a squeeze of lemon across every station of the tower, keeping oyster brine, lobster sweetness, and shrimp all tasting distinct rather than blending into one seafood note. It resets between bites the way a mignonette does, but with more range.",
      "Shrimp Cocktail": "The Vesper's lemon oil from the expressed peel and the cocktail sauce's horseradish share the same sharp, sinus-clearing aromatic lane, which means they reinforce rather than fight each other. After the heat of the horseradish fades, the gin's botanicals extend it, leaving the cold, clean shrimp flavor suspended longer on the palate.",
      "Prime Tartare": "The Vesper's dryness and high-proof bite cut through the egg yolk and olive oil emulsion that coats the tartare, pulling the beef's raw, mineral umami to the front. The result is that the capers and shallot in the tartare read brighter, and the beef itself tastes more intensely of itself — the cocktail essentially acts as an acid finish the dish doesn't have on its own.",
      "Burrata": "The Lillet-sharpened citrus in the Vesper cuts through burrata's lactic fat the way a squeeze of lemon does on fresh mozzarella, while the botanical dryness of the gin keeps the milk solids from turning heavy on the palate. Together, the creaminess stretches longer and the cocktail tastes rounder than either does alone.",
      "House Wedge": "The cocktail's citrus-forward acidity mirrors the tang of blue cheese dressing, and the vodka's clean neutrality keeps the iceberg's water content from diluting the gin botanicals mid-bite. What the guest gets is a brighter, sharper wedge — the dressing reads more savory and less heavy with each sip between bites.",
      "Escargot": "The juniper and herbal botanicals in the gin lock onto the parsley and garlic butter surrounding the escargot, amplifying the herbaceous character the way a squeeze of lemon does over a beurre composé. On the palate, the cocktail's dry finish strips residual butter from the tongue so each snail lands clean and the garlic reads distinct rather than muffled.",
      "Shrimp Bisque": "The Lillet's honeyed citrus rind note bridges the bisque's sweet, reduced shellfish stock, while the dry gin botanicals cut through the cream's fat content before it coats the finish. The result is a bisque that tastes cleaner and more intensely oceanic, with the sweetness of the shrimp coming forward instead of sitting behind the cream.",
      "Filet Mignon": "The Vesper's citrus edge and dry finish act like an acid rest between bites, preventing the filet's mild beef fat from building on the palate and letting the meat's inherent tenderness register more clearly. The pairing works because neither dominates — the cocktail sharpens focus on the filet's subtle char without competing with its quiet buttery finish.",
      "Grilled Caesar": "The gin's bitter botanical backbone speaks to the char and the anchovy-driven umami in the dressing, while the citrus in the cocktail replicates the role of fresh lemon juice that anchors a properly made Caesar. Between sips, the Vesper scrubs the fat from the creamy dressing so the smoky romaine reasserts itself on each bite."
    }
  },
  {
    name: 'Corpse Reviver',
    category: 'cocktail',
    profile: ['gin','citrus','absinthe','dry','complex','light'],
    excellent: ['Seared Scallops','Crab Cake','Escargot','Shrimp Cocktail','Burrata'],
    strong: ['House Wedge','Prime Tartare','Seafood Tower','Grilled Caesar'],
    works: ['Filet Mignon','Shrimp Bisque'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Opus One']
  ,
    pairingNotes: {
      "Seared Scallops": "The absinthe rinse's anise compounds echo the natural glycine sweetness in the scallop's muscle tissue, and the gin's citrus-forward botanicals lift against the Maillard crust the way a classic beurre blanc would. The sear's caramelized edge softens the cocktail's sharp finish, and the scallop's interior sweetness blooms wider than it would with water between bites.",
      "Crab Cake": "The Cointreau's orange oil and the gin's citrus notes in the Corpse Reviver mirror the brightness that remoulade or a lemon aioli would normally provide for crab, while the absinthe's anise character draws out the natural sweetness in the crab meat itself. What the guest tastes is a crisper crust — the cocktail's dry acidity cuts the pan-fried exterior's oil — and crab that finishes sweeter and cleaner on the back of the palate.",
      "Escargot": "The absinthe's anise and the gin's botanicals lock onto the tarragon and parsley butter in the escargot, while the citrus cuts through the fat before the garlic reasserts on the finish. The result is a back-and-forth that keeps the richness from sitting heavy and makes every bite taste cleaner than the last.",
      "Shrimp Cocktail": "Lemon-forward Cointreau and fresh citrus in the cocktail mirror the acidity of the cocktail sauce while the gin's juniper amplifies the shrimp's natural oceanic salinity. Together they create a bright, high-contrast bite where the chilled sweetness of the shrimp lingers just long enough before the dry finish resets the palate.",
      "Burrata": "The cocktail's sharp citrus acidity and dry finish act as a foil to the burrata's fat-rich cream center, doing the work that a drizzle of good olive oil and flaky salt would on the plate. What the guest gets is that contrast between cold, electric brightness and cool, pillowy creaminess that makes the burrata taste richer by comparison.",
      "House Wedge": "The lemon and Lillet blanc in the cocktail echo the brightness of the vinegar-forward dressing while the gin's herbal backbone runs parallel to the fresh chive and dill in the blue cheese. The iceberg's water content and the cocktail's effervescent dryness keep the whole thing feeling crisp and uncluttered, never heavy.",
      "Prime Tartare": "The citrus and dry vermouth cut through the fat of the hand-cut beef and act as a stand-in for the lemon and caper acidity already working in the tartare, essentially doubling down on the dish's own balancing agents. What emerges is a cleaner expression of the beef's umami — brighter and more defined — with the absinthe's anise picking up any Worcestershire or mustard notes in the mix.",
      "Seafood Tower": "The gin's juniper and the cocktail's sustained citrus acidity function like a squeeze of lemon across the entire tower, tightening the briny minerality in oysters and the sweetness in crab and lobster. Each sip between bites re-chills the palate and resets it so the seafood reads as fresher and more distinct rather than blurring into one note.",
      "Grilled Caesar": "The char on the romaine introduces a bitter, smoky edge that the absinthe in the cocktail meets head-on — both are high-toned and slightly bitter, so they amplify rather than fight each other. The citrus then cuts through the anchovy-and-Parmesan fat in the dressing, keeping the creaminess from dominating and pulling the smoke back to the foreground.",
      "Filet Mignon": "The cocktail's dryness and citrus acidity provide contrast to the filet's mild, buttery fat, doing the job a squeeze of lemon does on a simply prepared piece of meat. The pairing works, though the filet's subtlety means the cocktail's botanicals occasionally outpace the beef — best between bites rather than sipped simultaneously.",
      "Shrimp Bisque": "The citrus acid and dry absinthe cut through the cream's fat content while the juniper in the gin mirrors the aromatic depth of the bisque's shellfish reduction. Together, the cocktail keeps each sip of bisque tasting like the first — bright, clean, and never cloying."
    }
  },
  {
    name: 'Aviation',
    category: 'cocktail',
    profile: ['gin','floral','cherry','citrus','light','unique'],
    excellent: ['Burrata','Crab Cake','Seared Scallops','Shrimp Cocktail','Escargot'],
    strong: ['House Wedge','Prime Tartare','Seafood Tower','Shrimp Bisque'],
    works: ['Filet Mignon','Grilled Caesar'],
    avoid: ['The Tomahawk','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo']
  ,
    pairingNotes: {
      "Burrata": "The maraschino's candied cherry note finds the milky sweetness in fresh burrata, and the crème de violette lifts the cheese's lactic fat without overwhelming it. The guest gets a mouthful that reads like a floral cream — delicate, just barely sweet, and longer on the finish than either is alone.",
      "Crab Cake": "The citrus in the Aviation mirrors the brightness of fresh crab while the floral violette note threads through the sweet back-end of Dungeness without competing with the seared crust. That first bite after a sip turns the crab's natural sweetness into something almost fruit-forward, with the crispy crust snapping clean against the cocktail's dry gin finish.",
      "Seared Scallops": "The caramelized crust on the scallop and the maraschino's almond-cherry depth share a browned-sugar register that makes both read richer than they are solo. The gin's juniper then cuts through the scallop's sea-butter center and leaves the palate clean, setting up the next bite.",
      "Shrimp Cocktail": "The Aviation's citrus — lemon and the bright edge of creme de violette — lands on the shrimp's natural brine the way a squeeze of lemon does, but more aromatic and persistent. The cold, snappy texture of chilled shrimp makes the gin botanicals pop harder, and the whole thing tastes like high-acid coastal air.",
      "Escargot": "The floral violette and cherry in the Aviation push back against the garlic-herb butter without washing it out — the botanical sweetness suspends in the fat and stretches the escargot's finish. What the guest gets is the richness of the butter lingering while the cocktail keeps clearing the palate, so the garlic never turns sharp or heavy.",
      "House Wedge": "The crème de violette finds the buttermilk tang in the blue cheese dressing and softens its bite, while the citrus element mirrors the acidity already working in the dressing. The iceberg's crunch and cold temperature snap the Aviation's floral notes forward, making the cocktail taste more vivid and the salad taste less heavy.",
      "Prime Tartare": "The maraschino's almond-cherry bitterness bridges into the umami depth of hand-cut beef the way a drop of Worcestershire does — not covering it, but giving it a longer echo. The gin's juniper provides enough tannin-adjacent dryness to cut through the egg yolk richness, so the tartare's bold, raw intensity stays in focus without turning dense on the palate.",
      "Seafood Tower": "The gin's botanical oils and maraschino's cherry brightness cut through the iodine salinity of raw oysters and chilled shellfish without overwhelming their delicate oceanic sweetness. Each sip resets the palate so the next bite of crab or shrimp tastes cleaner and colder than the last.",
      "Shrimp Bisque": "The crème de violette's floral lift and lemon citrus act as a counterweight to the bisque's heavy cream and shellfish reduction, preventing the richness from coating the palate. Together they create a back-and-forth between velvet texture and bright aromatic clarity that makes the shrimp flavor read more distinctly.",
      "Filet Mignon": "The maraschino cherry and citrus in the Aviation find a quiet mirror in the filet's natural iron-sweet myoglobin notes, while the gin's juniper cuts the butter finish without adding tannin weight. The result is a leaner, more lifted expression of the steak — the tenderness stays, but the fat doesn't linger.",
      "Grilled Caesar": "The Aviation's floral and citrus brightness pushes back against the Caesar's anchovy umami and char smoke, creating a tension where neither element dominates. Guests notice the romaine's bitterness soften and the lemon in the dressing sharpen, making the whole dish taste more composed."
    }
  },
  {
    name: 'Paloma',
    category: 'cocktail',
    profile: ['tequila','grapefruit','citrus','light','refreshing','approachable'],
    excellent: ['Crab Cake','Seared Scallops','Shrimp Cocktail','Burrata','House Wedge'],
    strong: ['Prime Tartare','Seafood Tower','Shrimp Bisque','Grilled Caesar'],
    works: ['Filet Mignon','Faroe Island Salmon','Roast Half Chicken'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Caymus Cabernet Sauvignon','Opus One','Bone Marrow']
  ,
    pairingNotes: {
      "Crab Cake": "The grapefruit's naringin bitterness and tequila's agave vegetal notes sharpen the sweet lump crab meat while the carbonation shatters the crispy panko crust on the palate. What you get is an amplified contrast between the cake's golden exterior and the fresh, clean sweetness of the crab inside.",
      "Seared Scallops": "The Paloma's citrus acidity cuts the caramelized Maillard crust on the scallop's flat face, lifting the sear without erasing it, while the grapefruit mirrors the scallop's own faint citrus-sweet protein notes. The scallop's interior — still translucent and barely set — tastes sweeter and more oceanic with every sip.",
      "Shrimp Cocktail": "The grapefruit's brightness echoes the shrimp's natural brine while the tequila's light smokiness adds a back-of-the-palate warmth that the chilled shrimp's cold temperature suppresses on its own. The cocktail sauce's horseradish heat blooms later and longer when followed by a sip of Paloma, extending the finish.",
      "Burrata": "The Paloma's carbonation and citrus acidity slice through burrata's high-fat stracciatella center, preventing the cream from flattening the palate, while the grapefruit's bitter edge gives the milk's natural sweetness a frame it doesn't have on its own. Guests experience the burrata as lighter and more nuanced — almost fruit-forward — than it reads alone.",
      "House Wedge": "The grapefruit and citrus in the Paloma cut straight through the buttermilk fat in the blue cheese dressing, while the tequila's agave sweetness mirrors the cool crispness of the iceberg. Every sip resets the palate, making each bite of the wedge taste like the first one.",
      "Prime Tartare": "The citric acid in the grapefruit acts like a second squeeze of lemon on the raw beef, brightening the iron-rich umami and lifting the capers and shallots forward. The tequila's vegetal agave note threads through the richness of the egg yolk, keeping the tartare tasting clean and precise rather than heavy.",
      "Seafood Tower": "The grapefruit's naringin bitterness mirrors the oceanic minerality in fresh oysters and chilled shrimp, while the carbonation scrubs any lingering brine off the palate between bites. The result is a constant reset — each piece of seafood lands as bright and cold as if it just came out of the ice.",
      "Shrimp Bisque": "The grapefruit's acidity slices through the heavy cream reduction in the bisque, preventing the sweetness of the shrimp from going cloying, while the tequila's earthy backbone echoes the shellfish stock underneath. What you get is the full richness of the bisque with a clean, citrus-lifted finish rather than a heavy one.",
      "Grilled Caesar": "The char on the grilled romaine produces bitter, smoky compounds that echo the naringin bitterness in grapefruit juice, locking the two together at a flavor level most guests don't expect. The tequila cuts the anchovy-heavy, emulsified dressing so the smokiness stays front and center rather than getting buried in fat.",
      "Filet Mignon": "The grapefruit acidity in the Paloma gently lifts the mild, lean flavor of the filet, which on its own doesn't have the fat content to hold up to heavier drinks, giving it a brightness it earns rather than overwhelms. The agave sweetness in the tequila plays off the butter-basted crust without competing with the beef's delicate center.",
      "Faroe Island Salmon": "The citrus acidity in the Paloma acts on the omega-3-rich fat of the salmon the way a squeeze of lemon would — cutting through the richness without stripping the fish of its silky texture. The tequila's light herbaceous quality picks up any dill or herb prep on the salmon, threading a clean, aromatic note through each bite.",
      "Roast Half Chicken": "The grapefruit's brightness cuts through the rendered chicken fat and crispy skin, giving the savory, roasted Maillard notes somewhere to go rather than sitting heavy on the palate. The tequila's agave warmth mirrors the caramelized drippings underneath the bird, making the roasted quality feel more intentional and layered."
    }
  },
  {
    name: 'Pablo Sour',
    category: 'cocktail',
    profile: ['tequila','citrus','sour','egg-white','balanced','medium'],
    excellent: ['Crab Cake','Seared Scallops','Prime Tartare','House Wedge','Shrimp Bisque'],
    strong: ['Burrata','Seafood Tower','Grilled Caesar','Filet Mignon'],
    works: ['Kansas City','Faroe Island Salmon','Roast Half Chicken'],
    avoid: ['The Tomahawk','Caymus Cabernet Sauvignon','Opus One','Bone Marrow']
  ,
    pairingNotes: {
      "Crab Cake": "The citrus acidity in the Pablo Sour cuts through the pan-seared crust while the agave backbone in the tequila mirrors the natural sweetness of the lump crab. The egg-white foam softens the transition, leaving the crab's delicate flavor front and center rather than buried under the cocktail.",
      "Seared Scallops": "The bright lime and lemon in the Pablo Sour act like a squeeze of citrus over the scallop, amplifying the caramelized sear without competing with the sweet, briny interior. The silky egg-white texture in the cocktail matches the buttery give of a properly cooked scallop, making each sip feel like an extension of the bite.",
      "Prime Tartare": "The sour citrus in the Pablo Sour mimics the acid traditionally used to cure raw beef, waking up the iron-rich umami and fat in the tartare the same way a squeeze of lemon does. The tequila's vegetal, peppery agave notes push back against the richness, keeping the palate clean between bites.",
      "House Wedge": "The tart citrus in the Pablo Sour slices through the fat in the blue cheese dressing the same way a squeeze of lemon brightens a creamy sauce, while the egg-white foam mirrors the dressing's own thick, aerated texture. The result is a back-and-forth between cold, crunchy iceberg and the cocktail's bright, frothy finish that keeps each bite tasting fresh.",
      "Shrimp Bisque": "The acidity in the Pablo Sour breaks through the heavy cream base of the bisque, resetting the palate the way a squeeze of citrus finishes a lobster bisque in the kitchen. The tequila's roasted agave character finds common ground with the toasted shellfish sweetness, deepening the bisque's flavor rather than washing it out.",
      "Burrata": "The citrus in the Pablo Sour provides just enough acidity to highlight the milky fat in the burrata without overpowering its subtle lactic flavor, the same way a drizzle of good vinegar elevates fresh mozzarella. The egg-white foam on the cocktail creates a textural echo of the burrata's soft, cloud-like interior.",
      "Seafood Tower": "The bright citrus and salinity in the Pablo Sour act as a universal cleanser across the briny oysters, sweet shrimp, and cold lobster on the tower, the way a mignonette or lemon wedge works with raw shellfish. The tequila's clean, slightly mineral finish amplifies the oceanic quality in each shell without muddying the individual flavors.",
      "Grilled Caesar": "The char on the romaine picks up a smoky bitterness that the sour citrus in the Pablo Sour cuts through directly, balancing the same way lemon juice finishes a Caesar dressing. The tequila's earthy agave notes hold their own against the anchovy-driven umami in the dressing, keeping the cocktail from disappearing behind the boldness of the salad.",
      "Filet Mignon": "The agave's herbal lift and citric acid cut through the filet's intramuscular fat while the egg-white foam mirrors the meat's silky, buttery texture. Together, each bite of beef feels cleaner and more defined, with the tequila's vegetal brightness amplifying the filet's subtle mineral notes.",
      "Kansas City": "The sharp citrus acidity in the sour attacks the Kansas City's dense, chewy crust, dissolving the rendered fat on the palate and resetting it for the next bite. What guests get is a cleaner read on the beef's deep, beefy core flavor — the sour acting like a squeeze of lemon on a cast-iron sear.",
      "Faroe Island Salmon": "The tequila's agave character and citrus acidity mirror the classic lemon-on-fish technique, chemically brightening the salmon's high fat content the same way a squeeze of lime does. The egg-white foam softens the cocktail's edge so neither the drink nor the fish's delicate texture overpowers the other.",
      "Roast Half Chicken": "The Maillard-browned skin on the chicken shares roasted, slightly bitter notes with the agave in the tequila, creating a savory echo between the two. The citrus and foam lift the richness of the rendered fat so the chicken's herby, savory depth stays front and center rather than coating the palate."
    }
  },
  {
    name: 'Margarita',
    category: 'cocktail',
    profile: ['tequila','citrus','salt','bright','refreshing','approachable'],
    excellent: ['Crab Cake','Shrimp Cocktail','Seared Scallops','House Wedge','Burrata'],
    strong: ['Prime Tartare','Seafood Tower','Shrimp Bisque','Grilled Caesar'],
    works: ['Filet Mignon','Faroe Island Salmon','Roast Half Chicken'],
    avoid: ['The Tomahawk','Caymus Cabernet Sauvignon','Opus One','Scavino Barolo']
  ,
    pairingNotes: {
      "Crab Cake": "The salt rim and citrus in the Margarita are doing exactly what Old Bay and lemon do for crab — amplifying the shellfish's natural ocean sweetness while cutting through the fried crust's oil. That acidity and salinity hit first, then the crab's delicate sweetness blooms on the back palate in a way it can't when eaten alone.",
      "Shrimp Cocktail": "The Margarita's lime and salt are a direct structural match for cocktail sauce — both are built on acid, salinity, and brightness to frame cold, briny shellfish. Guests will notice the shrimp's natural brininess intensifies and lingers longer, while the tequila's agave gives the chilled shrimp a warmth it doesn't have on its own.",
      "Seared Scallops": "The Margarita's bright citrus acidity contracts the seared scallop's caramelized crust the same way a squeeze of lime does for ceviche — it sharpens the Maillard char without dulling the scallop's inherent sweetness. What guests experience is a tension between the cocktail's tartness and the scallop's rich, buttery center that keeps both vivid through the finish.",
      "House Wedge": "The salt and citrus in the Margarita amplify the bleu cheese's lactic tang and the iceberg's clean, watery crunch, functioning like a vinaigrette in liquid form. Together, the wedge reads crisper and more refreshing, and the cocktail's tequila backbone gives the creamy dressing a savory counterweight it lacks on its own.",
      "Burrata": "The lime acidity and flaky salt in the margarita cut through burrata's lactic fat the same way a squeeze of citrus brightens fresh mozzarella. Each sip resets the palate so the next bite of cream tastes cleaner and more delicate than the last.",
      "Prime Tartare": "Tequila's agave funk and the citrus in the margarita mirror the classic tartare build — acid, salt, and raw beef are already a natural trio, and the blanco's vegetal bite acts like a second hit of the shallot already in the dish. The salt rim amplifies the umami in the beef, making the whole plate taste more intentional.",
      "Seafood Tower": "The lime and sea salt in the margarita are essentially a liquid mignonette — they match the brininess of oysters and the clean sweetness of chilled shrimp without overpowering anything. The tequila's mineral finish ties directly to the ocean flavor in the shellfish, so the pairing reads as one coherent course.",
      "Shrimp Bisque": "The citrus acidity in the margarita slices through the bisque's cream and butter fat, keeping the sweet shrimp flavor from turning heavy on the palate. The agave and the bisque's cognac or sherry base share a similar aromatic sweetness, so the two drinks essentially finish each other's sentence.",
      "Grilled Caesar": "The char on the grilled romaine produces bitter, smoky compounds that the citrus in the margarita lifts and brightens, the same way lemon finishes a classic Caesar dressing. The salt rim echoes the anchovy and Parmesan in the dressing, intensifying the savory depth without adding more richness.",
      "Filet Mignon": "The margarita's bright acidity does what béarnaise does structurally — it gives the lean, mild filet a counterpoint that keeps the meat from reading as flat. The salt in the cocktail draws out the filet's subtle beefy sweetness, and the tequila's clean finish prevents the pairing from getting heavy.",
      "Faroe Island Salmon": "Lime acid and the tequila's clean agave character cut through the salmon's omega-rich fat the way a citrus beurre blanc would, resetting the palate between bites. The brightness of the cocktail keeps the salmon's delicate flavor forward rather than letting the fat coat the mouth and dull it.",
      "Roast Half Chicken": "The citrus and salt in the margarita mimic a good pan dripping deglaze — they lift the roasted, caramelized skin notes and keep the rich poultry from feeling heavy through the meal. The tequila's agave sweetness plays against the savory roast fond, creating a back-and-forth that makes both the food and the drink taste more complex."
    }
  },
  {
    name: 'Espresso Martini',
    category: 'cocktail',
    profile: ['vodka','coffee','rich','sweet','bold','dessert-adjacent'],
    excellent: ['Chocolate Cake','Chocolate Brownie','Peanut Butter Brownie','Mocha Creme','Cheesecake'],
    strong: ['Bone Marrow','Brussels and Belly','Truffle Fries','Creamed Spinach','Beignets','Carrot Cake'],
    works: ['Kansas City','Filet Mignon','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Laurent Perrier Le Cuvée Brut','Seafood Tower']
  ,
    pairingNotes: {
      "Chocolate Cake": "The roasted, bitter-sweet coffee in the martini shares the same Maillard-reaction compounds as the dark cocoa in the cake — two expressions of the same browning chemistry. Together, they amplify the chocolate depth while the vodka's clean finish keeps the sweetness from stacking into cloying.",
      "Chocolate Brownie": "The espresso's chlorogenic acids cut through the brownie's dense cocoa butter fat the same way a shot pulls through a portafilter — it clarifies rather than competes. What the guest gets is a longer, darker chocolate finish than either delivers alone.",
      "Peanut Butter Brownie": "The bitter roast of the espresso does the same job as dark chocolate in a Reese's — it draws a hard line against the peanut's fatty sweetness so neither reads as flat. That contrast sharpens the nuttiness and makes the cocktail's sweetness taste earned rather than added.",
      "Mocha Creme": "Both the martini and the mocha crème are built around the same coffee-chocolate axis, so the pairing doesn't contrast — it layers, stacking concentrations of roast and cream until the flavor hits a register neither reaches solo. The vodka's neutrality keeps it precise rather than muddy.",
      "Cheesecake": "The lactic tang in the cream cheese cuts through the martini's Kahlúa sweetness the way a squeeze of citrus resets a palate — suddenly both taste brighter and less heavy. The guest gets a clean, creamy coffee flavor where you'd expect richness to pile up.",
      "Bone Marrow": "The coffee's roasted bitterness and the vodka's alcohol both act as fat solvents, slicing through the marrow's oleic richness and resetting the palate between bites. What lands is the marrow's umami coming through cleaner, with a faint mocha edge from the contrast of char and roast.",
      "Brussels and Belly": "The coffee's bitter roast speaks directly to the caramelized char on the Brussels and the rendered pork fat — all three share the same browning chemistry and smoky edge. A sip of the martini after a bite pulls that char flavor forward while the sweetness of the Kahlúa mirrors the glaze on the belly.",
      "Truffle Fries": "Truffles and coffee share volatile sulfur and earthy aromatic compounds that reinforce each other when they meet — it's a harmonic rather than a contrast. The martini's sweetness softens the truffle's funk just enough to make it approachable, while the roast deepens the umami so the fries taste richer than they would with anything else.",
      "Creamed Spinach": "The roasted bitterness of the espresso cuts through the heavy cream fat the same way coffee tannins cleanse a fatty palate — while the cocktail's sweetness draws out the iron-rich depth of the spinach. Together they create a push-pull of bitter and dairy-rich that keeps each bite from feeling heavy.",
      "Beignets": "The coffee's dark roast bitterness is the direct counterweight to the powdered sugar and hot fried dough — the same reason a café au lait exists. Every sip resets the sweetness so the next bite of beignet tastes like the first.",
      "Carrot Cake": "The cocktail's espresso bitterness and the cake's warm spices — cinnamon, nutmeg, clove — are both built around the same roasted, caramelized flavor register. The vodka's clean heat cuts through the cream cheese frosting so neither the cake nor the drink collapses into pure sweetness.",
      "Kansas City": "Coffee shares pyrazine compounds with seared beef crust — both are products of high-heat browning — so the espresso mirrors the char on the outside of a bold, lean strip. The cocktail's sweetness bridges the gap where the meat's natural fat is leaner, standing in as a kind of liquid marbling.",
      "Filet Mignon": "The espresso's roasted intensity provides contrast against the filet's mild, buttery tenderness — the bitterness doing the work that fat marbling does in a ribeye. What the guest experiences is the coffee amplifying the subtle beefy depth that a lean cut carries quietly on its own.",
      "Lardons": "The bitter, roasted compounds in espresso are a classic counter to rendered pork fat — think the instinct to pour black coffee alongside a plate of bacon. The salt-fat punch of the lardons absorbs the cocktail's sweetness and sends the coffee's smoky depth forward."
    }
  },
  {
    name: 'The Happy Wife',
    category: 'cocktail',
    profile: ['vodka','orange','citrus','ginger','light','approachable','simple'],
    excellent: ['Shrimp Cocktail','Roast Half Chicken','Crab Cake'],
    strong: ['Burrata','House Wedge','Seared Scallops','Faroe Island Salmon','Shrimp Bisque'],
    works: ['Filet Mignon','Grilled Caesar','Prime Tartare'],
    avoid: ['The Tomahawk','Bone Marrow','Opus One','Caymus Cabernet Sauvignon','Scavino Barolo']
  ,
    pairingNotes: {
      "Shrimp Cocktail": "The ginger and orange in the cocktail speak directly to the same brightness as cocktail sauce's horseradish and lemon, while the citrus oils amplify the shrimp's briny sweetness rather than masking it. The guest gets a clean, aromatic rush that makes the chilled shrimp taste colder and more vivid.",
      "Roast Half Chicken": "The orange's acidity cuts the rendered fat under the roasted skin while the ginger's heat activates the savory fond notes in the drippings. What comes through is a brightness that lifts the richness of the chicken without dulling any of its caramelized depth.",
      "Crab Cake": "The ginger's heat and bright citrus acidity cut through the pan-fried crust and lift the sweet lump crab without overwhelming its delicate brininess. Together, the cocktail acts like a squeeze of lemon and a kick of spice, making each bite of crab taste cleaner and more vivid.",
      "Burrata": "The cocktail's orange and citrus notes mirror the way a drizzle of good olive oil and sea salt would wake up fresh burrata — acid doing the work that fat can't do alone. On the palate, the vodka's neutrality lets the cream linger while the ginger provides a subtle, warming finish that keeps the richness from going flat.",
      "House Wedge": "The citrus and ginger in the cocktail act as a bright counterpoint to the tangy blue cheese dressing, sharpening its funk without fighting it. What the guest gets is a clean, refreshing reset between bites — the wedge stays cold and creamy, and the cocktail keeps the whole thing feeling light.",
      "Seared Scallops": "The Maillard crust on the scallop shares a caramelized sweetness with the orange component of the cocktail, while the ginger echoes the natural brine of the sea. Each sip after a bite extends the scallop's sweetness and leaves a clean, almost floral finish rather than letting the richness sit.",
      "Faroe Island Salmon": "The citrus acidity in the cocktail does what a squeeze of lemon does to fatty fish — it cuts the omega-rich fat and brightens the salmon's natural sweetness without masking its depth. The ginger adds a subtle heat that lingers where the fish's fat coats the palate, keeping the finish lively.",
      "Shrimp Bisque": "The orange and citrus in the cocktail mirror the bisque's natural sweetness from the shrimp shells, while the ginger introduces a warmth that amplifies the bisque's subtle heat and cream without competing with it. The result is a pairing where each sip resets the richness of the bisque and keeps the shrimp flavor in sharp focus.",
      "Filet Mignon": "The cocktail's clean citrus brightness provides contrast to the filet's buttery tenderness, where there's very little fat or char to anchor bold flavors. The pairing works as a palate refresher — the ginger's spice finds the mild beefiness and amplifies it slightly, making the filet taste more substantial than it would alongside a heavier pour.",
      "Grilled Caesar": "The smoky char on the romaine and the anchovy-driven umami of the dressing are both assertive enough that the cocktail's citrus has to work hard — it cuts through the creamy dressing but the ginger gets a little lost against that deep savory base. The pairing is refreshing between bites, though the cocktail's delicate profile plays second chair to the Caesar's bold, briny character.",
      "Prime Tartare": "The ginger in the cocktail cuts through the fat of the egg yolk while the citrus brightens the iron-rich rawness of hand-cut beef. Together, they pull the tartare's umami forward and leave the palate clean, so every bite tastes as bold as the first."
    }
  },
  {
    name: 'Transfusion',
    category: 'cocktail',
    profile: ['vodka','grape','ginger','light','refreshing','approachable'],
    excellent: ['House Wedge','Burrata','Shrimp Cocktail','Crab Cake'],
    strong: ['Seared Scallops','Prime Tartare','Shrimp Bisque','Grilled Caesar'],
    works: ['Filet Mignon','Faroe Island Salmon','Roast Half Chicken'],
    avoid: ['The Tomahawk','Bone Marrow','Caymus Cabernet Sauvignon','Opus One']
  ,
    pairingNotes: {
      "House Wedge": "The Concord grape sweetness in the Transfusion mirrors the subtle sugars in iceberg's cell water, while the ginger sharpens against the blue cheese's lactic funk. The result is a wedge that tastes colder and crisper, with the dressing's creaminess smoothed into something almost silky.",
      "Burrata": "The light effervescence and grape juice acidity in the Transfusion slice through burrata's dense cream center the way a squeeze of lemon would, without overwhelming its delicacy. What the guest gets is a cleaner version of the cheese — the milky sweetness comes through without any heaviness.",
      "Shrimp Cocktail": "The ginger in the Transfusion echoes the horseradish heat in cocktail sauce, creating a shared spice thread between the glass and the plate. That shared warmth makes the cold shrimp's brine pop, and the grape's residual sweetness softens the back-of-throat burn so it finishes clean.",
      "Crab Cake": "The light grape sweetness in the Transfusion amplifies the natural glycine — the amino acid responsible for crab's characteristic sweetness — while the ginger cuts the fried crust's oil before it coats the palate. Each bite of crab cake tastes sweeter and lighter than it would on its own.",
      "Seared Scallops": "The caramelized crust on a seared scallop is built on the same Maillard browning chemistry that gives Concord grape its jammy depth, and the Transfusion's sweetness locks onto that shared note. The ginger then lifts the scallop's oceanic mineral quality so the sweetness of the meat doesn't go flat mid-bite.",
      "Prime Tartare": "The grape juice acidity in the Transfusion is mild enough not to 'cook' the raw beef, but sharp enough to brighten the iron and fat notes the way a few drops of red wine vinegar would in a classic preparation. The ginger introduces a low heat that extends the tartare's finish without competing with any garnish on the plate.",
      "Shrimp Bisque": "The Transfusion's light body creates resistance against the bisque's heavy cream base — the grape acidity cuts the roux while the ginger mirrors the bisque's own aromatic backbone. What would otherwise be a rich, one-note sip-and-eat becomes a back-and-forth where each round of the bisque tastes fresher than the last.",
      "Grilled Caesar": "The Concord grape sweetness in the Transfusion cuts through the anchovy-driven umami in the dressing, while the ginger provides a sharp counterpoint to the blistered, bitter char on the romaine. Together they reset the palate between bites so the smokiness stays vivid instead of going muddy.",
      "Filet Mignon": "The light grape character in the Transfusion mirrors the subtle iron-rich depth of the filet without overwhelming its restraint, and the ginger's heat gently amplifies the butter finish from the resting sauce. The guest gets a cleaner expression of the meat's tenderness because the cocktail isn't competing for the same flavor space.",
      "Faroe Island Salmon": "The ginger in the Transfusion speaks directly to the omega-rich fat in the salmon the same way a ginger-soy glaze would, cutting through the oiliness without stripping the delicate flesh. Each sip acts like a palate rinse that keeps the salmon tasting bright rather than heavy across the whole plate.",
      "Roast Half Chicken": "The Concord grape's jammy sweetness echoes the caramelized sugars that develop on the chicken skin during roasting, while the ginger provides lift against the rendered fat. The result is that the savory depth of the bird comes forward more cleanly on the finish, without the richness lingering."
    }
  },
  {
    name: 'Head Fake',
    category: 'cocktail',
    profile: ['vodka','lemon','citrus','sweet','limoncello','bright','approachable'],
    excellent: ['Shrimp Cocktail','Seared Scallops','Burrata'],
    strong: ['Crab Cake','House Wedge','Seafood Tower','Shrimp Bisque','Escargot'],
    works: ['Filet Mignon','Prime Tartare','Grilled Caesar'],
    avoid: ['The Tomahawk','Bone Marrow','Caymus Cabernet Sauvignon','Opus One','Scavino Barolo']
  ,
    pairingNotes: {
      "Shrimp Cocktail": "The lemon acidity in the Head Fake mirrors what the cocktail sauce's horseradish is already doing — cutting the brine and snapping the shrimp's sweetness into focus — so the two work in the same direction rather than against each other. The guest gets the clean oceanic flavor of the shrimp amplified, with the citrus extending that brightness well into the finish.",
      "Seared Scallops": "The natural glycine sweetness in the scallop's seared crust finds a direct echo in the Head Fake's lemon-forward sweetness, while the citrus acid lifts the Maillard crust so it reads as caramel rather than just char. Together they create a back-and-forth between the scallop's interior sweetness and exterior sear that keeps every bite tasting intentional.",
      "Burrata": "The Head Fake's citrus acidity does exactly what a good finishing oil and flaky salt would do on burrata — it gives the fat somewhere to go by creating contrast, so the cream reads as rich instead of flat. The slight sweetness in the cocktail keeps the pairing gentle enough that the milk's delicacy doesn't disappear.",
      "Crab Cake": "The lemon in the Head Fake activates the same sweet glutamates in the crab that a squeeze of fresh citrus over the top would, while the vodka base keeps the cocktail clean enough not to compete with the crispy panko crust. The guest gets the crab's inherent sweetness louder on the finish, with the citrus tying the lemon-herb aioli into the whole experience.",
      "House Wedge": "The lemon acidity in the cocktail cuts through the blue cheese fat the same way a squeeze of citrus would, while the sweetness tempers the dressing's sharpness. Together, they leave the palate clean and bright between bites, turning a classic wedge into something noticeably lighter.",
      "Seafood Tower": "Citrus and cold shellfish is a centuries-old combination because the acid in the lemon brightens the oceanic brine in oysters and shrimp without masking it. The sweetness in the cocktail softens any iodine edge, so every sip resets the palate and makes the next bite taste fresher.",
      "Shrimp Bisque": "The lemon and citrus in the cocktail slice through the bisque's cream and butter fat, preventing the richness from building up on the palate. That contrast keeps the natural sweetness of the shrimp front and center with each spoonful.",
      "Escargot": "The bright citrus in the cocktail acts as a foil to the garlic-herb butter, lifting the herbaceous notes — the way lemon zest finishes a gremolata — without competing with the parsley or shallot. Each sip clears the butter coat from the palate so the next escargot lands clean and savory.",
      "Filet Mignon": "The vodka base keeps the cocktail from adding competing flavors, so the lemon and sweetness simply frame the filet's mild, buttery character without overpowering it. The slight acidity brightens the meat's delicate iron notes and keeps a leaner cut from tasting flat.",
      "Prime Tartare": "The sweet-citrus profile of the cocktail contrasts the tartare's umami depth and raw richness the way capers and a squeeze of lemon traditionally do — sharpening the savory without masking it. That brightness keeps the fat in the yolk and beef from coating the palate, so each bite stays as bold as the first.",
      "Grilled Caesar": "The char on grilled romaine produces bitter, smoky compounds that the cocktail's sweetness tempers, while the lemon mirrors the anchovy-driven acidity already in the dressing. The result is that the smoky and creamy elements in the Caesar read louder because the cocktail is handling the sharp edges."
    }
  },
  {
    name: 'Negroni',
    category: 'cocktail',
    offMenu: true,
    profile: ['gin','bitter','herbal','citrus','spirit-forward','complex'],
    excellent: ['Prime Tartare','Bone Marrow','Escargot','Grilled Caesar','Kansas City'],
    strong: ['Filet Mignon','Cowboy Ribeye','Mushrooms','Creamed Spinach'],
    works: ['House Wedge','Brussels and Belly','Truffle Fries'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Laurent Perrier Le Cuvée Brut']
  ,
    pairingNotes: {
      "Prime Tartare": "The Campari's bitter quinine and the gin's botanicals act as a palate scrubber against the tartare's fat and raw umami, the same way a bitter digestif clears a heavy course. That contrast makes the beef's mineral depth and the yolk's richness bloom on the palate rather than accumulate.",
      "Bone Marrow": "Campari's gentian bitterness cuts through the fat rendering in the marrow while the gin's juniper lifts the smoke off the bone. What lands is a clean, almost mineral finish where the richness never sits heavy on the palate.",
      "Escargot": "The herbal botanicals in the gin — angelica root, coriander — lock onto the parsley and garlic butter like a mirror, amplifying rather than contrasting. Each sip resets the fat and pulls the herbaceous core of the dish forward so the garlic reads brighter.",
      "Grilled Caesar": "Campari's bitter citrus backbone goes to work on the charred romaine's Maillard edge, while the sweet vermouth rounds the anchovy-driven umami without flattening it. The result is a wash of savory and bitter that makes the char taste intentional rather than aggressive.",
      "Kansas City": "The tannin structure from the sweet vermouth grabs the dense muscle fiber of this lean cut the way a red wine would, giving the beef a juicier impression than its leanness suggests. The Campari's bitter finish then scrubs the palate clean for the next bite.",
      "Filet Mignon": "The orange oil and citrus peel in the Negroni create contrast against the filet's mild, almost dairy-soft texture — the bitter edge doing the seasoning work that the cut's low fat content can't do on its own. What you get is a brighter, more defined expression of the beef without masking its tenderness.",
      "Cowboy Ribeye": "Campari's bitter gentian acts as a fat solvent against the intramuscular marbling of the ribeye, preventing richness from compounding into heaviness. The sip after each bite effectively resets the palate so the bold beefy flavor reads fresh through the entire cut.",
      "Mushrooms": "The gin's earthy botanicals — orris root, cassia — run parallel to the mushrooms' glutamate-heavy umami, creating a layered savory depth rather than a simple match. The Campari bitterness then lifts the earthiness so the mushrooms taste more intensely of themselves.",
      "Creamed Spinach": "Sweet vermouth's dried-fruit sweetness stabilizes against the heavy cream and butterfat in the spinach, keeping the dish from reading as flat dairy. The bitter finish sharpens the iron-rich green flavor that the cream tends to mute, making the vegetable actually present on the palate.",
      "House Wedge": "The Campari's bitter orange and the gin's juniper cut through the buttermilk richness of the blue cheese dressing the same way a squeeze of lemon would. What's left on the palate is the cool crunch of iceberg and fresh herbs from the cocktail, wiping the plate clean between bites.",
      "Brussels and Belly": "The Campari's quinine bitterness mirrors the char on the caramelized Brussels while the gin's botanicals find a counterpoint in the rendered pork fat. That bitter-fat tension keeps each bite tasting like the first — no palate fatigue, just smoke and citrus peel trading off.",
      "Truffle Fries": "The earthy 2-acetylthiazole compounds in truffle lock onto the herbal, almost piney notes in the gin, creating a shared umami-botanical frequency. The Campari's bitterness then cuts the fry's starch and oil so the truffle flavor reads longer and cleaner on the finish."
    }
  },
  {
    name: 'Inhibited',
    category: 'cocktail',
    offMenu: true,
    profile: ['vodka','coffee','chocolate','rich','sweet','dessert','indulgent'],
    excellent: ['Chocolate Cake','Chocolate Brownie','Peanut Butter Brownie','Mocha Creme','Cheesecake','Creme Brulee','Carrot Cake','Beignets'],
    strong: ['Truffle Fries','Lobster Mac','Au Gratin Potatoes'],
    works: ['Creme Brulee','Brussels and Belly','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Seafood Tower','Laurent Perrier Le Cuvée Brut']
  ,
    pairingNotes: {
      "Chocolate Cake": "The coffee liqueur's roasted, slightly bitter tannins reinforce the cocoa solids in the cake while the vodka base keeps the sweetness from going flat. Each sip resets the palate with a bitter edge that makes the next forkful of chocolate taste darker and more intense.",
      "Chocolate Brownie": "The cocktail's coffee notes amplify the Maillard-browned crust of the brownie, doubling down on the roasted bittersweet character that separates a dense brownie from a piece of chocolate cake. The result is a back-of-the-throat richness that lingers without tipping into cloying.",
      "Peanut Butter Brownie": "The coffee's bitter roast cuts the fatty, waxy mouthcoat of peanut butter the same way espresso cleanses the palate after peanut satay. What surfaces is the actual nuttiness — toasted, savory-sweet — meeting the chocolate in the cocktail on even ground.",
      "Mocha Creme": "The cocktail and dessert share the same building blocks — espresso, cocoa, and cream — so the pairing functions as an amplifier rather than a contrast, each layer of roasted bitterness and dairy fat deepening the one before it. The vodka's clean finish acts as the only release valve, keeping the richness from collapsing into itself.",
      "Cheesecake": "The cocktail's coffee bitterness and the cheesecake's lactic tang from cream cheese create an affogato-like tension — the same reason espresso over vanilla gelato works. That acidity lifts the dense cream cheese fat off the palate, and the chocolate notes in the drink give the otherwise pale, creamy dessert a darker, more complex finish.",
      "Creme Brulee": "The roasted bitterness of the coffee liqueur cuts against the custard's pure sweetness, while the chocolate notes in the cocktail mirror the caramelized sugar crust. Together, they create a back-and-forth between bitter and sweet that keeps each bite from tipping into cloying.",
      "Carrot Cake": "The dark chocolate and espresso in the cocktail lock onto the warm spices — cinnamon, ginger, nutmeg — in the cake, amplifying them the way a mole sauce deepens with cocoa. The cream cheese frosting's tang then cuts the cocktail's richness, resetting the palate for the next sip.",
      "Beignets": "The cocktail's dense, roasted coffee weight creates a stark contrast against the beignet's airy, fried dough — think café au lait in bite form, minus the dilution. The powdered sugar clings to the palate just long enough for the chocolate finish to arrive and turn the whole thing into a churro-meets-mocha experience.",
      "Truffle Fries": "Coffee's chlorogenic acids and truffle's sulfur-based earthiness are both umami-adjacent, so they stack rather than compete, pushing the savory depth even further. The fat from the fries coats the palate and slows down the cocktail's bitter finish, making each sip taste longer and rounder.",
      "Lobster Mac": "The cocktail's bittersweet chocolate note acts like a dark roast coffee against cream — it cuts the richness of the béchamel and lobster butter without stripping the sweetness of the shellfish. What lands is a contrast between oceanic sweetness and dark roast dryness that makes both feel more defined.",
      "Au Gratin Potatoes": "The Maillard-browned cheese crust on the potatoes shares the same roasted, slightly bitter flavor compounds as the espresso in the cocktail, creating a savory echo of each other. The cocktail's chocolate body then coats alongside the gratin's cream, amplifying the dairy richness without adding sweetness.",
      "Brussels and Belly": "The coffee bitterness in the cocktail latches onto the char and caramelization on the Brussels sprouts, doubling down on the roasted vegetal notes. The pork belly's rendered fat softens the cocktail's edge, and the belly's smokiness draws out a faint smokiness in the dark chocolate finish that you wouldn't notice otherwise.",
      "Lardons": "The coffee-forward bitterness and dark chocolate in the Inhibited cut through the rendered pork fat in the lardons the same way espresso cuts through cream. What you get is the smoky, salty richness of the pork hitting a clean finish instead of lingering on the palate."
    }
  },
  {
    name: 'Lemon Lavender Gin Martini',
    category: 'cocktail',
    offMenu: true,
    profile: ['gin','floral','citrus','light','delicate'],
    excellent: ['Burrata','Crab Cake','Seared Scallops','Shrimp Cocktail','Escargot'],
    strong: ['House Wedge','Prime Tartare','Seafood Tower','Shrimp Bisque'],
    works: ['Filet Mignon','Grilled Caesar'],
    avoid: ['The Tomahawk','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo']
  ,
    pairingNotes: {
      "Burrata": "The lactic creaminess of fresh burrata dampens the gin's botanicals just enough to let the lavender's floral top notes come forward. The result is a soft, almost dessert-like moment where neither the cocktail nor the cheese feels as rich as it would alone.",
      "Crab Cake": "The lemon acidity in the martini mirrors the brightness you get from a good remoulade, while the gin's juniper cuts through the fried crust without overpowering the sweet lump crab underneath. Together, the cocktail does the work of a squeeze of citrus, keeping each bite tasting clean and fresh.",
      "Seared Scallops": "The Maillard-browned crust on a seared scallop carries a natural sweetness that the lavender in the martini echoes at a higher register. The lemon acidity then lifts the brine of the scallop, making the whole bite taste brighter and more oceanic than the scallop delivers on its own.",
      "Shrimp Cocktail": "The chilled shrimp's salinity and iodine-forward brine create a contrast against the floral lavender and citrus, the same way a mignonette works against raw oysters. That tension makes the cocktail's lemon note taste sharper and the shrimp taste cleaner and sweeter on the finish.",
      "Escargot": "The herbal botanicals in the gin speak directly to the parsley and garlic in the escargot butter, amplifying the herbaceous notes rather than fighting the fat. The lemon acidity then breaks through the richness of the compound butter, keeping the palate from going heavy between bites.",
      "House Wedge": "The cold, high-moisture iceberg and the creamy blue cheese dressing share a lactic density that the martini's citrus and juniper slice right through. What you taste is a brighter, more aromatic version of the wedge, with the lavender pulling out the floral notes that blue cheese carries when it's well-aged.",
      "Prime Tartare": "The raw beef's iron-forward umami is a direct foil to the martini's delicate floral profile, and that contrast is exactly what makes it work — the lavender reads as fragrant and clean against the tartare's raw intensity. The lemon acidity tightens the fat in the hand-cut beef the way a squeeze of citrus does in a classic preparation, keeping each bite from reading as heavy.",
      "Seafood Tower": "The gin's juniper cuts through the iodine-salt of raw oysters while the lemon acid mirrors the brightness of fresh citrus typically served alongside chilled shellfish. Together, they create a clean, palate-lifting effect that makes each piece of seafood taste like it just came out of the water.",
      "Shrimp Bisque": "The lavender's linalool compounds soften the bisque's cream weight, and the lemon zest oils in the gin lift the sweetness of the shrimp without stripping it. The result is a richer-tasting sip of bisque with a floral finish that lingers after the spoon.",
      "Filet Mignon": "The citrus acidity and botanical lightness of the gin cut through the filet's butter-basted surface fat, keeping each bite from feeling heavy. Guests get the full tenderness of the beef on the front palate, then the martini resets everything clean for the next bite.",
      "Grilled Caesar": "The charred romaine's smokiness creates friction against the gin's floral register, and that tension is resolved by the shared citrus note between the lemon in the martini and the lemon in the Caesar dressing. It's a contrast pairing — the delicacy of the cocktail makes the boldness of the anchovy-Parmesan come forward even harder."
    }
  },
  {
    name: 'New York Sour',
    category: 'cocktail',
    offMenu: true,
    profile: ['whiskey','citrus','sour','wine-float','medium','balanced'],
    excellent: ['Filet Mignon','Kansas City','Prime Tartare','House Wedge','Crab Cake'],
    strong: ['Porterhouse','Shrimp Bisque','Grilled Caesar'],
    works: ['Cowboy Ribeye','Brussels and Belly','Truffle Fries'],
    avoid: ['The Tomahawk','Laurent Perrier Le Cuvée Brut','Seared Scallops','Burrata']
  ,
    pairingNotes: {
      "Filet Mignon": "The whiskey's vanilla and toasted oak echo the Maillard crust on the filet, while the red wine float brings tannin structure that grips the lean muscle and draws out its umami depth. The lemon sour layer then lifts the finish, so the richness of the beef never sits flat on the palate.",
      "Kansas City": "The rye spice in the whiskey stands up to the Kansas City's bolder, firmer grain-fed beef, and the wine float acts like a compressed sauce — tannins binding to the protein and intensifying the beefy core flavor. The citrus sour component keeps the whole combination from becoming too heavy.",
      "Prime Tartare": "Raw beef's glutamates amplify the whiskey's oak and dark fruit notes from the wine float, creating a savory-rich loop between the two that tastes more like an aged preparation than a raw one. The lemon sour element cuts through the yolk and fat in the tartare, keeping the finish bright and the next bite as vivid as the first.",
      "House Wedge": "The wine float's acidity and the sour's lemon work in parallel with the blue cheese dressing — both lean on tartness and funk to create a call-and-response between glass and plate. The whiskey's caramel base softens the blue cheese's bite just enough that the iceberg's crunch and cold freshness reads even crisper by contrast.",
      "Crab Cake": "The lemon and egg-white foam lift the sweetness of the crab the same way a squeeze of citrus would, while the red wine float brings just enough tannin to cut through the fried crust. What you get is a cleaner bite — the crab reads sweeter and the cocktail reads rounder.",
      "Porterhouse": "The malic acid in the citrus and the tannin from the wine float act like a built-in sauce, cutting the rendered fat off the New York side while the whiskey's caramel mirrors the char on the tenderloin. Every sip resets the palate so the next bite of beef lands with full impact.",
      "Shrimp Bisque": "The wine float carries the same dried-fruit depth you'd want from a bisque-friendly red, and the whiskey's vanilla backbone threads into the cream without competing with the shrimp's natural sweetness. The citrus sour cuts the richness at the finish so the bowl never feels heavy.",
      "Grilled Caesar": "The lemon acidity in the cocktail echoes the anchovy-and-Worcestershire punch already living in the dressing, and the whiskey's smoke note speaks directly to the char on the romaine. The result is a feedback loop of umami and brightness that makes both the drink and the salad taste more intentional.",
      "Cowboy Ribeye": "The tartness of the egg-white sour and the tannin in the wine float do the work of a red wine reduction, slicing through the intramuscular fat in the ribeye so it doesn't coat the palate. The whiskey's oak holds its own against the bold beefy crust, but this is a pairing where the cocktail earns its keep rather than stealing the show.",
      "Brussels and Belly": "The whiskey's caramel and the wine float's dark fruit meet the pork belly's rendered fat and the caramelized sugars on the Brussels, creating a through-line of sweet-bitter that works in both directions. The citrus sour then cuts the pork fat cleanly, keeping the bitterness of the sprouts from turning sharp.",
      "Truffle Fries": "The earthy, sulfuric compounds in black truffle are fat-soluble, so the whiskey's alcohol lifts them off the palate in a way water-based drinks can't — the truffle actually smells stronger mid-sip. The lemon acidity then cuts the potato starch and oil so the finish stays clean rather than starchy."
    }
  },
  {
    name: 'Not a Paper Plane',
    category: 'cocktail',
    offMenu: true,
    profile: ['whiskey','amaro','citrus','herbal','balanced','medium'],
    excellent: ['Filet Mignon','Kansas City','Prime Tartare','Bone Marrow','Grilled Caesar'],
    strong: ['Porterhouse','Cowboy Ribeye','Mushrooms','Creamed Spinach'],
    works: ['House Wedge','Brussels and Belly','Truffle Fries'],
    avoid: ['Laurent Perrier Le Cuvée Brut','Seared Scallops','Crab Cake','Burrata']
  ,
    pairingNotes: {
      "Filet Mignon": "The Aperol and amaro in the cocktail bring a bitter orange and gentian note that works against the filet's mild myoglobin-rich center the way a compound butter would — adding complexity the lean cut can't generate on its own. What lands at the table is a filet that tastes richer than its fat content suggests, with the herbal finish clearing the way for the next bite.",
      "Kansas City": "The amaro's bitter botanicals cut through the lean muscle fiber's iron-forward beefiness while whiskey's grain sweetness draws out the Maillard crust. The result is a back-and-forth where each sip resets the palate, making every bite of that firm, dense steak taste like the first.",
      "Prime Tartare": "The citrus in the cocktail mirrors the brightness of the acid already working in the tartare preparation, while the amaro's herbal bitterness plays against the raw beef's glutamate-rich umami. Together they create a savory-bright loop that keeps building rather than flattening.",
      "Bone Marrow": "The cocktail's citrus acidity slices through the fat-soluble richness of the marrow's oleic lipids, and the amaro's bitter finish prevents the unctuous fat from coating and lingering. What you get is richness without heaviness — the marrow stays lush but the whiskey herbs keep it alive.",
      "Grilled Caesar": "The char on the romaine produces the same pyrazine compounds found in the whiskey's toasted grain notes, so the smoke speaks directly to the smoke. The citrus in the cocktail then runs straight into the anchovy and Parmesan's salt-acid backbone, sharpening everything rather than fighting it.",
      "Porterhouse": "The porterhouse gives you two steaks on one bone — the fatty strip side finds balance in the amaro's drying bitterness, while the leaner tenderloin gets lifted by the citrus brightness. The whiskey ties both sections together through a shared roasted, caramel note that echoes the sear.",
      "Cowboy Ribeye": "The ribeye's intramuscular fat carries fat-soluble flavor compounds that need something bright and bitter to keep them from going heavy — the cocktail's citrus-amaro axis does exactly that. What the guest tastes is the marbling's richness fully expressed, but framed so it feels clean rather than overwhelming.",
      "Mushrooms": "The amaro's bitter botanical profile resonates directly with the mushrooms' earthy terpenoids and umami from glutamic acid, essentially doubling the savory depth rather than contrasting it. A sip of the cocktail after a bite makes the mushrooms taste more intensely like themselves.",
      "Creamed Spinach": "The dairy fat in the cream sauce dulls the palate fast, but the cocktail's citrus acidity dissolves that milk-fat coating on the tongue and the amaro's bitterness keeps the savory-sweet richness from turning cloying. Each sip restores contrast, so the cream tastes indulgent again on the very next bite.",
      "House Wedge": "The cocktail's lemon and amaro bitterness cut through the blue cheese fat the same way acid cuts dairy, while the whiskey backbone holds up against the iceberg's cold crunch. Together they create a push-pull of creamy and sharp that keeps each bite tasting like the first.",
      "Brussels and Belly": "The amaro's gentian and herbal bitterness mirrors the caramelized char on the Brussels sprouts, and the whiskey's sweetness locks onto the rendered pork belly fat. What you get is a loop — each sip resets the palate just enough to make the next bite of smoky pork hit harder.",
      "Truffle Fries": "The cocktail's citrus oils lift the heavy earthiness of truffle the way a squeeze of lemon lifts mushroom risotto, preventing the umami from sitting flat on the palate. The whiskey's vanillin then rounds the truffle's sulfurous edge, leaving the guest with pure forest-floor richness without any bitterness."
    }
  },

  // ── WINES — SPARKLING ─────────────────────────────────────────────────────────

  {
    name: 'G.D. Vajra Moscato d\'Asti',
    category: 'wine-sparkling',
    profile: ['sparkling','sweet','low-alcohol','peach','floral','delicate','dessert'],
    price: '$12 / $48',
    excellent: ['Creme Brulee','Cheesecake','Beignets','Carrot Cake','Burrata'],
    strong: ['Peanut Butter Brownie','Chocolate Brownie','Shrimp Cocktail','Crab Cake'],
    works: ['House Wedge','Seared Scallops','Prime Tartare'],
    avoid: ['Cowboy Ribeye','The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned','Scavino Barolo']
  ,
    pairingNotes: {
      "Creme Brulee": "The Moscato's own stone-fruit sweetness and delicate effervescence match the vanilla bean in the custard without competing — they're essentially speaking the same flavor language at different volumes. The bubbles crack through the caramelized sugar crust on the finish, giving the palate a clean reset between each spoonful.",
      "Cheesecake": "The wine's natural acidity and peach brightness cut directly into the cream cheese tang, creating a citrus-dairy contrast that keeps the richness from going heavy. The low alcohol means neither the wine nor the dense filling overwhelms the other — the guest tastes both clearly all the way through.",
      "Beignets": "The carbonation in the Moscato scours the fried dough coating off the palate the same way sparkling water cleans oil from a glass, keeping each bite tasting light. The peach and floral esters then mirror the powdered sugar's sweetness without amplifying it to excess.",
      "Carrot Cake": "The Moscato's stone-fruit and honey notes echo the cake's brown sugar and warm spice, while the effervescence lifts through the dense cream cheese frosting so it reads as airy rather than thick. That interplay makes the spice linger longer on the finish than it would with a still wine.",
      "Burrata": "The wine's gentle sweetness and low tannin create almost no friction against the burrata's milky fat, letting the cream's delicate lactic flavor stay forward rather than getting pushed aside. The peach aromatics add a layer of fruity freshness that makes the dish read less like a starter and more like a complete, rounded bite.",
      "Chocolate Brownie": "The Moscato's low alcohol and effervescence scrub the palate between bites of dense chocolate, while its natural sweetness mirrors rather than fights the brownie's sugar without adding weight. What the guest gets is the chocolate tasting more intense and cleaner on the finish than it would with water or a heavier dessert wine.",
      "Shrimp Cocktail": "The wine's fine bubbles and bright acidity cut through the iodine salinity of chilled shrimp the same way a squeeze of lemon would, while the residual peach sweetness softens any sharp brininess. Each sip resets the palate so the shrimp's clean, oceanic sweetness reads fresher with every bite.",
      "Crab Cake": "The natural sweetness of Dungeness or blue crab has an almost honeyed quality that the Moscato's peach and apricot tones lock onto directly, while the wine's carbonation lifts the fried crust off the palate so it doesn't accumulate. The result is that the crab's delicate sweetness dominates rather than the breading.",
      "House Wedge": "The Moscato's gentle effervescence and fruit sweetness create a soft contrast against the sharp blue cheese and salty bacon in the wedge, rounding out what can otherwise be an aggressive combination of salt, fat, and acid. The guest experiences the creamy iceberg as more refreshing and the dressing as less heavy than it would read on its own.",
      "Seared Scallops": "The Maillard crust on a scallop produces caramelized, slightly sweet compounds that echo the Moscato's stone fruit character, while the wine's acidity keeps the natural oceanic brine from turning cloying. Together they read as a single continuous sweetness — one savory, one fruity — with a clean, bright finish.",
      "Prime Tartare": "This is a contrast pairing — the raw beef's iron-rich umami and sharp shallot are deliberately offset by the wine's soft sweetness and bubbles, which act as a palate cleanser between each bite rather than a flavor echo. The tartare's bold, mineral edge becomes more pronounced and defined because the Moscato keeps the fat from coating the tongue."
    }
  },
  {
    name: 'Il Colle Prosecco Superiore',
    category: 'wine-sparkling',
    profile: ['sparkling','light','crisp','apple','pear','approachable'],
    price: '$13 / $52',
    excellent: ['Burrata','Crab Cake','Shrimp Cocktail','Beignets','Cheesecake'],
    strong: ['Seared Scallops','House Wedge','Prime Tartare','Seafood Tower','Escargot'],
    works: ['Filet Mignon','Grilled Caesar'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Opus One','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Burrata": "The Prosecco's green apple acidity and fine perlage cut through the lactic fat in the burrata's cream center, preventing the richness from flattening the palate, while the wine's light body never overpowers the cheese's mild, milky delicacy. What the guest experiences is the burrata tasting cleaner and more fresh on each bite, the cream almost lighter than it is.",
      "Crab Cake": "The Prosecco's fine carbonation and green apple acidity cut through the pan-seared crust while mirroring the natural sweetness of the lump crab. Each sip scrubs the palate clean, so every bite of the cake reads as bright and fresh as the first.",
      "Shrimp Cocktail": "The wine's crisp acidity and light effervescence amplify the oceanic brine of chilled shrimp the same way a squeeze of lemon would. The result is a clean, high-contrast bite where the shrimp's sweetness snaps into focus against the bubbles.",
      "Beignets": "The Prosecco's carbonation slices through the fried dough fat, and its restrained sweetness keeps the powdered sugar from turning cloying. Guests get a lighter, airier finish on each beignet — the combination reads like a richer version of the dessert without the weight.",
      "Cheesecake": "The wine's malic acidity echoes the tang of cream cheese while the bubbles physically lift the density of the custard on the palate. What could be a heavy finish becomes bright and mousse-like, with the apple note in the Prosecco threading through the vanilla in the cake.",
      "Seared Scallops": "The Prosecco's effervescence contrasts the caramelized Maillard crust on the scallop, and the wine's green apple note bridges the scallop's inherent sweetness. The pairing keeps the delicate marine flavor of the scallop front and center rather than letting the sear dominate.",
      "House Wedge": "The wine's carbonation cuts the fat in the blue cheese dressing, and its crisp acidity echoes the snap of cold iceberg in a way that resets the palate between bites. The result is a wedge that tastes colder and cleaner than it would on its own.",
      "Prime Tartare": "The Prosecco's acidity and CO2 act as a palate foil to the tartare's rich fat and umami from the yolk and capers, creating tension that keeps the raw beef from feeling heavy. Guests experience the boldness of the tartare more clearly because the wine keeps drawing a clean line after each bite.",
      "Seafood Tower": "The wine's persistent effervescence and saline mineral finish speak directly to the iodine-forward brine of oysters and the sweetness of cold lobster and crab simultaneously. Moving through the tower with this Prosecco, each shellfish reads as a distinct flavor rather than blending into a single seafood note.",
      "Escargot": "The Prosecco's high acidity and fine effervescence cut through the compound butter and act as a palate reset between bites, while the green apple note finds the parsley and tarragon in the herb crust. What lands is a back-and-forth — the richness of the snail and garlic butter builds, then the bubbles scrub it clean, so every bite tastes like the first.",
      "Filet Mignon": "The Prosecco's delicate apple fruit and low tannin won't fight the filet's subtle iron and beef fat the way a heavy red might, and the carbonation lifts the butteriness of the meat without masking it. The guest gets a surprisingly complete pairing — the wine stays nimble enough that the filet's tenderness and mild flavor remain front and center.",
      "Grilled Caesar": "The Prosecco's crisp acidity mirrors the lemon and anchovy tang already built into the Caesar dressing, and the bubbles create contrast against the char and smoke on the romaine. The result is that the dressing tastes brighter and the smoke on the lettuce reads deeper — the wine sharpens both ends of the flavor spectrum."
    }
  },
  {
    name: 'Raventós Cava de NIT Rosé Brut',
    category: 'wine-sparkling',
    profile: ['sparkling','rosé','crisp','red-fruit','dry','versatile'],
    price: '$18 / $72',
    excellent: ['Prime Tartare','Crab Cake','Seafood Tower','Shrimp Cocktail','Burrata','Beignets'],
    strong: ['Seared Scallops','House Wedge','Filet Mignon','Grilled Caesar','Escargot'],
    works: ['Faroe Island Salmon','Roast Half Chicken'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Opus One']
  ,
    pairingNotes: {
      "Prime Tartare": "The Cava's red-fruit acidity — think dried strawberry and cherry skin — cuts through the egg yolk fat and the Worcestershire umami that anchor the tartare, while the autolytic yeast character from the extended tirage echoes the aged, mineral quality of the raw prime beef. Every bite of tartare finishes cleaner, and the wine picks up more body and depth than it shows on its own.",
      "Crab Cake": "The Cava's fine persistent bead scrubs the pan-seared crust off the palate, and the red-fruit brightness amplifies the natural sweetness of the Dungeness without introducing competing tannin or oak. The guest experiences the crab's delicate sweetness first, the crispy crust second, and the wine resets the palate so the balance never tips toward grease or filler.",
      "Seafood Tower": "The Cava's briny minerality — driven by the limestone soils of the Conca del Riu Anoia — mirrors the iodine and sea salt in the oysters and chilled shellfish, while the red-fruit note bridges across to the sweeter shrimp and crab. Working through the tower with this wine, each station on the ice reads more distinct because the Cava's acidity keeps resetting the palate between species.",
      "Shrimp Cocktail": "The Cava's acidity and effervescence mirror the horseradish heat and citrus in the cocktail sauce, and the rosé's dried red-fruit note finds the natural sweetness of the chilled shrimp without overriding it. What the guest experiences is a lengthening of the shrimp's sweetness on the finish — the wine essentially extends the best part of each bite.",
      "Burrata": "The Cava's acidity cuts the lactic fat of the burrata's cream filling — the same way a squeeze of lemon would — while the fine bead creates textural contrast against the yielding, silky curd. The guest gets a pairing that keeps the burrata tasting fresh and light rather than heavy, with the wine's red-fruit note adding just enough brightness to make the mild cheese feel more complex.",
      "Beignets": "The cava's sharp carbonic acidity and dry strawberry finish cut straight through the powdered sugar and hot fry oil, creating a contrast the palate reads as brightness rather than sweetness. Each sip resets the tongue so the next bite of beignet tastes like the first.",
      "Seared Scallops": "The cava's red-fruit acidity mirrors the natural glycine sweetness in the scallop's flesh, while the persistent bead lifts the caramelized crust off the palate without masking it. The result is a cleaner expression of that sear — the Maillard char reads sharper and longer.",
      "House Wedge": "The wine's crisp carbonic structure acts like a squeegee against the blue cheese fat and buttermilk creaminess coating the lettuce, and the red-fruit note picks up the sweetness in ripe tomato. The iceberg stays cold and snappy on the palate rather than getting buried under the dressing.",
      "Filet Mignon": "The cava's lean acidity and fine bead work against the filet's intramuscular butter, keeping the finish from going heavy on a cut that's already mild and low in marbling fat. The red-fruit character draws out the iron-rich, almost floral quality in the center of a properly mid-rare filet.",
      "Grilled Caesar": "The carbonation and bracing acidity in the cava push back against the anchovy umami and charred romaine smoke, preventing the dressing's emulsified egg and Parmesan fat from coating the palate. That scrubbing action makes the char on the lettuce pop rather than getting swallowed by the richness.",
      "Escargot": "The wine's acidity slices through the compound butter's fat content and the garlic's pungency, while the red-fruit brightness provides a counterweight to the escargot's deep, earthy funk. Together, the herbaceous finish on both the wine and the dish — parsley in the butter, the cava's floral top note — lock into a single long aromatic thread.",
      "Faroe Island Salmon": "The salmon's high omega-3 fat content can push the palate toward oiliness, and the cava's carbonation and tartaric acidity mechanically and chemically interrupt that coating effect. The pairing works, though the wine's delicate red-fruit is somewhat subdued by the richness of the fish rather than amplified by it.",
      "Roast Half Chicken": "The roasted skin's rendered fat and Maillard-browned drippings are substantial enough that the cava's acidity is doing cleanup work rather than creating dialogue — it scrubs the palate but doesn't find much to converse with in the bird's savory depth. It's a functional pairing that keeps the meal feeling lighter, but the wine's red-fruit character doesn't get much opportunity to express itself against the roasted poultry profile."
    }
  },
  {
    name: 'Laurent Perrier Le Cuvée Brut',
    category: 'wine-sparkling',
    profile: ['sparkling','crisp','citrus','toasty','celebratory','versatile'],
    price: '$25 / $100',
    excellent: ['Prime Tartare','Crab Cake','Shrimp Bisque','Seafood Tower','Shrimp Cocktail','Seared Scallops','Burrata','Escargot'],
    strong: ['Filet Mignon','House Wedge','Grilled Caesar','Bone-In Filet','Beignets'],
    works: ['Faroe Island Salmon','Roast Half Chicken'],
    avoid: ['The Tomahawk','Bowdie\'s Old Fashioned','Bone Marrow']
  ,
    pairingNotes: {
      "Prime Tartare": "The wine's bright citric acidity cuts through the fat in the hand-cut beef while its fine carbonation lifts the yolk and caper brine off the palate. Each sip resets the richness so the next bite of raw tenderloin reads as clean and bold as the first.",
      "Crab Cake": "The toasty brioche notes in the Champagne mirror the golden sear on the cake while the high-acid citrus thread draws out the natural sweetness of the Chesapeake crab. The bubbles shear through the pan-fried crust so the delicate lump meat comes forward instead of the oil.",
      "Shrimp Bisque": "The wine's persistent mousse physically breaks the surface tension of the cream reduction, preventing the bisque's richness from coating and flattening on the palate. That contrast lets the sweet shrimp and cognac base read separately rather than merging into one heavy note.",
      "Seafood Tower": "The wine's saline mineral spine — driven by its chalk-soil Chardonnay base — matches the iodine in the oysters and the oceanic brine of the cold-poached prawns without overpowering either. Guests move across the tower and the Champagne acts as a neutral reset, keeping each species tasting distinct.",
      "Shrimp Cocktail": "The lemon-zest character in the wine mirrors the citric punch of the cocktail sauce's horseradish and tomato while the cold temperature of both keeps the shrimp's snappy texture front and center. The effervescence scrubs the wasabi heat off the palate so the next shrimp arrives clean.",
      "Seared Scallops": "The toasty autolytic quality from the wine's extended lees aging speaks directly to the Maillard crust on the scallop's flat face, creating a shared caramelized note between the two. When the cool, sweet interior of the scallop follows that sear, the wine's citrus acidity extends that contrast and keeps the finish light rather than buttery.",
      "Burrata": "The wine's crisp green-apple and lemon-curd acidity cuts through the lactic fat of the fresh cream filling, which left alone would sit heavy on the mid-palate. The bubbles aerate each bite so the milky sweetness of the burrata reads as clean and fresh rather than rich.",
      "Escargot": "The wine's citrus brightness and carbonation cut through the garlic-herb butter — specifically the fat-soluble compounds that linger — preventing the finish from turning heavy or one-dimensional. What guests get is the herbaceous parsley and garlic up front, then a clean, toasty fadeout from the Champagne rather than a coating of butter.",
      "Filet Mignon": "The Champagne's fine bubbles and bright acidity cut through the filet's natural fat, while its toasty brioche notes mirror the Maillard crust on the sear. Guests get a mouthful that feels simultaneously cleaner and richer — the beef's buttery tenderness opens up in a way it simply doesn't without that effervescence.",
      "House Wedge": "The Champagne's citrus acidity reinforces the tang of the blue cheese dressing while its carbonation scrubs the fat from the palate between bites. The result is that the iceberg stays cold and snappy from the first bite to the last, rather than turning heavy.",
      "Grilled Caesar": "The char on the romaine produces bitter, smoky compounds that the Champagne's crisp citrus cuts through cleanly, and the toasty autolytic notes in the wine echo the browned croutons. What the guest experiences is the Caesar's boldness sharpening rather than flattening — the anchovy-Parmesan umami reads louder, not muddier.",
      "Bone-In Filet": "The bone imparts a deeper, mineral-rich flavor to the tenderloin that the Champagne's chalky minerality mirrors directly. That effervescence then lifts the marrow-adjacent richness off the palate, keeping each bite as clean as the first.",
      "Beignets": "The Champagne's natural acidity and CO2 cut through the fry oil coating the beignets, while its toasty, yeasty character speaks directly to the fried dough itself. The powdered sugar reads less cloying and the bubbles create a textural contrast — light against light — that keeps the finish from going flat.",
      "Faroe Island Salmon": "The Champagne's citrus and crisp acidity do the same work as a squeeze of lemon on rich salmon, brightening the fat without masking the fish's natural oceanic depth. The bubbles dissolve the omega-rich coating on the palate so the delicate flesh flavor reasserts itself on every sip.",
      "Roast Half Chicken": "The Champagne's toasty, bready notes align with the caramelized skin on the chicken, while its acidity balances the savory roasting juices that would otherwise weigh down a lighter sparkling wine. The chicken's rendered fat becomes a vehicle for the Champagne's citrus rather than a barrier to it."
    }
  },
  {
    name: 'Laurent Perrier Brut Rosé',
    category: 'wine-sparkling',
    profile: ['sparkling','rosé','premium','strawberry','elegant','celebratory'],
    price: '$120',
    excellent: ['Prime Tartare','Crab Cake','Seafood Tower','Seared Scallops','Burrata','Shrimp Cocktail'],
    strong: ['Filet Mignon','House Wedge','Escargot','Grilled Caesar','Beignets'],
    works: ['Faroe Island Salmon','Roast Half Chicken'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo']
  ,
    pairingNotes: {
      "Prime Tartare": "The rosé's wild strawberry and red-fruit acidity act as a counterpoint to the tartare's iron-rich, umami intensity — the same contrast you'd find in a classic beef-with-fruit preparation. That brightness cuts through the egg yolk and olive oil binding, so the raw beef's mineral depth hits cleanly on the finish rather than coating the palate.",
      "Crab Cake": "The Champagne's fine bubbles and strawberry-driven acidity cut through the pan-fried crust while mirroring the sweet lump crab underneath. The result is a back-and-forth between crispy and effervescent that keeps each bite tasting as clean as the first.",
      "Seafood Tower": "The brut's high acidity and saline minerality act as a direct echo of the ocean brine running through the oysters, lobster, and shrimp. Everything tastes colder and more alive — like the whole tower just came out of the water.",
      "Seared Scallops": "The rosé's strawberry and red fruit notes mirror the caramelized Maillard crust on the scallop, while the persistent mousse lifts the natural sweetness of the meat without drowning it. Guests get that sear twice — once off the plate, once from the wine.",
      "Burrata": "The wine's bright malic acidity slices through the lactic fat in the burrata the same way a squeeze of lemon would, and the fine bubbles create textural contrast against the cream's density. What lands on the palate is clean, milky, and just barely tart — neither one dominates.",
      "Shrimp Cocktail": "The chilled shrimp's iodine brine finds a direct match in the Champagne's chalky minerality, and the carbonation amplifies the snap of the shrimp's texture. The cocktail sauce's horseradish heat flares briefly, then the wine's acidity washes it clean.",
      "Filet Mignon": "The rosé's red fruit and acidity work as a counterweight to the filet's iron-rich, butter-basted lean meat — the contrast is cut versus yield. Guests notice the beef's tenderness more because the wine is giving their palate something bright to reset against.",
      "House Wedge": "The wine's strawberry fruit and sharp acidity are a natural foil to the blue cheese dressing's pungent lactic fat, essentially doing the job the lemon wedge would. The iceberg's water content and the bubbles land together as a crisp, palate-clearing moment between bites.",
      "Escargot": "The escargot's garlic-herb butter is rich enough to coat the palate, and the Champagne's carbonation and acidity cut through that fat layer and reset the tongue for the next bite. The rosé's fruit sneaks in after the garlic fades and softens the finish.",
      "Grilled Caesar": "The strawberry-driven acidity in the rosé cuts through the anchovy-laden dressing while the bubbles scrub the palate clean of the smoky char from the romaine. Together, they reset the richness with each sip, keeping the Caesar from feeling heavy across the course.",
      "Beignets": "The brut's residual sugar is low enough to stay drier than the powdered sugar, so the strawberry fruit in the wine reads as brighter and more precise against the fried dough's fat. The carbonation lifts the oil from the palate and lets the delicate yeast notes in both the beignet and the wine find each other.",
      "Faroe Island Salmon": "The rosé's red fruit acidity mirrors the way a squeeze of citrus brightens fatty fish — it works on the same principle, cutting the salmon's high omega-3 lipid content without competing with its delicate flesh. The result is a cleaner finish than either delivers alone, with the wine drawing out a faint mineral salinity in the fish.",
      "Roast Half Chicken": "The strawberry and light tannin structure in the rosé act as a counterweight to the rendered chicken fat and caramelized roasted skin, the way a pan sauce with acid would. The bubbles keep the richness of the dark meat from settling on the palate, making the next bite of chicken taste as vivid as the first."
    }
  },
  {
    name: 'Veuve Clicquot Brut',
    category: 'wine-sparkling',
    profile: ['sparkling','premium','toasty','citrus','rich','celebratory'],
    price: '$120',
    excellent: ['Seafood Tower','Prime Tartare','Crab Cake','Seared Scallops','Shrimp Cocktail','Burrata'],
    strong: ['Filet Mignon','Escargot','House Wedge','Grilled Caesar','Beignets'],
    works: ['Faroe Island Salmon','Roast Half Chicken','Lobster Mac'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo']
  ,
    pairingNotes: {
      "Seafood Tower": "The Clicquot's toasty brioche character and bright lemon-zest acidity speak directly to the brininess of cold shellfish — the same pairing logic as mignonette, where acid and a hint of yeast depth open up the minerality of oysters and shrimp. Every sip amplifies the oceanic salinity rather than washing it away.",
      "Prime Tartare": "The Clicquot's fine-bubble carbonation and citrus acidity act as the acid element that a tartare's capers and shallots are already reaching for, reinforcing the brightness without overwhelming the raw beef's iron-rich umami. The toasty autolytic notes in the wine match the nuttiness of the egg yolk, pulling the dish into a longer, more cohesive finish.",
      "Crab Cake": "The citrus and toasted-bread notes in the Clicquot mirror the technique of the crab cake itself — a sear that builds a golden crust over sweet lump crab — so the wine is essentially echoing the dish's own contrast between crisp exterior and delicate interior. The effervescence cuts through the binding and breading so the crab's natural sweetness is the last thing on the palate.",
      "Seared Scallops": "The Maillard-browned crust on a scallop produces the same nutty, caramelized aldehydes present in the Clicquot's toasty, aged-on-lees character, making them flavor mirrors of each other. That shared browning note doubles in intensity when they meet, then the wine's acidity slices through the scallop's natural glycine-driven sweetness to keep the pairing bright all the way through.",
      "Shrimp Cocktail": "The Champagne's high acidity and fine effervescence cut through the oceanic salinity of the shrimp while its citrus notes mirror the brightness in the cocktail sauce. What you get is a clean, almost crystalline finish where neither the wine nor the shrimp feels heavy — each bite resets the palate for the next.",
      "Burrata": "The toasty brioche character in the Veuve threads directly into the milky fat of the burrata, while the wine's carbonation lifts what would otherwise be a very rich, static texture. The result is a mouthful that feels simultaneously indulgent and weightless — the cream lingers, but the wine keeps pulling you back for another bite.",
      "Filet Mignon": "The Champagne's fine bubbles and citrus acidity work against the filet's lean, almost silky muscle fibers, providing the textural contrast the cut can't generate on its own. Together they create a back-and-forth where the wine's brightness sharpens the meat's subtle iron and butter notes without overwhelming them.",
      "Escargot": "The carbonic scrubbing action of the bubbles cuts the rendered garlic-herb butter coating the escargot, preventing the fat from coating the palate and muting the wine. What you experience is a rotating door of richness and freshness — the butter hits first, then the Champagne clears the lane so the next bite lands just as clean.",
      "House Wedge": "The Veuve's acidity aligns with the tang in the blue cheese dressing while its effervescence lifts the cold, dense iceberg before it can sit heavy on the palate. The guest experiences a salad that tastes crisper and more defined, with the wine acting almost like a squeeze of lemon the kitchen never added.",
      "Grilled Caesar": "The char on the romaine carries bitter, smoky aldehydes that the Champagne's dosage — its residual sugar — softens without erasing, while the bubbles disperse the anchovy-and-Parmesan umami so it reads as savory depth rather than salt. The pairing makes the Caesar taste more composed, like the smoke and the cream have finally been introduced to each other.",
      "Beignets": "The brut's low residual sugar creates a deliberate tension against the powdered sugar coating — sweet enough to feel celebratory, dry enough to keep the fried dough from tipping into dessert territory. Each sip strips the fat from the fry off the palate so the next beignet tastes as light as the first.",
      "Faroe Island Salmon": "The Champagne's toasty autolytic notes — that brioche quality that comes from extended lees aging — echo the way the salmon's fat renders and browns at the surface, finding common ground in Maillard-adjacent richness. The effervescence then cuts the fish's omega-3 oil before it accumulates, keeping the pairing clean through the last bite.",
      "Roast Half Chicken": "The Champagne's toasty brioche notes and bright acidity cut through the rendered chicken fat while the citrus lifts the savory roasted skin. The guest gets a clean finish after each bite, keeping the richness from sitting heavy on the palate.",
      "Lobster Mac": "The autolytic yeast character in the Veuve — that warm, bread-dough quality — mirrors the butter-poached lobster sweetness, while the carbonation slices through the béchamel weight. Each sip resets the palate so the next forkful of mac hits with full creaminess."
    }
  },
  {
    name: 'Paul Bara Grand Rosé Brut',
    category: 'wine-sparkling',
    profile: ['sparkling','rosé','premium','pinot-driven','structured','rich'],
    price: '$150',
    excellent: ['Seafood Tower','Prime Tartare','Crab Cake','Seared Scallops','Filet Mignon'],
    strong: ['Shrimp Cocktail','Burrata','Escargot','House Wedge','Bone-In Filet'],
    works: ['Faroe Island Salmon','Grilled Caesar','Lobster Mac'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo']
  ,
    pairingNotes: {
      "Seafood Tower": "The Pinot Noir base brings red fruit and a faint mineral salinity that echoes the brine in oysters and the sweetness of chilled shrimp without overpowering the delicate iodine notes. The guest gets a sustained oceanic freshness that makes the whole tower taste more alive.",
      "Prime Tartare": "The Champagne's red fruit acidity and fine bubbles act against the iron-rich umami of raw prime beef the way a squeeze of lemon would — brightening rather than masking. That contrast keeps the bold fat and egg yolk from coating the palate, so the beef's mineral depth stays front and center.",
      "Crab Cake": "The Pinot-driven strawberry and chalk minerality in the Paul Bara mirrors the natural sweetness of lump crab, while the effervescence lifts the fried crust off the palate between bites. The guest experiences the crab's sweetness amplified rather than buried under breading.",
      "Seared Scallops": "The rosé's red fruit brightness and high-acid spine play against the Maillard crust on the scallop the way a gastrique would — creating a sweet-tart tension that heightens the caramelized sear. Inside, the scallop's natural glycine sweetness comes forward clean and uninterrupted.",
      "Filet Mignon": "The Champagne's fine tannin structure from the Pinot Noir base has just enough grip to engage the filet's lean muscle without overwhelming its subtle beefiness, while the acidity amplifies the butter or compound on top. The result is a pairing where both the wine and the meat taste more substantial than either does alone.",
      "Shrimp Cocktail": "The cold brine and snap of chilled shrimp echo the chalk-driven minerality in this Bouzy Champagne, and the rosé's fine bubbles amplify the iodine freshness without competing with the horseradish heat in the cocktail sauce. The guest gets a bright, palate-cleansing loop between sip and bite that makes the shrimp taste sweeter each time.",
      "Burrata": "The Pinot Noir backbone in this Champagne brings a faint red-fruit acidity that cuts through the fat in the burrata without overpowering its milky sweetness. You get a clean, bright finish where the cheese's creaminess lingers and the bubbles lift it off the palate.",
      "Escargot": "The fine persistent mousse scrubs through the butter and garlic coating the snails, while the wine's red-fruit character finds the herbaceous parsley and echoes it. Each sip resets the palate so the next bite of escargot tastes as rich as the first.",
      "House Wedge": "The wine's bracing acidity mirrors the tang of the blue cheese dressing, and the carbonation cuts through the bacon fat and cold iceberg crunch. The result is a back-and-forth where the salad's richness keeps drawing out the Champagne's strawberry and brioche notes.",
      "Bone-In Filet": "The Pinot-driven structure gives just enough red-fruit tannin to acknowledge the beef's meatiness without fighting the filet's lean, buttery tenderness. That contrast pulls a subtle minerality out of the wine that makes the steak's natural sweetness pop on the finish.",
      "Faroe Island Salmon": "The salmon's high fat content—Faroe fish run noticeably richer than farmed Atlantic—needs the wine's acid and effervescence to keep the palate from going heavy. The rosé's strawberry and toast notes sit alongside the salmon's own buttery char without either dominating.",
      "Grilled Caesar": "The char on the romaine introduces a smoky bitterness that the wine's toasty autolytic character meets head-on, while the anchovy-driven umami in the dressing amplifies the Pinot's savory backbone. It's a louder pairing—bold against bold—but the carbonation keeps it from going flat.",
      "Lobster Mac": "The wine's acidity is doing the work here, slicing through the cream sauce and the lobster's natural sweetness to keep the dish from tasting heavy. The Pinot's red-fruit note creates a subtle contrast against the shellfish that reads almost like a squeeze of lemon—brightening the whole plate."
    }
  },
  {
    name: 'Robert Moncuit Les Grand Blancs',
    category: 'wine-sparkling',
    profile: ['sparkling','blanc-de-blancs','chardonnay-driven','mineral','crisp','elegant'],
    price: '$160',
    excellent: ['Seafood Tower','Seared Scallops','Crab Cake','Shrimp Cocktail','Escargot','Burrata'],
    strong: ['Prime Tartare','House Wedge','Filet Mignon','Grilled Caesar','Faroe Island Salmon'],
    works: ['Beignets','Roast Half Chicken','Lobster Mac'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Opus One']
  ,
    pairingNotes: {
      "Seafood Tower": "Pure Chardonnay from the Le Mesnil-sur-Oger grand cru carries a chalky minerality and saline finish that's essentially the same terroir language as oyster liquor and cold shrimp. Every element on the tower—brine, iodine, citrus mignonette—pulls a matching note out of the wine, making the pairing feel inevitable rather than constructed.",
      "Seared Scallops": "The Champagne's chalk-driven minerality and fine bead mirror the iodine sweetness and caramelized crust of a properly seared scallop. Together, the effervescence lifts the fat from the sear and resets the palate, making each bite taste like the first.",
      "Crab Cake": "The Champagne's tight acidity and green apple notes cut through the pan-fried crust while echoing the natural sweetness of Chesapeake crab. The carbonation scrubs the breadcrumb binder from the palate so the crab flavor reads clean and long.",
      "Shrimp Cocktail": "The wine's chalky minerality speaks directly to the oceanic brine of cold shrimp, while its lean citrus profile offers the same contrast as a squeeze of lemon without overwhelming the shellfish. On the palate, the bubbles amplify the snap of the chilled shrimp and keep the horseradish heat from building.",
      "Escargot": "The Champagne's high acidity acts as a foil to the herb butter, cutting the fat load from the garlic and parsley compound in a way that keeps the snail's earthy chew in focus. That contrast means each escargot tastes richer by comparison, while the wine finishes clean and ready for the next bite.",
      "Burrata": "The wine's chalk minerality and restrained Chardonnay fruit provide just enough structure to highlight the lactic creaminess of fresh burrata without competing with its milky interior. The fine bead adds a textural contrast against the soft pull of the cheese, making the whole thing feel lighter and more precise.",
      "Prime Tartare": "The Champagne's bright malic acidity and mineral backbone push back against the iron-rich umami of raw prime beef, creating a tension that sharpens both. The effervescence clears the fat from the egg yolk and the richness of the capers, so the clean meat flavor comes forward on the finish.",
      "House Wedge": "The wine's citrus acidity cuts through the blue cheese dressing the same way white wine vinegar does in a classic vinaigrette, amplifying the tang without adding more fat. The cold crunch of iceberg against the wine's tight bubble structure creates a textural interplay that makes the whole salad feel more refreshing than it would on its own.",
      "Filet Mignon": "The Champagne's lean Chardonnay fruit and chalk minerality contrast the filet's mild, butter-soft beef, where a bigger red would simply overpower it. That contrast lets the meat's subtle iron and the butter from the finish preparation come forward, making a quiet cut taste more expressive.",
      "Grilled Caesar": "The Champagne's high acidity and chalk-driven minerality cut through the anchovy-laced dressing and char on the romaine, while its fine bubbles lift the fat from the Parmesan and egg emulsion. The guest gets a clean, bright finish after each bite where the smoke and richness might otherwise linger.",
      "Faroe Island Salmon": "The chalk and citrus zest in this blanc de blancs mirror the fatty acids in the salmon's flesh, and the persistent effervescence physically scrubs the richness off the palate between bites. What could feel heavy becomes a back-and-forth between oceanic salinity in both the wine and the fish, with the bubbles keeping every bite feeling like the first.",
      "Beignets": "The wine's bone-dry minerality creates a sharp contrast against the powdered sugar and hot fried dough, functioning almost like a squeeze of lemon would on a pastry. The guest experiences a reset between each beignet — the sweetness never stacks, and the Champagne reads as crisper and more complex for the contrast.",
      "Roast Half Chicken": "The roasted skin's Maillard browning picks up the toasty, brioche-like autolytic notes in the Champagne, creating a shared caramelized register between the two. The wine's acidity then slices through the chicken's rendered fat, keeping the savory richness in check and elongating the finish.",
      "Lobster Mac": "The chardonnay base in this Champagne carries enough body to stand up to the béchamel and butter in the mac, while the carbonation prevents the dish's creaminess from coating the palate entirely. The lobster's natural sweetness pulls out a riper, stone-fruit quality in the wine that doesn't show as clearly on its own."
    }
  },
  {
    name: 'Pierre Gimonnet Special Club Brut',
    category: 'wine-sparkling',
    profile: ['sparkling','blanc-de-blancs','premium','mineral','chardonnay-driven','complex'],
    price: '$200',
    excellent: ['Seafood Tower','Seared Scallops','Crab Cake','Prime Tartare','Filet Mignon','Escargot'],
    strong: ['Shrimp Cocktail','Burrata','House Wedge','Faroe Island Salmon','Grilled Caesar'],
    works: ['Beignets','Lobster Mac','Roast Half Chicken'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Opus One']
  ,
    pairingNotes: {
      "Seafood Tower": "Gimonnet's unusually high acidity and saline, oyster-shell minerality are near-identical flavor compounds to what's already in the oysters, crab, and shrimp — the wine doesn't contrast so much as amplify the brine. The guest experiences each element of the tower tasting more vivid and alive, with the Champagne acting as a cold ocean rinse between every piece.",
      "Seared Scallops": "The sear on the scallop develops glutamates and caramelized sugars that lock onto the Champagne's yeast-derived umami from extended lees aging, creating a savory bridge that neither has alone. The scallop's natural sweetness then pulls the wine's citrus and green apple forward, making the finish brighter and longer than either delivers separately.",
      "Crab Cake": "The crab's delicate sweetness and the crispy pan-seared crust find their counterparts in Gimonnet's ripe citrus fruit and fine, persistent mousse — the bubbles lift the fried breadcrumb texture rather than fighting it. The guest gets a clean, sweet-saline finish where the richness from the crust dissolves and only the pure crab flavor and the wine's chalk remain.",
      "Prime Tartare": "The Champagne's high acidity and fine bubbles cut through the fat in the hand-cut beef while its chalk-driven minerality amplifies the savory depth of the egg yolk and capers. Together, the tartare's richness softens into something almost silky while the wine stays bright and alive.",
      "Filet Mignon": "The wine's green apple acidity and creamy mousse mirror the butter-basted tenderness of the filet without competing with its subtle beefy flavor. Each sip resets the palate so every bite of that center-cut tenderness reads as clean and fresh as the first.",
      "Escargot": "The Champagne's tight Chardonnay acidity slices through the garlic butter pooled in the shell, while its chalk minerality draws out the herbed parsley and keeps the richness from coating the palate. The result is a round, savory bite followed by a wine that tastes almost lemony in contrast.",
      "Shrimp Cocktail": "Blanc de blancs Champagne shares iodine and sea-spray mineral notes with cold-water shrimp, making the brine in both read as one continuous coastal flavor. The bubbles lift the firm texture of the shrimp so the bite feels lighter, and the horseradish heat in the cocktail sauce dissipates quickly against the wine's cool acidity.",
      "Burrata": "The wine's citrus zest and fine carbonation contrast against the dense, milky fat of fresh burrata, preventing the cheese from feeling heavy on the palate. What the guest tastes is a clean dairy sweetness followed by a thread of green apple and chalk that keeps the whole thing feeling effortless.",
      "House Wedge": "The wine's crisp acidity echoes the snap of cold iceberg while its persistent bubbles break through the blue cheese dressing's tangy fat. The pairing sharpens both — the dressing tastes more precise, the Champagne more textured — in a way that makes the wedge feel far more refined than its classic steakhouse bones suggest.",
      "Faroe Island Salmon": "The wine's citrus oil and chalk minerality speak directly to the omega-rich fat running through Faroe Island salmon, using acidity as a knife to separate richness from heaviness. On the palate, the fish reads as cleaner and more delicate, and the wine picks up a round, almost honeyed weight from the contact with fat.",
      "Grilled Caesar": "The char on the romaine carries bitter, smoky compounds that the wine's brisk acidity and CO2 scrub clean, while the anchovy-driven umami in the dressing finds a savory echo in the Champagne's autolytic, yeasty depth. Together they turn a bold, creamy Caesar into something surprisingly bright, with the smoke fading into the background and the umami doing the talking.",
      "Beignets": "The Gimonnet's high acidity and fine chalk-driven effervescence cut through the fry oil and lift the powdered sugar without letting it turn cloying. Each sip scrubs the palate clean, making the next bite of beignet taste as light as the first.",
      "Lobster Mac": "Blanc de blancs Chardonnay has a natural affinity for butter fat and shellfish — the wine's green apple and oyster shell notes thread directly through the lobster's sweetness and the cream sauce's richness. The persistent bubble acts as a textural counterweight, keeping what could be a heavy dish feeling nimble on the palate.",
      "Roast Half Chicken": "The wine's citrus zest and chalky minerality mirror the brightness of roasted chicken skin while its acidity balances the rendered fat pooling in the pan drippings. Together, the combination reads like squeezing lemon over the bird — the chicken tastes more like itself."
    }
  },
  {
    name: 'Pommery Cuvée Louise',
    category: 'wine-sparkling',
    profile: ['sparkling','prestige','complex','toasty','mineral','celebratory','blanc-de-blancs'],
    price: '$300',
    excellent: ['Seafood Tower','Seared Scallops','Filet Mignon','Crab Cake','Prime Tartare','Escargot'],
    strong: ['Shrimp Cocktail','Burrata','House Wedge','Faroe Island Salmon','Bone-In Filet'],
    works: ['Lobster Mac','Beignets','Grilled Caesar'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo']
  ,
    pairingNotes: {
      "Seafood Tower": "The Cuvée Louise's toasted brioche and iodine undercurrent speak directly to the brine of oysters, the ocean salinity of chilled shrimp, and the delicate sweetness of crab — it's essentially the same coastal flavor vocabulary. The wine's fine persistent mousse amplifies the cold, clean freshness of each piece without muting any individual character.",
      "Seared Scallops": "The Maillard crust on the scallop finds an echo in the wine's toasted autolytic notes — both carry that same warm, slightly nutty quality — while the scallop's natural glycine sweetness is sharpened by the wine's chalky acidity. The result is that the sear tastes deeper and the scallop's interior sweetness reads more clearly.",
      "Filet Mignon": "The filet's lean, butter-finished tenderness has almost no tannin-gripping fat or char to fight the wine, so the Cuvée Louise's complexity — dried fruit, toast, white pepper — fills in the flavor space the mild beef leaves open. The effervescence lifts the butter sauce and prevents the richness from sitting flat, keeping the whole bite animated.",
      "Crab Cake": "The wine's toasted brioche quality mirrors the golden pan crust on the cake while its acidity zeroes in on the crab's natural sweetness and the brightness of whatever mustard or lemon is in the bind. That textural interplay — crispy cake against persistent fine bubbles — creates a contrast that makes both feel more precise.",
      "Prime Tartare": "The tartare's raw umami and the iron note of uncooked beef need something with enough complexity to match them without adding tannin, and the Cuvée Louise's aged autolytic depth and dry mineral spine do exactly that. The wine's effervescence cuts through the egg yolk richness while its toasty character ties into the capers and any toasted bread service alongside.",
      "Escargot": "The Cuvée Louise's autolytic toastiness and fine acidity cut straight through the brown butter and garlic in the escargot, while its mineral depth echoes the earthiness of the snail itself. What you get is a clean finish after every rich, herbaceous bite — the champagne essentially resets the palate so the garlic never accumulates.",
      "Shrimp Cocktail": "The briny iodine notes in chilled shrimp mirror the chalky minerality that defines Cuvée Louise, and the carbonation lifts the natural sweetness of the shrimp without competing with the cocktail sauce's horseradish heat. Each sip amplifies the oceanic quality of the shrimp while keeping the palate bright and ready for the next bite.",
      "Burrata": "The lactic richness in fresh burrata finds a counterpart in the creamy, bready autolysis of this prestige cuvée, while the wine's acidity prevents the fat from coating the palate. Together they create a texture conversation — silk against silk — with the champagne's effervescence providing just enough lift to keep it from feeling heavy.",
      "House Wedge": "The high acidity and tight bubbles of Cuvée Louise act as a foil to the fat in blue cheese dressing, cutting through the creaminess the same way lemon does on a salad. What the guest tastes is a sudden brightness after the richness of the dressing, with the champagne's toasty complexity adding a savory backbone that extends the finish.",
      "Faroe Island Salmon": "Faroe Island salmon's elevated fat content — from cold water and a slower growth cycle — needs the kind of precise acidity that Cuvée Louise delivers, while the wine's toasted brioche notes echo a classic salmon-and-cream preparation. The combination reads as unified rather than paired: the fat carries the wine's complexity, and the wine gives the salmon's richness a clean exit.",
      "Bone-In Filet": "The bone imparts a subtle mineral and marrow quality to the filet's mild beef flavor, and that minerality aligns directly with the chalky, Grand Cru backbone of Cuvée Louise. The champagne's fine mousse also physically tenderizes the perception of each bite, making already butter-tender beef feel almost weightless on the palate.",
      "Lobster Mac": "The champagne's acidity works against the béchamel and cheese fat the way a squeeze of lemon works on lobster bisque — it's a tension that keeps indulgence from tipping into heaviness. The lobster's natural sweetness and the wine's toasty complexity reinforce each other, but guests should know the richness of the dish will mute some of the cuvée's more delicate floral notes.",
      "Beignets": "The powdered sugar and fried dough push into sweetness that outpaces the Cuvée Louise's dry profile, but the wine's acidity does useful work cutting through the frying oil and preventing the sugar from lingering. It's a contrast pairing rather than a harmony — the champagne keeps the palate honest between bites, though guests who prefer a sweeter finish may find the dryness of the wine a sharp turn after the beignets.",
      "Grilled Caesar": "The Champagne's autolytic brioche notes and high acidity cut straight through the anchovy-and-parmesan umami while the mousse lifts the char off the romaine. What lands is a savory, almost oyster-cracker richness that makes the Caesar taste more composed and less aggressive."
    }
  },

  // ── WINES — WHITE ────────────────────────────────────────────────────────────

  {
    name: 'Stoneleigh Sauvignon Blanc',
    category: 'wine-white',
    profile: ['crisp','citrus','grassy','light','approachable','New-Zealand'],
    price: '$10 / $40',
    excellent: ['House Wedge','Burrata','Crab Cake','Shrimp Cocktail','Seared Scallops'],
    strong: ['Grilled Caesar','Escargot','Prime Tartare','Seafood Tower','Sauteed Garlic Spinach'],
    works: ['Faroe Island Salmon','Shrimp Bisque','Roast Half Chicken'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "House Wedge": "The wine's malic acidity mirrors the lemon in the blue cheese dressing and its grassy, gooseberry edge keeps the iceberg's cold crunch feeling clean rather than flat. Together they reset the palate between bites, so the creamy dressing never gets heavy.",
      "Burrata": "The Sauvignon Blanc's grapefruit pith and green herb notes act as a seasoning layer on the milky, nearly-sweet cream of the burrata, doing the work that finishing salt and olive oil usually do. The result is that the cheese reads richer and more defined, not diluted.",
      "Crab Cake": "The wine's citrus zest and grassy acidity hit the same flavor register as the lemon and Old Bay in the crab, amplifying the sweet lump meat while cutting through the pan-fried crust's fat. What the guest gets is a cleaner finish where the crab flavor lingers rather than the breadcrumb.",
      "Shrimp Cocktail": "The wine's saline minerality locks onto the brine of chilled shrimp the same way a squeeze of lemon does, while the high acidity keeps the horseradish in the cocktail sauce from overpowering the palate. Each sip resets the coldness and sweetness of the shrimp so the next bite tastes as fresh as the first.",
      "Seared Scallops": "The wine's bright acidity and grapefruit note create contrast with the Maillard-browned crust on the scallop, keeping the natural glycine sweetness of the meat from tipping into cloying. The pairing makes the interior of the scallop taste almost buttery by comparison without adding any actual fat.",
      "Grilled Caesar": "The wine's citrus acidity presses against the char on the grilled romaine and thins out the richness of the Caesar dressing, but the grassy herbaceousness in the Sauvignon Blanc doesn't quite have the body to hold its own against the anchovy depth. It's a cleansing pairing — refreshing between bites — but the dressing wins the argument.",
      "Escargot": "The wine's grassiness bridges directly to the parsley and tarragon in the garlic butter, giving the herb component more lift and definition. Where the pairing earns its place is in the finish — the acidity dissolves the butter fat quickly so the garlic stays present without coating the palate.",
      "Prime Tartare": "The wine's sharp malic acidity and herbaceous pyrazines cut through the fat of the egg yolk and oil in the tartare, creating a brightness that keeps each bite tasting like the first. Together, they pull the beef's iron-rich umami forward while the citrus zest keeps the raw richness from sitting heavy on the palate.",
      "Seafood Tower": "The wine's grapefruit pith and grassy notes mirror the oceanic brininess of oysters and the iodine minerality of chilled shellfish. Each sip acts like a squeeze of lemon — resetting the palate between bites and amplifying the clean, cold-water sweetness of the seafood.",
      "Sauteed Garlic Spinach": "The wine's grassy chlorophyll-driven notes echo the vegetal character of the spinach, while its acidity balances the fat in whatever oil or butter carries the garlic. That garlic's sulfur compounds actually soften on the palate when chased with this wine's citrus, leaving a clean, herbaceous finish.",
      "Faroe Island Salmon": "The wine's bright acidity works against the salmon's high omega-3 fat content the way a vinaigrette would — cutting through the richness without stripping the fish's delicate flavor. The citrus notes lift the salmon's natural sweetness, though the wine's lighter body means the salmon's fat will occasionally outpace it.",
      "Shrimp Bisque": "The wine's crisp acidity slices through the cream and butter in the bisque, preventing the richness from coating the palate, while its citrus notes echo the natural sweetness of the shrimp. The pairing works, though the bisque's body is heavier than the wine — expect the wine to feel thinner after a spoonful of the cream.",
      "Roast Half Chicken": "The wine's grassy acidity brightens the savory, rendered-fat notes from the roasted skin, acting like a squeeze of lemon over the bird. It holds its own against the lighter white meat, but the darker, richer thigh will push back — the pairing is most alive with the breast."
    }
  },
  {
    name: 'Alexander Valley Chardonnay',
    category: 'wine-white',
    profile: ['medium-bodied','oak','butter','apple','approachable','California'],
    price: '$12 / $48',
    excellent: ['Faroe Island Salmon','Roast Half Chicken','Shrimp Bisque','Lobster Mac'],
    strong: ['Crab Cake','Seared Scallops','House Wedge','Escargot','Burrata'],
    works: ['Filet Mignon','Grilled Caesar','Sauteed Garlic Spinach'],
    avoid: ['The Tomahawk','Caymus Cabernet Sauvignon','Scavino Barolo','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Faroe Island Salmon": "The wine's toasted oak and diacetyl-driven butter notes match the salmon's own fat-soluble richness, creating a seamless texture where the two feel like they were cooked together. The apple and vanilla in the Chardonnay bring out the salmon's natural sweetness while the medium body matches the fish's weight ounce for ounce.",
      "Roast Half Chicken": "The wine's oak tannins and caramelized apple notes speak directly to the Maillard browning on the roasted skin, creating a shared toasty, golden-fat register between the two. The butter in the wine amplifies the chicken's rendered juices, and the finish extends — each sip feels like it's pulling another layer of roasted flavor out of the meat.",
      "Shrimp Bisque": "The wine's malolactic-driven butter and toasted oak lock onto the bisque's cream reduction and sweet shrimp fond, creating a seamless fat-on-fat richness. Together they read almost like a single sauce — the apple in the wine cutting just enough acidity to keep the dish from feeling heavy.",
      "Lobster Mac": "The wine's diacetyl-forward butter character mirrors the beurre-enriched cheese sauce, while the oak tannin gives structure that the pasta's starch alone can't provide. What the guest gets is the impression that the lobster itself is sweeter and meatier than it would be on its own.",
      "Crab Cake": "The wine's green apple acidity cuts through the pan-seared crust's oil while the butter mid-palate meets the crab's natural glycine-driven sweetness. That contrast between the wine's brightness and the cake's crisp exterior makes the delicate crab meat taste cleaner and more pronounced.",
      "Seared Scallops": "The Maillard crust on the scallop and the toasted oak in the wine share the same caramelized aldehyde compounds, creating a flavor echo across the pairing. The wine's body matches the scallop's dense, custard-like interior without drowning the natural brininess.",
      "House Wedge": "The wine's creamy mid-palate latches onto the blue cheese dressing's lactic fat while the apple note in the wine acts as a palate cleanser between each cold, crunchy bite. The result is that the wedge feels lighter and the dressing tastes more savory than it does on its own.",
      "Escargot": "The wine's oak and butter amplify the garlic-herb compound butter already coating the escargot, effectively doubling down on the dish's richness rather than contrasting it. The wine's acidity does just enough work to lift the finish so the garlic doesn't linger and fatigue the palate.",
      "Burrata": "The wine's butter and the burrata's fresh cream share the same lactic softness, making the two nearly indistinguishable on the palate — the pairing is about amplification, not contrast. The wine's faint oak spice introduces a subtle complexity that the mild cheese alone can't generate.",
      "Filet Mignon": "The wine's butter and apple don't have the tannin or weight to contend with the filet's iron-rich protein, but the oak provides just enough grip to hold onto the meat's mild sear. It works best early in the meal before the fat accumulates on the palate — guests who ordered lighter preparation, no sauce, will get the most out of it.",
      "Grilled Caesar": "The wine's toasted oak and butter fat mirror the char on the romaine and the anchovy-driven umami in the dressing, while its apple acidity cuts through the richness of the emulsified egg yolk. Together they create a back-and-forth between smoke and cream that makes both feel more intentional.",
      "Sauteed Garlic Spinach": "The wine's buttery mid-palate absorbs the rendered garlic fat in the spinach, and its restrained apple fruit lifts the iron-mineral note that comes off the wilted leaves. The result is a savory, almost savory-sweet softness where neither the garlic nor the oak overpowers."
    }
  },
  {
    name: 'St Supéry Sauvignon Blanc',
    category: 'wine-white',
    profile: ['crisp','citrus','grassy','grapefruit','clean','Napa'],
    price: '$12 / $48',
    excellent: ['Crab Cake','Shrimp Cocktail','Seared Scallops','House Wedge','Burrata'],
    strong: ['Escargot','Prime Tartare','Seafood Tower','Grilled Caesar','Sauteed Garlic Spinach'],
    works: ['Faroe Island Salmon','Shrimp Bisque','Roast Half Chicken'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo']
  ,
    pairingNotes: {
      "Crab Cake": "The wine's grapefruit acidity and grassy pyrazines cut straight through the pan-seared crust and hit the sweet, glycine-rich crab meat underneath, amplifying its natural brininess. The guest gets a clean, bright finish that keeps the crab tasting fresh rather than fried.",
      "Shrimp Cocktail": "The wine's citric acid matches the lemon and horseradish in the cocktail sauce while its grassy, cool-climate character echoes the chilled, iodine-forward brine of the shrimp. Each sip resets the palate so the next piece of shrimp tastes just as clean and snappy as the first.",
      "Seared Scallops": "The wine's grapefruit zest and sharp acidity work against the caramelized Maillard crust on the scallop, providing contrast that keeps the sear from reading as heavy or fatty. Inside that tension, the scallop's natural sweetness comes forward in a way it simply doesn't without the wine.",
      "House Wedge": "The wine's grassy, herbaceous character speaks directly to the raw iceberg and its cryo-concentrated freshness, while the grapefruit acidity slices through the fat in the blue cheese dressing. The guest gets brightness on top of richness without either element flattening the other.",
      "Burrata": "The wine's lean citrus acidity creates tension against the high-fat cream filling of the burrata, which on its own can read as neutral and flat. That contrast pulls out the milk's subtle lactic sweetness and turns a simple bite into something that finishes long and clean.",
      "Escargot": "The wine's citric acid and grassy herbal notes cut through the compound butter coating the escargot and echo the parsley, creating a bridge through shared green, chlorophyll-forward compounds. What could be an overwhelmingly rich bite instead finishes lifted, with the garlic and herb reading as bright rather than heavy.",
      "Prime Tartare": "The wine's high-acid grapefruit cuts through the fat of the hand-cut beef while its grassy, pyrazine-driven finish amplifies the capers and shallots already in the dish. Together, they sharpen each other — the tartare tastes more savory, the wine tastes more lush.",
      "Seafood Tower": "The wine's natural salinity and citrus zest mirror the iodine-forward brine of fresh oysters and the sweetness of chilled shrimp. Each sip acts as a palate reset, keeping the seafood tasting clean and ocean-bright through the whole tower.",
      "Grilled Caesar": "The wine's acidity cuts through the anchovy-and-egg richness of the dressing while its herbaceous, grassy notes play against the char on the romaine. What you get is a back-and-forth where the smoke on the lettuce becomes more pronounced and the wine picks up a toasted, savory depth.",
      "Sauteed Garlic Spinach": "The wine's pyrazines and green, grassy profile are essentially in the same flavor family as the sautéed spinach, creating a seamless bridge, while its acid lifts the residual butter and tames the sharpness of the garlic. The result is a clean, bright mouthful that makes the vegetable taste fresher than it does on its own.",
      "Faroe Island Salmon": "The wine's grapefruit acidity slices through the omega-rich fat of the salmon the way a squeeze of lemon would, preventing that coating, heavy finish. What lingers is the delicate, clean flavor of the fish with a brightness that keeps each bite feeling like the first.",
      "Shrimp Bisque": "The bisque's cream and shellfish sweetness soften the wine's sharper citrus edges, pulling out its rounder, stone-fruit side. The wine's acid prevents the bisque from feeling heavy, so the sweetness of the shrimp comes forward instead of the richness.",
      "Roast Half Chicken": "The wine's crisp acidity and herbal notes cut through the rendered chicken skin fat and echo any herb or citrus in the roasting jus. The chicken's savory depth mellows the wine's sharper grassy edge, landing both in a rounder, more comfortable middle ground."
    }
  },
  {
    name: 'Elk Cove Pinot Blanc',
    category: 'wine-white',
    profile: ['crisp','apple','pear','mineral','light','Oregon'],
    price: '$13 / $52',
    excellent: ['Crab Cake','Seared Scallops','Shrimp Cocktail','Escargot','Burrata','Shrimp Bisque'],
    strong: ['Prime Tartare','House Wedge','Seafood Tower','Faroe Island Salmon','Grilled Caesar'],
    works: ['Filet Mignon','Roast Half Chicken','Sauteed Garlic Spinach'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Caymus Cabernet Sauvignon','Scavino Barolo','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Crab Cake": "The wine's pear and green apple fruit mirrors the natural sweetness of Dungeness or blue crab, while its mineral, stony backbone echoes the subtle brine without competing with it. The wine's light body matches the delicate texture of the crab so neither one overpowers — you taste the sweetness of the seafood fully, then the fruit carries it clean off the palate.",
      "Seared Scallops": "The wine's malic acidity and green apple lift mirror the natural sweetness in the scallop's adductor muscle while cutting through the caramelized Maillard crust. Each sip resets the palate so every bite of scallop tastes as clean and sweet as the first.",
      "Shrimp Cocktail": "The mineral salinity in this Willamette Valley Pinot Blanc speaks directly to the ocean-forward brine of chilled shrimp, while the pear fruit softens the horseradish heat in the cocktail sauce. The result is a back-and-forth where each element sharpens the other without either taking over.",
      "Escargot": "The wine's crisp acidity slices through the clarified butter and cuts the fat that would otherwise coat the palate, while the apple and pear fruit plays against the tarragon and garlic. What you get is a clean finish after each rich, herbaceous bite — the wine essentially resets what the butter tries to linger on.",
      "Burrata": "The wine's stony minerality creates friction against the lactic creaminess of fresh burrata, while the pear and apple notes echo the milky sweetness at the center. That tension keeps the pairing from going flat — the wine lifts what would otherwise be a very rich, one-note texture.",
      "Shrimp Bisque": "The Pinot Blanc's bright malic acidity acts as a counterweight to the bisque's heavy cream base and concentrated shellfish reduction, keeping each spoonful from feeling dense. The apple and pear fruit in the wine also amplifies the natural sweetness of the shrimp without competing with the bisque's savory depth.",
      "Prime Tartare": "The wine's mineral edge and citrus-like acidity cut through the fat in the hand-cut beef and temper the richness of the egg yolk, while the crisp fruit keeps the iron-forward raw beef from overwhelming the palate. It's a contrast pairing — the wine's delicacy makes the tartare's bold umami hit feel more precise and intentional.",
      "House Wedge": "The wine's crisp acidity mirrors the snap of the cold iceberg while its pear fruit softens the tang of blue cheese dressing, bridging the gap between sharp and creamy. Together, the bitterness of the lettuce, the funk of the cheese, and the wine's clean finish cycle through in a way that makes each element taste brighter.",
      "Seafood Tower": "The consistent thread of stony minerality in this Pinot Blanc acts as a through-line across the varying brine levels of oyster, lobster, and shrimp — it reads as saline enough to belong, but clean enough not to compete. The apple and pear notes land best against the sweeter lobster and jumbo shrimp, while the acidity keeps the iodine-forward oysters from flattening the wine.",
      "Faroe Island Salmon": "The wine's malic acidity and pear esters cut through the salmon's high omega-3 fat content the same way lemon does, but with more subtlety. Together, the richness of the fish softens the wine's mineral edge and opens up a long, clean finish that lingers without heaviness.",
      "Grilled Caesar": "The wine's green apple acidity and chalky minerality push back against the anchovy umami and charred romaine, creating a tension that keeps neither element from going flat. That contrast wakes up the creamy dressing and makes the smoky bitterness of the grill marks taste intentional rather than harsh.",
      "Filet Mignon": "The wine's restrained pear fruit and clean acidity won't overpower the filet's delicate myoglobin-driven flavor the way a tannic red would, letting the meat's natural sweetness stay in focus. On the palate, the wine's lightness amplifies the buttery texture of the center cut without competing with it.",
      "Roast Half Chicken": "The Maillard browning on the chicken skin produces savory, slightly sweet compounds that echo the wine's ripe pear mid-palate, while the wine's acidity cuts the rendered fat in the thigh. The combination reads as richer than either element alone, with the roasted savoriness making the fruit in the wine seem more generous.",
      "Sauteed Garlic Spinach": "The wine's crisp minerality provides a neutral counterpoint to the sharp, sulfurous bite of sautéed garlic, keeping it from dominating the palate. The slight earthiness of the wilted spinach draws out the wine's stone-fruit middle and makes it taste rounder than it does on its own."
    }
  },
  {
    name: 'Jean-Pierre Grossot Chablis',
    category: 'wine-white',
    profile: ['crisp','mineral','citrus','oyster-shell','Burgundy','elegant'],
    price: '$16 / $64',
    excellent: ['Seared Scallops','Escargot','Crab Cake','Shrimp Bisque','Faroe Island Salmon','Prime Tartare'],
    strong: ['Shrimp Cocktail','House Wedge','Grilled Caesar','Sauteed Garlic Spinach','Seafood Tower'],
    works: ['Filet Mignon','Roast Half Chicken','Burrata'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Seared Scallops": "The Chablis's oyster-shell minerality — driven by Kimmeridgian limestone in the soil — is the same marine register as the scallop's natural brininess, creating a mirror rather than a contrast. The sear's caramelized crust provides the only counterpoint, and the wine's citrus acidity slices through it to keep the scallop's delicate sweetness at the front.",
      "Escargot": "The wine's sharp citrus and wet-stone acidity cut directly through the garlic butter's fat, functioning the same way a squeeze of lemon does over shellfish — resetting the palate between bites. That reset lets the herbaceous parsley and garlic read as fresh rather than heavy, and the wine's mineral finish extends the savory length.",
      "Crab Cake": "The Chablis's chalk-driven minerality and lemon-pith acidity bind to the crab's natural sweetness at a molecular level, amplifying the oceanic iodine notes the way a mignonette lifts raw oyster. The crispy seared crust provides textural contrast that keeps the wine's high acidity from sharpening into harshness.",
      "Shrimp Bisque": "The Chablis's oyster-shell minerality and citrus acidity cut straight through the bisque's cream base, lifting the sweetness of the shrimp without flattening it. Each sip resets the palate so the richness of the bisque reads as indulgent rather than heavy.",
      "Faroe Island Salmon": "The chalky, saline minerality in this Chablis mirrors the oceanic quality of the salmon's fat while the wine's citrus acidity slices through the fish's omega-rich oils. What you get is a cleaner, longer finish from the salmon — the fat lingers, but it never coats.",
      "Prime Tartare": "The wine's high acidity and flinty mineral backbone act like a squeeze of lemon over the raw beef, brightening the iron-forward umami without competing with the egg yolk or capers. The contrast keeps each bite tasting as sharp and intentional as the first.",
      "Shrimp Cocktail": "The oyster-shell character in the Chablis speaks directly to the brine in the chilled shrimp, amplifying the seafood's natural salinity the way a squeeze of lemon would. Together they create a clean, cold-water brightness that makes the shrimp taste fresher than it does on its own.",
      "House Wedge": "The wine's citrus acidity cuts into the buttermilk and blue cheese fat of the dressing the same way a vinaigrette would, preventing the cream from dominating. The result is that the iceberg's snap and the dressing's tang hit simultaneously instead of in sequence.",
      "Grilled Caesar": "The mineral, almost chalky backbone of the Chablis pushes back against the char and anchovy-driven umami in the Caesar, creating a tension that keeps the smoky richness from flattening into one note. That friction makes both the char and the wine's citrus pop louder than they would alone.",
      "Sauteed Garlic Spinach": "The Chablis's acidity latches onto the sulfurous bite of the sautéed garlic and softens it, while the wine's light body matches the spinach's weight so neither overwhelms. What the guest tastes is a cleaner, more herbaceous version of the dish — the garlic rounds out instead of sharp-edging.",
      "Seafood Tower": "The wine is essentially built from the same coastal vocabulary as the tower — oyster-shell, brine, cold minerality — so it doesn't contrast so much as it amplifies every element from the lobster down to the littleneck clams. The effect is that the whole tower tastes more oceanic, more alive, with each return to the glass.",
      "Filet Mignon": "The Chablis's high acidity and saline minerality cut through the filet's intramuscular fat the way a squeeze of lemon lifts a buttered sole. What you get is a cleaner finish on the meat and a creamier mid-palate on the wine — each making the other taste more refined.",
      "Roast Half Chicken": "Unoaked Chardonnay from Chablis carries a chalky minerality and citrus zest that slice through the rendered chicken skin fat without stripping the savory roasted drippings underneath. The acidity resets the palate between bites so the Maillard crust on the chicken stays vivid all the way through.",
      "Burrata": "The oyster-shell minerality and bright citrus acid in the Chablis act like a finishing salt and squeeze of lemon on the burrata's milky, lactic cream. The contrast keeps the cheese from reading as heavy, and the wine softens from sharp to almost silky against the fat."
    }
  },
  {
    name: 'Schloss Vollrads Riesling',
    category: 'wine-white',
    profile: ['off-dry','stone-fruit','mineral','floral','German','delicate'],
    price: '$16 / $64',
    excellent: ['Shrimp Bisque','Crab Cake','Seared Scallops','Shrimp Cocktail','Burrata'],
    strong: ['Escargot','House Wedge','Faroe Island Salmon','Roast Half Chicken','Beignets'],
    works: ['Prime Tartare','Grilled Caesar','Sauteed Garlic Spinach'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Shrimp Bisque": "The Riesling's residual sugar mirrors the natural sweetness of shrimp while its petrol-edged acidity cuts the bisque's cream-and-butter base before it coats the palate. The result is a back-and-forth between richness and lift that makes each spoonful taste fresher than the last.",
      "Crab Cake": "The peach and apricot stone-fruit in the Riesling amplify the delicate sweetness of blue crab, while the wine's acidity and minerality sharpen the contrast against the crispy pan-seared crust. Together they create a texture play — bright fruit on top of crunch — that neither delivers alone.",
      "Seared Scallops": "The floral lift and off-dry stone fruit in the Riesling echo the caramelized sugars from the scallop's sear, creating a glycerin-rich mid-palate that feels almost honeyed. The wine's acidity then steps in to cut the scallop's natural sweetness so it doesn't tip toward cloying.",
      "Shrimp Cocktail": "The Riesling's mineral backbone and cool floral acidity match the brininess of chilled shrimp the way a mignonette works on an oyster — sharpening rather than competing. The off-dry fruit rounds out any iodine edge in the shrimp and softens the horseradish heat in the cocktail sauce.",
      "Burrata": "The Riesling's floral aromatics and residual sugar draw out the fresh cream inside the burrata while its acidity prevents the cheese's lactic fat from flattening the wine. What the guest tastes is a richer, almost dessert-like creaminess in the cheese and a more textured, complex finish on the wine.",
      "Escargot": "The residual sugar in this Riesling cuts through the butter fat in the escargot while its slate-driven minerality amplifies the parsley and garlic without competing with them. The guest gets a brighter, cleaner bite — the richness of the butter lands without coating the palate.",
      "House Wedge": "The wine's petrol-and-stone mineral backbone mirrors the cool, crisp iceberg while its stone-fruit sweetness softens the lactic sharpness of the blue cheese dressing. Together, the salad reads fresher and the wine picks up a creamy mid-palate it doesn't show on its own.",
      "Faroe Island Salmon": "Riesling's high acidity cuts through the salmon's omega-3 fat the same way a squeeze of lemon would, while the apricot and white peach fruit in the wine echoes the fish's natural sweetness. The result is that the salmon tastes cleaner and the wine's floral lift comes forward in a way that lingers after the bite.",
      "Roast Half Chicken": "The wine's off-dry stone fruit acts as a counterweight to the rendered chicken fat and Maillard crust, while its acidity keeps the savory roasted skin from turning heavy on the palate. Guests get a bite that stays bright all the way through — the richness is there, but it doesn't sit.",
      "Beignets": "The wine's natural acidity and mineral dryness on the finish act as a reset against the fried dough and powdered sugar, preventing the sweetness from stacking. Each sip re-sharpens the palate so the next beignet tastes just as light as the first.",
      "Prime Tartare": "The wine's slate minerality and citrus-pith finish provide contrast against the iron-rich, fatty rawness of hand-cut prime beef, while a touch of residual sugar softens the aggressive umami without masking it. The tartare gains definition and the wine's delicate floral notes surface against the savory backdrop.",
      "Grilled Caesar": "The wine's high acidity speaks directly to the anchovy and lemon in the Caesar dressing, reinforcing those sharp savory notes, while its residual sugar tempers the char on the romaine. The smoky bitterness from the grill gets softened just enough that the creamy dressing takes center stage.",
      "Sauteed Garlic Spinach": "The wine's floral and stone-fruit aromatics lift above the pungent allicin in the garlic, creating a contrast that keeps the dish from reading as one-dimensional. Guests taste the sweetness of the wilted spinach more clearly, and the wine's mineral finish echoes the slight earthiness of the greens."
    }
  },
  {
    name: 'Le Garenne Rosé',
    category: 'wine-white',
    profile: ['rosé','dry','fresh','red-fruit','light','Provence-style'],
    price: '$17 / $68',
    excellent: ['Burrata','House Wedge','Crab Cake','Seared Scallops','Shrimp Cocktail'],
    strong: ['Grilled Caesar','Escargot','Prime Tartare','Seafood Tower','Faroe Island Salmon'],
    works: ['Filet Mignon','Roast Half Chicken','Sauteed Garlic Spinach'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo']
  ,
    pairingNotes: {
      "Burrata": "The rosé's bright acidity cuts through the fat in the fresh cream, while its red-fruit character mirrors the delicate dairy sweetness. Together they create a clean, lingering finish where neither overwhelms the other.",
      "House Wedge": "The wine's dry freshness acts like a citrus squeeze against the rich blue cheese dressing, while its red-fruit notes echo the sweetness of ripe tomato. Each sip resets the palate so the next bite of crisp iceberg lands just as clean.",
      "Crab Cake": "The rosé's strawberry and watermelon notes mirror the natural sweetness of lump crab, while its dry acidity lifts through the fried crust without masking the delicate seafood. The guest gets a mouthful that tastes brighter and lighter than either element alone.",
      "Seared Scallops": "The wine's fresh acidity cuts the caramelized crust from the sear and pulls the scallop's oceanic sweetness forward. What lands on the palate is a clean seafood brightness that makes the scallop taste more of itself.",
      "Shrimp Cocktail": "The rosé's red-fruit freshness draws a direct line to the natural brininess of cold shrimp, while its dry finish balances the sharp horseradish in the cocktail sauce. The combination reads as a single, clean coastal bite.",
      "Grilled Caesar": "The wine's acidity stands up to the anchovy-driven umami in the dressing, and its fruit provides contrast against the char on the lettuce. The smokiness that might otherwise dominate softens into the background, letting the creamy dressing and the wine's brightness share the finish.",
      "Escargot": "The rosé's dry acidity slices through the garlic butter and prevents the richness from coating the palate, while its red-fruit character provides just enough contrast to lift the herbaceous parsley. What the guest tastes is the escargot itself — tender, earthy — rather than just a pool of fat.",
      "Prime Tartare": "The wine's fresh acidity functions the way a squeeze of lemon does on raw beef — brightening the iron-rich umami and sharpening the clean fat of hand-cut prime. The tartare's bold raw intensity doesn't disappear; it becomes more focused.",
      "Seafood Tower": "The wine's bright acidity and strawberry-driven red fruit cut through the iodine-forward salinity of raw oysters and chilled shrimp without overpowering their delicate sweetness. Guests get a clean palate reset between each tier, so every piece of seafood tastes as vivid as the first.",
      "Faroe Island Salmon": "The dry, high-acid red-fruit profile of the rosé works against the omega-rich fat in the salmon the same way a squeeze of lemon does — it lifts the fish off the palate instead of letting the fat coat it. What lands is a longer finish where the salmon's natural sweetness comes forward rather than the oiliness.",
      "Filet Mignon": "The rosé's crisp red-fruit acidity provides just enough tension against the filet's mild, butter-soft protein without the tannin weight that would mute its tenderness. The guest gets a clean interplay — the wine's freshness reads almost like a palate lift that keeps each bite of beef tasting lean and bright.",
      "Roast Half Chicken": "The Maillard-driven caramelization on the roasted skin shares a savory-sweet register with the rosé's ripe strawberry and cherry notes, creating a fruit-meets-fond moment. The wine's dry finish then cuts through the rendered fat under the skin, keeping the overall experience light rather than heavy.",
      "Sauteed Garlic Spinach": "The rosé's fresh acidity and red-fruit lift counterbalance the sulfur bite of the sautéed garlic, which would otherwise dominate a lighter white. Together, the two soften each other — the garlic reads more rounded, and the wine's fruit reads more savory and food-focused."
    }
  },
  {
    name: 'Domaine de Berthiers Pouilly-Fumé',
    category: 'wine-white',
    profile: ['crisp','mineral','flint','citrus','herbaceous','Loire'],
    price: '$19 / $76',
    excellent: ['Seared Scallops','Escargot','Crab Cake','Shrimp Bisque','Faroe Island Salmon'],
    strong: ['Prime Tartare','Shrimp Cocktail','House Wedge','Grilled Caesar','Sauteed Garlic Spinach'],
    works: ['Filet Mignon','Roast Half Chicken','Burrata'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Seared Scallops": "The wine's flinty minerality and citrus zest align with the sea-salt sweetness of the scallop, while its sharp acidity cuts the brown-butter fond from the sear without stripping it. The guest gets the full range of the scallop — caramelized crust, sweet center, and a clean oceanic finish from the wine.",
      "Escargot": "The Pouilly-Fumé's high acidity and flint-driven minerality slice through the clarified garlic butter that carries the escargot, preventing the fat from blanketing the palate. What emerges is the herbaceous depth of the dish — the parsley, the garlic, the snail itself — brought into sharper focus with each sip.",
      "Crab Cake": "The wine's citrus-forward profile mirrors the lemon typically squeezed over crab, while its chalky mineral core echoes the oceanic salinity in the crab meat itself. The crispness of the seared crust finds a textural counterpart in the wine's clean, taut finish, so neither the cake's richness nor the wine's acidity dominates.",
      "Shrimp Bisque": "The wine's flint minerality and bright citrus acidity cut directly through the bisque's heavy cream, giving the sweet shrimp flavor a clean landing. Each sip resets the palate so the richness never becomes cloying — you keep tasting bisque instead of just fat.",
      "Faroe Island Salmon": "Sauvignon Blanc's grapefruit and wet-stone minerality mirrors the ocean-forward fattiness of the salmon, with the wine's acidity acting like a squeeze of lemon on the fish's natural oils. The result is a pairing that makes the salmon taste cleaner and brighter without stripping any of its richness.",
      "Prime Tartare": "The wine's sharp citrus and flinty minerality provide the acid contrast that raw beef needs — functioning the way a classic tartare's capers and lemon do, amplifying the umami without adding competing richness. That brightness keeps the bold, iron-edged flavor of the raw beef focused and precise on the palate.",
      "Shrimp Cocktail": "The wine's coastal minerality — that classic gun-flint quality in a Loire Sauvignon Blanc — echoes the natural brine of cold shrimp in a way that makes both taste more like the ocean. The crisp citrus finish then cleanly lifts the horseradish heat from the cocktail sauce rather than competing with it.",
      "House Wedge": "The wine's citrus acidity mirrors the tang of a blue cheese or buttermilk dressing, while its lean mineral backbone keeps the creamy dressing from dominating the palate. Together they read as bright and fresh rather than heavy, extending the crunch and coolness of the iceberg all the way through the finish.",
      "Grilled Caesar": "The char on romaine introduces a bitter, smoky edge that the wine's flint and citrus bridge directly — both share that slightly sharp, high-toned quality that makes the contrast feel intentional rather than accidental. The wine's acidity also cuts the anchovy-and-egg richness of the Caesar dressing so the smoke and umami stay front and center.",
      "Sauteed Garlic Spinach": "The wine's crisp acidity and citrus lift the sulfur-edged savoriness of sautéed garlic, keeping it from sitting heavy while the mineral backbone matches the iron-rich, vegetal depth of the wilted spinach. What you get is a pairing that makes the dish taste more vibrant and aromatic rather than simply buttery and soft.",
      "Filet Mignon": "The filet's lean, mild protein doesn't offer enough fat or char to fully engage the wine's acidity, so the two sit somewhat parallel rather than interacting — the wine reads crisply on its own and the beef reads cleanly on its own, but neither one sharpens the other. It works at the table, but if the guest wants white wine with beef, a richer style would push the pairing further.",
      "Roast Half Chicken": "The wine's flint and citrus acidity cut through the rendered chicken fat and lift the savory roasted skin. Each sip resets the palate so the next bite of dark meat tastes cleaner and more concentrated.",
      "Burrata": "The mineral, almost chalky backbone of the Pouilly-Fumé contrasts the lush, milky fat in the burrata without overwhelming its delicacy. That tension makes the cream taste richer and the wine taste brighter — neither flattens the other."
    }
  },
  {
    name: 'Our Lady of Guadalupe Acolytes',
    category: 'wine-white',
    profile: ['white-blend','complex','Oregon','herbal','structured'],
    price: '$20 / $80',
    excellent: ['Faroe Island Salmon','Roast Half Chicken','Seared Scallops','Shrimp Bisque'],
    strong: ['Crab Cake','Escargot','House Wedge','Grilled Caesar','Burrata'],
    works: ['Filet Mignon','Prime Tartare','Sauteed Garlic Spinach'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Faroe Island Salmon": "The herbal complexity and weight of this Oregon white blend match the salmon's high fat content without the wine getting lost in it. The wine's texture coats alongside the fish's omega-rich flesh, and the herbal notes read almost like a fresh garnish against the richness.",
      "Roast Half Chicken": "The wine's layered complexity — fruit, herb, and mid-palate weight — mirrors the depth that dry-roasting builds in the chicken's skin and dark meat. Together they create a back-and-forth where the savory char draws out the wine's fruit and the wine's acidity keeps the richness from sitting heavy.",
      "Seared Scallops": "The sear on the scallop creates a caramelized crust with Maillard-derived sweetness, and the wine's herbal register and bright acidity play directly against that sweetness without smothering the delicate interior. What the guest gets is a contrast between the scallop's natural sweetness and the wine's savory green edge that makes both more interesting.",
      "Shrimp Bisque": "The bisque's reduction concentrates sweet shellfish and cream into something almost viscous, and the wine's acidity and herbal lift thread through that density to keep it from closing in. Each sip opens the palate back up so the next spoonful of bisque hits with full sweetness rather than fatigue.",
      "Crab Cake": "The crispy exterior of the crab cake has a toasty, browned-butter quality that the wine's weight and complexity can stand up to, while its herbal notes echo any tarragon or chive in the cake. The sweet crab meat in the center then pulls the wine's fruit forward in a way the crispy exterior alone wouldn't.",
      "Escargot": "The escargot arrives in a pool of garlic-herb butter, and the wine's own herbal character creates a bridge rather than a contrast — it's speaking the same language. What the pairing does is use the wine's acidity to cut the butter's fat so the garlic and herb flavors stay sharp and defined through the finish.",
      "House Wedge": "The wine's herbal complexity and bright acidity cut through the fat in the blue cheese dressing while echoing the cool freshness of the iceberg. The guest gets a clean, refreshing reset between each bite, with the wine lifting the creaminess off the palate rather than letting it linger.",
      "Grilled Caesar": "The herbal and savory character in this Oregon white blend mirrors the char and anchovy-driven umami in the Caesar, while the wine's acidity slices through the emulsified egg and oil in the dressing. That tension between smoke and brightness makes the romaine taste crisper and the dressing taste lighter than it actually is.",
      "Burrata": "The wine's herbal notes act as a bridge to any fresh basil or finishing oil on the plate, while its acidity keeps the milky fat of the burrata from coating the palate. The result is a pairing that tastes effortlessly clean, where the wine makes the cheese feel more delicate and the cheese makes the wine feel more lush.",
      "Filet Mignon": "The wine's lighter body and herbal lift complement the filet's mild, lean profile without overwhelming the subtle beefiness that makes this cut worth ordering. The buttery finish on the meat softens the wine's herbal edge, and the wine's acidity keeps each bite of the filet tasting fresh rather than heavy.",
      "Prime Tartare": "The herbal and citrus-adjacent brightness in this white blend cuts against the richness of the yolk and the deep umami of raw beef, acting as a counterweight rather than a mirror. That contrast sharpens the tartare's flavors — the beef tastes more mineral, the capers and shallots pop, and the wine stays lively rather than being flattened by the fat.",
      "Sauteed Garlic Spinach": "The wine's herbal character finds a natural echo in the earthy, green notes of the spinach, while its acidity balances the savory depth that comes from the garlic browning in butter or oil. Together they read as a single savory, vegetable-forward moment where neither the wine nor the side dish feels like an afterthought."
    }
  },
  {
    name: 'Joseph Mellot Sancerre',
    category: 'wine-white',
    profile: ['crisp','mineral','citrus','grassy','Loire','Sauvignon-Blanc','premium'],
    price: '$76',
    excellent: ['Seared Scallops','Crab Cake','Shrimp Cocktail','Prime Tartare','Escargot','Faroe Island Salmon'],
    strong: ['House Wedge','Burrata','Shrimp Bisque','Grilled Caesar','Seafood Tower'],
    works: ['Filet Mignon','Roast Half Chicken','Sauteed Garlic Spinach'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo']
  ,
    pairingNotes: {
      "Seared Scallops": "The Sancerre's flint-driven minerality and bright citrus acidity mirror the salinity of the scallop while the grassy Sauvignon Blanc character picks up any herb or pea tendril garnish on the plate. The sear on the scallop adds a caramelized sweetness that the wine's citrus cuts through cleanly, making each bite taste like the first.",
      "Crab Cake": "The Loire's chalky minerality speaks directly to the oceanic sweetness of the crab, and the wine's grassy, citrus-zest edge echoes the lemon and fresh herb typically bound into the cake. The crispy crust gets a clean counterpoint from the wine's acidity, so the richness of the filling stays bright rather than heavy on the finish.",
      "Shrimp Cocktail": "The Sancerre's flint minerality mirrors the oceanic brine in the shrimp, while its lemon zest acidity cuts through the cold, tight texture of the chilled protein. Together they read as a single clean, coastal note — like a squeeze of citrus directly on fresh seafood.",
      "Prime Tartare": "The wine's grassy sauvignon blanc character locks onto the iron-rich, raw beef the way a squeeze of lemon does — brightening fat without cooking it — while its crisp acidity keeps each bite of hand-cut tenderloin tasting fresh rather than heavy. The contrast between the wine's lightness and the tartare's dense umami makes both feel more defined.",
      "Escargot": "The Sancerre's herbaceous green notes speak directly to the parsley and garlic beurre working through the escargot, while its high acidity slices through the butter fat so the richness resets between every bite. What could feel like a heavy start to the meal stays surprisingly light and aromatic on the palate.",
      "Faroe Island Salmon": "The wine's citrus acidity performs the same function as a classic lemon-caper treatment on fatty fish — it binds to the omega-rich lipids in the salmon and lifts them so the flavor reads bright rather than oily. The Sancerre's minerality then echoes the clean, cold-water character of the Faroe Island fish itself.",
      "House Wedge": "The wine's sharp malic acidity goes head-to-head with the tanginess in the blue cheese dressing, and where they meet, both soften into something rounder than either is alone. The iceberg's water content amplifies the Sancerre's crispness, so each forkful refreshes the palate for the next sip.",
      "Burrata": "The Sancerre's citrus and mineral edge gives the burrata's mild, milky fat a frame it doesn't have on its own — without it, the cheese can read as neutral, but the wine pulls its cream forward and makes it taste intentionally rich. The contrast between the wine's tight structure and the burrata's loose, yielding texture is what makes the pairing feel elegant.",
      "Shrimp Bisque": "The bisque's reduced shellfish sweetness and cream get checked by the Sancerre's tartaric acidity, preventing the richness from coating the palate and letting the shrimp flavor stay in focus. The wine's mineral backbone also draws out the deeper, oceanic notes in the bisque that the cream would otherwise bury.",
      "Grilled Caesar": "The char on the romaine introduces a bitter, smoky compound that the Sancerre's grassy acidity cuts against rather than retreats from, keeping the wine tasting bright even next to bold anchovy and Worcestershire umami. The result is that the Caesar's richness feels grounded while the wine gains body it wouldn't show next to a lighter dish.",
      "Seafood Tower": "The flint-and-chalk minerality in this Loire Sauvignon Blanc mirrors the iodine salinity of fresh shellfish, while the citrus acidity cuts through any oceanic richness. Each bite of crab or oyster makes the wine taste crisper and more alive, and the wine makes the seafood taste like it just came out of the water.",
      "Filet Mignon": "The bright acidity and grassy herbaceous notes in the Sancerre act as a palate cleanser against the filet's lean, clean beef fat, preventing the wine from being overwhelmed by a cut that has very little marbling to coat the tongue. The result is a lighter, more refreshing approach to a steakhouse classic.",
      "Roast Half Chicken": "The Sancerre's citrus and mineral backbone cuts through the rendered fat under the roasted chicken skin, doing the work a squeeze of lemon would do on a roast bird. The savory pan drippings soften the wine's grassiness, pulling out a subtle stone fruit note that isn't as obvious on its own.",
      "Sauteed Garlic Spinach": "The grassy, green-herb character in Sauvignon Blanc is a direct flavor echo of sauteed spinach, and the wine's acidity keeps the allium sharpness of the garlic from going heavy on the palate. Together they read as clean and bright, neither one overpowering the other."
    }
  },
  {
    name: 'Keenan Chardonnay',
    category: 'wine-white',
    profile: ['rich','oak','butter','tropical','full-bodied','Napa','premium'],
    price: '$120',
    excellent: ['Faroe Island Salmon','Roast Half Chicken','Lobster Mac','Shrimp Bisque','Seared Scallops'],
    strong: ['Crab Cake','Escargot','Grilled Caesar','Filet Mignon','Burrata'],
    works: ['House Wedge','Au Gratin Potatoes','Creamed Spinach'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Scavino Barolo','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Faroe Island Salmon": "The oak-driven vanilla and butter in this Chardonnay latches onto the natural fat content of Faroe Island salmon, which has one of the highest omega-3 lipid profiles of any Atlantic salmon — richness meeting richness rather than fighting it. That match-up deepens the salmon's silky texture and pulls the wine's tropical fruit forward on the finish.",
      "Roast Half Chicken": "The malolactic fermentation that gives this Chardonnay its buttery, creamy texture is essentially the same transformation happening in the brown butter and roasted drippings on the chicken — lactic richness echoing lactic richness. The oak spice in the wine plays against the caramelized skin, and the whole thing finishes long and savory.",
      "Lobster Mac": "The butter and cream building the mac's béchamel base are the same flavor compounds driving this Chardonnay's profile, so there's no friction — just layered richness. The wine's tropical fruit note cuts through just enough to keep each bite from feeling heavy.",
      "Shrimp Bisque": "The natural sweetness in shrimp comes from glycine and alanine amino acids, and the Chardonnay's ripe tropical fruit mirrors that sweetness without competing with it. The wine's creamy texture matches the bisque's body, and the oak adds a subtle toasted note that reads like the fond from a well-made shellfish stock.",
      "Seared Scallops": "The Chardonnay's malolactic butter and toasted oak mirror the caramelized crust on the scallop, while the wine's tropical fruit lifts the natural oceanic sweetness underneath. Together they read as one long, silky finish — the scallop's sear fades into the wine's warmth without either overpowering the other.",
      "Crab Cake": "The wine's lactic richness from malolactic fermentation speaks directly to the sweet, delicate crab meat, while its acidity cuts through the pan-fried crust before it can feel heavy. The guest gets a clean, bright hit of ocean sweetness followed by a round, buttery close.",
      "Escargot": "The Chardonnay's oak-derived vanilla and butter compounds essentially speak the same language as the garlic-herb butter the escargot is cooked in — it's a reinforcement, not a contrast. The result is a richer, more decadent expression of both, with the wine's tropical note adding a faint brightness that keeps the dish from feeling one-dimensional.",
      "Grilled Caesar": "The Chardonnay's toasted oak meets the char on the romaine, and its creamy mid-palate absorbs the anchovy-driven umami without getting overwhelmed. What the guest notices is that the wine smooths the Caesar's aggressive saltiness, letting the smokiness linger longer on the finish.",
      "Filet Mignon": "The filet's mild, almost cream-like fat responds to the Chardonnay's butter and oak the way beef tenderloin does to a beurre blanc — the wine essentially acts as a sauce. The lean texture of the cut lets the Chardonnay's tropical weight come forward without the tannin clash you'd get from a richer steak.",
      "Burrata": "The wine's malolactic-driven lactic notes are chemically close to the fresh cream inside the burrata, making them feel like a single ingredient pulled apart and recombined. The oak adds a faint toasty contrast to the burrata's cool, milky center that gives the pairing a little textural dimension.",
      "House Wedge": "The Chardonnay's acidity and fruit cut through the blue cheese dressing's fat and salt, giving the palate a reset between bites. It's a lightening effect — the richness of the dressing doesn't stack with the wine, it gets balanced by it.",
      "Au Gratin Potatoes": "The Chardonnay's butter and oak layer onto the gratin's Gruyère and cream, which deepens the savory dairy notes but risks staying in the same register throughout — there's no real contrast pulling the pairing apart. The wine's tropical acidity does some work to cut the richness, but guests who prefer balance over indulgence may find the combination a touch heavy.",
      "Creamed Spinach": "The wine's malolactic butter and toasted oak lock onto the cream reduction in the spinach, matching fat with fat while the tropical fruit lifts through the dairy richness. Together they create a single, seamless savory-luxe texture where neither the wine nor the dish feels heavy."
    }
  },
  {
    name: 'Far Niente Chardonnay',
    category: 'wine-white',
    profile: ['rich','oak','butter','stone-fruit','full-bodied','Napa','prestige'],
    price: '$140',
    excellent: ['Faroe Island Salmon','Lobster Mac','Seared Scallops','Shrimp Bisque','Roast Half Chicken'],
    strong: ['Crab Cake','Escargot','Filet Mignon','Grilled Caesar','Burrata'],
    works: ['House Wedge','Creamed Spinach','Au Gratin Potatoes'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Scavino Barolo','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Faroe Island Salmon": "The stone-fruit acidity in the wine cuts through the salmon's high omega-3 fat content while the buttery mid-palate mirrors the fish's own natural richness. The result is a clean finish where the salmon tastes brighter and the wine tastes rounder than either does alone.",
      "Lobster Mac": "The wine's oak-derived vanillin and butter notes fuse with the béchamel and shellfish fat in the mac, essentially extending the sauce. Every bite reads as more intensely lobster-forward because the wine is carrying the same creamy register.",
      "Seared Scallops": "The Maillard crust on the scallop pulls the wine's toasted oak into a caramelized conversation, while the scallop's natural glycine sweetness meets the wine's stone-fruit character. The contrast between the scallop's seared exterior and the wine's cool acidity keeps the pairing from going heavy.",
      "Shrimp Bisque": "The bisque's shellfish reduction and cream amplify the wine's butter and stone-fruit the same way a finishing pat of butter would — both are built on long-cooked sweet crustacean flavor. The wine's acidity prevents the cream from coating the palate, so each spoonful tastes as clean as the first.",
      "Roast Half Chicken": "The wine's oak tannins and stone-fruit echo the roasted skin's rendered fat and slight char, bridging the gap between white wine and poultry the way a pan sauce would. The chicken's savory fond character draws out the wine's deeper, nuttier barrel notes that fruit-forward pairings tend to hide.",
      "Crab Cake": "The wine's bright stone-fruit acidity cuts the fried crust's oil while the butter in the mid-palate meets the sweet lump crab without overpowering its delicacy. The crab's natural brininess sharpens the wine's fruit and makes the finish taste longer than it actually is.",
      "Escargot": "The garlic and herb butter already in the escargot preparation is essentially the wine's butter and oak translated into food — they share the same flavor architecture. The wine's stone-fruit gives just enough brightness to lift the garlic intensity and keep the richness from becoming one-dimensional.",
      "Filet Mignon": "The wine's malolactic-driven butter and toasted oak mirror the filet's own rendered fat and mild, almost dairy-like tenderness. Each sip extends the finish, making the meat read richer and longer on the palate than it would on its own.",
      "Grilled Caesar": "The wine's stone-fruit acidity cuts through the anchovy-and-char umami while its oak tannins lock onto the fat in the Caesar dressing. What comes back is a clean, savory brightness — the smoke on the romaine settles and the whole dish tastes more composed.",
      "Burrata": "Both the wine and the cheese are built on the same lactic, cream-forward foundation — the Chardonnay's buttery mouthfeel and the burrata's stracciatella interior are essentially speaking the same language. The wine's stone-fruit lift keeps the fat from sitting heavy, so each bite stays clean and fresh.",
      "House Wedge": "The wine's bright stone-fruit acidity slices through the blue cheese fat and the richness of the buttermilk dressing, while its body holds up against the cold, crisp iceberg. The result is a lengthened finish where the creamy dressing reads lighter and the fresh vegetal crunch comes forward.",
      "Creamed Spinach": "The wine's buttery malolactic character merges with the béchamel base in the spinach, doubling down on the dairy-fat midpalate. The oak's subtle vanilla note keeps that richness from becoming one-dimensional and gives the dish a faint sweetness it wouldn't have on its own.",
      "Au Gratin Potatoes": "The toasted oak and caramelized stone-fruit in the wine echo the browned cheese crust and the Maillard-developed edges of the gratin. The wine's acidity then lifts the heavy cream sauce so the potato layers taste defined rather than dense."
    }
  },

  // ── WINES — BY THE GLASS (RED) ────────────────────────────────────────────────

  {
    name: 'Lunaria Coste di Moro',
    category: 'wine-red',
    profile: ['Montepulciano','medium-bodied','dark-fruit','earthy','Italian','approachable'],
    price: '$12 / $48',
    excellent: ['Kansas City','Filet Mignon','Mushrooms','Grilled Caesar','Truffle Fries'],
    strong: ['Cowboy Ribeye','Brussels and Belly','Creamed Spinach','Au Gratin Potatoes'],
    works: ['House Wedge','Porterhouse','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut']
  ,
    pairingNotes: {
      "Kansas City": "The Montepulciano's dark cherry and iron-rich earthiness speak directly to the dry-aged, deeply seared crust of the Kansas City strip — both have that same mineral, blood-and-char backbone. The wine's firm tannins bind to the steak's dense muscle protein and soften as the fat renders on your tongue, making a tougher chew finish like silk.",
      "Filet Mignon": "The wine's dark fruit and earthy mid-palate provide the flavor contrast the filet's mild, buttery lean can't generate on its own — it's the boldness the cut is missing. The Montepulciano's medium body doesn't overpower the delicate texture; instead, the tannins frame each bite and the fruit lingers where the meat fades.",
      "Mushrooms": "The Montepulciano's forest-floor earthiness and dark fruit share the same glutamate-rich terroir as sautéed mushrooms, creating a near-seamless umami loop between the two. Together, they deepen each other — the wine tastes more structured, the mushrooms taste more mineral, and the finish lingers like something pulled straight from the ground.",
      "Grilled Caesar": "The char on the romaine produces the same Maillard compounds that give this Montepulciano its smoked-fruit edge, while the wine's acidity cuts through the anchovy-and-egg richness of the dressing. What the guest gets is a back-and-forth where each sip resets the palate and makes the next bite of Caesar taste cleaner and bolder at once.",
      "Truffle Fries": "The wine's earthy, dark-fruit core mirrors the 2-acetyl-1-pyrroline aromatics in black truffle oil, grounding what could otherwise be an overwhelming richness in the fries. When they land together, the truffle reads more defined — less greasy, more forest — and the wine picks up a savory depth it doesn't show on its own.",
      "Cowboy Ribeye": "The Montepulciano's firm tannins bind to the intramuscular fat in a heavily marbled bone-in ribeye, stripping the fatty coating from the palate and letting the char and beef minerality come forward. The result is a cleaner, longer finish on both — the steak tastes leaner than it is, and the wine tastes rounder than it pours.",
      "Brussels and Belly": "The wine's dark cherry and plum meet the caramelized sugars on the Brussels sprouts while its earthy backbone absorbs the smokiness from the pork belly, creating a continuous flavor thread between all three components. The slight bitterness of the sprouts keeps the wine's fruit from reading jammy, sharpening it into something more savory and precise.",
      "Creamed Spinach": "The Montepulciano's acidity cuts through the béchamel fat in creamed spinach the way a squeeze of lemon would, while the wine's earthy character finds common ground with the iron-mineral note of the cooked spinach. Each sip lifts the heaviness of the dish just enough that the next bite tastes fresh again.",
      "Au Gratin Potatoes": "The browned, caramelized dairy crust on au gratin shares the Maillard-derived lactone compounds that echo the wine's dark fruit, giving them a shared richness that builds rather than competes. The wine's acidity prevents the potato and cream from sitting heavy, and the finish is warm, long, and almost bread-like.",
      "House Wedge": "The wine's dark fruit and tannin run straight into the fat from the blue cheese and bacon, which softens the tannin's grip and brings out the Montepulciano's brighter, fresher edge. It's an unlikely reset — the cold crispness of the iceberg makes the wine taste more alive, and the wine makes the richness of the dressing feel lighter than it is.",
      "Porterhouse": "The Montepulciano's malic acid and dark cherry cut through the fat cap on the strip side while its earthiness latches onto the seared crust. Guests get a back-and-forth between the wine's fruit and the beef's rendered fat that keeps each bite tasting as clean as the first.",
      "Lardons": "The wine's rustic, iron-tinged tannins grab onto the cured pork fat the same way salt grabs flavor — amplifying the savory, smoky depth without adding sweetness. What comes back on the finish is a longer, meatier resonance from both."
    }
  },
  {
    name: 'Kermit Lynch Côtes du Rhône',
    category: 'wine-red',
    profile: ['Grenache-Syrah','medium-bodied','spice','red-fruit','earthy','Rhône','approachable'],
    price: '$12 / $48',
    excellent: ['Roast Half Chicken','Faroe Island Salmon','Mushrooms','Grilled Caesar','Kansas City'],
    strong: ['Filet Mignon','Brussels and Belly','Creamed Spinach','House Wedge','Sauteed Garlic Spinach'],
    works: ['Cowboy Ribeye','Porterhouse','Au Gratin Potatoes'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','G.D. Vajra Moscato d\'Asti']
  ,
    pairingNotes: {
      "Roast Half Chicken": "The Grenache's strawberry and dried herb character mirrors the fond and pan drippings on the roasted skin, while the Syrah component's white pepper lifts the savory fat. Together they make the chicken taste more roasted — deeper caramelization, cleaner finish.",
      "Faroe Island Salmon": "The wine's bright red-fruit acidity cuts the omega-rich fat in the salmon the way a squeeze of lemon would, and the Syrah's peppery spice gives the fish's delicate flesh a backbone it doesn't have on its own. The result is a pairing that makes the salmon feel simultaneously richer and lighter.",
      "Mushrooms": "The Grenache's earthy, garrigue-driven core shares the same fungal, forest-floor compounds as the mushrooms themselves — glutamates in the fungi pull the wine's savory mid-palate forward. Guests taste a single, unified wave of umami depth rather than food and wine taking turns.",
      "Grilled Caesar": "The char on the romaine creates bitter, smoky pyrazines that the wine's spice and red fruit ride against, while the anchovy paste in the dressing amplifies the Syrah's savory, cured-meat quality. What lands at the table is the Caesar tasting more composed and the wine tasting more structured.",
      "Kansas City": "The Kansas City's dense, firm muscle fiber needs the Grenache-Syrah's tannin and pepper to break through the chew, and the wine's red-fruit core gives the boldly seared crust a contrast that keeps the palate from going flat. Every bite resets the wine and every sip resets the beef.",
      "Filet Mignon": "The wine's soft tannins and red-fruit brightness stay just ahead of the filet's buttery tenderness without overwhelming the mild beef flavor — it's the Grenache's low tannin doing the work here, not extraction. The filet's clean, uncomplicated fat lets the wine's spice and fruit read as more complex than they would against a bolder cut.",
      "Brussels and Belly": "The Grenache's dried cherry and herbes de Provence speak directly to the caramelized char on the pork belly, while the wine's white pepper cuts through the rendered fat. Together they amplify the smoky-sweet contrast of the dish until the bitter Brussels finish pulls everything back into focus.",
      "Creamed Spinach": "The Syrah component brings an iron-tinged, savory backbone that mirrors the minerality in the cream reduction, and the wine's soft tannins keep the dairy fat from coating the palate. Each sip resets the richness so the next bite of spinach tastes just as vivid as the first.",
      "House Wedge": "The wine's bright red-fruit acidity cuts through the blue cheese fat and buttermilk in the dressing the same way a squeeze of lemon would, lifting the whole plate. What you get is a clean, almost refreshing finish that makes both the salad and the wine taste lighter and sharper.",
      "Sauteed Garlic Spinach": "Roasted garlic's sulfur compounds mellow in the pan and land in the same savory-sweet register as the Grenache's garrigue and olive tapenade notes. The pairing reads as one cohesive flavor rather than food and wine taking turns.",
      "Cowboy Ribeye": "The wine's medium body can handle the char crust but the ribeye's heavy intramuscular fat will soften the Syrah's peppercorn spice, so the pairing trades boldness for a rounder, fruit-forward finish. You still get the red fruit against the sear, just with less structural tension than a fuller Rhône would deliver.",
      "Porterhouse": "The strip side's tight grain and clean beef flavor let the wine's red-fruit and spice stay legible, though the tenderloin's lower fat content means the tannins will land slightly drier on that half of the plate. It works because the wine matches the strip's assertiveness without overwhelming the more delicate tenderloin.",
      "Au Gratin Potatoes": "The wine's acidity does real structural work against the Gruyère and cream, preventing the fat from flattening the palate, but the dish is rich enough that it slightly mutes the Syrah's peppery edge. The pairing is satisfying rather than electric — the wine keeps the potatoes from feeling heavy, and the potatoes make the wine taste softer."
    }
  },
  {
    name: 'Alexander Valley Homestead Red',
    category: 'wine-red',
    profile: ['red-blend','approachable','medium-bodied','fruit-forward','California'],
    price: '$13 / $52',
    excellent: ['Kansas City','Roast Half Chicken','Mushrooms','Filet Mignon','Grilled Caesar'],
    strong: ['Cowboy Ribeye','Brussels and Belly','Truffle Fries','House Wedge','Au Gratin Potatoes'],
    works: ['Porterhouse','Creamed Spinach','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Kansas City": "The blend's ripe dark cherry and cassis hit the same frequency as the Maillard crust on the strip, and its moderate tannins bind to the myoglobin in the lean muscle fiber the way a classic Cabernet would at twice the price. The result is a long, meaty finish where the beef and the fruit finish in the same breath.",
      "Roast Half Chicken": "The wine's ripe cherry and plum fruit mirrors the caramelized skin sugars from roasting, while its soft tannins won't overpower the delicate poultry fat. Together they create a savory-sweet loop where neither the wine nor the chicken feels heavier than the other.",
      "Mushrooms": "The red blend carries its own earthy, forest-floor undertone that locks onto the glutamates in sautéed mushrooms like a key in a lock. What the guest gets is a wave of deepened umami — the mushrooms taste meatier, the wine tastes more structured.",
      "Filet Mignon": "The wine's bright red fruit cuts through the butter-basted surface fat on the filet, giving the lean beef a lift it wouldn't have on its own. Each bite softens the wine's acidity just enough to let the fruit linger on the finish.",
      "Grilled Caesar": "The char on the romaine pulls out the wine's darker fruit notes — think blackberry rather than strawberry — while the anchovy-driven umami in the dressing amplifies the wine's savory backbone. The creamy dressing also coats the palate in a way that rounds any rough edges on the tannins.",
      "Cowboy Ribeye": "The ribeye's intramuscular fat needs tannin to cleanse the palate, and while this blend is medium-bodied, its fruit-forward acidity does the work of cutting through the richness between bites. It's a functional pairing — the wine keeps the fat from flattening the palate so every bite of that marbling tastes as good as the first.",
      "Brussels and Belly": "The pork belly's rendered fat and the caramelized sugars on the Brussels sprouts both reach for the wine's jammy fruit, while the sprouts' natural bitterness keeps the wine from reading as sweet. The smokiness in the dish pulls a subtle spice note out of the blend that you wouldn't catch on its own.",
      "Truffle Fries": "Truffle's 2,4-dithiapentane — the compound behind that funky, earthy punch — has a natural affinity for the forest-floor notes hiding underneath this wine's fruit layer. The fries' potato starch and salt soften the wine's tannins just enough to let the mid-palate fruit come forward and balance the richness.",
      "House Wedge": "The wine's acidity acts as a second acid source alongside the blue cheese dressing, and the two together brighten the cold, crisp iceberg in a way that makes the salad feel less heavy. The fresh bite of the lettuce scrubs the palate clean between sips, keeping the fruit in the wine tasting vivid throughout the course.",
      "Au Gratin Potatoes": "The wine's ripe berry fruit cuts through the heavy cream and Gruyère fat, while its soft tannins provide just enough grip to keep the richness from flattening. Guests get a lift of brightness after each forkful of potato that keeps them reaching for another bite.",
      "Porterhouse": "The fruit-forward profile bridges the sweet caramelization on the strip side while the medium-body holds its own against the tenderloin's cleaner fat. Together, the wine's mild tannin structure draws out the beef's umami without overwhelming the leaner cuts near the bone.",
      "Creamed Spinach": "The wine's red fruit acidity slices through the béchamel base and tempers the dairy weight that builds with each bite. What guests notice is a sudden freshness on the palate — the spinach's vegetal depth actually amplifies the wine's fruit on the finish.",
      "Lardons": "The wine's approachable fruit sweetness plays directly against the salt-cured, rendered pork fat, creating a sweet-savory oscillation that smoked and cured meats thrive on. The fat coats the palate, softening the wine's tannins and making it taste rounder than it actually is."
    }
  },
  {
    name: 'Scotto Cellars The Lost Chapters',
    category: 'wine-red',
    profile: ['red-blend','approachable','fruit-forward','soft','California','easy-drinking'],
    price: '$13 / $52',
    excellent: ['Kansas City','Roast Half Chicken','Mushrooms','Grilled Caesar','House Wedge'],
    strong: ['Filet Mignon','Brussels and Belly','Truffle Fries','Creamed Spinach','Au Gratin Potatoes'],
    works: ['Cowboy Ribeye','Porterhouse','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Kansas City": "The wine's soft tannins latch onto the strip's dense muscle fibers and protein, which firm tannins would dry out — here they extend the beefy finish instead. Guests experience the strip's bold, clean beef flavor amplified, with the wine's dark fruit filling in where the leaner cut pulls back.",
      "Roast Half Chicken": "The wine's soft, fruit-forward profile mirrors the Maillard browning on the roasted skin without competing with the white meat's more delicate savory notes. The result is a pairing where the chicken's roasted depth reads richer and the wine's fruit comes across more savory — each shifting the other's register.",
      "Mushrooms": "The wine's dark fruit shares the same glutamate-driven savory lane as sautéed mushrooms — both are built on umami, so they reinforce rather than contrast. Guests get a long, earthy-fruit finish where it's genuinely hard to tell where the mushroom ends and the wine begins.",
      "Grilled Caesar": "The char on the romaine introduces a bitter, smoky note that the wine's soft fruit rounds off, while the anchovy and Parmesan umami in the dressing pulls the wine's savory undertones forward. The creaminess of the Caesar coats the palate and gives the wine's finish more length than it would have on its own.",
      "House Wedge": "The wine's ripe berry fruit cuts through the fat in the blue cheese dressing the same way acid does, while its soft tannins don't fight the cool, creamy texture of the wedge. The result is a bright, refreshing back-and-forth where neither the salad nor the wine feels heavy.",
      "Filet Mignon": "The wine's plum and dark cherry fruit mirrors the mild, almost sweet character of the filet, and its low tannin structure won't overpower the delicate muscle fiber of a cut that has very little intramuscular fat to buffer grip. Every bite of the filet feels silkier because the wine isn't asking it to work.",
      "Brussels and Belly": "The wine's jammy red fruit latches onto the caramelized sugars in the roasted Brussels while its soft tannins find traction against the rendered pork belly fat. That smoky, bitter char on the sprouts snaps the fruit forward in the wine, making it taste brighter than it does on its own.",
      "Truffle Fries": "The wine's ripe fruit aromatics create contrast against the earthy, sulfur-rich 2-acetylthiazole compounds in the truffle, essentially framing that deep umami note so it reads more distinctly on the palate. The fries' salt and fat soften the wine's body just enough that the whole combination feels round and indulgent without tipping into heaviness.",
      "Creamed Spinach": "The wine's bright red fruit cuts through the butterfat and cream in the dish the way a squeeze of lemon would, providing lift where the dairy wants to coat and linger. That contrast keeps the palate from fatiguing, so each bite of the spinach tastes as rich as the first.",
      "Au Gratin Potatoes": "The Maillard-browned crust on the gratin echoes the toasty, lightly oaked notes in the wine's finish, while the acidity in the blend slices through the melted cheese and cream sauce to refresh the palate between bites. The pairing makes the potatoes feel lighter and makes the wine feel rounder.",
      "Cowboy Ribeye": "The ribeye's abundant intramuscular fat and char need tannin structure and acidity to cut through — this wine's soft profile does that work gently rather than aggressively, which means the beef's richness stays front and center instead of getting overpowered. It's a relaxed pairing rather than a precise one, but the wine's fruit holds its own against the bold, smoky crust.",
      "Porterhouse": "The porterhouse gives you two different tests in one cut — the strip's tight grain and bold beef flavor want more tannin than this wine carries, while the tender filet side aligns naturally with its soft, fruit-forward profile. The wine performs best when you're working through the filet side, and holds its own against the strip without disappearing.",
      "Lardons": "The wine's jammy red fruit and soft tannins cut through the rendered pork fat while its subtle oak picks up the cured, smoky edges of the lardon. Together they hit a sweet-savory balance where neither the richness nor the fruit overpowers — just a clean, lingering finish."
    }
  },
  {
    name: 'Corazón del Sol Malbec',
    category: 'wine-red',
    profile: ['Malbec','bold','plum','dark-fruit','smooth','Argentina'],
    price: '$15 / $60',
    excellent: ['Kansas City','Cowboy Ribeye','Bone Marrow','Mushrooms','Truffle Fries'],
    strong: ['Porterhouse','Filet Mignon','Brussels and Belly','Lardons','Creamed Spinach'],
    works: ['Grilled Caesar','Au Gratin Potatoes','Shrimp Bisque'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut']
  ,
    pairingNotes: {
      "Kansas City": "The Malbec's firm tannins bind to the myoglobin-rich proteins in this lean, well-worked cut, softening the grip of both the wine and the meat's dense chew. What you get is a meatier, rounder version of each — the dark plum fruit amplifies the beefy savoriness without the fat of a ribeye needed to do the work.",
      "Cowboy Ribeye": "The intramuscular fat in the ribeye coats the palate and physically softens the Malbec's tannins, while the wine's dark plum and blackberry fruit ride the char from the crust. The result is a longer, richer finish where the fat becomes the bridge between fruit and fire.",
      "Bone Marrow": "The Malbec's acidity cuts through the oleic-heavy fat of the marrow, preventing it from coating the palate, while the wine's dark fruit mirrors the smoky, umami depth roasting brings out. Together they create a savory-sweet resonance that makes the marrow feel lighter and the wine feel almost meaty.",
      "Mushrooms": "The glutamates in the mushrooms amplify the Malbec's savory mid-palate, turning the wine's dark fruit into something earthier and more complex. What the guest experiences is a kind of umami loop — each component deepens the other, with the wine finishing long and almost broth-like.",
      "Truffle Fries": "The aromatic sulfur compounds in truffle attach to the same sensory receptors that pick up the earthy, fermented complexity in the Malbec, creating a shared aromatic language between the two. The fat from the fry holds the wine's tannins at bay just long enough for that truffle-and-dark-fruit echo to settle in.",
      "Porterhouse": "The Porterhouse gives you two textures in one cut — the tighter strip side grips the Malbec's tannins like the Kansas City does, while the tenderloin side lets the dark fruit read as sweeter and softer. The wine essentially shapeshifts across the plate, showing a different face with each bite.",
      "Filet Mignon": "The filet's low fat content means the Malbec's tannins aren't being buffered, so the pairing leans on contrast — the wine's bold plum and dark fruit frame the filet's subtle, buttery tenderness the way a sauce would. The guest gets richness from the wine that the cut itself doesn't provide, making each sip act almost like a finishing element.",
      "Brussels and Belly": "The Malbec's dark plum fruit and soft tannin wrap around the caramelized char on the belly and the bitter edge of the Brussels, while the wine's own sweet fruit mirrors the glaze. Together, smoke and sweetness amplify each other and the bitterness on both sides cancels out, leaving a clean, savory finish.",
      "Lardons": "Malbec's plum-forward fruit and moderate acidity cut through rendered pork fat the same way a squeeze of citrus would — by contrast, not echo. The fat coats the palate and softens the wine's tannin, making the dark fruit read richer and longer.",
      "Creamed Spinach": "The Malbec's tannin structure binds with the milk proteins in the cream sauce, softening both the wine's grip and the dish's richness at the same time. What's left is a savory, almost chocolatey mid-palate where the iron notes of the spinach and the wine's dark fruit meet.",
      "Grilled Caesar": "Char on the romaine and the anchovy-driven umami in the dressing act as a flavor anchor for the Malbec's bold fruit — the wine's tannin needs that savory weight or it reads harsh. The smoky bitterness from the grill softens the wine's edges and lets the plum fruit come forward on the finish.",
      "Au Gratin Potatoes": "The Gruyère's nutty, browned-crust notes create a fat-meets-tannin bridge with the Malbec — cream and cheese soften the wine's structure while the wine's acidity keeps the richness from feeling heavy. The pairing reads as more savory than either element alone.",
      "Shrimp Bisque": "The bisque's lobster stock reduction and roasted shellfish sweetness pull the Malbec's plum fruit into a dark, almost jammy contrast — the wine's tannin is the only friction point, and the cream in the bisque smooths that out quickly. The result is a brief, interesting tension between oceanic sweetness and dark fruit before the cream settles everything."
    }
  },
  {
    name: 'Fento Ollo de Sapo Mencía',
    category: 'wine-red',
    profile: ['Mencía','medium-bodied','earthy','floral','mineral','Spanish','unique'],
    price: '$15 / $60',
    excellent: ['Roast Half Chicken','Faroe Island Salmon','Mushrooms','Grilled Caesar','House Wedge'],
    strong: ['Filet Mignon','Kansas City','Sauteed Garlic Spinach','Brussels and Belly','Escargot'],
    works: ['Cowboy Ribeye','Shrimp Bisque','Burrata'],
    avoid: ['Crab Cake','Seared Scallops','The Tomahawk','Laurent Perrier Le Cuvée Brut']
  ,
    pairingNotes: {
      "Roast Half Chicken": "Mencía's earthy, violet-tinged acidity cuts through chicken fat the way a light jus would — by lifting the roasted savory notes rather than competing with them. The wine's low tannin lets the crispy skin and rendered fat dominate the texture while its red fruit adds a brightness that makes the roasted herb crust pop.",
      "Faroe Island Salmon": "Mencía's floral lift and high natural acidity behave like a squeeze of lemon on the salmon's omega-rich fat — slicing through it cleanly without overwhelming the fish's delicate flavor. The earthiness in the wine echoes any char or crust on the salmon, and the pairing leaves the palate feeling light despite how rich both components are on their own.",
      "Mushrooms": "Mencía carries a wild, forest-floor earthiness that lands on the exact same mycological frequency as roasted mushroom — both are driven by the same glutamate compounds that signal deep umami. Together, the wine's floral lift opens up first, then the two earthy cores stack and the finish stretches long and savory.",
      "Grilled Caesar": "The wine's red-fruit brightness and violet florality cut through the fat in the anchovy-laced dressing while its earthy backbone matches the char on the romaine. What you get is a back-and-forth — smoke, then fruit, then smoke again — that keeps the richness from sitting heavy.",
      "House Wedge": "Mencía's natural acidity does the same job as a squeeze of lemon on the blue cheese, slicing through the fat and keeping each bite tasting fresh. The wine's light tannins provide just enough grip to give the creamy dressing somewhere to land, so the whole thing finishes clean.",
      "Filet Mignon": "Mencía's medium body and soft tannins match the filet's fine-grained, lean protein without overwhelming the delicate beef flavor — where a bigger red would bulldoze, this wine steps aside and lets the butter sauce lead. The wine's red cherry and earth circle back on the finish and give the mild beef a little more dimension.",
      "Kansas City": "The Kansas City's firmer texture and beefy intensity need a wine with enough structure to stand up, and Mencía's earthy tannins provide exactly that kind of backbone without adding heat. The wine's darker fruit registers as a counterpoint to the strip's savory char, keeping each bite tasting defined rather than flat.",
      "Sauteed Garlic Spinach": "Mencía has a ferrous, mineral quality — almost like iron — that mirrors the natural minerality in cooked spinach and gets amplified by the garlic's allicin. On the palate, the wine's florality lifts the dish out of heaviness and makes something simple taste surprisingly complete.",
      "Brussels and Belly": "The wine's red fruit and violet aromatics land against the Brussels' bitter glucosinolates as a sweet contrast, while its earthy core locks onto the rendered pork fat in the belly. That bitter-sweet-smoky triangle keeps cycling with each sip, so neither the dish nor the wine runs out of interest.",
      "Escargot": "Mencía's herbal, slightly wild edge speaks directly to the parsley and garlic butter that defines escargot — both share that green, savory aromatic register. When they meet, the wine's acidity cuts the richness of the butter just enough that the garlic and herb flavors come forward clean rather than getting buried in fat.",
      "Cowboy Ribeye": "The Mencía's iron-rich, graphite earthiness and dried violet aromatics cut right through the intramuscular fat on the cowboy cut, acting almost like an acid scrub. Each sip resets the palate, making the next bite of marbled beef taste cleaner and more intensely beefy than the last.",
      "Shrimp Bisque": "The wine's floral top notes — think dried lavender and rose hip — mirror the natural sweetness in the shrimp shells, while its medium acidity thins the perception of the bisque's cream without stripping it. The result is a richer, longer finish on the seafood that the wine alone wouldn't give you.",
      "Burrata": "The Mencía's earthy, slate-driven minerality creates a contrast against the lactic freshness of the burrata, the way a squeeze of lemon would — brightening the milk fat without overpowering it. On the palate, the wine's low tannin lets the cream coat your mouth while the floral finish lingers cleanly over it."
    }
  },
  {
    name: 'Lingua Franca Avni Pinot Noir',
    category: 'wine-red',
    profile: ['light','fruity','cherry','silky','approachable','Oregon'],
    price: '$18 / $72',
    excellent: ['Filet Mignon','House Wedge','Shrimp Bisque','Prime Tartare','Crab Cake','Seared Scallops'],
    strong: ['Kansas City','Faroe Island Salmon','Roast Half Chicken','Creamed Spinach','Brussels and Belly'],
    works: ['Cowboy Ribeye','Bone Marrow','Grilled Caesar'],
    avoid: ['The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Filet Mignon": "The wine's maraschino cherry and red plum fruit speak directly to the myoglobin-forward flavor of a lean, minimally seasoned filet, and the silky tannin structure mirrors the butter-tender texture of the cut itself. Together, they amplify each other's softness — the beef gets juicier, the wine gets rounder, and neither fights for attention.",
      "House Wedge": "The Pinot's bright cherry acidity slices through the blue cheese and bacon fat on the wedge the same way the red wine vinegar in a good house dressing would, while its light body keeps it from steamrolling the cold, crisp iceberg. What you get is a mouthful that feels simultaneously fresh and rich — the salad's creaminess softened, the wine's fruit lifted.",
      "Shrimp Bisque": "The wine's red fruit and silky texture mirror the natural sweetness of the shrimp, while the Pinot's gentle acidity cuts the cream just enough to keep the bisque from feeling heavy. The combination elongates the savory-sweet finish on the seafood and pulls out a depth the bisque doesn't quite reach on its own.",
      "Prime Tartare": "The tartare's glutamate-heavy umami and bright shallot sharpness call for something with both fruit and enough acidity to stand up to raw beef fat — the Avni's cherry and forest floor do exactly that without tannin that would clash with the meat's delicate raw texture. The wine actually amplifies the mineral, iron-edged quality of the prime beef, making the tartare taste more intensely of itself.",
      "Crab Cake": "The crab's natural sweetness and the crispy sear on the cake find a mirror in the Pinot's ripe red fruit and the faint toasty quality from its Willamette Valley oak aging. The wine's acidity lifts the richness of the binder and any aioli on the plate, keeping the crab's delicate sweetness front and center rather than buried under fat.",
      "Seared Scallops": "The wine's bright malic acidity and red cherry fruit mirror the natural sweetness of the scallop's glycogen, while the silky, low-tannin body won't overpower the delicate sear. Together, they create a clean, sweet-savory finish where neither the food nor the wine disappears.",
      "Kansas City": "The Pinot's cherry fruit and light body act as a palate reset against the Kansas City's dense, iron-rich lean muscle — the contrast in weight is the point. Each sip lifts the fat and char from the palate so the next bite of beef tastes as bold as the first.",
      "Faroe Island Salmon": "The wine's red fruit acidity cuts through the salmon's high omega-3 fat content the same way a squeeze of lemon would, while the silky tannin structure mirrors the fish's own buttery texture. The result is a pairing where the salmon tastes cleaner and the wine tastes rounder.",
      "Roast Half Chicken": "Roasted poultry produces Maillard browning compounds — toasted, savory, slightly nutty — that echo the earthy, forest-floor undertones in this Pinot, while the wine's cherry brightness lifts the rendered chicken fat off the palate. Guests get a bite that finishes longer and cleaner than either delivers on its own.",
      "Creamed Spinach": "The wine's natural acidity works against the heavy cream and butter fat in the spinach the way a squeeze of citrus would — cutting richness without adding sweetness. That friction keeps the dish from going flat on the palate and gives the wine's fruit a chance to actually read through the dairy.",
      "Brussels and Belly": "The caramelized, bitter edges on the Brussels sprouts and the smoky pork belly fat are both bridged by the Pinot's red fruit — cherry has a natural affinity for smoke and bitter char the way cranberry sauce works with dark meat. The sweetness in the belly glaze pulls the wine's fruit forward, and the bitterness of the Brussels keeps it from reading as jammy.",
      "Cowboy Ribeye": "This is a contrast pairing — the ribeye's heavy intramuscular fat and aggressive char are big enough to expose the Pinot's lightness, but that lightness is exactly what makes it work as a palate cleanser between bites. The wine won't stand up to the steak so much as it resets the palate for it, keeping each bite tasting like the first.",
      "Bone Marrow": "Bone marrow is almost pure lipid, and the Pinot's bright acidity is the only structural element that can cut through that fat load without a high-tannin red overwhelming the marrow's subtle umami. Guests get a fleeting savory-sweet moment where the wine's cherry fruit and the marrow's richness briefly align before the acidity wipes the slate clean.",
      "Grilled Caesar": "The wine's bright cherry acidity cuts through the anchovy-driven umami and charred romaine, while its silky tannins soften against the creamy Parmesan dressing. Together, the smoke from the grill lifts the fruit forward, and the Caesar's bold salinity makes the wine taste rounder and more generous than it does on its own."
    }
  },
  {
    name: 'Fisher Unity Pinot Noir',
    category: 'wine-red',
    profile: ['Pinot-Noir','medium-bodied','cherry','earthy','Oregon','approachable'],
    price: '$19 / $76',
    excellent: ['Faroe Island Salmon','Roast Half Chicken','House Wedge','Filet Mignon','Crab Cake'],
    strong: ['Seared Scallops','Grilled Caesar','Prime Tartare','Shrimp Bisque','Sauteed Garlic Spinach'],
    works: ['Kansas City','Lobster Mac','Burrata'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Faroe Island Salmon": "The wine's earthy undertones and red fruit mirror the way fatty salmon develops iron-rich depth when seared, and its medium acidity acts like a squeeze of lemon — cutting through the lipid weight without stripping the fish's richness. The guest gets a clean finish where neither the wine nor the salmon lingers too long on the palate.",
      "Roast Half Chicken": "The Maillard crust on the chicken shares the same caramelized, savory register as the wine's earthy cherry core, and the moderate tannin structure grips the roasted skin fat just enough to refresh the palate. What the guest tastes is a seamless loop — the wine makes the chicken taste more roasted, and the chicken makes the wine taste more like fruit.",
      "House Wedge": "The wine's bright malic acidity meets the cold, crisp iceberg and cuts through the blue cheese or buttermilk dressing the same way citrus would, while the earthy backbone keeps it from feeling too light against the richness of the dressing. The contrast between the chilled, creamy wedge and the room-temperature wine creates a back-and-forth on the palate that keeps both feeling fresher.",
      "Filet Mignon": "Filet has almost no intramuscular fat to clash with tannin, so the wine's soft structure never turns grippy or bitter against the meat — instead, the cherry fruit amplifies the mild, clean beef flavor the way a red wine pan sauce would. The guest experiences the filet tasting more expressive and the wine tasting more savory, each pulling something out of the other that neither has alone.",
      "Crab Cake": "The wine's low tannin and red fruit let the sweet, delicate crab flavor come forward rather than overwhelm it, and the earthy finish bridges the gap between the ocean brine in the crab and the crispy, pan-fried crust. On the palate, the acidity lifts the richness of the binder — whether it's aioli or butter — and leaves the guest with a clean, bright finish.",
      "Seared Scallops": "The caramelized crust on a hard-seared scallop produces the same Maillard compounds found in the wine's toasted, earthy edge, creating a flavor echo that deepens both. The wine's acidity then cuts the glycine-rich sweetness of the scallop's interior, so each bite resets cleanly and the guest keeps tasting the scallop as if it were the first one.",
      "Grilled Caesar": "The charred romaine introduces a bitter, smoky carbon note that the wine's earthy backbone absorbs rather than fights, while the anchovy and Parmesan umami makes the cherry fruit in the Pinot read as darker and more concentrated. The guest gets a pairing where the salad tastes less like a salad and the wine tastes less like fruit — both shift toward something more complex and savory.",
      "Prime Tartare": "The wine's bright malic acidity and iron-tinged earthiness mirror the raw beef's myoglobin-rich depth while its low tannin keeps the tartare's hand-cut texture front and center. Together they create a savory loop where the cherry fruit lifts the yolk-and-caper richness without cutting through it.",
      "Shrimp Bisque": "The Pinot's red fruit and sous-bois earthiness bridge to the bisque's mirepoix base and caramelized shellfish shells, two things built from the same roasted-vegetable foundation. On the palate the wine's moderate acidity slices through the cream and pulls the sweet prawn flavor long past the finish.",
      "Sauteed Garlic Spinach": "The wine's forest-floor earthiness speaks directly to the spinach's iron-mineral character, and the garlic's maillard-browned sugars mirror the Pinot's subtle oak spice. Each sip after a bite resets the palate with bright cherry that keeps the garlic from going sharp.",
      "Kansas City": "The strip's firm, dense muscle fiber needs the Pinot's soft tannin structure to work through the fat without overwhelming the lean beefy core — it's a grip-without-weight situation. The cherry mid-palate lands between bites and brightens the crust's char just enough to keep the pairing lively rather than heavy.",
      "Lobster Mac": "The wine's earthy red fruit cuts against the butter-fat richness of the béchamel while its low tannin avoids the metallic clash that bigger reds trigger with lobster's iodine sweetness. What you get is a moment where the Gruyère or cheddar crust reads almost meaty, pulling the dish closer to the wine's savory register.",
      "Burrata": "The Pinot's delicate fruit and silky mouthfeel match the burrata's stracciatella cream so neither one overpowers — it's a textural echo more than a flavor collision. That gentle cherry brightness lifts the milky fat and makes the fresh cheese taste cleaner and longer on the finish."
    }
  },
  {
    name: 'Château de Rouillac',
    category: 'wine-red',
    profile: ['Bordeaux-blend','structured','cedar','dark-fruit','medium-full','French'],
    price: '$20 / $80',
    excellent: ['Filet Mignon','Kansas City','Mushrooms','Truffle Fries','Grilled Caesar'],
    strong: ['Cowboy Ribeye','Porterhouse','Creamed Spinach','Brussels and Belly','Au Gratin Potatoes'],
    works: ['House Wedge','Bone Marrow','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut']
  ,
    pairingNotes: {
      "Filet Mignon": "The Bordeaux's pencil-shaving cedar and cassis tannins latch onto the filet's lean myofibrillar protein, giving the meat grip it doesn't have on its own without burying its natural butter-tender character. The result is a longer, more structured bite where the wine's dark fruit resolves into the beef's own subtle sweetness.",
      "Kansas City": "The strip's intramuscular fat and firm chew give the wine's structured tannins something to bind to, softening the Cabernet-forward backbone while the beef's deep Maillard crust echoes the cedar and dark plum in the blend. Together they build into a sustained savory finish that neither delivers alone.",
      "Mushrooms": "The wine's dark fruit and cedar tannins lock onto the glutamates in the mushrooms, creating a savory feedback loop between the two. Together, they push each other deeper — the earthiness in the glass amplifies the fungi's umami, and the mushrooms soften the wine's structure into something almost silky.",
      "Truffle Fries": "The aromatic sulfur compounds in the truffle resonate with the cedar and forest-floor notes in this Bordeaux blend, pulling out a woodsy depth that neither has alone. The fat in the fries coats the palate just long enough for the wine's dark fruit to land clean on the finish.",
      "Grilled Caesar": "The char on the romaine and the anchovy's fermented salinity mirror the wine's structured tannins and dark, slightly smoky fruit. That bitterness from the grill softens the wine's grip, and the creamy dressing gives the Cabernet-driven tannins something to sink into rather than scratch against.",
      "Cowboy Ribeye": "The wine's firm tannins bind to the intramuscular fat in a well-marbled ribeye, breaking it down on the palate and releasing a rush of beefy, savory depth. The cedar and dark fruit act as a brightness against all that richness, keeping each bite from feeling heavy.",
      "Porterhouse": "The Porterhouse gives the wine two conversations at once — the strip's tighter grain and mineral beefiness echo the structured tannins, while the tenderloin's butter-soft fat softens the wine's edge. The wine's dark plum and cedar ride the contrast between both sides of the cut all the way through the finish.",
      "Creamed Spinach": "The dairy fat in the cream coats the palate and tempers the wine's tannin grip, while the natural bitterness of the spinach aligns with the wine's structured, slightly austere backbone. What you get is a rounder, longer finish — the wine tastes more generous, and the spinach tastes less sharp.",
      "Brussels and Belly": "The caramelized sugars and Maillard crust on the pork belly mirror the dark fruit in the wine, while the bitter char on the Brussels cuts through the fat and echoes the wine's tannic structure. That sweet-bitter-smoke interplay gives the Bordeaux blend a savory anchor it's built for.",
      "Au Gratin Potatoes": "The rendered cheese and cream in the gratin soften the wine's tannins on contact, while the Gruyère's nutty, slightly fermented edge picks up the cedar and earth in the Bordeaux blend. The starch in the potato acts as a reset between sips, keeping the wine tasting fresh against all that richness.",
      "House Wedge": "The wine's grippy tannins cut through the buttermilk fat in the blue cheese dressing, while the cedar and dark fruit lift against the cold, crisp iceberg. The contrast snaps everything clean on the palate, leaving the guest ready for the next bite.",
      "Bone Marrow": "The structured tannins in this Bordeaux blend bind to the lipids in the roasted marrow, doing the work that acid would do in a leaner wine. What lands on the palate is a long, savory finish where the cedar and dark fruit become the seasoning.",
      "Lardons": "The rendered pork fat coats the palate in a way that softens the wine's tannins, while the char and salt on the lardons mirror the cedar and black fruit in the Bordeaux. The guest gets a meatier, rounder version of the wine than they'd find on its own."
    }
  },
  {
    name: 'St Supéry Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['Cab','medium-full','blackcurrant','cedar','approachable','Napa'],
    price: '$20 / $80',
    excellent: ['Kansas City','Filet Mignon','Truffle Fries','Mushrooms','Creamed Spinach'],
    strong: ['Cowboy Ribeye','Porterhouse','Brussels and Belly','Au Gratin Potatoes','Grilled Caesar'],
    works: ['House Wedge','Bone Marrow','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Kansas City": "The blackcurrant and cedar in this Cab lock onto the myoglobin-rich muscle fibers of the strip's firm chew, amplifying the beefy depth rather than fighting it. The result is a longer, darker finish where the steak's bold character and the wine's structure resolve into a single sustained note.",
      "Filet Mignon": "The Cab's medium tannins provide just enough grip to contrast the filet's butter-soft texture without overwhelming its mild, clean beef flavor. That tension draws out a sweetness in both — the blackcurrant brightens, and the meat's natural richness reads more luxurious.",
      "Truffle Fries": "The 2-acetylpyrazine earthiness in the truffle oil resonates directly with the cedar and dark fruit in the Cab, two expressions of the same aromatic family. The fat in the fries rounds the tannins, and what the guest tastes is an earthy, indulgent finish that lingers well past the last fry.",
      "Mushrooms": "The glutamates in the mushrooms amplify the wine's savory backbone through umami synergy, making the Cab taste fuller and the mushrooms taste meatier than either does alone. It's a loop — each makes the other taste like more of itself.",
      "Creamed Spinach": "The dairy fat and cream in the spinach coat the palate and mute the Cab's tannins, letting the blackcurrant fruit sit forward in a way it can't against red meat. The guest gets a noticeably fruit-forward pour alongside the savory richness of the cream.",
      "Cowboy Ribeye": "The Cab's firm tannins bind to the intramuscular fat in this heavily marbled cut, while its blackcurrant and cedar notes mirror the char from the grill. That interaction strips the fat from your palate and lets the beef's depth hit clean on the finish.",
      "Porterhouse": "The Cab's tannin structure speaks to both sides of this cut — cutting the fat cap on the strip and amplifying the iron-rich lean of the tenderloin through contrast. You get a longer, more layered finish than either would give you alone.",
      "Brussels and Belly": "The blackcurrant in the Cab bridges the sweet glaze on the belly, while its cedar-driven tannins grab onto the char and temper the bitterness from the caramelized Brussels leaves. The result is a back-and-forth between sweet, smoke, and fruit that keeps evolving through the sip.",
      "Au Gratin Potatoes": "The Cab's acidity cuts through the butterfat and aged cheese in the gratin, preventing the dish from sitting heavy on the palate. What comes through is the potato's starch sweetness lifted by the wine's dark fruit, turning a rich side into something that actually refreshes between bites.",
      "Grilled Caesar": "The charred romaine pulls out the cedar and smoky graphite notes in the Cab, while the anchovy-driven umami in the dressing amplifies the wine's savory mid-palate. Together they hit a savory-smoky register that makes both taste more complex than either does on its own.",
      "House Wedge": "The Cab's acidity slices through the blue cheese dressing's fat content and resets the palate, while the wine's blackcurrant softens the sharp tang of the cheese without muting it. The iceberg's water content keeps the wine's tannins from going grippy, so it stays easy through the whole salad.",
      "Bone Marrow": "The marrow's intense lipid richness would normally flatten a wine, but the Cab's tannins latch onto that fat directly and carry it off the palate, letting the wine's dark fruit and cedar come through clean. What you get is a fleeting moment where the marrow's umami depth and the wine's structure stack on each other before the finish clears.",
      "Lardons": "The rendered pork fat and salt in the lardons pull the Cab's fruit forward while softening its tannins, making the wine taste rounder and riper mid-sip. The blackcurrant then rebounds and cuts through any residual fat, leaving the palate primed for the next bite."
    }
  },
  {
    name: 'Quilt Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['Cab','approachable','jammy','smooth','Napa','fruit-forward'],
    price: '$22 / $88',
    excellent: ['Kansas City','Filet Mignon','Truffle Fries','Mushrooms','Creamed Spinach'],
    strong: ['Cowboy Ribeye','Porterhouse','Brussels and Belly','Bone Marrow','Au Gratin Potatoes'],
    works: ['House Wedge','Grilled Caesar','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut']
  ,
    pairingNotes: {
      "Kansas City": "The Quilt's dark fruit and soft tannins lock onto the bold, beefy crust of the Kansas City strip, using the wine's jamminess to soften the firm chew of a leaner cut. Together they create a back-and-forth where the meat's sear keeps pulling more fruit out of the wine with every bite.",
      "Filet Mignon": "The Quilt's approachable tannins won't overpower the filet's delicate texture — instead, the wine's blackberry and plum notes layer on top of the butter-soft meat without masking it. What the guest gets is the filet's clean, mild richness extended and deepened by the wine's fruit on the finish.",
      "Truffle Fries": "The 2-acetyl-1-pyrroline compounds driving truffle's earthy funk find a mirror in the Quilt's dark fruit and subtle oak, which amplifies rather than fights the umami depth of the truffle oil. The result is a finish that's longer and more savory than either the fries or the wine deliver on their own.",
      "Mushrooms": "Glutamates in the mushrooms trigger the same savory depth that the Quilt's tannins are already primed to meet, creating an umami loop between the wine and the sautéed fungi. The guest experiences a richness that feels almost meaty — like the mushrooms have taken on the weight of a full protein.",
      "Creamed Spinach": "The fat in the cream coats the palate and rounds out any remaining structure in the Quilt's tannins, while the wine's dark fruit cuts through the dairy richness to keep the dish from feeling heavy. The pairing cleans itself up — each sip resets the palate for the next bite.",
      "Cowboy Ribeye": "The ribeye's intramuscular fat binds to the Quilt's tannins and strips some of the astringency, leaving behind the wine's core of black cherry and vanilla against the char. It's a classic fat-tannin handshake, but the Quilt's smooth profile keeps it from turning grippy on the long finish of a well-marbled cut.",
      "Porterhouse": "The Quilt bridges the porterhouse's two personalities — the jammy fruit softens the strip side's firm texture while the wine's body holds its own against the ribeye-adjacent richness of the tenderloin side. Guests eating across the bone get a wine that recalibrates with every bite.",
      "Brussels and Belly": "The belly's rendered fat and smoke char hit the Quilt's tannins the same way a ribeye would, while the caramelized Brussels bring a bittersweet note that echoes the wine's dark fruit and keeps the pairing from going one-dimensional. The smoky pork fat lingers, and the wine's softness keeps it from turning heavy on the palate.",
      "Bone Marrow": "The jammy dark fruit and soft tannins in the Quilt cut through the fat of the roasted marrow while its oak-driven vanilla notes sync with the meat's deep, smoky umami. Together they create a rich, almost dessert-like savory finish that lingers on the palate.",
      "Au Gratin Potatoes": "The Quilt's ripe cassis and gentle tannin structure give the dairy fat in the gratin something to grip, while the wine's touch of oak mirrors the browned, caramelized crust on top. The result is a round, indulgent mouthful where neither the wine nor the dish feels too heavy.",
      "House Wedge": "The Quilt's jammy fruit acts as a counterweight to the salty blue cheese and cool iceberg, while its soft acidity refreshes through each creamy bite. Guests get a bright, palate-cleansing moment that makes both the salad and the next sip taste sharper and cleaner.",
      "Grilled Caesar": "The char on the grilled romaine pulls out the oak and subtle smokiness in the Quilt, while the anchovy-driven umami in the Caesar dressing amplifies the wine's fruit depth. What lands on the palate is a bolder, more savory version of both — the wine suddenly feels richer, the salad more substantial.",
      "Lardons": "The rendered pork fat and salt in the lardons soften the Quilt's tannins on contact, letting the wine's dark cherry and plum come forward rather than drying out. The guest gets a smooth, almost silky interaction where the wine's fruit and the lardons' smokiness trade off finish."
    }
  },
  {
    name: 'Scavino Barolo',
    category: 'wine-red',
    profile: ['bold','tannic','earthy','cherry','leather','structured','Piedmont'],
    price: '$25 / $100',
    excellent: ['Filet Mignon','Bone-In Filet','Kansas City','The Tomahawk','Truffle Fries','Bone Marrow','Grilled Caesar'],
    strong: ['Cowboy Ribeye','Porterhouse','Brussels and Belly','Lardons','Creamed Spinach','Mushrooms'],
    works: ['House Wedge','Shrimp Bisque','Au Gratin Potatoes','Chocolate Brownie','Cheesecake','Creme Brulee'],
    avoid: ['Prime Tartare','Crab Cake','Seared Scallops','Burrata','G.D. Vajra Moscato d\'Asti']
  ,
    pairingNotes: {
      "Filet Mignon": "Barolo's high tannin and bright Nebbiolo acidity bind to the lean muscle protein in the filet, softening on the palate and releasing the wine's dried cherry and forest floor in exchange. What the guest experiences is textural transformation — the filet turns more supple, the wine more plush, as they work through each other.",
      "Bone-In Filet": "The bone adds collagen and a deeper mineral quality to the meat that echoes the Barolo's earthy, iron-tinged core, while the wine's firm tannins find purchase in the slightly richer fat channel near the bone. Together they hit a savory, almost rustic register that makes both feel more complete than either does alone.",
      "Kansas City": "The Kansas City's firm, beefy texture and assertive fat cap demand a wine with structural backbone, and the Barolo's grippy tannins and high acidity cut through without backing down. On the palate, the wine's dried cherry and tobacco meet the strip's bold, grilled-meat funk in a pairing that feels equally matched — nothing gets lost.",
      "The Tomahawk": "Nebbiolo's firm tannins bind to the intramuscular fat in a 45-day dry-aged cut, acting as a palate cleanser between each bite rather than fighting the richness. What the guest gets is a loop — the wine's dried cherry and tar open up the beef's iron-forward depth, and the fat softens the wine's grip in return.",
      "Truffle Fries": "The earthy, forest-floor quality of Nebbiolo — rooted in the Langhe's iron-rich clay soils — speaks directly to the 2,4-dithiapentane compounds responsible for black truffle's signature funk. Both elements amplify each other so the truffle reads louder on the palate than it would without the wine.",
      "Bone Marrow": "Barolo's high acidity cuts through the oleic-rich fat of bone marrow the way a squeeze of lemon would, keeping each scoop from coating the palate and shutting down flavor. The wine's dried cherry and smoke then fold into the marrow's savory depth, turning a rich bite into something that lingers cleanly.",
      "Grilled Caesar": "The char on romaine produces Maillard compounds that echo Barolo's roasted tobacco and tar notes, while the anchovy-driven glutamates in the Caesar dressing deepen the wine's fruit. The guest tastes a savory, smoky conversation between the two — neither the salad nor the wine feels like a supporting player.",
      "Cowboy Ribeye": "Nebbiolo's grippy tannins latch onto the myoglobin and fat in a bone-in ribeye, softening as the fat releases and letting the wine's cherry-tar core step forward. The result is a finish that's longer and more complex than either delivers alone — the bone adds a mineral bridge that ties directly to Barolo's calcium-rich terroir.",
      "Porterhouse": "The strip side's tighter muscle fibers and lower fat content let Barolo's tannins work structurally, while the tenderloin side's butter-soft texture absorbs the wine's dried fruit and floral lift. The guest experiences two distinct pairings on one plate, with the wine revealing a different character on each half.",
      "Brussels and Belly": "Glucosinolates in charred Brussels sprouts mirror the bitter, resinous back end of Nebbiolo, while the caramelized pork belly fat rounds out the tannins the same way it would with the steaks. The sweet-bitter-smoky triangle on the plate finds an anchor in the wine's structure, keeping the dish from reading as heavy.",
      "Lardons": "Rendered pork fat carries fat-soluble flavor compounds that bind to Barolo's tannins and strip out the astringency, leaving the wine's cherry and dried rose petals front and center. The saltiness of the lardon drives salivation, which opens the wine's mid-palate and makes each sip taste more generous than the last.",
      "Creamed Spinach": "The Barolo's firm tannins bind to the fat proteins in the cream, while its earthy undertone draws out the iron-rich depth of the spinach. Together, the grip of the wine softens into a velvety finish that makes the whole dish taste richer than it is on its own.",
      "Mushrooms": "Both the Nebbiolo grape and the mushrooms share high concentrations of glutamates, so the earthiness in each amplifies the other at a molecular level. What the guest gets is a wave of deep, forest-floor savoriness that lingers far longer than either would alone.",
      "House Wedge": "The Barolo's high acidity cuts through the blue cheese dressing the same way a squeeze of lemon would, while its cherry fruit plays off the sweetness of the tomato. The contrast keeps the palate clean between bites — the wine acts as a reset that makes each forkful of the wedge taste as sharp and cold as the first.",
      "Shrimp Bisque": "The bisque's natural sweetness from the shrimp shells and the Barolo's dried-cherry fruit meet in the middle, while the wine's tannins provide a dry counterweight to the richness of the cream. The result is that the seafood flavor comes forward rather than getting buried — the wine lifts it.",
      "Au Gratin Potatoes": "The caramelized, slightly bitter crust on the gratin mirrors the Barolo's tar and dried rose character, while the wine's acidity keeps the heavy dairy from coating the palate. Each sip clears the slate so the next bite of potato reads as crisp and savory rather than leaden.",
      "Chocolate Brownie": "Nebbiolo's high tannin structure mirrors the tannins already present in dark chocolate, and the cherry and dried fruit in the wine echoes a classic cherry-chocolate flavor bridge. The bitterness in both the wine and the brownie cancel each other out, leaving the guest with a surprisingly soft, almost sweet finish.",
      "Cheesecake": "The Barolo's acidity reacts with the tangy cream cheese the same way a fruit compote would on the plate — it sharpens the dairy and gives it lift. The wine's cherry fruit reads almost like a topping, making the cheesecake taste brighter and less heavy than it would on its own.",
      "Creme Brulee": "The caramelized sugar crust on the brulee echoes the toasted, slightly oxidative notes that Barolo develops with age, creating a rare bridge between a delicate dessert and a bold red. The contrast between the wine's firm tannin and the cold, silky custard makes the texture of the brulee feel even more pronounced."
    }
  },
  {
    name: 'Caymus Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['bold','rich','jammy','oak','smooth','approachable'],
    price: '$28 / $180',
    excellent: ['Cowboy Ribeye','Kansas City','Filet Mignon','Truffle Fries','Creamed Spinach','Brussels and Belly','Bone Marrow'],
    strong: ['The Tomahawk','Porterhouse','Au Gratin Potatoes','Mushrooms','Lobster Mac'],
    works: ['Shrimp Bisque','Lardons','Grilled Caesar','Chocolate Brownie','Cheesecake','Creme Brulee','Carrot Cake'],
    avoid: ['Prime Tartare','Crab Cake','Seared Scallops','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Cowboy Ribeye": "Caymus's high-tannin structure binds to the intramuscular fat in the ribeye, cutting through the richness while its dark cherry and cassis mirror the char from a high-heat sear. Every bite softens the wine's grip and every sip resets the palate, turning one of the fattiest cuts on the menu into something endlessly layered.",
      "Kansas City": "The Kansas City's dense, dry-aged beefiness acts as a tannin sponge, pulling the grippy structure out of Caymus and leaving the wine's blackberry and vanilla oak front and center. What you get is the full bold-on-bold experience — firm meat, firm wine — where neither backs down but both get cleaner.",
      "Filet Mignon": "The filet's mild, almost cream-like beef flavor gives Caymus's jammy dark fruit and toasted oak nowhere to hide, so the wine's richness becomes the seasoning. The tannins polish the buttery texture of the center cut without overpowering it, making the bite feel more substantial than the lean cut would on its own.",
      "Truffle Fries": "The sulfurous, earthy compounds in black truffle share a chemical family with the toasted oak and dark fruit in Caymus, so they lock onto each other immediately. What hits the guest is a deep, almost savory-sweet umami loop where the wine tastes more complex and the fries taste more luxurious.",
      "Creamed Spinach": "The fat in the cream sauce coats the palate and momentarily mutes Caymus's tannins, letting the wine's ripe fruit and vanilla-oak register without the usual grip. When the tannins reassert, they slice through the dairy richness and refresh the mouth, making a side dish that could feel heavy taste surprisingly clean.",
      "Brussels and Belly": "The caramelized bitterness on the Brussels sprouts and the rendered pork fat from the belly both pull on different elements of Caymus simultaneously — bitterness echoes the tannin structure, fat absorbs it. The jammy dark fruit in the wine threads between the smoky sweetness of the pork and the char on the sprouts, tying the whole plate together.",
      "Bone Marrow": "Bone marrow is almost pure rendered fat and collagen, which aggressively strips tannin from Caymus and pushes the wine's ripe blackberry and toasted oak forward in a way you won't get with any other pairing on the menu. The result is a round, almost decadent softness — the wine loses its edges and the marrow loses its heaviness.",
      "The Tomahawk": "The Tomahawk's extra fat cap and long bone contribute more lipid surface area than the ribeye, which means the tannins in Caymus work harder and the pairing is slightly less seamless — the wine can outpace the meat on the finish. It still works because the jammy fruit holds up to the bold char, but guests should expect a little more structure on the back end than with the Cowboy cut.",
      "Porterhouse": "The Caymus's high tannins bind to the myoglobin proteins in the beef's fat cap, while its black cherry and cassis mirror the Maillard crust from the grill. You get a seamless back-and-forth where the wine cuts the intramuscular fat of the strip side and the jammy fruit amplifies the mineral depth of the tenderloin.",
      "Au Gratin Potatoes": "The oak-derived vanillin in the Caymus latches onto the browned Gruyère crust, and the wine's acidity slices through the heavy cream and potato starch that would otherwise coat the palate. The result is a bite that finishes cleaner than either element alone.",
      "Mushrooms": "The Caymus carries its own glutamate load from oak aging, and the mushrooms bring theirs from free glutamic acid — stacking those umami compounds doubles the savory depth without either becoming muddy. The wine's dark fruit lifts through the earthiness so the mushrooms read richer and more dimensional on the finish.",
      "Lobster Mac": "The fat in the cheese sauce dulls tannins that would otherwise be aggressive, and the Caymus's oak toast resonates with the butter-poached sweetness of the lobster in the same register as a brown butter sauce would. What you experience is the shellfish flavor extending long past the swallow, carried by the wine's jammy length.",
      "Shrimp Bisque": "The bisque's sherry-tinged sweetness and cream meet resistance from the Caymus's tannins, which is why this works rather than sings — but the oak spice in the wine does echo the paprika and cognac base of the bisque. The contrast keeps the richness of the soup from feeling heavy while the seafood sweetness softens the wine's edges.",
      "Lardons": "The rendered pork fat from the lardons coats the palate in a way that tames the Caymus's tannin grip, while the crispy, caramelized exterior of the bacon pulls toward the wine's toasted oak notes. Together they create a smoky-sweet loop that makes both taste more complex than they do on their own.",
      "Grilled Caesar": "The char on the romaine introduces bitter, carbon-forward notes that align with the Caymus's oak tannins, and the anchovy-Worcestershire backbone in the dressing carries enough umami to hold its own against the wine's boldness. The smoke and the dark fruit trade off on the palate so neither the salad nor the wine dominates.",
      "Chocolate Brownie": "The Caymus's black fruit — specifically the cassis — shares phenolic compounds with dark chocolate, so they're essentially speaking the same molecular language. The wine's residual tannin provides enough bitterness to keep the brownie's sugar in check, landing the combination in the same territory as a well-balanced 70% cacao bar.",
      "Cheesecake": "The residual sugar and jammy black fruit in the Caymus soften the lactic tang of the cream cheese base, while the oak tannins cut through the fat. What you get is a richer, almost chocolate-covered-cherry finish that makes the cheesecake taste less sweet and more complex.",
      "Creme Brulee": "The vanilla from Caymus's American oak aging locks onto the vanilla bean custard, doubling that note, while the wine's dark fruit contrast lifts the caramelized sugar crust off the palate. Together they read as a single dessert — richer, longer, with a finish that lingers well past the last bite.",
      "Carrot Cake": "The warm baking spices — cinnamon, allspice — in the carrot cake mirror the secondary spice notes the oak imparts to Caymus, while the jammy fruit bridges directly to the cream cheese frosting's richness. The result is a pairing where neither the wine nor the cake tastes as heavy as it would alone."
    }
  },

  // ── WINES — PINOT NOIR (bottle) ───────────────────────────────────────────────

  {
    name: 'Cristom Mt Jefferson Cuvée',
    category: 'wine-red',
    profile: ['Pinot-Noir','earthy','cherry','spice','medium-bodied','Oregon','structured'],
    price: '$75',
    excellent: ['Faroe Island Salmon','Roast Half Chicken','Filet Mignon','Crab Cake','House Wedge'],
    strong: ['Seared Scallops','Prime Tartare','Grilled Caesar','Shrimp Bisque','Mushrooms'],
    works: ['Kansas City','Sauteed Garlic Spinach','Burrata'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Faroe Island Salmon": "The bright malic acidity and cherry fruit in this Pinot cut through the salmon's omega-3 fat in the way a squeeze of lemon would, without stripping the fish's delicate flavor. What lands on the palate is a clean, savory finish — the wine essentially acts as a sauce, amplifying the salmon's natural sweetness.",
      "Roast Half Chicken": "The earthy, forest-floor character in this Willamette Valley Pinot speaks directly to the Maillard reaction browning on roasted poultry skin, bridging the gamey depth of dark meat to the wine's spice. Every bite of chicken pulls more fruit out of the glass, and every sip of wine pulls more roasted savoriness off the plate.",
      "Filet Mignon": "The low tannin structure of this Pinot won't overwhelm the filet's lean muscle tissue the way a heavier Cab would, while its cherry acidity amplifies the meat's natural iron-rich savoriness. What you get is a pairing where the wine feels bigger and the steak feels more buttery — each making the other seem more generous.",
      "Crab Cake": "The spice and red cherry brightness of the Cristom echo the Old Bay-style seasoning in the crab cake, while the wine's light tannins leave the delicate sweet crab meat intact rather than crushing it. The crispy seared crust pulls out the Pinot's earthiness, and suddenly the wine tastes more savory and the crab tastes sweeter.",
      "House Wedge": "The acidity in this Pinot cuts through the blue cheese dressing's fat and funk the same way lemon juice would, resetting the palate after each creamy bite. The cherry fruit then lands against the cold, crisp iceberg and reads almost like a vinaigrette — the whole plate feels lighter and more composed with the wine alongside it.",
      "Seared Scallops": "The wine's bright Bing cherry acidity cuts through the caramelized crust on the scallop and lifts the natural oceanic sweetness underneath. The result is a back-and-forth between fruit and brine that makes the scallop taste cleaner and the wine taste rounder.",
      "Prime Tartare": "The earthy, iron-driven quality of raw beef finds a direct mirror in the Pinot's forest floor and dried spice notes, while the wine's low tannin keeps it from overwhelming the delicate fat of hand-cut tenderloin. Together they amplify the savory depth of the tartare without any single element overpowering the other.",
      "Grilled Caesar": "The charred romaine carries lignin-based smoke compounds that sync with the Pinot's earthy, sous bois character, while the anchovy-driven umami in the dressing softens the wine's spice into something almost silky. The guest tastes smoke and cherry bouncing off each other in a way that makes both feel more complex than they are on their own.",
      "Shrimp Bisque": "The wine's cherry brightness acts as an acid counterweight to the heavy cream and shellfish reduction in the bisque, the same way a squeeze of lemon would, but with more aromatic complexity. On the palate, the sweetness of the shrimp elongates the wine's fruit finish and softens its earthiness into something that reads almost like spiced butter.",
      "Mushrooms": "The wine's terroir-driven earthiness — wet soil, dried herbs, forest floor — shares the same glutamate-rich aromatic lane as roasted mushroom cell walls breaking down in butter. When they hit together, the umami stacks and the wine's cherry note emerges as a clean, bright contrast that keeps the combination from going too heavy.",
      "Kansas City": "The Kansas City strip's firm, lean muscle structure and aggressive beef flavor need the wine's spice and dark fruit to provide contrast rather than match weight for weight, which this Pinot does by threading cherry and pepper through each bite without fighting the meat's density. The pairing works because the wine refreshes the palate between bites rather than competing with the strip's bold, straightforward beefiness.",
      "Sauteed Garlic Spinach": "The Maillard-browned garlic carries a nutty bitterness that softens the wine's earthy tannin structure, while the mineral quality of wilted spinach echoes the Pinot's iron-tinged mid-palate. It's a quiet pairing — the wine and the dish share enough savory common ground that neither dominates, and the cherry note provides just enough brightness to keep the combination from feeling flat.",
      "Burrata": "The wine's acidity cuts the lactic fat of the burrata in the same way it would a young cheese, preventing the cream from coating the palate and masking the Pinot's more delicate spice and cherry notes. The guest gets a moment where the wine's fruit becomes more vivid right after the cool, milky interior of the burrata, a contrast that makes the wine taste more expressive than it does on its own."
    }
  },
  {
    name: 'Daniel Chotard Sancerre Rouge',
    category: 'wine-red',
    profile: ['Pinot-Noir','Loire','earthy','mineral','light','French','unique'],
    price: '$90',
    excellent: ['Faroe Island Salmon','Crab Cake','Seared Scallops','House Wedge','Escargot'],
    strong: ['Prime Tartare','Roast Half Chicken','Grilled Caesar','Shrimp Bisque','Burrata'],
    works: ['Filet Mignon','Sauteed Garlic Spinach','Mushrooms'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Faroe Island Salmon": "The wine's chalky Silex minerality and bright red-fruit acidity cut through the salmon's high fat content the same way a squeeze of lemon would, but with more complexity. The guest gets a cleaner finish on the fish and a rounder, almost silky mid-palate from the wine than either delivers alone.",
      "Crab Cake": "The Loire's signature saline, flinty backbone mirrors the oceanic sweetness of the crab, while the wine's low tannin keeps the delicate crab meat front and center rather than overpowering it. The result is a pairing where the crispy sear reads as more caramelized and the wine's strawberry fruit lifts the whole bite.",
      "Seared Scallops": "The Maillard crust on the scallop finds an echo in the wine's earthy, almost beet-like Pinot character, creating a savory bridge that neither a white wine nor a bigger red could pull off. That shared savoriness makes the scallop's natural sweetness pop harder on the finish.",
      "House Wedge": "The wine's cool-climate acidity slices through the richness of the blue cheese and creamy dressing the way a vinegar-forward vinaigrette would, while its earthy minerality grounds the fresh, icy crunch of the iceberg. The guest gets a brighter, cleaner wedge and a wine that suddenly shows more red fruit than it does at the start.",
      "Escargot": "The herbal, forest-floor character in this Loire Pinot speaks directly to the garlic and parsley butter the escargot is bathed in, essentially amplifying the dish's own aromatics. When they land together, the butter's richness coats the wine's tannins and makes it taste fuller and more generous than it is on its own.",
      "Prime Tartare": "The wine's iron-tinged minerality and red-fruit brightness lock onto the umami and iron notes in the raw beef, creating a savory feedback loop that keeps pulling the palate back for another bite. The tartare's fat and egg yolk soften the wine's leaner structure just enough to make both feel more luxurious.",
      "Roast Half Chicken": "The earthy, gamey undertone in Loire Pinot Noir is a classic match for roasted poultry drippings and caramelized skin — both are built on the same savory, Maillard-driven flavor compounds. The chicken's richness fills out the wine's lighter body, and the wine's acidity keeps each bite of dark meat from feeling heavy.",
      "Grilled Caesar": "The char on the grilled romaine produces bitter, smoky compounds that the wine's earthy minerality absorbs without getting knocked around, while the anchovy-driven umami in the dressing deepens the Pinot's fruit into something more savory and complex. The guest gets a wine that suddenly tastes bigger than it is, and a Caesar that tastes less aggressively salty.",
      "Shrimp Bisque": "The wine's high-acid, mineral spine cuts through the bisque's cream fat the way a squeeze of lemon would, while its red fruit registers against the shrimp's natural sweetness. The result pulls the bisque's richness into sharper focus without flattening it.",
      "Burrata": "Loire Pinot's chalky minerality and restrained red fruit act as a foil to burrata's lactic fat, the same way fleur de sel does on fresh mozzarella. Together, the wine lifts the cream off the palate cleanly and leaves the milk's delicate sweetness behind.",
      "Filet Mignon": "The wine's low tannin and earthy iron notes track with the filet's lean muscle and subtle blood minerals without overwhelming the meat's quiet butter-tenderness. What the guest gets is the wine amplifying the beef's natural savoriness rather than competing with it.",
      "Sauteed Garlic Spinach": "The wine's earthy, slightly vegetal Loire character shares a flavor root with the spinach's chlorophyll bitterness, while the acid keeps the garlic from turning sharp. On the palate, the two read as one coherent savory note rather than a food-and-wine contrast.",
      "Mushrooms": "Pinot Noir from the Loire carries its own forest floor and dried earth compounds that mirror the glutamates driving mushroom umami. When they meet, the savory depth doubles without adding weight, keeping the experience light and persistent."
    }
  },
  {
    name: 'Evening Land Seven Springs',
    category: 'wine-red',
    profile: ['light','earthy','cherry','elegant','delicate','Oregon'],
    price: '$100',
    excellent: ['Filet Mignon','Bone-In Filet','Prime Tartare','Shrimp Bisque','House Wedge','Crab Cake','Seared Scallops'],
    strong: ['Kansas City','Faroe Island Salmon','Roast Half Chicken','Creamed Spinach','Grilled Caesar'],
    works: ['Cowboy Ribeye','Brussels and Belly'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Filet Mignon": "The wine's bright Willamette cherry and red clay minerality trace the filet's lean myoglobin without tannin pressure on the meat's delicate texture. The guest experiences the beef opening up across the mid-palate as the wine's acidity draws out a sweetness in the crust.",
      "Bone-In Filet": "The bone conducts heat differently during the cook, leaving more collagen-rich flavor near the marrow, and the wine's earthy elegance latches onto that depth while its cherry keeps the sip feeling fresh. The pairing makes the steak taste more complex than the cut alone would suggest.",
      "Prime Tartare": "Raw beef's fat and iron are naked without heat to mellow them, and the wine's bright acidity and light body act as a built-in seasoning that frames the tartare's umami the way a good shallot vinaigrette does. Each bite resets the palate so the beef's raw richness reads as clean and precise rather than heavy.",
      "Shrimp Bisque": "The wine's bright cherry acidity cuts through the bisque's heavy cream base, while its earthy minerality draws out the briny sweetness of the shrimp. Together, the combination lifts what could be a one-note richness into something with real brightness and depth.",
      "House Wedge": "The wine's low tannins and cherry-forward acidity mirror the brightness of the blue cheese dressing without overwhelming the delicate iceberg crunch. That contrast between the crisp, cold wedge and the wine's earthy warmth creates a clean, refreshing back-and-forth on the palate.",
      "Crab Cake": "The Pinot's red fruit and forest floor earthiness echo the sweet, clean crab meat without competing with the crispy sear on the exterior. The wine's light body preserves the delicacy of the crab while its acidity keeps the richness of the cake from sitting heavy.",
      "Seared Scallops": "The wine's cherry brightness latches onto the caramelized crust from the sear, amplifying the Maillard-driven sweetness in the scallop without masking its oceanic softness underneath. What you get is a longer finish — the fruit of the wine and the sweetness of the scallop extending each other across the palate.",
      "Kansas City": "The wine's earthy tannin structure meets the firm, lean texture of the Kansas City strip, but this is a pairing where the contrast does the work — the cherry brightness of the Pinot softens the bold beefiness rather than matching it. The result is balance rather than echo, keeping neither the wine nor the steak from dominating.",
      "Faroe Island Salmon": "The Pinot's low tannins avoid the metallic clash that heavier reds bring to fatty fish, and its cherry acidity slices cleanly through the rich omega fat of the Faroe Island salmon. Each bite resets the palate, keeping the salmon's delicate flesh tasting fresh rather than heavy.",
      "Roast Half Chicken": "The wine's earthy, forest-floor character speaks directly to the roasted skin and savory fond on the chicken, while its cherry fruit brightens the rich pan drippings. Together, the combination deepens the roasted savory notes in the bird while keeping the wine's elegance intact.",
      "Creamed Spinach": "The wine's acidity cuts through the butter-fat richness of the cream sauce, while its earthy minerality bridges naturally to the iron and vegetal depth of the spinach. What could be a cloying side dish instead becomes a savory, grounded pairing that makes the wine taste more structured than it does on its own.",
      "Grilled Caesar": "The wine's bright cherry acidity cuts through the anchovy-driven umami and char on the romaine, while its earthy undertones mirror the smokiness from the grill. What lands at the table is a cleaner, more lifted Caesar — the fat from the dressing softens the tannins and lets the wine's red fruit surface.",
      "Cowboy Ribeye": "The wine's lean tannin structure and red fruit acidity act as a palate reset against the ribeye's heavy intramuscular fat, and the earthy Pinot character echoes the crust developed during the sear. Each bite of steak makes the wine taste rounder, and each sip of wine makes the next bite feel like the first.",
      "Brussels and Belly": "The wine's cherry brightness plays against the caramelized bitterness of the Brussels while its earthiness finds common ground with the rendered pork belly fat and smoke. The sweetness from the char on the belly amplifies the wine's red fruit, creating a back-and-forth that keeps both from feeling heavy."
    }
  },
  {
    name: 'Marimar Estate Christina',
    category: 'wine-red',
    profile: ['Pinot-Noir','elegant','cherry','earth','Russian-River','California','structured'],
    price: '$110',
    excellent: ['Filet Mignon','Faroe Island Salmon','Roast Half Chicken','House Wedge','Crab Cake'],
    strong: ['Seared Scallops','Prime Tartare','Grilled Caesar','Shrimp Bisque','Mushrooms'],
    works: ['Kansas City','Sauteed Garlic Spinach','Burrata'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Filet Mignon": "The wine's silky tannins match the filet's fine muscle grain, and its red cherry core and iron-tinged earth speak directly to the mild, blood-rich character of a properly seared center-cut tenderloin. Together, the butter finish on the steak rounds out any remaining grip in the wine, leaving nothing but length.",
      "Faroe Island Salmon": "Pinot Noir's low tannin and high-toned acidity don't overwhelm salmon's omega-rich fat the way a bigger red would, and the wine's cherry and earth notes bridge to the salmon's natural mineral quality from cold Atlantic waters. The fat in the fish pulls out the wine's mid-palate fruit, making it taste richer and more generous than it does on its own.",
      "Roast Half Chicken": "The wine's earthy Sonoma Coast character locks into the roasted skin's Maillard crust, and its cherry brightness cuts through the rendered fat pooling beneath the breast. What the guest gets is a savory-fruit loop — the chicken keeps drawing fruit from the wine, the wine keeps drawing depth from the chicken.",
      "House Wedge": "The wine's acidity mirrors the tang of the blue cheese dressing and keeps the iceberg's crisp, cold texture from going flat against it, while the cherry note provides just enough contrast to the creamy, salty fat. The cold crunch of the wedge actually chills the wine's fruit forward, sharpening it into something that tastes more precise.",
      "Crab Cake": "The wine's red fruit and gentle earth frame the natural sweetness of the crab without fighting it, and its acidity cuts the fried crust in the same way a squeeze of lemon would — but with more complexity. When they hit together, the delicate brininess of the crab pulls a subtle savory mineral note out of the wine that you wouldn't catch on its own.",
      "Seared Scallops": "The Pinot's bright malic acidity and red cherry lift cut through the caramelized crust on the scallop without overpowering its natural brininess. Together, the sweetness of the sear and the wine's silky tannins create a finish that lingers like a perfectly executed beurre blanc.",
      "Prime Tartare": "The wine's earthy, forest-floor undertones meet the umami depth of raw aged beef, while its cherry brightness acts as a counterpoint to the iron-rich intensity of the tartare. On the palate, the fat from the yolk and the beef's richness soften the wine's acidity, making both taste more complete than they would alone.",
      "Grilled Caesar": "The Pinot's red fruit and subtle smoke-derived phenolics from barrel aging mirror the char on the romaine, while its bright acidity slices through the anchovy and Parmesan fat in the dressing. What the guest gets is a second wave of smokiness mid-sip, as the wine amplifies the grill char rather than competing with it.",
      "Shrimp Bisque": "The wine's silky texture and cherry-toned acidity act as a foil to the bisque's heavy cream and shellfish sweetness, preventing the richness from coating the palate. Each sip resets the tongue, so the next spoonful of bisque tastes as bright and sweet as the first.",
      "Mushrooms": "The Pinot's terroir-driven earthiness — think wet clay and forest floor — speaks directly to the glutamates in the sautéed mushrooms, reinforcing rather than contrasting their savory depth. The result is a resonance where both the wine and the mushrooms taste more intensely of themselves, an amplification of umami that builds with each bite and sip.",
      "Kansas City": "The Kansas City's lean, dense muscle structure needs the Pinot's acidity to cut through its tight grain and coax out the beefy depth that a fattier cut would release on its own. The wine's low tannin means it won't fight the firm texture, and the cherry note in the finish softens the char without masking the strip's mineral, beefy core.",
      "Sauteed Garlic Spinach": "The wine's earthy backbone meets the sulfur compounds in the garlic as they mellow through sauté, while its acidity keeps the iron and bitterness of the wilted spinach from going flat. Together they produce a clean, savory finish where neither the garlic nor the fruit dominates — each one keeps the other honest.",
      "Burrata": "The Pinot's bright acidity pierces the lactic fat of the burrata's cream center, while its delicate tannins provide just enough grip to contrast the milk-soft texture without overwhelming it. The pairing reads as fresh and light on the palate — the wine's cherry and earth lift the burrata out of richness and into something that feels almost like a first course with a glass of something alive."
    }
  },
  {
    name: 'Jax Calesa Vineyard Pinot Noir',
    category: 'wine-red',
    profile: ['Pinot-Noir','fruit-forward','cherry','smooth','California','approachable'],
    price: '$120',
    excellent: ['Filet Mignon','Faroe Island Salmon','Roast Half Chicken','House Wedge','Crab Cake'],
    strong: ['Seared Scallops','Prime Tartare','Grilled Caesar','Shrimp Bisque','Mushrooms'],
    works: ['Kansas City','Sauteed Garlic Spinach','Burrata'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Filet Mignon": "The cherry fruit and silky tannins in this Pinot Noir mirror the filet's own buttery texture without overwhelming its delicate iron notes. Together, they create a conversation between equals — the wine's brightness lifts the beef's mild richness rather than competing with it.",
      "Faroe Island Salmon": "Pinot Noir's low tannin and bright acidity cut through the salmon's omega-rich fat the same way a squeeze of lemon would, while the cherry fruit plays against the fish's natural sweetness. The result is a clean finish where neither the wine nor the salmon feels heavy.",
      "Roast Half Chicken": "The Maillard crust on the roasted chicken produces savory, caramelized compounds that the Pinot's cherry fruit and subtle earthiness wrap around naturally. Guests get a mouthful that reads as deeply savory with a bright red-fruit finish that keeps the richness from sitting too heavy.",
      "House Wedge": "The wine's lively acidity steps in where the wedge's blue cheese and creamy dressing create a rich, fatty coating on the palate. That brightness cuts the fat and the iceberg's cold crunch resets everything, so each bite and sip tastes as fresh as the first.",
      "Crab Cake": "The crab's natural brininess and sweet lump meat find a counterpoint in the Pinot's cherry fruit and gentle acidity, while the seared crust on the cake echoes the wine's faint toasty undertone. What guests taste is the crab's sweetness amplified — the wine scrubs the fry and lets the shellfish flavor come forward.",
      "Seared Scallops": "The hard sear on the scallop builds a caramelized crust that the Pinot's fruit-forward cherry note softens, while the wine's acidity keeps the scallop's natural sweetness from reading as cloying. The pairing highlights that sear without letting the wine's structure overwhelm the delicate protein underneath.",
      "Prime Tartare": "The tartare's raw umami and hand-cut texture are bold enough to stand up to a red, but the Pinot's smooth tannins and fruit profile avoid the iron clash you'd get from a heavier Cab. The cherry brightness plays against the beef's lactic, mineral quality and the capers' brine, pulling the dish's bold components into focus.",
      "Grilled Caesar": "The charred romaine on the grilled Caesar introduces a light smokiness that the Pinot's earthy undertones pick up naturally, while the wine's acidity balances the anchovy-driven umami in the dressing. Together, they push the smoky, savory notes forward while the Pinot keeps the creamy dressing from coating the palate.",
      "Shrimp Bisque": "The Calesa's bright malic acidity cuts through the bisque's heavy cream base while its cherry fruit mirrors the natural sweetness of the shrimp. The result is a lighter, cleaner finish on each spoonful — the richness lands without coating the palate.",
      "Mushrooms": "Pinot Noir and mushrooms share glutamates — the same umami compounds that make each savory on their own intensify each other when combined. The cherry fruit in the Calesa lifts what could otherwise be a heavy, earthy one-note bite into something with brightness and length.",
      "Kansas City": "The Kansas City strip's tight grain and bold beefiness need some fruit weight behind them, and the Calesa's ripe cherry just barely keeps pace with the meat's intensity. It works best mid-bite, where the wine's smooth tannin softens the strip's firm chew without disappearing into it.",
      "Sauteed Garlic Spinach": "The Maillard-browned garlic in the spinach picks up the Calesa's savory, slightly earthy mid-palate and gives the wine's fruit something savory to push against. The light body of the Pinot keeps it from overwhelming the vegetable — it reads as a side conversation rather than a clash.",
      "Burrata": "The Calesa's fruit-forward cherry acidity acts as a counterpoint to burrata's fat-rich, lactic creaminess — the same reason strawberries work with cream. The wine's smooth finish keeps the pairing delicate, brightening each bite without introducing any tannin grip that would turn the cheese's texture chalky."
    }
  },
  {
    name: 'Macauley Pinot Noir',
    category: 'wine-red',
    profile: ['Pinot-Noir','rich','dark-cherry','structured','California','premium'],
    price: '$120',
    excellent: ['Filet Mignon','Kansas City','Roast Half Chicken','Faroe Island Salmon','Mushrooms'],
    strong: ['Crab Cake','House Wedge','Grilled Caesar','Seared Scallops','Brussels and Belly'],
    works: ['Cowboy Ribeye','Shrimp Bisque','Prime Tartare'],
    avoid: ['The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Filet Mignon": "The filet's lean muscle has almost no intramuscular fat to stand up to big tannins, so the Macauley's structured but fine-grained tannin engages the meat's tender protein without overpowering it, while the dark cherry fills in the flavor that a leaner cut doesn't bring on its own. Every bite reads richer than either element alone.",
      "Kansas City": "The Kansas City's firm texture and concentrated beef flavor meet the Macauley's structure head-on — the wine's tannin binds to the strip's myosin proteins, softening the chew, while dark cherry fruit echoes the caramelized crust from the sear. It's a back-and-forth pairing where each element is stronger for the other.",
      "Roast Half Chicken": "Roasted poultry develops Maillard compounds — browned skin, caramelized drippings — that the Macauley's dark cherry and savory structure are built to meet, bridging fruit and roast in the same register. The chicken's rendered fat softens the wine's tannin grip, making the Macauley taste more plush and the bird taste more complex.",
      "Faroe Island Salmon": "The dark cherry acidity in the Pinot cuts through the salmon's omega-rich fat while the wine's silky tannins mirror the fish's buttery texture. Together, they land on a long, savory finish that makes the salmon taste even more like itself — clean, oceanic, and full.",
      "Mushrooms": "Pinot Noir shares glutamate compounds with mushrooms, meaning the wine's earthy, forest-floor backbone is essentially speaking the same umami language as the dish. When they hit together, the savory depth doubles without either one going heavy — it's richness that stays lifted.",
      "Crab Cake": "The wine's bright dark-cherry acidity acts as a squeeze of acid against the crab's natural sweetness, the way lemon would, while its gentle structure doesn't bulldoze the delicate meat. The crispy sear on the cake picks up the wine's subtle toasty oak, giving the whole bite a warmth it wouldn't have on its own.",
      "House Wedge": "The Pinot's acidity slices through the blue cheese dressing's fat the same way a vinaigrette would, resetting the palate between bites. The dark fruit in the wine plays off the iceberg's cool crispness, creating a contrast that makes both feel sharper and more defined.",
      "Grilled Caesar": "The char on the romaine creates bitter, smoky Maillard compounds that echo the earthiness in the Pinot, while the anchovy-driven umami in the dressing amplifies the wine's savory mid-palate. What the guest gets is a pairing where the smokiness stretches across both the glass and the plate in one continuous, savory thread.",
      "Seared Scallops": "The caramelized crust on the scallop — those browned sugars from the sear — mirrors the dark fruit and subtle oak in the Pinot, bridging what would otherwise be a delicate protein and a structured red. The wine's acidity then lifts the scallop's sweetness without letting the combination feel heavy.",
      "Brussels and Belly": "The pork belly's rendered fat and the Brussels' bitter char both find a counterpoint in the Pinot's dark cherry and bright acidity, which cuts the richness and echoes the caramelized edges on the sprouts. On the palate, the sweetness in the belly amplifies the wine's fruit, and suddenly both taste more complex than they do alone.",
      "Cowboy Ribeye": "The ribeye's intramuscular fat and bold char demand more tannin than Pinot typically carries, so the wine's structure gets stretched — it works, but the fruit softens and the beef can overpower the mid-palate. Guests who prefer a lighter counterpoint to a rich steak rather than a full grip will find it refreshing, but it's a pairing built on contrast more than harmony.",
      "Shrimp Bisque": "The dark cherry fruit and silky tannin structure in the Macauley cut through the cream fat in the bisque the same way acid does, without stripping the sweetness from the shrimp. What you get is the bisque tasting richer and the wine tasting rounder — each one making the other feel more complete.",
      "Prime Tartare": "The Macauley's concentrated dark fruit and iron-edged tannins lock onto the myoglobin and umami depth of raw prime beef, essentially mirroring the savory-mineral quality already in the meat. Together, the tartare gets a lift of brightness and the wine's fruit opens up instead of reading as austere."
    }
  },
  {
    name: 'Elk Cove Five Mountain',
    category: 'wine-red',
    profile: ['Pinot-Noir','earthy','cherry','spice','Oregon','structured','premium'],
    price: '$125',
    excellent: ['Filet Mignon','Faroe Island Salmon','Roast Half Chicken','Crab Cake','House Wedge'],
    strong: ['Seared Scallops','Prime Tartare','Grilled Caesar','Shrimp Bisque','Mushrooms'],
    works: ['Kansas City','Burrata','Sauteed Garlic Spinach'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Filet Mignon": "The Five Mountain's earthy, forest-floor quality speaks directly to the subtle mineral character of a lean filet, and the wine's soft tannins won't overwhelm the delicate muscle structure the way a bigger red would. On the palate, the cherry spice gives the butter-finished filet a faint savory warmth that makes every bite feel more dimensional.",
      "Faroe Island Salmon": "The Five Mountain's bright cherry acidity cuts the high omega-3 fat content of the salmon the way a squeeze of citrus would, while the earthy undertone bridges to the fish's natural mineral richness. What the guest tastes is a cleaner finish on each bite of salmon and a wine that suddenly reads as fresher and more vibrant.",
      "Roast Half Chicken": "The Maillard crust on the roasted chicken produces the same savory, slightly caramelized notes as the spice and earth in the Five Mountain, creating a flavor echo rather than a contrast. That overlap deepens the roasted quality in both, and the wine's cherry brightness keeps the richness of the poultry skin from feeling heavy.",
      "Crab Cake": "The Five Mountain's cherry fruit and gentle spice provide just enough contrast to lift the natural sweetness of the crab without masking it, while the wine's low tannin means it won't fight the delicate texture of the cake. The crispy sear on the cake picks up the wine's earthy, slightly toasty notes and makes the pairing feel intentional rather than accidental.",
      "House Wedge": "The cool, high-acid structure of the Five Mountain mirrors the tang of blue cheese dressing and cuts the fat from it cleanly, while the earthy spice in the wine finds a counterpart in the cracked pepper and savory elements on the wedge. Together, the salad tastes crisper and the wine reads as more fruit-forward — each one resetting the palate for the next bite or sip.",
      "Seared Scallops": "The caramelized crust on a seared scallop shares the same Maillard browning compounds that echo in the Five Mountain's spice and earth, creating a savory bridge between the protein and the wine. The scallop's natural sweetness then softens the wine's tannin, and what the guest experiences is a finish that's simultaneously richer and cleaner than either delivers alone.",
      "Prime Tartare": "The wine's earthy, iron-edged cherry cuts through the fat in the hand-cut beef while its spice notes amplify the Worcestershire and shallot already in the tartare. Together, they create a savory depth that makes the raw beef taste more mineral and complex than it does alone.",
      "Grilled Caesar": "The char on the romaine pulls out the wine's darker fruit and spice while the anchovy-driven umami in the dressing acts as a flavor amplifier for the Pinot's earthy backbone. The result is a back-and-forth between smoke and red fruit that makes both feel richer.",
      "Shrimp Bisque": "The wine's bright cherry acidity cuts the cream's fat and lifts the natural sweetness of the shrimp without flattening it, while the earthiness in the Pinot echoes the bisque's shellfish reduction base. On the palate, the bisque reads sweeter and the wine reads fuller than either does separately.",
      "Mushrooms": "Pinot Noir and mushrooms share the same umami compound — glutamate — so the wine's earthy, forest-floor quality meets the sautéed mushrooms on identical ground. What the guest gets is a savory resonance where the wine tastes deeper and the mushrooms taste more aromatic, almost meaty.",
      "Kansas City": "The wine's cherry fruit and spice work against the Kansas City's firm, well-marbled chew as a contrast rather than a mirror, with the tannins gripping the fat just enough to refresh the palate between bites. The leaner profile of the cut keeps the Pinot from being overwhelmed, so the fruit stays present through the finish.",
      "Burrata": "The wine's acidity and red fruit provide the contrast the burrata needs — its milky fat and mild cream have almost no tannin resistance, so the Pinot's structure lifts rather than clashes. The guest notices the wine's fruit become more vivid while the burrata reads creamier, each making the other more defined.",
      "Sauteed Garlic Spinach": "The Maillard-browned garlic picks up the wine's spice and earth notes while the slight bitterness in the spinach softens the Pinot's tannins just enough to let its fruit show. It's a light pairing, but the garlic acts as a hinge that keeps the wine from feeling too delicate next to the food."
    }
  },
  {
    name: 'RAEN Royal St Robert',
    category: 'wine-red',
    profile: ['Pinot-Noir','coastal','mineral','elegant','Sonoma','complex'],
    price: '$125',
    excellent: ['Filet Mignon','Faroe Island Salmon','Seared Scallops','Crab Cake','House Wedge'],
    strong: ['Roast Half Chicken','Prime Tartare','Grilled Caesar','Shrimp Bisque','Mushrooms'],
    works: ['Kansas City','Burrata','Sauteed Garlic Spinach'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Filet Mignon": "The coastal minerality in this Pinot — think sea salt and wet stone — acts as a natural seasoning agent against the filet's clean, butter-soft beef fat, while the wine's silky tannins match the cut's tenderness without any grit. The guest experiences the beef's subtle sweetness amplified, and the wine's elegance becomes the finish of the bite itself.",
      "Faroe Island Salmon": "The wine's coastal minerality mirrors the iodine-rich, ocean-forward fat of the salmon, while its low tannin lets the fish's omega-rich texture stay front and center. Together they create a seamless saline thread — like tasting the Pacific coast in a single bite and sip.",
      "Seared Scallops": "The Pinot's bright red fruit acidity cuts through the scallop's caramelized crust while its silky texture matches the mollusk's natural sweetness. That contrast makes the sear taste deeper and the wine taste fresher than either does alone.",
      "Crab Cake": "The wine's chalky minerality pulls out the sweet brininess of the crab while its gentle tannins provide just enough grip against the crispy breadcrumb crust. The guest gets a clean, long finish where the ocean flavors of both linger together rather than competing.",
      "House Wedge": "The wine's acidity mirrors the tang of blue cheese dressing and acts as a palate cleanser between the iceberg's cool crunch. What lands on the palate is a refreshing back-and-forth — the richness of the dressing briefly softens the Pinot's mineral edge, then the wine snaps everything back clean.",
      "Roast Half Chicken": "The wine's earthy red fruit — think dried cherry and forest floor — speaks directly to the rendered, herb-touched skin of a roasted bird, sharing the same Maillard-driven savory register. Together they build a layered roast character where the chicken's juices make the Pinot taste more structured and the wine makes every bite taste more intentional.",
      "Prime Tartare": "The wine's iron-tinged mineral quality meets the raw beef's own ferrous, blood-rich depth, creating a rare harmony between dish and glass that a bigger, tannic red would simply bulldoze. That shared mineral-umami thread lets the tartare's brightness — capers, shallot, yolk — animate the Pinot's fruit without the wine ever overwhelming the delicacy of the raw beef.",
      "Grilled Caesar": "The char on the romaine carries a bitter, smoky edge that the Pinot's low tannin and acidity can actually match without going flat, while the anchovy-driven umami in the dressing amplifies the wine's savory, earth-forward finish. The guest experiences the wine as fuller and the salad as brighter — each one bringing something out of the other that neither shows on its own.",
      "Shrimp Bisque": "The bisque's lobster-shell sweetness and cream base find a tonal match in the Pinot's ripe strawberry and satin texture, while the wine's coastal minerality echoes the shrimp's oceanic character beneath all that richness. Each sip after a spoonful of bisque makes the wine taste more alive — the fat in the soup briefly coats the palate, then the acidity cuts through and resets everything.",
      "Mushrooms": "The wine's coastal minerality and red fruit acidity cut through the glutamates in sautéed mushrooms, while its earthy Pinot structure mirrors the forest-floor umami in the fungi themselves. The guest tastes a savory loop — the wine amplifies the mushroom's depth, the mushroom pulls fruit from the wine.",
      "Kansas City": "The Kansas City's lean, firm grain needs acidity to lift the fat, and this Pinot's bright coastal spine does exactly that while its light tannins grip the charred crust without overwhelming the beef. What lands on the palate is a cleaner, longer finish — the char softens, the fruit opens up.",
      "Burrata": "The wine's mineral salinity acts like a seasoning against the milky lactic fat in fresh burrata, the way a squeeze of lemon would — cutting richness without adding weight. Together, the creaminess rounds the wine's acidity and the wine makes the cheese taste brighter and more alive.",
      "Sauteed Garlic Spinach": "The wine's red fruit and iron-tinged minerality echo the chlorophyll bitterness of spinach and the sulfurous bite of garlic, creating a vegetable-driven savory chord. What the guest gets is a clean, almost herbal mid-palate where neither the wine nor the dish overwhelms — they sharpen each other."
    }
  },
  {
    name: 'Sanford & Benedict Pinot Noir',
    category: 'wine-red',
    profile: ['Pinot-Noir','earthy','elegant','Sta-Rita-Hills','structured','premium'],
    price: '$130',
    excellent: ['Filet Mignon','Faroe Island Salmon','Roast Half Chicken','Crab Cake','Seared Scallops'],
    strong: ['Prime Tartare','House Wedge','Grilled Caesar','Shrimp Bisque','Mushrooms'],
    works: ['Kansas City','Burrata','Sauteed Garlic Spinach'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Filet Mignon": "The Sta. Rita Hills earthiness in this Pinot speaks directly to the mild, buttery fat of filet, where a bolder wine would bulldoze the tenderness — here the tannins are fine enough to bind the protein without drying the palate. The result is silk on silk — the beef's delicate texture stays front and center while the wine adds a forest-floor depth beneath it.",
      "Faroe Island Salmon": "Pinot's natural affinity for fatty fish comes from its low tannin and high acidity, which cuts the omega-rich fat of Faroe Island salmon the way a squeeze of citrus does — without the clash a heavier red would bring. The guest experiences a savory, almost oceanic mid-palate where the wine's fruit lifts the fish's richness rather than fighting it.",
      "Roast Half Chicken": "The roasted skin's Maillard browning compounds and rendered fat find a direct echo in the Pinot's earthy, slightly smoky undertone and dark cherry fruit. On the palate, the wine's acidity slices through the fat cap while its earthiness deepens the savory roasted notes — the chicken tastes more roasted, the wine more complete.",
      "Crab Cake": "The wine's Sta. Rita Hills minerality mirrors the briny sweetness of crab, while its acidity cuts the pan-fried crust's oil and lifts the delicate meat underneath. The guest tastes the crab's sweetness more clearly after a sip — the wine acts as a palate reset that keeps each bite as clean as the first.",
      "Seared Scallops": "The Sta. Rita Hills acidity cuts through the browned butter crust on the scallop while the wine's red fruit lifts the natural glycine sweetness in the meat. Together they read as one dish — coastal, bright, and clean.",
      "Prime Tartare": "The wine's iron-tinged earthiness meets the myoglobin richness of raw prime beef on the same register, while its fine tannins give structure to the fat from the egg yolk. The result is a savory depth that makes the tartare taste more aged and complex than it is.",
      "House Wedge": "The wine's bright malic acidity mirrors the snap of cold iceberg while its red fruit contrasts the lactic tang of blue cheese dressing. Each sip resets the palate, making the next bite of creamy, salty cheese taste fresher.",
      "Grilled Caesar": "The char on the romaine produces the same Maillard compounds that give this Pinot its toasted, smoky secondary notes, creating a direct aromatic bridge between glass and plate. The anchovy-driven umami in the dressing amplifies the wine's savory, forest-floor finish.",
      "Shrimp Bisque": "The wine's coastal minerality and stone fruit echo the sweet, briny reduction in the bisque, while its acidity cuts the heavy cream before it coats the palate. The combination reads as a single, focused shellfish flavor — richer than either alone.",
      "Mushrooms": "Sta. Rita Hills Pinot Noir carries strong geosmin and truffle-adjacent earthiness that sits on the exact same aromatic plane as roasted mushrooms' glutamate-rich, umami core. The two amplify each other until the savory character in both becomes almost meaty.",
      "Kansas City": "The Kansas City strip's tight grain and bold beefiness outmuscle this Pinot's delicate structure, but the wine's acidity works hard to cleave the fat between bites and keep the finish from going heavy. It's a workmanlike pairing — the steak leads, the wine keeps pace.",
      "Burrata": "The wine's red fruit and gentle acidity provide the only seasoning this mild, creamy cheese needs, acting almost like the finishing salt and olive oil you'd normally pour over it. Without the wine's brightness the burrata reads flat; together it tastes like the dish was always meant to have a glass next to it.",
      "Sauteed Garlic Spinach": "The iron-driven earthiness of this Sta. Rita Hills Pinot locks onto the mineral quality in wilted spinach the same way the grape's terroir pulls from its coastal soils, while the wine's low tannin lets the roasted garlic's sweetness come forward without a bitter clash. Together, the wine lifts what could be a heavy side into something almost savory-bright, and the garlic rounds out the Pinot's slightly stemmy, forest-floor edge."
    }
  },
  {
    name: 'J Davies Ferrington Vineyards',
    category: 'wine-red',
    profile: ['Pinot-Noir','structured','dark-cherry','Sonoma','premium','age-worthy'],
    price: '$140',
    excellent: ['Filet Mignon','Kansas City','Faroe Island Salmon','Roast Half Chicken','Mushrooms'],
    strong: ['Crab Cake','Seared Scallops','House Wedge','Grilled Caesar','Shrimp Bisque'],
    works: ['Cowboy Ribeye','Burrata','Prime Tartare'],
    avoid: ['The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Filet Mignon": "The dark cherry fruit and restrained tannin structure of this Sonoma Pinot match the filet's lean myoglobin richness without overwhelming its subtle, buttery center — the wine brings the weight the cut doesn't have on its own. What the guest tastes is the maillard crust of the filet suddenly deepened, while the wine's acidity keeps each bite clean and pulls the next sip forward.",
      "Kansas City": "The Kansas City strip's denser muscle fiber and pronounced beefy fat cap give the Ferrington's firm tannin structure something to grip, and the wine's dark cherry core mirrors the strip's natural sweetness just below the crust. The result is a longer, meatier finish than either delivers alone — the fat coats the palate and softens the tannin, while the wine's acid cuts through and resets.",
      "Faroe Island Salmon": "The Ferrington's bright acidity and restrained oak act like a squeeze of lemon against the salmon's high omega-3 fat content, cutting the richness the same way citrus would, while the dark cherry fruit plays against the fish's natural umami without a tannic clash. On the palate, the salmon's fatty silkiness makes the wine taste rounder and more lush, and the wine keeps each bite from feeling heavy.",
      "Roast Half Chicken": "The Maillard browning on the roasted chicken skin produces the same caramelized, savory compounds that amplify the Ferrington's dark cherry and subtle spice, creating a flavor echo between the bird's rendered fat and the wine's mid-palate richness. Together, the chicken's roasted juices make the wine taste broader and more generous, while the Pinot's acidity keeps the richness from sitting flat on the tongue.",
      "Mushrooms": "Pinot Noir and sautéed mushrooms share glutamates — the same umami compounds that drive the wine's earthy, forest-floor character are amplified by the mushrooms' cell-broken, browned surface, so each reinforces the other's savory depth. The guest experiences an almost meaty intensity on the finish that neither the wine nor the mushrooms produce on their own.",
      "Crab Cake": "The Ferrington's acidity and red-fruit brightness act as a counterweight to the crab cake's sweet, briny meat and the crispy fried crust's fat, creating a tension that keeps the pairing from reading as heavy. The contrast lands on the palate as a clean, almost citrusy lift after the richness of the cake — the wine makes the crab taste sweeter, and the crab makes the wine taste more supple.",
      "Seared Scallops": "The hard sear on a scallop produces a caramelized crust through the maillard reaction that mirrors the Ferrington's dark cherry and subtle toasted-oak edge, giving the wine's fruit a savory anchor it doesn't have against raw sweetness alone. Together, the scallop's interior custard-like texture softens the wine's structure and the wine's acidity cuts the scallop's natural brininess, leaving a clean, sweet-savory finish.",
      "House Wedge": "The Pinot's bright acidity and dark cherry cut through the fat in the blue cheese dressing the same way a squeeze of lemon would. What lands on the palate is a back-and-forth between the wine's red fruit and the salting sharpness of the cheese, with the iceberg keeping everything clean and cool.",
      "Grilled Caesar": "The char on the romaine pulls out the earthier, more savory side of the Pinot — that Sonoma forest-floor quality — while the anchovy-laced dressing mirrors the wine's umami depth. Together they create a smoky, almost meaty richness that makes the Pinot taste bigger than it is.",
      "Shrimp Bisque": "The bisque's shellfish sweetness and cream fat soften the Pinot's structure, letting the dark cherry and subtle oak come forward as a kind of fruit-and-spice finish to each spoonful. The result feels like a classic French pairing — the wine and the stock share the same coastal, briny-sweet register.",
      "Cowboy Ribeye": "The Pinot's acidity works against the ribeye's intramuscular fat the way a butcher's knife does — it doesn't overpower, it separates, keeping each bite from feeling heavy. The char on the crust picks up the wine's darker fruit compounds and gives the finish a woodsy, almost dried-cherry note.",
      "Burrata": "The Pinot's silky tannins match the burrata's delicate fat structure without trampling it, and the wine's red fruit acts as the acidic brightness the dish itself lacks. Guests get a contrast pairing — the creaminess of the cheese makes the wine taste more structured and defined than it would on its own.",
      "Prime Tartare": "The raw beef's iron-rich umami draws out the darker, more savory edge of the Pinot, turning what reads as fruit-forward into something more mineral and serious. The wine's acidity does the work that capers and shallots do in the dish — it cuts the richness and keeps each bite sharp and clean."
    }
  },

  // ── WINES — CABERNET (bottle) ─────────────────────────────────────────────────

  {
    name: '1881 Napa Valley',
    category: 'wine-red',
    profile: ['Cab','approachable','dark-fruit','smooth','Napa','entry-premium'],
    price: '$85',
    excellent: ['Kansas City','Filet Mignon','Truffle Fries','Mushrooms','Creamed Spinach'],
    strong: ['Cowboy Ribeye','Porterhouse','Brussels and Belly','Au Gratin Potatoes','Bone Marrow'],
    works: ['House Wedge','Grilled Caesar','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Kansas City": "The Cab's dark fruit and soft tannins latch onto the strip's firm, close-grained muscle, and the natural fat cap on the Kansas City gives the wine's smooth finish somewhere to land and linger. What the guest experiences is a long, savory finish where the beef and the fruit merge into a single note rather than trading off.",
      "Filet Mignon": "The filet's buttery texture and mild beefy flavor let the Cab's dark fruit take the lead, so the wine reads almost like a sauce — the plum and black cherry doing the work that a reduction would. That softness on both sides creates a pairing where neither element interrupts the other, just a long, seamless finish.",
      "Truffle Fries": "The dark cherry and subtle earthiness in this Cab lock onto the truffle oil's umami depth, while the wine's smooth tannins cut through the potato fat. You get this back-and-forth of forest floor and fruit that makes both richer than either would be alone.",
      "Mushrooms": "This Cab carries enough dried fruit and soft tannin structure to mirror the glutamate-heavy earthiness in roasted mushrooms without fighting for dominance. The result is a savory loop — each sip pulls more umami out of the mushroom, each bite softens the wine's fruit edge.",
      "Creamed Spinach": "The wine's dark fruit and gentle tannins act as a counterweight to the heavy dairy fat in the béchamel, giving the palate somewhere to reset. What you get is a cleaner finish on both — the cream feels lighter, the wine feels fuller.",
      "Cowboy Ribeye": "The tannins in this Cab bind to the myoglobin and rendered fat on the ribeye, which is textbook why Cabernet and marbled beef work — it's a chemical bond, not a coincidence. That fat softening the tannin opens up the dark-fruit mid-palate and makes the char on the steak taste sweeter.",
      "Porterhouse": "The Porterhouse gives you two textures — the lean strip and the buttery tenderloin — and this Cab's approachable tannin handles both without overwhelming either. The strip's bold, beefy depth amplifies the wine's dark fruit, while the tenderloin fat smooths the finish.",
      "Brussels and Belly": "The caramelized bitterness on the Brussels and the smoky pork fat from the belly create exactly the kind of contrast this Cab's ripe dark fruit is built to resolve. That sweetness in the wine pulls the char and smoke into balance, and the finish stretches long and savory.",
      "Au Gratin Potatoes": "The gruyère and cream in the gratin carry lactic richness that softens this Cab's tannin structure, letting the wine's dark fruit come forward cleanly. What you taste is a rounder, almost velvety sip followed by a savory, cheesy finish that lingers.",
      "Bone Marrow": "Bone marrow is essentially pure collagen fat and umami — it coats the palate in a way that needs tannin to cut through, and this Cab delivers just enough grip to do it. After that reset, the wine's dark fruit reads sweeter and the smoky, mineral depth of the marrow pulls into focus.",
      "House Wedge": "The dark cherry fruit in the 1881 cuts through the fat in the blue cheese dressing the same way acid does, while its smooth tannins leave room for the iceberg's clean crunch. The result is a round, refreshing bite where neither the cheese nor the wine feels heavy.",
      "Grilled Caesar": "The light char on the romaine shares the same smoky, slightly bitter register as the 1881's dark fruit, and the Cab's soft tannins grip the anchovy-driven umami in the dressing without overpowering it. Together they hit a savory, almost meaty depth that makes both feel bigger than they are on their own.",
      "Lardons": "The rendered pork fat in the lardons coats the palate in a way that softens the 1881's tannins, letting the wine's dark fruit come forward against the salty, smoky pork. Every sip after a bite tastes rounder and riper, like the wine stepped up a vintage."
    }
  },
  {
    name: 'Faust Napa Valley Cabernet',
    category: 'wine-red',
    profile: ['Cab','bold','dark-fruit','structured','Napa','approachable'],
    price: '$100',
    excellent: ['Kansas City','Cowboy Ribeye','Truffle Fries','Mushrooms','Bone Marrow'],
    strong: ['Filet Mignon','Porterhouse','Creamed Spinach','Brussels and Belly','Au Gratin Potatoes'],
    works: ['House Wedge','Grilled Caesar','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut']
  ,
    pairingNotes: {
      "Kansas City": "The Faust's firm tannins latch onto the dense muscle fibers of the Kansas City strip the way they would a protein-rich braise, binding to the meat's structure and releasing in a long, savory finish. The strip's leanness keeps the wine's bold fruit from going soft, so every bite re-sets the palate for the next sip.",
      "Cowboy Ribeye": "The Faust's tannic structure has a specific job here — it emulsifies the intramuscular fat of the ribeye on the palate, breaking the richness into something the wine's dark blackberry and cassis can actually lift. What the guest gets is a finish that's simultaneously juicier and cleaner than either the steak or the wine delivers alone.",
      "Truffle Fries": "The Faust shares the same volatile aromatic compounds — earthy, almost fungal — that define truffle oil, so the wine amplifies the truffle rather than fighting it. The tannins then cut the fry's rendered potato fat, keeping the finish dry and pulling the guest right back into the next bite.",
      "Mushrooms": "Both the Faust and the mushrooms are built on glutamates — the wine through its aged structure, the mushrooms through their cell walls — so they stack umami rather than trade it back and forth. The guest experiences a savory depth on the mid-palate that lingers well past the swallow, almost like a second course arrived.",
      "Bone Marrow": "Bone marrow is almost pure fat and collagen, which physically coat and suppress harsh tannins, so the Faust's structure dissolves into pure dark fruit the moment they meet. What's left is a silky, almost port-like richness that makes one of the boldest wines on the list taste like dessert.",
      "Filet Mignon": "The Cab's firm tannins bind to the filet's lean muscle proteins, softening on contact while its dark cherry and cassis fill in where the beef's mild flavor leaves room. What you get is a richer, more complete bite — the wine essentially finishing the steak.",
      "Porterhouse": "The Porterhouse's strip side carries enough intramuscular fat and beefy depth to stand up to Faust's bold tannin structure, while the dark fruit in the wine draws out the char from the sear. Every sip resets the palate and makes the next bite taste like the first.",
      "Creamed Spinach": "The fat in the cream coats the palate and rounds out Faust's grippy tannins, while the wine's acidity cuts through the richness so the dish doesn't read as heavy. The result is a back-and-forth that makes both feel lighter and more defined.",
      "Brussels and Belly": "The charred, bitter edge on the Brussels and the smokiness from the pork belly mirror the toasted oak in the Cab, while the belly's rendered fat softens the wine's tannins on contact. The sweetness from the caramelized Brussels then pulls the dark fruit forward, and the whole thing finishes long.",
      "Au Gratin Potatoes": "The cream and melted cheese in the gratin coat the palate, taming Faust's tannins and letting the wine's dark fruit read sweeter than it actually is. What you taste is a savory, almost velvety finish where neither the wine nor the dish overwhelms the other.",
      "House Wedge": "The high acidity in the Cab cuts through the blue cheese dressing and cleanses the fat from each bite, while the iceberg's cold crunch provides a textural reset between sips. It's a contrast pairing — the boldness of the wine makes the salad's freshness snap.",
      "Grilled Caesar": "The char on the romaine introduces a bitter, smoky compound that echoes Faust's toasted oak, and the anchovy-driven umami in the dressing amplifies the wine's savory, dark-fruit finish. Together they push each other into a deeper, more savory register than either hits alone.",
      "Lardons": "The rendered pork fat in the lardons softens the Cab's tannins immediately, while the salt and smoke off the crisped edges sharpen the wine's dark fruit and make the finish feel longer. It's a small bite that does a lot of work for the glass."
    }
  },
  {
    name: 'Gundlach Bundschu Cabernet',
    category: 'wine-red',
    profile: ['Cab','structured','dark-fruit','earth','Sonoma','medium-full'],
    price: '$115',
    excellent: ['Kansas City','Cowboy Ribeye','Mushrooms','Truffle Fries','Creamed Spinach'],
    strong: ['Filet Mignon','Porterhouse','Brussels and Belly','Bone Marrow','Au Gratin Potatoes'],
    works: ['House Wedge','Grilled Caesar','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Kansas City": "The Cab's firm tannins and dark cherry fruit lock onto the dense, iron-rich muscle fibers of the strip, where the lean beef has nowhere to hide. That grip softens the chew and pulls a wave of blackcurrant and cedar across the finish.",
      "Cowboy Ribeye": "The ribeye's rendered intramuscular fat coats the palate and rounds out the Cab's structured tannins, while the wine's dark plum and earth mirror the char on the bone. What you get is a feedback loop — each bite makes the wine taste richer, each sip resets the fat so the beef tastes cleaner.",
      "Mushrooms": "Both share terpenoid and umami compounds — the wine's earthy undertones and the mushrooms' glutamates are essentially speaking the same language. The result is a savory depth that reads more like a sauce than a pairing.",
      "Truffle Fries": "The sulfur-and-earth aromatic compounds in black truffle mirror the mineral and cassis notes in the Cab, while the potato's starch and fat soften the wine's tannin backbone. The guest experiences a long, savory finish where it's briefly hard to tell where the fry ends and the wine begins.",
      "Creamed Spinach": "The butterfat in the cream sauce clings to the Cab's tannins and strips their astringency, leaving behind the wine's dark fruit and a whisper of oak. The dish turns the wine plush, and the wine cuts through the dairy richness so neither one feels heavy.",
      "Filet Mignon": "The filet's mild, tender profile doesn't push back against the Cab's structure, so the wine does most of the talking — the fruit and tannin frame the beef rather than matching it. It works, but the wine leads; guests who want the steak to star should know that.",
      "Porterhouse": "The strip side engages the tannins directly with its firm, beefy chew, while the tenderloin side softens the wine's edge and lets the dark fruit come forward — two different interactions on one plate. It's a pairing that shifts as you move around the bone.",
      "Brussels and Belly": "The Maillard-caramelized edges of the Brussels and the smoke on the pork belly mirror the wine's toasted oak and dark fruit, while the Cab's tannins cut the rendered belly fat cleanly. The bitterness in the Brussels actually tightens the wine's finish and makes it taste fresher than it would on its own.",
      "Bone Marrow": "The cab's firm tannins and dark-fruit density cut through the rendered fat in the marrow while its earthy undertones amplify the smoky, umami depth. Together, the fat coats the palate and softens the wine's structure, pulling out a velvety richness that neither delivers alone.",
      "Au Gratin Potatoes": "The cab's tannins bind to the cream's fat and the gruyère's savory proteins, acting as a palate cleanser between bites while its dark-fruit character adds contrast to the dish's pure dairy richness. The result is a back-and-forth where each sip resets the palate so the next bite of potato tastes fresher, creamier, and more pronounced.",
      "House Wedge": "The acid and tannin in the cab cut through the blue cheese dressing's fat and amplify its pungent, lactic sharpness, while the iceberg's water content softens the wine's earthiness. The cool crunch of the wedge acts as a reset, and the wine's dark fruit emerges cleaner and brighter on the finish.",
      "Grilled Caesar": "The char on the romaine introduces a bitterness that mirrors the cab's tannin structure, while the anchovy-driven umami in the dressing deepens the wine's earthy, savory undertones. On the palate, the smoke from the grill and the wine's dark fruit lock together, creating a finish that reads almost like a bold vinaigrette.",
      "Lardons": "The rendered pork fat and salt in the lardons trigger salivation that softens the cab's tannins and coaxes out its dark cherry and blackcurrant fruit. The fat-to-tannin interaction is the whole story here — the wine tightens, the lardons loosen, and together they land somewhere richer than either one signals on its own."
    }
  },
  {
    name: 'Venge Silencieux',
    category: 'wine-red',
    profile: ['Cab','bold','concentrated','dark-fruit','Napa','structured'],
    price: '$120',
    excellent: ['Cowboy Ribeye','Kansas City','Bone Marrow','Truffle Fries','Mushrooms'],
    strong: ['The Tomahawk','Filet Mignon','Porterhouse','Brussels and Belly','Creamed Spinach'],
    works: ['House Wedge','Au Gratin Potatoes','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut']
  ,
    pairingNotes: {
      "Cowboy Ribeye": "The Silencieux's high concentration of dark fruit and polyphenols is built for the Cowboy's heavy intramuscular fat — the tannins bind to the lipids and protein in each bite, stripping the greasiness and leaving the beef's char and mineral depth fully exposed. The marbling essentially tames the wine, pulling it into a longer, silkier finish while the wine keeps each bite tasting like the first.",
      "Kansas City": "The Kansas City's lean, dense muscle structure needs the Silencieux's bold fruit and firm tannins to add the fat and weight the cut doesn't carry on its own. The wine's concentrated dark-fruit registers against the strip's tight grain and clean beefy flavor, and the tannins grip the protein in a way that extends every bite into a long, savory finish.",
      "Bone Marrow": "The Silencieux's concentrated blackcurrant and dark plum surge forward the moment the marrow's rendered fat coats the palate, using that lipid layer as a delivery mechanism for the wine's deepest fruit. The smoke and umami in the marrow then lock with the wine's earthy base notes, producing a finish that reads more like a braise than a simple wine-and-food moment.",
      "Truffle Fries": "The wine's dark fruit and graphite minerality lock onto the 2-4-dithiapentane compounds in truffle oil, amplifying the earthy, funky depth in both directions. A sip after a fry makes the Cab taste more savory and the truffle more luxurious — each one pulling the other into sharper focus.",
      "Mushrooms": "Concentrated Cabernet carries its own umami load from tannin-bound amino acids, and the glutamates in sautéed mushrooms hit that same frequency. The result is a sustained savory wave that lingers well past the swallow, with neither the wine nor the mushrooms dominating.",
      "The Tomahawk": "High-fat marbling in the tomahawk coats the palate and softens the Cab's grippy tannins, while the wine's cassis and dark plum cut through the fat to keep each bite tasting clean. The char from the crust mirrors the wine's oak-driven smoke, so the finish reads as one continuous roasted note.",
      "Filet Mignon": "The filet's mild, buttery protein is a blank canvas, and the Cab's concentrated dark fruit and firm tannins fill that space with bold structure the meat itself doesn't have. The tannins bind to the lean muscle proteins, softening on contact and making the wine feel rounder and the filet feel richer than either would alone.",
      "Porterhouse": "The porterhouse gives you two textures in one cut — the strip's tight grain grips the tannins while the tenderloin side lets the dark fruit come forward, so the wine reads differently with every bite. That contrast keeps the pairing dynamic across the whole plate rather than settling into a single note.",
      "Brussels and Belly": "The bitter glucosinolates in charred Brussels sprouts act as a foil to the wine's dark fruit sweetness, while the rendered pork belly fat mirrors the job marbled beef usually does — relaxing the tannins into something velvety. The smoky pork and the Cab's oak finish pull the whole thing toward a low, resonant char note.",
      "Creamed Spinach": "The fat in the cream sauce coats the palate and tames the wine's tannin structure, letting the Cab's dark fruit read sweeter and rounder than it would against leaner food. The slight bitterness of the spinach underneath cuts the dairy richness and gives the wine's acidity a moment to refresh the palate between bites.",
      "House Wedge": "The cold, high-fat blue cheese dressing softens the Cab's tannins on contact, but the wine's bold dark fruit overpowers the delicate freshness of the iceberg rather than complementing it. It works — the acid in the dressing keeps the wine lively — but the wedge gets the short end of the exchange.",
      "Au Gratin Potatoes": "The wine's dark-fruit concentration and firm tannin structure cut through the heavy cream and melted cheese, while its savory, earthy mid-palate mirrors the potato's starch and fond. What you get is a richer, more complete bite — the wine lifts the dairy without letting it sit heavy on the palate.",
      "Lardons": "The bold dark-fruit and grippy tannins in the Silencieux latch onto the rendered pork fat and salt, the same way a big Cab interacts with marbled beef — fat softens tannin, tannin cuts fat. The result is a cleaner finish than either delivers alone, with the wine's fruit coming forward once the salt clears."
    }
  },
  {
    name: 'Austin Hope Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['Cab','bold','rich','dark-fruit','Paso-Robles','full-bodied'],
    price: '$135',
    excellent: ['Cowboy Ribeye','Kansas City','Bone Marrow','Truffle Fries','Brussels and Belly'],
    strong: ['The Tomahawk','Filet Mignon','Porterhouse','Mushrooms','Creamed Spinach'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Cowboy Ribeye": "The Austin Hope's high tannin load binds to the intramuscular fat in the ribeye, breaking it down on the palate and amplifying the char and beef drippings. Every bite makes the wine taste rounder and more fruit-forward, every sip makes the steak taste meatier — the pairing keeps building on itself.",
      "Kansas City": "The Kansas City's tighter grain and lower fat content let the wine's dark cherry and cassis lead, with the bold, beefy flavor of the strip acting as a savory anchor that draws out the wine's structure without overwhelming its fruit. The firm chew of the steak holds up against the Cab's weight so neither one bulldozes the other.",
      "Bone Marrow": "The wine's dark fruit and graphite minerality run directly into the umami depth and smoke in the roasted marrow, while the tannins grab the lipid-rich fat coating the palate and pull it clean. What's left is a long, savory finish with the wine's fruit sitting where the fat just was.",
      "Truffle Fries": "Truffle's volatile sulfur compounds and the wine's oak-derived vanillin share the same aromatic register, so the earthiness in both amplifies rather than competes. The crisp fry texture creates a brief textural contrast that resets the palate between sips, keeping the wine's dark fruit fresh through each round.",
      "Brussels and Belly": "The caramelized sugars and char on the Brussels sprouts mirror the wine's dark fruit and toasted oak, while the bitter leaf edge does the same work as tannin — cutting the richness of the pork belly before the wine even arrives. Together they create a loop of sweet, bitter, and fat that keeps cycling without going heavy.",
      "The Tomahawk": "The sheer fat volume in the Tomahawk — both the thick cap and the marbling through the longissimus — polymerizes with the Cab's tannins on contact, softening the wine's grip while the beef's crust and drippings pull the dark fruit and oak forward. It's a bigger, louder version of what the wine does with the Cowboy, and the bone adds a mineral depth that echoes the wine's graphite finish.",
      "Filet Mignon": "The high tannin structure in the Austin Hope binds with the myoglobin proteins in the filet, softening the wine's grip while the dark plum and cassis fill in the flavor the lean cut doesn't supply on its own. The result is a richer, more complete bite — the steak tastes more indulgent, the wine tastes more plush.",
      "Porterhouse": "The bold dark-fruit and firm tannins in the Austin Hope go head-to-head with the fat cap and strip-side funk of the porterhouse, the tannins cutting through the marbling while the blackberry concentration stands up to the beefy intensity. Every sip resets the palate so the next bite hits just as hard.",
      "Mushrooms": "The earthy mercaptan and umami glutamates in roasted mushrooms mirror the same savory-dark quality in the wine's mid-palate, creating a flavor loop between the two. The combination amplifies depth on both sides — the mushrooms taste meatier, the wine tastes longer.",
      "Creamed Spinach": "The fat in the cream tempers the tannins so the wine's dark cherry and cedar come forward, while the slight bitterness of the spinach echoes the wine's finish. What lands on the palate is a softened, rounder version of the Cab alongside a cream sauce that suddenly has more dimension.",
      "House Wedge": "The cool, high-water crunch of iceberg and the acidity in the dressing act as a palate reset, letting the wine's dark fruit read brighter and less extracted than it does on its own. It's a contrast pairing — the wedge makes the Cab feel lighter, the Cab makes the wedge feel like it belongs at a steakhouse.",
      "Au Gratin Potatoes": "The Maillard-browned cheese crust on the gratin shares caramelized, slightly bitter notes with the wine's oak-derived vanillin and toast, while the cream base softens the tannin load. The bite and the sip trade richness back and forth without either one tipping into heavy.",
      "Grilled Caesar": "The char on the romaine introduces a smoky bitterness that links directly to the wine's roasted dark-fruit and oak tannins, while the anchovy-driven umami in the Caesar dressing thickens the wine's mid-palate weight. The guest gets a smokier wine and a more savory salad than either delivers alone."
    }
  },
  {
    name: 'Jordan Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['elegant','balanced','cedar','dark-cherry','smooth','approachable'],
    price: '$145',
    excellent: ['Filet Mignon','Bone-In Filet','Kansas City','Truffle Fries','Creamed Spinach'],
    strong: ['Cowboy Ribeye','Porterhouse','Shrimp Bisque','Brussels and Belly','Lobster Mac'],
    works: ['House Wedge','Bone Marrow','Lardons','Mushrooms','Chocolate Brownie','Cheesecake','Creme Brulee','Carrot Cake'],
    avoid: ['Prime Tartare','Crab Cake','Seared Scallops']
  ,
    pairingNotes: {
      "Filet Mignon": "Jordan's silky tannins and dried cherry fruit are calibrated for exactly the protein level and fat content of a filet — nothing in the wine overwhelms the cut's delicacy, and the cedar and graphite notes add a subtle savory lift the lean meat can't generate on its own. The two reach the same quiet intensity at the same moment, which is the definition of a seamless pairing.",
      "Bone-In Filet": "The fine-grained tannins in Jordan's Cab bind to the myoglobin in the filet the way salt does — lifting its delicate beefy notes without overwhelming the cut's natural tenderness. Together, the dark cherry in the wine reads almost like a sauce, giving the filet a richness it doesn't have on its own.",
      "Kansas City": "Jordan's cedar and structured tannins lock onto the dense muscle fibers of the Kansas City strip, cutting through the bold beefy fat while the dark cherry adds a subtle sweetness against the crust. The result is a back-and-forth on the palate — the wine scrubs clean, the steak reasserts, and each sip resets the bite.",
      "Truffle Fries": "The earthy 2,4-dithiapentane in truffle and the cedar-derived lignin compounds in Jordan's oak aging share the same aromatic family, so the two amplify each other rather than compete. What the guest gets is a longer, deeper finish — the earthiness of the fry lingers through the wine and becomes almost forest-floor savory.",
      "Creamed Spinach": "The fat in the cream coats the palate in a way that softens Jordan's tannins into something almost silky, while the wine's dark cherry cuts through the dairy richness like a squeeze of brightness. The spinach's iron-forward bitterness finds a counterpoint in the cedar, turning what could be a heavy bite into something that feels surprisingly fresh.",
      "Cowboy Ribeye": "Jordan's tannins polymerize with the intramuscular fat in the ribeye, breaking down the perception of richness while the dark cherry note surfaces against the char. The pairing works because the wine disciplines the fat rather than fighting the cut's boldness, keeping each bite tasting like the first.",
      "Porterhouse": "The Porterhouse gives the guest two proteins in one — the strip's dense beefiness drinks up Jordan's tannins, while the filet side lets the dark cherry and cedar come forward as a flavor rather than a structural element. The wine essentially serves as the sauce that bridges both sides of the bone.",
      "Shrimp Bisque": "The bisque's shellfish-derived sweetness — built from caramelized mirepoix and shrimp shells — mirrors the dark cherry in Jordan's Cab, creating a fruit-meets-brine bridge that reads as savory rather than sweet. The wine's tannins cut the cream's weight just enough that the bisque finishes clean instead of heavy.",
      "Brussels and Belly": "The Maillard-browned pork belly fat softens Jordan's tannins the same way a ribeye would, while the bitter, charred edges of the Brussels find their match in the wine's cedar and dried herb notes. The guest experiences the smoke from the belly and the fruit from the wine trading off on the finish, with the bitterness of the sprouts keeping it from going sweet.",
      "Lobster Mac": "The Jordan's fine-grained tannins and dark cherry acidity cut through the heavy béchamel and butterfat that coat the lobster, while the cedar note finds a bridge in the toasted breadcrumb crust. What lands on the palate is a cleaner, brighter version of both — the richness of the mac doesn't flatten the wine, and the wine lifts what would otherwise be a one-note dish.",
      "House Wedge": "The Jordan's bright malic acidity mirrors the tang of the blue cheese dressing, while the cedar and dark cherry create a subtle contrast against the cool, water-dense iceberg. The result is a back-and-forth where each bite of the wedge resets the palate and makes the wine taste more fruit-forward than it does on its own.",
      "Bone Marrow": "The Jordan's polished tannins bind to the collagen-rich fat of the marrow the same way they would with a well-marbled steak, while the cedar oak note echoes the smoke from the roasting process. Together, the wine pulls the marrow's richness into focus without letting it sit heavy — what you get is umami depth with a clean finish.",
      "Lardons": "The rendered pork fat and salt in the lardons act as a tannin softener, smoothing the wine's structure and pushing its dark cherry fruit forward. What the guest experiences is a sudden roundness in the Jordan — the bacon's caramelized edges mirror the oak, and the salt amplifies the wine's fruit like a seasoning would.",
      "Mushrooms": "The glutamates in the mushrooms sync directly with the savory, cedar-driven mid-palate of the Jordan, creating an umami loop where each amplifies the other's depth. The wine's dark cherry then surfaces on the finish as a contrast, keeping the pairing from going too far into earth and giving the whole thing a lift.",
      "Chocolate Brownie": "The Jordan's dark cherry and cassis share the same flavor family as the cocoa solids in a dense brownie, so instead of fighting the sweetness, the fruit reads as part of the dessert itself. What the guest gets is an extended chocolate finish — the wine's tannins dry the sugar slightly, sharpening the brownie's bitterness into something more complex.",
      "Cheesecake": "The tangy acidity in the cream cheese filling mirrors the Jordan's malic brightness, while the buttery graham crust softens the wine's tannin structure much the way fat does with red meat. The pairing works because the cheesecake's richness doesn't mute the wine — the acidity in both keeps pulling the palate back to attention.",
      "Creme Brulee": "The contrast does the work here — the Jordan's dry tannins and cedar bitterness set against the vanilla custard's sweetness make both feel more defined, the way a pinch of salt sharpens caramel. When the guest cracks through the burnt sugar crust, that slight bitterness finds a bridge with the oak in the wine, and the finish reads as long and almost spiced.",
      "Carrot Cake": "The cedar and dried dark-cherry in the Jordan cut through the cream-cheese frosting's fat while the wine's subtle spice—think clove and black pepper—locks onto the cinnamon and nutmeg in the cake itself. What comes back is a longer, warmer finish where the spice lingers and the wine's tannins clean the sweetness off the palate so neither element feels heavy."
    }
  },
  {
    name: 'Peju Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['Cab','approachable','fruit-forward','smooth','Napa','medium-full'],
    price: '$140',
    excellent: ['Kansas City','Filet Mignon','Truffle Fries','Mushrooms','Creamed Spinach'],
    strong: ['Cowboy Ribeye','Porterhouse','Brussels and Belly','Bone Marrow','Au Gratin Potatoes'],
    works: ['House Wedge','Grilled Caesar','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Kansas City": "The Peju's ripe black-fruit and soft tannins latch onto the Maillard-seared crust of the Kansas City, where the caramelized proteins need a wine with enough fruit weight to match the strip's firm, dense chew. That fruit-forward structure softens the lean muscle fiber on the finish, so the beefiness stretches longer without going dry.",
      "Filet Mignon": "The Peju's low-tannin, fruit-forward profile is exactly what the filet's mild, buttery center fat needs—high tannin would strip it bare, but the soft structure here amplifies the beef's delicate flavor without overpowering it. The result is a finish where the filet's tenderness seems to deepen, and the wine's dark fruit reads almost like a natural sauce.",
      "Truffle Fries": "The Peju's ripe dark fruit bridges directly to the volatile sulfur compounds in the truffle, which share aromatic territory with the wine's earthy mid-palate, while the fries' rendered potato fat softens the tannins into something almost silky. Together, the umami from the truffle oil amplifies the wine's savory core, and the whole thing tastes more expensive than either element alone.",
      "Mushrooms": "Glutamates in the sautéed mushrooms and the Peju's own earthy, fruit-forward tannins are working on the same umami frequency—one botanical, one savory—and they stack rather than compete. On the finish, the mushrooms make the wine taste fuller and the wine makes the mushrooms taste meatier, each pulling the other toward the center.",
      "Creamed Spinach": "The dairy fat and reduced cream in the spinach bind to the Peju's tannins, softening them immediately on contact and rounding out any rough edges in the wine's structure. What comes back is a savory-rich mid-palate where the wine's dark fruit reads almost like a counterweight to the dish's richness, keeping each bite from feeling too dense.",
      "Cowboy Ribeye": "The intramuscular fat running through the ribeye is doing the structural work here—it coats the tannins and unlocks the Peju's black-cherry and plum while the char from the bone-in crust gives the fruit something bold to push against. The finish is long and meaty, with the fat keeping the wine smooth all the way through.",
      "Porterhouse": "The porterhouse gives you two proteins in one cut, and the Peju handles both—its soft tannins don't overwhelm the tenderloin side while the fruit weight holds up to the strip's firmer, beefier chew. That contrast inside a single pairing keeps the wine tasting dynamic across the whole plate rather than locking into one register.",
      "Brussels and Belly": "The dark cherry and plum in the Peju cut through the pork belly's rendered fat while its soft tannins mirror the caramelized char on the Brussels. Together they pull out a sweetness in the belly that you wouldn't taste on its own.",
      "Bone Marrow": "The fruit-forward profile of the Peju acts as an acid foil to the bone marrow's collagen-rich fat, and its light oak gives the dish a subtle smokiness it doesn't have alone. The result is that the marrow feels less heavy and more like a savory meat course.",
      "Au Gratin Potatoes": "The Peju's bright cassis fruit provides just enough acidity to slice through the Gruyère fat and heavy cream without overwhelming the dish's delicate savory depth. The finish leaves the potato's earthiness front and center rather than letting the cream coat the palate.",
      "House Wedge": "The Peju's soft tannins won't fight the buttermilk and blue cheese, and its red fruit provides a sweet-acid counterpoint to the dressing's lactic tang. The pairing keeps the salad tasting clean and fresh rather than letting the richness of the cheese dominate.",
      "Grilled Caesar": "The char on the romaine produces bitter, smoky compounds that the Peju's ripe fruit absorbs without losing its own brightness, while the wine's round tannins bind to the anchovy-driven umami and soften it. What lands on the palate is a savory, almost meaty richness that makes the Caesar feel more substantial.",
      "Lardons": "The rendered pork fat in the lardons coats the palate in a way that the Peju's fruit-forward acidity is built to cut, stripping the fat and letting the wine's dark berry come forward in contrast to the salty, smoky pork. Each bite resets the palate so the lardons keep tasting crisp rather than greasy."
    }
  },
  {
    name: 'Teeter Totter Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['Cab','bold','structured','dark-fruit','Napa','premium'],
    price: '$150',
    excellent: ['Kansas City','Cowboy Ribeye','Bone Marrow','Truffle Fries','Mushrooms'],
    strong: ['The Tomahawk','Filet Mignon','Porterhouse','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Kansas City": "The Teeter Totter's firm tannins bind to the myoglobin proteins in this lean, densely fibered cut, softening the chew while the wine's dark fruit draws out the beef's natural iron-rich savoriness. The structure of the wine matches the structure of the steak — neither overwhelms the other.",
      "Cowboy Ribeye": "The high intramuscular fat in the ribeye coats the tannins in the Teeter Totter and rounds them out, unlocking the wine's dark cherry and black currant rather than letting the tannins run dry. What you get is a long, layered finish where the beef fat and the wine's oak trade off — each amplifying the other's depth.",
      "Bone Marrow": "The Cab's tannins cut through the collagen-rich fat of the marrow while its dark fruit — blackberry, cassis — latches onto the smoky, roasted umami from the bone. What you get is a finish that's savory and long, with the wine tasting fuller and the marrow tasting cleaner than either would alone.",
      "Truffle Fries": "The earthy 2,4-dithiapentane compounds in truffle find a mirror in the Cab's own terroir-driven, dark-fruit depth, while the wine's tannin structure cuts the rendered fat of the fries. The result is an umami loop — each bite makes the wine taste more complex, each sip makes the truffle more pronounced.",
      "Mushrooms": "Mushrooms carry glutamates that amplify tannin softness in a bold red, and the Cab's black fruit bridges directly to the mushrooms' savory, forest-floor earthiness. The guest tastes a deeper, almost meaty richness from the mushrooms and a rounder, more velvety mid-palate from the wine.",
      "The Tomahawk": "The Cab's firm tannins bind to the myoglobin proteins in the heavily marbled Tomahawk, softening as the intramuscular fat coats the palate and unlocks the wine's dark cherry and cedar notes. The guest gets a progressively richer, more integrated bite — the steak tastes beefier and the wine tastes more structured with every cut.",
      "Filet Mignon": "The filet's lean, tender muscle has little fat to soften tannins on its own, so the Cab's dark fruit steps in to contrast the meat's subtle buttery mildness rather than match its weight. The payoff is a vivid contrast — the wine's boldness makes the filet's delicacy feel more refined, and the meat's tenderness smooths out the Cab's edges.",
      "Porterhouse": "The Porterhouse gives the Cab two conversations at once — the tannins grip the lean strip side while the fat from the NY side softens the wine's structure and pulls out its cassis and plum. Guests experience a shifting pairing as they move across the cut, with the wine tasting different on each side of the bone.",
      "Creamed Spinach": "The dairy fat and cream in the spinach coats the palate and rounds out the Cab's tannin grip, while the wine's dark fruit cuts through the richness the way acid would in a sauce. What comes through is a savory, almost dessert-like finish — the cream tastes lighter, the wine tastes more structured, and the spinach's inherent bitterness disappears entirely.",
      "Brussels and Belly": "The caramelized char on the Brussels and the rendered pork belly fat create two separate entry points — bitterness from the Brussels echoes the Cab's tannin, while the belly's smokiness locks onto the wine's dark fruit and oak. Together they deliver a layered, barbecue-forward finish where the pork tastes sweeter and the wine tastes darker and longer.",
      "House Wedge": "The Cab's firm tannins and dark fruit cut straight through the buttermilk fat in the blue cheese dressing, while its acidity mirrors the brightness of the iceberg. What lands on the palate is a reset — each bite of the wedge wipes the slate clean, and the wine comes back fresher on the finish.",
      "Au Gratin Potatoes": "The structured tannins in this Cab bind to the casein proteins in the gruyère and cream, softening the wine's grip while the potato's starch rounds out the dark fruit. The result is a richer, more velvety mid-palate than either delivers on its own.",
      "Grilled Caesar": "The char on the romaine produces the same Maillard compounds you'd find on a seared steak, giving the Cab's bold dark fruit a savory anchor to cling to. The anchovy-driven umami in the dressing elongates the wine's finish, pulling the fruit and oak into a longer, meatier close."
    }
  },
  {
    name: 'J. Davies Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['Cab','structured','elegant','dark-cherry','Napa','Diamond-Mountain','premium'],
    price: '$150',
    excellent: ['Filet Mignon','Kansas City','Truffle Fries','Mushrooms','Creamed Spinach'],
    strong: ['Cowboy Ribeye','Porterhouse','Bone Marrow','Brussels and Belly','Au Gratin Potatoes'],
    works: ['House Wedge','Grilled Caesar','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Filet Mignon": "The filet's low fat marbling means it won't overwhelm the wine's refined structure, and the J. Davies' dark cherry and polished tannins mirror the natural sweetness of the beef's myoglobin as it rests. What the guest gets is a seamless texture match — silky meat, silky wine — where neither one overpowers.",
      "Kansas City": "The Kansas City's denser muscle fiber and bolder beefy character give the J. Davies' firm tannin structure something to grip, allowing the wine's dark cherry and cedar to emerge rather than get swallowed. The fat cap, when rendered, softens the tannins just enough that the wine's elegance comes through on the back end.",
      "Truffle Fries": "The sulfur compounds in black truffle — specifically dimethyl sulfide — resonate directly with the earthy, savory undertones in a structured Cab, creating a bridge that makes both smell and taste deeper. The rendered duck fat or beef tallow on the fries coats the palate and softens the tannins, letting the wine's dark cherry surface cleanly.",
      "Mushrooms": "Glutamates in the roasted mushrooms amplify the savory, umami-driven mid-palate of the J. Davies, turning what's already a structured wine into something that reads almost meaty. The earthy, forest-floor quality in the Cab's finish locks into the mushrooms' terroir-like depth, and the two become almost indistinguishable in origin.",
      "Creamed Spinach": "The fat in the cream sauce binds to the wine's tannins and strips their astringency, revealing the J. Davies' dark cherry fruit and subtle graphite in a way that a leaner pairing wouldn't allow. The oxalic acid in the spinach provides just enough brightness to keep the richness from flattening the wine's structure on the finish.",
      "Cowboy Ribeye": "The cab's firm tannins bind to the myoglobin and rendered fat in the ribeye, while its dark-cherry fruit cuts through the richness without washing it out. Every sip resets the palate so the next bite of that marbled cap tastes as big as the first.",
      "Porterhouse": "The structured tannins grip the lean strip side and soften the chew, while the wine's dark fruit amplifies the deep, mineral beefiness that comes from cooking on the bone. You get a longer, more layered finish on both the meat and the wine than either delivers alone.",
      "Bone Marrow": "The cab's grippy tannins cut through the unctuous fat of the marrow while the wine's dark-cherry fruit meets the smoky, roasted depth of the bone. The fat coats the palate in a way that makes the wine's fruit seem almost sweeter and more expressive on the finish.",
      "Brussels and Belly": "The wine's fruit tannins latch onto the char and rendered pork fat from the belly while its dark cherry mirrors the caramelized edges of the brussels. The bitter, slightly sulfurous note in the sprouts acts as a reset that makes the cab's elegance pop on the back end.",
      "Au Gratin Potatoes": "The fat in the cream and melted cheese coats the tannins and softens the wine's structure, pulling out more of its dark fruit and subtle oak without the cab feeling harsh. The result is a rounder, almost velvety sip that makes the gratin taste richer and more savory than it does on its own.",
      "House Wedge": "The cold, high-fat blue cheese dressing dulls the cab's tannins just enough to let the dark fruit come forward, while the iceberg's clean water content refreshes the palate between sips. It's a contrast pairing — the wine's weight makes the wedge feel lighter, and the wedge makes the wine taste bolder.",
      "Grilled Caesar": "The char on the romaine and the anchovy-driven umami in the dressing mirror the wine's savory, graphite edge and give its tannins something to grip beyond just fat. Together they push the wine toward a darker, smokier expression while the Caesar's creaminess softens any astringency on the finish.",
      "Lardons": "The rendered pork fat in the lardons coats the mouth and tames the cab's tannins, letting the wine's dark-cherry fruit rise above the structure. The salt and smoke from the crisped pork amplify the wine's savory, earthy undertones and stretch the finish considerably longer than the wine achieves on its own."
    }
  },
  {
    name: 'Silver Oak Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['bold','structured','cedar','blackberry','tobacco','elegant'],
    price: '$160',
    excellent: ['Cowboy Ribeye','Kansas City','The Tomahawk','Truffle Fries','Creamed Spinach','Porterhouse'],
    strong: ['Filet Mignon','Ghost Block Cabernet Sauvignon','Bone Marrow','Brussels and Belly','Mushrooms'],
    works: ['Shrimp Bisque','House Wedge','Lardons','Au Gratin Potatoes','Chocolate Brownie','Cheesecake','Creme Brulee'],
    avoid: ['Prime Tartare','Crab Cake','Seared Scallops','Burrata']
  ,
    pairingNotes: {
      "Cowboy Ribeye": "The wine's firm tannins bind to the intramuscular fat in the ribeye, and that cedar-and-blackberry backbone mirrors the char crust from the grill. Every sip scrubs the palate clean, so each bite of that heavily marbled cut tastes like the first one.",
      "Kansas City": "The high tannin structure in Silver Oak meets the dense, protein-forward muscle of the strip, where less fat means more direct tannin-protein interaction — exactly what this wine is built for. The result is a savory depth that pulls dark fruit from the wine and amplifies the beefy, almost mineral quality of the cut.",
      "The Tomahawk": "The Tomahawk's long bone conducts heat differently, leaving a thick fat cap that coats the palate — and Silver Oak's grippy tannins cut through that lipid layer while the blackberry and cedar lock onto the smoke from the sear. You get a back-and-forth where the wine keeps refreshing the fat, and the fat keeps softening the tannins.",
      "Truffle Fries": "The volatile sulfur compounds in black truffle — primarily dimethyl sulfide — resonate with the earthy, forest-floor tertiary notes developing in the Cabernet, while the crispy potato starch and fry oil give the tannins something to grip. The truffle amplifies the wine's depth, making it taste older and more complex than it is.",
      "Creamed Spinach": "The dairy fat and cream reduction in the spinach coat the mouth and soften Silver Oak's tannins almost immediately, letting the blackberry fruit come forward in a way it can't against a straight protein. The slight bitterness of the spinach itself echoes the wine's cedar note, keeping the pairing from going too rich.",
      "Porterhouse": "The Porterhouse gives you two muscles — the lean strip side engages the tannins directly while the tenderloin side, with its butter-soft texture, lets the blackberry fruit open up. Silver Oak's structure holds through the whole steak rather than flattening out, which is exactly what you need against a cut this size.",
      "Filet Mignon": "The filet's low fat content and fine grain don't offer enough structure to fully absorb Silver Oak's bold tannins, so the wine can slightly overpower the meat's delicate flavor — but a compound butter finish on the steak bridges that gap by adding the fat the cut lacks. When the butter is present, the cedar note in the wine plays against it cleanly and the blackberry reads as a finishing accent.",
      "Ghost Block Cabernet Sauvignon": "Silver Oak's cedar-framed structure and bright blackberry set the foundation — Ghost Block takes that same Cabernet blueprint and intensifies it, layering in darker fruit and a more concentrated, brooding depth as the evening settles in.",
      "Bone Marrow": "Roasted marrow is essentially pure rendered fat with a deep umami core from the collagen breakdown, and Silver Oak's tannins latch onto that fat aggressively, cutting through in a way that keeps the richness from becoming cloying. The smoky char on the bone amplifies the wine's cedar character, and for a moment the two taste like they were cooked together.",
      "Brussels and Belly": "The Cab's firm tannins and blackberry fruit cut through the pork belly's rendered fat, while its cedar note mirrors the smoke on the Brussels. The bitterness of the charred Brussels and the wine's structure cancel each other out, leaving the sweetness of the glaze and the fruit of the wine front and center.",
      "Mushrooms": "Glutamates in the mushrooms bind to the tannins in the Cab, softening the wine's structure while amplifying its earthy, forest-floor undertones. What you get is a longer, richer finish on both — the wine tastes more velvety and the mushrooms taste more deeply savory.",
      "Shrimp Bisque": "The bisque's cream and shellfish sweetness soften the Cab's tannins, letting the wine's blackberry fruit read as a counterpoint to the briny, sweet shrimp. The contrast keeps the bisque from feeling heavy and gives the wine a cleaner, brighter finish than it would have on its own.",
      "House Wedge": "The fat in the blue cheese dressing coats the palate and temporarily mutes the Cab's tannins, letting the wine's cedar and dark fruit come through more clearly. The iceberg's cold crunch resets the palate between sips, keeping the wine tasting fresh and structured throughout.",
      "Lardons": "The rendered pork fat in the lardons softens the Cab's grippy tannins, while the salt in the crisped bacon draws out the wine's blackberry and dark fruit. Together, they hit a savory-fruit balance that makes both the bacon and the wine taste more complete.",
      "Au Gratin Potatoes": "The Maillard crust on the gratin echoes the cedar and toasted oak in the Cab, while the cream and cheese fat round off the wine's tannins mid-palate. The result is a softer, more generous version of both — the wine feels plush and the gratin's richness becomes easier to sustain across the course.",
      "Chocolate Brownie": "The cocoa's bitterness aligns with the Cab's tannin structure, and the blackberry in the wine reads as a fruit layer that the brownie itself is missing. On the palate, the chocolate amplifies the wine's dark fruit and the sugar in the brownie softens any remaining astringency.",
      "Cheesecake": "The cheesecake's lactic tang creates an acid contrast that makes the Cab's fruit pop, while the fat in the cream cheese dulls the tannins enough to let the wine's cedar and blackberry come forward. The sweetness of the cake stays in check because the wine's structure keeps pulling the palate back toward dry.",
      "Creme Brulee": "The Cedar tannins in the Silver Oak act as a palate cleanser against the fat in the cream, while the blackberry fruit finds a mirror in the caramelized sugar crust. The guest gets a savory-sweet back-and-forth where each sip resets the richness and makes the vanilla custard taste brighter."
    }
  },
  {
    name: 'Ghost Block Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['Cab','bold','dark-fruit','structured','Oakville','Napa','premium'],
    price: '$160',
    excellent: ['Cowboy Ribeye','Kansas City','The Tomahawk','Bone Marrow','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Cowboy Ribeye": "The dark-fruit concentration in the Ghost Block has the structural tannins to bind with the intramuscular fat in a heavily marbled ribeye, pulling lipid compounds off the palate so the beef flavor sharpens. Every bite of that charred fat cap releases a wave of blackberry and cassis from the wine that wouldn't be there without it.",
      "Kansas City": "The Ghost Block's firm tannin structure grips the dense myofibrillar proteins in a leaner strip, softening the chew while the dark fruit amplifies the Maillard-driven crust. The result is a longer, richer finish on the beef than either delivers alone.",
      "The Tomahawk": "The sheer fat volume in a tomahawk needs tannin mass to clear it, and Ghost Block's bold structure does exactly that — scrubbing the palate between bites so the marbling reads as richness rather than grease. The dark fruit fills the gap left behind, making each bite feel like the first.",
      "Bone Marrow": "The Ghost Block's dark-fruit intensity meets the deep umami and rendered fat of roasted marrow on equal footing, where the wine's tannins cut the slick oleic fat and its fruit mirrors the subtle sweetness of the bone. What the guest tastes is a savory depth that neither the marrow nor the wine reaches on its own.",
      "Truffle Fries": "The 2-acetylthiazole earthiness in black truffle and the cedary, dark-fruit profile of Ghost Block share volatile aromatic compounds that reinforce each other on the nose before the taste even registers. The wine's tannin dries the fried starch off the palate so the truffle flavor stays forward and clean.",
      "Filet Mignon": "Ghost Block's bold dark-fruit and tannin structure overpowers the delicate texture of a filet, but the butter-basted surface fat acts as a buffer — absorbing tannin and softening the wine so its fruit comes through without stripping the tenderness. The guest gets the wine at its most refined, with the filet staying silky rather than getting lost.",
      "Porterhouse": "A porterhouse gives the Ghost Block two targets at once — the strip side's firm protein anchors the tannin while the tenderloin side's buttery fat softens it, so the wine expresses differently across a single plate. The dark fruit threads through the bold beefy char on the strip and then opens up against the milder filet, making the pairing feel dynamic rather than static.",
      "Mushrooms": "The Cab's dark fruit and graphite tannins lock onto the glutamates in sautéed mushrooms, amplifying that deep, savory umami without competing with it. Together, the earthiness in both stretches long on the palate and makes the wine feel silkier than it does on its own.",
      "Creamed Spinach": "The wine's firm tannin structure cuts through the butterfat in the cream sauce, while its dark cassis fruit adds a subtle contrast to the dish's rich, mineral-driven savory notes. The result is that each bite of spinach softens the wine's grip and pulls out its fruit, making both feel more polished.",
      "Brussels and Belly": "The charred, bitter edges of the Brussels caramelize against the Cab's dark fruit the same way a reduction sauce would, and the rendered pork belly fat tames the tannins mid-palate. What guests get is a smoky-sweet finish where the wine's structure actually makes the belly taste leaner and more complex.",
      "House Wedge": "The Cab's acidity mirrors the brightness of the iceberg and cuts through the blue cheese fat the way a squeeze of lemon would, keeping neither the wine nor the dressing from feeling heavy. The contrast sharpens both — the wine reads fresher, the wedge reads crisper.",
      "Au Gratin Potatoes": "The Gruyère and cream in the gratin bind to the Cab's tannins, softening the wine's structure the same way protein does, while the potato starch creates a neutral backdrop that lets the wine's dark fruit come forward. The pairing works because the richness absorbs the wine's grip without dulling either.",
      "Grilled Caesar": "The char on the romaine introduces a light bitterness that echoes the Cab's oak and tannin, and the anchovy-driven umami in the dressing deepens the wine's dark fruit the way a salted rim changes a cocktail. The combination makes the wine taste darker and the Caesar taste like it just came off the grill."
    }
  },
  {
    name: 'Brandlin Estate Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['Cab','bold','volcanic','structured','Mt-Veeder','Napa','premium'],
    price: '$175',
    excellent: ['Cowboy Ribeye','The Tomahawk','Kansas City','Bone Marrow','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Cowboy Ribeye": "The volcanic minerality in the Brandlin — that iron and graphite backbone from the Napa basalt soils — cuts through the ribeye's heavy intramuscular fat and acts as a palate reset between bites, the way a charred crust does. The high-protein fat in the marbled meat then binds the tannins and releases a wave of blackberry and cedar that lingers long after the bite.",
      "The Tomahawk": "The Tomahawk's extended bone-in aging concentrates flavor compounds along the rib that mirror the Brandlin's dark fruit and mineral intensity — it's the same terroir logic, just in a different form. The wine's structured tannins grab the fat cap on each cut and slow the finish, stretching the savory richness into something closer to a braise than a steak.",
      "Kansas City": "The volcanic minerality and firm tannins in this Cab latch onto the dense myoglobin-rich muscle fibers of the strip, while dark fruit and cedar mirror the char from a hard sear. The result is a back-and-forth where each bite softens the wine's structure and each sip amplifies the beef's savory depth.",
      "Bone Marrow": "The high tannin load in this Cab bonds directly with the collagen-rich fat in roasted marrow, chemically softening both — the wine loses its grip and the marrow loses its heaviness. What's left is a long, smoky, umami finish that neither delivers alone.",
      "Truffle Fries": "The volatile sulfur compounds in black truffle — the same chemistry that makes aged Cab smell of tobacco and earth — create a direct aromatic echo between the wine and the fries. On the palate, the wine's tannins cut the rendered fat from the fry oil and reset the mouth for the next bite.",
      "Filet Mignon": "The filet's low fat content and subtle beefy flavor let the Cab's cassis and graphite minerality take the lead, acting more as a sauce than a sparring partner. The wine's tannins bind to the lean muscle protein just enough to extend the finish without overwhelming the tenderloin's delicacy.",
      "Porterhouse": "The strip side of the porterhouse has the muscle density to stand up to the Cab's bold tannins, while the tenderloin side is amplified by the wine's dark fruit the same way butter would be. Guests get two different interactions in a single steak — structure against the strip, softness against the filet.",
      "Mushrooms": "Glutamates in the sautéed mushrooms and the Cab's own fermentation-derived savory compounds stack on top of each other, pushing umami well past what either achieves on its own. The wine's dusty tannins also cut through any residual butter in the pan sauce, keeping the finish clean and earthy.",
      "Creamed Spinach": "The fat in the cream sauce coats tannins that would otherwise grip the palate, rounding the Cab into a rounder, almost velvety texture it doesn't show on its own. The wine's dark fruit and cedar then lift the dish out of pure richness, adding a savory, slightly bitter backbone that keeps each bite from feeling heavy.",
      "Brussels and Belly": "The Maillard-caramelized edges of the Brussels and the rendered pork fat from the belly mirror the Cab's own roasted fruit and oak-driven char, aligning the bitter and smoky registers across both. That shared bitterness — from the cruciferous leaves and the wine's structured tannins — resolves together on the finish rather than competing.",
      "House Wedge": "The Brandlin's volcanic tannins cut through the fat in the blue cheese and buttermilk dressing the same way acid does, stripping the palate clean. What's left is the crisp iceberg and fresh tomato, which make the wine's dark fruit pop brighter on the finish.",
      "Au Gratin Potatoes": "The Gruyère and cream in the gratin coat the palate with fat, which softens the Brandlin's bold tannin structure and lets the wine's cassis and volcanic minerality come forward. Together, the two read almost like a rich, savory reduction — the kind you'd expect to find on a composed plate.",
      "Grilled Caesar": "The char on the romaine shares the same Maillard-reaction compounds as the Brandlin's roasted-fruit character, while the anchovy paste drives umami that makes the wine's tannins feel silkier than they are. The creamy dressing bridges the two, so the finish lands smoky, savory, and surprisingly long."
    }
  },
  {
    name: 'Lail Vineyards Blueprint',
    category: 'wine-red',
    profile: ['Cab','structured','dark-fruit','cedar','elegant','Napa','premium'],
    price: '$175',
    excellent: ['Filet Mignon','Kansas City','Truffle Fries','Mushrooms','Bone Marrow'],
    strong: ['Cowboy Ribeye','Porterhouse','The Tomahawk','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Filet Mignon": "The Blueprint's cedar and dark-fruit structure were built for lean, high-quality beef — the mild fat in the filet softens the tannins just enough to let the wine's cassis and tobacco notes frame the meat's natural umami without overpowering it. The guest gets a bite that tastes more composed than either the steak or the wine does on its own.",
      "Kansas City": "The Kansas City's firm, beefy texture gives the Blueprint's structured tannins something to grip, and the bold bark on the strip amplifies the wine's cedar and graphite. Every bite opens the finish of the wine, turning what's already a long, dark-fruit pour into something that lingers well past the last sip.",
      "Truffle Fries": "The truffle oil carries volatile sulfur compounds — the same aromatic family as the Blueprint's earthy, forest-floor notes — so the two push each other's depth rather than competing. The rendered potato fat softens the wine's tannins, and the finish comes across as indulgent and round in a way the wine alone doesn't quite get to.",
      "Mushrooms": "Glutamate in the mushrooms and the Blueprint's tannins are a textbook umami amplifier — the savory depth of the sauté makes the wine taste fuller-bodied than its structure suggests. What the guest experiences is a feedback loop: each bite makes the wine taste richer, each sip makes the mushrooms taste meatier.",
      "Bone Marrow": "The collagen-rich fat in the marrow coats the palate and physically dissolves tannin, turning the Blueprint's structured grip into something plush and slow. The smoke from the roasting bone mirrors the wine's dark, charred-cedar edge, and the finish reads like a perfect reduction — fatty, savory, and long.",
      "Cowboy Ribeye": "The Blueprint's firm tannins bind to the myoglobin and rendered intramuscular fat in the ribeye, while its dark cassis and cedar cut through the richness without stripping it. What you get is a longer, cleaner finish on the beef — the fat doesn't linger, it evolves.",
      "Porterhouse": "The structured tannins in this Cab grip the strip's lean, dense muscle fibers and the tenderloin's silkier fat simultaneously, while the dark fruit lifts the deep, beefy savoriness of both cuts. The guest gets two different expressions of the same wine in a single bite depending on which side of the bone they're on.",
      "The Tomahawk": "The extended bone-in aging on the tomahawk develops concentrated marrow-driven fat that needs the Blueprint's tannin structure to keep it from coating the palate. The cedar and black fruit in the wine thread through that richness and leave the guest tasting beef, not just fat.",
      "Creamed Spinach": "The Blueprint's tannins, which need protein and fat to soften, find both in the béchamel-style cream base, while the wine's acidity cuts the dairy heaviness the same way a squeeze of lemon would. The result is a richer-tasting spinach and a rounder-feeling wine than either delivers alone.",
      "Brussels and Belly": "The bitter char on the Brussels and the smokiness of the pork belly mirror the cedar and graphite in the Blueprint, while the wine's dark fruit amplifies the caramelized sugars on both. That smoke-fruit-bitter loop keeps cycling through the finish in a way that makes the dish taste more intentional.",
      "House Wedge": "The Blueprint's acidity meets the brightness of the blue cheese and cuts through the fat in the dressing, while the cold, crisp iceberg creates a textural contrast that makes the wine's tannins feel lighter and more refreshing than they would against a cooked dish. It's a reset bite that makes the wine taste younger.",
      "Au Gratin Potatoes": "The starch in the potato layers absorbs the Blueprint's tannins and lets the dark fruit and cedar come forward against the nutty, browned Gruyère crust on top. The gratin's salt and fat round out the wine's structure just enough that the pairing reads as indulgent rather than heavy.",
      "Grilled Caesar": "The char on the romaine pulls out the cedar and graphite notes in the Blueprint, while the anchovy-driven umami in the dressing acts as a natural tannin softener — the same way salt does. The guest gets a smokier, meatier Caesar and a more approachable expression of the wine's structure."
    }
  },
  {
    name: 'Spottswoode Lyndenhurst',
    category: 'wine-red',
    profile: ['Cab','elegant','structured','cedar','St-Helena','Napa','premium'],
    price: '$175',
    excellent: ['Filet Mignon','Kansas City','Truffle Fries','Mushrooms','Creamed Spinach'],
    strong: ['Cowboy Ribeye','Porterhouse','Bone Marrow','Brussels and Belly','Au Gratin Potatoes'],
    works: ['House Wedge','Grilled Caesar','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Filet Mignon": "The Lyndenhurst's fine-grained tannins and cedar-pencil structure meet the filet's lean, butter-soft muscle without overwhelming its delicacy. Together, the wine lifts the meat's subtle mineral quality while the beef softens the wine's edges into something almost silk.",
      "Kansas City": "The cassis fruit and structured tannins in the Lyndenhurst lock onto the Kansas City's dense myoglobin-rich muscle, using the strip's firm chew to slowly release the wine's cedar and dark fruit. The result is a back-and-forth where each bite resets the palate and draws out more complexity from both.",
      "Truffle Fries": "The wine's earthy, graphite undertones speak directly to the volatile sulfur compounds in the truffle, creating a shared aromatic frequency between plate and glass. That bridge amplifies the truffle's depth while the Cab's acidity cuts through the fry's fat, keeping the whole thing from going heavy.",
      "Mushrooms": "Glutamates in the mushrooms and the wine's own savory, forest-floor character stack on each other, doubling the umami signal without requiring any additional richness from either. Guests taste a longer, more resonant finish than either the mushrooms or the wine would deliver on their own.",
      "Creamed Spinach": "The Lyndenhurst's firm acidity cuts through the béchamel's butterfat, preventing the cream from coating the palate and muting the wine's structure. What's left is a clean savory note from the spinach that mirrors the wine's herbal, slightly green edge.",
      "Cowboy Ribeye": "The ribeye's intramuscular fat needs the Lyndenhurst's tannins to bind with, and that fat in turn softens what would otherwise be a grippy finish on the wine. It works, but the ribeye's bold char can push the wine's fruit to the background — guests should sip right after a bite to catch the full picture.",
      "Porterhouse": "The Porterhouse gives the Lyndenhurst two different conversations — the strip's firm texture engages the tannins directly while the tenderloin side softens the wine's structure the way the filet does. The pairing is strong but slightly uneven; the strip side is where the wine really shows.",
      "Bone Marrow": "The marrow's rendered fat and smoky char are almost too rich for the Lyndenhurst's elegant frame, but the wine's cedar and black currant cut through the fat long enough to give the finish some lift. Best when the marrow is spread thin on toast so neither element dominates.",
      "Brussels and Belly": "The wine's cedar and dried dark fruit pull against the bitter char on the Brussels while its structured tannins cut the rendered pork belly fat. The result is a back-and-forth between smoke, sweetness, and grippy red fruit that neither element could create alone.",
      "Au Gratin Potatoes": "The wine's firm tannins and acidity slice through the cream and Gruyère fat, while the cedar and cassis echo the caramelized edges of the gratin. Each sip resets the palate, making the next bite taste richer than the last.",
      "House Wedge": "The wine's acidity mirrors the tang of blue cheese dressing while its cedar structure holds up against the creamy fat without being overwhelmed. The crisp iceberg keeps the pairing light enough that the wine's elegance stays intact.",
      "Grilled Caesar": "The char on romaine introduces a smoky bitterness that the wine's dark fruit and cedar absorb naturally, while the anchovy-driven umami in the dressing amplifies the wine's savory, structured finish. Together they extend the smoky, savory thread longer than either would on its own.",
      "Lardons": "The rendered pork fat and salt in the lardons soften the wine's tannins, letting the cedar and red fruit come forward rather than grip. What reads as a structured Cab on its own becomes rounder, more approachable, and decidedly more indulgent."
    }
  },
  {
    name: 'Nickel & Nickel Cabernet',
    category: 'wine-red',
    profile: ['Cab','single-vineyard','bold','concentrated','Napa','premium'],
    price: '$195',
    excellent: ['Cowboy Ribeye','The Tomahawk','Kansas City','Bone Marrow','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Cowboy Ribeye": "The wine's concentrated dark fruit and high tannin load are built for the intramuscular fat in a heavily marbled ribeye — the fat coats the tannins and unlocks blackberry and graphite notes that stay buried when you sip alone. Every cut of the steak is a reset that makes the next pour taste like a different, better wine.",
      "The Tomahawk": "The sheer mass of fat and muscle in a tomahawk demands a wine with this kind of concentration — the tannins bind to the myoglobin and fat simultaneously, softening the grip while the bone-adjacent meat adds a mineral depth that echoes the wine's single-vineyard intensity. It's a pairing defined by scale meeting scale.",
      "Kansas City": "The leaner, tighter muscle of a Kansas City strip has less fat to tame the tannins, so the wine's dark fruit and concentration go toe-to-toe with the steak's bold, beefy flavor rather than sinking into it. The result is a firmer, more savory pairing where the wine's structure and the strip's chew push back on each other in equal measure.",
      "Bone Marrow": "The Cab's firm tannins bind to the marrow's rendered fat, cutting through the lipid weight while its dark fruit — blackcurrant, plum — mirrors the smoky, umami depth of the roasted bone. What lands on the palate is a moment of pure richness with just enough structure to keep it from feeling heavy.",
      "Truffle Fries": "The wine's concentrated cassis and cedar find a direct line to the truffle's volatile sulfur compounds, amplifying the earthiness rather than competing with it. The Cab's tannins grip the fry's starchy crust, and the whole bite finishes longer and more savory than either would alone.",
      "Filet Mignon": "The filet's lean, buttery tenderness acts as a clean canvas for the Cab's bold dark fruit and polished tannins — the wine provides all the intensity the steak deliberately holds back. What the guest gets is a contrast pairing: the meat's softness makes the wine taste rounder, and the wine gives the filet a backbone it doesn't have on its own.",
      "Porterhouse": "The strip side's intramuscular fat and the tenderloin's clean protein give the Cab two things to work with — tannins latching onto the fat, dark fruit echoing the bold beef flavor from the bone. The result is a full-spectrum pairing where every sip resets the palate and every bite pulls more complexity out of the wine.",
      "Mushrooms": "Roasted mushrooms share pyrazine and glutamate compounds with Cabernet Sauvignon, so the earthy, savory notes in both aren't competing — they're stacking. The guest experiences an umami loop where the mushrooms deepen the wine's dark fruit and the wine pushes the mushrooms' savoriness into something almost meaty.",
      "Creamed Spinach": "The Cab's tannins emulsify against the cream's fat in a way that softens the wine's grip and makes it taste more fruit-forward mid-palate. The pairing trades on contrast — the dairy richness rounds the wine's edges, and the spinach's mineral bitterness keeps the whole thing from going flat.",
      "Brussels and Belly": "The pork belly's rendered fat and the Brussels' caramelized, slightly bitter char speak directly to the Cab's dark fruit and toasted oak — it's the same Maillard reaction browning showing up in both the food and the barrel. The smoke from the belly amplifies the wine's cedar and spice, and the bitterness in the Brussels acts as a palate reset between sips.",
      "House Wedge": "The iceberg's water content and the creamy, acidic dressing dilute the Cab's tannin load just enough to make it approachable mid-meal, while the blue cheese or bacon elements in the wedge give the wine something savory to anchor to. It's a lighter ask for a bold wine, but the fat in the dressing keeps it from clashing.",
      "Au Gratin Potatoes": "The wine's firm tannins cut through the heavy cream and Gruyère fat, while its dark fruit and cedar notes give the dish a savory backbone it doesn't have on its own. Together, the richness of the potatoes softens the wine's structure and what's left is a round, almost velvety finish.",
      "Grilled Caesar": "The charred romaine pulls the same smoky, carbon-forward notes out of this single-vineyard Cab that you'd expect from a much older wine, while the anchovy and Parmesan umami amplifies the fruit. The guest gets a longer finish on both — the wine tastes more complex and the salad tastes more like a course."
    }
  },
  {
    name: 'Shafer 1.5',
    category: 'wine-red',
    profile: ['Cab','bold','Merlot-blended','rich','Stags-Leap','Napa','premium'],
    price: '$195',
    excellent: ['Cowboy Ribeye','Kansas City','Bone Marrow','Truffle Fries','Mushrooms'],
    strong: ['The Tomahawk','Filet Mignon','Porterhouse','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Cowboy Ribeye": "The Merlot in the blend softens the tannin just enough to let the intramuscular fat from the ribeye coat the palate, while the wine's cassis and dark plum echo the Maillard crust on the steak. Every bite pushes more fruit out of the wine and every sip makes the marbling taste richer.",
      "Kansas City": "The Kansas City's tighter grain and lower fat content lets the Shafer's tannin structure stand up fully, so the wine shows more backbone and dried herb character than it would against a fattier cut. The contrast between the wine's richness and the steak's firm, beefy chew makes both taste more intense.",
      "Bone Marrow": "The fat from the roasted marrow coats the palate and rounds out the Shafer's tannins, while the wine's black fruit and cedar cut through the richness the way a squeeze of lemon would — structurally. What the guest tastes is a single wave of deep, savory fat with just enough grip from the wine to keep it from feeling heavy.",
      "Truffle Fries": "The 2-methylisoborneol and earthy terpene compounds in the truffle directly mirror the forest floor and dried herb notes in this Napa Cab-Merlot blend, and the fry fat softens the wine's tannin mid-palate. The guest gets an amplified earthiness in both — the truffle smells more pronounced and the wine tastes older and more complex than it is.",
      "Mushrooms": "Glutamates in the sautéed mushrooms bind to the wine's tannic structure and suppress bitterness, which lets the Shafer's dark fruit and tobacco come forward without the astringency. The result is a savory, almost meaty loop where the mushrooms taste meatier and the wine tastes like it's been in the glass for an hour.",
      "The Tomahawk": "The Tomahawk's sheer fat volume from the long bone and thick cap needs the Shafer's tannin and acidity to cleanse the palate between bites — without it, the richness stacks up fast. With it, each bite resets, the wine's dark fruit reads brighter against the char, and the guest can actually taste the steak's complexity through the entire portion.",
      "Filet Mignon": "The Merlot in the blend softens the Cab's tannins to match the filet's delicate muscle structure, while the wine's dark fruit and cedar lift the meat's natural butter-like tenderness. Together, the filet's clean, mild fat coats the palate just enough to round the wine's finish into something almost silky.",
      "Porterhouse": "The Cab's firm tannins latch onto the strip side's bold, beefy fat molecules, while the Merlot's plum and mocha mirror the char developing on the bone. The guest gets a back-and-forth between the wine's structure and the steak's two distinct textures — each sip resets the palate for another bite.",
      "Creamed Spinach": "The wine's oak-derived vanilla and the cream's fat content are both lipid-soluble flavor carriers, so they amplify each other rather than compete. What lands on the palate is a richer, more decadent version of both — the spinach's earthy bitterness cutting just enough to keep either from feeling heavy.",
      "Brussels and Belly": "The caramelized sugars on the Brussels and the rendered pork fat from the belly speak directly to the wine's dark fruit and graphite — all of them products of high-heat Maillard or caramelization reactions. The slight bitterness of the charred Brussels leaf acts like a tannin scrub, refreshing the palate so the wine's fruit reads brighter with every bite.",
      "House Wedge": "The lactic acid in the blue cheese dressing softens the Cab's tannin grip, and the iceberg's water content provides a clean, cool reset between sips of a wine this dense. The result is that the wine tastes more approachable and the salad reads as more savory — each making the other easier to enjoy.",
      "Au Gratin Potatoes": "The gruyère and cream in the gratin share the same fatty, nutty richness as the wine's oak aging, creating a flavor overlap rather than a contrast. Where it gets interesting is the starch from the potato absorbing some of the wine's tannin, leaving a softer, more integrated finish on both.",
      "Grilled Caesar": "The char on the romaine introduces smoke and bitterness that mirror the wine's toasted oak and dark fruit, while the anchovy-driven umami in the dressing amplifies the wine's savory, almost meaty mid-palate. Together they create a loop — the wine tastes more structured, the Caesar tastes more complex, and neither overwhelms the other."
    }
  },
  {
    name: 'Cade Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['Cab','bold','structured','Howell-Mountain','Napa','premium','organic'],
    price: '$210',
    excellent: ['Cowboy Ribeye','The Tomahawk','Kansas City','Bone Marrow','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Cowboy Ribeye": "Howell Mountain Cab is grown in volcanic, iron-rich soil that produces tannins with a fine-grained but intense grip — exactly what's needed to cut through the ribeye's heavy intramuscular fat and reset the palate after each bite. The wine's dark cassis and crushed rock minerality lock onto the steak's bold, beefy char and the result is a finish that keeps extending, each element amplifying the other's depth.",
      "The Tomahawk": "The Howell Mountain tannins — grippy, volcanic, high-elevation — latch onto the intramuscular fat of the tomahawk and carry it across the palate instead of letting it coat and stall. What the guest gets is a cut that keeps tasting like itself all the way through, with the wine's dark fruit landing right as the char fades.",
      "Kansas City": "The firm structure of this Cab mirrors the dense, tight grain of the strip — both have backbone, and the wine's cassis and cedar align with the deep Maillard crust rather than fighting against it. The result is a pairing where the beef's bold beefiness actually amplifies the wine's fruit, and the wine returns the favor by extending the finish on every bite.",
      "Bone Marrow": "The high tannin load from Howell Mountain's volcanic soils cuts through rendered marrow fat the way acid can't — physically binding to the lipids and clearing the palate for the next bite. What follows is a smoke-and-dark-fruit loop: the wine picks up the char from the bone, the marrow softens the wine's grip, and neither one lets go.",
      "Truffle Fries": "Truffles carry sulfurous, earthy aromatic compounds — dimethyl sulfide and thiols — that rhyme with the pencil shaving and graphite minerality running through this Howell Mountain Cab. The guest gets a savory depth that reads almost meaty, with the wine's tannins giving the fried potato's richness somewhere to go.",
      "Filet Mignon": "The filet's lean, butter-finished tenderness doesn't have the fat to absorb this Cab's tannin structure, so the wine takes the lead — its dark plum and mocha tones layering over the mild beef like a second sauce. The guest experiences the wine at its most expressive, with the filet's clean finish making every nuance of the Howell Mountain fruit readable.",
      "Porterhouse": "The porterhouse gives the Cab two conversations at once — the strip side's firm, beefy crust anchors the wine's tannins while the tenderloin side softens them, creating a different expression of the same glass across the plate. That contrast keeps both the wine and the cut from feeling one-dimensional through the whole meal.",
      "Mushrooms": "Glutamates in the mushrooms bind to the same savory receptors that the wine's aged, fermented depth is already triggering — it's umami stacking on umami, but the Cab's acidity keeps it from going flat. The guest gets a rich, almost brooding earthiness that makes the wine taste older and more complex than it is.",
      "Creamed Spinach": "The fat in the cream sauce coats the palate and strips away tannin harshness, revealing the Cab's underlying fruit and spice notes that a bigger protein might obscure. What the guest notices is how approachable and round the wine suddenly becomes, with the spinach's iron-mineral edge adding a savory counterweight that keeps the dish from reading as purely rich.",
      "Brussels and Belly": "The Howell Mountain tannins grab onto the pork belly fat while the wine's dark fruit amplifies the caramelized char on the Brussels sprouts, turning the bitter edge into a bridge rather than a clash. Together, the smokiness on the plate softens the wine's structure and the sweetness of the belly pulls out a black cherry depth you wouldn't catch on its own.",
      "House Wedge": "The Cade's firm acidity cuts through the iceberg's cold water content and the bleu cheese fat, while its dark fruit reads as a fresh contrast against the creamy dressing. The result is a cleaner finish on both — the wine lifts the richness off the palate and the wedge resets the tannins.",
      "Au Gratin Potatoes": "The Gruyère and cream in the gratin coat the palate in fat that the Cade's tannins immediately bind to, softening what would otherwise be an aggressive structure. What comes through is a long, savory finish where the potato starch rounds out the wine's minerality and the oak reads as a toasted, almost nutty counterpoint to the dairy.",
      "Grilled Caesar": "The char on the romaine produces the same Maillard compounds that give the Howell Mountain Cab its roasted, graphite character, so the two speak the same language. The anchovy-driven umami in the Caesar dressing amplifies the wine's savory backbone and the creaminess of the dressing softens the tannin grip into something that lingers rather than bites."
    }
  },
  {
    name: 'Darioush Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['Cab','bold','plush','Napa','premium','structured'],
    price: '$215',
    excellent: ['Cowboy Ribeye','The Tomahawk','Kansas City','Bone Marrow','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Cowboy Ribeye": "The Darioush carries a plush, glycerin-rich texture that mirrors the intramuscular fat rendering out of a bone-in ribeye, and its dark cassis fruit locks onto the char crust through shared phenolic compounds. Every bite of marbled beef strips the tannins of any hardness and returns a wave of concentrated black fruit that makes the next sip taste younger and more opulent.",
      "The Tomahawk": "The long bone on a tomahawk means the fat cap has been basting the meat throughout the cook, and the Darioush's velvety tannins were built for exactly that level of lipid richness — they bind, they soften, and they open up into cedar and dark plum. The sheer mass of both demands each other: a lighter wine disappears here, but the Darioush holds its shape and turns the last bite as decadent as the first.",
      "Kansas City": "The Kansas City strip's tighter grain and lower fat content means more concentrated beef flavor hits the palate without fat to buffer it, and the Darioush's plush fruit and polished tannins fill that structural gap without competing with the meat's intensity. The firm chew of the strip activates the tannins slowly, producing a sustained finish where the wine's tobacco and dark fruit fuse with the beef's natural umami.",
      "Bone Marrow": "Bone marrow is almost pure rendered fat with a smoke and mineral edge from the roasting process, which is exactly the kind of richness the Darioush's ripe tannins were designed to cut through and rebalance. Spread on toast, that fat coats the palate and makes the wine bloom — the black fruit expands, the oak reads as warmth rather than wood, and the smoke on the marrow echoes the wine's subtle char.",
      "Truffle Fries": "The Darioush's cassis and cedary tannins lock onto the 2-acetyl-1-pyrroline compounds in black truffle, amplifying earthiness in both directions. What lands on the palate is a deep, almost forest-floor richness — the fat from the fries softens the tannins just enough to let the fruit push through at the finish.",
      "Filet Mignon": "The plush tannins in this Napa Cab bind to the myoglobin proteins in a lean filet, doing the work that intramuscular fat normally would by adding structure and weight to each bite. The result is a pairing where the wine essentially builds the body the cut doesn't have on its own, and the filet's mild, buttery center makes the Darioush's dark fruit taste more precise and focused.",
      "Porterhouse": "The Darioush's firm tannin structure is exactly what the strip side's bold, beefy fat needs — the polyphenols precipitate out the lipids, cutting through richness and resetting the palate for the next bite. On the tenderloin side, that same plush fruit turns gentle, and you get two completely different wine experiences from a single glass.",
      "Mushrooms": "Both the Darioush and sautéed mushrooms are loaded with glutamates — the wine through its aged fruit complexity, the mushrooms through free glutamic acid — and when they meet, that shared umami frequency doubles rather than adds. The earthiness in the wine reads as more savory and less tannic, and the mushrooms take on a meaty depth that makes them feel like a course of their own.",
      "Creamed Spinach": "The dairy fat and cream in the spinach coats the palate in a way that smooths the Darioush's tannin grip, pulling the wine's blackcurrant and mocha notes into the foreground. What the guest tastes is a sudden sweetness in the wine they didn't notice before — the creaminess acts as a tannin buffer and the Cab finishes longer and rounder than it does alone.",
      "Brussels and Belly": "The Maillard-browned pork belly fat and the caramelized bitter edges of the Brussels provide both a fatty buffer for the tannins and a smoky-sweet echo of the Darioush's own toasted oak and dark fruit. That bitter char on the Brussels also mirrors the wine's structure, so instead of fighting each other, the bitterness in both aligns and the sweetness of the belly makes the fruit in the wine pop.",
      "House Wedge": "The cold, high-water-content iceberg and the acidity in the blue cheese dressing drop the palate temperature and cut through the Darioush's plush body, making a bold Napa Cab taste unexpectedly fresh and lifted. It works as a palate reset — the wine's tannins read lighter against the creamy-acidic dressing, and the dark fruit comes across as almost bright.",
      "Au Gratin Potatoes": "The browned, crusted cheese on top of the gratin brings Maillard compound depth that echoes the Darioush's toasted oak, while the béchamel beneath softens the tannin grip the way a fat-rich sauce would. The guest gets a wave of richness from the potato, then the wine's structure cuts through it cleanly, making each bite feel like it resets without losing warmth.",
      "Grilled Caesar": "The Darioush's plush dark fruit and toasted oak lock onto the char from the romaine and the anchovy-driven umami in the dressing. Together they amplify each other's depth — the wine's richness keeps the smoke from turning bitter, and the Caesar's salt pulls the fruit forward."
    }
  },
  {
    name: 'Heitz Trailside Vineyard',
    category: 'wine-red',
    profile: ['Cab','structured','mint','cedar','Rutherford','Napa','premium'],
    price: '$220',
    excellent: ['Filet Mignon','Kansas City','The Tomahawk','Truffle Fries','Bone Marrow'],
    strong: ['Cowboy Ribeye','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Filet Mignon": "The Trailside's eucalyptus and cedar cut through the butter baste on the filet, giving the wine's firm tannins something lean and clean to grip. What the guest gets is a pairing where neither overwhelms — the mint lifts the meat's delicacy instead of burying it.",
      "Kansas City": "The cedar and graphite structure in this Cab mirrors the dry-aged, mineral quality of the Kansas City strip, while the tannins meet the strip's firmer chew head-on. The result is a handshake between two bold, no-nonsense personalities — each one sharpening the other's edge.",
      "The Tomahawk": "The Trailside's firm tannins are doing real work here, binding to the intramuscular fat in the tomahawk and scrubbing the palate clean between bites. The mint and cedar ride up against all that rendered richness and keep the wine tasting fresh rather than buried.",
      "Truffle Fries": "The wine's cedar and dried herb notes are in the same aromatic family as truffle's earthy, forest-floor compounds, so they reinforce rather than compete. What lands on the palate is a layered earthiness — the fries bring the funk, the wine brings the structure, and together they feel intentional.",
      "Bone Marrow": "The Trailside's grippy tannin structure cuts through the pure rendered fat of the marrow, resetting the palate the way a squeeze of lemon would — but with cedar and dark fruit instead of acid. The smokiness from the roasting pulls the wine's savory, dried-herb character to the front.",
      "Cowboy Ribeye": "The eucalyptus and mint in the Trailside act as a cooling counterpoint to the heat and char on a bone-in ribeye, while the tannins grip the marbled fat and stretch the finish. Every sip after a bite of the crust resets the wine's fruit and makes it taste younger and more vivid.",
      "Porterhouse": "The porterhouse gives you two textures in one cut — the strip's firm chew and the filet's tenderness — and the Trailside's structure is precise enough to work with both simultaneously. The cedar and mint sharpen the strip side while the wine's fruit softens into the filet without overpowering it.",
      "Mushrooms": "The cedar and dried herb character in the Trailside speaks directly to the glutamates in the mushrooms, two sources of savory depth meeting on the same register. What you get is a longer, rounder finish — the wine lifts the earthiness off the palate instead of letting it sit.",
      "Creamed Spinach": "The Cab's firm tannin structure cuts through the butterfat in the cream, and the wine's mint and cedar give the dish a subtle herbal lift it wouldn't have on its own. The result is a cleaner, brighter bite — the richness lands without coating the palate.",
      "Brussels and Belly": "The Trailside's mint and cedar notes key directly into the caramelized bitter edge of the Brussels, while the wine's tannins grab onto the pork fat and pull it through a longer finish. That char and smoke on the belly makes the fruit in the Cab read darker and more savory — the wine tastes older than it is.",
      "House Wedge": "The acid in the Cab cuts through the blue cheese dressing and resets the palate between bites, while the wine's structure gives the iceberg's water content something to push against. It's a contrast pairing — the freshness of the wedge makes the wine's cedar and dark fruit feel more expressive.",
      "Au Gratin Potatoes": "The Gruyère and cream in the gratin coat the palate in fat, and the Trailside's tannin acts as a solvent — binding to the protein in the cheese and pulling the richness off the tongue. What remains is the potato's starch sweetness alongside the wine's cedar, which reads almost like a savory spice finish.",
      "Grilled Caesar": "The char on the romaine introduces a bitter, smoky edge that echoes the cedar in the Trailside, and the anchovy-driven umami in the dressing amplifies the wine's fruit without competing with it. The Cab's acidity cuts the emulsified fat in the Caesar and resets the palate for the next bite."
    }
  },
  {
    name: 'Frias Block 5',
    category: 'wine-red',
    profile: ['Cab','bold','concentrated','Spring-Mountain','Napa','premium','structured'],
    price: '$225',
    excellent: ['Cowboy Ribeye','The Tomahawk','Kansas City','Bone Marrow','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Cowboy Ribeye": "The concentrated Spring Mountain tannins in the Frias bind directly to the intramuscular fat in the ribeye, breaking down the richness and converting it into a sustained, savory finish. The wine's density matches the steak's weight — neither overpowers the other, and the marbling makes the Cab's dark fruit read almost like a sauce.",
      "The Tomahawk": "The extended bone contact in the Tomahawk develops a deeper, more mineral-driven fat than a standard ribeye, and the Frias Block 5's concentration and structure have the mass to meet it without getting swallowed. Every sip after a bite pulls that bone-adjacent richness across the palate and stretches the finish well past where the meat ends.",
      "Kansas City": "The wine's mountain tannins — grippy and fine-grained from Spring Mountain elevation — lock onto the myoglobin-dense muscle fibers of this lean, hard-seared strip, giving the protein something to wrestle with. That friction softens the tannin's grip and drives a long, iron-and-black-fruit finish neither can hit alone.",
      "Bone Marrow": "The wine's concentrated dark fruit and pencil-shaving structure cut through the collagen-rich fat of roasted marrow, where tannin binds to lipid molecules the way it binds to protein — scrubbing the palate clean between bites. What's left is a loop of savory umami and cassis that keeps deepening as the marrow fat coats the back of the throat.",
      "Truffle Fries": "Truffles share sulfur-based aromatic compounds — dimethyl sulfide and androstenol — with the earthy, forest-floor notes that Spring Mountain Cab picks up from its volcanic soils, so both are essentially speaking the same chemical language. The salt and rendered potato fat round the tannin down to silk, and the guest gets a wave of deep earth with none of the roughness.",
      "Filet Mignon": "The filet's mild, low-fat muscle gives the wine's bold structure the lead role, letting the concentrated black cherry and cedar in the Cab define the flavor rather than reacting to a dominant cut. The butter baste on the filet softens the tannin just enough that the wine's fruit comes forward, turning a restrained steak into something with real presence.",
      "Porterhouse": "The strip side brings the fat-marbled boldness to match the wine's concentration, while the tenderloin side offers a lean, quiet contrast that lets the Cab's dark fruit surface between bites. Moving across both muscles with this wine is like hearing the same chord played loud then soft — the structure holds, but the texture keeps shifting.",
      "Mushrooms": "Roasted mushrooms are loaded with glutamates and the same earthy terpenoid compounds that live in Spring Mountain Cab's aromatic profile, so the pairing isn't contrast — it's echo on echo. Tannin grips the mushrooms' meaty cell walls and the savory loop just keeps running.",
      "Creamed Spinach": "The dairy fat and cream reduction in the spinach coat the palate and soften the wine's assertive tannin structure, which would otherwise dominate a lighter dish. That fat bridge lets the wine's dark fruit and cassis come through clean against the savory, slightly mineral finish of the spinach.",
      "Brussels and Belly": "The caramelized bitterness of charred Brussels sprouts mirrors the wine's graphite and dark-roast edge, while the rendered pork belly fat does the same work cream does — it lubricates the tannin and pulls the wine's fruit to the surface. The smoky, sweet-bitter pork fat finish and the wine's concentrated black fruit hit simultaneously and neither one lets go.",
      "House Wedge": "The high tannin structure in this Spring Mountain Cab cuts through the fat in the blue cheese and buttermilk dressing, while the wine's dark fruit lifts against the cold, acidic bite of the iceberg. You get a reset on the palate with every sip — the wedge keeps the wine fresh, and the wine keeps the salad from feeling heavy.",
      "Au Gratin Potatoes": "The concentrated dark fruit and grippy tannins in this Cab lock onto the milk proteins and caramelized edges of the gratin, creating a bridge between the wine's savory minerality and the potato's starchy sweetness. What lands on the palate is a kind of slow richness — the wine elongates the finish on the cream, and the dairy softens the Cab's bold structure.",
      "Grilled Caesar": "The char on the romaine introduces a smokiness that mirrors the roasted, earthy depth of this Spring Mountain Cab, and the anchovy-driven umami in the dressing amplifies the wine's savory tannins. Together they create a back-of-the-palate depth that makes both feel more complex than either does alone."
    }
  },
  {
    name: 'Far Niente Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['bold','rich','blackcurrant','vanilla','structured','polished'],
    price: '$250',
    excellent: ['Filet Mignon','Bone-In Filet','Cowboy Ribeye','Truffle Fries','Bone Marrow','Lobster Mac'],
    strong: ['Kansas City','The Tomahawk','Creamed Spinach','Brussels and Belly','Mushrooms'],
    works: ['House Wedge','Shrimp Bisque','Au Gratin Potatoes','Chocolate Brownie','Cheesecake','Creme Brulee','Carrot Cake'],
    avoid: ['Prime Tartare','Crab Cake','Seared Scallops','Burrata']
  ,
    pairingNotes: {
      "Filet Mignon": "The vanilla and blackcurrant in Far Niente act as a flavor amplifier for the filet's mild, iron-rich meat — the wine's fruit fills in what the lean cut doesn't offer on its own. The tannins bind to the myoglobin in each bite and soften on contact, turning the filet's buttery texture into something that feels almost silky against the wine's finish.",
      "Bone-In Filet": "The bone adds a marrow-adjacent savoriness to this cut that the Far Niente's dark fruit and vanilla round out, creating a loop between the wine's richness and the meat's depth that a boneless filet doesn't quite reach. Each bite pulls more fruit from the wine, and the wine pulls more of that mineral, bone-kissed flavor from the meat.",
      "Cowboy Ribeye": "The intramuscular fat in the ribeye coats the palate and softens Far Niente's tannins, while the wine's blackcurrant and vanilla cut through the fat just enough to keep each bite tasting clean. The payoff is a long, layered finish — the fat carries the fruit, the tannins reset the richness, and the whole thing builds across the plate.",
      "Truffle Fries": "Truffle's primary aromatic compound, dimethyl sulfide, shares a tonal quality with the earthy, forest-floor notes that emerge in this Cab's mid-palate, so the two don't contrast — they stack. The fat from the fry oil rounds the wine's tannins immediately, and what you're left with is an indulgent, almost decadent finish where the truffle and the dark fruit feel like one note.",
      "Bone Marrow": "The rendered fat in the marrow coats the palate in a way that makes Far Niente's tannins dissolve rather than grip, letting the vanilla and blackcurrant move to the front. The smokiness from the roasted bone ties directly to the wine's oak, and the result is a finish that's simultaneously rich, sweet, and savory in a way neither delivers on its own.",
      "Lobster Mac": "The cab's firm tannins cut through the butter-fat in the béchamel while its blackcurrant fruit plays against the sweetness of the lobster meat — it's a contrast pairing, not a mirror. What guests feel is a cleansing effect after each bite, so the richness never becomes cloying.",
      "Kansas City": "The strip's tight grain and low fat content let the cab's tannins bind to the dense muscle protein without being overwhelmed — that's the structural match here. The result is a longer, meatier finish where the blackcurrant fruit amplifies the beef's natural iron notes.",
      "The Tomahawk": "The tomahawk's heavy intramuscular fat softens the cab's grippy tannins on contact, which is why high-marbled cuts and big Napa reds are such a reliable pairing — fat literally tames tannin. Guests get a round, almost silky mouthfeel from the wine that they wouldn't experience drinking it on its own.",
      "Creamed Spinach": "The dairy fat in the cream sauce coats the palate and rounds out the cab's tannin structure, while the spinach brings just enough vegetal bitterness to echo the wine's herbal backbone. Together they create a savory loop where each sip resets the richness of the dish.",
      "Brussels and Belly": "The caramelized char on the pork belly and the roasted bitterness of the Brussels sprouts mirror the cab's dark fruit and oak-driven vanilla — it's a shared browning-reaction flavor bridge. On the palate, the wine's acidity lifts the pork fat while the fruit sweetness softens the Brussels' bitter edge.",
      "Mushrooms": "Mushrooms and Cabernet share glutamate — the savory compound that drives umami — so this is a flavor amplification pairing rather than a contrast. Guests experience a deep, lingering savoriness where it becomes difficult to tell where the wine ends and the mushroom begins.",
      "House Wedge": "The blue cheese dressing carries enough salt and fat to soften the cab's tannins, while the cold, crisp iceberg provides textural contrast that keeps the wine from feeling too heavy. It works because the wedge resets the palate between sips rather than competing with the wine's weight.",
      "Shrimp Bisque": "The bisque's shellfish sweetness and cream base create a short window where the cab's blackcurrant fruit tracks with the shrimp — but the wine's tannins are bigger than the bisque can fully handle. Guests will enjoy the contrast in small doses, though the pairing works better as a starter course than alongside the full bowl.",
      "Au Gratin Potatoes": "The Cab's firm tannins cut through the heavy cream and Gruyère fat while its blackcurrant acidity lifts what would otherwise be a one-note dish. Together, the wine's fruit brightens the potato's richness and the dairy softens the wine's grip into something almost silky.",
      "Chocolate Brownie": "Dark chocolate and blackcurrant share the same bitter phenolic backbone, so the wine's fruit doesn't compete — it doubles down and amplifies the brownie's depth. The vanilla oak in the Cab then bridges to the brownie's sweetness, extending the finish well past the last bite.",
      "Cheesecake": "The cheesecake's lactic tang from cream cheese acts as an acid counterweight to the Cab's bold tannins, pulling the wine into balance it doesn't quite achieve on its own. The blackcurrant fruit floods in over the cream filling and creates a brief, clean berry finish that cuts right through the fat.",
      "Creme Brulee": "This is a contrast pairing — the wine's tannins and dark fruit push hard against the brulee's delicate vanilla custard, and that tension is the point. The caramelized sugar crust is the bridge, its bitterness meeting the Cab halfway and giving the guest something rich and roasted on both sides.",
      "Carrot Cake": "The warm spice in the cake — cinnamon, ginger, clove — mirrors the spice notes the Cab picks up from new French oak, giving both a shared aromatic language. When they land together, the cream cheese frosting smooths the wine's tannins and the blackcurrant fruit makes the cake's sweetness taste less heavy."
    }
  },
  {
    name: 'Odette Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['Cab','polished','dark-fruit','Stags-Leap','Napa','prestige','elegant'],
    price: '$275',
    excellent: ['Filet Mignon','Kansas City','Truffle Fries','Bone Marrow','Mushrooms'],
    strong: ['Cowboy Ribeye','The Tomahawk','Porterhouse','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Filet Mignon": "The Odette's polished Stags Leap tannins are fine-grained enough to match the filet's delicate muscle structure without overwhelming its butter-soft texture. The dark plum and cassis coat the mild beef and give it a savory depth the cut doesn't generate on its own, making the whole bite taste more complete.",
      "Kansas City": "The Kansas City's firm, well-developed muscle needs a wine with enough structure to stand up to it, and the Odette's dark fruit and backbone match the cut's bold beefiness gram for gram. The wine's polished tannins work through the chew, binding with the strip's rendered fat and releasing a long, savory finish neither achieves alone.",
      "Truffle Fries": "Truffles carry sulfurous, earthy volatile compounds that amplify the wine's own dark, forest-floor complexity — the Odette is already reaching in that direction and the fries pull it the rest of the way. The potato fat and truffle oil soften the Cab's grip and extend the pairing into something genuinely indulgent, with the wine's dark fruit lingering long after the fry is gone.",
      "Bone Marrow": "The cassis and graphite in this Stags Leap Cab cut through the collagen-rich fat of roasted marrow the way a squeeze of lemon would, but with more structural grip from the tannins binding to the gelatin. What you get is a fleeting moment where the wine's dark fruit lifts the smoke and umami off the marrow and turns both into something closer to a rich braise.",
      "Mushrooms": "The earthy pyrazines in the Cab and the glutamate-heavy umami in the mushrooms are essentially the same flavor frequency — one from the vineyard floor, one from the forest floor. Together they build a savory depth that makes both taste more like themselves, longer.",
      "Cowboy Ribeye": "The polished tannins in this Napa Cab latch onto the intramuscular fat running through the ribeye and clean the palate between bites, while the dark cherry fruit lines up against the Maillard crust on the bone. The result is that each sip resets the richness so the next bite of steak tastes as bold as the first.",
      "The Tomahawk": "The long bone on a tomahawk concentrates the beef flavor in the meat closest to it, and this wine's blackcurrant fruit and firm tannin structure have enough weight to stand beside that intensity without fading. The fat from the cap renders into the cut as it rests, and the wine's oak framework gives it somewhere to land.",
      "Porterhouse": "A porterhouse gives you two different cuts in one plate — the lean, mineral strip and the tender, buttery filet — and this Cab's polished structure handles the strip while its dark fruit carries across to the filet side without overpowering it. The tannins firm up against the strip loin's tighter grain and soften against the filet, so the wine actually shifts character depending on which side of the bone you're eating.",
      "Creamed Spinach": "The dairy fat in the cream sauce coats the palate and temporarily softens the Cab's tannins, letting the wine's dark fruit come forward in a way it doesn't when you drink it alone. That brief textural shift makes the wine taste rounder and the spinach taste less rich, so neither one overwhelms the other.",
      "Brussels and Belly": "The char on the belly and the caramelized outer leaves of the Brussels both carry bitter, smoky compounds that mirror the toasted oak in the Cab, while the rendered pork fat needs the wine's tannins to cut through it the same way it needs the acid from the Brussels themselves. You get a back-and-forth between sweet, smoky, and bitter that the wine keeps in check.",
      "House Wedge": "The high acidity and cassis in the Cab hit the fat in the blue cheese dressing and briefly emulsify the richness, while the cold, crisp iceberg provides a textural reset that keeps the wine from feeling heavy. It's a lighter moment in the pairing — the wine's fruit reads as fresher here, almost more like a vinaigrette than a Napa Cab.",
      "Au Gratin Potatoes": "The Odette's polished tannins and dark-fruit density cut through the heavy cream and Gruyère fat without stripping the dish's richness. What you get is a savory, almost chocolatey finish where neither the wine nor the potatoes feel as heavy as they would alone.",
      "Grilled Caesar": "The char on the romaine and the anchovy-driven umami in the dressing mirror the Odette's dark fruit and graphite edge, while the wine's acidity lifts the egg-yolk richness of the Caesar base. The result is a back-and-forth between smoke and black currant that keeps each bite of the salad tasting fresh."
    }
  },
  {
    name: 'Macauley Stagecoach Vineyard',
    category: 'wine-red',
    profile: ['Cab','bold','concentrated','Vaca-Mountains','Napa','prestige'],
    price: '$295',
    excellent: ['Cowboy Ribeye','The Tomahawk','Kansas City','Bone Marrow','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Cowboy Ribeye": "The Stagecoach's mountain-grown tannins are dense enough to bind with the intramuscular fat in the ribeye, pulling flavor compounds out of the marbling that a lighter wine would miss. Together they hit a long, savory finish — rendered beef fat, dark cherry, and cracked pepper — that lingers well past the last bite.",
      "The Tomahawk": "The Tomahawk's long bone imparts an iron-rich, almost gamey depth to the meat near the rib, and the Macauley's concentrated cassis and iron-forward structure meet that intensity head-on. The fat cap's rendered sweetness softens the wine's firm tannins, landing the pairing in a place that's bold but surprisingly smooth.",
      "Kansas City": "The Kansas City strip's tight grain and pronounced beefy funk call for a wine with enough structure to match its firm chew, and the Macauley's Vaca Mountain tannins do exactly that without overpowering the cut's natural flavor. The wine's dark fruit fills in what the lean muscle leaves behind, giving the pairing a fullness the steak alone doesn't have.",
      "Bone Marrow": "Roasted marrow is nearly pure collagen fat and umami, and the Macauley's high tannin concentration bonds with that fat on contact, converting what could be an overwhelming richness into a long, savory finish with hints of char and black olive. The smoke from the bone itself amplifies the wine's own toasted oak, making both taste more complex than either does solo.",
      "Truffle Fries": "The earthy, sulfurous aromatic compounds in black truffle — primarily dimethyl sulfide — resonate directly with the Macauley's own forest-floor and graphite qualities baked in by Vaca Mountain's volcanic soil. The fry's rendered beef-tallow crunch and salt give the wine's tannins somewhere to land, turning each sip into something closer to a full savory course.",
      "Filet Mignon": "The filet's mild, tender muscle and butter-basted crust don't need tannin muscle, so the Macauley's concentrated fruit becomes the dominant voice — coating the lean meat in dark cherry and mocha where the steak's own flavor steps back. The contrast is the point: the wine amplifies what the filet underplays, and the guest experiences the richness of both without either one competing.",
      "Porterhouse": "Stagecoach sits at high elevation on volcanic soils, which drives intense dark fruit and iron-laced tannins that mirror the strip side's bold beefiness while cutting through the fat cap on the tenderloin side. Together they build into a single long finish — charred crust, cassis, and dried herb — that neither could reach alone.",
      "Mushrooms": "The Vaca Mountain terroir pushes this Cab toward graphite and forest floor, which locks onto the glutamates in roasted mushrooms like a key in a lock. What you get is a savory depth that reads almost like aged meat — the wine and the mushroom stop being separate things.",
      "Creamed Spinach": "The wine's firm tannins bind to the fat proteins in the cream, which softens the grip of the Cab and lets the dark fruit come forward against the mineral salinity of the spinach. The contrast turns the wine rounder and the dish cleaner at the same time.",
      "Brussels and Belly": "The caramelized bitterness of charred Brussels and the rendered pork fat act like a counterweight to this wine's concentrated black fruit and tobacco — each one pulling the other off its edge. The smoked belly in particular draws out a meaty, almost jerky-like quality in the Cab that's unexpected and exactly right.",
      "House Wedge": "The lactic fat in the blue cheese dressing coats the palate just enough to tame the tannin structure of this big Cab, and the cold crispness of the iceberg gives the fruit somewhere to land. It's not an obvious move, but the wine reads fresher and the wedge reads bolder.",
      "Au Gratin Potatoes": "The Maillard crust on the gratin shares the same toasted, nutty register as the oak in this Cab, so they reinforce each other without one drowning the other. The dairy richness rounds out the tannins mid-palate, and you're left with a finish that feels like buttered dark bread.",
      "Grilled Caesar": "The char on the romaine introduces a smoky bitterness that actually softens the wine's tannin edge, while the anchovy-driven umami in the dressing amplifies the savory, mineral backbone of the Stagecoach fruit. What lands on the palate is a layered, almost meaty combination that makes the wine feel more structured than it does solo."
    }
  },
  {
    name: 'Freemark Abbey Bosché',
    category: 'wine-red',
    profile: ['Cab','historic','structured','Rutherford','Napa','prestige','age-worthy'],
    price: '$300',
    excellent: ['Filet Mignon','The Tomahawk','Kansas City','Truffle Fries','Bone Marrow'],
    strong: ['Cowboy Ribeye','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Filet Mignon": "Bosché is one of Napa's benchmark single-vineyard Cabs — decades of structured tannins and cedar-framed cassis — and the filet's lean, fine-grained muscle fiber gives those tannins exactly the protein they need to unfurl without fat getting in the way. The result is textural precision: each bite softens the wine into silk, and the wine pulls a quiet depth of flavor out of meat that could otherwise read as understated.",
      "The Tomahawk": "The Bosché's firm tannins and cassis-driven fruit lock onto the intramuscular fat running through the tomahawk, while its Rutherford dust minerality cuts through the richness rather than surrendering to it. Each bite of marbled beef softens the wine's structure and releases a wave of dark fruit that lingers on the finish.",
      "Kansas City": "The Bosché's grippy tannin structure meets the dense, lean muscle of the Kansas City strip head-on — protein binds to tannin and both open up, releasing cedar, black cherry, and deep beefy savoriness simultaneously. What you get is a wine that finally relaxes and a steak that finally exhales.",
      "Truffle Fries": "The earthy mercaptan compounds in the truffle mirror the Bosché's graphite and forest-floor undertones, creating a shared aromatic register before either hits the palate. The wine's acidity then lifts the potato fat and truffle oil so the umami doesn't become heavy — it stays vivid.",
      "Bone Marrow": "The Bosché's tannic backbone does the structural work here, cutting through the collagen-rich fat of the marrow the way acid cuts through cream — it resets the palate rather than coating it. The wine's dark fruit and smoke then echo the roasted, caramelized edge of the bone itself, turning one rich thing into two layered ones.",
      "Cowboy Ribeye": "The ribeye's heavy marbling releases fat that softens the Bosché's tannins in real time, rounding the wine and pushing its blackberry and tobacco notes forward. The char on the cowboy cut ties into the wine's oak-derived vanillin and toasted cedar, so the finish tastes like the grill itself.",
      "Porterhouse": "The Bosché bridges both sides of the porterhouse — its tannin grips the lean strip side while its fruit weight holds up against the richer tenderloin side, making it one of the few wines that doesn't have to pick a lane with this cut. The result is a pairing that shifts in character with every bite depending on which side of the bone you're on.",
      "Mushrooms": "The Bosché's forest-floor and dried herb notes share the same volatile sulfur compounds responsible for cooked mushroom's savory depth, so the wine and the dish aren't just compatible — they're speaking the same language. That umami alignment amplifies the wine's mid-palate and makes the finish longer and more savory than either achieves alone.",
      "Creamed Spinach": "The fat in the cream sauce coats the palate in a way that tames the Bosché's tannins and lets its red fruit and floral elements come forward, revealing a softer side of the wine that a steak alone wouldn't show. The spinach's slight bitterness then snaps the richness back into focus, keeping the pairing clean rather than cloying.",
      "Brussels and Belly": "The Bosché's firm tannin structure and dark fruit cut through the rendered pork belly fat, while its earthy Rutherford dust character meets the caramelized, slightly bitter char on the Brussels sprouts. Together, the smoke and sweetness of the dish pull the wine's fruit forward, softening its austerity into something richer and more giving.",
      "House Wedge": "The wine's cassis-driven acidity slices through the buttermilk fat in the blue cheese dressing, and its cedar-tinged tannins find an anchor in the salted, crisp iceberg rather than clashing with it. The result is a clean reset between bites — the wedge acts like a palate refresh that keeps the Bosché's structure from feeling heavy.",
      "Au Gratin Potatoes": "The Gruyère and cream in the gratin carry enough savory fat to soften the Bosché's firm tannin edge, while the wine's graphite and blackcurrant character rises above the richness rather than getting buried. Each bite of the potato rounds out the wine's structured finish, making it taste more plush than it does on its own.",
      "Grilled Caesar": "The char on the romaine and the anchovy-driven umami in the dressing act as a tannin bridge, giving the Bosché's structure something to grip rather than dominate the palate. The creamy emulsified dressing then binds the two together, leaving a long, savory finish where the wine's dark fruit lingers against the smoke."
    }
  },
  {
    name: 'Venge Family Reserve',
    category: 'wine-red',
    profile: ['Cab','bold','concentrated','Oakville','Napa','prestige'],
    price: '$325',
    excellent: ['The Tomahawk','Cowboy Ribeye','Kansas City','Bone Marrow','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "The Tomahawk": "The Venge's concentrated black fruit and high extraction mirror the Maillard-crusted fat cap on the Tomahawk, and its dense tannins bind to the intramuscular fat of a long-rested, bone-in cut that has the body to take them on. The fat renders the tannins silk, and the wine's oak-driven vanilla note stretches across the finish of every bite.",
      "Cowboy Ribeye": "The Oakville fruit density and muscular tannin in the Venge are built for the spinalis dorsi — the richest, most marbled muscle on the Cowboy cut — where the fat melts the wine's grip and releases its dark cherry and espresso core. The bone adds a mineral savoriness that echoes the wine's structured, iron-edged finish.",
      "Kansas City": "The Kansas City's tight, lean grain and bold beefy savoriness give the Venge's concentrated tannins a firm, protein-rich surface to bind to, which is exactly what a wine this extracted needs to show its fruit rather than its muscle. The strip's clean, forward beef flavor strips away any oakiness and leaves the wine's dark plum and blackberry character front and center.",
      "Bone Marrow": "The gelatinous, collagen-rich fat of the marrow coats the palate and fully neutralizes the Venge's tannin grip, opening the door for the wine's concentrated dark fruit and smoky oak to layer directly over the marrow's umami depth. The combination reads as one compound flavor — rich, smoky, and savory — rather than food and wine taking turns.",
      "Truffle Fries": "The wine's dark fruit and graphite minerality lock onto the truffle's volatile sulfur compounds, while the Cab's firm tannins cut through the fry's rendered fat. Every bite of truffle and potato pulls another layer of cassis and earth out of the wine.",
      "Filet Mignon": "The Venge's concentrated black cherry and cedar tannins wrap around the filet's myoglobin-rich muscle fibers, doing the flavor work the lean cut can't do on its own. The result is a richness that reads like the steak was finished in red wine butter.",
      "Porterhouse": "The bold fat cap and dry-aged funk on the porterhouse match the wine's extraction and oak-driven vanilla, while the strip's beefy char finds grip against the tannin structure. The two sides of the T-bone each find something different in the glass.",
      "Mushrooms": "Glutamates in the mushrooms and the wine's tertiary earthiness from Oakville's volcanic loam soils are speaking the same umami language. That synergy amplifies savory depth on both sides until the finish stretches considerably longer than either produces alone.",
      "Creamed Spinach": "The wine's tannins bind to the milk proteins in the cream sauce, softening both the dairy weight and the Cab's grip simultaneously. What you get is a rounder, almost velvety texture on the palate with the wine's dark fruit moving to the front.",
      "Brussels and Belly": "The caramelized bitter edges of the Brussels and the pork belly's rendered fat create a sweet-smoke contrast that mirrors the wine's oak char and dark fruit concentration. The Cab's acidity slices through the belly fat and resets the palate for the next bite.",
      "House Wedge": "The cold iceberg and acidic blue cheese dressing act as a palate reset against the wine's density, the lactic tang in the dressing briefly softening the tannins. It works because the contrast is sharp enough to make the wine taste fresher and more lifted than it does on its own.",
      "Au Gratin Potatoes": "The Maillard-browned cheese crust on the gratin echoes the toasty oak in the Venge, while the cream sauce's fat coats the palate and rounds out the wine's tannin edge. The pairing leans rich, so it works best alongside a cut of protein to keep it from feeling too heavy.",
      "Grilled Caesar": "The concentrated dark fruit and toasted oak in the Venge lock onto the anchovy-driven umami and char on the romaine, while the wine's firm tannins cut through the egg-yolk richness of the dressing. Guests get a savory, almost meaty depth from the pairing that makes the Caesar taste like a course rather than a starter."
    }
  },
  {
    name: 'Lail Vineyards Daniel Cuvée',
    category: 'wine-red',
    profile: ['Cab','prestige','complex','structured','Napa','icon'],
    price: '$350',
    excellent: ['The Tomahawk','Cowboy Ribeye','Filet Mignon','Bone Marrow','Truffle Fries'],
    strong: ['Kansas City','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "The Tomahawk": "The Daniel Cuvée's structured tannins bind to the abundant intramuscular fat in the tomahawk, stripping the fattiness from the palate and releasing a concentrated wave of beef and iron. What's left is pure savoriness — the wine and the steak each arriving at a richness neither could reach on its own.",
      "Cowboy Ribeye": "The Cuvée's graphite and black currant cut through the spinalis cap's heavy marbling, and its firm acid lifts the crust char without washing it away. The result is a longer, more defined finish on the beef — the fat clears faster, and the smoke lingers.",
      "Filet Mignon": "The filet's mild, buttery tenderness gives the Cuvée's full structure and complexity room to perform without competition, acting almost like a blank canvas for the wine's layers of cassis, cedar, and fine tannin. Guests taste the wine at its most expressive — and the filet picks up savory depth it doesn't carry on its own.",
      "Bone Marrow": "The wine's polished tannins and bright acid do the work that toasted bread can't — cutting through the liquefied fat and collagen of the marrow and resetting the palate between bites. The earthy, almost truffle-like quality in the Cuvée mirrors the marrow's deep umami, turning each sip into a continuation of the dish.",
      "Truffle Fries": "The Cuvée carries its own earthiness — forest floor, dried herb, pencil shaving — that runs parallel to the 2-methylisoborneol compounds in the truffle oil, creating a resonance rather than a contrast. The wine's structure then cleans the fry oil from the tongue, leaving the truffle aromatics to bloom on the finish.",
      "Kansas City": "The Kansas City strip's tight grain and firm chew activate the Cuvée's tannins differently than a marbled cut would — there's less fat to bind to, so the tannin dries the muscle fiber and amplifies the beef's natural iron and salt. The wine's dark fruit then fills in behind that savory hit, extending the finish with a richness the lean cut doesn't provide on its own.",
      "Porterhouse": "The porterhouse gives the Cuvée two entirely different conversations — the strip side's firm chew draws out tannin structure and dark fruit, while the tenderloin side's butter-soft texture lets the wine's more delicate floral and cedar notes surface. Guests who work across both cuts will find the wine shifting character with each bite, staying relevant through the whole plate.",
      "Mushrooms": "The wine's dark fruit and graphite minerality lock onto the glutamates in sautéed mushrooms, amplifying the same savory depth that makes a great Cab sing. Together they create a loop of umami that makes both the wine and the fungi taste more of themselves.",
      "Creamed Spinach": "The wine's firm tannins cut through the butterfat in the cream reduction, while its cassis fruit lifts what could otherwise be a one-note richness. The guest gets a cleaner, longer finish from the wine and a lighter feel from the dish than either delivers alone.",
      "Brussels and Belly": "The slight bitterness of charred Brussels and the smokiness from the pork belly mirror the wine's dark roasted edges and cedar structure, while the belly's rendered fat softens the tannins mid-palate. What lands is a savory-sweet-smoke loop that makes the wine's fruit feel richer and the pork feel more refined.",
      "House Wedge": "The wine's acidity and tannin act as a counterweight to the blue cheese dressing's lactic fat, essentially doing what lemon does to a rich sauce. The contrast keeps the palate alert — the guest gets a clean, bright reset between bites that makes the next sip of the Cab taste darker and more structured.",
      "Au Gratin Potatoes": "The Gruyère and cream in au gratin carry maillard-browned, nutty notes that soften the wine's tannin grip the same way fat coats a dry finish. The result is a rounder, more generous expression of the Cab, and the potato dish reads as more complex than it would alongside a lighter pour.",
      "Grilled Caesar": "The char on the romaine and the anchovy-driven umami in the Caesar dressing pull out the wine's darker, more savory tannin structure rather than its fruit. What the guest experiences is an almost meaty quality in the Cab that wasn't as obvious before, with the dressing's fat keeping the finish smooth."
    }
  },
  {
    name: 'Heitz Martha\'s Vineyard',
    category: 'wine-red',
    profile: ['Cab','iconic','mint','cedar','Rutherford','Napa','legendary'],
    price: '$400',
    excellent: ['The Tomahawk','Cowboy Ribeye','Kansas City','Bone Marrow','Truffle Fries'],
    strong: ['Filet Mignon','Bone-In Filet','Porterhouse','Mushrooms','Creamed Spinach'],
    works: ['House Wedge','Au Gratin Potatoes','Brussels and Belly'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "The Tomahawk": "The wine's signature eucalyptus and cedar cut through the thick intramuscular fat of the tomahawk the way fresh herb does in a compound butter, providing aromatic contrast to the beef's Maillard-rich crust. On the palate, the fat coats and softens the tannins while the wine's menthol lift keeps each bite from feeling heavy, turning a powerful steak into something more elegant.",
      "Cowboy Ribeye": "The mint and cedar character of Martha's Vineyard acts as a natural counterpoint to the ribeye's marbled richness, the same logic as chimichurri on a fatty cut — aromatic brightness against deep beefy savoriness. The fat renders the tannins silky mid-palate, and the wine's long, structured finish extends the char and caramelization from the bone-in crust well past the last bite.",
      "Kansas City": "Martha's Vineyard's signature eucalyptus and pencil shaving aromatics cut through the dense, iron-rich crust of a Kansas City strip the way a cool breeze clears smoke — the mint lifts where the beef presses down. What lands on the palate is a long, savory finish where the wine's firm tannins grip the lean muscle fibers and draw out a depth of beef flavor the steak can't quite reach on its own.",
      "Bone Marrow": "The cedary tannin structure in Martha's Vineyard acts as an emulsifier against the unctuous collagen fat of roasted marrow, cutting the lip-coating richness the way a squeeze of lemon would — but with more complexity. Together, the wine's dried herb and dark fruit open up against the smoky, gelatinous marrow into something closer to a braise than a simple bite.",
      "Truffle Fries": "Martha's Vineyard shares volatile aromatic compounds — specifically terpenoids — with black truffle, making the wine's cedar and mint notes feel less like contrast and more like an echo of what's already on the plate. That chemical kinship means the earthiness of the truffle deepens rather than clashes, and the wine's acidity keeps the richness of the fried potato from flattening the whole experience.",
      "Filet Mignon": "The filet's mild myoglobin flavor and butter-basted tenderness give Martha's Vineyard's bold tannin structure room to dominate the pairing — the wine essentially seasons the steak the way a sauce would. What you get is the full aromatic expression of the Cab, mint and cedar and dark fruit, framed by the clean, neutral canvas of the filet without any competing fat or char.",
      "Bone-In Filet": "The bone imparts subtle marrow-derived glutamates into the surrounding meat that give this cut just enough savory depth to meet Martha's Vineyard's structured tannins without being overwhelmed by them. The wine's eucalyptus lifts the clean beef flavor while the cedar note links to the faint mineral quality the bone adds at the finish.",
      "Porterhouse": "A porterhouse delivers two textural conversations at once — the lean strip side grips the wine's tannins while the tenderloin absorbs its fruit — and Martha's Vineyard has enough structural range to hold both. The mint and cedar ride the fat from the strip's edge and return on the finish as something closer to an herb crust than a wine you're drinking alongside your meal.",
      "Mushrooms": "Mushrooms carry glutamic acid and guanosine monophosphate — two umami compounds that, when they meet the polyphenol tannins in Martha's Vineyard, soften the wine's grip and push its dark fruit forward. The sautéed, earthy char on the mushrooms mirrors the cedar and dried herb in the wine so closely that the line between what you're eating and what you're drinking briefly disappears.",
      "Creamed Spinach": "The fat in the cream binds to Martha's Vineyard's tannins at the molecular level, smoothing the wine's firm structure into something richer and more supple than it presents on its own. That softening effect lets the wine's dark cherry and cedar come forward against the savory, dairy-sweet backdrop of the spinach, turning a side dish into a legitimate vehicle for one of Napa's most iconic Cabs.",
      "House Wedge": "The mint and cedar in this Cab cut through the fat in the blue cheese dressing the same way a squeeze of lemon would, while the wine's firm tannins give structure to what's otherwise a soft, creamy bite. Guests get a mouthful that suddenly tastes brighter and more defined — the wedge snaps into focus.",
      "Au Gratin Potatoes": "Martha's Vineyard carries enough cassis fruit and cedar to pierce the heavy cream and Gruyère without getting swallowed by them, and the wine's natural acidity does the work that salt alone can't. Together they read as one rich, savory lane — the potato's dairy fat softens the tannins, and the wine lifts the dish out of heaviness.",
      "Brussels and Belly": "The eucalyptus and dark fruit in this Cab mirror the caramelized, slightly bitter char on the Brussels while the wine's tannins latch onto the pork belly's rendered fat. What the guest tastes is a back-and-forth between smoke and dark berry that keeps resolving into something cleaner than either one alone."
    }
  },
  {
    name: 'Simon Family Estate Reserve',
    category: 'wine-red',
    profile: ['Cab','prestige','bold','structured','Napa','icon'],
    price: '$400',
    excellent: ['The Tomahawk','Cowboy Ribeye','Kansas City','Bone Marrow','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "The Tomahawk": "The Reserve's dense tannin structure is built for exactly this much intramuscular fat — the protein and lipids in a well-marbled tomahawk bind the tannins and soften them on contact. What's left is the wine's dark fruit and graphite riding on top of the beef's savoriness, each one amplifying the other's depth.",
      "Cowboy Ribeye": "The structured tannins in this Cab need fat to unfurl, and the ribeye's heavy marbling delivers it — the fat coats the palate, the wine opens up, and the cedar and black currant notes emerge fully. Guests who try this wine without food are hearing half the record.",
      "Kansas City": "The Kansas City's tighter grain and lower fat content keep the tannins from softening the way they would on a ribeye, so the pairing stays on the firm, savory, beefy side — the wine's structure matches the steak's density pound for pound. What guests taste is a long, chewy finish where the wine's dark fruit slowly fills in behind the meat's bold mineral character.",
      "Bone Marrow": "The umami hit from the roasted marrow amplifies the wine's savory, graphite backbone, while the fat from the marrow itself acts as a tannin buffer that reveals the Reserve's fruit and spice underneath. The result is one of the most complete bites on the menu — fat, acid, tannin, and umami all landing in the same moment.",
      "Truffle Fries": "The 2-methylisoborneol earthiness in black truffle shares a frequency with the cedar and forest-floor notes in this Cab, so the two don't contrast so much as they stack. Guests get a wave of layered earth and dark fruit that makes the fries taste more luxurious and the wine taste more complex than either one earns on its own.",
      "Filet Mignon": "The Cab's firm tannins latch onto the filet's lean protein structure, while dark fruit and a touch of graphite lift what's otherwise a very quiet, buttery cut. Together, the wine fills in the bold edges the filet doesn't have on its own, and the meat softens the tannins into something almost silky.",
      "Porterhouse": "The tannins in this Cab are built for exactly this — high myoglobin, intramuscular fat, and the deep sear on a porterhouse give the wine's structure something to grip and metabolize. What you get is a back-and-forth: each bite resets the palate so the next sip tastes darker, more concentrated, almost like a second extraction.",
      "Mushrooms": "Glutamates in the mushrooms and the wine's own savory, iron-edged mid-palate are speaking the same language — this is umami stacking on umami. The result is a depth of flavor that feels almost meaty on its own, with the wine's dark fruit surfacing only at the finish to keep it from going too heavy.",
      "Creamed Spinach": "The fat and dairy in the cream coat the palate and deliberately blunt the Cab's tannin edge, which sounds like it would dull the wine but actually lets the cassis and cedar come forward. Guests will notice the wine tasting rounder and more fruit-forward alongside this dish than it does on its own.",
      "Brussels and Belly": "The caramelized bitterness on the brussels and the rendered pork fat from the belly mirror the Cab's dark fruit, char, and structured tannins — bitter talking to bitter, fat talking to structure. On the palate, the smokiness from the belly amplifies the wine's oak, and the sweetness from the caramelization keeps the whole combination from going astringent.",
      "House Wedge": "The acidity in the Cab cuts through the richness of the blue cheese or buttermilk dressing, while the cold, high-water-content iceberg acts as a palate reset between sips — it's contrast doing the work, not echo. The wine comes across as fresher and brighter than expected, and the dressing tastes less heavy.",
      "Au Gratin Potatoes": "The starch and fat in the gratin soften the tannins without erasing them, and the browned, slightly caramelized top layer of the dish picks up the toasted oak notes in the wine. The pairing works because the potato absorbs what could be an aggressive tannic finish and leaves the fruit and structure intact.",
      "Grilled Caesar": "The char on the romaine introduces a bitter, smoky edge that echoes the Cab's oak and dark fruit, and the anchovy-driven umami in the dressing aligns with the wine's savory, iron-laced mid-palate. Together they push each other toward boldness — this Caesar will taste more intense alongside this wine, and the wine will taste more structured alongside the Caesar."
    }
  },
  {
    name: 'Shafer Hillside Select',
    category: 'wine-red',
    profile: ['bold','concentrated','plum','mocha','structured','prestige'],
    price: '$450',
    excellent: ['The Tomahawk','Cowboy Ribeye','Truffle Fries','Bone Marrow','Brussels and Belly'],
    strong: ['Kansas City','Filet Mignon','Porterhouse','Creamed Spinach','Mushrooms'],
    works: ['House Wedge','Au Gratin Potatoes'],
    avoid: ['Prime Tartare','Seared Scallops','Burrata','lighter apps']
  ,
    pairingNotes: {
      "The Tomahawk": "The Hillside Select's dense tannin structure and dark plum concentration match the sheer fat volume of the tomahawk — the wine has enough mass to cut through the intramuscular fat without getting buried. What you get is a back-and-forth where the mocha finish in the wine latches onto the Maillard crust and keeps the whole bite going longer than either could alone.",
      "Cowboy Ribeye": "The concentrated dark fruit in the Hillside Select mirrors the ribeye's own richness, while its grippy tannins bind to the fat and protein in a way that physically cleanses the palate between bites. The guest experiences the ribeye's char and the wine's mocha landing at the same moment — the finish extends well past the swallow.",
      "Truffle Fries": "The earthy 2-nonenal compounds in black truffle and the toasted oak in the Hillside Select are pulling from the same flavor register, creating a layered earthiness that amplifies both. The result is a savory depth that makes the fries taste more luxurious and the wine taste more food-forward than either does on its own.",
      "Bone Marrow": "The wine's tannins act as an emulsifier against the almost pure fat of the marrow, binding to the lipids so the finish doesn't go heavy or greasy. What the guest gets is the marrow's smoky, umami sweetness threading through the plum and mocha in the wine — rich, but clean.",
      "Brussels and Belly": "The wine's dark fruit and mocha bridge directly to the caramelized pork belly fat, while the Hillside Select's tannin structure cuts through the rendered fat and resets the palate against the bitterness of the charred Brussels. That sweet-bitter-smoky tension in the dish finds an answer in the wine's concentration, and each bite pulls a little more dark fruit out of the glass.",
      "Kansas City": "The Kansas City's lean, dense muscle fibers create enough protein surface area to soften the Hillside Select's bold tannins, letting the plum and mocha come forward instead of drying out the finish. The pairing sharpens the beef's intensity — the wine acts like a flavor amplifier on a cut that leads with pure, unadorned beefiness.",
      "Filet Mignon": "The filet's mild, buttery character doesn't push back against the Hillside Select the way a fattier cut would, so the wine's concentration and tannin can overwhelm if the steak isn't cooked to temperature — but when it's right, the wine's plum fills in the flavor space the lean cut leaves open. The guest gets the filet's silky texture first, then the full weight of the wine rolls in on the finish.",
      "Porterhouse": "The porterhouse splits the equation — the strip side's firm, beefy density stands up to the wine's tannin structure while the tenderloin side lets the plum and mocha take the lead. Alternating bites creates two distinct experiences within one pairing, with the Hillside Select playing a different role depending on which side of the bone the fork lands on.",
      "Creamed Spinach": "The Hillside Select's plum and mocha depth cuts through the fat in the béchamel while its tannins grip the cream, preventing either from going flat. What lands on the palate is a savory-sweet loop — the wine darkens, the spinach brightens, and the finish is longer than either would produce alone.",
      "Mushrooms": "Concentrated dark fruit in the Hillside Select mirrors the glutamates in the sautéed mushrooms, stacking umami on umami in a way that amplifies rather than overwhelms. The result is a deep, almost meaty resonance where the earthy compounds in both lock together and stretch the finish by several beats.",
      "House Wedge": "The acidity and fruit concentration in the Hillside Select slice through the blue cheese and buttermilk fat in the dressing the same way a squeeze of acid resets the palate. The cold crispness of the iceberg creates a textural contrast that makes the wine's bold structure suddenly feel precise and clean.",
      "Au Gratin Potatoes": "The mocha and oak in the Hillside Select echo the Maillard browning on the gratin crust, finding a caramelized throughline between the wine and the dish. That shared roasted character binds them, and the cream and starch soften the tannins just enough that the wine's dark fruit moves to the front."
    }
  },
  {
    name: 'Opus One',
    category: 'wine-red',
    profile: ['bold','complex','structured','dark-fruit','cedar','velvety','prestige'],
    price: '$475',
    excellent: ['The Tomahawk','Cowboy Ribeye','Filet Mignon','Bone-In Filet','Truffle Fries','Bone Marrow'],
    strong: ['Kansas City','Porterhouse','Creamed Spinach','Brussels and Belly','Lobster Mac'],
    works: ['House Wedge','Mushrooms','Au Gratin Potatoes','Chocolate Brownie','Peanut Butter Brownie','Cheesecake','Creme Brulee'],
    avoid: ['Prime Tartare','Crab Cake','Seared Scallops','Burrata']
  ,
    pairingNotes: {
      "The Tomahawk": "The structured tannins in Opus One bind to the intramuscular fat in the Tomahawk's heavy marbling, physically cleansing each bite while the dark fruit counterpoints the char from the sear. What the guest experiences is a continuous reset — every sip strips fat, every bite reloads it, and the two keep trading the lead.",
      "Cowboy Ribeye": "Opus One's dark-fruit concentration and firm tannin structure meet the Cowboy Ribeye's rendered fat cap and char crust with equal weight — neither overpowers because both are built at the same register of intensity. The finish goes long and savory, with the wine's cassis and graphite lingering against the beef's smoky, mineral edge.",
      "Filet Mignon": "Because the filet has almost no intramuscular fat to fight the tannins, Opus One's complex dark-fruit and structured backbone moves to the foreground, effectively becoming the richness the cut doesn't provide on its own. The guest gets the tenderness and clean butter finish of the filet with the full aromatic weight of the wine layered over it — one doing what the other can't.",
      "Bone-In Filet": "The bone imparts iron and mineral notes during the cook that give the filet slightly more depth than a center-cut alone, and those mineral compounds find a direct match in Opus One's graphite and dark-earth character. The tannins frame the meat's delicate texture without gripping it, and the pairing finishes with a long, iron-tinged elegance that the boneless cut wouldn't quite reach.",
      "Truffle Fries": "The wine's dark fruit and earthy undertones from extended oak aging mirror the volatile sulfur compounds in truffle, amplifying the umami depth in both directions. Together, the fat in the fries softens the tannin structure and lets the wine's complexity stretch long across the palate.",
      "Bone Marrow": "The high oleic fat in roasted marrow coats the palate and acts as a solvent for the wine's cassis and dark cherry esters, pulling the fruit forward while the tannins cut through the richness. Guests get a wave of savory fat followed by a clean, fruit-driven finish that neither element could deliver alone.",
      "Kansas City": "The firm, dense muscle of the Kansas City strip has the protein structure to stand up to Opus One's grippy tannins, which bind to the myoglobin-rich meat and soften on contact. What comes back is a concentrated hit of beef and dark fruit that reads almost like a reduction sauce.",
      "Porterhouse": "The porterhouse's dual textures — lean strip on one side, butter-soft tenderloin on the other — give the wine two different jobs: tannins grip the strip while the fat from the tenderloin unlocks the wine's blackberry and cedar character. The result is a pairing that shifts and evolves with each bite.",
      "Creamed Spinach": "The high butterfat content in the cream sauce coats the mouth and softens the wine's tannic edge, while the oxalic acid in the spinach creates a brightness that keeps the pairing from feeling heavy. The wine's dark fruit reads almost jammy against the savory, dairy-rich backdrop.",
      "Brussels and Belly": "The Maillard-browned edges on the Brussels and the rendered pork fat from the belly echo the toasted oak and dark fruit in the wine, while the bitter char on the sprouts gives the tannins something to grip. The sweetness that pulls through the glaze makes the wine's fruit core open up mid-palate.",
      "Lobster Mac": "The emulsified butter and cream in the mac create a fat barrier that tames the wine's tannin and lets the lobster's natural sweetness mirror the ripe dark fruit in the glass. The contrast between brine and blackberry is what the guest notices — a savory-sweet loop that keeps pulling them back to both.",
      "House Wedge": "The acidity in the blue cheese dressing cuts against the wine's oak structure while the cold, crisp iceberg cleanses the palate between sips, essentially resetting both the food and the wine with each bite. The pairing works because the wedge gives Opus One room to breathe rather than compete.",
      "Mushrooms": "Opus One's dark fruit and dried herb notes mirror the glutamates in sautéed mushrooms, while its structured tannins cut through the earthy fat on the palate. Together, they lock into a savory depth that makes the mushrooms taste almost meaty and the wine taste almost like food.",
      "Au Gratin Potatoes": "The wine's cassis and cedar frame the browned dairy crust of the gratin, and its firm acidity slices through the cream and Gruyère fat coating the palate. What the guest gets is brightness — the richness of the dish lands cleaner, and the wine opens up where it might otherwise feel closed.",
      "Chocolate Brownie": "Opus One carries dark cherry and cocoa-adjacent tannins that echo the bittersweet chocolate base of the brownie, pulling out the fruit notes baked into the ganache. On the finish, both the wine and the dessert extend each other — the chocolate lengthens the fruit, and the tannin keeps the sweetness from going flat.",
      "Peanut Butter Brownie": "The roasted, slightly bitter edge of peanut butter meets the wine's graphite and dark fruit the way a savory note anchors a dessert course — it keeps Opus One from reading as austere. The fat in the peanut butter softens the tannin structure just enough that the wine's cassis and plum come forward on the finish.",
      "Cheesecake": "The wine's acidity finds a counterpart in the cream cheese tang, creating a citrus-on-dark-fruit tension that neither has alone. That contrast keeps the richness of the cheesecake from sitting heavy, and it draws out the dried fruit and spice in Opus One that a purely sweet dessert would bury.",
      "Creme Brulee": "The caramelized crust on the brûlée speaks directly to the toasted oak and vanilla extraction in Opus One, while the cool, barely-set custard underneath softens the wine's tannin grip. The guest tastes a layered sweetness — the brûlée reads more complex, and the wine trades some of its structure for silk."
    }
  },
  {
    name: 'Jubilation by Colgin',
    category: 'wine-red',
    profile: ['Cab-blend','icon','Napa','prestige','complex','structured','legendary'],
    price: '$475',
    excellent: ['The Tomahawk','Filet Mignon','Bone-In Filet','Bone Marrow','Truffle Fries'],
    strong: ['Cowboy Ribeye','Kansas City','Porterhouse','Mushrooms','Creamed Spinach'],
    works: ['House Wedge','Brussels and Belly','Au Gratin Potatoes'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "The Tomahawk": "Colgin's dense cassis, iron minerality, and tobacco-leaf tannins are built exactly to absorb the long-chain fatty acids and Maillard crust on a heavily marbled tomahawk — the fat resolves the tannin, and the tannin resolves the fat. What lands on the palate is a sustained, unified richness that makes the steak taste more like itself and the wine taste fully awake.",
      "Filet Mignon": "The filet's lean, fine-grained muscle has almost no fat interference, which lets Colgin's precise fruit and cedar structure show without competition — the wine does the seasoning work the meat doesn't need to do. The guest experiences the Colgin's full aromatic complexity against a clean backdrop, and the filet picks up a silkiness from the wine's tannin that butter alone wouldn't give it.",
      "Bone-In Filet": "Colgin's Jubilation carries cassis and cedar over polished, fine-grained tannins that grip without overwhelming — exactly what the filet's lean, butter-soft muscle needs to feel substantial on the palate. The wine's structure fills in what the cut intentionally lacks, and together they land as one seamless, long-finishing bite.",
      "Bone Marrow": "The Jubilation's dark fruit and graphite cut through the fat in the marrow the way acidity cuts cream — the wine's tannin binds to the lipids and clears the palate between spoonfuls. What the guest tastes is a rolling contrast: the richness crests, the wine resolves it, and the umami from the marrow makes the fruit in the glass taste deeper.",
      "Truffle Fries": "The earthy, sulfurous compounds in truffle — primarily dimethyl sulfide and bis-methylthiomethane — resonate with the forest floor and dried herb notes that define Colgin's signature Howell Mountain fruit character. Each bite of fry amplifies the savory mid-palate of the wine, turning a side dish into something that reads like a full course.",
      "Cowboy Ribeye": "The high intramuscular fat in a cowboy ribeye needs tannin to emulsify it on the tongue, and Jubilation's firm, polyphenol-rich structure does exactly that — stripping the fat coat and exposing the char and beef drippings underneath. The wine softens perceptibly with each bite, opening up its blackberry and tobacco layers as the fat works through it.",
      "Kansas City": "The Kansas City strip's dense, tight muscle fiber and pronounced dry-aged beefiness act like a tannin scrub — every bite strips the wine's grip and reveals the cassis and dark plum fruit hiding underneath the structure. The guest gets a leaner, more mineral version of the Jubilation than they'd expect, sharpened to a point by the cut's bold, clean beef flavor.",
      "Porterhouse": "The porterhouse gives the Jubilation two conversations at once — the strip side's firm, iron-forward muscle pulls out the wine's mineral spine, while the tenderloin side lets the fruit and oak come forward against softer, milder tissue. It's a shifting pairing with every cut across the bone, and the wine's complexity earns its place.",
      "Mushrooms": "Sautéed mushrooms share glutamate load with aged Cabernet — the umami in both is driven by the same free amino acid pathway, so the two amplify rather than compete with each other. The result is a savory depth that makes the wine taste a year or two older than it is, with the earthiness in the glass and on the plate folding into a single, resonant finish.",
      "Creamed Spinach": "The fat and dairy proteins in the cream sauce coat the palate and soften the Jubilation's tannin structure, which lets the wine's fruit — usually held tight by its architecture — open up mid-sip. The slight bitterness of the spinach keeps the richness honest and gives the wine's acidity a clean edge to land on.",
      "House Wedge": "The wine's firm tannins and dark fruit cut through the fat in the blue cheese dressing, while its Napa acidity sharpens the iceberg's natural sweetness. The guest gets a reset between bites — the wedge becomes crisper, the wine rounder.",
      "Brussels and Belly": "The cassis and graphite in this Cab blend lock onto the caramelized sugars and smoke on the pork belly, while the wine's tannin structure absorbs the rendered fat. What lands is a long, savory finish where the bitter char on the Brussels pulls the fruit forward in the wine.",
      "Au Gratin Potatoes": "The wine's toasted oak and vanilla from new French barrique speak directly to the browned cream and Gruyère crust on the gratin. Together they create a layered richness — butter meeting dark fruit — that lingers well past the last bite."
    }
  },

  // ── WINES — OLD WORLD ─────────────────────────────────────────────────────────

  {
    name: 'Marc Brédif Chinon',
    category: 'wine-red',
    profile: ['Cabernet-Franc','Loire','earthy','red-fruit','herbaceous','light-medium'],
    price: '$60',
    excellent: ['Roast Half Chicken','Faroe Island Salmon','Mushrooms','House Wedge','Grilled Caesar'],
    strong: ['Filet Mignon','Escargot','Sauteed Garlic Spinach','Burrata','Prime Tartare'],
    works: ['Kansas City','Shrimp Bisque','Crab Cake'],
    avoid: ['The Tomahawk','Caymus Cabernet Sauvignon','Opus One','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Roast Half Chicken": "Chinon's high-toned red cherry and iron minerality cut through the roasted skin fat without overwhelming the white meat, where a heavier red would bury it. The guest gets brightness against richness — the chicken's pan drippings bring out the wine's earthy, savory depth.",
      "Faroe Island Salmon": "Cabernet Franc's low tannin and bright acidity behave more like a white wine here, slicing through the salmon's omega-rich fat without clashing with the flesh's delicate iron notes. The combination reads as clean and oceanic, the wine's red fruit landing like a squeeze of something bright against the fish.",
      "Mushrooms": "The volcanic tuffeau soil character in Chinon — that wet stone, forest floor quality — is the same compound family as the glutamates in roasted mushrooms, so they amplify each other rather than contrast. The guest experiences a deep, resonant earthiness that makes the wine taste older and the mushrooms taste wilder.",
      "House Wedge": "The wine's bright malic acidity and herbaceous edge mirror the freshness of the iceberg while the Loire's lean fruit cuts the richness of blue cheese without the tannin weight that would clash with the dairy. It reads like a vinaigrette moment — sharp, clean, and surprisingly refreshing.",
      "Grilled Caesar": "The char on the romaine introduces smoke and bitter carbon that echo Chinon's characteristic green pepper and graphite notes, while the anchovy-driven umami in the Caesar dressing pulls the wine's minerality forward. Together they hit savory, smoky, and bright all at once — a pairing that makes both feel more complete.",
      "Filet Mignon": "Cabernet Franc's bright acidity and graphite minerality cut through the filet's intramuscular fat without overwhelming its delicate muscle structure. The result is a clean finish where the wine lifts the beef's natural sweetness and leaves the palate ready for the next bite.",
      "Escargot": "The wine's earthy, forest-floor character mirrors the snail's terroir-driven funk, while its red-fruit brightness slices through the garlic butter without being drowned by it. Together, the herbaceous edge of the Cabernet Franc locks onto the parsley and garlic, amplifying the dish's savory depth.",
      "Sauteed Garlic Spinach": "The Loire's characteristic green bell pepper and crushed gravel notes in the Chinon resonate with the spinach's chlorophyll-forward bitterness, while the garlic bridges both. On the palate, the wine's light tannins give the soft spinach a textural backbone it doesn't have on its own.",
      "Burrata": "The Chinon's acidity acts as a palate cleanser against burrata's high-fat cream interior, the way a squeeze of lemon would, while its red fruit adds a contrast the neutral cheese lacks. The combination reads as a complete bite — fat, acid, and fruit — where neither element flattens the other.",
      "Prime Tartare": "Raw beef's iron-rich, umami intensity is met by the Chinon's earthy tannins and dark red fruit, which echo the tartare's own ferrous character rather than fighting it. When tasted together, the wine's acidity tightens the fatty richness of the hand-cut beef and keeps the capers and shallots sharp on the finish.",
      "Kansas City": "The Kansas City's heavy char and firm chew demand more tannin than Chinon carries, but the wine's red-cherry acidity finds purchase in the crust's caramelized crust sugars. The pairing works best mid-bite, where the fruit softens the strip's bold beefiness without the wine getting lost in the fat.",
      "Shrimp Bisque": "The bisque's reduced shellfish stock and cream create a richness that the Chinon's acidity can partially cut, while the wine's earthy undertone finds an unexpected anchor in the bisque's aromatic mirepoix base. The pairing is most effective at the start of the bowl, before the cream fully coats the palate and mutes the wine's minerality.",
      "Crab Cake": "The crab's natural sweetness creates a contrast with the Chinon's dry, earth-driven red-fruit profile — the wine reads almost tart against the delicate shellfish. The crispy seared crust is where the pairing clicks, its toasted, savory crust giving the light-bodied red something substantial enough to grip."
    }
  },
  {
    name: 'Braida Montebruna Barbera',
    category: 'wine-red',
    profile: ['Barbera-d\'Asti','medium-bodied','cherry','earthy','Italian','food-friendly'],
    price: '$70',
    excellent: ['Roast Half Chicken','Kansas City','Mushrooms','Grilled Caesar','Truffle Fries'],
    strong: ['Filet Mignon','Faroe Island Salmon','Brussels and Belly','Creamed Spinach','House Wedge'],
    works: ['Cowboy Ribeye','Au Gratin Potatoes','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut']
  ,
    pairingNotes: {
      "Roast Half Chicken": "Barbera's bright malic acidity and dried cherry cut through the rendered chicken fat while the wine's earthy undertone locks onto the fond and roasted skin. Together they create a savory loop — each bite pulls more fruit from the wine, each sip makes the chicken taste more deeply roasted.",
      "Kansas City": "The wine's high natural acidity and firm tannins grip the dense muscle fibers of the strip's lean cap, while cherry and iron notes mirror the beef's own mineral backbone. The result is a pairing that amplifies the steak's beefy intensity without letting either the wine or the meat overpower the other.",
      "Mushrooms": "Barbera carries terpenoid earthiness — the same forest-floor compounds found in sautéed mushrooms — creating a direct flavor echo rather than a contrast. When they meet, the umami in the mushrooms elongates the wine's finish and makes the fruit read deeper and more savory.",
      "Grilled Caesar": "The char on the romaine introduces bitter, smoky pyrazines that the wine's acidity slices through cleanly, while the anchovy-driven umami in the dressing amplifies Barbera's fruit. The guest gets a brighter, almost juicy version of the wine and a Caesar that tastes like it was built around the fire.",
      "Truffle Fries": "Truffle's sulfur-based aromatic compounds — dimethyl sulfide and bis(methylthio)methane — bond with Barbera's earthy, loamy qualities to create a layered underground richness. The wine's acidity then lifts what would otherwise be a heavy, fat-saturated bite, keeping the truffle fragrance front and center.",
      "Filet Mignon": "The filet's mild, buttery fat doesn't fight the tannins the way a fattier cut would, letting Barbera's cherry fruit sit cleanly on top of the beef's subtle iron and cream notes. The guest experiences the wine at its most expressive — fruit-forward and bright — while the filet picks up a quiet savory depth it wouldn't have alone.",
      "Faroe Island Salmon": "The salmon's high omega-3 fat content and slight oceanic brine find balance in Barbera's sharp acidity and low tannin — enough structure to cut the fat without the astringency that would clash with delicate fish proteins. What comes through is a clean, almost citrus-like brightness on the salmon and a rounder, less angular version of the wine.",
      "Brussels and Belly": "The pork belly's rendered fat coats the palate in a way that softens Barbera's acidity into something almost sweet, while the charred, bitter Brussels sprouts mirror the wine's earthy edge. That bitter-fat-acid triangle keeps every bite and sip tasting fresh rather than heavy.",
      "Creamed Spinach": "The Barbera's bright malic acidity and iron-edged earthiness cut straight through the butterfat in the cream sauce, preventing the dairy from coating the palate. What you get is a clean, savory finish where the spinach's mineral depth actually surfaces instead of getting buried under richness.",
      "House Wedge": "The wine's fresh cherry fruit and low tannin mirror the acidity in the blue cheese dressing without fighting it, while its earthy backbone grounds the crispness of the iceberg. Each bite resets the palate so the next sip of wine tastes brighter and more alive.",
      "Cowboy Ribeye": "Barbera carries enough acidity to dissolve surface fat on the palate, but the ribeye's marbling and char intensity will push this medium-bodied wine to its limit. The pairing works when you hit a leaner bite — the cherry fruit surfaces against the seared crust and creates a brief, satisfying contrast before the fat reasserts.",
      "Au Gratin Potatoes": "The wine's natural acidity acts like a squeeze of lemon against the gruyère and cream, lifting the heaviness of the béchamel and keeping the savory potato flavor from turning monotone. Together they land somewhere between a French bistro red and a fondue pairing — the dairy softens the wine's cherry edge just enough to make both feel richer.",
      "Lardons": "The rendered pork fat and smoky char on the lardons pull the wine's earthy, iron-tinged midpalate forward, while the Barbera's acidity trims the grease without stripping the flavor. You get a back-and-forth where each cuts through the other, landing on a savory, almost charcuterie-like finish."
    }
  },
  {
    name: 'Les Pallières Raciné',
    category: 'wine-red',
    profile: ['Gigondas','Grenache-dominant','bold','earthy','spice','Rhône','structured'],
    price: '$90',
    excellent: ['Kansas City','Cowboy Ribeye','Mushrooms','Bone Marrow','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Brussels and Belly','Grilled Caesar','Creamed Spinach'],
    works: ['House Wedge','Au Gratin Potatoes','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Kansas City": "The Gigondas carries garrigue — dried herb, leather, iron — that speaks directly to the dry-aged, mineral funk of a lean strip steak with a hard sear. Against the firm texture and concentrated beef flavor, the wine's bold fruit fills in what the lean cut can't provide, rounding the experience into something that tastes more like a whole meal than two separate things.",
      "Cowboy Ribeye": "Grenache's high glycerol content and dark fruit handle the ribeye's heavy fat cap in a way that leaner reds can't — there's enough body to match the marbling and enough tannin structure to scrub the palate between bites. The result is a loop where the fat amplifies the wine's fruit and the wine makes the next bite of beef taste cleaner and more defined.",
      "Mushrooms": "The Gigondas and the mushrooms are pulling from the same flavor well — umami, earth, dried herbs, forest floor — so rather than contrast, this pairing works through resonance, each amplifying the same savory compounds in the other. On the palate, the mushrooms' glutamates make the wine taste deeper and longer, while the wine's structure keeps the dish from reading as one-dimensional.",
      "Bone Marrow": "The wine's garrigue and iron-edged tannins cut through the bone marrow's rendered fat while its dark fruit anchors the smoky, umami depth of the roasted marrow itself. Together, the fat coats the palate and the wine's acidity lifts it clean, leaving a long, savory finish.",
      "Truffle Fries": "Grenache's earthy, sous-bois character speaks directly to the truffle's volatile sulfur compounds — this is terroir talking to terroir. The wine's fruit weight rounds out the salt and fat of the fries, and the truffle amplifies the wine's earthiness into something almost meaty.",
      "Filet Mignon": "The filet's mild, buttery flesh gives the wine's bold fruit and tannin structure a clean canvas to express itself without competition. What the guest gets is the wine doing the heavy lifting — its dark cherry and iron notes framing the tenderness of the cut in a way the steak alone can't achieve.",
      "Porterhouse": "The Porterhouse's rendered intramuscular fat and deep beefy Maillard crust need a wine with tannin grip and enough acidity to slice through — this Gigondas has both. The two bold presences meet in the middle, the wine's dried herb and leather notes locking onto the char and pulling out a savory, lingering depth.",
      "Brussels and Belly": "The wine's peppery garrigue and brambly fruit find a mirror in the caramelized Brussels bitterness and the pork belly's smoky, rendered fat. That bitter-to-bitter echo is actually a relief valve — it keeps neither element from overwhelming the palate, and the finish tastes like the best version of both.",
      "Grilled Caesar": "The grilled char on the romaine introduces a smokiness that latches onto the wine's earthy, roasted-herb character, while the anchovy-driven umami in the dressing amplifies the wine's savory, iron-tinged backbone. What lands on the palate is a rich, almost meaty combination where the wine suddenly tastes deeper and more structured.",
      "Creamed Spinach": "The wine's firm tannins grip the dairy fat in the cream reduction, preventing the dish from reading as heavy, while the iron-mineral quality of Grenache finds a natural counterpart in the spinach's vegetal depth. The result is a savory, almost Burgundian richness — the wine lifts the dish and the cream softens the wine's boldest edges.",
      "House Wedge": "The wedge's cold, high-water iceberg and tangy blue cheese dressing create a contrast — the fat and acid in the dressing soften the wine's tannins while the cheese's funk finds a foothold in the wine's earthy, garrigue notes. It works because the blue cheese does the bridging work, but the freshness of the lettuce keeps the wine from feeling too heavy for the course.",
      "Au Gratin Potatoes": "The Grenache's iron-tinged earthiness and dried herb character cut through the gruyère fat while the wine's garrigue notes lift the potato's starchy richness. Together they land on a savory, almost rustic depth — like the dish suddenly has a backbone.",
      "Lardons": "The smoky, rendered pork fat in the lardons amplifies the Grenache's dark olive and cured meat undertones, two things that speak the same southern French dialect. The wine's medium tannin grips the fat just enough to keep each bite clean and ready for the next."
    }
  },
  {
    name: 'Le Volte dell\'Ornellaia',
    category: 'wine-red',
    profile: ['Tuscan-blend','medium-full','dark-fruit','Merlot-driven','Italian','structured'],
    price: '$80',
    excellent: ['Kansas City','Filet Mignon','Mushrooms','Truffle Fries','Creamed Spinach'],
    strong: ['Cowboy Ribeye','Porterhouse','Brussels and Belly','Grilled Caesar','Au Gratin Potatoes'],
    works: ['House Wedge','Bone Marrow','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Kansas City": "The Merlot-driven plum and black cherry in the wine meet the strip's firm, mineral-forward beef proteins in a classic fruit-against-iron bridge. That contrast tightens the wine's soft tannins and draws out the cut's natural savoriness in a way that makes both taste more defined.",
      "Filet Mignon": "The wine's silky texture — that Merlot roundness — mirrors the filet's butter-tender muscle fibers, and the Sangiovese-driven acidity keeps the dairy richness from any finishing sauce from going flat. The guest gets a mouthful that's plush without being heavy.",
      "Mushrooms": "The Sangiovese in the blend carries glutamate-rich earth tones that share the same umami frequency as sautéed mushrooms, essentially doubling the savory signal. What hits the palate is a long, resonant savoriness that lingers well past the swallow.",
      "Truffle Fries": "The wine's dark fruit and dried herb notes give the truffle's 2,4-dithiapentane earthiness a fruity counterweight that keeps it from reading as muddy. The result is a back-and-forth where each sip resets the palate for the truffle and each fry amplifies the wine's complexity.",
      "Creamed Spinach": "The wine's Tuscan acidity slices through the béchamel fat and lifts the slight bitterness of the spinach into something bright and intentional. Together they create a push-pull between richness and freshness that makes the dish taste lighter and the wine taste rounder.",
      "Cowboy Ribeye": "The ribeye's intramuscular fat needs the wine's Sangiovese-driven acidity to keep each bite from coating the palate — it functions like a squeeze of lemon on something rich. That brightness lets the dark fruit come forward on the finish, making the whole experience feel structured rather than heavy.",
      "Porterhouse": "The Merlot's dark plum and blackberry fruit mirrors the strip's bold beefiness while the Sangiovese-driven acidity cuts through the fat cap on the tenderloin side. Together they reset the palate between bites, letting both the lean and fatty halves of the cut taste like the first cut every time.",
      "Brussels and Belly": "The wine's dark fruit and savory tannins lock onto the caramelized sugars and rendered pork fat, while the Sangiovese backbone meets the Brussels' bitter char head-on. What lands at the table is a back-and-forth between smoky sweetness and red fruit that keeps pulling you back for another bite.",
      "Grilled Caesar": "The Merlot's plush body absorbs the anchovy-driven umami in the dressing while its fruit-forward core softens the char on the romaine without erasing it. The guest gets a richer, rounder Caesar — the smoke stays but the salt no longer dominates.",
      "Au Gratin Potatoes": "The wine's acidity slices through the butter and cream in the gratin the way a squeeze of lemon would, and the dark fruit bridges to the browned cheese crust on top. Each sip essentially resets the richness so the dish never feels heavy.",
      "House Wedge": "The wine's bright acidity mirrors the tang of the blue cheese dressing while the fruit softens the sharpness of the raw onion and radish. It's a contrast pairing — the cool, crisp wedge makes the wine taste warmer and more structured than it does on its own.",
      "Bone Marrow": "The Sangiovese tannins in the blend grip the lipid-heavy marrow fat and pull it off the palate, preventing the richness from coating and stacking. What follows is a wave of dark fruit that makes the umami in the marrow taste almost meaty in its own right.",
      "Lardons": "The rendered pork fat and salt in the lardons amplify the wine's dark fruit and soften any green or herbal tannin edges in the blend. The two together taste bolder and more savory than either does alone."
    }
  },
  {
    name: 'Muga Reserva',
    category: 'wine-red',
    profile: ['Rioja','Tempranillo','earthy','vanilla','structured','Spanish'],
    price: '$80',
    excellent: ['Roast Half Chicken','Kansas City','Mushrooms','Grilled Caesar','Truffle Fries'],
    strong: ['Filet Mignon','Cowboy Ribeye','Brussels and Belly','Creamed Spinach','Lardons'],
    works: ['House Wedge','Au Gratin Potatoes','Faroe Island Salmon'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut']
  ,
    pairingNotes: {
      "Roast Half Chicken": "The vanilla and coconut from American oak aging echo the caramelized skin on the bird, while the Tempranillo's earthy, dried-herb core aligns with the roasted fond and drippings underneath. The pairing makes the chicken taste deeper and more complex — closer to roast game than everyday poultry.",
      "Kansas City": "Tempranillo's firm tannins and dried cherry fruit lock onto the lean muscle fibers of the strip, while the wine's earthy undertone mirrors the iron-forward beefy character of the cut. The result is a savory, long finish where neither the steak nor the wine backs down.",
      "Mushrooms": "The wine's forest floor earthiness — a hallmark of aged Rioja — shares the same terroir-driven glutamate compounds that make sautéed mushrooms so deeply savory. Together they create a layered umami loop that just keeps building on the palate.",
      "Grilled Caesar": "The charred romaine pulls out the smoky, slightly bitter edges in the Tempranillo's dried fruit profile, while the wine's vanilla oak cuts through the anchovy-and-egg richness of the dressing. What you get is a bright, almost meaty mid-palate that outlasts both on their own.",
      "Truffle Fries": "The wine's vanilla and dried herb notes from American and French oak aging speak directly to truffle's 2,4-dithiapentane aromatics — both live in that earthy-sweet register. The fat in the fries softens the tannins just enough to let the truffle and wine's fruit meet clean in the finish.",
      "Filet Mignon": "The Muga's moderate tannin structure is gentle enough not to overwhelm the filet's delicate myoglobin-light muscle, but its red fruit acidity adds the bold contrast the mild cut needs. The buttery texture of the filet rounds the wine's edges and draws out its vanilla finish in a way a fattier steak wouldn't.",
      "Cowboy Ribeye": "The intramuscular fat in the ribeye coats the palate and mutes the Tempranillo's tannins, letting the wine's dried cherry and earthy vanilla come forward against the beef's rendered, smoky richness. What could be an overwhelming combination instead finds equilibrium — the fat and tannin neutralize each other and leave the fruit.",
      "Brussels and Belly": "The wine's earthy, slightly leathery backbone bridges the bitter glucosinolates in the Brussels with the sweet-smoke of the pork belly, acting as a through-line between two flavors that fight each other on their own. The Rioja's red fruit then lifts the caramelized char on the belly and keeps the finish from going heavy.",
      "Creamed Spinach": "The dairy fat in the cream sauce softens the wine's tannins while the Tempranillo's acidity cuts the richness and prevents the dish from coating the palate. That tension keeps each bite tasting as clean as the first.",
      "Lardons": "The Tempranillo's iron-rich earthiness and vanilla-edged oak lock directly onto the rendered pork fat and smoky char of the lardons. Together, the fat coats the palate just long enough for the wine's dried fruit to surface, leaving a finish that tastes like the best bite of a charcuterie board.",
      "House Wedge": "The Rioja's earthy backbone cuts through the buttermilk fat in the blue cheese dressing, while its vanilla note softens the sharp tang. The cold, crisp iceberg resets the palate between sips, making the wine taste fresher and more lifted than it does on its own.",
      "Au Gratin Potatoes": "The vanilla and toasted oak in the Muga mirror the browned butter and Gruyère crust on the potatoes, while the wine's moderate acidity keeps the dairy richness from sitting heavy. The result is a mouthful that reads like a savory custard — creamy, warm, and gently spiced.",
      "Faroe Island Salmon": "The wine's earthy, dried-herb quality bridges to the ocean-mineral fat of the salmon, while its soft tannins grip just enough to cut the fish's omega-rich oils without overpowering the delicate flesh. The guest gets a clean, savory finish where neither the wine nor the salmon dominates."
    }
  },
  {
    name: 'Tenuta di Arceno Chianti Classico',
    category: 'wine-red',
    profile: ['Chianti','Sangiovese','earthy','cherry','acidic','Italian','structured'],
    price: '$95',
    excellent: ['Kansas City','Filet Mignon','Mushrooms','Grilled Caesar','Truffle Fries'],
    strong: ['Cowboy Ribeye','Porterhouse','Brussels and Belly','Creamed Spinach','Au Gratin Potatoes'],
    works: ['House Wedge','Bone Marrow','Roast Half Chicken'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Kansas City": "Sangiovese's high acidity and firm tannins are built for muscle fiber — they slice through the dense, beefy chew of the Kansas City strip and pull the meat's umami forward. The wine's bright cherry note surfaces on the finish, acting like a natural counterpoint to the strip's bold, almost mineral char.",
      "Filet Mignon": "The Chianti's tart cherry and fine-grained tannins provide just enough structure to give the filet's mild, buttery tenderness something to push against without overwhelming it. That contrast lets the beef's subtle iron and cream flavors come through more clearly than they would alongside a heavier red.",
      "Mushrooms": "The Sangiovese's earthy, forest-floor character shares the same glutamate-rich frequency as sautéed mushrooms, so the two amplify each other's umami rather than competing. The wine's acidity then lifts the savory weight, preventing the combination from turning heavy or muddy on the palate.",
      "Grilled Caesar": "The char on the romaine echoes the Chianti's smoky, dried-herb earthiness, while the wine's acidity is acidic enough to stand up to — but not clash with — the anchovy and lemon in the dressing. Together they create a savory, slightly smoky loop where each bite resets the wine and each sip sharpens the next forkful.",
      "Truffle Fries": "The Sangiovese's forest floor earthiness runs directly parallel to the truffle's volatile sulfur compounds, creating a shared terroir note between the glass and the plate. Together, they amplify that deep, mushroom-like umami while the wine's bright acidity keeps the richness of the fry oil from sitting heavy.",
      "Cowboy Ribeye": "Sangiovese carries high tannin that bonds to the fat proteins in a heavily marbled cut, scrubbing the palate clean between bites while the wine's dried cherry acidity cuts through the char crust. The result is a back-and-forth where each bite of steak resets the wine and each sip resets the fat.",
      "Porterhouse": "The Chianti's firm tannin structure latches onto the strip side's lean muscle fibers while the cherry fruit echoes the iron-rich blood notes in the tenderloin. That dual nature of the Porterhouse — bold and delicate in one cut — finds an answer in the wine's balance of grip and brightness.",
      "Brussels and Belly": "The wine's earthy, slightly bitter finish mirrors the caramelized outer leaves of the Brussels sprouts, while its cherry acidity slices through the rendered pork belly fat. The smoky-sweet glaze on the belly draws out the dried fruit in the Sangiovese, making the wine taste riper than it does on its own.",
      "Creamed Spinach": "Sangiovese's natural acidity acts like a squeeze of lemon against the heavy cream and butter base, preventing the dish from coating the palate. The mineral, iron-tinged quality in the spinach itself echoes the wine's earthy backbone, keeping both from going flat.",
      "Au Gratin Potatoes": "The Chianti's acid cuts through the browned butter and melted cheese fat, while the savory, slightly oxidized notes in a Classico speak to the toasted breadcrumb crust on top. Without that acidity, a dish this rich would mute the wine — instead it resets it.",
      "House Wedge": "The bright malic acidity in the Sangiovese finds common ground with the tangy buttermilk base of the dressing, creating a shared tartness that makes both feel cleaner and more precise. The crisp, cold iceberg acts as a textural counterpoint to the wine's soft tannins, keeping the pairing light on its feet.",
      "Bone Marrow": "Bone marrow is essentially pure rendered fat and collagen, and the Chianti's tannin is one of the few things at the table capable of cutting through it without acid alone. The wine's cherry and earth notes pick up the smoky, roasted quality of the bone itself, so the finish reads as savory and complete rather than just rich.",
      "Roast Half Chicken": "Sangiovese's high acidity and dried cherry cut through the roasted chicken fat the same way a squeeze of lemon would, while the wine's earthy, forest-floor undertone locks onto the savory pan drippings. Together, the richness of the bird lifts the fruit in the wine and the acidity keeps every bite tasting clean."
    }
  },
  {
    name: 'Château Haut Segottes',
    category: 'wine-red',
    profile: ['Saint-Émilion','Merlot-dominant','plush','dark-fruit','French','structured'],
    price: '$100',
    excellent: ['Filet Mignon','Kansas City','Mushrooms','Truffle Fries','Creamed Spinach'],
    strong: ['Cowboy Ribeye','Porterhouse','Brussels and Belly','Bone Marrow','Au Gratin Potatoes'],
    works: ['House Wedge','Grilled Caesar','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Filet Mignon": "The Merlot-dominant blend's plush dark-fruit and soft tannins mirror the filet's buttery texture without overwhelming its delicate, mild beef flavor. What you get is a seamless richness — the wine acts almost like a velvety sauce, amplifying the tenderness without asking the cut to do more than it is.",
      "Kansas City": "The wine's dark plum and structured body hold up against the Kansas City strip's firm grain and bold beefiness, the fruit acting as a counterweight to the cut's natural mineral intensity. That contrast keeps the pairing from going heavy — you taste more of both.",
      "Mushrooms": "The Merlot's earth-driven dark fruit shares the same glutamate-rich savory register as roasted mushrooms, creating a loop of umami that deepens with each sip and bite. The wine's plush body softens the mushrooms' earthiness just enough to make the whole thing feel indulgent rather than heavy.",
      "Truffle Fries": "Truffle's volatile sulfur compounds and the wine's earthy, dark-fruit core are speaking the same aromatic language, and the fat from the fries rounds out the Merlot's mid-palate into something almost decadent. The salt on the fries draws out the wine's fruit and makes the finish last longer than either would alone.",
      "Creamed Spinach": "The dairy fat and subtle bitterness of the creamed spinach soften the wine's tannins while the Merlot's dark fruit punches through the cream without curdling the richness. What the guest gets is a push-pull between lush and bright that keeps a heavy side dish from feeling like it's sitting on the palate.",
      "Cowboy Ribeye": "The Cowboy's abundant intramuscular fat coats the palate and needs the wine's dark fruit and tannic grip to cut through and reset — the Saint-Émilion has just enough structure to do that without overpowering the char. Each sip scrubs the fat clean and delivers a hit of plum and earth that makes the next bite of beef taste like the first.",
      "Porterhouse": "The Porterhouse gives you two cuts in one — the lean strip's bold beefy intensity and the tender filet's mild butteriness — and the wine's blend of dark fruit and plush body is flexible enough to meet both sides. The tannins anchor the strip while the round mid-palate cradles the filet, so the pairing works across every bite no matter which side of the bone you're on.",
      "Brussels and Belly": "The plum and black cherry in this Merlot-dominant Saint-Émilion mirror the caramelized sugars on the Brussels sprouts while the wine's soft tannins cut through the rendered pork belly fat. Together, the bitterness of the char on both the sprouts and the belly dissolves, leaving a long, smoky-sweet finish.",
      "Bone Marrow": "The wine's dark fruit and subtle iron note in the mid-palate lock onto the lipid richness and umami depth of the marrow, while its moderate acidity keeps the fat from coating the palate. What you get is a round, almost savory-sweet finish where the smokiness of the bone lingers and the wine tastes fuller than it is.",
      "Au Gratin Potatoes": "The plush body and low tannin in this Saint-Émilion match the viscosity of the cream and Gruyère without fighting it, while the wine's dark fruit cuts through the dairy fat the way acidity would in a leaner red. The result is that neither the wine nor the dish feels heavy — the fruit lifts the richness and the creaminess rounds out any sharp edges in the wine.",
      "House Wedge": "The cool, water-dense iceberg and tangy blue cheese dressing create a sharp contrast against the wine's warm, plush dark fruit, with the fat in the dressing softening the tannin just enough to make the Merlot feel silkier than it does on its own. The pairing works because the cheese bridges the two — its funk echoes the earthy notes in the wine while the crisp lettuce refreshes the palate between sips.",
      "Grilled Caesar": "The char on the romaine introduces a bitter, smoky edge that echoes the wine's darkest fruit notes, while the anchovy and Parmesan in the dressing bring glutamates that amplify the Merlot's savory mid-palate. What the guest tastes is a bolder, meatier version of both — the wine reads richer and the Caesar reads deeper.",
      "Lardons": "The rendered fat and salt in the lardons strip the tannin from this Merlot-dominant blend, letting the dark cherry and plum fruit come forward in a way that's almost jammy against the pork's smokiness. Each bite softens the wine and each sip of wine makes the lardon's smoke taste sweeter."
    }
  },
  {
    name: 'Clos Petit Ona Grenache',
    category: 'wine-red',
    profile: ['Grenache','medium-bodied','red-fruit','earthy','Spanish','approachable'],
    price: '$105',
    excellent: ['Roast Half Chicken','Faroe Island Salmon','Mushrooms','House Wedge','Grilled Caesar'],
    strong: ['Filet Mignon','Kansas City','Brussels and Belly','Sauteed Garlic Spinach','Shrimp Bisque'],
    works: ['Cowboy Ribeye','Burrata','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut']
  ,
    pairingNotes: {
      "Roast Half Chicken": "Grenache's strawberry and dried herb character — often roasted tomato and garrigue on the finish — maps directly onto the Maillard browning and herb-roasted skin of the chicken, creating a flavor loop where each amplifies the same savory-sweet register. The medium body keeps pace with the poultry without overwhelming it, and the earthy finish extends the roasted quality of the drippings.",
      "Faroe Island Salmon": "Grenache's lighter tannin structure and bright red fruit don't overwhelm the delicate flesh of the salmon the way a heavier red would, while the wine's earthy, almost mineral finish meets the fat-soluble omega richness in the fish rather than clashing with it. Together, the salmon's silky texture smooths the wine's fruit into something almost floral, and the wine's acidity makes the fish taste cleaner and brighter on the finish.",
      "Mushrooms": "The earthy, iron-rich terroir character in this Grenache locks directly onto the glutamates in sautéed mushrooms, two sources of umami reinforcing each other. Every sip pulls more depth out of the mushrooms while the wine's red fruit keeps the pairing from going too heavy.",
      "House Wedge": "The Grenache's bright acidity cuts through the fat in the blue cheese dressing the same way lemon does, while its red-fruit lift plays against the cool, crisp iceberg. The wine resets the palate between bites so the wedge stays fresh all the way through.",
      "Grilled Caesar": "The char on the romaine introduces a smoky bitterness that the Grenache's earthy, garrigue-like quality meets in the middle, while the wine's acidity slices through the anchovy-heavy dressing. Together they create a back-and-forth between smoke and fruit that keeps building.",
      "Filet Mignon": "The Grenache's medium body and soft tannins won't overpower the filet's delicate muscle fibers the way a bigger red would, and its earthy undertone draws out the beef's subtle iron notes. The red fruit acts as a counterweight to the butter finish, keeping the plate from feeling too rich.",
      "Kansas City": "The Kansas City's tighter grain and pronounced beefy crust need enough wine structure to hold up, and the Grenache's earthy backbone meets that savoriness directly. The wine's red fruit brightens the charred exterior so the boldness of the steak reads as flavor, not just weight.",
      "Brussels and Belly": "The Grenache's red cherry fruit bridges the caramelized sweetness on the Brussels while its earthiness locks onto the rendered pork belly fat, and the wine's light tannins provide just enough grip to cut through. The bitterness in the sprouts makes the fruit in the wine pop in a way it wouldn't on its own.",
      "Sauteed Garlic Spinach": "The allicin compounds in roasted garlic share an earthy, savory register with Grenache's terroir-driven character, creating a harmonic rather than a contrast. The wine's acidity lifts the iron in the spinach and keeps the garlic from dominating, so both elements finish clean.",
      "Shrimp Bisque": "The bisque's shellfish sweetness and cream richness need the Grenache's acidity to cut the fat and its red fruit to echo the natural sweetness of the shrimp without amplifying the heaviness. The earthy note in the wine grounds the bisque so it reads as savory-sweet rather than just rich.",
      "Cowboy Ribeye": "The Grenache's high-toned raspberry and dried herb cut through the intramuscular fat in the cowboy ribeye the way acid does — not by fighting it, but by resetting the palate between bites. Each sip lifts the richness so the next bite of char tastes just as bold as the first.",
      "Burrata": "The wine's red fruit and iron-tinged earthiness provide the contrast that burrata's neutral cream can't generate on its own — essentially acting as the seasoning. The result is that the cheese tastes richer and the wine tastes brighter, each pulling the other into sharper focus.",
      "Lardons": "The rendered pork fat in the lardons coats the palate in a way that softens the Grenache's earthy tannin, while the wine's red fruit cuts the salinity from the curing process. Together they land somewhere close to a charcuterie moment — savory, bright, and just fatty enough."
    }
  },
  {
    name: 'G.D. Vajra Albe Nebbiolo',
    category: 'wine-red',
    profile: ['Nebbiolo','earthy','cherry','floral','Piedmont','medium-bodied','Italian'],
    price: '$110',
    excellent: ['Filet Mignon','Kansas City','Mushrooms','Grilled Caesar','Truffle Fries'],
    strong: ['Cowboy Ribeye','Porterhouse','Brussels and Belly','Creamed Spinach','Au Gratin Potatoes'],
    works: ['House Wedge','Bone Marrow','Roast Half Chicken'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Filet Mignon": "Nebbiolo's firm tannin structure and dried cherry acidity bind to the myoglobin proteins in a lean filet the same way a classic sauce reduction would — adding grip and depth to meat that's too tender to generate it on its own. The guest gets the silkiness of the filet with the savory, rose-petal length of the wine finishing behind it.",
      "Kansas City": "The Kansas City's tighter muscle fibers and pronounced beef flavor give the Nebbiolo's tannins actual protein to latch onto, which softens the wine's structure while amplifying its cherry and iron notes. The combination reads as one long, savory finish — the steak's firm chew and the wine's acidity working in the same direction.",
      "Mushrooms": "The Nebbiolo shares the same forest-floor, truffle-adjacent earthiness that comes from the mushrooms' glutamates, so the two are pulling from the same aromatic register rather than contrasting. What the guest notices is that the umami depth doubles — the mushrooms taste more mineral, the wine tastes more savory, and neither one overshadows the other.",
      "Grilled Caesar": "The char on the romaine introduces a bitter, smoky compound that mirrors Nebbiolo's own structural bitterness, while the anchovy-driven umami in the dressing amplifies the wine's savory, dried-fruit mid-palate. The guest gets a back-and-forth between smoke and cherry that keeps both the salad and the wine tasting more complex than either would alone.",
      "Truffle Fries": "Black truffle shares sulfur and earthy volatile compounds with Nebbiolo's characteristic tar and rose character, so the two don't just pair — they magnify each other's aromatic intensity. The fat from the fries rounds the wine's tannin just enough that the truffle and the Nebbiolo's floral depth are all the guest can smell and taste.",
      "Cowboy Ribeye": "Nebbiolo's firm tannins and high acidity cut through the intramuscular fat in a bone-in ribeye the same way a squeeze of lemon cuts through butter, while the wine's dried cherry and iron minerality lock onto the char from the crust. Together, the fat coats the palate and softens the tannins into silk, releasing a long finish of earth and dark fruit that outlasts the bite.",
      "Porterhouse": "The Nebbiolo's rose petal and tar aromatics speak directly to the Maillard crust on the strip side, while the wine's lean, high-acid structure acts as a reset between the richer tenderloin and the more assertive New York muscle. The result is that both sides of the porterhouse taste more distinctly like themselves — the contrast keeps neither from flattening the other.",
      "Brussels and Belly": "The wine's tartaric acidity and bitter tannin structure find a mirror in the caramelized glucosinolates of the charred Brussels, while the cherry fruit bridges to the sweet glaze on the pork belly. That bitter-on-bitter alignment clears the fat from the belly off the palate cleanly, so the floral lift of the Nebbiolo comes through on the finish rather than getting buried.",
      "Creamed Spinach": "The oxalic acid in the spinach and the tartaric acid in the Nebbiolo reinforce each other in a way that cuts the cream's richness without stripping it, while the wine's earthy minerality deepens the savory, almost mineral quality of the cooked greens. What the guest tastes is a dish that suddenly feels lighter than it is, with the wine's floral edge lifting what would otherwise be a heavy mouthful.",
      "Au Gratin Potatoes": "The wine's acidity slices through the emulsified fat in the gratin's béchamel the way a knife goes through the crust — clean and precise — while the Maillard browning on the potato edges echoes the earthy, slightly oxidative quality of the Nebbiolo. On the palate, the dairy richness rounds the wine's angular tannins and the result is a texture that reads as fuller and rounder from both sides.",
      "House Wedge": "The Nebbiolo's cherry brightness and floral lift create a contrast bridge with the cool, creamy blue cheese dressing — the acid in the wine acts on the fat in the dressing the same way vinegar does in a classic vinaigrette. The iceberg's water content refreshes the palate between sips, keeping the wine's red fruit from fading and making each taste of both feel sharper and more defined.",
      "Bone Marrow": "Bone marrow is essentially liquid fat and umami collagen, and the Nebbiolo's high tannin binds to those lipids directly — tannin-fat interaction is why this pairing exists at all, and here it works to deglaze the coating sensation off the palate after each bite. What stays behind is the wine's dried rose and iron minerality sitting against the smoke from the bone, which reads on the finish as something close to a dry-aged note.",
      "Roast Half Chicken": "The rendered chicken skin's Maillard compounds and the Nebbiolo's earthy, slightly gamey baseline share enough savory depth to feel like they're from the same flavor family, while the wine's acidity keeps the poultry's milder fat from dulling the fruit. The guest gets the roasted savoriness of the chicken amplified, with the wine's floral and cherry notes providing contrast that keeps the pairing from reading as flat or one-dimensional."
    }
  },
  {
    name: 'Domaine Tempier Bandol',
    category: 'wine-red',
    profile: ['Mourvèdre-dominant','bold','earthy','dark-fruit','Provence','structured'],
    price: '$120',
    excellent: ['Kansas City','Cowboy Ribeye','Mushrooms','Bone Marrow','Truffle Fries'],
    strong: ['The Tomahawk','Filet Mignon','Brussels and Belly','Grilled Caesar','Lardons'],
    works: ['House Wedge','Creamed Spinach','Au Gratin Potatoes'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Kansas City": "The Mourvèdre's iron-tinged dark fruit and garrigue earthiness lock onto the lean, mineral-forward muscle of a Kansas City strip, where high-heat char drives Maillard compounds that mirror the wine's own savory depth. The result is a pairing that reads as one continuous flavor — beef and earth — rather than food and wine taking turns.",
      "Cowboy Ribeye": "Bandol's trademark tannin structure cuts through the ribeye's intramuscular fat while the wine's blackberry and olive tapenade notes amplify the beef's own rendered-fat sweetness. The guest gets a longer, richer finish than either delivers alone — the fat carries the fruit, the fruit carries the char.",
      "Mushrooms": "Mourvèdre shares a literal flavor compound with mushrooms — both carry elevated levels of glutamates and earthy terpenoids that, when tasted together, reinforce rather than compete. What lands at the table is an almost meaty umami loop where it becomes hard to tell where the wine ends and the mushroom begins.",
      "Bone Marrow": "The wine's structured tannins bind to the collagen-rich fat of the marrow the same way they bind to muscle protein in red meat, pulling the richness into focus rather than letting it coat and flatten the palate. What the guest experiences is marrow that tastes more precise — cleaner, more savory — with the wine's dark olive and smoked meat notes threading through the finish.",
      "Truffle Fries": "Truffle's sulfurous aromatic compounds — primarily dimethyl sulfide — resonate directly with the barnyard and underbrush character built into Mourvèdre at every stage of its development. The fry's rendered potato starch and salt soften the wine's tannin just enough that the shared earthiness between truffle and Bandol hits the palate at the same moment, clean and deep.",
      "The Tomahawk": "The Tomahawk's sheer fat volume is the variable here — Bandol has the tannin mass to handle it, but the wine's dark fruit and herb character can get absorbed rather than expressed when the cut runs very hot with rendered fat. It's a strong pairing rather than a transcendent one, with the wine holding structure and delivering black plum through the finish once the first richness clears.",
      "Filet Mignon": "The filet's mild, buttery tenderness doesn't push back against Bandol the way a fattier or more charred cut would, so the wine leads — its dark fruit and garrigue come forward while the beef provides a clean, yielding backdrop. The guest gets the full aromatic complexity of the Tempier without interference, which is either a showcase or a slight imbalance depending on how much beef they want to taste.",
      "Brussels and Belly": "The charred, bitter edges of roasted Brussels sprouts mirror the wine's own dried herb and tobacco tannin, while the pork belly's rendered fat and brown-sugar caramelization pull out the Mourvèdre's dark fruit in a way red meat alone often doesn't. The smoke bridge between the belly and the wine's earthiness gives the pairing its backbone, landing as sweet, savory, and slightly wild all at once.",
      "Grilled Caesar": "Mourvèdre carries a wild herb and iron-edged earthiness that locks onto the charred romaine's smoke while the wine's firm tannins cut through the anchovy-laced dressing. The guest gets a back-and-forth between bitter char and dark fruit that keeps both the salad and the glass tasting fresher than either would alone.",
      "Lardons": "The cured pork fat in the lardons pulls out the garrigue and cured-meat notes already living in Mourvèdre, essentially mirroring the wine's own savory backbone. What the guest tastes is a seamless loop — the wine reads meatier, the lardons read more complex, and neither overwhelms the other.",
      "House Wedge": "The wine's dark-fruit density and earthy grip act as a counterweight to the cold, crisp iceberg and the bright acidity in the blue cheese dressing, creating contrast rather than harmony. The guest gets a palate reset with each sip — the richness of the dressing is cut, and the wine's fruit suddenly pops against the chill.",
      "Creamed Spinach": "Mourvèdre's iron-mineral spine and grippy tannins push back against the butter-fat weight of the béchamel, keeping the dish from sitting heavy on the palate. The guest experiences the cream as lighter and the wine as rounder, each pulling the other toward a middle ground that neither hits on its own.",
      "Au Gratin Potatoes": "The browned, caramelized gruyère crust on the gratin shares a Maillard-reaction richness with the dark-fruit and toasted-earth character in the Bandol. When the guest takes both together, the wine's tannin structure slices through the potato starch and cream, leaving the palate clean and ready for the next bite."
    }
  },
  {
    name: 'Domaine du Grand Tinel',
    category: 'wine-red',
    profile: ['Châteauneuf-du-Pape','Grenache-dominant','bold','earthy','spice','Rhône'],
    price: '$125',
    excellent: ['Kansas City','Cowboy Ribeye','Mushrooms','Bone Marrow','Truffle Fries'],
    strong: ['The Tomahawk','Filet Mignon','Brussels and Belly','Grilled Caesar','Creamed Spinach'],
    works: ['House Wedge','Au Gratin Potatoes','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Kansas City": "Grenache's red-fruit brightness and iron-laced earthiness mirror the clean, intense beef flavor of a lean strip, where fat isn't doing the work — the muscle is. The guest gets amplification: the strip's firm, beefy density draws more fruit from the wine, and the wine's acidity elongates the finish of every bite.",
      "Cowboy Ribeye": "The Grenache's high-toned red fruit and garrigue cut through the ribeye's heavy intramuscular fat and bone-side richness, acting as an acid-and-tannin counterbalance to all that marbling. What the guest experiences is a constantly refreshed palate — the fat coats, the wine strips it back, and the beef flavor returns more clearly with each cycle.",
      "Mushrooms": "Grenache and sautéed mushrooms share glutamate-driven umami depth, and the wine's earthy, dried-herb character is essentially the botanical version of what's happening in the pan. The guest tastes a single unified savory note that's bigger than either element — the mushrooms make the wine taste older and more complex, and the wine makes the mushrooms taste meatier.",
      "Bone Marrow": "The iron-laced earthiness and dried herb character of this Grenache-dominant Châteauneuf lock onto the roasted marrow's collagen-rich fat and smoke in a way that cuts through without stripping the richness. What you get is a sustained, savory finish — the fat coats, the wine cleans, and both go longer together than either does alone.",
      "Truffle Fries": "The garrigue and sous-bois notes in this wine — lavender, thyme, forest floor — speak directly to the volatile sulfur compounds in truffle, amplifying the earthiness in both. The result is a deep, mushroom-and-herb resonance that makes the fries taste more truffle-forward and the wine taste more complex.",
      "The Tomahawk": "The high tannin and black pepper spice from the Syrah component in this blend cut through the intramuscular fat of a heavily marbled tomahawk, while the Grenache's dark fruit softens against the char. Each bite resets the palate so the next one hits with the same intensity as the first.",
      "Filet Mignon": "The filet's mild, clean beef flavor gives the wine's complexity — dried cherry, leather, herbes de Provence — nowhere to hide, letting the guest taste the wine at full expression rather than having it absorbed by fat. The contrast works because the butter finish on the filet rounds the wine's tannin just enough to make it feel seamless.",
      "Brussels and Belly": "The bitter glucosinolates in charred Brussels sprouts mirror the wine's garrigue and earthy tannin, while the rendered pork belly fat acts the same way marbling does — softening the wine's grip. The smoke on both the pork and the wine's oak-influenced structure creates a through-line that ties the whole bite together.",
      "Grilled Caesar": "The high-heat char on the romaine produces Maillard compounds that echo the wine's roasted herb and dark fruit, and the anchovy-driven umami in the dressing amplifies the wine's savory, meaty backbone. The creamy dressing then tames the tannin so the wine's fruit comes forward on the finish.",
      "Creamed Spinach": "The dairy fat and glutamates in a heavy cream reduction soften this wine's firm tannin structure, pulling its fruit and spice into focus rather than letting the grip dominate. What the guest experiences is a rounder, almost velvety version of the wine alongside a dish that picks up an unexpected depth from the wine's iron and herb character.",
      "House Wedge": "The cool, high-water-content iceberg and tangy blue cheese dressing act as an acid and fat reset between pours, palate-cleansing in a way that makes the wine's next sip taste fresher and brighter. It's a lighter bridge, but the blue cheese's funk finds common ground with the wine's earthy, barnyard-tinged complexity.",
      "Au Gratin Potatoes": "The Grenache's garrigue-driven earthiness and mid-palate richness cut through the cream and Gruyère fat without stripping the dish's savory depth. Together, the wine's dried herb character lifts what could be a heavy bite into something bright and lingering.",
      "Lardons": "The Châteauneuf's sun-baked earth and dark fruit meet the rendered pork fat and smoke head-on, with the wine's rustic tannin structure anchoring the saltiness of the cured meat. What the guest gets is a back-and-forth between the wine's spice and the lardon's char that keeps both from feeling one-dimensional."
    }
  },
  {
    name: 'Pio Cesare Barbaresco',
    category: 'wine-red',
    profile: ['Nebbiolo','Barbaresco','structured','earthy','floral','Piedmont','premium'],
    price: '$130',
    excellent: ['Filet Mignon','Kansas City','Mushrooms','Truffle Fries','Bone Marrow'],
    strong: ['Cowboy Ribeye','Porterhouse','Creamed Spinach','Brussels and Belly','Grilled Caesar'],
    works: ['House Wedge','Au Gratin Potatoes','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Filet Mignon": "Nebbiolo's high acidity and fine-grained tannins are designed for lean, low-fat proteins — they cling to the filet's silky muscle fiber without overpowering its delicate, butter-poached character. The result is a rare harmony where the wine's rose and tar complexity becomes the flavor the meat was quietly waiting for.",
      "Kansas City": "The firm chew of the Kansas City strip matches Barbaresco's structured tannins point for point, and the wine's dried cherry and iron minerality echo the strip's dense, beefy core. Each bite softens the wine's grip just enough to reveal its secondary complexity — leather, dried violet — without losing the steak's bold identity.",
      "Mushrooms": "Nebbiolo carries significant amounts of the same earthbound aromatic compounds — decaying leaf, forest floor, iron — that make sautéed mushrooms taste umami-deep. When they meet, those shared soil-driven notes stack into something richer and more dimensional than either delivers alone.",
      "Truffle Fries": "The wine's tar and undergrowth aromas are built from the same volatile sulfur compounds that give truffle its signature funk, making this less a pairing and more an amplification. The fry's rendered fat and salt soften Barbaresco's angular tannins, and the finish stretches long with a layered earthiness that neither component achieves on its own.",
      "Bone Marrow": "Bone marrow's collagen-rich fat coats the palate and tames Nebbiolo's famously drying tannins, allowing the wine's dried fruit and iron minerality to come forward without austerity. The smoky, umami depth of the roasted marrow then pulls out a savory, almost meaty dimension in the wine that would otherwise stay buried.",
      "Cowboy Ribeye": "The ribeye's intramuscular fat and Maillard-crusted exterior need the structural tension of Barbaresco's tannins to keep each bite from reading as simply rich — the wine's acidity resets the palate between bites. What the guest experiences is contrast working as architecture: the fat makes the wine generous, the tannins make the steak precise.",
      "Porterhouse": "Nebbiolo's high tannin and dried rose-and-tar profile lock onto the myoglobin-rich strip side while the wine's natural acidity cuts through the fat cap on the tenderloin side. The guest gets two different conversations happening at once — structure meeting muscle on one side, brightness meeting butter on the other.",
      "Creamed Spinach": "The wine's grippy tannins grab onto the casein proteins in the cream sauce the same way they'd grip a fatty cut of meat, giving the dish a backbone it wouldn't otherwise have. What lands on the palate is a savory, almost truffle-like depth where the Barbaresco's earthiness and the spinach's mineral bitterness reinforce each other.",
      "Brussels and Belly": "The Barbaresco's tar-and-leather earthiness speaks directly to the Maillard char on the Brussels while its dried cherry fruit mirrors the sweet glaze on the pork belly. The bitterness in the caramelized leaves and the tannin in the wine neutralize each other, leaving the smoky pork fat as the clean finish.",
      "Grilled Caesar": "The char on the romaine produces the same pyrazine-adjacent smokiness found in aged Nebbiolo, and the anchovy paste's glutamates amplify the wine's umami-forward, ferrous quality. Together they create a savory loop — each sip makes the next bite taste meatier, each bite makes the next sip taste richer.",
      "House Wedge": "The iceberg's high water content and the blue cheese's fat provide a palate-cleansing reset that temporarily strips the tannins, letting the Barbaresco's rose petal and red fruit aromatics surface more clearly than they would against a richer dish. The contrast makes the wine taste more approachable and the wedge taste less heavy.",
      "Au Gratin Potatoes": "The starch in the potato layers coats the palate and softens the wine's tannin structure, while the browned Gruyère crust shares the same nutty, oxidative notes found in the wine's oak aging. The result is a rounder, creamier expression of the Barbaresco than you'd get on its own.",
      "Lardons": "The rendered pork fat in the lardons binds to the wine's tannin chains, physically softening the grip on the palate the way a fatty steak would. That tannin-fat interaction releases the Barbaresco's secondary fruit — dried cherry and plum — which reads as a subtle sweet note against the salty, crisped pork."
    }
  },
  {
    name: 'Château Batailley',
    category: 'wine-red',
    profile: ['Pauillac','Cab-dominant','structured','cedar','classic-Bordeaux','premium'],
    price: '$140',
    excellent: ['Filet Mignon','Kansas City','Truffle Fries','Mushrooms','Bone Marrow'],
    strong: ['Cowboy Ribeye','Porterhouse','Creamed Spinach','Brussels and Belly','Au Gratin Potatoes'],
    works: ['House Wedge','Grilled Caesar','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Filet Mignon": "Pauillac's signature pencil-shaving cedar and black currant profile is built for lean, low-myoglobin beef — it doesn't need fat to mediate the tannin because the filet's buttery texture from the tenderloin muscle's low collagen content does that work instead. What the guest experiences is a seamless, almost velvety transition between sip and bite, with the wine's dark fruit elongating the meat's finish rather than competing with it.",
      "Kansas City": "The wine's firm tannins and graphite-edged Cabernet fruit lock onto the strip's dense, lean muscle fibers — tannins need protein to soften, and this cut delivers exactly that. The result is a mid-palate that opens up on both sides, the beef tasting beefier and the wine tasting rounder than either does alone.",
      "Truffle Fries": "The cedar and dried herb notes in a Pauillac share the same terpenoid family as truffle's 2,4-dithiapentane aroma compounds, so the earthiness in the wine isn't competing — it's amplifying. One bite of fry into a sip of Batailley and the truffle seems to triple in intensity while the wine's grip softens against the potato fat.",
      "Mushrooms": "Pauillac Cab carries natural umami from its long skin contact and the forest-floor character of mature Médoc fruit, which lands in the same glutamate-driven register as sautéed mushrooms. Together they create a savory depth that feels almost like a reduction sauce — richer and more complete than either element on its own.",
      "Bone Marrow": "The wine's structured tannins cut through the collagen-rich fat of roasted marrow the way a squeeze of lemon would — providing the acid and astringency that raw richness is begging for. That contrast means the marrow reads as luxurious rather than heavy, and the wine's dark fruit comes forward once the fat coats the palate.",
      "Cowboy Ribeye": "The intramuscular fat in a ribeye acts as a solvent for the wine's tannins, rounding the edges of the Cab's structure and releasing cedar and black currant aromatics that were compressed when you sipped it alone. The fat needs the tannin to keep it from going cloying, and that exchange lands as a long, balanced finish.",
      "Porterhouse": "A porterhouse gives you two textural negotiations at once — the strip's tight grain grips the tannins while the tenderloin's butter-soft fibers let the wine's fruit come forward, so each side of the bone tells a different part of the Batailley story. The overall effect is a wine that tastes more complete and a steak that tastes more complex with every alternating bite.",
      "Creamed Spinach": "The dairy fat and cream in the spinach coats the palate and physically binds to the wine's tannin molecules, dramatically softening the Cab's structure and pushing its cedar and cassis notes to the front. What you get is a momentary impression of a much older, more velvety wine — the cream does the work that ten years of bottle aging would.",
      "Brussels and Belly": "The Maillard-browned pork belly fat and the caramelized bitter edge of charred Brussels are both asking for the same thing — tannin and acidity to cut the richness and a dark fruit core to echo the smoke. The Batailley's Cab structure handles the fat while its fruit bridges to the sweet-bitter char, pulling the dish's competing flavors into a single, cohesive bite.",
      "Au Gratin Potatoes": "The firm tannin structure and cedar-dry finish in this Pauillac cut through the heavy cream and melted gruyère, preventing the dish from sitting flat on the palate. What you get is a clean reset between bites — the richness of the potato never overwhelms, and the wine stays lifted instead of getting buried in fat.",
      "House Wedge": "The Cabernet's bright cassis fruit and grippy tannins meet the lactic tang of blue cheese dressing head-on, while the cedar note in the wine echoes the cool, clean crunch of the iceberg. Together they create a back-and-forth between creamy and structured that keeps both the salad and the wine tasting fresher than either would alone.",
      "Grilled Caesar": "The char on the romaine carries a bitter, smoky edge that mirrors the tobacco and graphite notes embedded in this Pauillac, while the anchovy-driven umami in the Caesar dressing softens the wine's tannins through a glutamate interaction. The result is a rounder, more generous expression of the Batailley than you'd get with the wine on its own.",
      "Lardons": "The rendered pork fat and salt-forward intensity of the lardons coat the palate in a way that smooths the Cabernet's angular tannins, while the wine's cedar and dark fruit push back against the pork's smokiness. Each bite pulls the wine's structure into focus and each sip refreshes the salt without dulling it."
    }
  },
  {
    name: 'Château Beaucastel',
    category: 'wine-red',
    profile: ['Châteauneuf-du-Pape','Mourvèdre-heavy','bold','complex','earthy','prestige'],
    price: '$175',
    excellent: ['The Tomahawk','Cowboy Ribeye','Kansas City','Bone Marrow','Mushrooms'],
    strong: ['Filet Mignon','Porterhouse','Truffle Fries','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "The Tomahawk": "Beaucastel's Mourvèdre core brings iron, leather, and dark olive — flavor compounds that mirror the deep intramuscular fat and long bone-contact flavors of the tomahawk as it rests and oxidizes off the grill. When they meet, the wine's garrigue-herb complexity threads through the beef's richness like seasoning you didn't know was missing.",
      "Cowboy Ribeye": "The high oleic fat content of the ribeye coats the mouth in a way that unlocks Beaucastel's more reticent fruit — blackberry and dried fig — that can hide behind tannin when tasted alone. That fat also rounds the wine's characteristic rustic edge, leaving a long, meaty finish where the ribeye's char and the wine's pepper note fuse into a single sustained flavor.",
      "Kansas City": "The Kansas City's leaner, firmer texture and concentrated beefy flavor provide a clean platform that doesn't compete with Beaucastel's complexity — the wine's Grenache-lifted spice and Mourvèdre earthiness project clearly against that directness. What you notice is the full aromatic range of the Beaucastel coming forward in a way that richer, fattier cuts can sometimes mute.",
      "Bone Marrow": "Bone marrow is essentially pure rendered collagen and fat with a deep roasted umami base — and Beaucastel's Mourvèdre brings matching weight plus a mineral, iron-tinged backbone that keeps the pairing from tipping into excess. The smoky, almost savory finish of the marrow lengthens the wine's finish dramatically, pulling out dark fruit and earth that linger well after both are swallowed.",
      "Mushrooms": "Mourvèdre carries a deep, gamey earthiness — the same glutamate-driven funk that makes sautéed mushrooms so savory — while the wine's garrigue notes mirror the forest floor character of the mushroom itself. Together they push each other into a longer, darker finish that lingers well past the last bite.",
      "Filet Mignon": "The wine's Mourvèdre backbone brings iron and dried herb structure that gives the filet's mild, tender flesh something to lean against, while the wine's old-vine density fills in where the leaner cut pulls back. The fat in the wine's texture essentially acts as the butter the filet is often finished with, creating a seamless, round mouthfeel.",
      "Porterhouse": "Beaucastel's tannic grip latches onto the porterhouse's intramuscular fat and char, with the wine's dark fruit and leather cutting through the strip side's boldness while the tenderloin keeps it from getting too heavy. The contrast between the wine's wild, rustic Rhône character and the clean beef flavor sharpens both.",
      "Truffle Fries": "The wine's Mourvèdre earthiness and the volatile sulfur compounds in truffle share the same underground register, amplifying each other without either one taking over. What you get is a single sustained wave of umami and earth that makes the fries taste richer and the wine taste more complete.",
      "Creamed Spinach": "The wine's grippy tannins cut through the cream's fat coating on the palate, while its dried herb and iron notes pick up the mineral character the spinach carries underneath the dairy richness. The creaminess softens the wine's boldness just enough to reveal the fruit.",
      "Brussels and Belly": "The roasted bitterness of the Brussels and the rendered, smoky fat of the belly match the wine's dark fruit and garrigue — bitter against bitter, smoke against spice — while the pork fat greases the tannins into something almost silky. The sweet glaze on the dish bounces off the wine's acidity and keeps the whole combination from going heavy.",
      "House Wedge": "The wine's natural acidity and herbal edge speak to the brightness of the dressing, while the cold crisp lettuce acts as a palate reset that makes each sip of Beaucastel taste fresher and more aromatic. It's not a deep pairing, but the contrast keeps the wine lively through a course that could otherwise dull it.",
      "Au Gratin Potatoes": "The cream and melted cheese in the gratin coat the palate and mute the wine's tannins, letting the fruit and spice in the Beaucastel come forward in a way that a leaner dish wouldn't allow. The starch absorbs the wine's structure while the browned top layer of the gratin echoes the wine's earthy, toasted complexity.",
      "Grilled Caesar": "The Mourvèdre-driven garrigue and smoked meat notes in this Châteauneuf lock onto the char from the romaine hearts and the anchovy-driven umami in the dressing. Together, they turn the salad's creamy, smoky weight into something closer to a full course — the wine's structure holds the richness of the dressing without letting it flatten."
    }
  },
  {
    name: 'Poderi Aldo Conterno Nebbiolo',
    category: 'wine-red',
    profile: ['Nebbiolo','Piedmont','structured','earthy','premium','age-worthy'],
    price: '$180',
    excellent: ['Filet Mignon','Kansas City','The Tomahawk','Mushrooms','Bone Marrow'],
    strong: ['Cowboy Ribeye','Porterhouse','Truffle Fries','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Filet Mignon": "Nebbiolo's firm tannins and dried rose acidity cut through the butter baste on the filet, while the wine's tar and iron undertones draw out the beef's mild, almost sweet center. What reads as subtle on the plate becomes layered and savory the moment the two meet.",
      "Kansas City": "The Kansas City's dense, well-developed crust gives the Nebbiolo's grippy tannins something structural to work against, and the wine's Piedmont earthiness locks onto the strip's concentrated beefy core. That grip softens as the fat renders on the palate, opening up a long, savory finish neither delivers alone.",
      "The Tomahawk": "The Tomahawk's heavy intramuscular fat coats the palate in a way that absorbs and softens Nebbiolo's famously assertive tannins, letting the wine's dried cherry and leather come forward. The result is a back-and-forth where each bite resets the wine and each sip cuts the richness just enough to keep pulling you back.",
      "Mushrooms": "Nebbiolo carries native truffle and forest floor compounds — the same volatile aromatics that define deeply sautéed mushrooms — so the pairing feels less like contrast and more like recognition. On the palate, the wine's acidity lifts the mushrooms' glutamate-heavy richness, keeping each bite bright and the umami from going muddy.",
      "Bone Marrow": "Bone marrow's collagen-rich fat is one of the few textures dense enough to genuinely tame Nebbiolo's tannin structure, and the wine's iron and tar notes mirror the smokiness from the roasting process. Spread on toast with the wine, that fat coats the mouth in a way that makes the Nebbiolo taste rounder and deeper than it does on its own.",
      "Cowboy Ribeye": "The Cowboy's high-fat marbling releases slowly through the chew, which gives Nebbiolo's slow-dissolving tannins time to integrate rather than clash. The wine's Piedmont earthiness grounds the ribeye's bold char without competing with it, and the finish runs long with dried fruit and beef fat in the same breath.",
      "Porterhouse": "The Porterhouse gives the Nebbiolo two targets — the strip side's firm, beefy density for the tannins to grip, and the tenderloin's butter-soft texture to show off the wine's floral acidity. Working across both cuts, the wine ties the plate together in a way a single-muscle steak wouldn't allow.",
      "Truffle Fries": "Nebbiolo's dried rose and tar aromatics share the same sulfur-based geosmin compounds with black truffle, locking the wine and fry into the same earthy register. The result is a single, sustained umami bloom that makes both the wine and the potato seem richer than they are alone.",
      "Creamed Spinach": "The wine's firm tannins cut through the butterfat in the cream, while its brick-dust minerality pulls the iron and green bitterness of the spinach into focus. What lands on the palate is a cleaner, more defined version of both — the cream feels lighter, the wine feels rounder.",
      "Brussels and Belly": "Nebbiolo's high acidity and dried cherry fruit lock onto the caramelized sugars on the Brussels while the wine's tannins grip the rendered pork fat and lift it off the finish. The bitterness in both the charred leaf and the wine's grippy structure echo each other and then resolve together into something almost sweet.",
      "House Wedge": "The wine's acidity mirrors the tang of the blue cheese dressing, while its tannins provide just enough structure to stand up to the fat without overwhelming the cool, crisp iceberg. The pairing works as a contrast — the wine's earthy weight makes the wedge feel refreshing by comparison.",
      "Au Gratin Potatoes": "Nebbiolo's tartaric acidity slices through the Maillard-browned cheese crust and emulsified cream, preventing the dish's richness from coating the palate. The wine's dried herb and forest floor notes give the gratin a savory depth it wouldn't find on its own.",
      "Grilled Caesar": "The char on the romaine introduces a light bitterness that aligns with Nebbiolo's tannic grip, while the anchovy-driven umami in the dressing amplifies the wine's savory, brothy mid-palate. Together they build a smoked, salted richness that feels intentional rather than accidental."
    }
  },
  {
    name: 'Le Ragnaie Brunello',
    category: 'wine-red',
    profile: ['Brunello','Sangiovese-Grosso','bold','structured','earthy','Tuscany','prestige'],
    price: '$200',
    excellent: ['Filet Mignon','Kansas City','The Tomahawk','Bone Marrow','Mushrooms'],
    strong: ['Cowboy Ribeye','Porterhouse','Truffle Fries','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Filet Mignon": "Brunello's high acidity and iron-laced mineral core speak directly to the myoglobin in the lean filet, intensifying the meat's quiet beefiness without adding weight. The wine's tannins bind to the filet's sparse fat and protein, extending the finish so the butter softness of the cut lingers well past the last bite.",
      "Kansas City": "The strip's dense, firm muscle fiber gives the Brunello's substantial tannins something real to grip, while the wine's sour cherry and dried herb profile cuts the strip's bold, almost funky beefiness and reframes it as something more refined. The firmness in both meets in the middle — neither overpowers the other, and the finish is long and savory.",
      "The Tomahawk": "Brunello's high tannin structure binds to the intramuscular fat in the tomahawk, while its dried cherry and iron minerality lock onto the char from the sear. The fat softens the wine's grip and the wine lifts the richness off the palate, so each bite reads cleaner and each sip reads rounder.",
      "Bone Marrow": "The Sangiovese's brick-edged acidity cuts through the lipid density of the marrow, and its savory, leather-tinged finish mirrors the umami depth that smoke pulls from the bone. Together they create a loop — the wine cleans the fat, the marrow amplifies the wine's earthy core, and neither one lets the other go flat.",
      "Mushrooms": "Brunello shares the same glutamate-rich, forest-floor aromatic compounds — dried porcini, wet earth, dried herbs — that concentrate in roasted mushrooms, so the pairing reads as one continuous flavor rather than two separate things. On the palate, the wine's firm tannins give structure to what would otherwise be a soft, textureless bite.",
      "Cowboy Ribeye": "The ribeye's heavy marbling and crust provide the fat and char the Brunello's tannins are looking for — they bind, polymerize, and the astringency drops out of the wine completely. What's left is dried dark fruit against seared beef, and the finish stretches longer than either would alone.",
      "Porterhouse": "The porterhouse gives the Brunello two targets — the strip's tight grain and mineral beefiness echoes the wine's iron and tobacco notes, while the tenderloin's buttery texture softens the tannin load. The wine's acidity keeps the richer side of the cut from reading heavy.",
      "Truffle Fries": "Truffle's sulfurous, earthy aromatic compounds sit in the same register as Brunello's undergrowth and dried herb character, so the wine doesn't contrast the fries so much as amplify their most interesting qualities. The fat from the fry softens the wine's tannins just enough to let the fruit come forward on the finish.",
      "Creamed Spinach": "The Brunello's bright malic and tartaric acidity cuts through the butterfat in the cream, keeping the dish from coating the palate, while the wine's savory, mineral spine echoes the iron and vegetal bitterness in the spinach. The result is that the dish feels lighter and the wine feels more generous than either one does on its own.",
      "Brussels and Belly": "The char and caramelized sugars on the Brussels hit the Brunello's dried cherry and tobacco framework directly, while the rendered pork belly fat does the same work a fatty steak would — dropping the wine's tannin edge and softening its structure. The bitter finish on the Brussels keeps the whole pairing from going sweet, which is exactly what this wine needs.",
      "House Wedge": "The wine's high acidity and dried cherry tartness cut straight through the blue cheese fat and buttermilk dressing, while its tannins mirror the crunch of the iceberg. The guest gets a mouthful of creamy, tangy richness followed by a clean, bright finish that resets the palate.",
      "Au Gratin Potatoes": "Brunello's iron-edged tannins and dried red fruit meet the Gruyère's browning sugars and cream's lactic fat, creating a contrast that keeps neither from tasting heavy. What lands is a savory, almost meaty depth from the potato crust with the wine's acidity lifting each bite so the richness never cloys.",
      "Grilled Caesar": "The char on the romaine produces the same bitter, carbon-edged compounds found in Sangiovese Grosso's tannic structure, so the two lock in rather than fight. Together they amplify that smoky, anchovy-driven umami while the wine's acidity slices through the emulsified Caesar fat for a long, savory finish."
    }
  },
  {
    name: 'Sesti Brunello di Montalcino',
    category: 'wine-red',
    profile: ['Brunello','Sangiovese','bold','earthy','structured','Tuscany','icon'],
    price: '$250',
    excellent: ['The Tomahawk','Cowboy Ribeye','Filet Mignon','Bone Marrow','Truffle Fries'],
    strong: ['Kansas City','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "The Tomahawk": "The wine's dense tannins bind directly to the myoglobin and marbled fat in a bone-in cut this size, softening the protein's iron-heavy intensity while the earth and dried fig in the Sangiovese echo the deep char from a high-heat sear. The result is a seamless back-and-forth between the steak's fat and the wine's structure, each making the other taste more complete.",
      "Cowboy Ribeye": "Brunello's grippy tannins act as a fat solvent on the ribeye's intramuscular lipids, and the wine's dried cherry and tobacco notes mirror the crust formed by reverse-sear or open-flame finishing. On the palate, the beef's richness elongates the wine's mid-palate fruit while the acidity scrubs clean so the next bite tastes as vivid as the first.",
      "Filet Mignon": "The filet's lean, tender muscle offers almost no fat or char to clash with Brunello's tannins, letting the wine's earthy, floral complexity — violets, forest floor, dried herbs — come fully forward against the butter-finished meat. The pairing reads as elegance over power, the wine doing the heavy lifting while the filet's mild, clean beef flavor acts as a pure backdrop.",
      "Bone Marrow": "Roasted marrow is essentially liquefied collagen and fat with a deep, Maillard-browned exterior, and Brunello's grippy tannins cut through the fat's coating texture while its earthy, iron-laced core speaks directly to the marrow's savory mineral depth. The guest gets a rich, almost buttery sip-and-bite where the wine's acidity prevents the fat from lingering too long on the finish.",
      "Truffle Fries": "Both black truffle and aged Sangiovese share the same sulfurous, earthy aromatic compounds — dimethyl sulfide and related thiols — so the wine isn't contrasting the fries, it's amplifying them. That shared earthiness doubles in intensity on the palate, and the wine's acidity and tannin cut through the fry's rendered potato fat so the truffle aroma stays elevated rather than getting buried.",
      "Kansas City": "Brunello's high tannins and dried cherry acidity are built for dense, iron-rich muscle — exactly what a lean Kansas City strip delivers. The grip of the wine grabs onto the firm texture and pulls out a deep, almost savory meatiness that neither has alone.",
      "Porterhouse": "The Sangiovese's characteristic tartness and grippy tannin structure cut through the strip's leanness while the fat cap on the tenderloin side softens the wine's earthy edge. The guest gets two different conversations — one bright and structured, one round and plush — within a single pour.",
      "Mushrooms": "Brunello carries its own forest floor and dried porcini character, so when it meets sautéed mushrooms, you're layering glutamate on glutamate — the wine's earthiness amplifies the fungi's savory depth rather than competing with it. The result is a long, resonant umami finish that lingers well past the last bite.",
      "Creamed Spinach": "The fat and dairy in creamed spinach coat the palate and soften Brunello's firm tannins, essentially turning down the wine's astringency and letting its dried fruit and leather come forward. The guest experiences a rounder, more approachable version of the wine alongside a richer, more savory version of the dish.",
      "Brussels and Belly": "The caramelized bitterness of charred Brussels and the rendered sweetness of pork belly create two targets the Brunello can work with simultaneously — the acidity slices the fat while the wine's earthy tannins echo the char. That push-pull between sweet pork, bitter greens, and the wine's structure keeps every bite from going heavy.",
      "House Wedge": "The wine's bright Sangiovese acidity mirrors the snap of cold iceberg and cuts through the blue cheese dressing's fat in the same way a squeeze of lemon would. It's a contrast pairing — the freshness of the wedge gives the Brunello a clean canvas that makes its fruit pop.",
      "Au Gratin Potatoes": "The starchy richness and bubbling gruyère in au gratin act as a tannin buffer, rounding off Brunello's drier edges and creating a creamier mid-palate than the wine delivers on its own. What the guest gets is a more textural, almost velvety experience from a wine that normally presents with firm structure.",
      "Grilled Caesar": "The char on the romaine introduces a faint bitterness and smoke that echoes the earthy, iron-tinged qualities in the Brunello, while the anchovy-driven umami in the dressing amplifies the wine's savory depth. Together they land somewhere between a classic steak pairing and a bright, acidic salad — structured and satisfying without tipping heavy."
    }
  },

  // ── WINES — BLENDS & OTHERS ───────────────────────────────────────────────────

  {
    name: 'Bodega Noemia A Lisa',
    category: 'wine-red',
    price: '$65',
    profile: ['Malbec-blend','Argentina','medium-full','dark-fruit','earthy','structured'],
    excellent: ['Kansas City','Cowboy Ribeye','Mushrooms','Truffle Fries','Bone Marrow'],
    strong: ['Filet Mignon','Porterhouse','Brussels and Belly','Creamed Spinach','Au Gratin Potatoes'],
    works: ['House Wedge','Grilled Caesar','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Kansas City": "The Malbec's dense blackberry and plum fruit matches the lean strip's concentrated beef flavor, while its firm tannins grip the protein and pull the iron-rich savoriness forward. Together, the wine's dark fruit sweetness and the strip's bold char create a back-and-forth that keeps each bite tasting like the first.",
      "Cowboy Ribeye": "The wine's dark fruit and violet aromatics cut through the ribeye's intramuscular fat the way acid cuts cream, resetting the palate between bites, while its medium-full body matches the steak's weight without getting lost. What the guest tastes is an amplified beefiness — the fat coats, the wine lifts, and the finish on both stretches longer than either would alone.",
      "Mushrooms": "The Malbec carries its own earthy, almost forest-floor undertone that speaks directly to the glutamates in sautéed mushrooms, stacking umami on umami in a way that reads as depth rather than heaviness. The guest gets a savory richness that feels almost meaty — the mushrooms and wine essentially build a third flavor that neither has on its own.",
      "Truffle Fries": "The wine's dark fruit and subtle graphite minerality create a counterpoint to the truffle's sulfurous earthiness, keeping the dish from feeling one-dimensional, while the fat from the fries softens the Malbec's tannins into something plush. What lands on the palate is a layered richness — truffle's funk, the wine's fruit, and the potato's starch all resolving into one long, indulgent finish.",
      "Bone Marrow": "The Malbec's anthocyanin-driven tannins bind to the marrow's collagen-rich fat, acting as a palate cleanser that keeps each scoop of marrow tasting clean rather than cloying, while the wine's dark plum fruit echoes the smoky, roasted notes from the bone. The result is a richness that feels structured — the fat and fruit push and pull each other into something that tastes more refined than either element alone.",
      "Filet Mignon": "The filet's mild, buttery tenderness doesn't fight the wine, which means the Malbec's dark fruit and soft tannins take the lead and drape over the beef like a sauce — the wine essentially does the seasoning work the cut doesn't do itself. The guest experiences the filet at its most luxurious, with the wine's body adding the boldness and complexity the lean muscle holds back.",
      "Porterhouse": "The porterhouse gives you two cuts in one, and the Malbec bridges them — its firm tannins stand up to the strip side's bold char while its ripe fruit softens against the tenderloin's buttery texture. The guest moves across the bone and the wine follows, tasting slightly different with each cut but never out of place.",
      "Brussels and Belly": "The Brussels' caramelized bitterness acts as a tannin echo for the Malbec's drying finish, creating a loop where bitter meets bitter and both ease off, while the pork belly's rendered fat and smoke pull the wine's dark fruit into something almost barbecue-like. Together they hit sweet, smoky, bitter, and rich inside a single bite-and-sip, and nothing feels like it's competing.",
      "Creamed Spinach": "The Malbec's dark plum and violet notes cut through the butterfat in the cream sauce, while its medium tannin gives structure to what would otherwise be a one-dimensional richness. Together they read as a single savory, velvety course rather than a side dish next to a glass of wine.",
      "Au Gratin Potatoes": "The Gruyère and cream in the gratin pull out the cassis and mocha in the Malbec blend, and the wine's acidity dissolves the starchy heaviness on the palate. Each bite resets the richness so the guest keeps tasting both at full intensity.",
      "House Wedge": "The iceberg's water content and the bright acidity of the blue cheese dressing act as a palate cleanser between sips, letting the Malbec's dark fruit read fresher and more aromatic than it would alone. The contrast is the point — cold crunch against a warm, plush red.",
      "Grilled Caesar": "The char on the romaine introduces a bitter, smoky edge that mirrors the toasted oak in this Malbec blend, while the anchovy-driven umami in the Caesar dressing amplifies the wine's savory, almost meaty mid-palate. The combination makes the wine taste denser and the salad taste bolder.",
      "Lardons": "The rendered pork fat and salt in the lardons pull forward the bramble fruit in the Malbec and soften any grippy tannin left on the finish. What lands on the palate is a brief, smoky-sweet moment that makes the wine feel rounder than it does on its own."
    }
  },
  {
    name: 'Ghost Block Zinfandel',
    category: 'wine-red',
    price: '$90',
    profile: ['Zinfandel','bold','jammy','spice','Oakville','Napa','full-bodied'],
    excellent: ['Cowboy Ribeye','Kansas City','Bone Marrow','Brussels and Belly','Lardons'],
    strong: ['The Tomahawk','Filet Mignon','Mushrooms','Truffle Fries','Creamed Spinach'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut']
  ,
    pairingNotes: {
      "Cowboy Ribeye": "The Zinfandel's black pepper and baking spice lock onto the Maillard crust of the ribeye, while its jammy boysenberry fruit matches the fat cap's sweetness as it renders. Together they create a feedback loop of caramelized meat and ripe fruit that keeps amplifying through the finish.",
      "Kansas City": "The strip's tight, dense muscle has enough iron and beefiness to stand up to the Zinfandel's bold tannin structure, and the wine's brambly fruit introduces a sweetness that the leaner cut doesn't provide on its own. The pairing makes the steak taste juicier and the wine taste more savory.",
      "Bone Marrow": "The collagen-rich fat in the marrow coats the palate in a way that softens the Zinfandel's alcohol heat and lets the wine's dried fig and clove come forward. What the guest experiences is an almost confited richness — the fat and fruit merge into something closer to a sauce than two separate things.",
      "Brussels and Belly": "The Zinfandel's blackberry jam and black pepper spice lock onto the caramelized char of the Brussels and the rendered pork belly fat, while its fruit-forward sweetness pulls against the bitter leaf edges. Together, the combination turns the belly's smoke into something almost barbecue-dark and makes the bitterness taste intentional rather than sharp.",
      "Lardons": "Zinfandel's high glycerol and jammy dark fruit cling to rendered pork fat the way a glaze does — the lard's salinity actually sharpens the wine's fruit and makes it taste brighter than it does on its own. What the guest gets is a loop: the wine makes the lardon taste meatier, the lardon makes the wine taste fresher.",
      "The Tomahawk": "The Tomahawk's intramuscular fat needs tannin structure to cut through it, and Zinfandel's moderate tannin plus its peppercorn spice traces the ribeye's crust char note for note. Each bite of marbled beef softens the wine's bold fruit into something closer to a pan reduction than a glass of wine.",
      "Filet Mignon": "The filet's lean, almost neutral muscle is a blank canvas, and the Zinfandel's jammy fruit and baking spice project directly onto it without fat getting in the way. The guest experiences the wine as a sauce — the subtle butteriness of the filet rounds the Zinfandel's edges and makes its finish longer and softer than expected.",
      "Mushrooms": "Zinfandel carries its own earthy, brambly undertone that runs parallel to the glutamate-heavy savoriness of roasted mushrooms, creating a layered umami effect rather than a simple match. On the palate, the mushrooms deepen the wine's mid-note and the wine pulls a dark, almost meaty sweetness out of the fungi that you wouldn't taste solo.",
      "Truffle Fries": "The 2-acetylpyrazine earthiness of truffle oil finds a bridge in Zinfandel's bramble and dark spice, while the fry's rendered starch fat softens the wine's alcohol heat. The result is that the truffle smells more pronounced and the wine tastes more structured — each one amplifies the other's most indulgent quality.",
      "Creamed Spinach": "Cream and butter coat the palate and suppress tannin, which lets Zinfandel's fruit come forward as the dominant sensation rather than its grip. The dairy richness acts as a buffer that makes the wine taste almost dessert-adjacent, while the spinach's subtle iron minerality keeps the whole thing from going too heavy.",
      "House Wedge": "The cool, water-dense iceberg and the fat-rich blue cheese dressing create a sharp contrast against the Zinfandel's warm, jammy fruit — the cold crunch resets the palate between sips and makes the wine's spice more detectable. It works as a palate cleanser in reverse: the wedge clears the wine, then the wine makes the next bite of cheese taste sharper and saltier.",
      "Au Gratin Potatoes": "The Zinfandel's jammy blackberry and baking spice cut through the heavy cream and Gruyère fat, while its moderate tannins give the dish's richness somewhere to land. Together, the potato's silky texture softens the wine's bold fruit into something closer to a spiced compote layered over cream.",
      "Grilled Caesar": "The char on the romaine activates the Zinfandel's smoke-edged dark fruit, and the anchovy-driven umami in the dressing mirrors the wine's savory, almost brambly backbone. That combination makes the Caesar taste meatier and the wine taste rounder — each pulling the other away from its edges."
    }
  },
  {
    name: 'The Prisoner Red Blend',
    category: 'wine-red',
    price: '$100',
    profile: ['red-blend','Zinfandel-led','bold','jammy','approachable','California'],
    excellent: ['Kansas City','Cowboy Ribeye','Mushrooms','Bone Marrow','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Brussels and Belly','Creamed Spinach','Lardons'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Kansas City": "The Zinfandel-led blend's dark cherry and black pepper lock onto the Kansas City's tight, iron-rich muscle fibers, and the wine's bold tannins work like a palate reset between each firm, beefy bite. What you get is a longer finish on the meat and a wine that tastes less extracted than it reads on paper.",
      "Cowboy Ribeye": "The ribeye's intramuscular fat coats the palate and physically softens The Prisoner's grippy tannins, while the wine's jammy fruit and peppery finish amplify the char from the bone-in cook. Every bite makes the wine taste more structured, every sip makes the fat taste cleaner.",
      "Mushrooms": "The Prisoner's dark fruit rides on top of the mushrooms' glutamate-heavy earthiness, and that umami depth pulls out a savory, almost meaty quality in the wine that you wouldn't notice on its own. The result is a loop — the wine tastes more complex, the mushrooms taste more substantial.",
      "Bone Marrow": "The bone marrow's rendered fat and smoke create a lipid-rich coating that absorbs The Prisoner's tannins on contact, and the wine's bramble and black pepper cut straight through the richness without letting the fat go heavy on the finish. What's left is a clean, almost charred sweetness that makes both feel lighter than they are.",
      "Truffle Fries": "The 2-acetylthiazoline compounds in truffle — that deep, earthy, almost sulfuric note — echo the Zinfandel's brambly, slightly wild fruit character in a way that makes both smell like they belong in the same dish. On the palate, the wine's jammy weight turns the fries' starch into a vehicle for layered umami rather than just salt and fat.",
      "Filet Mignon": "The filet's mild, buttery muscle gives the wine's bold fruit and tannin structure nowhere to hide, so The Prisoner does the heavy lifting — adding pepper, dark cherry, and grip to a cut that's defined by its restraint. The payoff is contrast: the wine reads bigger, the filet reads more refined, and together they land in a middle register neither hits alone.",
      "Porterhouse": "The Prisoner's bramble-forward Zinfandel fruit and black pepper spice lock onto the strip side's bold beefiness, while its soft tannins cut through the fat cap without stripping the flavor. Together, the jammy fruit amplifies the char while the fat rounds out the wine's heat into a long, savory finish.",
      "Brussels and Belly": "The wine's blackberry jam and mild acidity find the caramelized sugars on the roasted Brussels while the smoky pork belly mirrors the Zinfandel's subtle oak and char. The bitterness of the sprouts strips the wine's sweetness just enough to make the next sip taste brighter and more structured.",
      "Creamed Spinach": "The Prisoner's high glycerol and residual fruit sweetness slide against the butterfat in the cream reduction, softening the wine's tannins into something almost silky. The dairy richness coats the palate so the wine's jammy mid-palate lingers longer than it would on its own.",
      "Lardons": "The rendered pork fat and salt in the lardons act as a tannin buffer, dropping the wine's grip and pushing its dark cherry and mocha notes forward. What hits the palate is a back-and-forth between smoky pork and ripe fruit that keeps cycling with each bite.",
      "House Wedge": "The cold iceberg and buttermilk acidity in the dressing cut straight through the Prisoner's jammy body, creating a sharp contrast that resets the palate between bites of richer courses. The wine's fruit sweetness softens the tang of the blue cheese crumble, making the whole wedge taste more cohesive.",
      "Au Gratin Potatoes": "The Gruyère and cream in the gratin coat the palate with fat, which blunts the wine's tannins and lets its dark fruit and vanilla oak come forward. The starchy potato absorbs the wine's heat, leaving a clean, savory-sweet finish that stretches through both.",
      "Grilled Caesar": "The char on the romaine picks up the wine's toasted oak, while the anchovy and Parmesan build enough umami salinity to tame the Prisoner's boldness into balance. The creamy Caesar dressing softens the tannin edge, and the smoke on both sides of the pairing creates a through-line that ties the glass to the plate."
    }
  },
  {
    name: 'Macauley Petite Syrah',
    category: 'wine-red',
    profile: ['Petite-Sirah','bold','inky','dark-fruit','tannic','California','full-bodied'],
    excellent: ['Cowboy Ribeye','The Tomahawk','Bone Marrow','Kansas City','Lardons'],
    strong: ['Filet Mignon','Porterhouse','Brussels and Belly','Mushrooms','Truffle Fries'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut']
  ,
    pairingNotes: {
      "Cowboy Ribeye": "Petite Sirah's dense tannins and inky dark fruit — think blackberry reduction and cracked pepper — are built exactly for the intramuscular fat in a well-marbled ribeye, which dissolves the tannin grip and unlocks the wine's blueberry and graphite depth. The bone-on cut retains enough moisture and rendered fat that every bite softens the wine's grip, turning what would be a grippy mouthful on its own into a long, savory, fruit-driven finish.",
      "The Tomahawk": "The Petite Sirah's dense tannins and dark blackberry fruit match the Tomahawk's abundant intramuscular fat — the protein in the marbling binds to those tannins and softens them while the wine's inky depth stands up to the char. Together they hit a point where the fat feels lighter and the fruit in the wine tastes almost savory.",
      "Bone Marrow": "The wine's high tannin grabs onto the bone marrow's collagen-rich fat the same way a squeeze of lemon would — cutting through the richness and resetting the palate. What's left is a long finish where the wine's dark plum and the marrow's roasted, smoky depth merge into something closer to a braise.",
      "Kansas City": "The Kansas City's firm muscle fibers and concentrated beefy flavor need a wine with enough structure to match them, and the Petite Sirah's dense tannins lock onto the myoglobin-rich meat rather than overwhelming it. The result is a pairing where both the wine's dark fruit and the strip's bold savoriness sharpen each other on the finish.",
      "Lardons": "The rendered pork fat in the lardons coats the palate in a way that softens the Petite Sirah's grippy tannins, while the salt and smoke in the bacon pull the wine's dark cherry and blackberry fruit forward. Each bite resets the wine to taste fresher and more fruit-forward than it would on its own.",
      "Filet Mignon": "The filet's delicate, buttery texture doesn't fight the Petite Sirah's bold tannins — instead, the wine's dark fruit acts as a sauce, adding the weight and intensity the lean cut doesn't have on its own. Guests get the tenderness of the filet with a finish that lingers the way a more richly marbled steak would.",
      "Porterhouse": "The Porterhouse gives the Petite Sirah two different conversations at once — the strip side's firm, beefy intensity locks with the tannins while the tenderloin's butter-soft texture lets the wine's dark fruit open up. The contrast within a single bite creates a finish that's simultaneously rich, savory, and bright.",
      "Brussels and Belly": "The bitter char on the Brussels sprouts mirrors the wine's tannic grip, while the pork belly's rendered fat and caramelized glaze speak directly to the Petite Sirah's dark fruit and slight sweetness on the mid-palate. Together they round each other's edges — the bitterness softens, the tannins ease, and what's left is a long, smoky-sweet finish.",
      "Mushrooms": "The earthy glutamates in the mushrooms amplify the wine's savory, inky depth — both are pulling from the same umami register, so they stack rather than compete. The Petite Sirah's dark fruit lifts what could be a one-note earthy experience into something more complex and meaty on the finish.",
      "Truffle Fries": "The wine's inky dark-fruit and iron-edged tannins lock onto the truffle oil's earthy sulfur compounds and the salt on the fry, pulling both into the same deep, savory register. The result is a richness that feels intentional — neither the wine nor the fry is asking for attention, they're just amplifying each other.",
      "House Wedge": "The Petite Sirah's grippy tannins cut through the fat in the blue cheese and the creaminess of the dressing, while the wine's dark fruit finds a foil in the cold, sharp iceberg. It resets the palate and keeps the bite feeling fresh instead of heavy.",
      "Au Gratin Potatoes": "The wine's bold structure and dark cherry backbone lean into the browned dairy crust of the gratin — the Maillard crust on the cheese echoes the same toasty, caramelized notes in the wine's finish. What you get is a layered richness that doesn't collapse, because the tannins keep the creaminess in check.",
      "Grilled Caesar": "The char on the romaine and the anchovy's glutamate hit the wine's savory, meaty mid-palate and pull out a meatiness in the Syrah that you wouldn't notice alone. The creamy dressing softens the tannins just enough to let the smoky, umami finish linger."
    }
  },
  {
    name: 'Alexander Valley Cyrus',
    category: 'wine-red',
    profile: ['Bordeaux-style-blend','bold','structured','dark-fruit','Alexander-Valley','premium'],
    excellent: ['Kansas City','Cowboy Ribeye','Bone Marrow','Truffle Fries','Mushrooms'],
    strong: ['The Tomahawk','Filet Mignon','Porterhouse','Brussels and Belly','Creamed Spinach'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Kansas City": "The Cyrus's firm Cabernet-driven tannins are built for lean, dense muscle fiber — they bind to the proteins in the strip's tight grain and dissolve into something smooth that the steak alone can't produce. That structured finish matches the steak's bold, clean beef flavor without one overpowering the other.",
      "Cowboy Ribeye": "The ribeye's intramuscular fat coats the palate and softens the Cyrus's structured tannins, letting the wine's dark cassis and cedar notes bloom alongside the char. The fat becomes the solvent for the wine's complexity — every sip after a bite is longer and more layered than the last.",
      "Bone Marrow": "The Bordeaux blend's graphite and dark fruit cut through the pure fat of the marrow the same way a squeeze of lemon would — it's an acid-and-tannin contrast that lifts the richness instead of adding to it. The smoke from the roasting process mirrors the wine's oak, so the finish reads as one continuous savory note.",
      "Truffle Fries": "The Cyrus's earthy, tobacco-edged mid-palate speaks directly to the truffle oil's 2,4-dithiapentane — both are reaching for the same aromatic compound, and together they amplify it. What lands is a depth that makes the fry feel decadent and makes the wine feel like it was built for exactly this moment.",
      "Mushrooms": "The Cyrus's cassis and dried cherry draw out the glutamates in the mushrooms, while its firm tannin structure latches onto the earthy, meaty compounds that make fungi taste like fungi. Together, the combination reads like a forest floor after rain — deeply savory, with the wine's dark fruit lifting what could otherwise be a heavy bite.",
      "The Tomahawk": "The Cabernet-dominant structure brings polyphenol tannins that bind to the intramuscular fat in the tomahawk, cutting through the richness and resetting the palate for the next bite. What the guest gets is a cleaner, brighter expression of that char and marbling — the wine doesn't fight the steak, it focuses it.",
      "Filet Mignon": "The Cyrus's dark fruit and cedar notes provide the boldness the filet's mild, lean profile quietly needs, acting as a flavor amplifier rather than a competitor. On the palate, the wine's structure frames the filet's butter-soft texture and lets its subtle beefy sweetness come forward without getting lost.",
      "Porterhouse": "The Cyrus speaks to both sides of the porterhouse — its tannins strip fat from the strip side while its dark plum fruit mirrors the bold, beefy character that comes off the bone. The guest experiences a kind of two-act pairing: the wine tightens the rich bite, then softens into the leaner tenderloin side with unexpected elegance.",
      "Brussels and Belly": "The bitter glucosinolates in the roasted Brussels and the smokiness from the pork belly find a counterpoint in the Cyrus's dark cherry fruit and graphite mineral edge. What comes through at the table is a sweet-smoke-bitter loop that keeps cycling — each sip of wine resets the palate and makes the next bite of belly taste like the first.",
      "Creamed Spinach": "The Cyrus's oak-driven vanilla and tobacco notes create a contrast bridge with the cream's fat, while its acidity cuts through the dairy richness before it coats the palate. The result is that the creamed spinach tastes lighter and more mineral than it does on its own, and the wine picks up a savory, almost meaty quality it wouldn't show alone.",
      "House Wedge": "The cold, fresh crunch of iceberg and the lactic tang of blue cheese dressing act as a palate-reset against the Cyrus's dense tannins, creating a contrast that makes both feel more vivid. The guest gets a rare moment where a bold red wine tastes refreshing — the fat in the dressing softens the tannins just enough to make the wine's dark fruit pop.",
      "Au Gratin Potatoes": "The cream and melted cheese in the gratin coat the palate with fat, which softens the Cyrus's tannin grip and lets the wine's cassis and toasted oak read more openly than they would against a leaner dish. The combination lands as indulgent but balanced — the wine's structure prevents the gratin from feeling heavy, and the gratin rounds off any sharp edges in the finish.",
      "Grilled Caesar": "The wine's dark fruit and grippy tannins lock onto the char and anchovy-driven glutamates in the Caesar, while its structured acidity cuts through the emulsified fat in the dressing. Together, the bitterness of the char and the fruit-forward depth of the Cyrus resolve into something savory and surprisingly seamless."
    }
  },
  {
    name: 'Epoch Ingenuity',
    category: 'wine-red',
    profile: ['Rhône-style-blend','Paso-Robles','bold','spice','dark-fruit','structured'],
    excellent: ['Cowboy Ribeye','Kansas City','Bone Marrow','Mushrooms','Truffle Fries'],
    strong: ['The Tomahawk','Filet Mignon','Brussels and Belly','Creamed Spinach','Lardons'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Cowboy Ribeye": "The Ingenuity's Grenache-driven black pepper and garrigue mirror the crust on the ribeye, while its bold tannins bind to the abundant intramuscular fat and strip it from the palate. Each sip resets the richness so the next bite tastes as vivid as the first.",
      "Kansas City": "The wine's Syrah-forward spice and dark fruit amplify the dense, beefy myoglobin flavors in the strip, where the leaner muscle fiber gives the tannins something firm to grip without fat getting in the way. The result is a long, meaty finish that makes both the wine and the steak taste bigger than they are alone.",
      "Bone Marrow": "The Ingenuity's cracked pepper and roasted herb character from the Rhône varieties echo the Maillard browning on the marrow bone, while its tannin structure emulsifies the collagen-rich fat coating the palate. What lands is a round, almost mole-like depth — smoke, fat, and dark fruit fused into one.",
      "Mushrooms": "The earthy, sous-bois qualities in a Paso Rhône blend share the same volatile sulfur compounds — dimethyl sulfide — found in sautéed mushrooms, so the wine and the dish are essentially speaking the same language. On the palate, that shared earthiness amplifies into a deep, forest-floor richness that neither delivers on its own.",
      "Truffle Fries": "The wine's Mourvèdre-driven funk and iron-edged minerality resonate with the thiosulfinate compounds in truffle, while the fry's rendered fat softens the wine's tannin into something velvety. The guest gets a long, umami-saturated finish where the line between the food and the wine genuinely blurs.",
      "The Tomahawk": "The Ingenuity's bold tannin structure is built for the long-chain fatty acids in a heavily marbled tomahawk — the polyphenols bind the fat and carry it off the palate clean, leaving room for the wine's black fruit and peppercorn to fill the space. It's a high-volume pairing: big wine, big cut, each making the other louder.",
      "Filet Mignon": "The filet's delicate muscle texture and mild iron notes let the Ingenuity's spice and dark fruit take the lead without competition from fat or strong char, essentially borrowing the wine's boldness to give the cut more presence. What the guest tastes is a filet that finishes longer and a wine that feels more refined than either achieves on its own.",
      "Brussels and Belly": "The Grenache-driven dark fruit and white pepper in this Paso Rhône blend lock onto the caramelized char of the Brussels and the rendered pork belly fat, with the wine's garrigue notes amplifying the smokiness. Together they create a loop of sweet, bitter, and spice that keeps building with each bite.",
      "Creamed Spinach": "The wine's bold tannin structure cuts straight through the butterfat in the cream reduction, while its Syrah-driven black olive and smoked meat notes thread into the savory depth of the spinach. What lands on the palate is a richer, longer finish than either delivers alone.",
      "Lardons": "The rendered pork fat and salt in the lardons coat the palate in a way that softens the wine's tannins and draws out its dark fruit core, while the Mourvèdre in the blend echoes the cured, smoky character of the pork. The result is a savory richness that makes the wine taste more structured and complete.",
      "House Wedge": "The bright acidity in the wine cuts through the blue cheese dressing's lactic fat and resets the palate, while the peppery spice in the blend finds a counterpoint in the cool, clean iceberg. The contrast keeps both feeling lighter and crisper than they would on their own.",
      "Au Gratin Potatoes": "The wine's tannins grip the starch and cream from the gratin, slowing the fat's coating effect and letting the Paso fruit push through cleanly on the finish. What the guest notices is that the wine feels more elegant and the potatoes feel less heavy when they work together.",
      "Grilled Caesar": "The char from the grilled romaine and the anchovy-driven umami in the dressing act as a savory anchor that pulls the wine's dark fruit and spice into sharper focus. The smoky bitter edge of the lettuce mirrors the wine's black pepper and olive tannins, making both taste more intentional."
    }
  },
  {
    name: 'San Simeon Stormwatch',
    category: 'wine-red',
    profile: ['red-blend','approachable','medium-full','fruit-forward','Paso-Robles'],
    excellent: ['Kansas City','Roast Half Chicken','Mushrooms','Truffle Fries','Creamed Spinach'],
    strong: ['Filet Mignon','Cowboy Ribeye','Brussels and Belly','Au Gratin Potatoes','Grilled Caesar'],
    works: ['House Wedge','Porterhouse','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Kansas City": "The wine's plum and black cherry fruit forward profile bridges directly to the caramelized crust on this lean, firm cut, with enough acidity to cut through the concentrated beefy fat without overpowering the strip's natural mineral quality. The guest gets a juicier perception of the steak and a longer, fruit-tinged finish on the wine.",
      "Roast Half Chicken": "The approachable red fruit and softer tannin structure in this blend match the lighter fat composition of roasted poultry without overwhelming it, while the wine's savory mid-palate speaks to the caramelized skin and roasting juices. Together they deliver a round, warming finish where neither the wine nor the chicken feels like it's working against the other.",
      "Mushrooms": "The dark cherry and plum fruit in this blend mirror the glutamates in sautéed mushrooms, both pulling from the same savory-sweet register. Together, the earthiness of the mushrooms deepens the wine's mid-palate while the fruit lifts what could otherwise be a heavy, one-note bite.",
      "Truffle Fries": "The wine's ripe berry fruit creates a counterpoint to truffle's sulfurous, earthy aromatics — the sweetness of the fruit keeps the truffle from going muddy. What you get is the truffle flavor stretching longer on the finish, carried by the wine's soft tannins and fat from the fries.",
      "Creamed Spinach": "The wine's round, fruit-forward structure cuts through the butterfat in the cream reduction, while its low tannins avoid curdling against the dairy. The result is a cleaner palate between bites — the wine resets the richness so the cream never becomes cloying.",
      "Filet Mignon": "The wine's soft tannins and ripe fruit don't overpower the filet's delicate myoglobin-forward flavor — this is a blend built for finesse, not force. The mild beefiness of the filet acts as a backdrop that lets the wine's cassis and plum notes actually read clearly instead of getting buried.",
      "Cowboy Ribeye": "The intramuscular fat in a ribeye coats the palate and softens tannins, which lets the wine's dark fruit open up against the char without tasting bitter or harsh. That rendered fat and the wine's body meet in the middle — bold enough to hold each other, approachable enough that neither overwhelms.",
      "Brussels and Belly": "The wine's residual fruit sweetness tempers the bitterness from the charred Brussels leaves while its acidity cuts the rendered pork belly fat. The smokiness in the belly acts like a bridge — it pulls the wine's darker fruit forward and makes the whole bite taste more like a composed dish than a contrast.",
      "Au Gratin Potatoes": "The Gruyère and cream in a proper au gratin carry lactic and nutty notes that mirror the oak-influenced vanilla undercurrent in this blend. Fat from the cream dampens tannin grip, letting the wine's fruit sit on top clean — you get richness from both without either one flattening the other.",
      "Grilled Caesar": "The char on romaine develops Maillard compounds that echo the wine's darker fruit and soft oak, while the anchovy-driven umami in the dressing amplifies the wine's savory mid-palate. The creamy dressing then softens the wine's tannins just enough that the finish reads smooth rather than grippy.",
      "House Wedge": "The wine's ripe dark fruit and soft tannins cut through the fat in the blue cheese dressing while the acidity lifts the iceberg's clean, cold crunch. The result is a back-and-forth where neither the richness of the dressing nor the fruit in the wine dominates — they keep resetting each other.",
      "Porterhouse": "The Stormwatch's plum and black cherry fruit bridges to the strip's bold, beefy crust while its soft tannins bind with the rendered fat on the tenderloin side without overwhelming it. Each sip after a bite of char pulls out a deeper layer of the wine's dark fruit that you wouldn't catch on its own.",
      "Lardons": "The rendered pork fat and caramelized edges of the lardons amplify the wine's soft oak and dark fruit the same way a charcuterie board would — fat carries the aromatic compounds straight to the palate. What comes back is a savory-sweet loop where the wine tastes richer and the lardons taste almost jammy."
    }
  },
  {
    name: 'Domaine Serene Grand Cheval',
    category: 'wine-red',
    profile: ['Pinot-Noir-Chardonnay-blend','Oregon','elegant','complex','premium'],
    excellent: ['Filet Mignon','Faroe Island Salmon','Roast Half Chicken','Seared Scallops','House Wedge'],
    strong: ['Crab Cake','Shrimp Bisque','Grilled Caesar','Mushrooms','Prime Tartare'],
    works: ['Kansas City','Burrata','Lobster Mac'],
    avoid: ['The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned','Caymus Cabernet Sauvignon']
  ,
    pairingNotes: {
      "Filet Mignon": "The Chardonnay component brings a butter and toasted hazelnut quality that mirrors the maillard crust on the filet, while the Pinot Noir's silky tannins match the tenderness of the muscle itself. The result is a seamless richness — neither the wine nor the beef competes for dominance.",
      "Faroe Island Salmon": "The Chardonnay fraction of this blend carries enough stone fruit and restrained oak to match the salmon's high fat content without the tannins in the Pinot fighting the fish's oils. What the guest gets is a round, almost seamless mouthfeel where the salmon's richness and the wine's texture feel like they were built for each other.",
      "Roast Half Chicken": "The Pinot Noir's bright red fruit and earthy undertone speaks directly to the roasted, savory skin and pan drippings, while the Chardonnay fraction in the blend softens against the white meat's lighter, more delicate texture. That combination means the wine handles both sides of the plate — the bold char on the exterior and the tender, juicy interior — without needing to choose.",
      "Seared Scallops": "The high-heat sear on the scallop creates a caramelized crust loaded with Maillard compounds that echo the wine's subtle toasted oak from the Chardonnay component, while the Pinot's acidity cuts cleanly through the scallop's natural sweetness. The guest experiences a moment where the briny, sweet center of the scallop seems to unlock a floral, red-fruit note in the wine that disappears if you drink it without food.",
      "House Wedge": "The wine's Pinot-driven acidity slices through the blue cheese fat and buttermilk dressing the way a squeeze of lemon would, while the Chardonnay component finds common ground with the creaminess of the dressing. The payoff is that the blue cheese actually softens the wine's tannins and makes it taste rounder, turning a classic steakhouse salad into a legitimate pairing moment.",
      "Crab Cake": "The Chardonnay-driven stone fruit and fine acidity in the Grand Cheval cut through the pan-seared crust while mirroring the natural sweetness of Dungeness crab. Together, the wine lifts each bite so the delicate crab flavor finishes clean instead of fading under the breading.",
      "Shrimp Bisque": "The Pinot Noir component brings a silky tannin structure that threads through the cream reduction, while the wine's red berry brightness pulls the sweet shrimp flavor forward. The result is a bisque that tastes richer but feels lighter on the palate.",
      "Grilled Caesar": "The charred romaine and anchovy-driven umami in the Caesar find a counterpoint in the wine's fresh Oregon acidity, which scrubs the fat from the emulsified dressing. What registers on the palate is smoke and brightness trading off with each forkful, keeping neither the wine nor the salad from going heavy.",
      "Mushrooms": "Pinot Noir is grown for this — the wine shares the same forest floor and dried herb compounds that develop when mushrooms are roasted hard in butter. The earthy depth in the glass doubles the savory weight of the dish without adding tannin that would turn bitter against the fungi.",
      "Prime Tartare": "The wine's bright acidity acts like a squeeze of lemon — cutting the iron-rich fat of raw prime beef and resetting the palate between bites — while its red fruit registers as a counterpoint to the umami from the capers and egg yolk. The tartare tastes more vibrant and less heavy when the two meet.",
      "Kansas City": "The Kansas City strip's tight, lean grain doesn't need a tannic heavyweight, and the Grand Cheval's moderate structure meets the beef without overpowering the natural beefy flavor. The wine's red fruit gives the strip a subtle sweetness on the finish that a bigger Cabernet would bury.",
      "Burrata": "The wine's Chardonnay-laced creaminess and the fresh milk fat in the burrata share a similar lactic texture, creating a seamless mouthfeel rather than contrast. The acidity arrives just after to lift the richness and keep the palate from settling into heaviness.",
      "Lobster Mac": "The toasted breadcrumb and browned butter notes in the mac echo the wine's subtle oak influence, while the Pinot's acidity slices through the béchamel that would otherwise coat and dull the lobster sweetness. The seafood flavor comes back on the finish cleaner than expected."
    }
  },
  {
    name: 'St Supéry Élu Meritage',
    category: 'wine-red',
    profile: ['Bordeaux-blend','Cab-dominant','structured','Napa','premium'],
    excellent: ['Filet Mignon','Kansas City','Truffle Fries','Mushrooms','Bone Marrow'],
    strong: ['Cowboy Ribeye','Porterhouse','Creamed Spinach','Brussels and Belly','Au Gratin Potatoes'],
    works: ['House Wedge','Grilled Caesar','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Filet Mignon": "The Meritage's firm tannins and dark currant fruit meet the filet's lean, butter-tender muscle without overpowering it — the wine's structure does the work the fat normally would. Together they create a clean, lingering finish where the beef's subtle sweetness pulls the Cab's cassis forward.",
      "Kansas City": "The Élu's graphite-edged tannins lock onto the Kansas City's dense, beefy myoglobin and the crust from high-heat searing, giving the wine's Merlot-softened core a place to open up. The result is a sustained, meaty depth that stretches the mid-palate of both.",
      "Truffle Fries": "The wine's earthy, iron-tinged Cab structure mirrors the sulfur compounds in black truffle, creating a shared aromatic frequency before either hits the palate. That alignment makes the fries taste richer and the wine taste more mineral — each amplifying the other's most indulgent quality.",
      "Mushrooms": "Glutamate in the mushrooms and the wine's own savory, dried-herb character are speaking the same umami language, so neither has to compete. On the palate, the wine's tannins soften against the mushrooms' moisture and fat, and the earthy bass note in both stretches long after the bite.",
      "Bone Marrow": "Bone marrow's rendered collagen and fat need tannin to cut through the slick richness, and the Élu's Cab-driven structure does exactly that — stripping the coat of fat from the palate so the smoky, umami depth of the marrow can land clean. What follows is a savory, roasted-meat finish that pulls the wine's dark fruit into something almost meaty.",
      "Cowboy Ribeye": "The ribeye's heavy intramuscular fat softens the Élu's tannins on contact, which is why high-fat cuts and structured Bordeaux blends have always been the pairing — the fat is the solvent. What you get is a rounder, more generous version of both: the wine loses its grip and the beef loses its heaviness.",
      "Porterhouse": "The Porterhouse gives the Élu two targets at once — the strip's bold, beefy crust for the tannin to grip and the tenderloin's quieter, butter-soft muscle for the Merlot and Cab Franc to fill. The wine shifts character across each bite, showing more structure against the strip and more fruit against the filet side.",
      "Creamed Spinach": "The dairy fat and roux in the cream sauce coat the palate and strip tannin of its grip, pushing the Élu's mid-palate fruit — black cherry, plum, a touch of mocha — to the front. That contrast turns a rich, savory side into a kind of palate reset that makes the next sip of wine taste fresher and more aromatic.",
      "Brussels and Belly": "The Meritage's firm tannins and dark cherry fruit lock onto the caramelized sugars and rendered pork fat, while its structure cuts through the belly's richness. Together they pull out a smoky-sweet depth in the pork that neither delivers on its own.",
      "Au Gratin Potatoes": "The wine's grippy tannins scrub through the cream and Gruyère fat, and its cassis fruit plays against the savory, slightly browned dairy crust. Each sip resets the palate so the next bite of potato tastes just as rich and clean as the first.",
      "House Wedge": "The acidity in the Meritage cuts the blue cheese dressing's fat in the same way a squeeze of lemon would, while the wine's dark fruit brings a subtle sweetness against the bitter iceberg. The result is a brighter, less heavy wedge with every alternating bite and sip.",
      "Grilled Caesar": "The char on the romaine introduces a bitter, smoky edge that mirrors the toasted oak in the Meritage, and the wine's acidity lifts through the anchovy and Parmesan umami without flattening it. Together they build a layered savory finish that lingers longer than either does alone.",
      "Lardons": "The Meritage's tannins bind to the rendered pork fat from the lardons, softening the wine's grip while the smokiness in the bacon amplifies the wine's dark fruit and cedar. What lands is a meatier, rounder mid-palate from the wine and a less aggressively fatty finish on the lardon."
    }
  },
  {
    name: 'Darioush Cabernet Franc',
    category: 'wine-red',
    profile: ['Cab-Franc','Napa','herbaceous','dark-fruit','structured','premium'],
    excellent: ['Filet Mignon','Kansas City','Mushrooms','Truffle Fries','Bone Marrow'],
    strong: ['Cowboy Ribeye','Porterhouse','Creamed Spinach','Brussels and Belly','Grilled Caesar'],
    works: ['House Wedge','Au Gratin Potatoes','Roast Half Chicken'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Filet Mignon": "The Cab Franc's violet and graphite notes echo the mild, iron-rich blood character of the filet, and its lighter tannin structure doesn't overpower the tender, fine-grained muscle the way a bigger Cab Sauv would. What the guest experiences is the beef's natural buttery sweetness coming forward, framed by the wine's herbaceous lift.",
      "Kansas City": "The Kansas City's firm, well-developed crust carries enough beefy intensity to stand up to the Cab Franc's dark plum and pyrazine-driven backbone, and the wine's tannins grip the chew of the strip's tighter muscle fibers. That friction generates a long, savory finish where the steak's fat and the wine's fruit trade off on the back of the palate.",
      "Mushrooms": "The Cab Franc's earthy, forest-floor character shares the same terpenoid and geosmin compounds that give sautéed mushrooms their deep umami, essentially doubling down on that savory register. Together they create an almost meaty richness on the mid-palate that amplifies the earthiness of both without either becoming muddy.",
      "Truffle Fries": "The wine's pyrazine-driven herbal edge cuts through the truffle oil's earthiness while its dark cherry fruit amplifies the umami depth of the mushroom compounds. Together, the finish stretches long — the earthiness of both elements locking in and reinforcing each other until the wine's tannins sweep the palate clean.",
      "Bone Marrow": "Cab Franc's medium tannin structure binds to the rendered collagen fat in the marrow, doing the work that a squeeze of lemon would do — lifting the richness so it doesn't sit heavy. What the guest tastes is the marrow's smoke and depth without any of the slick, fatty coating that can overwhelm the palate.",
      "Cowboy Ribeye": "The wine's grippy tannins latch onto the intramuscular fat in the ribeye's heavy marbling, softening structurally while the dark plum and blackberry fruit rises to meet the char on the crust. The result is a longer, meatier finish than either delivers alone.",
      "Porterhouse": "The leaner strip side of the porterhouse lets the wine's herbal and dark-fruit character drive, while the fattier tenderloin side calls on the tannins to emulsify the richness and reset the palate. Guests get two different experiences in one glass — the wine shapeshifts depending on which side of the bone they're eating from.",
      "Creamed Spinach": "The wine's green bell pepper and dark fruit cut through the butterfat in the béchamel, while the natural acidity in Cab Franc does what lemon does to cream — it brightens and tightens the texture on the palate. What lands is a cleaner, more defined savory note from the spinach that the dairy alone would otherwise mask.",
      "Brussels and Belly": "The caramelized bitter edges of the Brussels activate alongside the wine's dark fruit, while the rendered pork belly fat is handled by the tannins the same way it would be by a mustard or acidic glaze. The smoky-sweet contrast in the dish pulls the wine's fruit forward, making it taste richer and rounder than it does on its own.",
      "Grilled Caesar": "The char on the romaine introduces a smoke compound that echoes the wine's dark fruit and mild graphite minerality, while the anchovy-driven umami in the dressing amplifies the wine's savory, almost meaty mid-palate. Together they hit a smoky-savory register that makes both the salad and the wine taste more complex than either does alone.",
      "House Wedge": "The iceberg's high water content and the cool, tangy blue cheese dressing dilute the wine's tannins just enough to expose the cleaner fruit — the fresh herbs and black cherry come forward in a way they don't next to red meat. It's a lighter expression of the wine, which works as a palate reset between richer courses.",
      "Au Gratin Potatoes": "The Cab Franc's pyrazine-driven herbaceousness cuts through the heavy cream and Gruyère fat, while its dark fruit adds a brightness the dish doesn't have on its own. Together, the richness of the gratin lingers just long enough before the wine's acidity resets the palate for the next bite.",
      "Roast Half Chicken": "The wine's violet and dark cherry fruit latches onto the Maillard-browned skin, while its earthy, pencil-shaving quality echoes the savory depth of roasted poultry drippings. Guests get a seamless savory loop — the chicken tastes more roasted, the wine tastes more structured."
    }
  },
  {
    name: 'Keenan Mernet',
    category: 'wine-red',
    profile: ['Merlot-Cab-Franc-blend','Napa','Spring-Mountain','structured','earthy','unique'],
    excellent: ['Filet Mignon','Kansas City','Mushrooms','Truffle Fries','Bone Marrow'],
    strong: ['Cowboy Ribeye','Porterhouse','Creamed Spinach','Brussels and Belly','Grilled Caesar'],
    works: ['House Wedge','Roast Half Chicken','Au Gratin Potatoes'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  ,
    pairingNotes: {
      "Filet Mignon": "The Merlot-dominant softness in this blend mirrors the filet's butter-tender texture, while the Cab Franc component adds just enough graphite and cassis to give the mild beef something to lean into. The result is a pairing where the meat's subtlety isn't lost — the wine amplifies without overwhelming.",
      "Kansas City": "The Spring Mountain tannins grip the strip's firm, dense muscle fibers and pull out the beefy glutamate depth that a leaner cut holds close. What hits the palate is bold meeting bold — the wine's dark fruit and structure stretch the savory finish of the steak considerably longer.",
      "Mushrooms": "The wine's earthy terroir — iron-rich Spring Mountain soils — shares the same fungal, forest-floor aromatic register as sautéed mushrooms, creating a flavor bridge rooted in shared minerality. Together, the umami in the mushrooms amplifies the wine's savory mid-palate, making both taste deeper and longer.",
      "Truffle Fries": "The volatile sulfur compounds in black truffle resonate directly with the earthy, loamy quality of this Spring Mountain blend, essentially doubling down on the wine's most interesting aromatic layer. Guests experience a moment where the line between what's in the glass and what's on the plate genuinely blurs.",
      "Bone Marrow": "The wine's firm tannins bind to the collagen-rich fat of the marrow, cutting through the unctuous texture and preventing it from coating the palate too heavily. What's left after each bite-and-sip is a clean, smoky umami finish where the wine's dark fruit reads almost like a reduction sauce.",
      "Cowboy Ribeye": "The ribeye's intramuscular fat renders into the bite and needs the Mernet's structured tannins to metabolize that richness — tannins bind to fat and protein, literally cleansing the palate. The payoff is that each bite of ribeye tastes as bold as the first, and the wine's cassis and cedar deepen every time it meets the char.",
      "Porterhouse": "The Cab Franc in this blend brings a graphite and iron edge that locks onto the myoglobin-rich strip side, while the Merlot's dark plum flesh meets the ribeye's rendered fat cap. What you get is a finish that just keeps going — the wine lifts the beef and the beef deepens the fruit.",
      "Creamed Spinach": "The wine's structured tannins cut through the butterfat in the béchamel, and the iron minerality of the Spring Mountain terroir echoes the oxalic earthiness of the spinach itself. The result is a mouthful that reads richer than either component alone, without any heaviness lingering.",
      "Brussels and Belly": "The Cab Franc's pyrazine-edged herbaceous note meets the caramelized brassica bitterness of the Brussels, while the wine's dark fruit wraps around the pork belly's rendered fat and smoke. That bitter-fruit tension is what makes the bite feel complete rather than one-dimensional.",
      "Grilled Caesar": "The char on the romaine produces Maillard compounds that mirror the toasted oak in the wine, and the anchovy-driven glutamates in the dressing amplify the wine's savory, umami-forward mid-palate. Together they create a smoky, briny depth that makes the wine taste more structured and the salad taste more substantial.",
      "House Wedge": "The wine's acidity slices through the blue cheese fat and buttermilk tang in the dressing, and the fresh iceberg's water content briefly opens the palate so the Merlot's red fruit registers cleanly on the finish. It's a lighter bridge, but that contrast — rich dressing, bright wine — keeps both from going flat.",
      "Roast Half Chicken": "The Merlot's ripe plum and gentle tannin structure are soft enough not to overwhelm the poultry, while the wine's oak-derived vanilla meets the Maillard crust on the skin. The roasted drippings pull out the wine's savory, earthy undertone in a way you wouldn't expect from a red with chicken.",
      "Au Gratin Potatoes": "The wine's tannin provides the friction that cuts through the gruyère and cream layer, preventing the dairy fat from coating the palate, and the potato starch softens the wine's structure just enough to let the dark fruit come forward. What you notice is that the wine suddenly tastes more plush, and the gratin tastes less heavy."
    }
  },

  // ── WINES — DESSERT / PORT ────────────────────────────────────────────────────

  {
    name: 'Graham\'s 10 Year Tawny',
    category: 'wine-dessert',
    profile: ['tawny-port','nutty','caramel','dried-fruit','sweet','oxidative'],
    price: 'Port',
    excellent: ['Creme Brulee','Cheesecake','Carrot Cake','Peanut Butter Brownie','Chocolate Brownie'],
    strong: ['Beignets','Chocolate Cake','Mocha Creme'],
    works: ['Frangelico'],
    avoid: ['Cowboy Ribeye','The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned','Scavino Barolo']
  ,
    pairingNotes: {
      "Creme Brulee": "The tawny's oxidative nuttiness — think roasted walnut and dried apricot — runs parallel to the caramelized sucrose crust on the brûlée without competing with the vanilla custard beneath it. When they hit together, the port's sweetness calibrates to the dessert's and the finish shifts into a long, toasted-cream note that neither delivers on its own.",
      "Cheesecake": "The port's oxidative nuttiness and dried apricot cut through the dense cream-cheese fat while its residual sugar matches the cheesecake's sweetness without overwhelming the tangy finish. The guest gets a longer, rounder finish where the caramel in the wine and the vanilla in the cheesecake lock together.",
      "Carrot Cake": "The tawny's dried fig and walnut notes mirror the warm cinnamon and pecan in the cake, while its acidity lifts through the cream-cheese frosting. Together they taste like one unified dessert — spiced, nutty, and just sweet enough.",
      "Peanut Butter Brownie": "The port's roasted hazelnut and caramel share the same Maillard-reaction compounds as the peanut butter and brownie crust, so the flavors stack rather than compete. On the palate, the sweetness stretches and the roasted bitterness of the chocolate softens into something almost toffee-like.",
      "Chocolate Brownie": "The tawny's caramel and dried-fruit sweetness acts as a counterweight to the brownie's bitter cocoa solids, pulling the finish away from astringency. What the guest gets is a cleaner chocolate hit followed by a long, warm raisin-and-toffee tail from the port.",
      "Beignets": "The port's nutty oxidative richness gives the powdered sugar and fried dough something to anchor to, providing depth that the beignets alone don't have. The contrast between the wine's concentrated sweetness and the light, airy pastry makes each bite feel like it resets the palate.",
      "Chocolate Cake": "The tawny's dried-fruit acidity creates just enough tension against the chocolate's fat and sugar to keep the pairing from going cloying, but the caramel in the wine echoes the cake's buttercream. The guest experiences a slightly brighter chocolate flavor than they would eating the cake on its own.",
      "Mocha Creme": "The port's walnut and caramel notes run parallel to the espresso and cream in the mocha, amplifying the roasted middle of both without adding bitterness. On the palate, the sweetness of the tawny softens the coffee's edge and the whole thing finishes like a candied espresso bean.",
      "Frangelico": "Both are built on roasted hazelnut and caramel, so there's no contrast here — this is a straight amplification pairing where the oxidative dried-fruit in the tawny is the only thing separating them. It works as a digestif combination but the guest should know they're leaning into richness, not balance."
    }
  },
  {
    name: 'Graham\'s 20 Year Tawny',
    category: 'wine-dessert',
    profile: ['tawny-port','premium','nutty','complex','dried-fruit','sweet','oxidative'],
    price: 'Port',
    excellent: ['Creme Brulee','Cheesecake','Carrot Cake','Chocolate Brownie','Peanut Butter Brownie','Chocolate Cake'],
    strong: ['Beignets','Mocha Creme'],
    works: ['Frangelico'],
    avoid: ['Cowboy Ribeye','The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Creme Brulee": "The oxidative walnut and dried apricot notes in the Tawny mirror the caramelized sugar crust and vanilla custard beneath it, two things built from the same slow application of heat and time. Together, the port's sweetness lifts without overwhelming, letting the burnt sugar linger longer on the palate than it would alone.",
      "Cheesecake": "The Tawny's acidity — sharper than most dessert wines — cuts through the fat in the cream cheese while its fig and hazelnut notes echo the graham crust. What the guest gets is a clean finish where neither the port nor the cake feels heavy.",
      "Carrot Cake": "The 20 years of barrel aging have pushed dried fruit and baking spice to the front of this port, and those same cinnamon and nutmeg compounds are already doing the work in the cake. The cream cheese frosting's tang acts as a palate reset between sips, keeping both the port and the spice from going flat.",
      "Chocolate Brownie": "The Tawny's rancio character — that nutty, almost toffee-like quality that develops from long oxidative aging — sits alongside dark chocolate the way a salted caramel would, adding depth without competing. The brownie's dense fudge center slows the port's sweetness down, turning a quick sip into something that builds.",
      "Peanut Butter Brownie": "The roasted nuttiness in the Tawny — developed through decades of slow oxidation — finds a direct echo in the peanut butter's own roasted fat compounds, creating a layered nuttiness that reads as intentional rather than redundant. The chocolate brownie base keeps things anchored, and the port's dried fruit lifts the whole bite into something that finishes longer than either element would on its own.",
      "Chocolate Cake": "The port's 20 years in wood have stripped away primary fruit and replaced it with cocoa, dried cherry, and walnut — flavor territory the chocolate cake already occupies, so the two reinforce rather than fight. What the guest notices is a finish that stretches, where the cake's sweetness and the port's warmth wind down together slowly.",
      "Beignets": "The powdered sugar and hot fried dough create a blank, starchy canvas that lets the Tawny's complexity — its dried fig, orange peel, and toasted almond — read more clearly than it would against a richer dessert. The contrast works because the beignet's lightness keeps the port tasting fresh rather than syrupy.",
      "Mocha Creme": "The Tawny's oxidative coffee and dark chocolate notes are already speaking the same language as the mocha, so the pairing works through amplification — each one intensifying what's already present in the other. The creme's dairy fat softens the port's alcohol heat, and what lands on the palate is a long, espresso-tinged finish that neither could produce alone.",
      "Frangelico": "The roasted hazelnut and dried fig notes in the Tawny lock onto Frangelico's toasted nut core, two expressions of the same Maillard-browning sweetness meeting in the glass. Together they round into a single long finish of praline and orange peel that neither delivers alone."
    }
  },
  {
    name: 'Graham\'s 2017 Vintage Port',
    category: 'wine-dessert',
    profile: ['vintage-port','bold','structured','dark-fruit','sweet','prestige'],
    price: 'Port',
    excellent: ['Chocolate Brownie','Chocolate Cake','Peanut Butter Brownie','Cheesecake','Mocha Creme'],
    strong: ['Creme Brulee','Carrot Cake','Beignets'],
    works: [],
    avoid: ['Cowboy Ribeye','The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Chocolate Brownie": "The Port's firm tannins grab onto the fat in a dense chocolate brownie the same way they would a fatty cut of meat, stripping enough richness to let the dark cherry and cassis in the wine push through. What lands on the palate is something closer to a chocolate-covered cherry truffle than either item started as.",
      "Chocolate Cake": "The cocoa mass in a dark chocolate cake shares the same bitter phenolic backbone as the Port's grape tannins, so instead of fighting, they dissolve into a single bittersweet layer while the wine's black fruit rises above it. The result is a finish that reads as dark cherry ganache long after both are swallowed.",
      "Peanut Butter Brownie": "The roasted pyrazines in peanut butter cut straight through the Port's sugar and meet its grippy tannins with enough fat and protein to soften them instantly. What the guest gets is a fleeting moment of salted chocolate-covered peanut before the wine's dark plum takes over and cleans everything up.",
      "Cheesecake": "The lactic tartness in cream cheese acts as a palate reset between each sip, dropping the perceived sweetness of the Port just enough that its dried blackberry and structured tannins read as fruit rather than sugar. The pairing resolves into a contrast of cool, tangy cream against a warm, dark-fruit finish that keeps pulling the guest back.",
      "Mocha Creme": "Espresso's chlorogenic acids and the Port's grape tannins are both bitter compounds that, stacked together, don't double the bitterness — they cancel enough of each other out to expose the caramel and dark cherry underneath both. The guest experiences a fleeting, clean mocha note that gives way to the wine's full fruit before the cream softens the whole thing into silk.",
      "Creme Brulee": "The caramelized sucrose crust on a crème brûlée introduces a dry, slightly bitter char that mirrors the Port's tannic edge and gives the wine a structural partner it wouldn't have with the custard alone. That contrast keeps the Port's boldness from overwhelming the delicate vanilla custard underneath, so both textures — the crackle and the cream — stay distinct on the palate.",
      "Carrot Cake": "The cinnamon and clove in carrot cake echo the Port's own spice-forward dried-fruit character — both built on warm aromatic compounds that reinforce rather than clash. Where it gets interesting is the cream cheese frosting, whose tang cuts the wine's residual sugar and lets the Port's dark fruit finish land clean against the warm spice of the cake.",
      "Beignets": "The Port's concentrated dark fruit and grippy tannins cut through the hot fry oil, while its sweetness meets the powdered sugar without overpowering the pillowy dough. Together, they create a contrast where the wine's structure lifts what would otherwise be a one-note sugar hit into something with depth and finish."
    }
  },
  {
    name: 'Taylor Fladgate Tawny',
    category: 'wine-dessert',
    profile: ['tawny-port','classic','nutty','caramel','sweet'],
    price: 'Port',
    excellent: ['Creme Brulee','Cheesecake','Carrot Cake','Chocolate Brownie','Beignets'],
    strong: ['Peanut Butter Brownie','Chocolate Cake','Mocha Creme'],
    works: ['Frangelico'],
    avoid: ['Cowboy Ribeye','The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Creme Brulee": "The Tawny's oxidative nuttiness and caramel core mirror the burnt sugar crust of the brulee, two expressions of the same Maillard browning arriving from opposite directions. On the palate, the wine's dried-fruit acidity cuts the egg-rich cream so the finish stays clean rather than cloying.",
      "Cheesecake": "The Tawny's walnut and dried-apricot notes play directly against the cheesecake's tangy cream cheese, each sharpening the other's edges. That brightness in the cheese actually makes the port's caramel read sweeter on the finish, creating a back-and-forth the guest keeps chasing.",
      "Carrot Cake": "The Tawny's hazelnut and baking-spice character locks onto the cinnamon and warm spice in the cake, essentially completing each other's flavor arc. When the cream cheese frosting hits alongside the port's caramel sweetness, the whole bite resolves into something closer to butterscotch than either item achieves alone.",
      "Chocolate Brownie": "The Tawny's roasted nut and dried fig notes bridge into the bittersweet cocoa in the brownie, meeting it at the point where chocolate starts tasting less like candy and more like earth. The wine's viscosity matches the dense, fudgy crumb so neither feels heavy against the other.",
      "Beignets": "The Tawny's caramel and toasted almond notes give the neutral fried dough a flavor anchor it doesn't have on its own, essentially acting as a sauce the guest drinks. The powdered sugar dissolves on the palate and softens the port's tannic edge, leaving a clean, honeyed finish.",
      "Peanut Butter Brownie": "The Tawny's roasted walnut and oxidative nuttiness doubles down on the peanut butter's fat-rich earthiness, which intensifies rather than muddies because the port's acidity keeps the whole thing from going flat. That shared nuttiness makes the chocolate recede into the background and lets the two nut profiles trade off across the finish.",
      "Chocolate Cake": "The Tawny's dried fruit and caramel sit just a shade sweeter than dark chocolate, which means they pull the cake's bitterness toward balance without erasing it. The wine's lighter body relative to a vintage port keeps it from being buried under the cake's density, so both stay legible on the palate.",
      "Mocha Creme": "The port's oxidative aging produces the same roasted, nutty compounds — furaneol and maltol — that define a mocha, so the two speak the same flavor language. What you get is a single, seamless note of espresso and dried caramel that lingers far longer than either does alone.",
      "Frangelico": "The hazelnut liqueur draws out the walnut and almond notes that develop in tawny port during barrel aging, doubling down on that toasted-nut character. The result is a round, praline-like finish where the port's acidity keeps everything from tipping into sweetness."
    }
  },
  {
    name: 'Taylor Fladgate Vintage Bottle',
    category: 'wine-dessert',
    profile: ['vintage-port','structured','dark-fruit','bold','sweet','prestige'],
    price: 'Port',
    excellent: ['Chocolate Brownie','Chocolate Cake','Cheesecake','Peanut Butter Brownie','Mocha Creme'],
    strong: ['Creme Brulee','Carrot Cake','Beignets'],
    works: [],
    avoid: ['Cowboy Ribeye','The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Chocolate Brownie": "The vintage port's dark-fruit tannins — still grippy and structured — cut directly through the brownie's dense cocoa fat, letting the dark cherry and blackcurrant in the wine read as fruit filling inside the chocolate. Together they build into something closer to a chocolate-cherry ganache than either dessert or wine on its own.",
      "Chocolate Cake": "The bold anthocyanin-rich fruit in the vintage port mirrors the bitterness of dark cocoa, while its firm tannins strip the residual sugar from the cake's crumb so the chocolate reads drier and more intense. The guest tastes depth — bitter, dark, and long — rather than sweetness.",
      "Cheesecake": "The cheesecake's lactic tang from cream cheese acts as an acid foil to the port's ripe dark fruit, softening the wine's tannins and making the blackberry and plum flavors bloom. What lands on the palate is something like fresh berries spooned over rich cream — the fruit feels brighter, the cheese feels lighter.",
      "Peanut Butter Brownie": "The roasted pyrazines in peanut butter share the same earthy, slightly bitter backbone as the port's dark-fruit tannins, and the brownie's cocoa fat cushions that grip while the nut oils extend the wine's finish. The pairing tastes like a dark chocolate truffle with a long, roasted-nut tail.",
      "Mocha Creme": "The espresso in the mocha creme amplifies the port's inherent roasted-coffee phenolics, while the cream base softens the wine's tannins just enough to let the dark cherry fruit surface. What the guest experiences is a layered, tiramisu-like depth — bitter coffee, dark fruit, and cream resolving into one long finish.",
      "Creme Brulee": "The port's bold dark-fruit structure contrasts sharply with the brulee's delicate vanilla custard, and that tension is exactly the point — the wine's tannins make the cream taste richer and the caramelized sugar crust echo the port's own dried-fruit sweetness. The guest gets contrast on the first sip and harmony on the finish.",
      "Carrot Cake": "The port's dried black fruit and grippy tannins cut through the fat of the cream cheese frosting while its own baking spice — clove, cinnamon, dark sugar — mirrors the spice in the cake itself. Together the two round into a long, warming finish that deepens the carrot cake's spice without letting either element go sweet and flat.",
      "Beignets": "The port's bold dark-fruit concentration and structured tannins act as an anchor against the beignets' airy fried dough and powdered sugar, the contrast of weight creating tension that makes both feel more alive. That first bite of dough against a sip of vintage port turns the sugar into something almost caramelized, the fat of the fry softening the wine's grip just enough to let its blackberry and plum come forward."
    }
  },
  {
    name: 'Casa LBV Port',
    category: 'wine-dessert',
    profile: ['late-bottled-vintage','approachable','dark-fruit','sweet','structured'],
    price: 'Port',
    excellent: ['Chocolate Brownie','Cheesecake','Peanut Butter Brownie','Carrot Cake','Creme Brulee'],
    strong: ['Beignets','Chocolate Cake','Mocha Creme'],
    works: [],
    avoid: ['Cowboy Ribeye','The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned']
  ,
    pairingNotes: {
      "Chocolate Brownie": "The LBV's blackcurrant and dark cherry share the same cocoa-phenol backbone as the brownie, so rather than contrasting, they stack — building a single deep, fudgy wave of dark fruit and bittersweet chocolate. The port's residual sugar threads into the brownie's dense crumb, extending the finish well past the last bite.",
      "Cheesecake": "The LBV's bright acidity and dark fruit cut cleanly through the cheesecake's heavy cream-cheese fat, acting the way a squeeze of lemon does — lifting the richness rather than sitting on top of it. The result is a finish that reads simultaneously as fruity and tangy, the port's sweetness and the cheesecake's subtle lactic sharpness trading off on the palate.",
      "Peanut Butter Brownie": "Roasted peanut compounds and dark chocolate share a natural affinity with the oxidative, dried-fruit character of a late-bottled vintage port — all three carry a toasted, slightly bitter undertone that locks them together. A sip of the LBV after a bite pulls the peanut butter's nuttiness toward something closer to a fig-and-almond finish, the tannins gripping the brownie's fat and extending everything.",
      "Carrot Cake": "The LBV's plum and dark cherry don't compete with the carrot cake's cinnamon and nutmeg — they sit underneath the spice the way molasses does, adding depth without sweetness-on-sweetness. The cream cheese frosting's tanginess softens the port's tannin, leaving a finish that's warm, slightly spiced, and fruit-forward all at once.",
      "Creme Brulee": "The port's dark fruit and the creme brulee's caramelized sugar crust both carry the same bitter-edged sweetness that comes from Maillard browning, and they recognize each other on the palate immediately. That shared caramel note dissolves into the custard's vanilla and cream, the port's body holding the delicate dessert together rather than overwhelming it.",
      "Beignets": "The beignets' hot fried dough and powdered sugar create a neutral, fatty canvas that lets the LBV's dark plum and blackberry read with unusual clarity — the fat strips back any residual tannin grip and the sugar dusting echoes the port's own sweetness without amplifying it. What lands is a clean, fruit-forward moment where the wine does the flavoring and the beignet provides the texture.",
      "Chocolate Cake": "The dark-fruit reduction and residual sugar in this late-bottled vintage mirror the bittersweet cocoa and caramelized crust of the cake. Together they create a single layered note — dried cherry and dark chocolate — that lingers longer than either does alone.",
      "Mocha Creme": "The port's plum and blackberry fruit cut right through the fat in the espresso cream, while both share the same roasted-sugar backbone from the fortification process. The guest gets a unified dark-chocolate-and-dried-fruit finish that makes the dessert taste like it was built around the wine."
    }
  },
  {
    name: 'Pineau des Charentes',
    category: 'wine-dessert',
    profile: ['fortified','Cognac-based','sweet','grape','French','aperitif-or-dessert'],
    price: 'Dessert',
    excellent: ['Creme Brulee','Cheesecake','Beignets','Burrata','Shrimp Cocktail'],
    strong: ['Carrot Cake','Seared Scallops','House Wedge','Prime Tartare','Escargot'],
    works: ['Grilled Caesar','Shrimp Bisque','Crab Cake'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Bowdie\'s Old Fashioned','Scavino Barolo']
  ,
    pairingNotes: {
      "Creme Brulee": "The Cognac base in the Pineau brings its own vanilla and dried-grape sweetness, which runs parallel to the custard's egg-yolk richness and the caramelized sugar crust without overpowering either. What the guest tastes is a soft, elongated vanilla note that bridges the crème and the wine into one seamless mouthful.",
      "Cheesecake": "The fresh grape juice component in Pineau carries a natural acidity that cuts the dense cream-cheese fat and amplifies the tangy finish of the cheesecake. The Cognac's gentle oak then smooths the transition, so the richness resolves cleanly rather than coating the palate.",
      "Beignets": "The Pineau's residual grape sweetness and light Cognac warmth match the powdered sugar and hot fried dough without adding weight to the bite. The contrast between the wine's cool, juicy fruit and the airy, hot pastry keeps each sip refreshing rather than cloying.",
      "Burrata": "The unfermented grape must in Pineau is bright and fresh, which mirrors the clean dairy fat and milky acidity of the burrata without introducing any tannin that would tighten the texture. The guest experiences the wine as if it were a dressing — fruit-forward and just sweet enough to make the cream taste richer by contrast.",
      "Shrimp Cocktail": "The Cognac's subtle heat and the wine's residual sweetness echo the horseradish and subtle brine in the cocktail sauce, creating the same fruit-meets-heat dynamic you get with a classic mignonette. On the palate, the chilled shrimp's delicate salinity pulls out the grape freshness in the Pineau and makes the whole bite taste brighter.",
      "Carrot Cake": "The dried-fruit sweetness and Cognac warmth in the Pineau speak directly to the cinnamon and allspice in the cake batter, while the wine's acidity provides the counterweight that the cream-cheese frosting needs. Together they read as a single warm, spiced note — the wine essentially acting as a liquid extension of the cake's own flavor profile.",
      "Seared Scallops": "The residual grape sugar and Cognac-derived esters in the Pineau mirror the natural glycine sweetness in the scallop's muscle tissue, while the fortification cuts through the caramelized crust from the sear. The guest gets a sustained sweetness that moves from the glass into the bite, making the scallop taste richer and more oceanic without losing its delicacy.",
      "House Wedge": "The Pineau's oxidative, honeyed weight plays against the sharp lactic acidity of the blue cheese dressing, while its grape freshness lifts the cold iceberg crisp. Together, they create a push-pull between sweet and tangy that keeps each bite of the wedge tasting clean rather than heavy.",
      "Prime Tartare": "The Cognac base in the Pineau shares the same brandy lineage as the classic cognac-and-beef affinity, and its residual sweetness softens the iron-forward rawness of the hand-cut beef. The guest experiences the tartare's umami coming forward while the wine smooths the metallic edge, making the egg yolk and capers read as brighter and more distinct.",
      "Escargot": "The Pineau's sweet grape concentration creates a counterweight to the garlic-loaded herb butter, intercepting the fat before it coats the palate. What comes through is a cleaner hit of the parsley and garlic aromatics, with the sweetness acting as a reset between each rich, butter-soaked snail.",
      "Grilled Caesar": "The Pineau's oxidative, nutty character speaks to the char on the grilled romaine, while its sweetness blunts the aggressive anchovy and Worcestershire umami in the dressing. The combination softens the Caesar's boldness just enough that the smoke becomes the dominant note rather than the salt.",
      "Shrimp Bisque": "Pineau des Charentes is actually a traditional pairing anchor in French coastal cooking precisely because its Cognac base and concentrated grape sweetness echo the reduced shellfish stock that forms a bisque's backbone. The guest gets a round, layered sweetness where the wine and the soup feel like they were reduced in the same pot.",
      "Crab Cake": "The gentle oxidative sweetness of the Pineau amplifies the natural sucrose in the crab meat while the fortified alcohol cuts through the pan-fried crust's oil. Each sip resets the palate so the delicate crab flavor registers fully on the next bite rather than getting lost behind the crispy exterior."
    }
  },
  {
    name: 'Vin Santo',
    category: 'wine-dessert',
    profile: ['dessert-wine','Italian','sweet','dried-fruit','nutty','oxidative'],
    price: 'Dessert',
    excellent: ['Beignets','Cheesecake','Creme Brulee','Carrot Cake','Peanut Butter Brownie'],
    strong: ['Chocolate Brownie','Chocolate Cake','Mocha Creme'],
    works: [],
    avoid: ['Cowboy Ribeye','The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned','Scavino Barolo']
  ,
    pairingNotes: {
      "Beignets": "The Vin Santo's dried apricot and fig concentration from the passito process mirrors the caramelized dough sugars in the beignets, and its natural acidity keeps the powdered sugar from reading as flat sweetness. The guest gets a layered dessert experience where each element amplifies the other's richness without either becoming cloying.",
      "Cheesecake": "The oxidative dried-fig and apricot notes in Vin Santo mirror the tangy cream cheese base while its residual sugar matches the cake's sweetness without overpowering the lemon zest. Each sip lifts the richness of the cheesecake off the palate, leaving a clean, honeyed finish that makes the next bite taste brighter.",
      "Creme Brulee": "The walnut and caramelized raisin character in Vin Santo speaks directly to the burnt sugar crust, two forms of caramelization reinforcing each other. The wine's viscosity matches the custard's silk so the textures dissolve together, and its acidity keeps the vanilla from feeling flat.",
      "Carrot Cake": "The dried fruit concentration in Vin Santo — figs, golden raisins — echoes the warm cinnamon and nutmeg in the cake, while the wine's amber nuttiness acts as a bridge to the cream cheese frosting. Together they read as a single spiced, honeyed bite that lingers without turning cloying.",
      "Peanut Butter Brownie": "Vin Santo's oxidative, nutty quality — think toasted almond and toffee — directly amplifies the roasted character in the peanut butter while its sweetness meets the chocolate without competing. The wine's acidity cuts the fat of both the butter and the cocoa, so the finish stays clean instead of heavy.",
      "Chocolate Brownie": "The dried fruit in Vin Santo pulls out the dark cherry and plum notes already present in good bittersweet chocolate, connecting the wine to the brownie at the flavor level rather than just sweetness-to-sweetness. The slight tannin in the wine grips the dense fudge texture and gives the pairing more structure than either has alone.",
      "Chocolate Cake": "Vin Santo's raisin and fig concentration bridges the gap between its sweetness and the bitterness in the chocolate layers, but the wine lacks the weight to fully match a rich ganache or buttercream — the cake tends to swallow it. Guests will still enjoy it, but the wine reads lighter than expected against a heavily frosted slice.",
      "Mocha Creme": "The toffee and dried apricot in Vin Santo align with the caramelized milk solids in the mocha cream, and both share a roasted quality from the wine's barrel aging and the coffee's extraction. The pairing works, though the espresso bitterness can mute some of the wine's more delicate fruit notes on the finish."
    }
  },
  {
    name: 'Sauternes Glass',
    category: 'wine-dessert',
    profile: ['Sauternes','sweet','botrytis','honey','stone-fruit','French','dessert'],
    price: 'Dessert',
    excellent: ['Creme Brulee','Cheesecake','Beignets','Carrot Cake'],
    strong: ['Peanut Butter Brownie','Chocolate Brownie','Burrata','Shrimp Bisque'],
    works: ['Chocolate Cake','Mocha Creme'],
    avoid: ['Cowboy Ribeye','The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned','Scavino Barolo']
  ,
    pairingNotes: {
      "Creme Brulee": "The botrytis in Sauternes produces the same sotolon compound — a fenugreek-like, caramel-edged molecule — found in the scorched sugar crust, so the wine and the brulee are speaking the same chemical language. When they meet, the honey and apricot in the wine amplify the vanilla in the custard and the burnt sugar snaps into sharp, clean focus.",
      "Cheesecake": "The botrytis in Sauternes concentrates honeyed acidity that cuts through the cream cheese fat the same way lemon zest does in the recipe. What you get is a cleaner finish on both — the richness lingers but never cloys.",
      "Beignets": "The apricot and honey in the Sauternes attach to the hot fried dough the way powdered sugar does — adding sweetness without weight. The wine's acidity lifts through the oil so each bite tastes lighter than it actually is.",
      "Carrot Cake": "The botrytized honey in the Sauternes mirrors the way warm spices like cinnamon and nutmeg read as sweet without adding sugar, and that shared warmth threads the two together. The cream cheese frosting's tang then pulls the wine's acidity forward, brightening both.",
      "Peanut Butter Brownie": "The roasted, slightly bitter edge of peanut butter meets the Sauternes' honeyed apricot and creates the same contrast you get in a salted caramel — sweet against savory-fat. The fudge density of the brownie slows the wine down enough that its stone fruit notes have time to register.",
      "Chocolate Brownie": "Sauternes carries volatile esters — apricot, peach, marmalade — that contrast against dark chocolate's bitter tannins rather than fighting them. The result is that the chocolate reads deeper and the wine reads brighter, each amplifying the other's intensity.",
      "Burrata": "The Sauternes' honeyed sweetness plays against the lactic, milky neutrality of fresh burrata the same way good olive oil and sea salt do — adding dimension to something deliberately understated. The wine's acidity keeps the fat from coating the palate so the burrata's creamy center stays clean and fresh through the finish.",
      "Shrimp Bisque": "The natural glycerol sweetness in Sauternes echoes the ocean-sweet character of shrimp, while the botrytis acidity cuts through the cream base the way a squeeze of lemon would. Together they push the bisque's shellfish flavor forward and keep the cream from feeling heavy.",
      "Chocolate Cake": "The Sauternes has enough honeyed weight to hold up to chocolate sponge, but the bitterness in the cake slightly mutes the wine's more delicate botrytis notes, so the pairing reads as pleasant richness rather than complexity. It works, but let guests know the wine shows better with a lighter dessert.",
      "Mocha Creme": "The botrytis-driven apricot and honeyed beeswax in the Sauternes lock onto the bitter roast of the espresso layer in the mocha crème, with both sharing that same candied, almost oxidative sweetness. Together, the wine's acidity cuts through the fat of the crème while the chocolate amplifies the Sauternes' dried fruit, leaving a finish that tastes like dark chocolate-covered dried mango."
    }
  },

  // ── SPIRITS — BOURBON ─────────────────────────────────────────────────────────

  {
    name: 'Light / Wheated Bourbon',
    category: 'bourbon',
    spiritCluster: true,
    members: ['Weller Special Reserve','Weller 107','Weller 12 Year','Weller Millennium','Maker\'s Mark','Maker\'s Mark Cellar Aged','Bowdie\'s Private Select — Maker\'s Mark','Larceny Small Batch','Basil Hayden\'s','Basil Hayden\'s Toast','Basil Hayden\'s Red Wine Cask','Basil Hayden\'s 10 Year','Basil Hayden\'s Malted Rye','Four Roses Yellow Label','Jim Beam White Label','Jim Beam Black Label','Jefferson\'s Reserve','Jefferson\'s Reserve VR Twin Oak','Woodford Reserve','Knob Creek','Knob Creek Bourbon/Rye','Willett Pot Still Reserve','Buffalo Trace','Russell\'s Reserve 10 Year','Heaven Hill Bottled in Bond','Old Fitzgerald 7 Year','Old Fitzgerald 9 Year','Bulleit Bourbon','Blade & Bow','Clermont Steep','1792 Sweet Wheat'],
    profile: ['bourbon','wheated','caramel','vanilla','approachable','medium-bodied'],
    excellent: ['Filet Mignon','Kansas City','Bone Marrow','Truffle Fries','Mushrooms','Brussels and Belly'],
    strong: ['Cowboy Ribeye','Porterhouse','Creamed Spinach','Au Gratin Potatoes','Lardons','Carrot Cake'],
    works: ['House Wedge','Grilled Caesar','Cheesecake','Chocolate Brownie','Shrimp Bisque'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut','G.D. Vajra Moscato d\'Asti']
  },
  {
    name: 'Bold / High-Proof Bourbon',
    category: 'bourbon',
    spiritCluster: true,
    members: ['Booker\'s','George T. Stagg','Stagg Jr. Batch #15','E.H. Taylor Full Proof','E.H. Taylor Small Batch','Elijah Craig 18 Year','Elijah Craig Single Barrel','Elijah Craig Private Barrel','Knob Creek 12 Year','Knob Creek 15 Year','Knob Creek 18 Year','Baker\'s','Heaven Hill 20 Year','Old Grand-Dad 16 Year','Parker\'s Heritage Collection 16th Edition','Blanton\'s Straight from the Barrel','I.W. Harper 15 Year','Michter\'s 10 Year Bourbon','Remus 15 Year Gatsby Reserve','Little Book','Bardstown Discovery #6','Bardstown Fusion #7','Bardstown Founders KBS','Bardstown Rishi\'s Single Barrel','Blood Oath Pact 8','Blood Oath Pact 9','Blood Oath Pact 10','Mister Sam Tribute Whiskey','Rishi\'s Old Antique','Hancock\'s Reserve Single Barrel','Elmer T. Lee','1792 Small Batch'],
    profile: ['bourbon','high-proof','bold','oak','spice','complex','rich'],
    excellent: ['Cowboy Ribeye','The Tomahawk','Kansas City','Bone Marrow','Brussels and Belly','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Mushrooms','Creamed Spinach','Lardons','Au Gratin Potatoes'],
    works: ['House Wedge','Grilled Caesar','Chocolate Brownie','Peanut Butter Brownie','Carrot Cake'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut','G.D. Vajra Moscato d\'Asti']
  },
  {
    name: 'Finished / Special Character Bourbon',
    category: 'bourbon',
    spiritCluster: true,
    members: ['Angel\'s Envy','Angel\'s Envy Cask Strength','Angel\'s Envy Triple Cask','Isaac Bowman Port Finish','Jefferson\'s Ocean Voyage 23','Jefferson\'s Ocean Marian McLain L.E.','Basil Hayden\'s Red Wine Cask','Bardstown Château Laboude','Bardstown Foursquare','Fox & Oden','Fox & Oden Double Oaked','Thomas S. Moore Chardonnay Cask','New Holland Beer Barrel Bourbon','Ironfish Bourbon in Mezcal Casks','Old Elk Cigar Cut','A Midnight\'s Winter Dram','Heaven\'s Door 10 Year','Blanton\'s Original','Blanton\'s Gold','Bowman Brothers Small Batch','Four Roses Small Batch Select','Henry McKenna 10 Year Bottled in Bond'],
    profile: ['bourbon','finished','sweet','complex','fruit-forward','wine-influenced','distinctive'],
    excellent: ['Filet Mignon','Bone-In Filet','Kansas City','Bone Marrow','Truffle Fries','Chocolate Brownie'],
    strong: ['Cowboy Ribeye','Mushrooms','Creamed Spinach','Carrot Cake','Peanut Butter Brownie','Brussels and Belly'],
    works: ['House Wedge','Cheesecake','Creme Brulee','Grilled Caesar','Shrimp Bisque'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut','G.D. Vajra Moscato d\'Asti']
  },

  // ── SPIRITS — RYE ─────────────────────────────────────────────────────────────

  {
    name: 'Approachable Rye',
    category: 'rye',
    spiritCluster: true,
    members: ['Sazerac Rye','Michter\'s US*1 Rye','Elijah Craig Straight Rye','Knob Creek Rye','Woodford Reserve Rye','Doc Swinson\'s Alter Ego Rye','Never Say Die Rye','Pikesville Rye','Woodinville Rye','E.H. Taylor Rye','WhistlePig PiggyBack 6 Year'],
    profile: ['rye','spice','pepper','herbal','medium-bodied','approachable'],
    excellent: ['Kansas City','Filet Mignon','Bone Marrow','Prime Tartare','Grilled Caesar','Truffle Fries'],
    strong: ['Cowboy Ribeye','Porterhouse','Mushrooms','Brussels and Belly','Creamed Spinach','House Wedge'],
    works: ['Shrimp Bisque','Au Gratin Potatoes','Lardons','Carrot Cake'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Bold / Premium Rye',
    category: 'rye',
    spiritCluster: true,
    members: ['WhistlePig 10 Year Single Barrel Rye','WhistlePig 12 Year Old World','WhistlePig 15 Year','WhistlePig Boss Hog IX 17 Year','WhistlePig Boss Hog X Commandments','Thomas H. Handy Sazerac Rye','Pappy Van Winkle 13 Year Rye','Kentucky Owl 10 Year Rye','Mammoth 16 Year Single Barrel Rye','Lock Stock & Barrel Rye','Michter\'s 10 Year Rye','Never Say Die Rye'],
    profile: ['rye','bold','high-proof','spice','complex','oak','premium'],
    excellent: ['The Tomahawk','Cowboy Ribeye','Kansas City','Bone Marrow','Brussels and Belly','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Mushrooms','Creamed Spinach','Lardons','Prime Tartare'],
    works: ['House Wedge','Grilled Caesar','Chocolate Brownie','Peanut Butter Brownie'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut','G.D. Vajra Moscato d\'Asti']
  },

  // ── SPIRITS — SCOTCH ──────────────────────────────────────────────────────────

  {
    name: 'Blended Scotch',
    category: 'scotch',
    spiritCluster: true,
    members: ['Dewar\'s White Label','Dewar\'s 15','Johnnie Walker Red','Johnnie Walker Black','Johnnie Walker Blue','Monkey Shoulder'],
    profile: ['scotch','blended','approachable','light-smoke','grain','versatile'],
    excellent: ['Kansas City','Filet Mignon','Mushrooms','Grilled Caesar','House Wedge'],
    strong: ['Cowboy Ribeye','Porterhouse','Truffle Fries','Brussels and Belly','Creamed Spinach'],
    works: ['Shrimp Bisque','Au Gratin Potatoes','Bone Marrow','Carrot Cake'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Highland Scotch',
    category: 'scotch',
    spiritCluster: true,
    members: ['Dalmore 12','Glenmorangie 10','Glenmorangie 18','Oban 14','Oban 18','Glenglassaugh 12','Loch Lomond 20 Year'],
    profile: ['scotch','highland','honey','heather','light-fruit','medium-bodied','coastal-or-floral'],
    excellent: ['Filet Mignon','Kansas City','Mushrooms','Truffle Fries','Grilled Caesar'],
    strong: ['Cowboy Ribeye','Porterhouse','Bone Marrow','Creamed Spinach','House Wedge','Carrot Cake'],
    works: ['Shrimp Bisque','Au Gratin Potatoes','Brussels and Belly','Cheesecake'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Speyside Scotch',
    category: 'scotch',
    spiritCluster: true,
    members: ['Glenfiddich 12','Glenfiddich 14','Glenfiddich 18','Glenfiddich Gran Cru 23','Glenlivet 12','Macallan 12 Sherry','Macallan 18','Macallan Estate','Balvenie 12 American Oak','Balvenie 14 Caribbean Cask','Balvenie 16 Single Barrel','Balvenie 21 Portwood','Aberlour 16','Cragganmore 12'],
    profile: ['scotch','speyside','fruit','sherry','honey','elegant','approachable'],
    excellent: ['Filet Mignon','Bone-In Filet','Kansas City','Mushrooms','Truffle Fries','Carrot Cake'],
    strong: ['Cowboy Ribeye','Porterhouse','Bone Marrow','Creamed Spinach','Au Gratin Potatoes','Cheesecake'],
    works: ['House Wedge','Grilled Caesar','Shrimp Bisque','Brussels and Belly','Peanut Butter Brownie'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Islay Scotch',
    category: 'scotch',
    spiritCluster: true,
    members: ['Lagavulin 8','Laphroaig 10','Bowmore 12','Bruichladdich'],
    profile: ['scotch','islay','peated','smoky','medicinal','bold','coastal','distinctive'],
    excellent: ['Bone Marrow','The Tomahawk','Cowboy Ribeye','Lardons','Brussels and Belly','Grilled Caesar'],
    strong: ['Kansas City','Porterhouse','Mushrooms','Truffle Fries','Prime Tartare','Shrimp Bisque'],
    works: ['House Wedge','Creamed Spinach','Chocolate Brownie'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut','Cheesecake']
  },

  // ── SPIRITS — IRISH ───────────────────────────────────────────────────────────

  {
    name: 'Irish Whiskey',
    category: 'irish',
    spiritCluster: true,
    members: ['Jameson Irish Whiskey','Tullamore D.E.W.','Garavogue Irish Whiskey','Redbreast 12 Year','Redbreast 21 Year','Kentucky Owl St. Patrick\'s'],
    profile: ['irish','smooth','light','grain','approachable','triple-distilled'],
    excellent: ['Roast Half Chicken','Faroe Island Salmon','House Wedge','Kansas City','Filet Mignon'],
    strong: ['Mushrooms','Grilled Caesar','Truffle Fries','Shrimp Bisque','Brussels and Belly'],
    works: ['Crab Cake','Seared Scallops','Creamed Spinach','Carrot Cake'],
    avoid: ['The Tomahawk','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut']
  },

  // ── SPIRITS — JAPANESE ────────────────────────────────────────────────────────

  {
    name: 'Japanese Whisky',
    category: 'japanese',
    spiritCluster: true,
    members: ['Toki Suntory Japanese Whisky','Hibiki Japanese Harmony','Hakushu 12 Year','Yamazaki 12 Year','Yamazaki 18 Year'],
    profile: ['japanese','delicate','floral','fruit','elegant','complex','balanced'],
    excellent: ['Filet Mignon','Bone-In Filet','Faroe Island Salmon','Roast Half Chicken','Seared Scallops','Mushrooms'],
    strong: ['Kansas City','House Wedge','Grilled Caesar','Shrimp Bisque','Truffle Fries','Prime Tartare'],
    works: ['Crab Cake','Creamed Spinach','Lobster Mac','Burrata'],
    avoid: ['The Tomahawk','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut']
  },

  // ── SPIRITS — CANADIAN ────────────────────────────────────────────────────────

  {
    name: 'Canadian Whisky',
    category: 'canadian',
    spiritCluster: true,
    members: ['Crown Royal','Canadian Club','Canadian Club 43 Year','Caribou Crossing'],
    profile: ['canadian','smooth','light','grain','approachable','versatile'],
    excellent: ['Roast Half Chicken','House Wedge','Filet Mignon','Kansas City','Mushrooms'],
    strong: ['Grilled Caesar','Truffle Fries','Brussels and Belly','Creamed Spinach','Shrimp Bisque'],
    works: ['Crab Cake','Cowboy Ribeye','Au Gratin Potatoes','Carrot Cake'],
    avoid: ['G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut','Burrata','Seared Scallops']
  },

  // ── SPIRITS — SINGLE MALT / OTHER ────────────────────────────────────────────

  {
    name: 'American Single Malt / Tennessee',
    category: 'singlemalt',
    spiritCluster: true,
    members: ['Jack Daniel\'s Old No. 7','Jack Daniel\'s Bonded','Jack Daniel\'s 12 Year','Jack Daniel\'s Sinatra Select','Dunville\'s Single Malt','Scapegrace Fortuna','Old Emmer'],
    profile: ['american-single-malt','charcoal-filtered','vanilla','caramel','approachable','medium'],
    excellent: ['Kansas City','Filet Mignon','Mushrooms','Truffle Fries','Brussels and Belly'],
    strong: ['Cowboy Ribeye','Porterhouse','Creamed Spinach','Bone Marrow','House Wedge','Grilled Caesar'],
    works: ['Au Gratin Potatoes','Lardons','Carrot Cake','Shrimp Bisque'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut']
  },

  // ── SPIRITS — TEQUILA ─────────────────────────────────────────────────────────

  {
    name: 'Blanco Tequila',
    category: 'tequila',
    spiritCluster: true,
    members: ['Don Julio Blanco','Patron Silver','Avion Silver','Clase Azul Plata','Don Fulano Blanco','G4 Blanco','Lalo Silver','Mijenta Blanco','Gran Patron Platinum','Siete Leguas Blanco','Corazon Blanco','Adictivo Cristalino'],
    profile: ['tequila','blanco','agave-forward','citrus','clean','crisp','bright'],
    excellent: ['Crab Cake','Seared Scallops','Shrimp Cocktail','House Wedge','Prime Tartare','Burrata'],
    strong: ['Seafood Tower','Shrimp Bisque','Escargot','Faroe Island Salmon','Grilled Caesar'],
    works: ['Filet Mignon','Roast Half Chicken','Market Fish'],
    avoid: ['The Tomahawk','Bone Marrow','Caymus Cabernet Sauvignon','Opus One','Scavino Barolo','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Reposado Tequila',
    category: 'tequila',
    spiritCluster: true,
    members: ['Don Julio Reposado','Don Julio 70th','El Mayor Reposado','Milagro Reposado','Siete Leguas Reposado','Corazon Reposado','Don Fulano Reposado','Adictivo Reposado','El Cabo','G4 High Proof','Trombo Cedano Reposado','Komos Rosa Reposado','Codigo 1530 Rosa'],
    profile: ['tequila','reposado','agave','vanilla','oak','medium-bodied','balanced'],
    excellent: ['Kansas City','Filet Mignon','Crab Cake','Seared Scallops','House Wedge','Shrimp Cocktail'],
    strong: ['Cowboy Ribeye','Bone Marrow','Shrimp Bisque','Grilled Caesar','Faroe Island Salmon','Mushrooms'],
    works: ['Truffle Fries','Roast Half Chicken','Brussels and Belly','Prime Tartare'],
    avoid: ['The Tomahawk','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut','Scavino Barolo']
  },
  {
    name: 'Añejo / Extra Añejo Tequila',
    category: 'tequila',
    spiritCluster: true,
    members: ['Don Julio 1942','Clase Azul Anejo','Clase Azul Durango','Clase Azul Gold','Clase Azul Ultra','Patron Anejo','Avion 44','El Mayor Extra Anejo','Milagro Anejo','Komos Anejo Reserva','Komos Crystallino Anejo','Komos Extra Anejo','Don Fulano Anejo','Ocho Anejo','Rey Sol Anejo','Corazon Sazerac','Corazon Stagg','Corazon Weller'],
    profile: ['tequila','anejo','oak','vanilla','caramel','smooth','spirit-forward','sipping'],
    excellent: ['Kansas City','Filet Mignon','Bone Marrow','Truffle Fries','Mushrooms','Chocolate Brownie'],
    strong: ['Cowboy Ribeye','Porterhouse','Brussels and Belly','Creamed Spinach','Carrot Cake','Peanut Butter Brownie'],
    works: ['House Wedge','Grilled Caesar','Au Gratin Potatoes','Cheesecake'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Mezcal',
    category: 'mezcal',
    spiritCluster: true,
    members: ['Casamigos Mezcal','Clase Azul Guerrero Mezcal','Los Vecinos Mezcal','Tears of Llorona','Camarena Tequila','Patron XO Cafe'],
    profile: ['mezcal','smoky','agave','earthy','bold','distinctive','complex'],
    excellent: ['Bone Marrow','Cowboy Ribeye','The Tomahawk','Prime Tartare','Brussels and Belly','Lardons'],
    strong: ['Kansas City','Mushrooms','Truffle Fries','Grilled Caesar','Shrimp Bisque'],
    works: ['House Wedge','Creamed Spinach','Filet Mignon','Chocolate Brownie'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut','Cheesecake']
  },

  // ── SPIRITS — VODKA ───────────────────────────────────────────────────────────

  {
    name: 'Classic Vodka',
    category: 'vodka',
    spiritCluster: true,
    members: ['Tito\'s Handmade Vodka','Grey Goose Vodka','Ketel One Vodka','Belvedere Vodka','Chopin Vodka','Stoli Elit Vodka','Reyka Vodka','Wheatley Vodka'],
    profile: ['vodka','neutral','clean','crisp','versatile','minimal-influence'],
    excellent: ['Crab Cake','Shrimp Cocktail','Seared Scallops','Burrata','House Wedge','Seafood Tower'],
    strong: ['Prime Tartare','Shrimp Bisque','Escargot','Faroe Island Salmon','Grilled Caesar'],
    works: ['Filet Mignon','Roast Half Chicken','Market Fish','Cheesecake'],
    avoid: []
  },
  {
    name: 'Craft Vodka',
    category: 'vodka',
    spiritCluster: true,
    members: ['Detroit City Vodka','HDW 100 Vodka','Hangar 1 Vodka'],
    profile: ['vodka','craft','slight-character','clean','approachable'],
    excellent: ['Crab Cake','Shrimp Cocktail','Seared Scallops','Burrata','House Wedge'],
    strong: ['Prime Tartare','Shrimp Bisque','Escargot','Faroe Island Salmon','Grilled Caesar'],
    works: ['Filet Mignon','Roast Half Chicken','Market Fish'],
    avoid: []
  },

  // ── SPIRITS — GIN ─────────────────────────────────────────────────────────────

  {
    name: 'London Dry Gin',
    category: 'gin',
    spiritCluster: true,
    members: ['Tanqueray Gin','Tanq 10 Gin','Beefeater Gin','Bombay Dry Gin','Bombay Sapphire Gin','Plymouth Gin','Nolets Dry Gin','2 James Gin'],
    profile: ['gin','london-dry','juniper-forward','citrus','herbal','classic','crisp'],
    excellent: ['Crab Cake','Seared Scallops','Shrimp Cocktail','Burrata','Escargot','Seafood Tower'],
    strong: ['Prime Tartare','House Wedge','Shrimp Bisque','Faroe Island Salmon','Grilled Caesar'],
    works: ['Filet Mignon','Roast Half Chicken','Market Fish','Beignets'],
    avoid: ['The Tomahawk','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Contemporary / Craft Gin',
    category: 'gin',
    spiritCluster: true,
    members: ['Hendricks Gin','Hendricks Flora Adora','Hendricks Grand Cabaret','Hendricks Neptunia','Hendricks Orbium','Aviation Gin','Bluecoat Gin','Botanist Gin','Empress 1908 Gin','Gray Whale Gin','Inverroche Gin','Liberator Gin','Mahon Gin','Monkey 47 Gin'],
    profile: ['gin','contemporary','floral-or-fruit-forward','botanical','unique','approachable'],
    excellent: ['Burrata','Crab Cake','Seared Scallops','Shrimp Cocktail','Escargot','Beignets'],
    strong: ['Prime Tartare','House Wedge','Seafood Tower','Shrimp Bisque','Faroe Island Salmon'],
    works: ['Filet Mignon','Roast Half Chicken','Grilled Caesar','Cheesecake'],
    avoid: ['The Tomahawk','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Local Michigan Gin',
    category: 'gin',
    spiritCluster: true,
    members: ['Detroit City Gin','Eastern Kille Dry Gin','Iron Fish Gin','Knickerbocker Gin','Long Road Gin'],
    profile: ['gin','local','varied-botanical','approachable','craft'],
    excellent: ['Burrata','Crab Cake','Shrimp Cocktail','Seared Scallops','House Wedge'],
    strong: ['Prime Tartare','Escargot','Seafood Tower','Shrimp Bisque','Faroe Island Salmon'],
    works: ['Filet Mignon','Roast Half Chicken','Grilled Caesar'],
    avoid: ['The Tomahawk','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo']
  },
  {
    name: 'Japanese Gin',
    category: 'gin',
    spiritCluster: true,
    members: ['Roku Gin'],
    profile: ['gin','japanese','floral','yuzu','sakura','delicate','unique'],
    excellent: ['Seared Scallops','Crab Cake','Burrata','Shrimp Cocktail','Faroe Island Salmon'],
    strong: ['Escargot','House Wedge','Prime Tartare','Shrimp Bisque','Seafood Tower'],
    works: ['Filet Mignon','Roast Half Chicken','Market Fish'],
    avoid: ['The Tomahawk','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo','Bowdie\'s Old Fashioned']
  },

  // ── SPIRITS — RUM ─────────────────────────────────────────────────────────────

  {
    name: 'White / Light Rum',
    category: 'rum',
    spiritCluster: true,
    members: ['Bacardi Rum','Mount Gay Rum'],
    profile: ['rum','white','light','clean','sugarcane','tropical','approachable'],
    excellent: ['Shrimp Cocktail','Crab Cake','Burrata','House Wedge','Seared Scallops'],
    strong: ['Seafood Tower','Shrimp Bisque','Faroe Island Salmon','Beignets','Grilled Caesar'],
    works: ['Roast Half Chicken','Market Fish','Prime Tartare'],
    avoid: ['The Tomahawk','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Dark / Aged Rum',
    category: 'rum',
    spiritCluster: true,
    members: ['Ron Zacapa Rum','Doctor Bird Jamaica Rum','Jung and Wulff Guyana','Jung and Wulff Trinidad','Myers\'s Rum'],
    profile: ['rum','dark','aged','molasses','vanilla','caramel','bold','complex'],
    excellent: ['Chocolate Brownie','Peanut Butter Brownie','Carrot Cake','Cheesecake','Bone Marrow'],
    strong: ['Cowboy Ribeye','Kansas City','Brussels and Belly','Truffle Fries','Mushrooms','Beignets'],
    works: ['House Wedge','Grilled Caesar','Creamed Spinach','Creme Brulee'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Spiced / Flavored Rum',
    category: 'rum',
    spiritCluster: true,
    members: ['Captain Morgan Rum','Malibu Rum'],
    profile: ['rum','spiced-or-flavored','sweet','approachable','casual'],
    excellent: ['Beignets','Cheesecake','Carrot Cake','House Wedge'],
    strong: ['Shrimp Cocktail','Crab Cake','Chocolate Brownie','Peanut Butter Brownie'],
    works: ['Burrata','Faroe Island Salmon','Roast Half Chicken'],
    avoid: ['The Tomahawk','Scavino Barolo','Opus One','Bone Marrow']
  },

  // ── SPIRITS — COGNAC ──────────────────────────────────────────────────────────

  {
    name: 'Cognac / Brandy',
    category: 'cognac',
    spiritCluster: true,
    members: ['Hennessy Cognac','Courvoisier Cognac','Remy VSOP Cognac','Pierre Ferrand Cognac','Villon Cognac','Christian Bros Brandy','Louis XIII Cognac'],
    profile: ['cognac','brandy','grape-distilled','vanilla','dried-fruit','oak','complex','elegant'],
    excellent: ['Filet Mignon','Bone Marrow','Truffle Fries','Cheesecake','Chocolate Brownie','Carrot Cake'],
    strong: ['Kansas City','Mushrooms','Creamed Spinach','Creme Brulee','Peanut Butter Brownie','Lobster Mac'],
    works: ['House Wedge','Grilled Caesar','Au Gratin Potatoes','Beignets'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut']
  },

  // ── SPIRITS — LIQUEURS ────────────────────────────────────────────────────────

  {
    name: 'Amaro / Bitter Liqueur',
    category: 'liqueur',
    spiritCluster: true,
    members: ['Amaro Nonino','Averna Amaro','Lucano Amaro','Montenegro Amaro','Fernet Branca','Fernet Menta','Campari','Aperol'],
    profile: ['amaro','bitter','herbal','digestif','complex','Italian'],
    excellent: ['Chocolate Brownie','Peanut Butter Brownie','Cheesecake','Creme Brulee','Carrot Cake'],
    strong: ['Bone Marrow','Kansas City','Grilled Caesar','Mushrooms','Prime Tartare'],
    works: ['House Wedge','Brussels and Belly','Truffle Fries','Beignets'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Herbal / Anise Liqueur',
    category: 'liqueur',
    spiritCluster: true,
    members: ['Green Chartreuse','Yellow Chartreuse','Sambuca','Drambuie','Mata Hari Absinthe','Ancho Reyes','Contratto Vermouth'],
    profile: ['herbal','anise-or-botanical','sweet-or-bitter','digestif-or-modifier'],
    excellent: ['Cheesecake','Creme Brulee','Chocolate Brownie','Beignets','Escargot','Grilled Caesar'],
    strong: ['House Wedge','Shrimp Bisque','Prime Tartare','Mushrooms','Brussels and Belly'],
    works: ['Filet Mignon','Kansas City','Carrot Cake'],
    avoid: ['Crab Cake','Seared Scallops','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Sweet / Cream Liqueur',
    category: 'liqueur',
    spiritCluster: true,
    members: ['Baileys Irish Cream','Buffalo Trace Cream','Frangelico','Kahlua','Disaronno','Grand Marnier','Chambord','Licor 43','Limoncello','Fireball Whisky','Patron XO Cafe'],
    profile: ['sweet','cream-or-fruit-or-coffee','dessert-adjacent','low-ABV','approachable'],
    excellent: ['Creme Brulee','Cheesecake','Chocolate Brownie','Peanut Butter Brownie','Carrot Cake','Beignets','Mocha Creme'],
    strong: ['Chocolate Cake','Espresso Martini'],
    works: ['Shrimp Cocktail','Crab Cake','House Wedge'],
    avoid: ['The Tomahawk','Bone Marrow','Scavino Barolo','Opus One','Bowdie\'s Old Fashioned']
  }

];

// ── SCORING ENGINE ────────────────────────────────────────────────────────────
// Takes an array of selected item names, returns ranked recommendations
// with intersection scoring across all selections.

// ── WEIGHTED SCORING ENGINE ───────────────────────────────────────────────────
// selections: array of { name: string, weight: number }
//   weight 1.0 = active/locked in
//   weight 0.5 = considering (steers but doesn't dominate)
//   weight 0.0 = finished+declined (excluded from scoring)

function scoreItem(candidateName, weightedSelections) {
  let score = 0;
  let totalWeight = 0;

  for (const sel of weightedSelections) {
    if (sel.weight <= 0) continue; // finished+declined — skip entirely
    const entry = PAIRING_MAP.find(e => {
      if (e.spiritCluster) return e.members && e.members.includes(sel.name);
      return e.name === sel.name;
    });
    if (!entry) continue;

    const w = sel.weight;
    if (entry.avoid && entry.avoid.includes(candidateName)) { score -= 4 * w; }
    else if (entry.excellent && entry.excellent.includes(candidateName)) { score += 3 * w; totalWeight += w; }
    else if (entry.strong && entry.strong.includes(candidateName)) { score += 2 * w; totalWeight += w; }
    else if (entry.works && entry.works.includes(candidateName)) { score += 1 * w; totalWeight += w; }
  }

  return { score, totalWeight };
}

function getTier(score, totalWeight) {
  if (totalWeight <= 0) return null;
  const avg = score / totalWeight;
  if (avg >= 2.5) return 'excellent';
  if (avg >= 1.5) return 'strong';
  if (avg >= 0.5) return 'works';
  return null;
}

// weightedSelections: [{ name, weight }]
// Backwards compatible: also accepts plain string array (all weight 1.0)
function getRecommendations(selectionsRaw, excludeCategories = [], includeOOS = false) {
  if (!selectionsRaw || selectionsRaw.length === 0) return [];

  // Normalise — accept both [{name,weight}] and ['name']
  const weighted = selectionsRaw.map(s =>
    typeof s === 'string' ? { name: s, weight: 1.0 } : s
  ).filter(s => s.weight > 0);

  if (weighted.length === 0) return [];

  // seenNames includes ALL items on the table regardless of weight
  // so finished/declined items don't re-appear as recommendations
  const seenNames = new Set(selectionsRaw.map(s => typeof s === 'string' ? s : s.name));
  const results = [];

  for (const entry of PAIRING_MAP) {
    if (entry.variable) continue;
    if (!includeOOS && entry.oos) continue;
    if (excludeCategories.includes(entry.category)) continue;
    if (seenNames.has(entry.name)) continue;

    const { score, totalWeight } = scoreItem(entry.name, weighted);
    if (score <= 0) continue;

    const tier = getTier(score, totalWeight);
    if (!tier) continue;

    results.push({
      name: entry.name,
      category: entry.category,
      tier,
      score,
      price: entry.price || null,
      offMenu: entry.offMenu || false,
      oos: entry.oos || false,
      spiritCluster: entry.spiritCluster || false,
      members: entry.members || null,
      profile: entry.profile
    });
  }

  const tierOrder = { excellent: 0, strong: 1, works: 2 };
  results.sort((a, b) => {
    if (tierOrder[a.tier] !== tierOrder[b.tier]) return tierOrder[a.tier] - tierOrder[b.tier];
    return b.score - a.score;
  });

  return results;
}

// ── FIRST TIMER PROFILE → PAIRING TAGS ───────────────────────────────────────
// Maps guest answers to profile tags used for initial recommendations

const FIRST_TIMER_PROFILES = {
  drinkingYes: ['bold','approachable','spirit-forward'],
  drinkingWineOnly: ['wine-red','wine-white','wine-sparkling','wine-dessert'],
  drinkingCocktailsOnly: ['cocktail'],
  drinkingNo: [],
  proteinRareMR: ['lean','fatty','rich','beefy'],
  proteinMedium: ['medium','savory','approachable'],
  proteinMWWell: ['approachable','light'],
  proteinNoRed: ['seafood','poultry','delicate'],
  boldAndRich: ['bold','rich','fatty','umami','smoky','indulgent'],
  middle: ['medium-bodied','balanced','approachable'],
  lightAndFresh: ['light','crisp','delicate','fresh'],
  sweetFlavor: ['sweet','fruity','floral'],
  savoryFlavor: ['umami','earthy','smoky','bold'],
  bothFlavors: ['balanced','approachable','medium-bodied'],
  wineExpert: [],
  wineGuided: ['approachable','fruit-forward','smooth'],
  celebrating: ['celebratory','prestige','sparkling'],
  budgetApproachable: ['approachable','entry-premium'],
  budgetMid: ['premium','structured'],
  budgetSky: ['prestige','icon','legendary']
};

function getFirstTimerRecommendations(answers) {
  const tags = [];
  for (const answer of answers) {
    if (FIRST_TIMER_PROFILES[answer]) tags.push(...FIRST_TIMER_PROFILES[answer]);
  }

  const results = [];
  for (const entry of PAIRING_MAP) {
    if (entry.variable || entry.oos) continue;
    const overlap = entry.profile.filter(p => tags.includes(p)).length;
    if (overlap === 0) continue;
    results.push({ ...entry, overlapScore: overlap });
  }

  results.sort((a, b) => b.overlapScore - a.overlapScore);
  return results.slice(0, 20);
}

// Export for use in set-the-stage.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PAIRING_MAP, getRecommendations, getFirstTimerRecommendations };
}
