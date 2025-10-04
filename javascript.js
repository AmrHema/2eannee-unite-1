// 1. تعريف مصفوفة الكلمات (تم تحديثها بالكلمات من صورك المرفقة)
const vocabulary = [
    // أسماء مذكرة (Noms masculins)
    { french: "un vêtement", arabic: "ملبس", category: "أسماء مذكرة" },
    { french: "un look", arabic: "مظهر - هيئة", category: "أسماء مذكرة" },
    { french: "un uniforme", arabic: "زي موحد", category: "أسماء مذكرة" },
    { french: "un accessoire", arabic: "إكسسوار", category: "أسماء مذكرة" },
    { french: "un modèle", arabic: "نموذج / موديل", category: "أسماء مذكرة" },
    { french: "un magasin", arabic: "محل", category: "أسماء مذكرة" },
    { french: "un vendeur", arabic: "بائع", category: "أسماء مذكرة" },
    { french: "un animal", arabic: "حيوان", category: "أسماء مذكرة" },
    { french: "un homme", arabic: "رجل", category: "أسماء مذكرة" },
    { french: "un ado", arabic: "مراهق", category: "أسماء مذكرة" },
    { french: "un jeune", arabic: "شاب", category: "أسماء مذكرة" },
    { french: "un travail", arabic: "عمل", category: "أسماء مذكرة" },
    { french: "un site", arabic: "موقع", category: "أسماء مذكرة" },
    { french: "un client", arabic: "زبون", category: "أسماء مذكرة" },
    { french: "un enfant", arabic: "طفل", category: "أسماء مذكرة" },
    { french: "un club", arabic: "نادي", category: "أسماء مذكرة" },
    { french: "des motifs (vêtements)", arabic: "زخارف (رسوم على الملابس)", category: "أسماء مذكرة" },
    { french: "le prix", arabic: "السعر", category: "أسماء مذكرة" },

    // أسماء مؤنثة (Noms féminins)
    { french: "une tenue", arabic: "زي - ملبس", category: "أسماء مؤنثة" },
    { french: "une taille", arabic: "مقاس الملابس", category: "أسماء مؤنثة" },
    { french: "une valise", arabic: "حقيبة سفر", category: "أسماء مؤنثة" },
    { french: "la pointure", arabic: "مقاس الحذاء", category: "أسماء مؤنثة" },
    { french: "une femme", arabic: "إمرأة", category: "أسماء مؤنثة" },
    { french: "une fête", arabic: "حفلة", category: "أسماء مؤنثة" },
    { french: "une occasion", arabic: "مناسبة", category: "أسماء مؤنثة" },
    { french: "une chambre", arabic: "غرفة", category: "أسماء مؤنثة" },
    { french: "une différence", arabic: "إختلاف", category: "أسماء مؤنثة" },
    { french: "une chanson", arabic: "أغنية", category: "أسماء مؤنثة" },
    { french: "une enfant", arabic: "طفلة", category: "أسماء مؤنثة" },
    { french: "des chaussures", arabic: "حذاء", category: "أسماء مؤنثة" },
    { french: "des baskets", arabic: "حذاء رياضي", category: "أسماء مؤنثة" },
    { french: "des vacances", arabic: "إجازة", category: "أسماء مؤنثة" },

    // الملابس (les vêtements)
    { french: "un pantalon", arabic: "بنطلون", category: "الملابس" },
    { french: "un pull", arabic: "بلوفر", category: "الملابس" },
    { french: "un short", arabic: "شورت", category: "الملابس" },
    { french: "un anorak", arabic: "سترة بمظلة بغطاء للرأس", category: "الملابس" },
    { french: "un tee-shirt", arabic: "تي شيرت", category: "الملابس" },
    { french: "un jean", arabic: "بنطلون جينز", category: "الملابس" },
    { french: "un costume", arabic: "بذلة", category: "الملابس" },
    { french: "un survêtement", arabic: "بدلة رياضية (تريكو)", category: "الملابس" },
    { french: "un manteau", arabic: "معطف / بلطو", category: "الملابس" },
    { french: "un blouson", arabic: "جاكيت قصير", category: "الملابس" },
    { french: "un chemisier", arabic: "بلوزة (قميص للسيدات)", category: "الملابس" },
    { french: "un caleçon", arabic: "سروال داخلي / كلسون", category: "الملابس" },
    { french: "une robe", arabic: "فستان", category: "الملابس" },
    { french: "une jupe", arabic: "جيبة", category: "الملابس" },
    { french: "une chemise", arabic: "قميص", category: "الملابس" },
    { french: "une veste", arabic: "جاكيت", category: "الملابس" },
    { french: "des chaussettes (f)", arabic: "جورب", category: "الملابس" },

    // الإكسسوارات (Des accessoires)
    { french: "un chapeau", arabic: "قبعة", category: "إكسسوارات" },
    { french: "un bonnet", arabic: "طاقية", category: "إكسسوارات" },
    { french: "un sac", arabic: "حقيبة", category: "إكسسوارات" },
    { french: "un collier", arabic: "عقد", category: "إكسسوارات" },
    { french: "une casquette", arabic: "كاسكيت", category: "إكسسوارات" },
    { french: "une cravate", arabic: "كرافتة / رباط عنق", category: "إكسسوارات" },
    { french: "une écharpe", arabic: "إيشارب (لفاف عنق حريمي/رجالي)", category: "إكسسوارات" },
    { french: "des lunettes de soleil", arabic: "نظارة شمس", category: "إكسسوارات" },

    // الأفعال (Verbes)
    { french: "mettre", arabic: "يرتدي", category: "أفعال" },
    { french: "porter", arabic: "يرتدي", category: "أفعال" },
    { french: "s'habiller", arabic: "يرتدي", category: "أفعال" },
    { french: "acheter", arabic: "يشتري", category: "أفعال" },
    { french: "montrer", arabic: "يشير إلى", category: "أفعال" },
    { french: "connaître", arabic: "يعرف", category: "أفعال" },
    { french: "coûter", arabic: "يكلف", category: "أفعال" },
    { french: "lire", arabic: "يقرأ", category: "أفعال" },
    { french: "prendre", arabic: "يأخذ", category: "أفعال" },
    { french: "faire", arabic: "يفعل / يمارس", category: "أفعال" },
    { french: "aller", arabic: "يذهب", category: "أفعال" },
    { french: "sortir", arabic: "يخرج", category: "أفعال" },
    { french: "vendre", arabic: "يبيع", category: "أفعال" },
    { french: "vouloir", arabic: "يريد", category: "أفعال" },
    { french: "pouvoir", arabic: "يستطيع", category: "أفعال" },
    { french: "s'informer sur", arabic: "يستعلم عن", category: "أفعال" },

    // صفات وظروف (Adjectives & Adverbs)
    { french: "nouveau / nouvel", arabic: "جديد", category: "صفات / تعبيرات" },
    { french: "nouvelle", arabic: "جديدة", category: "صفات / تعبيرات" },
    { french: "pour", arabic: "من أجل / لكي", category: "صفات / تعبيرات" },
    { french: "à la mode", arabic: "على الموضة", category: "صفات / تعبيرات" },
    { french: "à fleurs", arabic: "مشجر", category: "صفات / تعبيرات" },
    { french: "à paillettes", arabic: "مزين بالترتر", category: "صفات / تعبيرات" },
    { french: "en voyage", arabic: "في رحلة سفر", category: "صفات / تعبيرات" },
    { french: "précis (e)", arabic: "محدد", category: "صفات / تعبيرات" },
    { french: "seulement", arabic: "فقط", category: "صفات / تعبيرات" },
    { french: "intéressant (e)", arabic: "شيّق", category: "صفات / تعبيرات" },
    { french: "très", arabic: "جداً", category: "صفات / تعبيرات" },
    { french: "faire du sport", arabic: "يمارس رياضة", category: "صفات / تعبيرات" },
    { french: "faire des achats", arabic: "يعمل مشتريات", category: "صفات / تعبيرات" },
    { french: "faire du shopping", arabic: "يتسوق", category: "صفات / تعبيرات" },
    { french: "partir en vacances", arabic: "يرحل في إجازة", category: "صفات / تعبيرات" },
    { french: "il fait beau", arabic: "الجو جميل", category: "صفات / تعبيرات" },
    { french: "il fait chaud", arabic: "الجو حار", category: "صفات / تعبيرات" },
    { french: "il fait froid", arabic: "الجو بارد", category: "صفات / تعبيرات" },

];

const cardsContainer = document.getElementById('cards-container');
const utterance = new SpeechSynthesisUtterance();

/**
 * دالة لتشغيل النطق الصوتي للكلمة الفرنسية
 * @param {string} textToSpeak - الكلمة الفرنسية المراد نطقها
 * @param {HTMLElement} cardElement - عنصر البطاقة لتطبيق تنسيق "جاري النطق"
 */
function speakFrenchWord(textToSpeak, cardElement) {
    if (!('speechSynthesis' in window)) {
        alert("عذراً، متصفحك لا يدعم ميزة النطق الصوتي (Speech Synthesis).");
        return;
    }

    // إيقاف أي نطق سابق
    window.speechSynthesis.cancel();
    
    // إعداد النطق
    utterance.text = textToSpeak;
    utterance.lang = 'fr-FR'; // تحديد اللغة الفرنسية
    utterance.rate = 1; // سرعة النطق
    
    // إضافة تنسيق "جاري النطق" عند البدء
    cardElement.classList.add('speaking');

    // إزالة تنسيق "جاري النطق" عند الانتهاء
    utterance.onend = () => {
        cardElement.classList.remove('speaking');
    };
    
    // إزالة التنسيق في حالة الإلغاء
    window.speechSynthesis.onvoiceschanged = () => {
        cardElement.classList.remove('speaking');
    };

    // تشغيل النطق
    window.speechSynthesis.speak(utterance);
}

/**
 * دالة لإنشاء بطاقة الكلمة وإضافتها إلى الصفحة
 */
function renderCards() {
    vocabulary.forEach(item => {
        // إنشاء عنصر البطاقة
        const card = document.createElement('div');
        card.classList.add('word-card');
        
        // بناء المحتوى الداخلي للبطاقة
        card.innerHTML = `
            <div class="french-word">${item.french}</div>
            <div class="arabic-translation"> (${item.category}) ${item.arabic}</div>
            <div class="pronounce-icon">🔊</div>
        `;
        
        // إضافة حدث النقر لتشغيل النطق
        card.addEventListener('click', () => {
            speakFrenchWord(item.french, card);
        });

        // إضافة البطاقة إلى الحاوية
        cardsContainer.appendChild(card);
    });
}

// تشغيل دالة إنشاء البطاقات عند تحميل الصفحة
window.onload = renderCards;