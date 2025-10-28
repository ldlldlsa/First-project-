new TypeIt("#myElement", {
    strings: ['Interior design ' , 'Furniture Designer'],
    speed: 150,
    breakLines: false,
    waitUntilVisible: true ,
  
  loop: true,             // تكرار مستمر
  loopDelay: 3000,        // تأخير قبل إعادة التكرار
  
  cursor: true,           // إظهار المؤشر
cursorChar: '|', 


}).go();