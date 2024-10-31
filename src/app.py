""" calculadora de IMC """

def calcular_imc():
    """ esta funcion obtiene el dato de peso y altura del usuario """
    peso_del_usuario = float(input('¿Cuál es tu peso actual en kg? '))
    estatura_del_usuario = float(input('¿Cuál es tu estatura en metros? (por ejemplo, 1.75) '))
    imc_del_usuario = peso_del_usuario / (estatura_del_usuario ** 2)
    return round(imc_del_usuario,1)



resultado_imc = calcular_imc()

""" aca se define el rango de salud del usuario """
if resultado_imc < 18.5:
    print('bajo peso')
elif resultado_imc > 18.5 and resultado_imc < 24.9:
    print('peso normal')
elif resultado_imc > 25.0 and resultado_imc < 29.9:
    print('sobrepeso')
elif resultado_imc > 30.0 and resultado_imc < 34.9:
    print('obesidad grado 1')
elif resultado_imc > 35.0 and resultado_imc < 39.9:
    print('obecidad grado 2')
elif resultado_imc > 40:
    print('obecidad grado 3')
else:
    print('ocurrio un error intenta nuevamente')
