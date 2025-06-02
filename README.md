# Calculadora de IMC

Uma calculadora de Índice de Massa Corporal (IMC) moderna e responsiva desenvolvida com HTML, CSS e JavaScript. Este projeto foi criado como parte do programa Geração Tech do IEL.

![Screenshot da calculadora de IMC](https://i.imgur.com/qoBThi2.jpeg)

## 📋 Sobre o Projeto

Esta calculadora permite aos usuários:
- Inserir seu peso em quilogramas
- Inserir sua altura em metros
- Calcular automaticamente o IMC
- Visualizar a classificação do IMC conforme padrões da OMS
- Experiência responsiva em dispositivos móveis e desktop

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estruturação semântica da página
- **CSS3**: Estilização personalizada
- **JavaScript**: Lógica de cálculo e manipulação DOM
- **TailwindCSS**: Framework de utilidades CSS para estilização rápida
- **Responsividade**: Layout adaptável para todos os tamanhos de tela

## 🔧 Funcionalidades

- Cálculo preciso do IMC usando a fórmula: Peso (kg) / Altura² (m)
- Exibição instantânea dos resultados sem recarregar a página
- Tabela de referência com classificação de IMC segundo a OMS
- Interface intuitiva com feedback visual
- Validação de entrada para evitar cálculos inválidos
- Design moderno com tema escuro

## 💻 Como Usar

### Online
Acesse a calculadora diretamente pelo GitHub Pages: [Calculadora de IMC](https://lucascarvalhoo.github.io/caculadora-imc/)

### Localmente
1. Clone este repositório:
   ```
   git clone https://github.com/LucasCarvalhoo/calculadora-imc.git
   ```
2. Abra o arquivo `index.html` em seu navegador preferido

## 🧮 Como Funciona o Cálculo

O IMC é calculado dividindo o peso (em quilogramas) pela altura ao quadrado (em metros):

```
IMC = peso / (altura * altura)
```

O resultado é então classificado de acordo com os padrões internacionais:

| IMC (kg/m²) | Classificação |
|-------------|---------------|
| Menor que 18,5 | Abaixo do peso |
| 18,5 a 24,9 | Peso normal |
| 25,0 a 29,9 | Sobrepeso |
| 30,0 a 34,9 | Obesidade grau 1 |
| 35,0 a 39,9 | Obesidade grau 2 |
| Maior ou igual a 40,0 | Obesidade grau 3 |

## 📱 Responsividade

A interface se ajusta automaticamente para proporcionar a melhor experiência em:
- Smartphones
- Tablets
- Desktops
- Telas largas

## 🧠 Aprendizados do Projeto

Durante o desenvolvimento deste projeto, pude explorar:
- Manipulação do DOM com JavaScript puro
- Implementação de design responsivo com TailwindCSS
- Criação de interfaces interativas
- Validação de formulários e feedback ao usuário
- Boas práticas de usabilidade

## 📂 Estrutura do Projeto

```
calculadora-imc/
├── css/
│   └── style.css
├── scripts/
│   └── main.js
├── index.html
└── README.md
```

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para propor melhorias ou correções através de pull requests.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido por [Lucas Carvalho](https://github.com/LucasCarvalhoo).

Orientador: Luan Oliveira

---

Projeto desenvolvido como parte do programa Geração Tech do IEL 2025.
