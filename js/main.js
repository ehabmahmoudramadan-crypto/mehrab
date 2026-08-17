// ============================================================
// بيانات القرآن الكريم (آيات مختارة)
// ============================================================
const QURAN_DATA = [
  { surah: "الفاتحة", verse: 1, arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", translation: "بسم الله الرحمن الرحيم" },
  { surah: "الفاتحة", verse: 2, arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ", translation: "الحمد لله رب العالمين" },
  { surah: "الفاتحة", verse: 3, arabic: "الرَّحْمَٰنِ الرَّحِيمِ", translation: "الرحمن الرحيم" },
  { surah: "الفاتحة", verse: 4, arabic: "مَالِكِ يَوْمِ الدِّينِ", translation: "مالك يوم الدين" },
  { surah: "الفاتحة", verse: 5, arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", translation: "إياك نعبد وإياك نستعين" },
  { surah: "الفاتحة", verse: 6, arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ", translation: "اهدنا الصراط المستقيم" },
  { surah: "الفاتحة", verse: 7, arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ", translation: "صراط الذين أنعمت عليهم غير المغضوب عليهم ولا الضالين" },
  { surah: "البقرة", verse: 255, arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ", translation: "الله لا إله إلا هو الحي القيوم، لا تأخذه سنة ولا نوم، له ما في السماوات وما في الأرض..." },
  { surah: "البقرة", verse: 286, arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ", translation: "لا يكلف الله نفساً إلا وسعها..." },
  { surah: "آل عمران", verse: 190, arabic: "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِأُولِي الْأَلْبَابِ", translation: "إن في خلق السموات والأرض واختلاف الليل والنهار لآيات لأولي الألباب" },
  { surah: "آل عمران", verse: 191, arabic: "الَّذِينَ يَذْكُرُونَ اللَّهَ قِيَامًا وَقُعُودًا وَعَلَىٰ جُنُوبِهِمْ وَيَتَفَكَّرُونَ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ رَبَّنَا مَا خَلَقْتَ هَٰذَا بَاطِلًا سُبْحَانَكَ فَقِنَا عَذَابَ النَّارِ", translation: "الذين يذكرون الله قياماً وقعوداً وعلى جنوبهم..." },
  { surah: "النساء", verse: 86, arabic: "وَإِذَا حُيِّيتُمْ بِتَحِيَّةٍ فَحَيُّوا بِأَحْسَنَ مِنْهَا أَوْ رُدُّوهَا ۗ إِنَّ اللَّهَ كَانَ عَلَىٰ كُلِّ شَيْءٍ حَسِيبًا", translation: "وإذا حييتم بتحية فحيوا بأحسن منها أو ردوها..." },
  { surah: "المائدة", verse: 8, arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ لِلَّهِ شُهَدَاءَ بِالْقِسْطِ ۖ وَلَا يَجْرِمَنَّكُمْ شَنَآنُ قَوْمٍ عَلَىٰ أَلَّا تَعْدِلُوا ۚ اعْدِلُوا هُوَ أَقْرَبُ لِلتَّقْوَىٰ ۖ وَاتَّقُوا اللَّهَ ۚ إِنَّ اللَّهَ خَبِيرٌ بِمَا تَعْمَلُونَ", translation: "يا أيها الذين آمنوا كونوا قوامين لله شهداء بالقسط..." },
  { surah: "الأعراف", verse: 199, arabic: "خُذِ الْعَفْوَ وَأْمُرْ بِالْعُرْفِ وَأَعْرِضْ عَنِ الْجَاهِلِينَ", translation: "خذ العفو وأمر بالعرف وأعرض عن الجاهلين" },
  { surah: "التوبة", verse: 129, arabic: "حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ ۖ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ", translation: "حسبي الله لا إله إلا هو، عليه توكلت وهو رب العرش العظيم" },
  { surah: "يونس", verse: 62, arabic: "أَلَا إِنَّ أَوْلِيَاءَ اللَّهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ", translation: "ألا إن أولياء الله لا خوف عليهم ولا هم يحزنون" },
  { surah: "هود", verse: 113, arabic: "وَأَقِمِ الصَّلَاةَ طَرَفَيِ النَّهَارِ وَزُلَفًا مِنَ اللَّيْلِ ۚ إِنَّ الْحَسَنَاتِ يُذْهِبْنَ السَّيِّئَاتِ ۚ ذَٰلِكَ ذِكْرَىٰ لِلذَّاكِرِينَ", translation: "وأقم الصلاة طرفي النهار وزلفاً من الليل..." },
  { surah: "الرعد", verse: 28, arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ", translation: "ألا بذكر الله تطمئن القلوب" },
  { surah: "إبراهيم", verse: 7, arabic: "لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ ۖ وَلَئِنْ كَفَرْتُمْ إِنَّ عَذَابِي لَشَدِيدٌ", translation: "لئن شكرتم لأزيدنكم، ولئن كفرتم إن عذابي لشديد" },
  { surah: "النحل", verse: 128, arabic: "إِنَّ اللَّهَ مَعَ الَّذِينَ اتَّقَوْا وَالَّذِينَ هُمْ مُحْسِنُونَ", translation: "إن الله مع الذين اتقوا والذين هم محسنون" },
  { surah: "الإسراء", verse: 23, arabic: "وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا", translation: "وقضى ربك ألا تعبدوا إلا إياه وبالوالدين إحساناً" },
  { surah: "الكهف", verse: 110, arabic: "فَمَنْ كَانَ يَرْجُو لِقَاءَ رَبِّهِ فَلْيَعْمَلْ عَمَلًا صَالِحًا وَلَا يُشْرِكْ بِعِبَادَةِ رَبِّهِ أَحَدًا", translation: "فمن كان يرجو لقاء ربه فليعمل عملاً صالحاً ولا يشرك بعبادة ربه أحداً" },
  { surah: "مريم", verse: 96, arabic: "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ سَيَجْعَلُ لَهُمُ الرَّحْمَٰنُ وُدًّا", translation: "إن الذين آمنوا وعملوا الصالحات سيجعل لهم الرحمن وداً" },
  { surah: "طه", verse: 46, arabic: "قَالَ لَا تَخَافَا ۖ إِنَّنِي مَعَكُمَا أَسْمَعُ وَأَرَىٰ", translation: "قال لا تخافا إنني معكما أسمع وأرى" },
  { surah: "النور", verse: 35, arabic: "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ ۚ مَثَلُ نُورِهِ كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ ۖ الْمِصْبَاحُ فِي زُجَاجَةٍ ۖ الزُّجَاجَةُ كَأَنَّهَا كَوْكَبٌ دُرِّيٌّ", translation: "الله نور السموات والأرض..." },
  { surah: "الفرقان", verse: 63, arabic: "وَعِبَادُ الرَّحْمَٰنِ الَّذِينَ يَمْشُونَ عَلَى الْأَرْضِ هَوْنًا وَإِذَا خَاطَبَهُمُ الْجَاهِلُونَ قَالُوا سَلَامًا", translation: "وعباد الرحمن الذين يمشون على الأرض هوناً..." },
  { surah: "القصص", verse: 77, arabic: "وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ ۖ وَلَا تَنْسَ نَصِيبَكَ مِنَ الدُّنْيَا ۖ وَأَحْسِنْ كَمَا أَحْسَنَ اللَّهُ إِلَيْكَ", translation: "وابتغ فيما آتاك الله الدار الآخرة ولا تنس نصيبك من الدنيا..." },
  { surah: "الزمر", verse: 53, arabic: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنْفُسِهِمْ لَا تَقْنَطُوا مِنْ رَحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا", translation: "قل يا عبادي الذين أسرفوا على أنفسهم لا تقنطوا من رحمة الله..." },
  { surah: "فصلت", verse: 34, arabic: "ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ فَإِذَا الَّذِي بَيْنَكَ وَبَيْنَهُ عَدَاوَةٌ كَأَنَّهُ وَلِيٌّ حَمِيمٌ", translation: "ادفع بالتي هي أحسن فإذا الذي بينك وبينه عداوة كأنه ولي حميم" },
  { surah: "الشورى", verse: 36, arabic: "فَمَا أُوتِيتُمْ مِنْ شَيْءٍ فَمَتَاعُ الْحَيَاةِ الدُّنْيَا ۚ وَمَا عِنْدَ اللَّهِ خَيْرٌ وَأَبْقَىٰ لِلَّذِينَ آمَنُوا وَعَلَىٰ رَبِّهِمْ يَتَوَكَّلُونَ", translation: "فما أوتيتم من شيء فمتاع الحياة الدنيا..." },
  { surah: "النجم", verse: 39, arabic: "وَأَنْ لَيْسَ لِلْإِنْسَانِ إِلَّا مَا سَعَىٰ", translation: "وأن ليس للإنسان إلا ما سعى" },
  { surah: "الحديد", verse: 16, arabic: "أَلَمْ يَأْنِ لِلَّذِينَ آمَنُوا أَنْ تَخْشَعَ قُلُوبُهُمْ لِذِكْرِ اللَّهِ", translation: "ألم يأن للذين آمنوا أن تخشع قلوبهم لذكر الله" },
  { surah: "المجادلة", verse: 11, arabic: "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنْكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ", translation: "يرفع الله الذين آمنوا منكم والذين أوتوا العلم درجات" },
  { surah: "التغابن", verse: 16, arabic: "فَاتَّقُوا اللَّهَ مَا اسْتَطَعْتُمْ وَاسْمَعُوا وَأَطِيعُوا وَأَنْفِقُوا خَيْرًا لِأَنْفُسِكُمْ ۗ وَمَنْ يُوقَ شُحَّ نَفْسِهِ فَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ", translation: "فاتقوا الله ما استطعتم واسمعوا وأطيعوا..." },
  { surah: "الملك", verse: 2, arabic: "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا", translation: "الذي خلق الموت والحياة ليبلوكم أيكم أحسن عملاً" },
  { surah: "الإنسان", verse: 8, arabic: "وَيُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ مِسْكِينًا وَيَتِيمًا وَأَسِيرًا", translation: "ويطعمون الطعام على حبه مسكيناً ويتيماً وأسيراً" },
  { surah: "الشرح", verse: 5, arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", translation: "فإن مع العسر يسراً" },
  { surah: "الشرح", verse: 6, arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا", translation: "إن مع العسر يسراً" },
  { surah: "الزلزلة", verse: 7, arabic: "فَمَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ", translation: "فمن يعمل مثقال ذرة خيراً يره" },
  { surah: "الزلزلة", verse: 8, arabic: "وَمَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ", translation: "ومن يعمل مثقال ذرة شراً يره" },
  { surah: "العصر", verse: 1, arabic: "وَالْعَصْرِ", translation: "والعصر" },
  { surah: "العصر", verse: 2, arabic: "إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ", translation: "إن الإنسان لفي خسر" },
  { surah: "العصر", verse: 3, arabic: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ", translation: "إلا الذين آمنوا وعملوا الصالحات وتواصوا بالحق وتواصوا بالصبر" },
  { surah: "الكوثر", verse: 1, arabic: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ", translation: "إنا أعطيناك الكوثر" },
  { surah: "الكوثر", verse: 2, arabic: "فَصَلِّ لِرَبِّكَ وَانْحَرْ", translation: "فصل لربك وانحر" },
  { surah: "الكوثر", verse: 3, arabic: "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ", translation: "إن شانئك هو الأبتر" },
  { surah: "الإخلاص", verse: 1, arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ", translation: "قل هو الله أحد" },
  { surah: "الإخلاص", verse: 2, arabic: "اللَّهُ الصَّمَدُ", translation: "الله الصمد" },
  { surah: "الإخلاص", verse: 3, arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ", translation: "لم يلد ولم يولد" },
  { surah: "الإخلاص", verse: 4, arabic: "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ", translation: "ولم يكن له كفواً أحد" },
  { surah: "الفلق", verse: 1, arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", translation: "قل أعوذ برب الفلق" },
  { surah: "الفلق", verse: 2, arabic: "مِنْ شَرِّ مَا خَلَقَ", translation: "من شر ما خلق" },
  { surah: "الفلق", verse: 3, arabic: "وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ", translation: "ومن شر غاسق إذا وقب" },
  { surah: "الفلق", verse: 4, arabic: "وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ", translation: "ومن شر النفاثات في العقد" },
  { surah: "الفلق", verse: 5, arabic: "وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ", translation: "ومن شر حاسد إذا حسد" },
  { surah: "الناس", verse: 1, arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ", translation: "قل أعوذ برب الناس" },
  { surah: "الناس", verse: 2, arabic: "مَلِكِ النَّاسِ", translation: "ملك الناس" },
  { surah: "الناس", verse: 3, arabic: "إِلَٰهِ النَّاسِ", translation: "إله الناس" },
  { surah: "الناس", verse: 4, arabic: "مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ", translation: "من شر الوسواس الخناس" },
  { surah: "الناس", verse: 5, arabic: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ", translation: "الذي يوسوس في صدور الناس" },
  { surah: "الناس", verse: 6, arabic: "مِنَ الْجِنَّةِ وَالنَّاسِ", translation: "من الجنة والناس" }
];

// ============================================================
// بيانات آيات اليوم مع التفسير
// ============================================================
const AYAH_OF_DAY_DATA = [
  {
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    surah: "الشرح",
    verse: 6,
    translation: "إن مع العسر يسراً",
    tafsir: "تأكيد من الله أن بعد كل ضيق فرجاً، وأن الفرج قريب لا محالة. وهي بشارة لكل مهموم ومكروب."
  },
  {
    arabic: "وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    surah: "الطلاق",
    verse: 3,
    translation: "ومن يتوكل على الله فهو حسبه",
    tafsir: "من صدق توكله على الله كفاه الله همه، ورزقه من حيث لا يحتسب. التوكل على الله أعظم أسباب الفرج."
  },
  {
    arabic: "لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا",
    surah: "التوبة",
    verse: 40,
    translation: "لا تحزن إن الله معنا",
    tafsir: "كلمة قالها النبي ﷺ لأبي بكر في الغار، تطمئن القلب وتزيل الخوف، فمن كان الله معه فلا خوف عليه."
  },
  {
    arabic: "فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ",
    surah: "هود",
    verse: 115,
    translation: "فإن الله لا يضيع أجر المحسنين",
    tafsir: "بشارة عظيمة للمحسنين بأن الله لا يضيع عملهم، وسيجازيهم بأحسن ما كانوا يعملون."
  },
  {
    arabic: "وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ",
    surah: "الأعراف",
    verse: 156,
    translation: "ورحمتي وسعت كل شيء",
    tafsir: "رحمته تعالى وسعت كل شيء في الدنيا والآخرة، فلا ييأس عبد من رحمة ربه مهما عظم ذنبه."
  },
  {
    arabic: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ ۚ عَلَيْهِ تَوَكَّلْتُ وَإِلَيْهِ أُنِيبُ",
    surah: "هود",
    verse: 88,
    translation: "وما توفيقي إلا بالله، عليه توكلت وإليه أنيب",
    tafsir: "التوفيق كله من الله، فلا نجاح ولا فلاح إلا بعونه وتوفيقه. فينبغي للعبد أن يسأل ربه التوفيق."
  },
  {
    arabic: "وَعَسَىٰ أَنْ تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَكُمْ ۖ وَعَسَىٰ أَنْ تُحِبُّوا شَيْئًا وَهُوَ شَرٌّ لَكُمْ ۚ وَاللَّهُ يَعْلَمُ وَأَنْتُمْ لَا تَعْلَمُونَ",
    surah: "البقرة",
    verse: 216,
    translation: "وعسى أن تكرهوا شيئاً وهو خير لكم، وعسى أن تحبوا شيئاً وهو شر لكم، والله يعلم وأنتم لا تعلمون",
    tafsir: "قد يكون في البلاء خير لا تعلمه، وقد تكون في الرخاء شر لا تدركه. سلِّم أمرك لله فهو أعلم بمصالحك."
  },
  {
    arabic: "يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ * ارْجِعِي إِلَىٰ رَبِّكِ رَاضِيَةً مَرْضِيَّةً",
    surah: "الفجر",
    verse: "27-28",
    translation: "يا أيتها النفس المطمئنة * ارجعي إلى ربك راضية مرضية",
    tafsir: "نداء لطمأنينة القلب بالإيمان، والرضا بقضاء الله، لنيل رضوان الله في الدنيا والآخرة."
  },
  {
    arabic: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنْفُسِهِمْ",
    surah: "الرعد",
    verse: 11,
    translation: "إن الله لا يغير ما بقوم حتى يغيروا ما بأنفسهم",
    tafsir: "التغيير يبدأ من الداخل. لا تنتظر تغير حالك من الخارج، بل ابدأ بتغيير ما في نفسك من إيمان وعمل."
  },
  {
    arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
    surah: "البقرة",
    verse: 152,
    translation: "فاذكروني أذكركم واشكروا لي ولا تكفرون",
    tafsir: "ذكر الله أعظم أسباب القرب منه. من ذكر الله في نفسه ذكره الله في ملأ خير، والشكر يزيد النعم."
  },
  {
    arabic: "سَيَجْعَلُ اللَّهُ بَعْدَ عُسْرٍ يُسْرًا",
    surah: "الطلاق",
    verse: 7,
    translation: "سيجعل الله بعد عسر يسراً",
    tafsir: "وعد مؤكد من الله بالفرج بعد الشدة. تأمل كلمة (سيجعل) فهي تدل على أن الفرج قادم لا محالة."
  },
  {
    arabic: "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ",
    surah: "الضحى",
    verse: 5,
    translation: "ولسوف يعطيك ربك فترضى",
    tafsir: "أعظم آية تطمئن القلب بوعد الله. العطاء الرباني آتٍ لا محالة، والرضا هو ثمرة اليقين."
  },
  {
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    surah: "البقرة",
    verse: 201,
    translation: "ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار",
    tafsir: "هذه أعظم دعوة جامعة، تجمع خير الدنيا والآخرة. كان النبي ﷺ يكثر من هذا الدعاء."
  },
  {
    arabic: "إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِنَ الْمُحْسِنِينَ",
    surah: "الأعراف",
    verse: 56,
    translation: "إن رحمة الله قريب من المحسنين",
    tafsir: "رحمة الله قريبة تنتظر المحسنين. الإحسان في العبادة والمعاملة طريق لنيل رحمة الله."
  },
  {
    arabic: "وَلَا تَيْأَسُوا مِنْ رَوْحِ اللَّهِ ۖ إِنَّهُ لَا يَيْأَسُ مِنْ رَوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ",
    surah: "يوسف",
    verse: 87,
    translation: "ولا تيأسوا من روح الله، إنه لا ييأس من روح الله إلا القوم الكافرون",
    tafsir: "اليأس من رحمة الله من كبائر الذنوب. مهما اشتدت المحن، فرج الله قريب، فلا تيأس."
  }
];

// ============================================================
// بيانات السور للمصحف
// ============================================================
function getUniqueSurahs() {
  const surahs = [];
  const seen = new Set();
  QURAN_DATA.forEach(item => {
    if (!seen.has(item.surah)) {
      seen.add(item.surah);
      surahs.push(item.surah);
    }
  });
  return surahs;
}

function getVersesBySurah(surahName) {
  return QURAN_DATA.filter(item => item.surah === surahName);
}

// ============================================================
// الأدوات المساعدة
// ============================================================
const Storage = {
  get(key, def = null) {
    try {
      const val = localStorage.getItem(`mehrab_${key}`);
      return val !== null ? JSON.parse(val) : def;
    } catch { return def; }
  },
  set(key, val) {
    try { localStorage.setItem(`mehrab_${key}`, JSON.stringify(val)); } catch {}
  },
  remove(key) {
    try { localStorage.removeItem(`mehrab_${key}`); } catch {}
  }
};

function showToast(message, type = 'gold') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.className = `toast ${type}`;
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function formatTime(date) {
  const h = date.getHours().toString().padStart(2, '0');
  const m = date.getMinutes().toString().padStart(2, '0');
  return `${h}:${m}`;
}

function formatHijri(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric', calendar: 'islamic-umalqura' };
  try {
    return new Intl.DateTimeFormat('ar-SA', options).format(date);
  } catch {
    return '';
  }
}

function getTodayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

// ============================================================
// وحدة التسبيح
// ============================================================
class Tasbih {
  constructor() {
    this.key = 'tasbih';
    this.state = Storage.get(this.key, { count: 0, goal: 100, date: getTodayKey() });
    this.el = {
      count: document.getElementById('tasbihCount'),
      progress: document.getElementById('tasbihProgress'),
      goalText: document.getElementById('tasbihGoalText'),
      goalInput: document.getElementById('tasbihGoalInput')
    };
    this.init();
  }

  init() {
    if (this.state.date !== getTodayKey()) {
      this.state.count = 0;
      this.state.date = getTodayKey();
      this.save();
    }
    this.render();
    this.setupEvents();
  }

  save() {
    Storage.set(this.key, this.state);
  }

  render() {
    if (this.el.count) {
      this.el.count.textContent = this.state.count.toLocaleString('ar-EG');
    }
    if (this.el.goalText) {
      const remaining = Math.max(0, this.state.goal - this.state.count);
      this.el.goalText.textContent = `الهدف: ${this.state.goal.toLocaleString('ar-EG')} | المتبقي: ${remaining.toLocaleString('ar-EG')}`;
    }
    if (this.el.goalInput) {
      this.el.goalInput.value = this.state.goal;
    }
    this.updateProgress();
  }

  updateProgress() {
    if (this.el.progress) {
      const pct = Math.min(100, (this.state.count / this.state.goal) * 100);
      this.el.progress.style.width = `${pct}%`;
    }
  }

  increment() {
    this.state.count++;
    this.save();
    this.render();
    if (this.el.count) {
      this.el.count.classList.remove('pop');
      void this.el.count.offsetWidth;
      this.el.count.classList.add('pop');
    }
    if (this.state.count >= this.state.goal && this.state.count - 1 < this.state.goal) {
      showToast('🎉 مبارك! لقد أكملت وردك اليومي', 'gold');
    }
  }

  reset() {
    this.state.count = 0;
    this.save();
    this.render();
  }

  setGoal(val) {
    const g = parseInt(val);
    if (g > 0 && g <= 99999) {
      this.state.goal = g;
      this.save();
      this.render();
    }
  }

  setupEvents() {
    const incBtn = document.getElementById('tasbihIncrement');
    const resetBtn = document.getElementById('tasbihReset');
    const goalInput = document.getElementById('tasbihGoalInput');
    const goalSet = document.getElementById('tasbihGoalSet');

    if (incBtn) incBtn.addEventListener('click', () => this.increment());
    if (resetBtn) resetBtn.addEventListener('click', () => this.reset());
    if (goalSet && goalInput) {
      goalSet.addEventListener('click', () => this.setGoal(goalInput.value));
      goalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.setGoal(goalInput.value);
      });
    }

    // Keyboard shortcut: Space to increment
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
      if (e.code === 'Space') {
        e.preventDefault();
        this.increment();
      }
    });
  }
}

// ============================================================
// وحدة المصحف
// ============================================================
class QuranViewer {
  constructor() {
    this.data = QURAN_DATA;
    this.surahs = getUniqueSurahs();
    this.currentSurahIndex = 0;
    this.currentVerseIndex = 0;
    this.bookmark = Storage.get('quran_bookmark', null);
    this.el = {
      select: document.getElementById('quranSurahSelect'),
      verseNum: document.getElementById('quranVerseNumber'),
      arabic: document.getElementById('quranAyahText'),
      translation: document.getElementById('quranTranslation'),
      prevBtn: document.getElementById('quranPrev'),
      nextBtn: document.getElementById('quranNext'),
      bookmarkBtn: document.getElementById('quranBookmark')
    };
    this.init();
  }

  init() {
    this.populateSelect();
    this.loadBookmark();
    this.render();
    this.setupEvents();
  }

  getVerses() {
    return getVersesBySurah(this.surahs[this.currentSurahIndex]);
  }

  populateSelect() {
    if (!this.el.select) return;
    this.el.select.innerHTML = '';
    this.surahs.forEach((surah, i) => {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = surah;
      this.el.select.appendChild(option);
    });
  }

  loadBookmark() {
    if (this.bookmark) {
      const si = this.surahs.indexOf(this.bookmark.surah);
      if (si >= 0) {
        this.currentSurahIndex = si;
        const verses = getVersesBySurah(this.bookmark.surah);
        const vi = verses.findIndex(v => v.verse === this.bookmark.verse);
        if (vi >= 0) this.currentVerseIndex = vi;
      }
    }
  }

  render() {
    const verses = this.getVerses();
    if (verses.length === 0) return;
    const verse = verses[this.currentVerseIndex];
    if (!verse) return;

    if (this.el.arabic) this.el.arabic.textContent = verse.arabic;
    if (this.el.translation) this.el.translation.textContent = verse.translation;
    if (this.el.verseNum) {
      this.el.verseNum.textContent = `${verse.surah} - الآية ${verse.verse}`;
    }
    if (this.el.select) {
      this.el.select.value = this.currentSurahIndex;
    }

    this.updateBookmarkUI();
  }

  updateBookmarkUI() {
    if (!this.el.bookmarkBtn) return;
    const verses = this.getVerses();
    const verse = verses[this.currentVerseIndex];
    if (!verse) return;

    const isBookmarked = this.bookmark &&
      this.bookmark.surah === verse.surah &&
      this.bookmark.verse === verse.verse;

    this.el.bookmarkBtn.classList.toggle('has-bookmark', !!isBookmarked);
    this.el.bookmarkBtn.innerHTML = isBookmarked
      ? '<span>🔖</span> تم الحفظ هنا'
      : '<span>🏷️</span> احفظ هذا الموضع';
  }

  goToVerse(surahIdx, verseIdx) {
    const verses = getVersesBySurah(this.surahs[surahIdx]);
    if (verseIdx >= 0 && verseIdx < verses.length) {
      this.currentSurahIndex = surahIdx;
      this.currentVerseIndex = verseIdx;
      this.render();
    }
  }

  nextVerse() {
    const verses = this.getVerses();
    if (this.currentVerseIndex < verses.length - 1) {
      this.currentVerseIndex++;
      this.render();
    } else if (this.currentSurahIndex < this.surahs.length - 1) {
      this.currentSurahIndex++;
      this.currentVerseIndex = 0;
      this.render();
    }
  }

  prevVerse() {
    if (this.currentVerseIndex > 0) {
      this.currentVerseIndex--;
      this.render();
    } else if (this.currentSurahIndex > 0) {
      this.currentSurahIndex--;
      const verses = getVersesBySurah(this.surahs[this.currentSurahIndex]);
      this.currentVerseIndex = verses.length - 1;
      this.render();
    }
  }

  toggleBookmark() {
    const verses = this.getVerses();
    const verse = verses[this.currentVerseIndex];
    if (!verse) return;

    if (this.bookmark &&
        this.bookmark.surah === verse.surah &&
        this.bookmark.verse === verse.verse) {
      this.bookmark = null;
      Storage.remove('quran_bookmark');
      showToast('تم إزالة الإشارة المرجعية', 'gold');
    } else {
      this.bookmark = { surah: verse.surah, verse: verse.verse };
      Storage.set('quran_bookmark', this.bookmark);
      showToast('تم حفظ الموقع! استأنف القراءة لاحقاً', 'gold');
    }
    this.updateBookmarkUI();
  }

  setupEvents() {
    if (this.el.prevBtn) this.el.prevBtn.addEventListener('click', () => this.prevVerse());
    if (this.el.nextBtn) this.el.nextBtn.addEventListener('click', () => this.nextVerse());
    if (this.el.bookmarkBtn) this.el.bookmarkBtn.addEventListener('click', () => this.toggleBookmark());
    if (this.el.select) {
      this.el.select.addEventListener('change', (e) => {
        this.currentSurahIndex = parseInt(e.target.value);
        this.currentVerseIndex = 0;
        this.render();
      });
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;
      if (e.key === 'ArrowRight') this.nextVerse();
      if (e.key === 'ArrowLeft') this.prevVerse();
    });
  }
}

// ============================================================
// وحدة آية اليوم
// ============================================================
class AyahOfDay {
  constructor() {
    this.data = AYAH_OF_DAY_DATA;
    this.todayKey = getTodayKey();
    this.lastShownDate = Storage.get('ayah_date', '');
    this.lastIndex = Storage.get('ayah_index', 0);
    this.currentIndex = 0;
    this.el = {
      arabic: document.getElementById('ayahArabic'),
      translation: document.getElementById('ayahTranslation'),
      reference: document.getElementById('ayahReference'),
      tafsir: document.getElementById('ayahTafsir'),
      refresh: document.getElementById('ayahRefresh')
    };
    this.init();
  }

  init() {
    if (this.lastShownDate !== this.todayKey) {
      // New day: pick a random ayah
      this.currentIndex = Math.floor(Math.random() * this.data.length);
      Storage.set('ayah_date', this.todayKey);
      Storage.set('ayah_index', this.currentIndex);
    } else {
      this.currentIndex = this.lastIndex;
      if (this.currentIndex >= this.data.length) this.currentIndex = 0;
    }
    this.render();
    this.setupEvents();
  }

  getRandomNew() {
    let idx;
    do {
      idx = Math.floor(Math.random() * this.data.length);
    } while (idx === this.currentIndex && this.data.length > 1);
    this.currentIndex = idx;
    Storage.set('ayah_index', this.currentIndex);
    this.render();
  }

  render() {
    const item = this.data[this.currentIndex];
    if (!item) return;

    if (this.el.arabic) this.el.arabic.textContent = item.arabic;
    if (this.el.translation) this.el.translation.textContent = item.translation;
    if (this.el.reference) this.el.reference.textContent = `سورة ${item.surah} - الآية ${item.verse}`;
    if (this.el.tafsir) this.el.tafsir.textContent = `📖 ${item.tafsir}`;
  }

  setupEvents() {
    if (this.el.refresh) {
      this.el.refresh.addEventListener('click', () => this.getRandomNew());
    }
  }
}

// ============================================================
// وحدة أوقات الصلاة
// ============================================================
class PrayerTimes {
  constructor() {
    this.location = Storage.get('prayer_location', null);
    this.times = null;
    this.nextPrayer = null;
    this.countdownInterval = null;
    this.el = {
      container: document.getElementById('prayerTimesContainer'),
      countdown: document.getElementById('prayerCountdown'),
      nextName: document.getElementById('prayerNextName'),
      timer: document.getElementById('prayerCountdownTimer'),
      location: document.getElementById('prayerLocation'),
      status: document.getElementById('prayerStatus'),
      refreshBtn: document.getElementById('prayerRefresh')
    };
    // Prayer names
    this.prayerNames = ['الفجر', 'الشروق', 'الظهر', 'العصر', 'المغرب', 'العشاء'];
    this.prayerKeys = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    this.init();
  }

  init() {
    if (this.el.refreshBtn) {
      this.el.refreshBtn.addEventListener('click', () => this.requestLocation());
    }
    if (this.location) {
      this.fetchTimes(this.location.lat, this.location.lon);
    } else {
      this.requestLocation();
    }
  }

  requestLocation() {
    if (this.el.status) {
      this.el.status.innerHTML = '<div class="spinner"></div><p style="text-align:center;color:var(--text-muted);">جاري تحديد موقعك...</p>';
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const loc = { lat: pos.coords.latitude, lon: pos.coords.longitude };
          this.location = loc;
          Storage.set('prayer_location', loc);
          this.fetchTimes(loc.lat, loc.lon);
        },
        (err) => {
          console.warn('Geolocation error:', err.message);
          this.useDefaultLocation();
        },
        { timeout: 10000, enableHighAccuracy: true }
      );
    } else {
      this.useDefaultLocation();
    }
  }

  useDefaultLocation() {
    // Default: Mecca
    const loc = { lat: 21.4225, lon: 39.8262 };
    this.location = loc;
    Storage.set('prayer_location', loc);
    this.fetchTimes(loc.lat, loc.lon);
  }

  async fetchTimes(lat, lon) {
    const method = 3; // Muslim World League
    const date = new Date();
    const dateStr = `${date.getFullYear()}-${(date.getMonth()+1).toString().padStart(2,'0')}-${date.getDate().toString().padStart(2,'0')}`;

    if (this.el.status) {
      this.el.status.innerHTML = '<div class="spinner"></div><p style="text-align:center;color:var(--text-muted);">جاري تحميل أوقات الصلاة...</p>';
    }

    try {
      const url = `https://api.aladhan.com/v1/timings/${dateStr}?latitude=${lat}&longitude=${lon}&method=${method}`;
      const resp = await fetch(url);
      const data = await resp.json();
      if (data.code === 200) {
        this.times = data.data.timings;
        this.renderTimes();
        this.startCountdown();
        if (this.el.status) {
          this.el.status.innerHTML = '';
        }
      } else {
        throw new Error('API error');
      }
    } catch (err) {
      console.error('Failed to fetch prayer times:', err);
      if (this.el.status) {
        this.el.status.innerHTML = '<p style="text-align:center;color:var(--accent-rose);">⚠️ تعذر تحميل أوقات الصلاة. حاول لاحقاً.</p>';
      }
    }
  }

  renderTimes() {
    if (!this.el.container || !this.times) return;

    this.el.container.innerHTML = '';
    this.prayerKeys.forEach((key, i) => {
      const time24 = this.times[key];
      if (!time24) return;

      // Convert to 12h format
      const [h, m] = time24.split(':').map(Number);
      const period = h >= 12 ? 'م' : 'ص';
      const h12 = h % 12 || 12;
      const timeStr = `${h12.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')} ${period}`;

      const div = document.createElement('div');
      div.className = 'prayer-item';
      div.dataset.prayerKey = key;
      div.innerHTML = `
        <div class="prayer-item-name">${this.prayerNames[i]}</div>
        <div class="prayer-item-time">${timeStr}</div>
      `;
      this.el.container.appendChild(div);
    });

    // Show location
    if (this.el.location && this.location) {
      this.el.location.textContent = `📍 ${this.location.lat.toFixed(2)}°N, ${this.location.lon.toFixed(2)}°E`;
    }
  }

  startCountdown() {
    if (this.countdownInterval) clearInterval(this.countdownInterval);
    this.updateCountdown();
    this.countdownInterval = setInterval(() => this.updateCountdown(), 1000);
  }

  updateCountdown() {
    if (!this.times || !this.el.timer || !this.el.nextName) return;

    const now = new Date();
    const today = `${now.getFullYear()}-${(now.getMonth()+1).toString().padStart(2,'0')}-${now.getDate().toString().padStart(2,'0')}`;

    let nextPrayer = null;
    let nextKey = null;
    let nextName = '';

    for (let i = 0; i < this.prayerKeys.length; i++) {
      const key = this.prayerKeys[i];
      const [h, m] = this.times[key].split(':').map(Number);
      const prayerTime = new Date(`${today}T${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:00`);

      if (prayerTime > now) {
        nextPrayer = prayerTime;
        nextKey = key;
        nextName = this.prayerNames[i];
        break;
      }
    }

    // If no next prayer today, get Fajr of tomorrow
    if (!nextPrayer) {
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowStr = `${tomorrow.getFullYear()}-${(tomorrow.getMonth()+1).toString().padStart(2,'0')}-${tomorrow.getDate().toString().padStart(2,'0')}`;
      const [fh, fm] = this.times[this.prayerKeys[0]].split(':').map(Number);
      nextPrayer = new Date(`${tomorrowStr}T${fh.toString().padStart(2,'0')}:${fm.toString().padStart(2,'0')}:00`);
      nextKey = this.prayerKeys[0];
      nextName = this.prayerNames[0] + ' (غداً)';
    }

    // Update active state
    const items = this.el.container?.querySelectorAll('.prayer-item');
    if (items) {
      items.forEach(item => {
        item.classList.toggle('active', item.dataset.prayerKey === nextKey);
      });
    }

    const diff = nextPrayer - now;
    if (diff <= 0) {
      this.el.timer.textContent = '--:--:--';
      return;
    }

    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    this.el.timer.textContent =
      `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`;
    this.el.nextName.textContent = nextName;
  }
}

// ============================================================
// وحدة عرض التاريخ
// ============================================================
class DateDisplay {
  constructor() {
    this.el = {
      gregorian: document.getElementById('dateGregorian'),
      hijri: document.getElementById('dateHijri')
    };
    this.init();
  }

  init() {
    this.update();
    setInterval(() => this.update(), 60000);
  }

  update() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    if (this.el.gregorian) {
      this.el.gregorian.textContent = now.toLocaleDateString('ar-SA', options);
    }
    if (this.el.hijri) {
      this.el.hijri.textContent = formatHijri(now);
    }
  }
}

// ============================================================
// تهيئة التطبيق
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  window.tasbih = new Tasbih();
  window.quran = new QuranViewer();
  window.ayah = new AyahOfDay();
  window.prayer = new PrayerTimes();
  window.dateDisplay = new DateDisplay();
});
