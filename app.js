// Application State
let currentState = 'home';
window.appLanguage = localStorage.getItem('appLang') || 'en';

window.setLanguage = function(lang) {
  window.appLanguage = lang;
  localStorage.setItem('appLang', lang);
  
  // Update static header elements
  const titleEl = document.getElementById('header-title-text');
  if (titleEl) titleEl.innerText = staticUI.appTitle[lang];
  const emergencyDialText = document.getElementById('emergency-dial-text');
  if (emergencyDialText) emergencyDialText.innerText = staticUI.callEmergency[lang];
  
  render();
};

// Set initial header translation on load
document.addEventListener('DOMContentLoaded', () => {
  window.setLanguage(window.appLanguage);
});

// Application Routing State
window.activeCategory = null; // Storing the ID now
window.activeSubcategory = null; // Storing the ID now
window.currentSearchQuery = '';

window.openCategory = function(categoryId) {
  window.activeCategory = categoryId;
  navigate('subcategories');
};

window.openInstruction = function(subcategoryId) {
  window.activeSubcategory = subcategoryId;
  navigate('instructions');
};

window.openSearchResult = function(categoryId, subcategoryId) {
  window.activeCategory = categoryId;
  window.activeSubcategory = subcategoryId;
  window.currentSearchQuery = ''; 
  navigate('instructions');
};

window.liveSearch = function(query) {
  window.currentSearchQuery = query.toLowerCase().trim();
  const dynamicArea = document.getElementById('home-dynamic-area');
  const lang = window.appLanguage;
  
  if (!dynamicArea) return;
  
  if (window.currentSearchQuery === '') {
    let cards = '';
    for (const catObj of Object.values(firstAidData)) {
      cards += `
        <div class="action-card" onclick="openCategory('${catObj.id}')">
          <div class="action-icon" style="color: ${catObj.color}; background: ${catObj.color}20;"><i data-lucide="${catObj.icon}"></i></div>
          ${catObj.title[lang]}
        </div>
      `;
    }
    dynamicArea.innerHTML = `
      <div class="quick-actions">
        <h3>${staticUI.quickGuides[lang]}</h3>
        <div class="action-grid">
          ${cards}
        </div>
      </div>
    `;
  } else {
    // Search within searchDataset across all native languages and phonetic keys
    const results = searchDataset.filter(item => {
      const catData = firstAidData[item.category_id];
      const subCat = catData.subcategories[item.id];
      
      const combinedTitles = [
        subCat.title.en.toLowerCase(), subCat.title.hi.toLowerCase(), subCat.title.gu.toLowerCase(),
        catData.title.en.toLowerCase(), catData.title.hi.toLowerCase(), catData.title.gu.toLowerCase()
      ].join(' ');
      
      const mixedKeywords = [
        ...(item.keywords.en || []), 
        ...(item.keywords.hi || []), 
        ...(item.keywords.gu || []), 
        ...(item.keywords.phonetic || [])
      ].join(' ');
      
      return combinedTitles.includes(window.currentSearchQuery) || mixedKeywords.includes(window.currentSearchQuery);
    });
    
    if (results.length === 0) {
      dynamicArea.innerHTML = `
        <div class="empty-search">
          <i data-lucide="search-x" size="32" color="var(--text-muted)"></i>
          <p>${staticUI.noResults[lang]}</p>
        </div>
      `;
    } else {
      let listHTML = '';
      results.forEach(result => {
        const catData = firstAidData[result.category_id];
        const subCatData = catData.subcategories[result.id];
        
        listHTML += `
          <div class="search-result-item" onclick="openSearchResult('${catData.id}', '${subCatData.id}')">
            <div class="search-result-name">${subCatData.title[lang]}</div>
            <div class="search-result-category" style="color: ${catData.color};"><i data-lucide="${catData.icon}" size="12"></i> ${catData.title[lang]}</div>
          </div>
        `;
      });
      dynamicArea.innerHTML = `
        <h3 style="margin-top:0;">${staticUI.searchResults[lang]}</h3>
        <div class="subcategory-list">
          ${listHTML}
        </div>
      `;
    }
  }
  
  if (window.lucide) {
    lucide.createIcons();
  }
};

// Routing logic
window.navigate = function(viewName) {
  const wasCamera = (currentState === 'camera1' || currentState === 'camera2');
  const isCamera = (viewName === 'camera1' || viewName === 'camera2');
  
  if (wasCamera && !isCamera) {
    window.stopCamera();
  }
  
  currentState = viewName;
  render();
};

window.startChat = function(topic) {
  navigate('chat');
};

window.showAIResponse = async function(base64Image) {
  window.stopCamera();
  const main = document.getElementById('main-content');
  const lang = window.appLanguage;
  main.innerHTML = `
    <div class="view" style="flex-direction:column; align-items:center; justify-content:center; height:100%; color:var(--primary); gap: 16px; text-align: center;">
      <i data-lucide="loader-2" class="spinner" size="48" style="animation: spin 1s linear infinite;"></i>
      <h3 id="ai-loading-text" style="margin:0;">${staticUI.analyzingImage[lang]}</h3>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
  
  // Pipeline animation timers
  setTimeout(() => {
    const loaderText = document.getElementById('ai-loading-text');
    if (loaderText) loaderText.innerText = staticUI.identifyingInjury[lang];
  }, 1200);

  setTimeout(() => {
    const loaderText = document.getElementById('ai-loading-text');
    if (loaderText) loaderText.innerText = staticUI.generatingSteps[lang];
  }, 2600);

  // Construct exact mapping arrays natively
  let validCats = [];
  let validSubcats = [];
  for (const catKey of Object.keys(firstAidData)) {
    validCats.push(firstAidData[catKey].title.en);
    for (const subKey of Object.keys(firstAidData[catKey].subcategories)) {
      validSubcats.push(firstAidData[catKey].subcategories[subKey].title.en);
    }
  }

  // OpenRouter Integration
  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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',
        'HTTP-Referer': 'https://first-aid-app.vercel.app', // Optional
        'X-Title': 'FirstAid AI' // Optional
      },
      body: JSON.stringify({
        model: 'google/gemini-2.0-flash-001',
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: `You are a first aid assistant.\n\nAnalyze the provided image and:\n1. Identify the visible injury\n2. Classify it strictly into one of these categories: ${validCats.join(", ")}\n3. Identify the specific subcategory STRICTLY as one of these exact phrases: ${validSubcats.join(", ")}\n4. Estimate severity (Mild, Moderate, Severe)\n5. Provide clear step-by-step first aid instructions\n\nRules:\n- Do NOT give medical diagnosis\n- Keep instructions simple and safe\n- If severe, advise seeking medical help\n\nRespond ONLY in JSON format like this:\n{\n  "injury": "",\n  "category": "",\n  "subcategory": "",\n  "severity": "",\n  "steps": ["", "", ""]\n}`
              },
              {
                type: "image_url",
                image_url: {
                  url: `data:${window.capturedMimeType || "image/jpeg"};base64,${base64Image}`
                }
              }
            ]
          }
        ]
      })
    });
    
    if (!response.ok) {
        const errText = await response.text();
        throw new Error("OpenRouter API Failed: " + errText);
    }
    const data = await response.json();
    let aiText = data.choices[0].message.content;
    if (aiText.startsWith('\`\`\`json')) aiText = aiText.replace(/^\`\`\`json/, '').replace(/\`\`\`$/, '').trim();
    const aiResult = JSON.parse(aiText);
    
    // Strict Fallback dictionary map to match Gemini's exact subcategory text locally
    window.activeCategory = null;
    window.activeSubcategory = null;
    
    const targetSub = aiResult.subcategory.toLowerCase();
    for (const catKey of Object.keys(firstAidData)) {
      for (const subKey of Object.keys(firstAidData[catKey].subcategories)) {
        const subData = firstAidData[catKey].subcategories[subKey];
        if (targetSub === subData.title.en.toLowerCase() || targetSub.includes(subData.title.en.toLowerCase()) || subData.title.en.toLowerCase().includes(targetSub)) {
           window.activeCategory = catKey;
           window.activeSubcategory = subKey;
           break;
        }
      }
      if (window.activeCategory) break;
    }
    
    // Safely default if confused but log issue
    if (!window.activeCategory) { 
        console.warn("AI failed to match category explicitly. Fallback applied.");
        window.activeCategory = "bleeding_cuts"; 
        window.activeSubcategory = "minor_cuts"; 
    }
    navigate('chat');
    
  } catch (err) {
    console.error("Gemini Vision API Failed:", err);
    alert("API Request Failed. " + err.message);
    navigate('home');
  }
};

window.handleSearch = function() {
  const input = document.getElementById('search-input');
  if (input) {
    window.liveSearch(input.value);
  }
};

window.startVoiceSearch = function() {
  const micIcon = document.getElementById('mic-icon');
  if (micIcon) {
    micIcon.style.color = "var(--accent)";
  }
  
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Speech recognition isn't supported in this browser.");
    if (micIcon) micIcon.style.color = "var(--primary)";
    return;
  }
  
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  // Fallback map for listening languages
  const langMap = { 'en': 'en-US', 'hi': 'hi-IN', 'gu': 'gu-IN' };
  recognition.lang = langMap[window.appLanguage] || 'en-US';
  
  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    const input = document.getElementById('search-input');
    if (input) {
      input.value = transcript;
    }
    window.liveSearch(transcript);
  };
  
  recognition.onerror = function(event) {
    console.error("Speech recognition error:", event.error);
    if (micIcon) micIcon.style.color = "var(--primary)";
  };
  
  recognition.onend = function() {
    if (micIcon) micIcon.style.color = "var(--primary)";
  };
  
  recognition.start();
};

window.triggerEmergencyCall = function() {
  window.location.href = "tel:112";
};

// Dynamic View Getter
function getViewHTML() {
  const lang = window.appLanguage;

  if (currentState === 'home') {
    let cards = '';
    for (const catObj of Object.values(firstAidData)) {
      cards += `
        <div class="action-card" onclick="openCategory('${catObj.id}')">
          <div class="action-icon" style="color: ${catObj.color}; background: ${catObj.color}20;"><i data-lucide="${catObj.icon}"></i></div>
          ${catObj.title[lang]}
        </div>
      `;
    }
    return `
      <div class="search-container" style="margin-bottom: 12px;">
        <i data-lucide="search" color="var(--text-muted)"></i>
        <input type="text" id="search-input" placeholder="${staticUI.placeholder[lang]}" oninput="liveSearch(this.value)" onkeypress="if(event.key === 'Enter') handleSearch()">
        <i id="mic-icon" data-lucide="mic" color="var(--primary)" style="cursor:pointer;" onclick="startVoiceSearch()"></i>
      </div>
      <div class="lang-toggle-container">
        <button class="lang-btn ${lang === 'en' ? 'active' : ''}" onclick="window.setLanguage('en')">EN</button>
        <button class="lang-btn ${lang === 'hi' ? 'active' : ''}" onclick="window.setLanguage('hi')">हिन्दी</button>
        <button class="lang-btn ${lang === 'gu' ? 'active' : ''}" onclick="window.setLanguage('gu')">ગુજરાતી</button>
      </div>
      <div class="scan-cta" onclick="navigate('camera1')">
        <div class="scan-cta-text">
          <h3>${staticUI.cameraAssistant[lang]}</h3>
          <p>${staticUI.cameraDesc[lang]}</p>
        </div>
        <i class="scan-cta-icon" data-lucide="camera" size="56"></i>
      </div>
      <div id="home-dynamic-area">
        <div class="quick-actions">
          <h3>${staticUI.quickGuides[lang]}</h3>
          <div class="action-grid">
            ${cards}
          </div>
        </div>
      </div>
    `;
  } else if (currentState === 'subcategories') {
    const catData = firstAidData[window.activeCategory];
    if (!catData) return '';
    let listHTML = '';
    
    catData.groups.forEach(group => {
      listHTML += `<div class="group-title" style="color: ${catData.color};">${group.title[lang]}</div>`;
      group.items.forEach(itemId => {
        const subcatObj = catData.subcategories[itemId];
        if (subcatObj) {
          listHTML += `
            <div class="list-item" onclick="openInstruction('${subcatObj.id}')">
              <div class="list-item-icon" style="background: ${catData.color}20; color: ${catData.color}">
                <i data-lucide="${catData.icon}" size="20"></i>
              </div>
              <span class="list-item-title">${subcatObj.title[lang]}</span>
              <i data-lucide="chevron-right" size="18" color="var(--text-muted)"></i>
            </div>
          `;
        }
      });
    });

    return `
      <button class="back-btn" onclick="navigate('home')"><i data-lucide="arrow-left"></i> ${staticUI.categories[lang]}</button>
      <h3 style="margin-top:0; margin-bottom:16px;">${catData.title[lang]}</h3>
      <div class="subcategory-list">
        ${listHTML}
      </div>
    `;
  } else if (currentState === 'instructions') {
    const catData = firstAidData[window.activeCategory];
    const subcatObj = catData?.subcategories[window.activeSubcategory];
    if (!subcatObj) return '';
    
    let severityHtml = '';
    const sev = subcatObj.severity;
    if (sev === 'Severe') {
      severityHtml = `<div class="severity-badge critical"><i data-lucide="alert-octagon" size="14"></i> ${staticUI.severity[lang]}: Severe</div>`;
    } else if (sev === 'Moderate') {
      severityHtml = `<div class="severity-badge warning"><i data-lucide="alert-triangle" size="14"></i> ${staticUI.severity[lang]}: Moderate</div>`;
    } else {
      severityHtml = `<div class="severity-badge safe"><i data-lucide="info" size="14"></i> ${staticUI.severity[lang]}: Low</div>`;
    }
    
    let stepsHtml = '';
    subcatObj.steps.forEach((step, idx) => {
      stepsHtml += `
        <div class="step-card">
          <div class="step-number">${idx + 1}</div>
          <div class="step-text">${step[lang]}</div>
        </div>
      `;
    });

    let emergencyPrompt = '';
    if (sev === 'Severe') {
      emergencyPrompt = `
        <div class="emergency-prompt" style="margin-top: 24px;">
          <button onclick="triggerEmergencyCall()"><i data-lucide="phone" size="18"></i> ${staticUI.callEmergency[lang]}</button>
        </div>
      `;
    }

    return `
      <button class="back-btn" onclick="navigate('subcategories')"><i data-lucide="arrow-left"></i> ${catData.title[lang]}</button>
      <div class="disclaimer" style="margin-bottom:16px;">
        <i data-lucide="alert-triangle" color="#856404" style="flex-shrink:0;"></i>
        ${staticUI.disclaimer[lang]}
      </div>
      <h2 style="margin: 0 0 12px 0;">${subcatObj.title[lang]}</h2>
      ${severityHtml}
      
      <div class="steps-container" style="margin-top:24px;">
        ${stepsHtml}
      </div>
      ${emergencyPrompt}
    `;
  } else if (currentState === 'camera1') {
      return `
        <button class="back-btn" onclick="navigate('home')"><i data-lucide="arrow-left"></i> ${staticUI.back[lang]}</button>
        <div class="disclaimer">
          <i data-lucide="alert-triangle" color="#856404" style="flex-shrink:0;"></i>
          ${staticUI.disclaimer[lang]}
        </div>
        <h3 style="margin: 0 0 8px 0;">${staticUI.scanInjuryStep[lang]}</h3>
        <p style="color: var(--text-muted); margin: 0 0 20px 0; font-size:0.9rem;">${staticUI.scanInjuryDesc[lang]}</p>
        
        <div class="camera-placeholder">
          <video id="camera-stream" autoplay playsinline muted></video>
          <button class="flip-camera-btn" onclick="flipCamera()"><i data-lucide="refresh-ccw" size="20"></i></button>
          <div class="camera-guide"></div>
          <div class="camera-status" id="camera-status-1" style="width: 100%; padding: 0 40px; box-sizing: border-box; position: absolute; bottom: 0; display:flex; flex-direction:column;">
            <input type="file" id="file-upload-1" accept="image/png, image/jpeg" style="display:none;" onchange="handleFileUpload(event, 'camera2')">
            <button class="capture-btn" style="width: 100%; justify-content: center;" onclick="activateCaptureState('camera-status-1', 'camera2')">
              <i data-lucide="camera" style="margin-right:8px;"></i> ${staticUI.takePhoto[lang]}
            </button>
            <div style="font-weight: bold; margin: 4px 0; text-shadow:none; color:white; text-align: center;">${staticUI.orText[lang]}</div>
            <button class="capture-btn" style="width: 100%; justify-content: center; margin-top: 0; background: rgba(255,255,255,0.2); color: white; backdrop-filter: blur(4px); margin-bottom: 24px;" onclick="document.getElementById('file-upload-1').click()">
              <i data-lucide="image" style="margin-right:8px;"></i> ${staticUI.uploadPhoto[lang]}
            </button>
          </div>
        </div>
      `;
  } else if (currentState === 'camera2') {
     return `
        <button class="back-btn" onclick="navigate('camera1')"><i data-lucide="arrow-left"></i> ${staticUI.back[lang]}</button>
        <h3 style="margin: 0 0 8px 0;">${staticUI.scanKitStep[lang]}</h3>
        <p style="color: var(--text-muted); margin: 0 0 20px 0; font-size:0.9rem;">${staticUI.scanKitDesc[lang]}</p>
        
        <div class="camera-placeholder" style="background: #222;">
          <video id="camera-stream" autoplay playsinline muted></video>
          <button class="flip-camera-btn" onclick="flipCamera()"><i data-lucide="refresh-ccw" size="20"></i></button>
          <div class="camera-guide" style="border-style: dotted;"></div>
          <div class="camera-status" id="camera-status-2" style="width: 100%; padding: 0 40px; box-sizing: border-box; position: absolute; bottom: 0; display:flex; flex-direction:column;">
            <input type="file" id="file-upload-2" accept="image/png, image/jpeg" style="display:none;" onchange="handleFileUpload(event, 'analyze')">
            <button class="capture-btn" style="width: 100%; justify-content: center; color:var(--primary);" onclick="activateCaptureState('camera-status-2', 'analyze')">
              <i data-lucide="camera" style="margin-right:8px;"></i> ${staticUI.takePhoto[lang]}
            </button>
            <div style="font-weight: bold; margin: 4px 0; text-shadow:none; color:white; text-align: center;">${staticUI.orText[lang]}</div>
            <button class="capture-btn" style="width: 100%; justify-content: center; margin-top: 0; background: rgba(255,255,255,0.2); color: white; backdrop-filter: blur(4px); margin-bottom: 24px;" onclick="document.getElementById('file-upload-2').click()">
              <i data-lucide="image" style="margin-right:8px;"></i> ${staticUI.uploadPhoto[lang]}
            </button>
          </div>
        </div>
      `;
  } else if (currentState === 'chat') {
    // Simulated AI Diagnostics Render
    const catData = firstAidData[window.activeCategory];
    const subcatObj = catData?.subcategories[window.activeSubcategory];
    if (!subcatObj) return ''; // Fallback
    
    let severityHtml = '';
    const sev = subcatObj.severity;
    if (sev === 'Severe') {
      severityHtml = `<div class="severity-badge critical"><i data-lucide="alert-octagon" size="14"></i> ${staticUI.severity[lang]}: Severe</div>`;
    } else if (sev === 'Moderate') {
      severityHtml = `<div class="severity-badge warning"><i data-lucide="alert-triangle" size="14"></i> ${staticUI.severity[lang]}: Moderate</div>`;
    } else {
      severityHtml = `<div class="severity-badge safe"><i data-lucide="info" size="14"></i> ${staticUI.severity[lang]}: Low</div>`;
    }
    
    let stepsHtml = '';
    subcatObj.steps.forEach((step, idx) => {
      stepsHtml += `
        <div class="step-card">
          <div class="step-number">${idx + 1}</div>
          <div class="step-text">${step[lang]}</div>
        </div>
      `;
    });

    let emergencyPrompt = '';
    if (sev === 'Severe') {
      emergencyPrompt = `
        <div class="emergency-prompt" style="margin-top: 24px;">
          <button onclick="triggerEmergencyCall()"><i data-lucide="phone" size="18"></i> ${staticUI.callEmergency[lang]}</button>
        </div>
      `;
    }

    return `
      <div class="disclaimer" style="margin-bottom: 20px;">
        <i data-lucide="alert-triangle" color="#856404" style="flex-shrink: 0;"></i>
        <div>${staticUI.disclaimer[lang]}</div>
      </div>
      
      <div style="background: white; border-radius: 12px; padding: 16px; border: 1px solid var(--border); margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="display:flex; align-items:center; gap:8px; margin-bottom: 16px; color: var(--primary);">
            <i data-lucide="bot" size="24"></i> <span style="font-weight: 800; font-size:1.2rem;">${staticUI.aiAssessment[lang]}</span>
        </div>
        <h2 style="margin: 0 0 12px 0;">${subcatObj.title[lang]}</h2>
        ${severityHtml}
        
        <div class="steps-container" style="margin-top:24px;">
          ${stepsHtml}
        </div>
        ${emergencyPrompt}
      </div>
      
      <button class="capture-btn" style="width: 100%; justify-content: center; background: rgba(0,0,0,0.05); color: var(--text-dark); margin-top:0;" onclick="navigate('home')">
        <i data-lucide="list"></i> ${staticUI.notAccurate[lang]}
      </button>
    `;
  }
}

// Camera state logic
window.currentStream = null;
window.currentFacingMode = 'environment';

window.startCamera = async function() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: window.currentFacingMode } });
    window.currentStream = stream;
    const videoObj = document.getElementById('camera-stream');
    if (videoObj) {
      videoObj.srcObject = stream;
    }
  } catch (err) {
    console.error('Camera access denied or unavailable', err);
  }
};

window.flipCamera = async function() {
  window.currentFacingMode = window.currentFacingMode === 'environment' ? 'user' : 'environment';
  window.stopCamera();
  await window.startCamera();
};

window.stopCamera = function() {
  if (window.currentStream) {
    window.currentStream.getTracks().forEach(track => track.stop());
    window.currentStream = null;
  }
};

window.handleFileUpload = function(event, nextStepRoute) {
  const file = event.target.files[0];
  if (!file) {
    alert(staticUI.noImageError[window.appLanguage]);
    return;
  }
  
  if (!file.type.match('image/jpeg') && !file.type.match('image/png')) {
    alert(staticUI.invalidFormatError[window.appLanguage]);
    return;
  }
  
  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    window.capturedMimeType = dataUrl.split(';')[0].split(':')[1];
    window.capturedBase64 = dataUrl.split(',')[1];
    
    if (nextStepRoute === 'camera2') {
      navigate('camera2');
    } else if (nextStepRoute === 'analyze') {
      showAIResponse(window.capturedBase64);
    }
  };
  reader.readAsDataURL(file);
};

window.activateCaptureState = function(containerId, targetRoute) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  // Hide visual tracking aides like dashed lines natively from parent frame without breaking out
  if (container.parentElement) {
    const guides = container.parentElement.querySelectorAll('.camera-guide, .flip-camera-btn');
    guides.forEach(g => g.style.display = 'none');
  }

  container.style.padding = '0';
  container.innerHTML = `
    <div class="shutter-btn" onclick="triggerSnapshot('${containerId}', '${targetRoute}')">
      <div style="width: 52px; height: 52px; background: white; border-radius: 50%; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);"></div>
    </div>
  `;
};

window.triggerSnapshot = function(containerId, targetRoute) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const lang = window.appLanguage;
  
  // Freeze live feed logic implicitly visually
  const videoObj = document.getElementById('camera-stream');
  if (videoObj) {
    videoObj.pause();
    try {
      const canvas = document.createElement('canvas');
      canvas.width = videoObj.videoWidth;
      canvas.height = videoObj.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(videoObj, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg');
      window.capturedMimeType = "image/jpeg";
      window.capturedBase64 = dataUrl.split(',')[1];
    } catch(e) { 
      console.error("Canvas draw framework error", e); 
      window.capturedBase64 = "MOCKED_BASE64"; 
    }
  }
  
  container.innerHTML = `
    <div class="preview-controls">
      <button class="btn-retake" onclick="resetCaptureState('${containerId}', '${targetRoute}')">
        <i data-lucide="x"></i> ${staticUI.retake[lang]}
      </button>
      <button class="btn-confirm" onclick="confirmSnapshot('${targetRoute}')">
        <i data-lucide="check"></i> ${staticUI.confirm[lang]}
      </button>
    </div>
  `;
  if (window.lucide) lucide.createIcons();
};

window.resetCaptureState = function(containerId, targetRoute) {
  const videoObj = document.getElementById('camera-stream');
  if (videoObj) videoObj.play();
  window.activateCaptureState(containerId, targetRoute);
};

window.confirmSnapshot = function(targetRoute) {
  if (targetRoute === 'camera2') {
    navigate('camera2');
  } else if (targetRoute === 'analyze') {
    showAIResponse(window.capturedBase64);
  }
};

function render() {
  const main = document.getElementById('main-content');
  main.innerHTML = `<div class="view">${getViewHTML()}</div>`;
  
  if (window.lucide) {
    lucide.createIcons();
  }

  if (currentState === 'camera1' || currentState === 'camera2') {
    if (!window.currentStream) {
      window.startCamera();
    } else {
      const videoObj = document.getElementById('camera-stream');
      if (videoObj) videoObj.srcObject = window.currentStream;
    }
  }
}

// Global animation
const style = document.createElement('style');
style.innerHTML = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

// Do not call initial render here, relying on DOMContentLoaded from the top of the file
