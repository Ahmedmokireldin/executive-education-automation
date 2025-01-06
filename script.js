// Interactive Workflow Diagram
const workflowImage = document.querySelector('.workflow-image');
const tooltip = document.getElementById('tooltip');

const tooltipData = {
  'lead-generation': { x: 50, y: 20, text: 'Step 1: Lead Generation' },
  'crm-integration': { x: 150, y: 80, text: 'Step 2: CRM Integration' },
  'email-sequences': { x: 250, y: 140, text: 'Step 3: Email Sequences' },
  'whatsapp-automation': { x: 350, y: 200, text: 'Step 4: WhatsApp Automation' },
  'analytics-reporting': { x: 450, y: 260, text: 'Step 5: Analytics & Reporting' },
};

workflowImage.addEventListener('mousemove', (e) => {
  const rect = workflowImage.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  for (const key in tooltipData) {
    const data = tooltipData[key];
    if (x >= data.x - 50 && x <= data.x + 50 && y >= data.y - 50 && y <= data.y + 50) {
      tooltip.style.display = 'block';
      tooltip.style.left = `${x + 10}px`;
      tooltip.style.top = `${y + 10}px`;
      tooltip.textContent = data.text;
      return;
    }
  }
  tooltip.style.display = 'none';
});

workflowImage.addEventListener('mouseleave', () => {
  tooltip.style.display = 'none';
});
