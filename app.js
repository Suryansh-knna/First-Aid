// Application State
let currentState = 'home';

// Application Routing State
window.activeCategory = null;
window.activeSubcategory = null;
window.currentSearchQuery = '';

window.openCategory = function(category) {
  window.activeCategory = category;
  navigate('subcategories');
};

window.openInstruction = function(subcategory) {
  window.activeSubcategory = subcategory;
  navigate('instructions');
};

window.openSearchResult = function(category, subcategory) {
  window.activeCategory = category;
  window.activeSubcategory = subcategory;
  window.currentSearchQuery = ''; 
  navigate('instructions');
};

window.liveSearch = function(query) {
  window.currentSearchQuery = query.toLowerCase().trim();
  const dynamicArea = document.getElementById('home-dynamic-area');
  
  if (!dynamicArea) return;
  
  if (window.currentSearchQuery === '') {
    let cards = '';
    for (const [catName, catData] of Object.entries(firstAidData)) {
      const safeName = catName.replace(/'/g, "\\'");
      cards += `
        <div class="action-card" onclick="openCategory('${safeName}')">
          <div class="action-icon" style="color: ${catData.color}; background: ${catData.color}20;"><i data-lucide="${catData.icon}"></i></div>
          ${catName}
        </div>
      `;
    }
    dynamicArea.innerHTML = `
      <div class="quick-actions">
        <h3>Quick Guides</h3>
        <div class="action-grid">
          ${cards}
        </div>
      </div>
    `;
  } else {
    const results = searchDataset.filter(item => {
      if (item.name.toLowerCase().includes(window.currentSearchQuery)) return true;
      if (item.keywords.some(k => k.toLowerCase().includes(window.currentSearchQuery))) return true;
      return false;
    });
    
    if (results.length === 0) {
      dynamicArea.innerHTML = `
        <div class="empty-search">
          <i data-lucide="search-x" size="32" color="var(--text-muted)"></i>
          <p>No results found. Try another keyword.</p>
        </div>
      `;
    } else {
      let listHTML = '';
      results.forEach(result => {
        const catData = firstAidData[result.category];
        const safeCat = result.category.replace(/'/g, "\\'");
        const safeSub = result.name.replace(/'/g, "\\'");
        listHTML += `
          <div class="search-result-item" onclick="openSearchResult('${safeCat}', '${safeSub}')">
            <div class="search-result-name">${result.name}</div>
            <div class="search-result-category" style="color: ${catData.color};"><i data-lucide="${catData.icon}" size="12"></i> ${result.category}</div>
          </div>
        `;
      });
      dynamicArea.innerHTML = `
        <h3 style="margin-top:0;">Search Results</h3>
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

// Basic HTML strings for static views
const views = {
  camera1: `
    <button class="back-btn" onclick="navigate('home')"><i data-lucide="arrow-left"></i> Back</button>
    
    <div class="disclaimer">
      <i data-lucide="alert-triangle" color="#856404" style="flex-shrink:0;"></i>
      This is first aid guidance, not a medical diagnosis. Let UI guide you safely.
    </div>
    
    <h3 style="margin: 0 0 8px 0;">Step 1: Scan Injury</h3>
    <p style="color: var(--text-muted); margin: 0 0 20px 0; font-size:0.9rem;">Use the camera to roughly show the affected area.</p>
    
    <div class="camera-placeholder">
      <video id="camera-stream" autoplay playsinline muted></video>
      <button class="flip-camera-btn" onclick="flipCamera()"><i data-lucide="refresh-ccw" size="20"></i></button>
      <div class="camera-guide"></div>
      <div class="camera-status">
        <i data-lucide="focus" size="32"></i>
        <span>Position injury in frame</span>
        <button class="capture-btn" onclick="navigate('camera2')">
          <i data-lucide="camera"></i> Capture
        </button>
      </div>
    </div>
  `,
  camera2: `
    <button class="back-btn" onclick="navigate('camera1')"><i data-lucide="arrow-left"></i> Back</button>
    
    <h3 style="margin: 0 0 8px 0;">Step 2: Scan First Aid Kit</h3>
    <p style="color: var(--text-muted); margin: 0 0 20px 0; font-size:0.9rem;">Show us what supplies you have available.</p>
    
    <div class="camera-placeholder" style="background: #222;">
      <video id="camera-stream" autoplay playsinline muted></video>
      <button class="flip-camera-btn" onclick="flipCamera()"><i data-lucide="refresh-ccw" size="20"></i></button>
      <div class="camera-guide" style="border-style: dotted;"></div>
      <div class="camera-status">
        <i data-lucide="package" size="32"></i>
        <span>Scan bandages, antiseptics, etc.</span>
        <button class="capture-btn" onclick="showAIResponse()" style="color:var(--primary);">
          <i data-lucide="scan"></i> Analyze Resources
        </button>
      </div>
    </div>
  `,
  chat: `
    <button class="back-btn" onclick="navigate('home')"><i data-lucide="arrow-left"></i> End Session</button>
    
    <div class="disclaimer">
      <i data-lucide="alert-triangle" color="#856404" style="flex-shrink: 0;"></i>
      <div>This is first aid guidance, not a medical diagnosis. When in doubt or if severe, seek professional help.</div>
    </div>

    <div class="chat-bubble ai">
      <strong><i data-lucide="bot" size="18" style="vertical-align: middle; margin-right:4px;"></i>AI Assistant:</strong>
      <p style="margin: 8px 0;">I've analyzed the wound (moderate bleeding) and your kit. Here are the immediate steps using items identified:</p>
      
      <div class="step-list">
        <div class="step-item">
          <div class="step-number">1</div>
          <div><strong>Apply Pressure</strong><br><span style="color:var(--text-muted); font-size:0.9rem;">Use the clean cloth to apply firm pressure directly on the wound.</span></div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div><strong>Clean Wound</strong><br><span style="color:var(--text-muted); font-size:0.9rem;">Use the <em>antiseptic wipes</em> from your kit to clean around the area gently.</span></div>
        </div>
        <div class="step-item">
          <div class="step-number">3</div>
          <div><strong>Bandage</strong><br><span style="color:var(--text-muted); font-size:0.9rem;">Wrap the <em>sterile bandage</em> tightly, but not so tight it cuts off circulation.</span></div>
        </div>
      </div>

      <div class="emergency-prompt">
        <p>If bleeding continues for 10 minutes, seek immediate help.</p>
        <button onclick="triggerEmergencyCall()"><i data-lucide="phone" size="18"></i> Call Emergency Services</button>
      </div>
    </div>
  `
};

// Camera state
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
  main.innerHTML = `
    <div class="view" style="flex-direction:column; align-items:center; justify-content:center; height:100%; color:var(--primary); gap: 16px;">
      <i data-lucide="loader-2" class="spinner" size="48" style="animation: spin 1s linear infinite;"></i>
      <h3 style="margin:0;">Analyzing Situation...</h3>
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
  recognition.lang = 'en-US';
  
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

function getViewHTML() {
  if (currentState === 'home') {
    let cards = '';
    for (const [catName, catData] of Object.entries(firstAidData)) {
      const safeName = catName.replace(/'/g, "\\'");
      cards += `
        <div class="action-card" onclick="openCategory('${safeName}')">
          <div class="action-icon" style="color: ${catData.color}; background: ${catData.color}20;"><i data-lucide="${catData.icon}"></i></div>
          ${catName}
        </div>
      `;
    }
    return `
      <div class="search-container">
        <i data-lucide="search" color="var(--text-muted)"></i>
        <input type="text" id="search-input" placeholder="Search injuries..." oninput="liveSearch(this.value)" onkeypress="if(event.key === 'Enter') handleSearch()">
        <i id="mic-icon" data-lucide="mic" color="var(--primary)" style="cursor:pointer;" onclick="startVoiceSearch()"></i>
      </div>
      <div class="scan-cta" onclick="navigate('camera1')">
        <div class="scan-cta-text">
          <h3>AI Camera Assistant</h3>
          <p>Scan injury & available first aid kits</p>
        </div>
        <i data-lucide="camera" size="32"></i>
      </div>
      <div id="home-dynamic-area">
        <div class="quick-actions">
          <h3>Quick Guides</h3>
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
    for (const [subName, subcatObj] of Object.entries(catData.subcategories)) {
      const safeSubName = subName.replace(/'/g, "\\'");
      listHTML += `
        <div class="list-item" onclick="openInstruction('${safeSubName}')">
          <div class="list-item-icon" style="background: ${catData.color}20; color: ${catData.color}">
            <i data-lucide="${catData.icon}" size="20"></i>
          </div>
          <span class="list-item-title">${subName}</span>
          <i data-lucide="chevron-right" size="18" color="var(--text-muted)"></i>
        </div>
      `;
    }
    return `
      <button class="back-btn" onclick="navigate('home')"><i data-lucide="arrow-left"></i> Categories</button>
      <h3 style="margin-top:0; margin-bottom:16px;">${window.activeCategory}</h3>
      <div class="subcategory-list">
        ${listHTML}
      </div>
    `;
  } else if (currentState === 'instructions') {
    const subcatObj = firstAidData[window.activeCategory]?.subcategories[window.activeSubcategory];
    if (!subcatObj) return '';
    
    let severityHtml = '';
    const sev = subcatObj.severity;
    if (sev === 'Severe') {
      severityHtml = `<div class="severity-badge critical"><i data-lucide="alert-octagon" size="14"></i> Severe / Emergency</div>`;
    } else if (sev === 'Moderate') {
      severityHtml = `<div class="severity-badge warning"><i data-lucide="alert-triangle" size="14"></i> Moderate</div>`;
    } else {
      severityHtml = `<div class="severity-badge safe"><i data-lucide="info" size="14"></i> Low</div>`;
    }
    
    let stepsHtml = '';
    subcatObj.steps.forEach((step, idx) => {
      stepsHtml += `
        <div class="step-card">
          <div class="step-number">${idx + 1}</div>
          <div class="step-text">${step}</div>
        </div>
      `;
    });

    let emergencyPrompt = '';
    if (sev === 'Severe') {
      emergencyPrompt = `
        <div class="emergency-prompt" style="margin-top: 24px;">
          <p>Seek emergency help immediately.</p>
          <button onclick="triggerEmergencyCall()"><i data-lucide="phone" size="18"></i> Call Emergency Services</button>
        </div>
      `;
    }

    return `
      <button class="back-btn" onclick="navigate('subcategories')"><i data-lucide="arrow-left"></i> ${window.activeCategory}</button>
      <div class="disclaimer" style="margin-bottom:16px;">
        <i data-lucide="alert-triangle" color="#856404" style="flex-shrink:0;"></i>
        This is first aid guidance only.
      </div>
      <h2 style="margin: 0 0 12px 0;">${window.activeSubcategory}</h2>
      ${severityHtml}
      
      <div class="steps-container" style="margin-top:24px;">
        ${stepsHtml}
      </div>
      ${emergencyPrompt}
    `;
  }
  
  return views[currentState] || '';
}

function render() {
  const main = document.getElementById('main-content');
  main.innerHTML = `<div class="view">${getViewHTML()}</div>`;
  
  // Re-initialize lucide icons for newly injected HTML
  if (window.lucide) {
    lucide.createIcons();
  }

  // Handle camera lifecycle
  if (currentState === 'camera1' || currentState === 'camera2') {
    if (!window.currentStream) {
      window.startCamera();
    } else {
      const videoObj = document.getElementById('camera-stream');
      if (videoObj) videoObj.srcObject = window.currentStream;
    }
  }
}

// Ensure the spin animation exists
const style = document.createElement('style');
style.innerHTML = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

// Initial render
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', render);
} else {
  render();
}
