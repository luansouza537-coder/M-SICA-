-- CreateEnum
CREATE TYPE "AlbumType" AS ENUM ('ALBUM', 'EP', 'SINGLE', 'COMPILATION', 'LIVE');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genres" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "artists" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sortName" TEXT,
    "musicbrainzId" TEXT,
    "imageUrl" TEXT,
    "bio" TEXT,
    "country" TEXT,
    "formedYear" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "artists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "artist_genres" (
    "artistId" TEXT NOT NULL,
    "genreId" TEXT NOT NULL,

    CONSTRAINT "artist_genres_pkey" PRIMARY KEY ("artistId","genreId")
);

-- CreateTable
CREATE TABLE "albums" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" "AlbumType" NOT NULL DEFAULT 'ALBUM',
    "releaseDate" TIMESTAMP(3),
    "coverUrl" TEXT,
    "musicbrainzId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "artistId" TEXT NOT NULL,

    CONSTRAINT "albums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tracks" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "trackNumber" INTEGER,
    "discNumber" INTEGER,
    "durationMs" INTEGER,
    "musicbrainzId" TEXT,
    "albumId" TEXT NOT NULL,

    CONSTRAINT "tracks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "genres_name_key" ON "genres"("name");

-- CreateIndex
CREATE UNIQUE INDEX "genres_slug_key" ON "genres"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "artists_musicbrainzId_key" ON "artists"("musicbrainzId");

-- CreateIndex
CREATE INDEX "artists_name_idx" ON "artists"("name");

-- CreateIndex
CREATE UNIQUE INDEX "albums_musicbrainzId_key" ON "albums"("musicbrainzId");

-- CreateIndex
CREATE INDEX "albums_artistId_idx" ON "albums"("artistId");

-- CreateIndex
CREATE UNIQUE INDEX "tracks_musicbrainzId_key" ON "tracks"("musicbrainzId");

-- CreateIndex
CREATE INDEX "tracks_albumId_idx" ON "tracks"("albumId");

-- AddForeignKey
ALTER TABLE "artist_genres" ADD CONSTRAINT "artist_genres_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "artists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "artist_genres" ADD CONSTRAINT "artist_genres_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "genres"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "albums" ADD CONSTRAINT "albums_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "artists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tracks" ADD CONSTRAINT "tracks_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "albums"("id") ON DELETE CASCADE ON UPDATE CASCADE;
