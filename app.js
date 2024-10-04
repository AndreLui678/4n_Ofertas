const con = document.querySelector('.linksContainer');

function entrarPasta(categorias) {

  switch (categorias) {
    case '1':
      // Gera os botões "Cozinha Pt 1", "Cozinha Pt 2" e "Cozinha Pt 3"
      for (let i = 1; i <= 1; i++) {
        const btn = document.createElement('button');
        btn.classList.add('itensBtn');
        btn.innerHTML = `COZINHA Pt ${i}`;
        con.appendChild(btn);

        // Adiciona evento de clique para exibir os itens corretos
        btn.addEventListener('click', function () {
          con.innerHTML = '';
          let startIndex = (i - 1) * 5;
          let endIndex = startIndex + 5;

          for (let j = startIndex; j < endIndex; j++) {
            const item = cozinha[j];
            const itemBtn = document.createElement('button');
            itemBtn.classList.add('itensBtn');
            itemBtn.innerHTML = item.name; // Nome do item
            itemBtn.setAttribute('data-id', item.id);

            itemBtn.addEventListener('click', function () {
              window.open(item.link)
            });

            con.appendChild(itemBtn);
          }
        });
      }
      break;

    case '2':
      for (let i = 1; i <= 1; i++) {
        const btn = document.createElement('button')
        btn.classList.add('itensBtn');
        btn.innerHTML = `SALA Pt ${i}`
        con.appendChild(btn)

        btn.addEventListener('click', function () {
          con.innerHTML = ''
          let startIndex = (i - 1) * 5;
          let endIndex = startIndex + 5;

          for (let j = startIndex; j < endIndex; j++) {
            const item = sala[j];
            const itemBtn = document.createElement('button');
            itemBtn.classList.add('itensBtn')
            itemBtn.innerHTML = item.name
            itemBtn.setAttribute('data-id', item.id)

            itemBtn.addEventListener('click', function () {
              window.open(item.link)
            });

            con.appendChild(itemBtn)

          }
        })
      }
      break;

    case '3':
      for (let i = 1; i <= 1; i++) {
        const btn = document.createElement('button')
        btn.classList.add('itensBtn')
        btn.innerHTML = `QUARTO Pt ${i}`
        con.appendChild(btn);

        btn.addEventListener('click', () => {
          con.innerHTML = ''
          let startIndex = (i - 1) * 5;
          let endIndex = startIndex + 5;

          for (let j = startIndex; j < endIndex; j++) {
            const item = quarto[j];
            const itemBtn = document.createElement('button');
            itemBtn.classList.add('itensBtn');
            itemBtn.innerHTML = item.name
            itemBtn.setAttribute('data-id', item.id);

            itemBtn.addEventListener('click', () => {
              window.open(item.link)
            })

            con.appendChild(itemBtn)

          }
        })

      }
      break

    case '4':
      for (let i = 1; i <= 1; i++) {
        const btn = document.createElement('button')
        btn.classList.add('itensBtn')
        btn.innerHTML = `BANHEIRO Pt ${i}`
        con.appendChild(btn);

        btn.addEventListener('click', () => {
          con.innerHTML = ''
          let startIndex = (i - 1) * 5;
          let endIndex = startIndex + 5;

          for (let j = startIndex; j < endIndex; j++) {
            const item = banheiro[j];
            const itemBtn = document.createElement('button');
            itemBtn.classList.add('itensBtn');
            itemBtn.innerHTML = item.name
            itemBtn.setAttribute('data-id', item.id);

            itemBtn.addEventListener('click', () => {
              window.open(item.link)
            })

            con.appendChild(itemBtn)

          }
        })

      }
      break

    default:
      alert('não tem');
      break;
  }
}

// Adiciona evento aos botões da classe "linksBtn"
document.querySelectorAll('.linksBtn').forEach(function (btn) {
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    const categoria = btn.getAttribute('data-categoria');
    entrarPasta(categoria);

    // Oculta os botões anteriores
    document.querySelectorAll('.linksBtn').forEach(function (buttons) {
      buttons.style.display = 'none';
    });
  });
});

document.querySelector('.voltarDiv').addEventListener('click', () => {
  location.reload()
})