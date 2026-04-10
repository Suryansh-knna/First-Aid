const staticUI = {
  appTitle: { en: "Act First", hi: "एक्ट फर्स्ट", gu: "એક્ટ ફર્સ્ટ" },
  cameraAssistant: { en: "Scan for help", hi: "मदદ के लिए स्कैन करें", gu: "મદદ માટે સ્કેન કરો" },
  cameraDesc: { en: "Scan injury & available first aid kits", hi: "चोट और उपलब्ध प्राथमिक चिकित्सा किट स्कैन करें", gu: "ઇજા અને ઉપલબ્ધ પ્રાથમિક સારવાર કીટ્સ સ્કેન કરો" },
  placeholder: { en: "Search injuries...", hi: "चोटें खोजें...", gu: "ઇજાઓ શોધો..." },
  quickGuides: { en: "Quick Guides", hi: "त्वरित मार्गदर्शिका", gu: "ઝડપી માર્ગદર્શિકા" },
  categories: { en: "Categories", hi: "श्रेणियाँ", gu: "શ્રેણીઓ" },
  back: { en: "Back", hi: "वापस", gu: "પાછા" },
  scanInjuryStep: { en: "Step 1: Scan Injury", hi: "चरण 1: चोट को स्कैन करें", gu: "પગલું 1: ઇજાને સ્કેન કરો" },
  scanInjuryDesc: { en: "Use the camera to roughly show the affected area.", hi: "प्रभावित क्षेत्र को दिखाने के लिए कैमरे का उपयोग करें।", gu: "અસરગ્રસ્ત વિસ્તાર બતાવવા માટે કેમેરાનો ઉપયોગ કરો." },
  positionInFrame: { en: "Position injury in frame", hi: "चोट को फ्रेम में लाएं", gu: "ફ્રેમમાં ઇજાને ગોઠવો" },
  capture: { en: "Capture", hi: "कैप्चर करें", gu: "કેપ્ચર" },
  scanKitStep: { en: "Step 2: Scan First Aid Kit", hi: "चरण 2: फर्स्ट एड किट को स्कैन करें", gu: "पगલું 2: ફર્સ્ટ એઇડ કીટને સ્કેન કરો" },
  scanKitDesc: { en: "Show us what supplies you have available.", hi: "हमें दिखाएं कि आपके पास क्या आपूर्ति उपलब्ध है।", gu: "અમને બતાવો કે તમારી પાસે કઈ સામગ્રી ઉપલબ્ધ છે." },
  positionKitFrame: { en: "Position kit in frame", hi: "किट को फ्रेम में लाएं", gu: "કીટને ફ્રેમમાં ગોઠવો" },
  analyzing: { en: "Analyzing Situation...", hi: "स्थिति का विश्लेषण हो रहा है...", gu: "સ્થિતિનું વિશ્લેષણ થઈ રહ્યું છે..." },
  callEmergency: { en: "CALL 112", hi: "112 डायल करें", gu: "112 ડાયલ કરો" },
  severity: { en: "Severity", hi: "गंभीरता", gu: "ગંભીૂરતા" },
  disclaimer: { en: "This is first aid guidance. Call emergency services if needed.", hi: "यह प्राथमिक चिकित्सा मार्गदर्शन है। आवश्यकता पड़ने पर आपातकालीन सेवाओं को कॉल करें।", gu: "આ પ્રાથમિક સારવાર માર્ગદર્શન છે. જરૂરી હોય તો કટોકટી સેવાઓને કૉલ કરો." },
  noResults: { en: "No results found. Try another keyword.", hi: "कोई परिणाम नहीं मिला। कोई अन्य कीवर्ड आज़माएं।", gu: "કોઈ પરિણામ મળ્યું નથી. બીજો કીવર્ડ અજમાવો." },
  searchResults: { en: "Search Results", hi: "खोज के परिणाम", gu: "શોધનાં પરિણામો" },
  takePhoto: { en: "Take Photo", hi: "फोटो लें", gu: "ફોટો લો" },
  uploadPhoto: { en: "Upload Photo", hi: "फोटो अपलोड करें", gu: "ફોટો અપલોડ કરો" },
  orText: { en: "OR", hi: "या", gu: "અથવા" },
  noImageError: { en: "No image selected. Please try again.", hi: "कोई छवि नहीं चुनी गई। कृपया पुनः प्रयास करें।", gu: "કોઈ છબી પસંદ કરેલ નથી. કૃપા કરીને ફરી પ્રયાસ કરો." },
  invalidFormatError: { en: "Unsupported format. Please upload JPG or PNG.", hi: "असमर्थित प्रारूप। कृपया JPG या PNG अपलोड करें।", gu: "અસમર્થિત ફોર્મેટ. કૃપા કરીને JPG અથવા PNG અપલોડ કરો." },
  retake: { en: "Retake", hi: "फिर से लें", gu: "ફરીથી લો" },
  confirm: { en: "Confirm", hi: "पुष्टि करें", gu: "ખાતરી કરો" },
  analyzingImage: { en: "Analyzing image...", hi: "छवि का विश्लेषण हो रहा है...", gu: "છબીનું વિશ્લેષણ કરી રહ્યા છીએ..." },
  identifyingInjury: { en: "Identifying injury...", hi: "चोट की पहचान हो रही है...", gu: "ઇજાને ઓળખી રહ્યા છીએ..." },
  generatingSteps: { en: "Generating first aid steps...", hi: "प्राथमिक चिकित्सा चरण उत्पन्न हो रहे हैं...", gu: "પ્રાથમિક સારવારનાં પગલાં જનરેટ કરી રહ્યા છીએ..." },
  aiAssessment: { en: "AI Assessment", hi: "AI मूल्यांकन", gu: "AI આકારણી" },
  notAccurate: { en: "Not accurate? Select manually", hi: "सटीक नहीं है? मैन्युअल रूप से चुनें", gu: "ચોક્કસ નથી? જાતે પસંદ કરો" },
  matchingDatabase: { en: "Matching against reference database...", hi: "संदर्भ डेटाबेस के साथ मिलान हो रहा है...", gu: "સંદર્ભ ડેટાબેઝ સાથે મેચ કરી રહ્યા છીએ..." },
  unableToIdentify: { en: "Unable to identify injury. Please select manually.", hi: "चोट की पहचान करने में असमर्थ। कृपया मैन्युअल रूप से चुनें।", gu: "ઇજાને ઓળખવામાં અસમર્થ. કૃપા કરીને જાતે પસંદ કરો." },
  injuryDetected: { en: "🩸 Injury Detected", hi: "🩸 चोट की पहचान", gu: "🩸 ઇજાની ઓળખ" },
  kitDetectedLabel: { en: "🧰 First Aid Kit Detected", hi: "🧰 फर्स्ट एड किट की पहचान", gu: "🧰 ફર્સ્ટ એઇડ કીટની ઓળખ" },
  kitNotRecognized: { en: "First aid kit not recognized. Showing general instructions.", hi: "फर्स्ट एड किट की पहचान नहीं हुई। सामान्य निर्देश दिखाए जा रहे हैं।", gu: "ફર્સ્ટ એઇડ કીટ ઓળખાઈ નથી. સામાન્ય સૂચનાઓ બતાવવામાં આવી રહી છે." },
  itemsFromKit: { en: "🧾 Use These Items from Your Kit", hi: "🧾 अपनी किट से इन वस्तुओं का उपयोग करें", gu: "🧾 તમારી કીટમાંથી આ વસ્તુઓનો ઉપયોગ કરો" },
  stepsFromKit: { en: "📋 Step-by-Step First Aid", hi: "📋 चरण-दर-चरण प्राथमिक चिकित्सा", gu: "📋 પગલું-દર-પગલું પ્રાથમિક સારવાર" },
  standardKitAvailable: { en: "Standard first aid kit available", hi: "मानक प्राथमिक चिकित्सा किट उपलब्ध है", gu: "સ્ટાન્ડર્ડ ફર્સ્ટ એઇડ કીટ ઉપલબ્ધ છે" },
  kitScanPrompt: { en: "Injury identified. Now scan original first aid kit.", hi: "चोट की पहचान हो गई है। अब अपनी मूल प्राथमिक चिकित्सा किट को स्कैन करें.", gu: "ઇજાની ઓળખ થઈ ગઈ છે. હવે તમારી મૂળ પ્રાથમિક સારવાર કીટને સ્કેન કરો." },
  preparingGuidance: { en: "Preparing guidance...", hi: "मार्गदर्शन तैयार हो रहा है...", gu: "માર્ગદર્શન તૈયાર કરી રહ્યા છીએ..." },
  scanKitHelpSubtitle: { 
    en: "Scan for first aid kits, medicine cabinets, or individual medicines", 
    hi: "फर्स्ट एड किट, मेडिसिन कैबिनेट या दवाओं को स्कैन करें", 
    gu: "ફર્સ્ટ એઇડ કીટ, મેડિસિન કેબિનેટ અથવા દવાઓ સ્કેન કરો" 
  },
  scanHelperText: { 
    en: "Take clear photos of available supplies so we can guide you better", 
    hi: "उपलब्ध आपूर्ति की स्पष्ट तस्वीरें लें ताकि हम आपको बेहतर मार्गदर्शन दे सकें", 
    gu: "ઉપલબ્ધ વસ્તુઓના સ્પષ્ટ ફોટા લો જેથી અમે તમને વધુ સારું માર્ગદર્શન આપી શકીએ" 
  },
  howToScanTitle: { en: "How to scan properly", hi: "ठीक से स्कैन कैसे करें", gu: "યોગ્ય રીતે કેવી રીતે સ્કેન કરવું" },
  howToScanGuidelines: [
    { en: "Keep items clearly visible", hi: "वस्तुओं को स्पष्ट रूप से दिखाई देने दें", gu: "વસ્તુઓ સ્પષ્ટપણે દેખાય તેમ રાખો" },
    { en: "Avoid blurry or dark images", hi: "धुंधली या डार्क तस्वीरों से बचें", gu: "ઝાંખી અથવા અંધારાવાળી છબીઓ ટાળો" },
    { en: "Capture medicine names clearly", hi: "दवाओं के नाम स्पष्ट रूप से कैप्चर करें", gu: "દવાઓના નામ સ્પષ્ટપણે દેખાય તેમ ફોટો લો" },
    { en: "Include all supplies in one frame", hi: "सभी आपूर्ति को एक फ्रेम में शामिल करें", gu: "બધી વસ્તુઓ એક ફ્રેમમાં સમાવવાનો પ્રયાસ કરો" }
  ],
  noFirstAidButtonText: { en: "No first aid?", hi: "फर्स्ट एड नहीं है?", gu: "ફર્સ્ટ એઇડ નથી?" },
  noSuppliesLabel: { en: "No supplies mode", hi: "बिना आपूर्ति मोड", gu: "વસ્તુઓ વગરનો મોડ" },
  whatToDoNowTitle: { en: "What you can do right now", hi: "अभी आप क्या कर सकते हैं", gu: "તમે અત્યારે શું કરી શકો" },
  recommendedItemsTitle: { en: "Recommended items to get", hi: "प्राप्त करने के लिए अनुशंसित वस्तुएं", gu: "મેળવવા માટે જરૂરી વસ્તુઓ" },
  afterGettingSuppliesTitle: { en: "When you have supplies", hi: "जब आपके पास आपूर्ति हो", gu: "જ્યારે તમારી પાસે વસ્તુઓ હોય" },
  safetyNoteTitle: { en: "Safety Note", hi: "सुरक्षा नोट", gu: "સુરક્ષા નોંધ" },
  safetyNoteText: { 
    en: "If symptoms worsen, seek medical help immediately", 
    hi: "यदि लक्षण बिगड़ते हैं, तो तुरंत चिकित्सा सहायता लें", 
    gu: "જો લક્ષણો વધુ ખરાબ થાય, તો તરત જ તબીબી મદદ મેળવો" 
  }
};

const firstAidData = {
  "bleeding_cuts": {
    id: "bleeding_cuts",
    title: { en: "Bleeding & Cuts", hi: "खून बहना और कट", gu: "રક્તસ્રાવ અને કાપા" },
    icon: "droplet",
    color: "#ef4444",
    groups: [
      {
        title: { en: "Open Wounds", hi: "खुले घाव", gu: "ખુલ્લા ઘા" },
        items: ["minor_cuts", "deep_cuts", "heavy_bleeding"]
      },
      {
        title: { en: "Specific Bleeding Cases", hi: "विशेष रक्तस्राव मामले", gu: "ચોક્કસ રક્તસ્રાવ કિસ્સાઓ" },
        items: ["nosebleed", "puncture_wounds"]
      },
      {
        title: { en: "Surface Injuries", hi: "सतह की चोटें", gu: "સપાટીની ઇજાઓ" },
        items: ["bruises", "blisters", "minor_knee_scrape"]
      }
    ],
    subcategories: {
      "minor_cuts": {
        id: "minor_cuts",
        title: { en: "Minor cuts & scrapes", hi: "मामूली कट और खरोंच", gu: "નાના કાપા અને ઉઝરડા" },
        severity: "Low",
        customIcon: "assets/icons/minor_cuts.png",
        steps: [
          { en: "Clean wound with water", hi: "घाव को पानी से साफ करें", gu: "જખમને પાણીથી સાફ કરો" },
          { en: "Apply antiseptic", hi: "एंटीसेप्टिक लगाएं", gu: "એન્ટિસેપ્ટિક લગાવો" },
          { en: "Cover with bandage", hi: "पट्टी से ढकें", gu: "પાટાથી ઢાંકી દો" }
        ]
      },
      "deep_cuts": {
        id: "deep_cuts",
        title: { en: "Deep cuts", hi: "गहरे कट", gu: "ઊંડા કાપા" },
        severity: "Severe",
        customIcon: "assets/icons/deep_cuts.png",
        steps: [
          { en: "Apply firm pressure", hi: "मजबूती से दबाव डालें", gu: "મજબૂત દબાણ આપો" },
          { en: "Elevate injured area", hi: "घायल हिस्से को ऊपर उठाएं", gu: "ઇજાગ્રસ્ત ભાગને ઊંચો કરો" },
          { en: "Cover with clean cloth", hi: "साफ कपड़े से ढकें", gu: "સ્વચ્છ કપડાથી ઢાંકો" }
        ]
      },
      "heavy_bleeding": {
        id: "heavy_bleeding",
        title: { en: "Heavy bleeding", hi: "भारी रक्तस्राव", gu: "ભારે રક્તસ્રાવ" },
        severity: "Severe",
        customIcon: "assets/icons/heavy_bleeding.png",
        steps: [
          { en: "Apply strong pressure immediately", hi: "तुरंत मजबूत दबाव डालें", gu: "તરત જ મજબૂત દબાણ આપો" },
          { en: "Keep person still", hi: "व्यक्ति को स्थिर रखें", gu: "વ્યક્તિને સ્થિર રાખો" },
          { en: "Seek emergency help", hi: "आपातकालीन मदद लें", gu: "કટોકટી મદદ મેળવો" }
        ]
      },
      "puncture_wounds": {
        id: "puncture_wounds",
        title: { en: "Puncture wounds", hi: "पंक्चर के घाव", gu: "પંચરનાં ઘા" },
        severity: "Moderate",
        customIcon: "assets/icons/puncture_wounds.png",
        steps: [
          { en: "Clean wound carefully", hi: "घाव को सावधानी से साफ करें", gu: "જખમને સાવધાનીથી સાફ કરો" },
          { en: "Stop bleeding", hi: "खून बहना रोकें", gu: "લોહી  વહેતું અટકાવો" },
          { en: "Seek medical help if deep", hi: "अगर घाव गहरा है तो चिकित्सीय मदद लें", gu: "જો ઘા ઊંડો હોય તો તબીબી મદદ મેળવો" }
        ]
      },
      "nosebleed": {
        id: "nosebleed",
        title: { en: "Nosebleed", hi: "नकसीर", gu: "નસકોરી ફૂટવી" },
        severity: "Low",
        customIcon: "assets/icons/nosebleed.png",
        steps: [
          { en: "Sit upright", hi: "सीधे बैठें", gu: "સીધા બેસો" },
          { en: "Lean forward", hi: "आगे की ओर झुकें", gu: "આગળ ઝુકો" },
          { en: "Pinch nose", hi: "नाक को दबाएं", gu: "નાક દબાવો" }
        ]
      },
      "bruises": {
        id: "bruises",
        title: { en: "Bruises", hi: "चोट के निशान", gu: "ઉઝરડા" },
        severity: "Low",
        customIcon: "assets/icons/bruises.png",
        steps: [
          { en: "Apply cold compress", hi: "ठंडा सेक लगाएं", gu: "ઠંડો શેક લગાવો" },
          { en: "Rest area", hi: "घायल हिस्से को आराम दें", gu: "વિસ્તારને આરામ આપો" }
        ]
      },
      "blisters": {
        id: "blisters",
        title: { en: "Blisters", hi: "छाले", gu: "ફોલ્લા" },
        severity: "Low",
        customIcon: "assets/icons/blisters.png",
        steps: [
          { en: "Do not burst", hi: "फोड़ें नहीं", gu: "ફોડશો નહીં" },
          { en: "Keep clean and covered", hi: "साफ और ढका हुआ रखें", gu: "સ્વચ્છ અને ઢાંકેલું રાખો" }
        ]
      },
      "minor_knee_scrape": {
        id: "minor_knee_scrape",
        title: { en: "Minor knee scrape (abrasion)", hi: "घुटने की हल्की रगड़ (Abrasion)", gu: "ઘૂંટણની સામાન્ય છોલા (Abrasion)" },
        severity: "Mild",
        kit_items: {
          en: "Clean cloth / gauze, Antiseptic cream, Bandage",
          hi: "साफ कपड़ा / धुंध, एंटीसेप्टिक क्रीम, पट्टी",
          gu: "ચોખ્ખું કપડું / જાળીદાર કાપડ, એન્ટિસેપ્ટિક ક્રીમ, પાટો"
        },
        steps: [
          { en: "Clean the wound using clean water and gauze", hi: "साफ पानी और धुंध का उपयोग करके घाव को साफ करें", gu: "ચોખ્ખા પાણી અને જાળીદાર કાપડનો ઉપયોગ કરીને ઘા સાફ કરો" },
          { en: "Gently remove dirt (do not scrub harshly)", hi: "धीरे से गंदगी हटाएं (तेजी से न रगड़ें)", gu: "ધીમેથી ગંદકી દૂર કરો (જોરથી ઘસશો નહીં)" },
          { en: "Apply antiseptic cream from the kit", hi: "किट में दी गई एंटीसेप्टिक क्रीम लगाएं", gu: "કીટમાંથી એન્ટિસેપ્ટિક ક્રીમ લગાવો" },
          { en: "Cover with sterile gauze or bandage", hi: "स्टेराइल धुंध या पट्टी से ढकें", gu: "જંતુરહિત જાળીદાર કાપડ અથવા પાટા વડે ઢાંકવું" },
          { en: "Secure with tape or wrap", hi: "टेप या रैપ से सुरक्षित करें", gu: "ટેપ અથવા રેપ વડે સુરક્ષિત કરો" },
          { en: "Keep clean and change dressing daily", hi: "साफ रखें और ड्रेसिंग रोज बदलें", gu: "ચોખ્ખું રાખો અને દરરોજ પાટો બદલો" }
        ],
        emergency_help: {
          en: "🚨 When to Seek Help\n- If swelling increases\n- If pus forms\n- If pain worsens",
          hi: "🚨 मदद कब लें\n- यदि सूजन बढ़ जाती है\n- यदि मवाद (pus) बनता है\n- यदि दर्द बढ़ जाता है",
          gu: "🚨 ક્યારે મદદ લેવી\n- જો સોજો વધે\n- જો પરૂ (pus) થાય\n- જો દુખાવો વધે"
        },
        noSuppliesMode: {
          immediate: [
            { en: "Rinse wound with clean water", hi: "घाव को साफ पानी से धोएं", gu: "ઘાને ચોખ્ખા પાણીથી ધોઈ લો" },
            { en: "Remove visible dirt gently", hi: "धीरे से दिखाई देने वाली गंदगी हटाएं", gu: "દેખાતી ગંદકી ધીમેથી દૂર કરો" },
            { en: "Let it air dry", hi: "इसे हवा में सूखने दें", gu: "તેને હવામાં સૂકાવા દો" },
            { en: "Avoid touching with dirty hands", hi: "गंदे हाथों से छूने से बचें", gu: "ગંદા હાથે સ્પર્શ કરવાનું ટાળો" }
          ],
          getToGet: [
            { en: "Antiseptic liquid", hi: "एंटीसेप्टिक लिक्विड", gu: "એન્ટિસેપ્ટિક પ્રવાહી" },
            { en: "Cotton or sterile gauze", hi: "रुई या स्टेरिल गेज", gu: "કપાસ અથવા જંતુરહિત જાળી" },
            { en: "Adhesive bandages", hi: "बैंड-एड/पट्टियाँ", gu: "એડહેસિવ પાટા (બેન્ડ-એઇડ)" },
            { en: "Antibiotic ointment", hi: "एंटीबायोटिक मलहम", gu: "એન્ટીબાયોટીક મલમ" }
          ],
          afterSupplies: [
            { en: "Clean wound with antiseptic", hi: "एंटीसेप्टिक से घाव को साफ करें", gu: "એન્ટિસેપ્ટિકથી ઘા સાફ કરો" },
            { en: "Apply ointment", hi: "मलहम लगाएं", gu: "મલમ લગાવો" },
            { en: "Cover with bandage", hi: "पट्टी से ढके", gu: "પાટા વડે ઢાંકો" },
            { en: "Replace daily", hi: "रोजाना बदलें", gu: "દરરોજ બદલો" }
          ]
        }
      }
    }
  },
  "burns": {
    id: "burns",
    title: { en: "Burns", hi: "जलना", gu: "દાઝવું" },
    icon: "flame",
    color: "#f59e0b",
    groups: [
      {
        title: { en: "By Severity", hi: "गंभीरता के अनुसार", gu: "ગંભીરતા મુજબ" },
        items: ["minor_burns", "severe_burns"]
      },
      {
        title: { en: "By Cause", hi: "कारण के अनुसार", gu: "કારણ મુજબ" },
        items: ["scalds", "electrical_burns", "chemical_burns", "sunburn"]
      }
    ],
    subcategories: {
      "minor_burns": {
        id: "minor_burns",
        title: { en: "Minor burns", hi: "मामूली जलन", gu: "સામાન્ય દાઝવું" },
        severity: "Low",
        customIcon: "assets/icons/minor_burns.png",
        steps: [
          { en: "Cool under running water (10–15 mins)", hi: "बहते पानी के नीचे (10-15 मिनट) ठंडा करें", gu: "વહેતા પાણી નીચે (૧૦-૧૫ મિનિટ) ઠંડુ કરો" },
          { en: "Cover loosely", hi: "हल्के से ढकें", gu: "હળવાશથી ઢાંકો" }
        ]
      },
      "severe_burns": {
        id: "severe_burns",
        title: { en: "Severe burns", hi: "गंभीर जलन", gu: "ગંભીર દાઝવું" },
        severity: "Severe",
        customIcon: "assets/icons/severe_burns.png",
        steps: [
          { en: "Cover with clean cloth", hi: "साफ कपड़े से ढकें", gu: "સ્વચ્છ કપડાથી ઢાંકો" },
          { en: "Do not apply substances", hi: "कोई क्रीम या मलहम न लगाएं", gu: "કોઈ ક્રીમ કે મલમ ન લગાવો" },
          { en: "Seek emergency help", hi: "आपातकालीन सहायता मांगें", gu: "કટોકટી મદદ મેળવો" }
        ]
      },
      "scalds": {
        id: "scalds",
        title: { en: "Scalds", hi: "गर्म तरल से जलना", gu: "ગરમ પ્રવાહી થી દાઝવું" },
        severity: "Moderate",
        customIcon: "assets/icons/scalds.png",
        steps: [
          { en: "Cool immediately with water", hi: "तुरंत पानी से ठंडा करें", gu: "તરત જ પાણીથી ઠંડુ કરો" },
          { en: "Remove tight items", hi: "तंग चीजें हटा दें", gu: "ચુસ્ત વસ્તુઓ કાઢી નાખો" }
        ]
      },
      "electrical_burns": {
        id: "electrical_burns",
        title: { en: "Electrical burns", hi: "बिजली से जलना", gu: "વીજળીથી દાઝવું" },
        severity: "Severe",
        steps: [
          { en: "Turn off power source", hi: "बिजली का स्रोत बंद करें", gu: "પાવર સ્ત્રોત બંધ કરો" },
          { en: "Do not touch directly", hi: "सीधे न छुएं", gu: "સીધો સંપર્ક ન કરો" },
          { en: "Seek medical help", hi: "चिकित्सीय मदद लें", gu: "તબીબી મદદ મેળવો" }
        ]
      },
      "chemical_burns": {
        id: "chemical_burns",
        title: { en: "Chemical burns", hi: "रासायनिक जलन", gu: "રાસાયણિક દાઝવું" },
        severity: "Severe",
        customIcon: "assets/icons/chemical_burns.png",
        steps: [
          { en: "Rinse with water continuously", hi: "लगातार पानी से धोते रहें", gu: "સતત પાણીથી ધોતા રહો" },
          { en: "Do not apply chemicals", hi: "रसायनों का प्रयोग न करें", gu: "રસાયણો ન લગાવો" }
        ]
      },
      "sunburn": {
        id: "sunburn",
        title: { en: "Sunburn", hi: "धूप से जलना", gu: "સનબર્ન" },
        severity: "Low",
        customIcon: "assets/icons/sunburn.png",
        steps: [
          { en: "Cool skin", hi: "त्वचा को ठंडा करें", gu: "ત્વચા ઠંડી કરો" },
          { en: "Hydrate", hi: "हाइड्रेट रहें", gu: "હાઇડ્રેટ રહો" },
          { en: "Avoid sun", hi: "धूप से बचें", gu: "તડકો ટાળો" }
        ]
      }
    }
  },
  "fractures": {
    id: "fractures",
    title: { en: "Fractures & Sprains", hi: "हड्डी टूटना और मोच", gu: "અસ્થિભંગ અને મચકોડ" },
    icon: "activity",
    color: "#8b5cf6",
    groups: [
      {
        title: { en: "Bone Injuries", hi: "हड्डी की चोटें", gu: "હાડકાની ઇજાઓ" },
        items: ["fractures_sub", "dislocations"]
      },
      {
        title: { en: "Soft Tissue Injuries", hi: "कोमल ऊतक चोटें", gu: "નરમ પેશીઓની ઇજાઓ" },
        items: ["sprains", "strains"]
      }
    ],
    subcategories: {
      "fractures_sub": {
        id: "fractures_sub",
        title: { en: "Fractures", hi: "हड्डी टूटना", gu: "અસ્થિભંગ" },
        severity: "Severe",
        customIcon: "assets/icons/fractures_sub.png",
        steps: [
          { en: "Immobilize area", hi: "प्रभावित हिस्से को स्थिर करें", gu: "અસરગ્રસ્ત ભાગને સ્થિર કરો" },
          { en: "Avoid movement", hi: "हिलने-डुलने से बचें", gu: "હલનચલન ટાળો" },
          { en: "Seek medical help", hi: "चिकित्सीय मदद लें", gu: "તબીબી મદદ મેળવો" }
        ]
      },
      "sprains": {
        id: "sprains",
        title: { en: "Sprains", hi: "मोच", gu: "મચકોડ" },
        severity: "Moderate",
        customIcon: "assets/icons/sprains.png",
        steps: [
          { en: "Rest", hi: "आराम", gu: "આરામ" },
          { en: "Ice", hi: "बर्फ लगाएं", gu: "બરફ લગાવો" },
          { en: "Compression", hi: "दબાવ", gu: "દબાણ" },
          { en: "Elevation", hi: "ऊपर उठाएं", gu: "ઉપર રાખો" }
        ]
      },
      "strains": {
        id: "strains",
        title: { en: "Strains", hi: "खिंचाव", gu: "ખેંચાણ" },
        severity: "Low",
        customIcon: "assets/icons/strains.png",
        steps: [
          { en: "Rest muscle", hi: "मांसपेशियों को आराम दें", gu: "સ્નાયુઓને આરામ આપો" },
          { en: "Apply ice", hi: "बर्फ लगाएं", gu: "બરફ લગાવો" }
        ]
      },
      "dislocations": {
        id: "dislocations",
        title: { en: "Dislocations", hi: "जोड़ खिसकना", gu: "સાંધાનું ખસી જવું" },
        severity: "Severe",
        customIcon: "assets/icons/dislocations.png",
        steps: [
          { en: "Do not move joint", hi: "जोड़ को हिलाएं नहीं", gu: "સાંધાને હલાવશો નહીં" },
          { en: "Immobilize", hi: "स्थिर करें", gu: "સ્થિર કરો" },
          { en: "Seek help", hi: "मदद लें", gu: "મદદ મેળવો" }
        ]
      }
    }
  },
  "breathing": {
    id: "breathing",
    title: { en: "Breathing Problems", hi: "सांस की समस्या", gu: "શ્વાસની સમસ્યાઓ" },
    icon: "wind",
    color: "#06b6d4",
    groups: [
      {
        title: { en: "Airway Blockage", hi: "वायुमार्ग अवरोध", gu: "વાયુમાર્ગમાં અવરોધ" },
        items: ["choking_adult", "choking_child"]
      },
      {
        title: { en: "Breathing Failure", hi: "सांस की विफलता", gu: "શ્વાસ લેવામાં નિષ્ફળતા" },
        items: ["cpr"]
      },
      {
        title: { en: "Breathing Distress", hi: "सांस लेने में तकलीफ", gu: "શ્વાસ લેવામાં તકલીફ" },
        items: ["breathing_difficulty"]
      },
      {
        title: { en: "Environmental Causes", hi: "पर्यावरणीय कारण", gu: "પર્યાવરણીય કારણો" },
        items: ["smoke_inhalation", "gas_exposure"]
      }
    ],
    subcategories: {
      "choking_adult": {
        id: "choking_adult",
        title: { en: "Choking (adult)", hi: "दम घुटना (वयस्क)", gu: "ગૂંગળામણ (પુખ્ત)" },
        severity: "Severe",
        customIcon: "assets/icons/choking_adult.png",
        steps: [
          { en: "Perform abdominal thrusts", hi: "पेट पर दबाव डालें", gu: "પેટ પર દબાણ કરો" }
        ]
      },
      "choking_child": {
        id: "choking_child",
        title: { en: "Choking (child)", hi: "दम घुटना (बच्चा)", gu: "ગૂંગળામણ (બાળક)" },
        severity: "Severe",
        customIcon: "assets/icons/choking_child.png",
        steps: [
          { en: "Give back blows", hi: "पीठ पर थपथपाएं", gu: "પીઠ પર થપથપાવો" }
        ]
      },
      "cpr": {
        id: "cpr",
        title: { en: "Not breathing / CPR", hi: "सांस नहीं आना / सीपीआर", gu: "શ્વાસ ન આવવો / સીપીઆર" },
        severity: "Severe",
        customIcon: "assets/icons/cpr.png",
        steps: [
          { en: "Start chest compressions", hi: "छाती को दबाना शुरू करें", gu: "છાતી દબાવવાનું શરૂ કરો" },
          { en: "Call emergency services", hi: "आपातकालीन सेवाओं को कॉल करें", gu: "કટોકટી સેવાઓને કૉલ કરો" }
        ]
      },
      "breathing_difficulty": {
        id: "breathing_difficulty",
        title: { en: "Breathing difficulty", hi: "सांस लेने में कठिनाई", gu: "શ્વાસ લેવામાં તકલીફ" },
        severity: "Moderate",
        customIcon: "assets/icons/breathing_difficulty.png",
        steps: [
          { en: "Help sit upright", hi: "सीधे बैठने में मदद करें", gu: "સીધા બેસવામાં મદદ કરો" },
          { en: "Loosen clothing", hi: "कपड़े ढीले करें", gu: "કપડાં ઢીલા કરો" }
        ]
      },
      "smoke_inhalation": {
        id: "smoke_inhalation",
        title: { en: "Smoke inhalation", hi: "धुआं अंदर जाना", gu: "ધુમાડો શ્વાસમાં જવો" },
        severity: "Severe",
        customIcon: "assets/icons/smoke_inhalation.png",
        steps: [
          { en: "Move to fresh air", hi: "ताजी हवा में जाएं", gu: "તાજી હવામાં જાવ" },
          { en: "Monitor breathing", hi: "सांसों पर नजर रखें", gu: "શ્વાસ પર નજર રાખો" }
        ]
      },
      "gas_exposure": {
        id: "gas_exposure",
        title: { en: "Gas exposure", hi: "गैस के संपर्क में आना", gu: "ગેસના સંપર્કમાં આવવું" },
        severity: "Severe",
        customIcon: "assets/icons/gas_exposure.png",
        steps: [
          { en: "Move to fresh air immediately", hi: "तुरंत ताजी हवा में जाएं", gu: "તરત જ તાજી હવામાં જાવ" },
          { en: "Avoid sparks", hi: "चिंगारी से बचें", gu: "તણખા ટાળો" }
        ]
      }
    }
  },
  "head": {
    id: "head",
    title: { en: "Head Injury", hi: "सिर की चोट", gu: "માથામાં ઇજા" },
    icon: "brain",
    color: "#ec4899",
    groups: [
      {
        title: { en: "Trauma Levels", hi: "आघात का स्तर", gu: "આઘાતનું સ્તર" },
        items: ["mild_head", "head_bruise", "severe_head", "face_bruise"]
      },
      {
        title: { en: "Brain-related Conditions", hi: "मस्तिष्क संबंधी स्थितियां", gu: "મગજ સંબંધિત સ્થિતિઓ" },
        items: ["concussion", "seizures"]
      },
      {
        title: { en: "Consciousness", hi: "चेतना", gu: "ચેતના" },
        items: ["unconscious"]
      }
    ],
    subcategories: {
      "mild_head": {
        id: "mild_head",
        title: { en: "Mild head injury", hi: "सिर की मामूली चोट", gu: "માથાની સામાન્ય ઇજા" },
        severity: "Low",
        customIcon: "assets/icons/mild_head.png",
        steps: [
          { en: "Keep person still", hi: "व्यक्ति को स्थिर रखें", gu: "વ્યક્તિને સ્થિર રાખો" },
          { en: "Monitor symptoms", hi: "लक्षणों पर नज़र रखें", gu: "લક્ષણો પર નજર રાખો" }
        ]
      },
      "head_bruise": {
        id: "head_bruise",
        title: { en: "Head Bruise", hi: "सिर पर नील/चोट", gu: "માથામાં ઉઝરડો" },
        severity: "Moderate",
        kit_items: {
          en: "Cold pack, Paracetamol, Clean cloth",
          hi: "कोल्ड पैक, पैरासिटामोल, साफ कपड़ा",
          gu: "કોલ્ડ પેક, પેરાસીટામોલ, ચોખ્ખું કપડું"
        },
        steps: [
          { en: "Apply cold compress", hi: "ठंडा सेक लगाएं", gu: "ઠંડો શેક લગાવો" },
          { en: "Rest and avoid movement", hi: "आराम करें और हिलने-डुलने से बचें", gu: "આરામ કરો અને હલનચલન ટાળો" }
        ],
        emergency_help: {
          en: "🚨 When to Seek Help\n- Monitor for dizziness or vomiting\n- If pain becomes severe\n- Loss of consciousness",
          hi: "🚨 मदद कब लें\n- चक्कर आने या उल्टी होने पर नज़र रखें\n- यदि दर्द गंभीर हो जाए\n- बेहोशी",
          gu: "🚨 ક્યારે મદદ લેવી\n- ચક્કર અથવા ઉલટી થાય છે કે કેમ તે તપાસતા રહો\n- જો દુખાવો અસહ્ય થઈ જાય\n- બેભાન થઈ જવું"
        },
        noSuppliesMode: {
          immediate: [
            { en: "Apply cold compress (cloth + cold water)", hi: "ठंडा सेक लगाएं (कपड़ा + ठंडा पानी)", gu: "ઠંડો શેક લગાવો (કપડું + ઠંડુ પાણી)" },
            { en: "Rest and avoid movement", hi: "आराम करें और हिलने-डुलने से बचें", gu: "આરામ કરો અને હલનચલન ટાળો" },
            { en: "Monitor for dizziness or vomiting", hi: "चक्कर आने या उल्टी होने पर नज़र रखें", gu: "ચક્કર અથવા ઉલટી થાય છે કે કેમ તે તપાસતા રહો" }
          ],
          getToGet: [
            { en: "Instant cold pack", hi: "इंस्टेंट कोल्ड पैक", gu: "ઇંસ્ટન્ટ કોલ્ડ પેક" },
            { en: "Paracetamol (pain relief)", hi: "पैरासिटामोल (दर्द निवारक)", gu: "પેરાસીટામોલ (દુખાવાની રાહત માટે)" },
            { en: "Clean cloth or gauze", hi: "साफ कपड़ा या गेज", gu: "ચોખ્ખું કપડું અથવા જાળી" }
          ],
          afterSupplies: [
            { en: "Apply cold pack for 10–15 minutes", hi: "10-15 मिनट के लिए कोल्ड पैक लगाएं", gu: "૧૦-૧૫ મિનિટ માટે કોલ્ડ પેક લગાવો" },
            { en: "Take pain relief if needed", hi: "जरूरत पड़ने पर दर्द निवारक दवा लें", gu: "જરૂર પડે તો દુખાવાની દવા લો" },
            { en: "Rest and monitor symptoms", hi: "आराम करें और लक्षणों पर नजर रखें", gu: "આરામ કરો અને લક્ષણો તપાસતા રહો" }
          ]
        }
      },
      "face_bruise": {
        id: "face_bruise",
        title: { en: "Face Bruise (Facial Abrasion)", hi: "चेहरे की खरोंच (Abrasion)", gu: "ચહેરા પર ઉઝરડો (Abrasion)" },
        severity: "Mild",
        kit_items: {
          en: "Clean cloth / gauze, Antiseptic cream, Bandage",
          hi: "साफ कपड़ा / धुंध, एंटीसेप्टिक क्रीम, पट्टी",
          gu: "ચોખ્ખું કપડું / જાળીદાર કાપડ, એન્ટિસેપ્ટિક ક્રીમ, પાટો"
        },
        steps: [
          { en: "Gently clean the area using clean water and gauze", hi: "साफ पानी और धुंध (gauze) का उपयोग करके क्षेत्र को धीरे से साफ करें", gu: "ચોખ્ખા પાણી અને જાળીદાર કાપડનો ઉપયોગ કરીને વિસ્તારને ધીમેથી સાફ કરો" },
          { en: "Do NOT scrub the skin", hi: "त्वचा को रगड़ें नहीं", gu: "ત્વચા પર ઘસશો નહીં" },
          { en: "Apply antiseptic solution carefully", hi: "सावधानी से एंटीसेप्टिक घोल लगाएं", gu: "સાવાધાનીપૂર્વક એન્ટિસેપ્ટિક સોલ્યુશન લગાવો" },
          { en: "Leave wound open or cover lightly with sterile gauze", hi: "घाव को खुला छोड़ दें या स्टेराइल धुंध (gauze) से हल्का ढंक दें", gu: "ઘાને ખુલ્લો રાખો અથવા જંતુરહિત જાળીદાર કાપડથી હળવાશથી ઢાંકો" },
          { en: "Apply cold compress (wrapped cloth) to reduce swelling", hi: "सूजन कम करने के लिए ठंडा सेक (लपेटे हुए कपड़े) लगाएं", gu: "સોજો ઘટાડવા માટે ઠંડો શેક (લપેટેલા કપડાં) લગાવો" },
          { en: "Keep area clean and avoid touching", hi: "क्षेत्र को साफ रखें और छूने से बचें", gu: "વિસ્તાર સ્વચ્છ રાખો અને સ્પર્શ કરવાનું ટાળો" }
        ],
        emergency_help: {
          en: "🚨 When to Seek Help\n- Increasing redness or swelling\n- Pus or signs of infection\n- Injury near eye affecting vision",
          hi: "🚨 मदद कब लें\n- बढ़ती लालिमा या सूजन\n- मवाद या संक्रमण के संकेत\n- आंख के पास चोट जो दृष्टि को प्रभावित करती है",
          gu: "🚨 ક્યારે મદદ લેવી\n- વધતી લાલાશ અથવા સોજો\n- પરૂ અથવા ચેપના ચિહ્નો\n- આંખની નજીકની ઇજા જે દ્રષ્ટિને અસર કરે છે"
        }
      },
      "severe_head": {
        id: "severe_head",
        title: { en: "Severe head injury", hi: "सिर की गंभीर चोट", gu: "માથાની ગંભીર ઇજા" },
        severity: "Severe",
        customIcon: "assets/icons/severe_head.png",
        steps: [
          { en: "Do not move person", hi: "व्यक्ति को हिलाएं नहीं", gu: "વ્યક્તિને હલાવશો નહીં" },
          { en: "Seek emergency help", hi: "आपातकालीन सहायता लें", gu: "કટોકટી મદદ મેળવો" }
        ]
      },
      "concussion": {
        id: "concussion",
        title: { en: "Concussion", hi: "हल्का दिमागी घाव", gu: "મગજનો આઘાત" },
        severity: "Moderate",
        customIcon: "assets/icons/concussion.png",
        steps: [
          { en: "Rest", hi: "आराम", gu: "આરામ" },
          { en: "Avoid activity", hi: "गतिविधि से बचें", gu: "પ્રવૃત્તિ ટાળો" }
        ]
      },
      "unconscious": {
        id: "unconscious",
        title: { en: "Unconscious person", hi: "बेहोश व्यक्ति", gu: "બેભાન વ્યક્તિ" },
        severity: "Severe",
        customIcon: "assets/icons/unconscious.png",
        steps: [
          { en: "Check breathing", hi: "सांस की जांच करें", gu: "શ્વાસ તપાસો" },
          { en: "Place in recovery position", hi: "रिकवरी पोजीशन में लिटाएं", gu: "રિકવરી પોઝિશનમાં રાખો" }
        ]
      },
      "seizures": {
        id: "seizures",
        title: { en: "Seizures", hi: "दौरे", gu: "ખેંચ" },
        severity: "Moderate",
        customIcon: "assets/icons/seizures.png",
        steps: [
          { en: "Keep person safe", hi: "व्यक्ति को सुरक्षित रखें", gu: "વ્યક્તિને સુરક્ષિત રાખો" },
          { en: "Do not restrain", hi: "रोके नहीं", gu: "અટકાવશો નહીં" },
          { en: "Turn to side", hi: "करवट दिलाएँ", gu: "પડખે ફેરવો" }
        ]
      }
    }
  },
  "bites": {
    id: "bites",
    title: { en: "Bites & Stings", hi: "काटना और डंक", gu: "કરડવું અને ડંખ" },
    icon: "bug",
    color: "#10b981",
    groups: [
      {
        title: { en: "Type of Source", hi: "स्रोत का प्रकार", gu: "સ્ત્રોતનો પ્રકાર" },
        items: ["insect", "animal", "snake"]
      },
      {
        title: { en: "Body Reaction", hi: "शरीर की प्रतिक्रिया", gu: "શરીરની પ્રતિક્રિયા" },
        items: ["allergy_mild", "allergy_severe"]
      }
    ],
    subcategories: {
      "insect": {
        id: "insect",
        title: { en: "Insect bites", hi: "कीड़े का काटना", gu: "જીવજંતુનું કરડવું" },
        severity: "Low",
        customIcon: "assets/icons/insect.png",
        steps: [
          { en: "Clean area", hi: "जगह को साफ करें", gu: "વિસ્તાર સાફ કરો" },
          { en: "Apply cold pack", hi: "कोल्ड पैक लगाएं", gu: "કોલ્ડ પેક લગાવો" }
        ]
      },
      "animal": {
        id: "animal",
        title: { en: "Animal bites", hi: "जानवर का काटना", gu: "પ્રાણીનું કરડવું" },
        severity: "Moderate",
        customIcon: "assets/icons/animal.png",
        steps: [
          { en: "Wash thoroughly", hi: "अच्छी तरह से धोएं", gu: "સારી રીતે ધોઈ લો" },
          { en: "Apply antiseptic", hi: "एंटीसेप्टिक लगाएं", gu: "એન્ટિસેપ્ટિક લગાવો" },
          { en: "Seek medical care", hi: "चिकित्सीय देखभाल लें", gu: "તબીબી સંભાળ મેળવો" }
        ]
      },
      "snake": {
        id: "snake",
        title: { en: "Snake bites", hi: "सांप का काटना", gu: "સાપ કરડવો" },
        severity: "Severe",
        customIcon: "assets/icons/snake.png",
        steps: [
          { en: "Keep person still", hi: "व्यक्ति को स्थिर रखें", gu: "વ્યક્તિને સ્થિર રાખો" },
          { en: "Immobilize limb", hi: "अंग को अचल करें", gu: "અંગને સ્થિર કરો" },
          { en: "Seek emergency help", hi: "आपातकालीन सहायता मांगें", gu: "કટોકટી મદદ મેળવો" }
        ]
      },
      "allergy_mild": {
        id: "allergy_mild",
        title: { en: "Allergic reaction (mild)", hi: "एलर्जी की प्रतिक्रिया (हल्की)", gu: "એલર્જીક પ્રતિક્રિયા (હળવી)" },
        severity: "Moderate",
        customIcon: "assets/icons/allergy_mild.png",
        steps: [
          { en: "Identify trigger", hi: "कारण की पहचान करें", gu: "ટ્રિગરની ઓળખ કરો" },
          { en: "Give antihistamine", hi: "एंटीहिस्टामाइन दें", gu: "એન્ટિહિસ્ટામાઇન આપો" }
        ]
      },
      "allergy_severe": {
        id: "allergy_severe",
        title: { en: "Severe allergic reaction", hi: "गंभीर एलर्जी प्रतिक्रिया", gu: "ગંભીર એલર્જીક પ્રતિક્રિયા" },
        severity: "Severe",
        customIcon: "assets/icons/allergy_severe.png",
        steps: [
          { en: "Seek emergency help immediately", hi: "तुरंत आपातकालीन सहायता मांगें", gu: "તરત જ કટોકટી મદદ મેળવો" },
          { en: "Assist breathing", hi: "सांस लेने में मदद करें", gu: "શ્વાસ લેવામાં મદદ કરો" }
        ]
      }
    }
  }
};

const keywordDatabase = [
  { id: "severe_head", keywords: [{ word: "head", weight: 3 }, { word: "bleeding", weight: 5 }, { word: "trauma", weight: 4 }, { word: "sir", weight: 3 }, { word: "khoon", weight: 5 }] },
  { id: "mild_head", keywords: [{ word: "head", weight: 3 }, { word: "hit", weight: 2 }, { word: "fell", weight: 1 }, { word: "sir", weight: 3 }] },
  { id: "minor_cuts", keywords: [{ word: "cut", weight: 3 }, { word: "scrape", weight: 3 }, { word: "abrasion", weight: 3 }, { word: "bloody", weight: 2 }, { word: "khurach", weight: 3 }] },
  { id: "deep_cuts", keywords: [{ word: "deep cut", weight: 5 }, { word: "open wound", weight: 4 }, { word: "gehra", weight: 5 }] },
  { id: "heavy_bleeding", keywords: [{ word: "bleeding", weight: 5 }, { word: "blood", weight: 4 }, { word: "khoon", weight: 5 }] },
  { id: "nosebleed", keywords: [{ word: "nose", weight: 3 }, { word: "bleed", weight: 4 }, { word: "naak", weight: 3 }] },
  { id: "fractures_sub", keywords: [{ word: "fracture", weight: 5 }, { word: "broken", weight: 4 }, { word: "haddi", weight: 5 }] },
  { id: "sprains", keywords: [{ word: "twisted", weight: 3 }, { word: "ankle", weight: 3 }, { word: "moch", weight: 4 }] },
  { id: "minor_burns", keywords: [{ word: "burn", weight: 3 }, { word: "jal gaya", weight: 3 }] },
  { id: "severe_burns", keywords: [{ word: "severe burn", weight: 5 }, { word: "jal gaya bahut", weight: 5 }] },
  { id: "choking_adult", keywords: [{ word: "choking", weight: 5 }, { word: "stuck", weight: 4 }, { word: "atak", weight: 5 }] },
  { id: "cpr", keywords: [{ word: "not breathing", weight: 5 }, { word: "cpr", weight: 5 }, { word: "saans", weight: 5 }] },
  { id: "breathing_difficulty", keywords: [{ word: "breathing", weight: 4 }, { word: "saans", weight: 4 }] }
];

const searchDataset = [];

Object.values(firstAidData).forEach(cat => {
  Object.values(cat.subcategories).forEach(subcat => {
    const customEntry = keywordDatabase.find(k => k.id === subcat.id);
    
    searchDataset.push({
      id: subcat.id,
      category_id: cat.id,
      weightedKeywords: customEntry ? customEntry.keywords : [],
      titleKeywords: {
        en: subcat.title.en.toLowerCase(),
        hi: subcat.title.hi.toLowerCase()
      }
    });
  });
});
