# MTG Codex - Advanced Card Search

MTG Codex is a web application that facilitates advanced searching for Magic: The Gathering (MTG) cards, using the public API from Scryfall. Users can refine their searches based on criteria such as card name, color, type, effects, rarity, converted mana cost (CMC), power, and toughness. Results are displayed in card format with detailed information, including card name, type, oracle text, and a representative image.

## Features

* **Advanced Search**: Allows users to specify multiple criteria to refine card results.
* **Detailed View**: Clicking on "View Details" enables users to see a detailed card page with an enlarged image and additional information
* **Intuitive Navigation**: From the card detail page, users can easily return to search results using the "Back to Search Results" link.

## Technologies Used

* **Flask**: Python web framework used for the backend of the application, handling routes and interactions with the Scryfall API.
* **HTML/CSS/JavaScript**: Frontend technologies used to create a user-friendly and interactive interface.
* **Scryfall API**: Public API used to retrieve detailed information about MTG cards.

## Installation

1. Clone the repository:
   
   ```
   git clone https://github.com/devitruvius/mtg-codex.git
   cd mtg-codex
   ```
   
2. Create a virtual environment:

   ```
   python -m venv venv
   ```

3. Activate the virtual environment:

* On Windows:
  
   ```
   venv\Scripts\activate
   ```
   
* On Unix or MacOS:

   ```
   source venv/bin/activate
   ```

4. Install dependencies:

   ```
   pip install -r requirements.txt
   ```
   
5. Run the application:

   ```
   python app.py
   ```

6. Open a web browser and go to <code>http://localhost:5000</code> to see the application in action.

## Contribution

Contributions are welcome! If you'd like to contribute to MTG Codex, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Acknowledgements

Special thanks to all developers and contributors of open-source libraries and APIs that made this project possible.
