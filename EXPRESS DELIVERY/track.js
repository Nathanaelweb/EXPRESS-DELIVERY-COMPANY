document.addEventListener('DOMContentLoaded', function() {
    // Get the tracking code from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const trackingCode = urlParams.get('code');
  
    if (trackingCode) {
      document.getElementById('tracking-code').innerText = trackingCode;
  
      // Simulated tracking timeline data (for demonstration)
      const timelineData = [
        { status: 'Package Picked Up', time: '09:00 AM' },
        { status: 'In Transit', time: '11:00 AM' },
        { status: 'Out for Delivery', time: '02:00 PM' },
        { status: 'Delivered', time: '04:00 PM' }
      ];
  
      let timelineHtml = '';
      timelineData.forEach(item => {
        timelineHtml += `
          <div class="timeline-item">
            <span class="status">${item.status}</span>
            <span class="time">${item.time}</span>
          </div>
        `;
      });
  
      document.querySelector('.timeline').innerHTML = timelineHtml;
    } else {
      document.querySelector('.tracking-info').innerHTML =
        "<p>No tracking code provided. Please go back and enter a valid tracking code.</p>";
    }
  });
  