## Plan: Semantic + Responsive Audit for lab5a

ตรวจสอบหน้าโปรไฟล์ปัจจุบันในเชิง Semantic HTML และ Responsive Design โดยยึดไฟล์จริงที่มีอยู่ แล้วส่งมอบรายงานแบบ actionable: ระบุสิ่งที่ถูกต้อง, จุดที่ควรปรับ, ตัวอย่างโค้ดที่ต้องแก้ (เฉพาะส่วนที่เกี่ยวข้อง) พร้อมเหตุผลประกอบ เพื่อให้สามารถนำไปแก้ได้ทันทีโดยไม่เปลี่ยน visual direction หลัก.

**Steps**
1. Baseline audit ของโครงสร้างเอกสารและ CSS behavior จากไฟล์ปัจจุบัน (*completed*).
2. จัดกลุ่มผลตรวจ Semantic HTML เป็น 2 ชุด: "ผ่าน" และ "ควรปรับ" โดยผูกกับตำแหน่งจริงในไฟล์ (*depends on 1*).
3. ระบุโค้ดที่ควรแก้เชิง semantic พร้อมคำอธิบายผลกระทบต่อ accessibility/usability (*depends on 2*).
4. จัดกลุ่มผลตรวจ Responsive Design เป็น "ผ่าน" และ "ความเสี่ยง/ช่องว่าง" ครอบคลุม mobile nav, sticky header, anchor jump, motion preferences, overflow (*depends on 1*).
5. เสนอแนวทางแก้ responsive แบบเป็นขั้นตอน พร้อม CSS/HTML snippets เฉพาะจุดที่ต้องเปลี่ยน (*depends on 4*).
6. สรุปผลในรูปแบบที่ผู้ใช้ร้องขอ 4 ส่วน: Semantic summary, Code-to-fix + explanation, Responsive summary, Improvement recommendations (*depends on 3,5*).

**Relevant files**
- c:/Users/potte/Downloads/Generative_AI_Enterprise_IT/Generative_AI_Enterprise_IT_Camp/week1/lab5a/index.html — ตรวจ landmarks, heading hierarchy, list semantics, contact semantics, skip-link opportunity.
- c:/Users/potte/Downloads/Generative_AI_Enterprise_IT/Generative_AI_Enterprise_IT_Camp/week1/lab5a/style.css — ตรวจ fluid sizing, media query behavior, sticky header interactions, motion/accessibility, touch target sizing.

**Verification**
1. ตรวจความครบถ้วนว่าในรายงานมีทั้งจุด "ดีอยู่แล้ว" และ "ควรปรับ" สำหรับ Semantic และ Responsive.
2. ตรวจว่าแต่ละข้อเสนอมีเหตุผลทาง semantic/responsive ชัดเจน ไม่ใช่แค่เปลี่ยนรูปแบบ.
3. ตรวจว่า code snippets ที่เสนออ้างอิงโครงสร้างปัจจุบันของไฟล์จริงและสอดคล้องกับดีไซน์เดิม.
4. ตรวจว่าเนื้อหาส่งมอบตรง format ที่ผู้ใช้กำหนดครบทั้ง 4 หัวข้อ.

**Decisions**
- In scope: ตรวจและเสนอการปรับปรุงโค้ดในหน้าเดียว (index.html + style.css) โดยไม่แก้ไฟล์จริงในรอบนี้.
- Out of scope: การเพิ่ม JavaScript, การเปลี่ยนธีมดีไซน์ใหญ่, การรีแฟคเตอร์ข้ามโฟลเดอร์.
- Assumption: เป็น single-page profile ที่ใช้ hash navigation ภายในหน้าเดียว.

**Further Considerations**
1. หากต้องการ strict accessibility มากขึ้น สามารถเพิ่ม checklist เสริม (skip link, reduced motion, link purpose clarity) เป็นเกณฑ์บังคับก่อนส่งงาน.
2. หากต้องการความพร้อม production สามารถเพิ่มขั้น validate ผ่าน HTML validator และ mobile viewport smoke test หลาย breakpoints.