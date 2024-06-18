<img align="center" src="./public/next.svg"/>

# Next Restaurant Management

## Instalacion del Proyecto
1. Ejecutar en la terminal el comanto

```bash
$   npm install
```

2. Renombrar el archivo ```.env.template``` por ```.env``` y asignar valores correspondientes

3. Crear contenedor de PostgreSQL
```bash
$   docker compose up -d
```

4. Correr migraciones
```bash
$   npx prisma db push
```

5. Ejecutar el proyecto en manera de desarrollo y abrir el ```localhost:3000``` 
```bash
$   npm run dev
```
