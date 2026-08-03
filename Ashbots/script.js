// AshBots — hero chat demo
// Replays a short lead-capture conversation in the hero panel to show the
// product in action.
function runChatDemo() {
  const body = document.getElementById('chatBody');
  if (!body) return;
  const script = [
    { type: 'bot', text: "Hi! I noticed you were looking at our pricing. Would you like a custom quote?" },
    { type: 'user', text: "Yes, please. I have a small team." },
    { type: 'bot', text: "Perfect. Let me collect a few details to get that started for you..." },
    { type: 'system', text: "New lead captured successfully" },
  ];
  let i = 0;
  function clearBody() {
    body.innerHTML = '';
  }
  function showTyping(callback, delay) {
    const t = document.createElement('div');
    t.className = 'typing';
    t.innerHTML = '<span></span><span></span><span></span>';
    body.appendChild(t);
    setTimeout(() => {
      t.remove();
      callback();
    }, delay);
  }
  function addBubble(step) {
    const el = document.createElement('div');
    if (step.type === 'system') {
      el.className = 'bubble system';
    } else {
      el.className = 'bubble ' + step.type;
    }
    el.textContent = step.text;
    body.appendChild(el);
  }
  function step() {
    if (i >= script.length) {
      setTimeout(() => { clearBody(); i = 0; step(); }, 2600);
      return;
    }
    const current = script[i];
    if (current.type === 'bot') {
      showTyping(() => {
        addBubble(current);
        i++;
        setTimeout(step, 900);
      }, 900);
    } else {
      addBubble(current);
      i++;
      setTimeout(step, 900);
    }
  }
  step();
}
// AshBots — live chatbot
// Loads your Voiceflow assistant as the floating widget bubble.
// This runs on every page (index, pricing, about, contact) since they all
// link this same script.js file, so the bot shows up site-wide from here.
function loadVoiceflowBot() {
  (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: '6a710b1fa0271204c89f35d4' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: {
            url: "https://runtime-api.voiceflow.com"
          }
        });
      }
      v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
  })(document, 'script');
}
document.addEventListener('DOMContentLoaded', runChatDemo);
document.addEventListener('DOMContentLoaded', loadVoiceflowBot);
