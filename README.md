# ⏰ Pomodoro Timer
![Made with HTML](https://img.shields.io/badge/HTML-5-orange?logo=html5&logoColor=white)
![Made with CSS](https://img.shields.io/badge/CSS-3-blue?logo=css3&logoColor=white)
![Made with JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&logoColor=black)
![Responsive UI](https://img.shields.io/badge/UI-Responsive-green?logo=google-chrome&logoColor=white)
![Notifications Enabled](https://img.shields.io/badge/Notifications-Enabled-red?logo=bell&logoColor=white)


Um timer estilo **Pomodoro** feito em **HTML, CSS e JavaScript**, com notificações visuais e sonoras para ajudar na produtividade.  
O design é minimalista, com cores suaves e um círculo central que destaca o tempo restante.

---

## ✨ Funcionalidades
- Alterna automaticamente entre **trabalho** e **descanso** (curto e longo).
- Botões de **Iniciar/Pausar** e **Reiniciar**.
- Configuração de tempo de trabalho e número de turnos.
- **Notificação sonora** (ding) ao final de cada turno.
- **Notificação visual** no navegador (se permitido).
- Interface estilizada com **imagem de fundo** e **círculo animado** para o timer.

---

## 🖼️ Layout (UI Responsiva)
A interface do Pomodoro Timer foi pensada para ser simples, clara e adaptável a diferentes estilos de interface:

1. **Layout centralizado**: o círculo do timer fica em destaque no centro da tela.
2. **Botões proporcionais e alinhados**: Iniciar, Pausar e Reiniciar aparecem de forma intuitiva.
3. **Imagem de fundo com overlay escuro**: melhora a legibilidade e dá um toque moderno.
4. **Círculo animado**: transmite dinamismo e reforça a ideia de tempo passando.
5. **Notificações visuais**: o navegador avisa o usuário ao fim de cada ciclo, complementando a experiência.  

Essa combinação garante que o usuário tenha uma experiência agradável com cada detalhe do Timer.
---

## 🚀 Como usar
1. Clone este repositório:
   ````bash
   git clone https://github.com/seu-usuario/pomodoro-timer.git
2. Abra o arquivo index.html no navegador.

3. Configure o tempo e os turnos.

4. Clique em Iniciar e comece seu ciclo Pomodoro!


## 📂 Estrutura do projeto
```plaintext
pomodoro-timer/
├── index.html    --> Estrutura principal
├── style.css     --> Estilos e layout
├── script.js     --> Lógica do timer
└── imagens/      --> Pasta para imagens de fundo
```
---

## 🎨 Personalização
#### Troque a imagem de fundo em style.css:

```css
body {
  font-family: 'Poppins', sans-serif;
  background: url("imagens/fundo.jpg") no-repeat center center fixed;
  background-size: cover;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```
(Substitua "imagens/fundo.jpg" pelo seu arquivo de imagem, que precisa estar dentro da pasta do projeto)

---

## 📄 Substitua o arquivo notification.mp3 para usar outro som de notificação:
*Trecho do arquivo `index.html`*

```html
<div class="main">
    <audio id="notification">
        <source src="over-the-horizon-bts-64kbps.mp3" />
    </audio>
</div>
```
(Substitua apenas a música entre aspas na linha "source")

---

## 💡 Qual foi a inspiração para esse projeto?
Este projeto foi criado para praticar JavaScript, DOM Manipulation e CSS Flexbox/Grid, além de aplicar conceitos de UX/UI em um app simples e útil.

---

## 📌 Próximos passos que pretendo aplicar:
1. Adicionar animação de pulso no círculo do timer;
2. Criar histórico de sessões concluídas;
3. Permitir salvar configurações no navegador.

---
## 🖤 Créditos

```plaintext
Feito com ❤️ por Iasmim Mann
```
![Open Source](https://img.shields.io/badge/Open%20Source-Yes-2ECC71?logo=github&logoColor=white)
![Deploy GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-327FC7?logo=github&logoColor=white)
![Made with ❤️](https://img.shields.io/badge/Made%20with-%E2%9D%A4%EF%B8%8F-FF69B4)
