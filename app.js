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

window.showAIResponse = function() {
  window.stopCamera();
  const main = document.getElementById('main-content');
  const lang = window.appLanguage;
  main.innerHTML = `
    <div class="view" style="flex-direction:column; align-items:center; justify-content:center; height:100%; color:var(--primary); gap: 16px;">
      <i data-lucide="loader-2" class="spinner" size="48" style="animation: spin 1s linear infinite;"></i>
      <h3 style="margin:0;">${staticUI.analyzing[lang]}</h3>
    </div>
  `;
  if (window.lucide) {
    lucide.createIcons();
  }
  
  setTimeout(() => {
    navigate('chat');
  }, 1500);
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
    for (const subcatObj of Object.values(catData.subcategories)) {
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
    return `
      <button class="back-btn" onclick="navigate('home')"><i data-lucide="arrow-left"></i> ${staticUI.back[lang]}</button>
      <div class="disclaimer">
        <i data-lucide="alert-triangle" color="#856404" style="flex-shrink: 0;"></i>
        <div>${staticUI.disclaimer[lang]}</div>
      </div>
      <div class="chat-bubble ai">
        <strong><i data-lucide="bot" size="18" style="vertical-align: middle; margin-right:4px;"></i>AI Assistant:</strong>
        <p style="margin: 8px 0; font-size:0.8rem; color:var(--text-muted);">
          [Internal Node Override] Act as a medical assistant. Native translation target: <b>${lang.toUpperCase()}</b>. Provide diagnosis details securely matching the user's localized configuration.
        </p>
        <div class="emergency-prompt">
          <button onclick="triggerEmergencyCall()"><i data-lucide="phone" size="18"></i> ${staticUI.callEmergency[lang]}</button>
        </div>
      </div>
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
  
  // Proceed directly if successfully uploaded valid image
  if (nextStepRoute === 'camera2') {
    navigate('camera2');
  } else if (nextStepRoute === 'analyze') {
    showAIResponse();
  }
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
  if (videoObj) videoObj.pause();
  
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
    showAIResponse();
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
