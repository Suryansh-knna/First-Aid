const firstAidData = {
  "Bleeding & Cuts": {
    icon: "droplet",
    color: "#ef4444",
    subcategories: {
      "Minor cuts & scrapes": { severity: "Low", steps: ["Clean wound with water", "Apply antiseptic", "Cover with bandage"] },
      "Deep cuts": { severity: "Severe", steps: ["Apply firm pressure", "Elevate injured area", "Cover with clean cloth"] },
      "Heavy bleeding": { severity: "Severe", steps: ["Apply strong pressure immediately", "Keep person still", "Seek emergency help"] },
      "Puncture wounds": { severity: "Moderate", steps: ["Clean wound carefully", "Stop bleeding", "Seek medical help if deep"] },
      "Nosebleed": { severity: "Low", steps: ["Sit upright", "Lean forward", "Pinch nose"] },
      "Bruises": { severity: "Low", steps: ["Apply cold compress", "Rest area"] },
      "Blisters": { severity: "Low", steps: ["Do not burst", "Keep clean and covered"] }
    }
  },
  "Burns": {
    icon: "flame",
    color: "#f59e0b",
    subcategories: {
      "Minor burns": { severity: "Low", steps: ["Cool under running water (10–15 mins)", "Cover loosely"] },
      "Severe burns": { severity: "Severe", steps: ["Cover with clean cloth", "Do not apply substances", "Seek emergency help"] },
      "Scalds": { severity: "Moderate", steps: ["Cool immediately with water", "Remove tight items"] },
      "Electrical burns": { severity: "Severe", steps: ["Turn off power source", "Do not touch directly", "Seek medical help"] },
      "Chemical burns": { severity: "Severe", steps: ["Rinse with water continuously", "Do not apply chemicals"] },
      "Sunburn": { severity: "Low", steps: ["Cool skin", "Hydrate", "Avoid sun"] }
    }
  },
  "Fractures & Sprains": {
    icon: "activity",
    color: "#8b5cf6",
    subcategories: {
      "Fractures": { severity: "Severe", steps: ["Immobilize area", "Avoid movement", "Seek medical help"] },
      "Sprains": { severity: "Moderate", steps: ["Rest", "Ice", "Compression", "Elevation"] },
      "Strains": { severity: "Low", steps: ["Rest muscle", "Apply ice"] },
      "Dislocations": { severity: "Severe", steps: ["Do not move joint", "Immobilize", "Seek help"] }
    }
  },
  "Breathing Problems": {
    icon: "wind",
    color: "#06b6d4",
    subcategories: {
      "Choking (adult)": { severity: "Severe", steps: ["Perform abdominal thrusts"] },
      "Choking (child)": { severity: "Severe", steps: ["Give back blows"] },
      "Not breathing / CPR": { severity: "Severe", steps: ["Start chest compressions", "Call emergency services"] },
      "Breathing difficulty": { severity: "Moderate", steps: ["Help sit upright", "Loosen clothing"] },
      "Smoke inhalation": { severity: "Severe", steps: ["Move to fresh air", "Monitor breathing"] },
      "Gas exposure": { severity: "Severe", steps: ["Move to fresh air immediately", "Avoid sparks"] }
    }
  },
  "Head Injury": {
    icon: "brain",
    color: "#ec4899",
    subcategories: {
      "Mild head injury": { severity: "Low", steps: ["Keep person still", "Monitor symptoms"] },
      "Severe head injury": { severity: "Severe", steps: ["Do not move person", "Seek emergency help"] },
      "Concussion": { severity: "Moderate", steps: ["Rest", "Avoid activity"] },
      "Unconscious person": { severity: "Severe", steps: ["Check breathing", "Place in recovery position"] },
      "Seizures": { severity: "Moderate", steps: ["Keep person safe", "Do not restrain", "Turn to side"] }
    }
  },
  "Bites & Stings": {
    icon: "bug",
    color: "#10b981",
    subcategories: {
      "Insect bites": { severity: "Low", steps: ["Clean area", "Apply cold pack"] },
      "Animal bites": { severity: "Moderate", steps: ["Wash thoroughly", "Apply antiseptic", "Seek medical care"] },
      "Snake bites": { severity: "Severe", steps: ["Keep person still", "Immobilize limb", "Seek emergency help"] },
      "Allergic reaction (mild)": { severity: "Moderate", steps: ["Identify trigger", "Give antihistamine"] },
      "Severe allergic reaction": { severity: "Severe", steps: ["Seek emergency help immediately", "Assist breathing"] }
    }
  }
};

const searchDataset = [
  { name: "Minor cuts & scrapes", category: "Bleeding & Cuts", keywords: ["cut", "scrape", "small wound"] },
  { name: "Deep cuts", category: "Bleeding & Cuts", keywords: ["deep cut", "open wound"] },
  { name: "Heavy bleeding", category: "Bleeding & Cuts", keywords: ["bleeding", "blood loss"] },
  { name: "Puncture wounds", category: "Bleeding & Cuts", keywords: ["puncture", "nail injury"] },
  { name: "Nosebleed", category: "Bleeding & Cuts", keywords: ["nose bleed", "bleeding nose"] },
  { name: "Bruises", category: "Bleeding & Cuts", keywords: ["bruise", "contusion"] },
  { name: "Blisters", category: "Bleeding & Cuts", keywords: ["blister", "skin bubble"] },

  { name: "Minor burns", category: "Burns", keywords: ["burn", "small burn"] },
  { name: "Severe burns", category: "Burns", keywords: ["serious burn"] },
  { name: "Scalds", category: "Burns", keywords: ["hot water burn", "steam burn"] },
  { name: "Electrical burns", category: "Burns", keywords: ["electric shock burn"] },
  { name: "Chemical burns", category: "Burns", keywords: ["acid burn", "chemical spill"] },
  { name: "Sunburn", category: "Burns", keywords: ["sun burn"] },

  { name: "Fractures", category: "Fractures & Sprains", keywords: ["broken bone"] },
  { name: "Sprains", category: "Fractures & Sprains", keywords: ["twisted ankle"] },
  { name: "Strains", category: "Fractures & Sprains", keywords: ["muscle strain"] },
  { name: "Dislocations", category: "Fractures & Sprains", keywords: ["joint out"] },

  { name: "Choking (adult)", category: "Breathing Problems", keywords: ["choking"] },
  { name: "Choking (child)", category: "Breathing Problems", keywords: ["child choking"] },
  { name: "Not breathing / CPR", category: "Breathing Problems", keywords: ["cpr", "not breathing"] },
  { name: "Breathing difficulty", category: "Breathing Problems", keywords: ["cant breathe", "asthma"] },
  { name: "Smoke inhalation", category: "Breathing Problems", keywords: ["smoke breathing"] },
  { name: "Gas exposure", category: "Breathing Problems", keywords: ["gas leak"] },

  { name: "Mild head injury", category: "Head Injury", keywords: ["head bump"] },
  { name: "Severe head injury", category: "Head Injury", keywords: ["head trauma"] },
  { name: "Concussion", category: "Head Injury", keywords: ["dizzy head"] },
  { name: "Unconscious person", category: "Head Injury", keywords: ["passed out"] },
  { name: "Seizures", category: "Head Injury", keywords: ["fits"] },

  { name: "Insect bites", category: "Bites & Stings", keywords: ["mosquito bite"] },
  { name: "Animal bites", category: "Bites & Stings", keywords: ["dog bite"] },
  { name: "Snake bites", category: "Bites & Stings", keywords: ["snake bite"] },
  { name: "Allergic reaction (mild)", category: "Bites & Stings", keywords: ["rash", "allergy"] },
  { name: "Severe allergic reaction", category: "Bites & Stings", keywords: ["anaphylaxis"] }
];
