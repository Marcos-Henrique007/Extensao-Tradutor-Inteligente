# Tradutor Inteligente

Uma extensão para Google Chrome que permite traduzir textos selecionados diretamente em qualquer página da web de forma rápida e prática.

---

##  Funcionalidades

-  Detecta texto selecionado pelo usuário
-  Exibe o botão **"Traduzir agora"**
-  Tradução automática para Português
-  Copiar tradução com um clique
-  Interface leve e intuitiva
-  Funciona em praticamente qualquer site HTTP/HTTPS

---

## Estrutura do Projeto

```text
Tradutor/
│
├── manifest.json
│
└── src/
    └── content/
        ├── content.js
        └── content.css
```

---

## Tecnologias Utilizadas

- JavaScript
- CSS3
- HTML5
- Chrome Extensions (Manifest V3)
- MyMemory Translation API

---

## Instalação

### 1. Baixe o projeto

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/tradutor-inteligente.git
```

ou faça o download do ZIP.

### 2. Abra o Chrome

Acesse:

```text
chrome://extensions
```

### 3. Ative o Modo do Desenvolvedor

No canto superior direito da página.

### 4. Carregue a extensão

Clique em:

```text
Carregar sem compactação
```

e selecione a pasta do projeto.

---

## Como Utilizar

1. Abra qualquer página da web.
2. Selecione um texto.
3. Clique em **Traduzir agora**.
4. Aguarde a tradução.
5. Copie o resultado se desejar.

---

## Exemplo

**Texto Original**

```text
Hello, how are you?
```

**Tradução**

```text
Olá, como você está?
```

---

## Permissões

| Permissão | Finalidade |
|------------|------------|
| activeTab | Interação com a aba atual |
| scripting | Execução de scripts na página |
| host_permissions | Comunicação com a API de tradução |


## Autor

**Marcos Henrique Barbosa Pessoa**

Projeto desenvolvido para fins de estudos e aperfeiçoamento em desenvolvimento.

---

## Licença

Este projeto é distribuído para fins educacionais.
