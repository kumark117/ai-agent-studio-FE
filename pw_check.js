const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ headless: true });
  const p = await b.newPage();
  const errors = [];
  p.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  await p.goto('http://localhost:3001', { waitUntil: 'networkidle' });
  await p.screenshot({ path: 'C:\\Users\\kumar\\AppData\\Local\\Temp\\home.png' });

  // 1. Scroll to workflow section and check stage buttons
  await p.evaluate(() => document.getElementById('workflow')?.scrollIntoView());
  await p.waitForTimeout(800);

  const allButtons = await p.locator('section#workflow button').allTextContents();
  console.log('Workflow buttons found:', JSON.stringify(allButtons));

  // Get current detail panel h3
  const h3Before = await p.locator('section#workflow h3').first().textContent().catch(() => 'N/A');
  console.log('Detail h3 before:', h3Before);

  // Click Contact (second stage button)
  const stageButtons = p.locator('section#workflow .lg\\:col-span-2 button');
  const count = await stageButtons.count();
  console.log('Stage button count:', count);

  if (count >= 2) {
    await stageButtons.nth(1).click();
    await p.waitForTimeout(400);
    const h3After = await p.locator('section#workflow h3').first().textContent().catch(() => 'N/A');
    console.log('Detail h3 after Contact click:', h3After);
    console.log('Changed:', h3Before !== h3After);
  }
  await p.screenshot({ path: 'C:\\Users\\kumar\\AppData\\Local\\Temp\\contact_clicked.png' });

  // Click Next →
  const nextBtn = p.locator('section#workflow button', { hasText: 'Next →' });
  const nextExists = await nextBtn.count();
  console.log('Next button count:', nextExists);
  if (nextExists) {
    const h3BeforeNext = await p.locator('section#workflow h3').first().textContent().catch(() => 'N/A');
    await nextBtn.click();
    await p.waitForTimeout(400);
    const h3AfterNext = await p.locator('section#workflow h3').first().textContent().catch(() => 'N/A');
    console.log('h3 before Next:', h3BeforeNext, '| after:', h3AfterNext);
    console.log('Next button worked:', h3BeforeNext !== h3AfterNext);
  }

  // 4. Click Book a Demo button in header
  await p.locator('header button', { hasText: 'Book a Demo' }).click();
  await p.waitForTimeout(600);
  const modalVisible = await p.locator('[role="dialog"]').isVisible().catch(() => false);
  console.log('Modal visible:', modalVisible);
  await p.screenshot({ path: 'C:\\Users\\kumar\\AppData\\Local\\Temp\\modal_open.png' });

  // 5. Click Website Chat
  if (modalVisible) {
    await p.locator('button', { hasText: 'Website Chat' }).click();
    await p.waitForTimeout(1000);
    const typingVisible = await p.locator('.animate-bounce').first().isVisible().catch(() => false);
    console.log('Typing indicator visible after channel pick:', typingVisible);
    await p.screenshot({ path: 'C:\\Users\\kumar\\AppData\\Local\\Temp\\demo_start.png' });

    // Wait for simulation to complete (~18s total)
    await p.waitForTimeout(18000);
    const crmPanel = await p.getByText('CRM Updated').isVisible().catch(() => false);
    const bookBtn = await p.getByText('Book a Real Demo →').isVisible().catch(() => false);
    console.log('CRM panel visible:', crmPanel, '| Book button visible:', bookBtn);
    await p.screenshot({ path: 'C:\\Users\\kumar\\AppData\\Local\\Temp\\demo_done.png' });
  }

  console.log('Console errors:', JSON.stringify(errors));
  await b.close();
})();
