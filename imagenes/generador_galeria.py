import os
import json

# =====================================================================
# INSTRUCCIONES:
# 1. Guarda este archivo (generador_galeria.py) en LA MISMA CARPETA 
#    donde tienes guardadas tus 200 imágenes.
# 2. Ejecuta este archivo (haciendo doble clic o desde la consola).
# 3. Se creará un archivo llamado "codigo_para_pegar.txt".
# 4. Abre el .txt y pega su contenido en tu archivo HTML.
# =====================================================================

def generar_datos_galeria():
    # Extensiones de imagen que vamos a buscar
    extensiones_validas = ('.jpg', '.jpeg', '.png', '.webp', '.gif')
    
    # Obtener la carpeta donde está este script
    directorio_actual = os.getcwd()
    
    lista_imagenes = []
    
    # Buscar archivos en el directorio actual
    for archivo in os.listdir(directorio_actual):
        if archivo.lower().endswith(extensiones_validas):
            lista_imagenes.append(archivo)
    
    if not lista_imagenes:
        print("❌ No se encontraron imágenes en esta carpeta.")
        return
        
    print(f"✅ Se encontraron {len(lista_imagenes)} imágenes.")
    
    datos_galeria = []
    
    for indice, nombre_archivo in enumerate(lista_imagenes):
        # Intentar extraer ciudad y lugar si el nombre tiene un guión (ej: "San Miguel - Plaza.jpg")
        nombre_sin_ext = os.path.splitext(nombre_archivo)[0]
        
        ciudad = nombre_sin_ext
        lugar = nombre_sin_ext
        
        if "-" in nombre_sin_ext:
            partes = nombre_sin_ext.split("-", 1) # Solo dividir por el primer guión
            ciudad = partes[0].strip()
            lugar = partes[1].strip()
            
        # Crear el diccionario de datos para cada imagen
        item_data = {
            "id": indice + 1,
            "city": ciudad,
            "locationName": lugar,
            # IMPORTANTE: Aquí asume que tu HTML y tu carpeta de imágenes estarán en el mismo lugar
            # o que configuras la ruta correcta. Si las imágenes están en una carpeta llamada "fotos"
            # debes poner: f"./fotos/{nombre_archivo}"
            "imageUrl": f"imagenes/{nombre_archivo}" 
        }
        datos_galeria.append(item_data)
        
    # Convertir a formato JavaScript (JSON)
    js_codigo = "const MY_DELIVERY_POINTS = " + json.dumps(datos_galeria, indent=4, ensure_ascii=False) + ";"
    
    # Guardar en un archivo de texto
    nombre_archivo_salida = "codigo_para_pegar.txt"
    with open(nombre_archivo_salida, 'w', encoding='utf-8') as f:
        f.write(js_codigo)
        
    print(f"\n🎉 ¡Listo! Se ha creado el archivo '{nombre_archivo_salida}'.")
    print("Abre ese archivo, copia todo el texto y reemplaza la sección 'const MY_DELIVERY_POINTS = [...]' en tu HTML.")

if __name__ == "__main__":
    generar_datos_galeria()