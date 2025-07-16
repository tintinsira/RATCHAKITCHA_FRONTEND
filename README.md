# setup Project ครั้งแรก
npm i

# คู่มือการใช้งาน Git และ GitHub ผ่าน Command Line (CMD)

## การติดตั้ง Git
ก่อนเริ่มใช้งาน คุณต้องติดตั้ง Git ก่อน สามารถดาวน์โหลดได้จาก [Git](https://git-scm.com/downloads)

## การตั้งค่าเบื้องต้น
หลังจากติดตั้ง Git แล้ว ให้ตั้งค่า username และ email:

```
git config --global user.name "ชื่อของคุณ"
git config --global user.email "อีเมลของคุณ"

การสร้าง Repository ใหม่
คุณสามารถสร้าง repository ใหม่โดยใช้คำสั่งดังนี้:
mkdir ชื่อโปรเจค
cd ชื่อโปรเจค

git init

การคลอน (Clone) Repository ที่มีอยู่
ในการคลอน repository จาก GitHub:

git clone URL-ของ-repository

การตรวจสอบสถานะของ repository
เพื่อดูสถานะของไฟล์ใน repository:

git status

การเพิ่มไฟล์ไปยัง staging area
เพื่อเพิ่มไฟล์ใหม่หรือไฟล์ที่ถูกแก้ไขไปยัง staging area:

git add ชื่อไฟล์

หรือถ้าต้องการเพิ่มทุกไฟล์ที่มีการเปลี่ยนแปลง:

git add .

การคอมมิต (Commit) การเปลี่ยนแปลง
เพื่อคอมมิตการเปลี่ยนแปลงที่อยู่ใน staging area พร้อมกับข้อความ:

git commit -m "ข้อความคอมมิต"

การดูประวัติการคอมมิต
เพื่อดูประวัติของการคอมมิต:

git log

การเชื่อมต่อกับ Remote Repository
เพื่อเพิ่ม remote repository:

git remote add origin URL-ของ-repository

การพุช (Push) การเปลี่ยนแปลงไปยัง Remote Repository
เพื่อพุชการเปลี่ยนแปลงไปยัง remote repository:

git push origin สาขา

การพูล (Pull) การเปลี่ยนแปลงจาก Remote Repository
เพื่อดึงการเปลี่ยนแปลงจาก remote repository:

git pull origin สาขา

การสร้างและสลับสาขา (Branch)
เพื่อสร้างสาขาใหม่:

git branch ชื่อสาขา

เพื่อสลับไปยังสาขาที่สร้าง:

git checkout ชื่อสาขา

หรือสร้างและสลับไปยังสาขาใหม่ในคำสั่งเดียว:

git checkout -b ชื่อสาขา

การผสาน (Merge) สาขา
เพื่อผสานสาขาหนึ่งเข้ากับสาขาปัจจุบัน:

git merge ชื่อสาขาที่ต้องการผสาน

การลบสาขา
เพื่อลบสาขาที่ไม่ต้องการ:

git branch -d ชื่อสาขา

การแก้ไขปัญหาความขัดแย้ง (Merge Conflict)
เมื่อเกิดความขัดแย้งในการผสานสาขา:
เปิดไฟล์ที่มีความขัดแย้งและแก้ไขความขัดแย้ง
เพิ่มไฟล์ที่แก้ไขแล้วไปยัง staging area:

git add ชื่อไฟล์

คอมมิตการแก้ไข:
git commit -m "แก้ไขความขัดแย้ง"

การใช้งาน GitHub
การสร้าง GitHub Repository
เข้าไปที่ GitHub และเข้าสู่ระบบ
คลิกที่ "New repository"
กรอกชื่อ repository และรายละเอียดต่าง ๆ
คลิกที่ "Create repository"
การเชื่อมต่อ Repository ท้องถิ่นกับ GitHub
ใช้คำสั่งด้านล่างหลังจากสร้าง repository บน GitHub และเชื่อมต่อ:

git remote add origin URL-ของ-repository
git push -u origin master

สรุปคำสั่งพื้นฐาน
git init - สร้าง repository ใหม่
git clone - คลอน repository ที่มีอยู่
git status - ตรวจสอบสถานะของไฟล์ใน repository
git add - เพิ่มไฟล์ไปยัง staging area
git commit - คอมมิตการเปลี่ยนแปลง
git push - พุชการเปลี่ยนแปลงไปยัง remote repository
git pull - ดึงการเปลี่ยนแปลงจาก remote repository
git branch - สร้างสาขาใหม่
git checkout - สลับสาขา
git merge - ผสานสาขา
git log - ดูประวัติการคอมมิต
