document.querySelector('form').addEventListener('submit', function (e) {
    const btn = this.querySelector('button');
    btn.innerText = 'Enviando...';
    btn.disabled = true;

    setTimeout(() => {
      alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      btn.innerText = 'Enviar Mensagem';
      btn.disabled = false;
      this.reset();
    }, 1500);
  });
