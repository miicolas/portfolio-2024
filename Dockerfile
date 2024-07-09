# Étape 1 : Construction de l'image de base
FROM node:18 AS builder

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Installer pnpm
RUN npm install -g pnpm

# Installer les dépendances du projet
RUN pnpm install

# Copier le reste des fichiers du projet
COPY . .

# Construire le projet Next.js
RUN pnpm build

# Étape 2 : Création de l'image finale
FROM node:18-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les dépendances de production depuis l'étape de build
COPY --from=builder /app/node_modules ./node_modules

# Copier les fichiers de build du projet
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./

# Copier les fichiers statiques du répertoire public
COPY --from=builder /app/public ./public

# Installer pnpm dans l'image finale
RUN npm install -g pnpm

# Exposer le port sur lequel l'application tourne
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["pnpm", "start"]
