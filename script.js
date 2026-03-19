  (function() {
    // just a fancy placeholder widget: show current time + demo message
    const jsSpan = document.getElementById('js-demo-placeholder');
    const updateBtn = document.getElementById('updateJsBtn');

    function updateDemoText() {
      if (!jsSpan) return;
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      jsSpan.innerHTML = `🕒 placeholder time: ${timeStr} · conference days TBD`;
    }

    updateDemoText();
    // update every second just for fun (modern feel)
    setInterval(updateDemoText, 1000);

    if (updateBtn) {
      updateBtn.addEventListener('click', function() {
        updateDemoText();
        alert('🔄 placeholder updated (js demo). replace with actual countdown or data.');
      });
    }

    // demo alert on hero button
    const demoBtn = document.getElementById('demo-alert-btn');
    if (demoBtn) {
      demoBtn.addEventListener('click', function() {
        alert('👋 hello from placeholder javascript. ready for your real content!');
      });
    }

    // optional: make any card click dummy (just to show placeholder behavior)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        console.log('placeholder card clicked — replace with actual link.');
      });
    });

  })();
