✅ FEATURE LIST
🔐 Auth
POST /api/register
POST /api/login

🏢 Room
GET /api/rooms
POST /api/rooms
PUT /api/rooms/:id
DELETE /api/rooms/:id

📅 Booking
GET /api/bookings
POST /api/bookings → ตรวจเวลาซ้ำด้วย!
DELETE /api/bookings/:id
GET /api/rooms/:id/availability?date=2025-07-18


MUST DO 😎
npm install express nodemon morgan cors

Git TIPS
** Config (รอบแรกครั้งเดียว)
... หลังติดตั้ง GIT (และ register ที่ github.com แล้ว)
 > git config --global user.name "Username"
 > git config --global user.email "Email Github"

 > git config --global -l 
 เพื่อดู config 

=============================================================================
วงจรการทำงานกับ Git

แก้ไขไฟล์ => git add . => git commit -m "...."

การ commit 1 ครั้ง คือการเก็บสภาพโฟลเดอร์นั้นไว้ 1 ชุด
=============================================================================

** git init (ทำตอนเริ่ม project ครั้งเดียว)
> git init 
> git status 
> git add . / git add index.html

** git commit: จัดเก็บข้อมูล (local-repo)
> git commit -m "ข้อความอธิบาย"
> git log  / git log --oneline                  #show log 

============  สรุปคำสั่ง  ============
> git init                       #start git(1 time)
> git add .                      #add all file
> git commit -m "message"        #commit or save project 
> git status                     #show status
> git log                        #show log
> git log --oneline              #show log one line


> git checkout <commit ID>


** Remote repo
> git branch -M main                                    
> git remote add origin https://github.com/....
> git push -u origin main


