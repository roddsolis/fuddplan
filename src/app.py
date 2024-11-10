""" backend fuddplan """
import os
from flask import Flask, jsonify, request
from flask_migrate import Migrate
from flask_cors import CORS
from dotenv import load_dotenv
# Asegúrate de tener un modelo User o similar para guardar los datos
from models import db, User

load_dotenv()  # cargar las variables de entorno

app = Flask(__name__)
CORS(app)

app.config['DEBUG'] = True
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASEURI')

db.init_app(app)
migrate = Migrate(app, db)
CORS(app, origins=["http://localhost:3000"])


@app.route('/')
def main():
    return jsonify({"status": "Server Up"}), 200


@app.route('/user_data', methods=['POST'])
def obtener_datos_personales():
    datos = request.get_json()
    nombre = datos.get('nombre')
    apellidos = datos.get('apellidos')
    email = datos.get('email')
    edad = datos.get('edad')
    sexo = datos.get('sexo')

    # Crear un nuevo usuario (ajusta según tu modelo)
    nuevo_usuario = User(nombre=nombre, apellidos=apellidos,
                         email=email, edad=edad, sexo=sexo)
    db.session.add(nuevo_usuario)
    db.session.commit()

    return jsonify({"status": "Datos guardados correctamente"}), 201


if __name__ == '__main__':
    app.run(debug=True)
