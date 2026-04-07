// Application State
let currentState = 'home';

// Basic HTML strings for different views
const views = {
  home: `
    <div class="search-container">
      <i data-lucide="search" color="var(--text-muted)"></i>
      <input type="text" placeholder="Describe the emergency...">
      <i data-lucide="mic" color="var(--primary)" style="cursor:pointer;" onclick="alert('Microphone input simulated')"></i>
    </div>

    <div class="scan-cta" onclick="navigate('camera1')">
      <div class="scan-cta-text">
        <h3>AI Camera Assistant</h3>
        <p>Scan injury & available first aid kits</p>
      </div>
      <i data-lucide="camera" size="32"></i>
    </div>

    <div class="quick-actions">
      <h3>Quick Guides</h3>
      <div class="action-grid">
        <div class="action-card" onclick="startChat('Bleeding')">
          <div class="action-icon"><i data-lucide="droplet"></i></div>
          Bleeding
        </div>
        <div class="action-card" onclick="startChat('Burns')">
          <div class="action-icon" style="color: #f59e0b;"><i data-lucide="flame"></i></div>
          Burns
        </div>
        <div class="action-card" onclick="startChat('Fractures')">
          <div class="action-icon" style="color: #8b5cf6;"><i data-lucide="activity"></i></div>
          Fractures
        </div>
        <div class="action-card" onclick="startChat('Choking')">
          <div class="action-icon" style="color: #ef4444;"><i data-lucide="user-x"></i></div>
          Choking
        </div>
      </div>
    </div>
  `,
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

window.triggerEmergencyCall = function() {
  window.location.href = "tel:112";
};

function render() {
  const main = document.getElementById('main-content');
  main.innerHTML = `<div class="view">${views[currentState]}</div>`;
  
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
