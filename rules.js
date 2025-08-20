
window.ruleTables = {
    islamic: {
        title: "Islamic Guidelines",
        headers: ["Category", "Rule/Law in Islam", "How UK Muslims May Unknowingly Break It", "Relevant Quran/Hadith"],
        rows: [
            {
                category: "Financial (Riba & Halal Income)",
                rule: "Earning/spending interest (riba) is strictly prohibited, including indirect benefits (e.g., bank interest, bonds, dividends from haram stocks).",
                violation: "Conventional mortgages (Islamic alternatives: Murabaha), student loans, savings accounts, and investments in haram stocks (alcohol/gambling companies). Cryptocurrency trading with interest (DeFi) or unclear permissibility.",
                scripture: "Quran 2:275-276 – \"Allah permits trade but forbids riba...\" | Quran 3:130 – \"Do not consume riba, doubled and multiplied.\" | Hadith (Muslim): \"Riba has 70 sins; the least is like committing incest.\""
            },
            {
                category: "Financial (Insurance & Gambling)",
                rule: "Conventional insurance involves gharar (uncertainty) and maysir (gambling); only Islamic insurance (takaful) is permissible.",
                violation: "Car insurance, life insurance, and health insurance through conventional providers. National Lottery tickets, office betting pools, fantasy football leagues with entry fees.",
                scripture: "Hadith (Muslim): \"The Prophet prohibited gharar sales.\" | Quran 2:219 – \"They ask about wine and gambling. Say: In them is great sin.\" | Hadith (Bukhari): \"Whoever plays with dice is like one who dyes his hand with pork blood.\""
            },
            {
                category: "Financial (Business Ethics)",
                rule: "All business transactions must be free from deception, fraud, and exploitation. Contracts must be clear and fair.",
                violation: "Working for companies with unclear business models (potential pyramid schemes), aggressive sales tactics in financial services, zero-hours contracts that exploit workers, payday loan companies.",
                scripture: "Quran 4:29 – \"Do not consume each other's wealth unjustly.\" | Hadith (Bukhari): \"Both parties in a business transaction have the right to annul it as long as they have not separated.\" | Quran 83:1-3 – \"Woe to those who give less than due.\""
            },
            {
                category: "Financial (Debt & Wealth)",
                rule: "Avoid excessive debt; fulfill financial obligations promptly; give zakah (2.5% of savings annually).",
                violation: "Credit card debt for non-essentials, 'buy now pay later' schemes, missing zakah calculations on savings/investments, not paying zakah on business stock or rental income.",
                scripture: "Quran 2:280 – \"If the debtor is in difficulty, grant him time till it is easy for him to repay.\" | Hadith (Bukhari): \"Whoever takes people's money intending to repay it, Allah will repay it for him.\" | Quran 9:103 – \"Take zakah from their wealth to purify them.\""
            },
            {
                category: "Dietary (Halal Food)",
                rule: "Consuming halal-slaughtered meat and avoiding haram ingredients (gelatin, alcohol-based flavors, non-halal E-numbers).",
                violation: "Eating non-certified meat (e.g., supermarket chicken without halal certification), gelatin in sweets (e.g., Haribo), alcohol in sauces/medicines (e.g., vanilla extract, cough syrup). School/work canteen meals with cross-contamination.",
                scripture: "Quran 5:3 – \"Forbidden to you are carrion, blood, the flesh of swine...\" | Quran 6:121 – \"Do not eat of what is not slaughtered in Allah's name.\" | Hadith (Bukhari): \"Avoid what is doubtful to reach what is certain.\""
            },
            {
                category: "Dietary (Intoxicants & Cleanliness)",
                rule: "All intoxicants are haram; food must be tayyib (pure and wholesome).",
                violation: "Wine vinegar, kombucha with alcohol content, vanilla extract in baking. Energy drinks with unclear ingredients. Using alcohol-based hand sanitizers before eating/prayer.",
                scripture: "Quran 5:90 – \"Wine, gambling, idols are abominations from Satan's work.\" | Hadith (Abu Dawud): \"Whatever intoxicates in large quantities is haram in small quantities.\" | Quran 2:168 – \"Eat what is lawful and pure.\""
            },
            {
                category: "Dietary (Etiquette & Gratitude)",
                rule: "Say Bismillah before eating, Alhamdulillah after; eat with right hand; share food with others; avoid waste.",
                violation: "Forgetting to say prayers before/after meals, eating with left hand (cultural norm in UK), throwing away edible food, not offering food to guests or neighbors.",
                scripture: "Hadith (Bukhari): \"When any of you eats, let him eat with his right hand.\" | Hadith (Muslim): \"He is not of us who goes to sleep full while his neighbor goes hungry.\" | Quran 7:31 – \"Eat and drink but do not be excessive.\""
            },
            {
                category: "Modesty (Hijab & Awrah)",
                rule: "Men must cover navel to knee; women must observe full hijab (loose, opaque clothing covering all except face/hands in public).",
                violation: "Wearing tight/revealing gym wear, shorts above the knee (men), or see-through hijabs. Workplace dress codes pressuring removal of hijab or modest attire.",
                scripture: "Quran 24:31 – \"Tell believing women to draw their veils over their bosoms...\" | Quran 33:59 – \"O Prophet! Tell your wives/daughters to draw their cloaks over themselves.\" | Hadith (Tirmidhi): \"Modesty is part of faith.\""
            },
            {
                category: "Modesty (Behavior & Speech)",
                rule: "Lower the gaze, speak softly and respectfully, avoid showing off (riya), maintain dignity in public.",
                violation: "Staring at attractive people on public transport, loud conversations on phones in public, posting immodest photos on social media, attention-seeking behavior online.",
                scripture: "Quran 24:30 – \"Lower your gaze and guard your chastity.\" | Quran 31:19 – \"Lower your voice; the harshest of sounds is the braying of donkeys.\" | Hadith (Muslim): \"Whoever does something to show off, Allah will expose him.\""
            },
            {
                category: "Gender Interactions",
                rule: "Free mixing/khalwa (seclusion) with non-mahram is prohibited; physical contact (e.g., handshakes) is discouraged.",
                violation: "Unrestricted workplace/social mixing (e.g., open-plan offices), private meetings with opposite gender, or carpooling with non-mahram colleagues. Casual hugs/handshakes in professional settings.",
                scripture: "Hadith (Bukhari & Muslim) – \"No man is alone with a woman except that Satan is the third.\" | Quran 24:30 – \"Lower your gaze and guard your chastity.\""
            },
            {
                category: "Marriage & Family",
                rule: "Marriage is half of faith; spouses have mutual rights and responsibilities; children must obey parents in lawful matters.",
                violation: "Delaying marriage unnecessarily, not fulfilling spouse's rights (emotional/physical/financial), children disrespecting parents, elderly parents placed in care homes without necessity.",
                scripture: "Hadith (Tirmidhi): \"When a man marries, he has completed half of his religion.\" | Quran 4:19 – \"Live with your wives in kindness.\" | Quran 17:23 – \"Your Lord has decreed that you worship none but Him, and be kind to parents.\""
            },
            {
                category: "Prayer (Salah)",
                rule: "Obligatory prayers at fixed times; Jumu'ah is compulsory for men. Prayers must be performed in clean spaces.",
                violation: "Missing prayers due to work/school schedules (e.g., back-to-back meetings). Incorrect prayer timings in UK summers (late Isha). Using non-halal toiletries (alcohol-based wipes) before prayer.",
                scripture: "Quran 4:103 – \"Prayer is decreed upon believers at fixed times.\" | Hadith (Ibn Majah) – \"Whoever misses Jumu'ah without excuse is written as a hypocrite.\" | Quran 5:6 – \"Purify yourselves before prayer.\""
            },
            {
                category: "Prayer (Qibla & Cleanliness)",
                rule: "Face Mecca (qibla) during prayer; maintain ritual purity (wudu/ghusl).",
                violation: "Praying in wrong direction without checking qibla apps. Breaking wudu unknowingly (touching private parts, passing gas). Praying on unclean surfaces without prayer mat.",
                scripture: "Quran 2:144 – \"Turn your face toward the Sacred Mosque.\" | Hadith (Bukhari): \"The key to prayer is purification.\" | Hadith (Muslim): \"Allah does not accept prayer without purification.\""
            },
            {
                category: "Prayer (Dhikr & Remembrance)",
                rule: "Remember Allah frequently through dhikr, morning/evening adhkar, and reading Quran regularly.",
                violation: "Forgetting morning/evening remembrances, not reading Quran for weeks, replacing dhikr time with social media scrolling, missing du'a after prayers.",
                scripture: "Quran 33:41 – \"Remember Allah with much remembrance.\" | Hadith (Bukhari): \"The example of one who remembers Allah and one who does not is like the living and the dead.\" | Quran 2:152 – \"Remember Me and I will remember you.\""
            },
            {
                category: "Fasting & Spiritual Discipline",
                rule: "Fast during Ramadan; observe sunnah fasts (Mondays/Thursdays); avoid sins that break spiritual benefits of fasting.",
                violation: "Breaking fast without valid excuse, not making up missed fasts, eating/drinking in front of fasting people, engaging in arguments during Ramadan, watching inappropriate content while fasting.",
                scripture: "Quran 2:183 – \"Fasting is prescribed for you as it was prescribed for those before you.\" | Hadith (Bukhari): \"Whoever does not give up false speech and acting upon it, Allah has no need of his giving up food and drink.\" | Hadith (Tirmidhi): \"Many people get nothing from their fast except hunger and thirst.\""
            },
            {
                category: "Celebrations",
                rule: "Imitating non-Islamic religious/cultural festivals is forbidden (e.g., birthdays with pagan origins).",
                violation: "Participating in Christmas office parties, Halloween trick-or-treating, or Valentine's Day gifts (may involve shirk/imitation). School nativity plays for children.",
                scripture: "Hadith (Abu Dawud) – \"Whoever imitates a people is one of them.\" | Quran 58:22 – \"Take not Jews/Christians as allies in disobedience to Allah.\""
            },
            {
                category: "Celebrations (Birthdays & Innovation)",
                rule: "Celebrating birthdays is considered bid'ah (innovation) by some scholars; focus should be on Islamic celebrations only.",
                violation: "Birthday parties with candles/wishes (may resemble fire worship), Mother's/Father's Day cards, New Year celebrations. Office celebrations for non-Islamic holidays.",
                scripture: "Hadith (Muslim): \"Every innovation is misguidance.\" | Hadith (Abu Dawud): \"Whoever innovates in our matter will have it rejected.\" | Quran 5:3 – \"Today I have perfected your religion.\""
            },
            {
                category: "Entertainment",
                rule: "Music with inappropriate lyrics, explicit media, and games promoting sin (witchcraft/gambling) are haram.",
                violation: "Listening to mainstream music with haram themes, watching explicit Netflix shows, or playing games like *Harry Potter* (witchcraft) or *Fortnite* (avatar immodesty).",
                scripture: "Hadith (Bukhari) – \"Musical instruments are haram.\" | Quran 31:6 – \"Avoid idle talk and frivolous entertainment.\" | Hadith (Tirmidhi): \"Singing sprouts hypocrisy in the heart.\""
            },
            {
                category: "Entertainment (Images & Representation)",
                rule: "Creating images of living beings is discouraged; avoid excessive entertainment that distracts from worship.",
                violation: "Photography as hobby (creating images), drawing/painting people/animals in art classes. Binge-watching TV series, social media scrolling replacing dhikr time.",
                scripture: "Hadith (Bukhari): \"Those who make pictures will be punished on the Day of Judgment.\" | Hadith (Muslim): \"Angels do not enter houses with pictures.\" | Quran 25:43 – \"Have you seen one who takes his desire as his god?\""
            },
            {
                category: "Health & Lifestyle",
                rule: "Tattoos, smoking/vaping, and wasting resources (israf) are prohibited.",
                violation: "Getting tattoos/vaping (common among youth), excessive water/food waste (e.g., buffets). Cosmetic procedures altering Allah's creation (e.g., fillers for vanity).",
                scripture: "Hadith (Bukhari) – \"Allah cursed the one who does tattoos.\" | Quran 7:31 – \"Do not waste; He does not love the wasteful.\" | Hadith (Muslim): \"Do not harm yourself or others.\""
            },
            {
                category: "Health & Lifestyle (Sleep & Routine)",
                rule: "Maintain good sleep hygiene; avoid sleeping through prayer times or staying awake unnecessarily late.",
                violation: "Gaming/Netflix until Fajr, sleeping through morning prayer. Irregular sleep patterns affecting work/worship balance. Energy drinks/caffeine dependence.",
                scripture: "Hadith (Bukhari): \"Take benefit of five before five: your youth before old age, your health before sickness.\" | Quran 17:78 – \"And recite the Quran in the early dawn.\""
            },
            {
                category: "Health & Hygiene",
                rule: "Maintain personal cleanliness (fitrah): trim nails, remove body hair, use miswak/brush teeth, clean after using toilet.",
                violation: "Neglecting oral hygiene (affecting prayer acceptance), not cleaning properly after using toilet, long nails (especially for men), neglecting body grooming that affects others.",
                scripture: "Hadith (Muslim): \"Five things are part of fitrah: circumcision, shaving pubic hair, cutting nails, plucking armpits, trimming mustache.\" | Hadith (Bukhari): \"If it were not that I would burden my community, I would order them to use miswak with every prayer.\""
            },
            {
                category: "Social Ethics",
                rule: "Supporting haram causes (LGBTQ+ advocacy, riba-based charities) is forbidden.",
                violation: "Donating to non-Islamic charities funding haram activities (e.g., interest-based microloans, LGBTQ+ shelters). Workplace diversity training promoting un-Islamic values.",
                scripture: "Quran 5:2 – \"Do not cooperate in sin and transgression.\" | Quran 60:8 – \"Allah does not forbid kindness to those who oppose you in faith.\""
            },
            {
                category: "Social Ethics (Gossip & Backbiting)",
                rule: "Backbiting (ghibah), slander, and spreading rumors are major sins.",
                violation: "Office gossip about colleagues, sharing unverified news on WhatsApp groups, commenting negatively about others on social media. 'Venting' sessions about family/friends.",
                scripture: "Quran 49:12 – \"Would one of you like to eat the flesh of his dead brother?\" | Hadith (Tirmidhi): \"Whoever believes in Allah and the Last Day should speak good or remain silent.\" | Quran 24:19 – \"Those who spread scandal among believers will have a painful punishment.\""
            },
            {
                category: "Social Ethics (Justice & Oppression)",
                rule: "Stand against injustice even if it affects family/friends; be just in testimony and judgment.",
                violation: "Remaining silent about workplace discrimination, false insurance claims, not reporting benefit fraud by family members, favoritism in hiring/business due to relationships.",
                scripture: "Quran 4:135 – \"Be persistently standing in justice, witnesses for Allah, even if it be against yourselves, your parents, and your relatives.\" | Hadith (Muslim): \"Whoever among you sees a wrong action, let him change it with his hand.\""
            },
            {
                category: "Neighborly Relations",
                rule: "Be kind to neighbors regardless of their faith; help them in times of need; avoid causing them harm.",
                violation: "Noise complaints from neighbors due to inconsiderate behavior, not helping elderly neighbors with shopping, parking issues blocking neighbor's access, strong cooking smells without ventilation.",
                scripture: "Hadith (Bukhari): \"He is not a believer who goes to sleep full while his neighbor goes hungry.\" | Hadith (Muslim): \"By Allah, he will not enter Paradise whose neighbor is not safe from his harm.\" | Quran 4:36 – \"Worship Allah and be kind to neighbors.\""
            },
            {
                category: "Business Ethics",
                rule: "Honesty in trade; avoid cheating, deception, or selling defective goods knowingly.",
                violation: "Exaggerating product benefits in sales jobs, not disclosing defects when selling items online, inflating expenses on work reports. Multi-level marketing schemes.",
                scripture: "Hadith (Muslim): \"The truthful merchant will be with the prophets on Judgment Day.\" | Quran 83:1-3 – \"Woe to those who give less than due.\" | Hadith (Bukhari): \"Whoever cheats us is not one of us.\""
            },
            {
                category: "Digital Ethics",
                rule: "Avoid time-wasting, inappropriate content online, and maintain Islamic conduct on social media.",
                violation: "Excessive social media use, following accounts with immodest content, posting photos that don't meet Islamic modesty standards. Online arguments and trolling.",
                scripture: "Hadith (Tirmidhi): \"The believer is not one who eats his fill while his neighbor goes hungry.\" | Quran 4:148 – \"Allah does not like public utterance of evil speech.\" | Hadith (Bukhari): \"Faith has 70+ branches; removing harm from the road is part of faith.\""
            },
            {
                category: "Environmental Stewardship",
                rule: "Avoid waste (israf); be a responsible steward of Allah's creation; conserve natural resources.",
                violation: "Excessive water usage during wudu, unnecessary plastic consumption, food waste, not recycling, leaving lights/heating on unnecessarily, fast fashion consumption.",
                scripture: "Quran 7:31 – \"Eat and drink but do not be excessive; He does not love those who are excessive.\" | Hadith (Bukhari): \"The world is green and beautiful, and Allah has appointed you as His stewards over it.\" | Hadith (Ibn Majah): \"Do not waste water even if you are at a running river.\""
            },
            {
                category: "Seeking Knowledge",
                rule: "Seeking beneficial knowledge is obligatory; teach others what you know; avoid spreading ignorance.",
                violation: "Not learning basic Islamic teachings, spreading religious misinformation on social media, not teaching children proper Islamic knowledge, preferring entertainment over educational content.",
                scripture: "Hadith (Ibn Majah): \"Seeking knowledge is an obligation upon every Muslim.\" | Hadith (Muslim): \"Whoever conceals knowledge that could benefit people will be bridled with reins of fire.\" | Quran 20:114 – \"Say: My Lord, increase me in knowledge.\""
            }
        ]
    },
    christian: {
        title: "Christian Guidelines",
        headers: ["Category", "Rule/Law in Christianity", "How UK Christians May Unknowingly Break It", "Relevant Bible Verses"],
        rows: [
            {
                category: "Worship & Idolatry",
                rule: "\"You shall have no other gods before Me\" (Exodus 20:3). Avoid idolatry (materialism, occult practices).",
                violation: "Prioritizing career/wealth over God, cultural participation in horoscopes, tarot, or Halloween rituals. \"Manifestation\" trends replacing prayer.",
                scripture: "Exodus 20:3-5 – \"Do not bow down to idols.\" | 1 John 5:21 – \"Keep yourselves from idols.\" | Colossians 3:5 – \"Greed is idolatry.\""
            },
            {
                category: "Worship & Prayer",
                rule: "Regular prayer and Bible study; prioritize spiritual growth over worldly pursuits.",
                violation: "Neglecting daily prayer/devotions due to busy schedules, treating church attendance as optional, using prayer only in emergencies ('foxhole Christianity').",
                scripture: "1 Thessalonians 5:17 – \"Pray without ceasing.\" | Hebrews 10:25 – \"Do not neglect meeting together.\" | Matthew 6:33 – \"Seek first His kingdom.\""
            },
            {
                category: "Worship (Name of God)",
                rule: "Do not take the Lord's name in vain; use God's name with reverence and respect.",
                violation: "Using 'Oh my God' as casual exclamation, swearing with 'Jesus Christ,' using God's name in jokes or frivolous contexts, irreverent worship songs focused on feelings rather than God's holiness.",
                scripture: "Exodus 20:7 – \"You shall not take the name of the Lord your God in vain.\" | Leviticus 19:12 – \"Do not swear falsely by My name.\" | Isaiah 29:13 – \"These people honor me with their lips, but their hearts are far from me.\""
            },
            {
                category: "Sabbath Observance",
                rule: "Keep the Sabbath holy (Exodus 20:8); rest and focus on God (traditionally Sunday for Christians).",
                violation: "Working overtime on Sundays, treating it as a shopping/entertainment day. Children's sports leagues scheduled on Sundays.",
                scripture: "Isaiah 58:13-14 – \"Call the Sabbath a delight.\" | Hebrews 4:9-10 – \"A Sabbath rest remains for God's people.\" | Mark 2:27 – \"The Sabbath was made for man, not man for the Sabbath.\""
            },
            {
                category: "Sabbath (Rest & Worship)",
                rule: "Sunday should prioritize worship, rest, family time, and spiritual refreshment over commercial activities.",
                violation: "Sunday shopping as routine, encouraging others to work on Sundays unnecessarily, treating Sunday as 'catch-up day' for work, prioritizing sports over church attendance.",
                scripture: "Nehemiah 13:15-19 – Nehemiah forbade trading on the Sabbath. | Luke 4:16 – \"As was his custom, he went to the synagogue on the Sabbath day.\" | Acts 20:7 – \"On the first day of the week, when we were gathered together to break bread...\""
            },
            {
                category: "Sexual Morality",
                rule: "Sex reserved for marriage (Hebrews 13:4); avoid lust (Matthew 5:28) and pornography.",
                violation: "Cohabitation before marriage (common in UK culture), pornography use (normalized among youth), LGBTQ+ relationships contrary to Biblical teaching.",
                scripture: "1 Thessalonians 4:3-5 – \"Abstain from sexual immorality.\" | Romans 1:26-27 – \"God gave them over to shameful lusts.\" | 1 Corinthians 6:18-20 – \"Flee sexual immorality... your body is a temple.\""
            },
            {
                category: "Sexual Morality (Divorce & Remarriage)",
                rule: "Marriage is a covenant before God; divorce permitted only for adultery or abandonment.",
                violation: "Divorcing for 'incompatibility' rather than biblical grounds, remarrying after unbiblical divorce, casual approach to marriage commitment.",
                scripture: "Matthew 19:3-9 – \"What God has joined, let no one separate.\" | 1 Corinthians 7:10-11 – \"Wife must not separate from husband.\" | Malachi 2:16 – \"I hate divorce, says the Lord.\""
            },
            {
                category: "Sexual Morality (Purity of Heart)",
                rule: "Guard your heart and mind from sexual temptation; flee from sexual immorality in all forms.",
                violation: "Consuming sexualized media (TV shows, movies, music), following suggestive social media accounts, romantic novels with explicit content, workplace flirtation.",
                scripture: "Matthew 5:28 – \"Everyone who looks at a woman with lustful intent has already committed adultery with her in his heart.\" | 1 Corinthians 6:18 – \"Flee from sexual immorality.\" | Job 31:1 – \"I have made a covenant with my eyes; how then could I gaze at a virgin?\""
            },
            {
                category: "Generosity & Greed",
                rule: "\"Do not store up treasures on earth\" (Matthew 6:19); tithe (10%) and avoid greed.",
                violation: "Materialism (e.g., luxury purchases while neglecting charity), hoarding wealth (e.g., refusing to help homeless). \"Buy now, pay later\" schemes promoting debt.",
                scripture: "Luke 12:15 – \"Life does not consist in abundance.\" | Acts 20:35 – \"It is more blessed to give than to receive.\" | 1 Timothy 6:10 – \"The love of money is a root of all kinds of evils.\""
            },
            {
                category: "Generosity (Tithing & Stewardship)",
                rule: "Give generously to God's work; everything belongs to God, we are merely stewards.",
                violation: "Not tithing regularly, giving only spare change rather than first fruits, refusing to help those in need while living comfortably.",
                scripture: "Malachi 3:10 – \"Bring the whole tithe into the storehouse.\" | 2 Corinthians 9:7 – \"God loves a cheerful giver.\" | 1 John 3:17 – \"How can God's love be in anyone who has material possessions but refuses to help?\""
            },
            {
                category: "Generosity (Care for the Poor)",
                rule: "Show special concern for the poor, widows, orphans, and marginalized; give sacrificially, not just from surplus.",
                violation: "Ignoring homeless people, donating only unwanted items to charity, choosing entertainment expenses over helping those in need, not supporting single mothers in church.",
                scripture: "James 1:27 – \"Pure religion... is to visit orphans and widows in their affliction.\" | Proverbs 31:8-9 – \"Open your mouth for the mute, for the rights of all who are destitute.\" | Luke 21:1-4 – The widow's offering praised over the rich.\""
            },
            {
                category: "Forgiveness",
                rule: "Forgive others unconditionally (Matthew 6:14-15); reconcile conflicts.",
                violation: "Holding grudges (e.g., family estrangements), refusing to apologize in workplace disputes. Social media \"cancel culture.\"",
                scripture: "Matthew 18:21-22 – \"Forgive 70 times 7.\" | Colossians 3:13 – \"Forgive as the Lord forgave you.\" | Matthew 6:14-15 – \"If you do not forgive others their trespasses, neither will your Father forgive your trespasses.\""
            },
            {
                category: "Forgiveness (Reconciliation)",
                rule: "Actively pursue reconciliation with those who have wronged you or whom you have wronged.",
                violation: "Avoiding difficult conversations with estranged family members, not apologizing when clearly wrong, cutting people off instead of working through conflicts, church splits over minor disagreements.",
                scripture: "Matthew 5:23-24 – \"First go and be reconciled to your brother.\" | Matthew 18:15-17 – Process for addressing sin in the church. | 2 Corinthians 5:18 – \"God... gave us the ministry of reconciliation.\""
            },
            {
                category: "Speech & Communication",
                rule: "Let no corrupt word proceed from your mouth; speak truth in love.",
                violation: "Workplace gossip, crude humor, exaggerating stories, white lies ('tell them I'm not here'), swearing casually.",
                scripture: "Ephesians 4:29 – \"Let no corrupt word proceed from your mouth.\" | Colossians 4:6 – \"Let your speech always be gracious.\" | James 3:10 – \"From the same mouth come blessing and cursing. This should not be.\""
            },
            {
                category: "Speech (Gossip & Slander)",
                rule: "Avoid gossip, slander, and speaking ill of others; address issues directly with the person involved.",
                violation: "Office gossip about colleagues' personal lives, sharing prayer requests that are really gossip, complaining about church leaders to other members, spreading unverified information online.",
                scripture: "Proverbs 16:28 – \"A whisperer separates close friends.\" | Leviticus 19:16 – \"You shall not go around as a slanderer among your people.\" | Matthew 18:15 – \"If your brother sins against you, go and tell him his fault, between you and him alone.\""
            },
            {
                category: "Alcohol & Gluttony",
                rule: "Avoid drunkenness (Ephesians 5:18) and gluttony (Proverbs 23:20-21).",
                violation: "Binge-drinking culture (e.g., pub crawls), overindulgence in food (e.g., obesity from processed diets). \"Wine mom\" trends normalizing alcohol dependency.",
                scripture: "Proverbs 23:20-21 – \"Do not join drunkards or gluttons.\" | 1 Corinthians 6:19 – \"Your body is a temple.\" | Galatians 5:23 – \"Self-control\" is a fruit of the Spirit."
            },
            {
                category: "Truth & Honesty",
                rule: "\"You shall not bear false witness\" (Exodus 20:16); be truthful in all dealings.",
                violation: "Tax avoidance schemes, exaggerating CVs, calling in 'sick' for mental health days, insurance claims inflation, 'harmless' social media embellishments.",
                scripture: "Proverbs 12:22 – \"Lying lips are an abomination to the Lord.\" | Ephesians 4:25 – \"Speak truth with your neighbor.\" | Revelation 21:8 – \"All liars will have their part in the lake of fire.\""
            },
            {
                category: "Truth (Integrity in Work)",
                rule: "Work with integrity; be honest in business dealings; render honest service for wages received.",
                violation: "Padding expense accounts, taking office supplies for personal use, inflating work hours, using work time for personal business, dishonest marketing practices.",
                scripture: "Luke 16:10 – \"One who is faithful in very little is also faithful in much.\" | Proverbs 11:1 – \"A false balance is an abomination to the Lord.\" | Colossians 3:23 – \"Work heartily, as for the Lord.\""
            },
            {
                category: "Marriage & Family",
                rule: "Honor marriage covenant; husbands love wives as Christ loved the church; wives respect husbands.",
                violation: "Emotional affairs through social media, neglecting spouse for work/hobbies, not prioritizing family time, harsh criticism of spouse to others.",
                scripture: "Ephesians 5:25 – \"Husbands, love your wives as Christ loved the church.\" | Ephesians 5:33 – \"Let the wife see that she respects her husband.\" | 1 Peter 3:7 – \"Husbands, live with your wives in an understanding way.\""​​​​​​​​​​​​​​​​
            },
            {
                category: "Parenting & Authority",
                rule: "Train children in the way they should go; discipline with love; honor parents.",
                violation: "Permissive parenting avoiding biblical correction, neglecting spiritual education, disrespecting elderly parents, not setting godly boundaries.",
                scripture: "Proverbs 22:6 – \"Train up a child in the way he should go.\" | Ephesians 6:1-4 – \"Children, obey your parents in the Lord.\" | Proverbs 13:24 – \"Whoever spares the rod hates his child.\""
            },
            {
                category: "Parenting (Spiritual Training)",
                rule: "Teach children God's word daily; model Christian living; prioritize their spiritual development over worldly success.",
                violation: "Skipping family devotions for busy schedules, emphasizing academic/career success over character, allowing children to skip church for sports, not discussing faith in daily life.",
                scripture: "Deuteronomy 6:6-7 – \"These words... you shall teach them diligently to your children.\" | Proverbs 29:15 – \"The rod and reproof give wisdom.\" | 3 John 1:4 – \"No greater joy than to hear that my children walk in truth.\""
            },
            {
                category: "Authority & Government",
                rule: "Submit to governing authorities unless they command sin; pray for leaders; pay taxes honestly.",
                violation: "Tax evasion, disrespecting police officers, not praying for political leaders you disagree with, encouraging civil disobedience for non-biblical issues.",
                scripture: "Romans 13:1-7 – \"Let every person be subject to the governing authorities.\" | 1 Timothy 2:1-2 – \"Pray... for kings and all who are in high positions.\" | Acts 5:29 – \"We must obey God rather than men.\""
            },
            {
                category: "Work & Labor",
                rule: "Work heartily as unto the Lord; be honest in business dealings; treat employees fairly.",
                violation: "Laziness at work while getting paid, dishonest business practices, exploiting workers, calling in sick unnecessarily, time theft.",
                scripture: "Colossians 3:23 – \"Work heartily, as to the Lord.\" | Ephesians 4:28 – \"Let the thief no longer steal, but rather let him labor.\" | James 5:4 – \"The wages you failed to pay cry out against you.\""
            },
            {
                category: "Work (Witness & Ethics)",
                rule: "Be a positive Christian witness at work; maintain high ethical standards; serve others through your profession.",
                violation: "Participating in office gossip, compromising Christian values for career advancement, not helping struggling colleagues, harsh treatment of subordinates.",
                scripture: "Matthew 5:16 – \"Let your light shine before others.\" | 1 Peter 2:12 – \"Keep your conduct among the Gentiles honorable.\" | Philippians 2:15 – \"Shine as lights in the world.\""
            },
            {
                category: "Environmental Stewardship",
                rule: "Care for creation (Genesis 2:15); avoid waste/pollution.",
                violation: "Excessive plastic use, fast fashion waste, ignoring climate change (e.g., unnecessary car emissions), overconsumption without regard for environmental impact.",
                scripture: "Psalm 24:1 – \"The earth is the Lord's.\" | Revelation 11:18 – \"Destroy those who destroy the earth.\" | Genesis 1:28 – \"Subdue and have dominion\" (implies responsible stewardship)."
            },
            {
                category: "Digital & Media Ethics",
                rule: "Guard your heart and mind; consume media that honors God.",
                violation: "Binge-watching shows with immoral content, social media addiction, viewing pornography, engaging in online arguments/trolling.",
                scripture: "Philippians 4:8 – \"Think on whatever is pure, lovely, of good report.\" | Proverbs 4:23 – \"Guard your heart, for from it flow the springs of life.\" | Matthew 5:28 – \"Everyone who looks at a woman with lustful intent has already committed adultery.\""
            },
            {
                category: "Digital Ethics (Social Media)",
                rule: "Use technology to build up others; avoid addictive use; maintain Christian witness online.",
                violation: "Endless scrolling replacing prayer/Bible time, posting inappropriate photos, engaging in political arguments online, cyberbullying, sharing unverified information.",
                scripture: "1 Corinthians 10:31 – \"Whatever you do, do all to the glory of God.\" | Ephesians 4:29 – \"Let no corrupting talk come out of your mouths.\" | 1 Thessalonians 5:11 – \"Encourage one another and build each other up.\""
            },
            {
                category: "Pride & Humility",
                rule: "\"God opposes the proud but gives grace to the humble\" (James 4:6).",
                violation: "Social media bragging, refusing to admit mistakes, looking down on others, seeking recognition/praise, competitive church attendance ('holier than thou').",
                scripture: "James 4:6 – \"God opposes the proud but gives grace to the humble.\" | Philippians 2:3 – \"Do nothing from selfish ambition or conceit.\" | Luke 14:11 – \"Everyone who exalts himself will be humbled.\""
            },
            {
                category: "Humility (Service)",
                rule: "Serve others sacrificially; consider others more important than yourself; use gifts to build up the church.",
                violation: "Refusing to help with 'menial' church tasks, expecting recognition for service, only serving when convenient, not using spiritual gifts to help others.",
                scripture: "Philippians 2:3-4 – \"In humility count others more significant than yourselves.\" | Mark 10:43-44 – \"Whoever would be great among you must be your servant.\" | 1 Peter 4:10 – \"As each has received a gift, use it to serve one another.\""
            },
            {
                category: "Love & Judgment",
                rule: "Love your neighbor as yourself; avoid judging others' hearts while maintaining biblical standards.",
                violation: "Harsh judgment of non-Christians, refusing to associate with 'sinners,' lack of compassion for struggling believers, political hatred.",
                scripture: "Matthew 22:39 – \"Love your neighbor as yourself.\" | Matthew 7:1-5 – \"Judge not, that you be not judged.\" | John 13:35 – \"By this all people will know you are my disciples, if you have love for one another.\""
            },
            {
                category: "Love (Enemies & Persecution)",
                rule: "Love your enemies; pray for those who persecute you; overcome evil with good.",
                violation: "Harboring resentment toward those who oppose Christianity, not praying for persecutors, responding to mockery with anger rather than love, political hatred toward opposing parties.",
                scripture: "Matthew 5:44 – \"Love your enemies and pray for those who persecute you.\" | Romans 12:21 – \"Do not be overcome by evil, but overcome evil with good.\" | Luke 23:34 – Jesus said, \"Father, forgive them, for they know not what they do.\""
            },
            {
                category: "Contentment & Anxiety",
                rule: "Be content in all circumstances; cast your anxieties on God; trust in His provision.",
                violation: "Constant worry about finances/future, comparing lifestyle to others on social media, anxiety about things beyond your control, materialism driven by fear of not having enough.",
                scripture: "Philippians 4:11-13 – \"I have learned in whatever situation I am to be content.\" | 1 Peter 5:7 – \"Cast all your anxieties on him.\" | Matthew 6:25-26 – \"Do not be anxious... Look at the birds of the air.\""
            },
            {
                category: "Stewardship of Time",
                rule: "Redeem the time; use your days wisely for God's glory; avoid wasting the life God has given you.",
                violation: "Excessive TV/gaming, procrastination on important responsibilities, not planning for spiritual growth, wasting time on social media instead of meaningful relationships.",
                scripture: "Ephesians 5:15-16 – \"Look carefully then how you walk... making the best use of the time.\" | Psalm 90:12 – \"Teach us to number our days that we may get a heart of wisdom.\" | 1 Corinthians 10:31 – \"Whatever you do, do all to the glory of God.\""
            },
            {
                category: "Evangelism & Witness",
                rule: "Share the gospel; be prepared to give a reason for your hope; make disciples of all nations.",
                violation: "Never sharing faith with non-Christian friends/colleagues, being ashamed of the gospel in secular environments, not knowing how to explain your beliefs, avoiding discussions about faith.",
                scripture: "Matthew 28:19-20 – \"Go therefore and make disciples of all nations.\" | 1 Peter 3:15 – \"Always be prepared to make a defense to anyone who asks you for a reason for the hope that is in you.\" | Romans 1:16 – \"I am not ashamed of the gospel.\""
            },
            {
                category: "Church Unity & Fellowship",
                rule: "Maintain unity in the church; bear one another's burdens; do not forsake assembling together.",
                violation: "Church hopping without good reason, spreading division through criticism, not participating in church community, isolating from other believers, refusing to resolve conflicts.",
                scripture: "Ephesians 4:3 – \"Eager to maintain the unity of the Spirit in the bond of peace.\" | Galatians 6:2 – \"Bear one another's burdens.\" | Hebrews 10:24-25 – \"Let us consider how to stir up one another to love and good works, not neglecting to meet together.\""
            },
            {
                category: "Financial Stewardship",
                rule: "Avoid debt when possible; save wisely; don't cosign for others; be generous but not foolish with money.",
                violation: "Excessive credit card debt, get-rich-quick schemes, not saving for the future, impulse buying, cosigning loans for family members, not budgeting carefully.",
                scripture: "Proverbs 22:7 – \"The borrower is slave to the lender.\" | Proverbs 27:14 – \"Do not put up security for a stranger.\" | Luke 14:28 – \"Which of you, desiring to build a tower, does not first sit down and count the cost?\""
            },
            {
                category: "Personal Holiness",
                rule: "Be holy as God is holy; flee from sin; pursue righteousness, godliness, faith, love.",
                violation: "Compromising with 'small' sins, rationalizing sinful behavior, not pursuing spiritual growth, being content with spiritual mediocrity, ignoring conviction of the Holy Spirit.",
                scripture: "1 Peter 1:15-16 – \"As he who called you is holy, you also be holy in all your conduct.\" | 2 Timothy 2:22 – \"Flee youthful passions and pursue righteousness.\" | 1 Timothy 6:11 – \"Pursue righteousness, godliness, faith, love, steadfastness, gentleness.\""
            },
            {
                category: "Discipleship & Growth",
                rule: "Grow in grace and knowledge; study Scripture diligently; seek wise counsel; mentor others in faith.",
                violation: "Spiritual stagnation, not reading the Bible regularly, refusing correction or accountability, not seeking to learn from mature Christians, not investing in younger believers.",
                scripture: "2 Peter 3:18 – \"Grow in the grace and knowledge of our Lord and Savior Jesus Christ.\" | 2 Timothy 2:15 – \"Do your best to present yourself to God as one approved.\" | Titus 2:3-5 – Older women should train younger women."
            },
            {
                category: "Suffering & Persecution",
                rule: "Expect suffering for righteousness' sake; rejoice in persecution; do not be surprised by trials.",
                violation: "Being shocked when mocked for Christian beliefs, avoiding situations where faith might be challenged, giving up Christian convictions under social pressure, not supporting persecuted Christians.",
                scripture: "1 Peter 4:12-13 – \"Do not be surprised at the fiery trial... but rejoice insofar as you share Christ's sufferings.\" | Matthew 5:10-12 – \"Blessed are those who are persecuted for righteousness' sake.\" | 2 Timothy 3:12 – \"All who desire to live godly in Christ Jesus will be persecuted.\""
            }
        ]
    }
};
