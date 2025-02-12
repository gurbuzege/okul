
        document.getElementById("contactForm").addEventListener("submit", function(event) {
            event.preventDefault();
            
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
            
            if (name && email && message) {
                document.getElementById("responseMessage").innerText = "Teşekkürler, " + name + "! Mesajınız alınmıştır.";
                document.getElementById("contactForm").reset();
            } else {
                document.getElementById("responseMessage").innerText = "Lütfen tüm alanları doldurun.";
            }
        });

