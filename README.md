# MTG Codex - Advanced Card Search

O MTG Codex é uma aplicação web que facilita a busca avançada por cartas do jogo Magic: The Gathering (MTG), utilizando a API pública do Scryfall. Os usuários podem refinar suas pesquisas por critérios como nome da carta, cor, tipo, efeitos, raridade, custo de mana convertido (CMC), poder e resistência. Os resultados são apresentados em formato de cartões com informações detalhadas, incluindo nome da carta, tipo, texto oracular e uma imagem representativa.

## Funcionalidades

* **Busca Avançada**: Permite especificar múltiplos critérios para refinar os resultados de cartas.
* **Visualização Detalhada**: Ao clicar em "View Details", os usuários podem ver uma página detalhada da carta com uma imagem ampliada e informações adicionais.
* **Navegação Intuitiva**: A partir da página de detalhes da carta, os usuários podem retornar facilmente aos resultados da busca usando o link "Back to Search Results".

## Tecnologias Utilizadas

* **Flask**: Framework web em Python utilizado para o backend da aplicação, gerenciando rotas e interações com a API do Scryfall.
* **HTML/CSS/JavaScript**: Frontend para criar uma interface amigável e interativa.
* **Scryfall API**: API pública usada para obter informações detalhadas sobre as cartas do MTG.

## Como Usar

1. Clone o repositório:
   
   ```
   git clone https://github.com/devitruvius/mtg-codex.git
   cd mtg-codex
   ```

2. Instale as dependências usando pip (é recomendável usar um ambiente virtual):

   ```
   pip install -r requirements.txt
   ```
   
3. Execute a aplicação:

   ```
   python app.py
   ```

4. Abra o navegador e acesse <code>http://localhost:5000</code> para ver a aplicação em funcionamento.

## Contribuições

Contribuições são bem-vindas! Se você quiser contribuir para o MTG Codex, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).
