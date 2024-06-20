from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

SCRYFALL_API_URL = "https://api.scryfall.com/cards/search"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('query', '')
    color = request.args.get('color', '')
    card_type = request.args.get('type', '')
    effect = request.args.get('effect', '')
    rarity = request.args.get('rarity', '')
    cmc = request.args.get('cmc', '')
    power = request.args.get('power', '')
    toughness = request.args.get('toughness', '')

    search_params = []
    if query:
        search_params.append(f'name:"{query}"')
    if color:
        color_symbols = ''.join([c for c in color if c in 'WUBRGC'])
        search_params.append(f'c:{color_symbols}')
    if card_type:
        search_params.append(f't:{card_type}')
    if effect:
        search_params.append(f'o:"{effect}"')
    if rarity:
        search_params.append(f'r:{rarity}')
    if cmc:
        search_params.append(f'cmc:{cmc}')
    if power:
        search_params.append(f'pow:{power}')
    if toughness:
        search_params.append(f'tou:{toughness}')

    search_query = ' '.join(search_params)
    response = requests.get(f'{SCRYFALL_API_URL}?q={search_query}')

    if response.status_code == 200:
        cards = response.json()
        return jsonify(cards)
    else:
        return jsonify({"error": "Unable to fetch data from Scryfall"}), 500

@app.route('/card_details/<card_id>')
def card_details(card_id):
    try:
        response = requests.get(f'https://api.scryfall.com/cards/{card_id}')
        if response.status_code == 200:
            card = response.json()
            return render_template('card_details.html', card=card)
        else:
            return jsonify({"error": "Card not found"}), 404
    except requests.exceptions.RequestException as e:
        return jsonify({"error": str(e)}), 500