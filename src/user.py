""" calculadora de IMC """


class User:
    def __init__(self):
        self.peso_del_usuario = 0
        self.estatura_del_usuario = 0

    def datos_de_usuario(self):
        """ esta funcion captura los datos del usuario """
        self.peso_del_usuario = float(input('¿Cuál es tu peso actual en kg? '))
        self.estatura_del_usuario = float(
            input('¿Cuál es tu estatura en metros? (ejemplo 1.75) '))

    def calcular_imc(self):
        """ esta funcion obtiene el dato de peso y altura del usuario """
        imc_del_usuario = self.peso_del_usuario / \
            (self.estatura_del_usuario ** 2)
        return round(imc_del_usuario, 1)

    def definir_rango_salud(self, imc):
        """ esta funcion clasifica al usuario en un rango de salud"""
        if imc < 18.5:
            return 'bajo peso'
        elif imc > 18.5 and imc < 24.9:
            return 'peso normal'
        elif imc > 25.0 and imc < 29.9:
            return 'sobrepeso'
        elif imc > 30.0 and imc < 34.9:
            return 'obesidad grado 1'
        elif imc > 35.0 and imc < 39.9:
            return 'obecidad grado 2'
        elif imc > 40:
            return 'obecidad grado 3'
        else:
            return 'tu rango esta fuera de los límites'


usuario = User()

usuario.datos_de_usuario()

resultado_imc = usuario.calcular_imc()


print(f'El resultado de tu IMC es de {resultado_imc}')
print(usuario.definir_rango_salud(resultado_imc))
