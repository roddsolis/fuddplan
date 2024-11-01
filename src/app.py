""" backend fuddplan """
import os
from flask import Flask, jsonify
from flask_migrate import Migrate
from flask_cors import CORS
from dotenv import load_dotenv
from models import db


load_dotenv()  # cargar las variables de entorno

app = Flask(__name__)
CORS(app)


app.config['DEBUG'] = True  # Permite ver los errores
app.config['ENV'] = 'development'  # Activa el servidor en modo desarrollo
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv(
    'DATABASEURI')  # Leemos la url de conexion a la base de datos

migrate = Migrate(app, db)
db.init_app(app)


@app.route('/')
def main():
    return jsonify({"status": "Server Up"}), 200


@app.route('/user_data', method=['GET'])
def obtener_datos_personales():
    return 'datos personales del usuario'


if __name__ == '__main__':
    app.run(debug=True)
