new TypeIt("#myElement", {
    strings: ['Interior design ' , 'Furniture Designer'],
    speed: 250,
    breakLines: false,
    waitUntilVisible: true ,
  
  loop: true,             // تكرار مستمر
  loopDelay: 3000,        // تأخير قبل إعادة التكرار
  
  cursor: true,           // إظهار المؤشر
cursorChar: '|', 


}).go();


        // تهيئة EmailJS بالـ Public Key
        emailjs.init("lCRpm9pw1ATgW40cF"); // ضع Public Key هنا

        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();

            // إرسال النموذج
            emailjs.sendForm('service_gm51enl', 'template_65wiypr', this)
                .then(function() {
                    alert('تم إرسال الرسالة بنجاح!');
                }, function(error) {
                    alert('فشل الإرسال: ' + error.text);
                });
              
        });




