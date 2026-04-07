const staticUI = {
  appTitle: { en: "FirstAid AI", hi: "फर्स्टएड AI", gu: "ફર્સ્ટએડ AI" },
  cameraAssistant: { en: "Scan for help", hi: "मदद के लिए स्कैन करें", gu: "મદદ માટે સ્કેન કરો" },
  cameraDesc: { en: "Scan injury & available first aid kits", hi: "चोट और उपलब्ध प्राथमिक चिकित्सा किट स्कैन करें", gu: "ઇજા અને ઉપલબ્ધ પ્રાથમિક સારવાર કીટ્સ સ્કેન કરો" },
  placeholder: { en: "Search injuries...", hi: "चोटें खोजें...", gu: "ઇજાઓ શોધો..." },
  quickGuides: { en: "Quick Guides", hi: "त्वरित मार्गदर्शिका", gu: "ઝડપી માર્ગદર્શિકા" },
  categories: { en: "Categories", hi: "श्रेणियाँ", gu: "શ્રેણીઓ" },
  back: { en: "Back", hi: "वापस", gu: "પાછા" },
  scanInjuryStep: { en: "Step 1: Scan Injury", hi: "चरण 1: चोट को स्कैन करें", gu: "પગલું 1: ઇજાને સ્કેન કરો" },
  scanInjuryDesc: { en: "Use the camera to roughly show the affected area.", hi: "प्रभावित क्षेत्र को दिखाने के लिए कैमरे का उपयोग करें।", gu: "અસરગ્રસ્ત વિસ્તાર બતાવવા માટે કેમેરાનો ઉપયોગ કરો." },
  positionInFrame: { en: "Position injury in frame", hi: "चोट को फ्रेम में लाएं", gu: "ફ્રેમમાં ઇજાને ગોઠવો" },
  capture: { en: "Capture", hi: "कैप्चर करें", gu: "કેપ્ચર" },
  scanKitStep: { en: "Step 2: Scan First Aid Kit", hi: "चरण 2: फर्स्ट एड किट को स्कैन करें", gu: "પગલું 2: ફર્સ્ટ એઇડ કીટને સ્કેન કરો" },
  scanKitDesc: { en: "Show us what supplies you have available.", hi: "हमें दिखाएं कि आपके पास क्या आपूर्ति उपलब्ध है।", gu: "અમને બતાવો કે તમારી પાસે કઈ સામગ્રી ઉપલબ્ધ છે." },
  positionKitFrame: { en: "Position kit in frame", hi: "किट को फ्रेम में लाएं", gu: "કીટને ફ્રેમમાં ગોઠવો" },
  analyzing: { en: "Analyzing Situation...", hi: "स्थिति का विश्लेषण हो रहा है...", gu: "સ્થિતિનું વિશ્લેષણ થઈ રહ્યું છે..." },
  callEmergency: { en: "CALL 112", hi: "112 डायल करें", gu: "112 ડાયલ કરો" },
  severity: { en: "Severity", hi: "गंभीरता", gu: "ગંભીરતા" },
  disclaimer: { en: "This is first aid guidance. Call emergency services if needed.", hi: "यह प्राथमिक चिकित्सा मार्गदर्शन है। आवश्यकता पड़ने पर आपातकालीन सेवाओं को कॉल करें।", gu: "આ પ્રાથમિક સારવાર માર્ગદર્શન છે. જરૂરી હોય તો કટોકટી સેવાઓને કૉલ કરો." },
  noResults: { en: "No results found. Try another keyword.", hi: "कोई परिणाम नहीं मिला। कोई अन्य कीवर्ड आज़माएं।", gu: "કોઈ પરિણામ મળ્યું નથી. બીજો કીવર્ડ અજમાવો." },
  searchResults: { en: "Search Results", hi: "खोज के परिणाम", gu: "શોધનાં પરિણામો" }
};

const firstAidData = {
  "bleeding_cuts": {
    id: "bleeding_cuts",
    title: { en: "Bleeding & Cuts", hi: "खून बहना और कट", gu: "રક્તસ્રાવ અને કાપા" },
    icon: "droplet",
    color: "#ef4444",
    subcategories: {
      "minor_cuts": {
        id: "minor_cuts",
        title: { en: "Minor cuts & scrapes", hi: "मामूली कट और खरोंच", gu: "નાના કાપા અને ઉઝરડા" },
        severity: "Low",
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
        steps: [
          { en: "Apply cold compress", hi: "ठंडा सेक लगाएं", gu: "ઠંડો શેક લગાવો" },
          { en: "Rest area", hi: "घायल हिस्से को आराम दें", gu: "વિસ્તારને આરામ આપો" }
        ]
      },
      "blisters": {
        id: "blisters",
        title: { en: "Blisters", hi: "छाले", gu: "ફોલ્લા" },
        severity: "Low",
        steps: [
          { en: "Do not burst", hi: "फोड़ें नहीं", gu: "ફોડશો નહીં" },
          { en: "Keep clean and covered", hi: "साफ और ढका हुआ रखें", gu: "સ્વચ્છ અને ઢાંકેલું રાખો" }
        ]
      }
    }
  },
  "burns": {
    id: "burns",
    title: { en: "Burns", hi: "जलना", gu: "દાઝવું" },
    icon: "flame",
    color: "#f59e0b",
    subcategories: {
      "minor_burns": {
        id: "minor_burns",
        title: { en: "Minor burns", hi: "मामूली जलन", gu: "સામાન્ય દાઝવું" },
        severity: "Low",
        steps: [
          { en: "Cool under running water (10–15 mins)", hi: "बहते पानी के नीचे (10-15 मिनट) ठंडा करें", gu: "વહેતા પાણી નીચે (૧૦-૧૫ મિનિટ) ઠંડુ કરો" },
          { en: "Cover loosely", hi: "हल्के से ढकें", gu: "હળવાશથી ઢાંકો" }
        ]
      },
      "severe_burns": {
        id: "severe_burns",
        title: { en: "Severe burns", hi: "गंभीर जलन", gu: "ગંભીર દાઝવું" },
        severity: "Severe",
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
        steps: [
          { en: "Rinse with water continuously", hi: "लगातार पानी से धोते रहें", gu: "સતત પાણીથી ધોતા રહો" },
          { en: "Do not apply chemicals", hi: "रसायनों का प्रयोग न करें", gu: "રસાયણો ન લગાવો" }
        ]
      },
      "sunburn": {
        id: "sunburn",
        title: { en: "Sunburn", hi: "धूप से जलना", gu: "સનબર્ન" },
        severity: "Low",
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
    subcategories: {
      "fractures_sub": {
        id: "fractures_sub",
        title: { en: "Fractures", hi: "हड्डी टूटना", gu: "અસ્થિભંગ" },
        severity: "Severe",
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
        steps: [
          { en: "Rest", hi: "आराम", gu: "આરામ" },
          { en: "Ice", hi: "बर्फ लगाएं", gu: "બરફ લગાવો" },
          { en: "Compression", hi: "दबाव", gu: "દબાણ" },
          { en: "Elevation", hi: "ऊपर उठाएं", gu: "ઉપર રાખો" }
        ]
      },
      "strains": {
        id: "strains",
        title: { en: "Strains", hi: "खिंचाव", gu: "ખેંચાણ" },
        severity: "Low",
        steps: [
          { en: "Rest muscle", hi: "मांसपेशियों को आराम दें", gu: "સ્નાયુઓને આરામ આપો" },
          { en: "Apply ice", hi: "बर्फ लगाएं", gu: "બરફ લગાવો" }
        ]
      },
      "dislocations": {
        id: "dislocations",
        title: { en: "Dislocations", hi: "जोड़ खिसकना", gu: "સાંધાનું ખસી જવું" },
        severity: "Severe",
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
    subcategories: {
      "choking_adult": {
        id: "choking_adult",
        title: { en: "Choking (adult)", hi: "दम घुटना (वयस्क)", gu: "ગૂંગળામણ (પુખ્ત)" },
        severity: "Severe",
        steps: [
          { en: "Perform abdominal thrusts", hi: "पेट पर दबाव डालें", gu: "પેટ પર દબાણ કરો" }
        ]
      },
      "choking_child": {
        id: "choking_child",
        title: { en: "Choking (child)", hi: "दम घुटना (बच्चा)", gu: "ગૂંગળામણ (બાળક)" },
        severity: "Severe",
        steps: [
          { en: "Give back blows", hi: "पीठ पर थपथपाएं", gu: "પીઠ પર થપથપાવો" }
        ]
      },
      "cpr": {
        id: "cpr",
        title: { en: "Not breathing / CPR", hi: "सांस नहीं आना / सीपीआर", gu: "શ્વાસ ન આવવો / સીપીઆર" },
        severity: "Severe",
        steps: [
          { en: "Start chest compressions", hi: "छाती को दबाना शुरू करें", gu: "છાતી દબાવવાનું શરૂ કરો" },
          { en: "Call emergency services", hi: "आपातकालीन सेवाओं को कॉल करें", gu: "કટોકટી સેવાઓને કૉલ કરો" }
        ]
      },
      "breathing_difficulty": {
        id: "breathing_difficulty",
        title: { en: "Breathing difficulty", hi: "सांस लेने में कठिनाई", gu: "શ્વાસ લેવામાં તકલીફ" },
        severity: "Moderate",
        steps: [
          { en: "Help sit upright", hi: "सीधे बैठने में मदद करें", gu: "સીધા બેસવામાં મદદ કરો" },
          { en: "Loosen clothing", hi: "कपड़े ढीले करें", gu: "કપડાં ઢીલા કરો" }
        ]
      },
      "smoke_inhalation": {
        id: "smoke_inhalation",
        title: { en: "Smoke inhalation", hi: "धुआं अंदर जाना", gu: "ધુમાડો શ્વાસમાં જવો" },
        severity: "Severe",
        steps: [
          { en: "Move to fresh air", hi: "ताजी हवा में जाएं", gu: "તાજી હવામાં જાવ" },
          { en: "Monitor breathing", hi: "सांसों पर नजर रखें", gu: "શ્વાસ પર નજર રાખો" }
        ]
      },
      "gas_exposure": {
        id: "gas_exposure",
        title: { en: "Gas exposure", hi: "गैस के संपर्क में आना", gu: "ગેસના સંપર્કમાં આવવું" },
        severity: "Severe",
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
    subcategories: {
      "mild_head": {
        id: "mild_head",
        title: { en: "Mild head injury", hi: "सिर की मामूली चोट", gu: "માથાની સામાન્ય ઇજા" },
        severity: "Low",
        steps: [
          { en: "Keep person still", hi: "व्यक्ति को स्थिर रखें", gu: "વ્યક્તિને સ્થિર રાખો" },
          { en: "Monitor symptoms", hi: "लक्षणों पर नज़र रखें", gu: "લક્ષણો પર નજર રાખો" }
        ]
      },
      "severe_head": {
        id: "severe_head",
        title: { en: "Severe head injury", hi: "सिर की गंभीर चोट", gu: "માથાની ગંભીર ઇજા" },
        severity: "Severe",
        steps: [
          { en: "Do not move person", hi: "व्यक्ति को हिलाएं नहीं", gu: "વ્યક્તિને હલાવશો નહીં" },
          { en: "Seek emergency help", hi: "आपातकालीन सहायता लें", gu: "કટોકટી મદદ મેળવો" }
        ]
      },
      "concussion": {
        id: "concussion",
        title: { en: "Concussion", hi: "हल्का दिमागी घाव", gu: "મગજનો આઘાત" },
        severity: "Moderate",
        steps: [
          { en: "Rest", hi: "आराम", gu: "આરામ" },
          { en: "Avoid activity", hi: "गतिविधि से बचें", gu: "પ્રવૃત્તિ ટાળો" }
        ]
      },
      "unconscious": {
        id: "unconscious",
        title: { en: "Unconscious person", hi: "बेहोश व्यक्ति", gu: "બેભાન વ્યક્તિ" },
        severity: "Severe",
        steps: [
          { en: "Check breathing", hi: "सांस की जांच करें", gu: "શ્વાસ તપાસો" },
          { en: "Place in recovery position", hi: "रिकवरी पोजीशन में लिटाएं", gu: "રિકવરી પોઝિશનમાં રાખો" }
        ]
      },
      "seizures": {
        id: "seizures",
        title: { en: "Seizures", hi: "दौरे", gu: "ખેંચ" },
        severity: "Moderate",
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
    subcategories: {
      "insect": {
        id: "insect",
        title: { en: "Insect bites", hi: "कीड़े का काटना", gu: "જીવજંતુનું કરડવું" },
        severity: "Low",
        steps: [
          { en: "Clean area", hi: "जगह को साफ करें", gu: "વિસ્તાર સાફ કરો" },
          { en: "Apply cold pack", hi: "कोल्ड पैक लगाएं", gu: "કોલ્ડ પેક લગાવો" }
        ]
      },
      "animal": {
        id: "animal",
        title: { en: "Animal bites", hi: "जानवर का काटना", gu: "પ્રાણીનું કરડવું" },
        severity: "Moderate",
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
        steps: [
          { en: "Identify trigger", hi: "कारण की पहचान करें", gu: "ટ્રિગરની ઓળખ કરો" },
          { en: "Give antihistamine", hi: "एंटीहिस्टामाइन दें", gu: "એન્ટિહિસ્ટામાઇન આપો" }
        ]
      },
      "allergy_severe": {
        id: "allergy_severe",
        title: { en: "Severe allergic reaction", hi: "गंभीर एलर्जी प्रतिक्रिया", gu: "ગંભીર એલર્જીક પ્રતિક્રિયા" },
        severity: "Severe",
        steps: [
          { en: "Seek emergency help immediately", hi: "तुरंत आपातकालीन सहायता मांगें", gu: "તરત જ કટોકટી મદદ મેળવો" },
          { en: "Assist breathing", hi: "सांस लेने में मदद करें", gu: "શ્વાસ લેવામાં મદદ કરો" }
        ]
      }
    }
  }
};

const searchDataset = [];

// Populate search dataset locally from the firstAidData dynamically to avoid repeating translations
Object.values(firstAidData).forEach(cat => {
  Object.values(cat.subcategories).forEach(subcat => {
    let phoneticWords = [];
    if (cat.id === "bleeding_cuts") phoneticWords = ["khoon", "bleeding", "blood", "khun", "chot", "cut"];
    if (cat.id === "burns") phoneticWords = ["jalna", "burn", "aag", "dhup", "garam"];
    if (cat.id === "fractures") phoneticWords = ["haddi tootna", "fracture", "bone break", "moch", "haddi", "pain"];
    if (cat.id === "breathing") phoneticWords = ["saans nahi aa rahi", "choking", "saans", "dhuan", "gas", "oxygen"];
    if (cat.id === "head") phoneticWords = ["sar pe chot", "head injury", "behoshi", "daura", "sir", "sar"];
    if (cat.id === "bites") phoneticWords = ["kaat liya", "snake bite", "insect bite", "jaanwar", "keeda", "saamp"];
    
    searchDataset.push({
      id: subcat.id,
      category_id: cat.id,
      keywords: {
        en: [subcat.title.en.toLowerCase(), cat.title.en.toLowerCase()],
        hi: [subcat.title.hi.toLowerCase(), cat.title.hi.toLowerCase()],
        gu: [subcat.title.gu.toLowerCase(), cat.title.gu.toLowerCase()],
        phonetic: phoneticWords
      }
    });
  });
});
